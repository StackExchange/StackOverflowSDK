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
    
    // Clean up the stack trace to hide internal error handling
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Get a concise error summary for debugging
   */
  getDebugInfo() {
    return {
      name: this.name,
      message: this.message,
      operation: this.operation,
      statusCode: this.statusCode,
      responseBody: this.responseBody?.substring(0, 200) + (this.responseBody && this.responseBody.length > 200 ? '...' : ''),
      originalErrorMessage: this.originalError?.message,
    };
  }

  /**
   * Clean toString that's less noisy
   */
  override toString(): string {
    return `${this.name}: ${this.message}`;
  }
}

export class AuthenticationError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Authentication failed for ${operation}. Please check your access token.`,
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
      `Access token expired for ${operation}. Please refresh your token.`,
      operation,
      originalError,
      401, // Token expired is usually still 401
      responseBody,
      responseHeaders
    );
    this.name = 'TokenExpiredError';
  }
}

export class ForbiddenError extends SDKError {
  constructor(operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(
      `Access forbidden for ${operation}. Insufficient permissions.`,
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
      `Resource not found for ${operation}.`,
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
      `Failed to parse response for ${operation}. Unexpected response format.`,
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
function extractResponseDetails(error: any): {
  statusCode?: number;
  responseBody?: string;
  responseHeaders?: Record<string, string>;
} {
  // Extract status code - check multiple possible locations
  const statusCode = error.code || 
                    error.status || 
                    error.statusCode || 
                    error.originalError?.status || 
                    error.originalError?.response?.status ||
                    error.response?.status;

  // Extract headers
  let responseHeaders = error.headers || 
                       error.originalError?.headers || 
                       error.response?.headers;

  // Extract response body
  let responseBody = error.body || 
                    error.responseText ||
                    error.originalError?.response?.data ||
                    error.response?.data;

  // Convert body to string if it's not already
  if (responseBody && typeof responseBody !== 'string') {
    try {
      responseBody = JSON.stringify(responseBody);
    } catch {
      responseBody = String(responseBody);
    }
  }

  return { statusCode, responseBody, responseHeaders };
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
  const errorMessage = error.message?.toLowerCase() || '';
  
  // Token/Authentication issues - check both body and message
  if (bodyLower.includes('invalid bearer token') || 
      bodyLower.includes('invalid token') ||
      errorMessage.includes('invalid bearer token')) {
    return new AuthenticationError(operation, error, responseBody, responseHeaders);
  }

  // Token expiration keywords
  if (bodyLower.includes('token expired') || 
      bodyLower.includes('token invalid') ||
      bodyLower.includes('please refresh') ||
      errorMessage.includes('token expired')) {
    return new TokenExpiredError(operation, error, responseBody, responseHeaders);
  }

  // Status code based classification
  switch (statusCode) {
    case 401:
      // For 401, determine if it's expired or invalid token
      if (bodyLower.includes('expired') || errorMessage.includes('expired')) {
        return new TokenExpiredError(operation, error, responseBody, responseHeaders);
      }
      return new AuthenticationError(operation, error, responseBody, responseHeaders);
    
    case 403:
      return new ForbiddenError(operation, error, responseBody, responseHeaders);
    
    case 404:
      return new NotFoundError(operation, error, responseBody, responseHeaders);
  }

  // Content parsing issues
  if (errorMessage.includes('cannot parse content') || 
      errorMessage.includes('no content-type defined')) {
    return new ContentParseError(operation, error, responseBody, responseHeaders);
  }

  // Server errors
  if (statusCode && statusCode >= 500) {
    return new SDKError(
      `Server error (${statusCode}) for ${operation}`,
      operation,
      error,
      statusCode,
      responseBody,
      responseHeaders
    );
  }

  // Default case
  return new SDKError(
    `Request failed for ${operation}: ${error.message || 'Unknown error'}`,
    operation,
    error,
    statusCode,
    responseBody,
    responseHeaders
  );
}

/**
 * Main error handler for all API calls
 */
export async function handleApiCall<T>(
  apiCall: () => Promise<T>, 
  operation: string
): Promise<T> {
  try {
    return await apiCall();
  } catch (error: any) {
    // Extract response details
    const { statusCode, responseBody, responseHeaders } = extractResponseDetails(error);

    // Classify and throw appropriate error
    const classifiedError = classifyError(operation, error, statusCode, responseBody, responseHeaders);
    throw classifiedError;
  }
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
 * Get user-friendly error message for display
 */
export function getUserFriendlyMessage(error: any): string {
  if (error instanceof AuthenticationError) {
    return 'Authentication failed. Please check your credentials.';
  }
  if (error instanceof TokenExpiredError) {
    return 'Your session has expired. Please log in again.';
  }
  if (error instanceof ForbiddenError) {
    return 'You do not have permission to perform this action.';
  }
  if (error instanceof NotFoundError) {
    return 'The requested resource was not found.';
  }
  if (error instanceof SDKError) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
}