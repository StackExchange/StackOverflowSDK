export class SDKError extends Error {
  constructor(
    message: string,
    public readonly operation: string,
    public readonly originalError?: any,
    public readonly statusCode?: number,
    public readonly responseBody?: string,
    public readonly responseHeaders?: Record<string, string>
  ) {
    super(message);
    this.name = 'SDKError';
  }

  /**
   * Get a detailed error summary for debugging
   */
  getDebugInfo() {
    return {
      name: this.name,
      message: this.message,
      operation: this.operation,
      statusCode: this.statusCode,
      responseBody: this.responseBody,
      responseHeaders: this.responseHeaders,
      originalErrorMessage: this.originalError?.message,
      stack: this.stack
    };
  }
}

export class AuthenticationError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Authentication failed. Please check your access token and API URL. Operation: ${operation}`,
      operation,
      originalError,
      401,
      responseBody,
      responseHeaders
    );
    this.name = 'AuthenticationError';
  }
}

export class TokenExpiredError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Access token expired. Please refresh your token and try again. Operation: ${operation}`,
      operation,
      originalError,
      402,
      responseBody,
      responseHeaders
    );
    this.name = 'TokenExpiredError';
  }
}

export class ForbiddenError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Access forbidden. You may not have permission for this operation: ${operation}`,
      operation,
      originalError,
      403,
      responseBody,
      responseHeaders
    );
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Resource not found for operation: ${operation}. Check if the resource ID exists.`,
      operation,
      originalError,
      404,
      responseBody,
      responseHeaders
    );
    this.name = 'NotFoundError';
  }
}

export class ContentParseError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Failed to parse response content for operation: ${operation}. Server returned an unexpected response format.`,
      operation,
      originalError,
      500,
      responseBody,
      responseHeaders
    );
    this.name = 'ContentParseError';
  }
}

/**
 * Extract response details from various error formats
 */
async function extractResponseDetails(error: any): Promise<{
  statusCode?: number;
  responseBody?: string;
  responseHeaders?: Record<string, string>;
}> {
  const details: any = {};

  // Try to extract status code from various places
  details.statusCode = error.status || 
                      error.statusCode || 
                      error.originalError?.status || 
                      error.originalError?.response?.status ||
                      error.response?.status;

  // Try to extract headers
  if (error.headers) {
    details.responseHeaders = error.headers;
  } else if (error.originalError?.headers) {
    details.responseHeaders = error.originalError.headers;
  } else if (error.response?.headers) {
    details.responseHeaders = error.response.headers;
  }

  // Try to extract response body
  try {
    if (error.originalError?.response?.text && typeof error.originalError.response.text === 'function') {
      details.responseBody = await error.originalError.response.text();
    } else if (error.originalError?.response?.data) {
      details.responseBody = String(error.originalError.response.data);
    } else if (error.response?.data) {
      details.responseBody = String(error.response.data);
    } else if (error.responseText) {
      details.responseBody = error.responseText;
    }
  } catch (e) {
    // If we can't extract the body, that's okay
    details.responseBody = 'Unable to extract response body';
  }

  return details;
}

/**
 * Determine error type based on response content and status
 */
function classifyError(
  operation: string, 
  error: any, 
  statusCode?: number, 
  responseBody?: string, 
  responseHeaders?: Record<string, string>
): SDKError {
  
  // Check response body content for clues
  const bodyLower = responseBody?.toLowerCase() || '';
  
  // Authentication-related keywords in response
  if (bodyLower.includes('unauthorized') || 
      bodyLower.includes('invalid token') || 
      bodyLower.includes('authentication failed') ||
      bodyLower.includes('access denied')) {
    return new AuthenticationError(operation, error, responseBody, responseHeaders);
  }

  // Token expiration keywords
  if (bodyLower.includes('token expired') || 
      bodyLower.includes('token invalid') ||
      bodyLower.includes('please refresh')) {
    return new TokenExpiredError(operation, error, responseBody, responseHeaders);
  }

  // Forbidden access
  if (bodyLower.includes('forbidden') || 
      bodyLower.includes('permission denied') ||
      statusCode === 403) {
    return new ForbiddenError(operation, error, responseBody, responseHeaders);
  }

  // Not found
  if (bodyLower.includes('not found') || statusCode === 404) {
    return new NotFoundError(operation, error, responseBody, responseHeaders);
  }

  // Authentication based on status codes
  if (statusCode === 401) {
    return new AuthenticationError(operation, error, responseBody, responseHeaders);
  }

  // Content parsing issues (no Content-Type header)
  if (error.message?.includes('Cannot parse content') || 
      error.message?.includes('No Content-Type defined')) {
    
    // If status suggests auth issue, classify as such
    if (statusCode === 401 || statusCode === 403) {
      return new AuthenticationError(operation, error, responseBody, responseHeaders);
    }
    
    return new ContentParseError(operation, error, responseBody, responseHeaders);
  }

  // Server errors
  if (statusCode && statusCode >= 500) {
    return new SDKError(
      `Server error (${statusCode}) for operation: ${operation}`,
      operation,
      error,
      statusCode,
      responseBody,
      responseHeaders
    );
  }

  // Default case
  return new SDKError(
    `API call failed for ${operation}: ${error.message || error}`,
    operation,
    error,
    statusCode,
    responseBody,
    responseHeaders
  );
}

/**
 * Enhanced centralized error handler for all API calls
 */
export async function handleApiCall<T>(
  apiCall: () => Promise<T>, 
  operation: string,
  debug = false
): Promise<T> {
  try {
    return await apiCall();
  } catch (error: any) {
    if (debug) {
      console.error(`🚨 API Error for ${operation}:`, {
        message: error.message,
        status: error.status,
        originalError: error
      });
    }

    // Extract response details
    const { statusCode, responseBody, responseHeaders } = await extractResponseDetails(error);

    if (debug) {
      console.error(`🔍 Extracted details:`, {
        statusCode,
        responseBody: responseBody?.substring(0, 200) + (responseBody?.length > 200 ? '...' : ''),
        responseHeaders
      });
    }

    // Classify and throw appropriate error
    const classifiedError = classifyError(operation, error, statusCode, responseBody, responseHeaders);
    
    if (debug) {
      console.error(`📋 Error classified as:`, classifiedError.name);
      console.error(`📋 Full error details:`, classifiedError.getDebugInfo());
    }

    throw classifiedError;
  }
}

/**
 * Enhanced error handler with automatic debugging for development
 */
export async function handleApiCallWithDebug<T>(
  apiCall: () => Promise<T>, 
  operation: string
): Promise<T> {
  return handleApiCall(apiCall, operation, true);
}

/**
 * Utility to check if an error is authentication-related
 */
export function isAuthenticationError(error: any): error is AuthenticationError | TokenExpiredError {
  return error instanceof AuthenticationError || error instanceof TokenExpiredError;
}

/**
 * Utility to check if an error is recoverable (retry-able)
 */
export function isRecoverableError(error: any): boolean {
  if (error instanceof TokenExpiredError) return true; // Can refresh token
  if (error instanceof ContentParseError) return true; // Might be temporary
  if (error.statusCode && error.statusCode >= 500) return true; // Server errors
  return false;
}

/**
 * Enhanced wrapper for your existing error types that adds response inspection
 */
export async function enhancedHandleApiCall<T>(
  apiCall: () => Promise<T>, 
  operation: string
): Promise<T> {
  try {
    return await apiCall();
  } catch (error: any) {
    // Extract additional details
    const { statusCode, responseBody, responseHeaders } = await extractResponseDetails(error);
    
    // Check for the specific ObjectSerializer error (usually auth issues)
    if (error.message?.includes('Cannot parse content. No Content-Type defined')) {
      // Try to determine the real cause based on response details
      if (statusCode === 401 || responseBody?.toLowerCase().includes('unauthorized')) {
        throw new AuthenticationError(operation, error, responseBody, responseHeaders);
      } else if (statusCode === 403 || responseBody?.toLowerCase().includes('forbidden')) {
        throw new ForbiddenError(operation, error, responseBody, responseHeaders);
      } else {
        throw new TokenExpiredError(operation, error, responseBody, responseHeaders);
      }
    }
    
    // Check for specific HTTP status codes with enhanced details
    switch (statusCode || error.status) {
      case 401:
        throw new AuthenticationError(operation, error, responseBody, responseHeaders);
      case 402:
        throw new TokenExpiredError(operation, error, responseBody, responseHeaders);
      case 403:
        throw new ForbiddenError(operation, error, responseBody, responseHeaders);
      case 404:
        throw new NotFoundError(operation, error, responseBody, responseHeaders);
      default:
        // For other errors, provide more context
        throw new SDKError(
          `API call failed for ${operation}: ${error.message || error}`,
          operation,
          error,
          statusCode || error.status,
          responseBody,
          responseHeaders
        );
    }
  }
}