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
    
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

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

  override toString(): string {
    return `${this.name}: ${this.message}`;
  }
}

export class AuthenticationError extends SDKError {
  constructor(message: string, operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(message, operation, originalError, 401, responseBody, responseHeaders);
    this.name = 'AuthenticationError';
  }
}

export class TokenExpiredError extends SDKError {
  constructor(message: string, operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(message, operation, originalError, 401, responseBody, responseHeaders);
    this.name = 'TokenExpiredError';
  }
}

export class ForbiddenError extends SDKError {
  constructor(message: string, operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(message, operation, originalError, 403, responseBody, responseHeaders);
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends SDKError {
  constructor(message: string, operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(message, operation, originalError, 404, responseBody, responseHeaders);
    this.name = 'NotFoundError';
  }
}

export class ContentParseError extends SDKError {
  constructor(message: string, operation: string, originalError?: any, responseBody?: string, responseHeaders?: Record<string, string>) {
    super(message, operation, originalError, 500, responseBody, responseHeaders);
    this.name = 'ContentParseError';
  }
}

/**
 * Extract and format error message from API response
 */
function extractErrorMessage(responseBody?: string, fallbackMessage?: string): string {
  if (!responseBody) {
    return fallbackMessage || 'An error occurred';
  }

  try {
    const parsed = JSON.parse(responseBody);
    
    // Try common API error message fields in order of preference
    return parsed.detail ||           // Your API uses 'detail'
           parsed.message ||          // Common field
           parsed.error ||            // Common field
           parsed.title ||            // Your API has 'title' as backup
           parsed.error_description || // OAuth style
           fallbackMessage ||
           'An error occurred';
  } catch {
    // If not JSON, return the raw body (up to reasonable length) or fallback
    return responseBody.length > 100 
      ? responseBody.substring(0, 100) + '...' 
      : responseBody || fallbackMessage || 'An error occurred';
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
  const statusCode = error.code || 
                    error.status || 
                    error.statusCode || 
                    error.originalError?.status || 
                    error.originalError?.response?.status ||
                    error.response?.status;

  let responseHeaders = error.headers || 
                       error.originalError?.headers || 
                       error.response?.headers;

  let responseBody = error.body || 
                    error.responseText ||
                    error.originalError?.response?.data ||
                    error.response?.data;

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
 * Determine error type and extract API message
 */
function classifyError(
  operation: string, 
  error: any, 
  statusCode?: number, 
  responseBody?: string, 
  responseHeaders?: Record<string, string>
): SDKError {
  
  const bodyLower = responseBody?.toLowerCase() || '';
  const errorMessage = error.message?.toLowerCase() || '';
  
  // Extract the actual error message from API response
  const apiMessage = extractErrorMessage(responseBody);
  
  // Token/Authentication issues - check both body and message
  if (bodyLower.includes('invalid bearer token') || 
      bodyLower.includes('invalid token') ||
      errorMessage.includes('invalid bearer token')) {
    return new AuthenticationError(apiMessage, operation, error, responseBody, responseHeaders);
  }

  // Token expiration keywords
  if (bodyLower.includes('token expired') || 
      bodyLower.includes('token invalid') ||
      bodyLower.includes('please refresh') ||
      errorMessage.includes('token expired')) {
    return new TokenExpiredError(apiMessage, operation, error, responseBody, responseHeaders);
  }

  // Status code based classification
  switch (statusCode) {
    case 401:
      if (bodyLower.includes('expired') || errorMessage.includes('expired')) {
        return new TokenExpiredError(apiMessage, operation, error, responseBody, responseHeaders);
      }
      return new AuthenticationError(apiMessage, operation, error, responseBody, responseHeaders);
    
    case 403:
      return new ForbiddenError(apiMessage, operation, error, responseBody, responseHeaders);
    
    case 404:
      return new NotFoundError(apiMessage, operation, error, responseBody, responseHeaders);
  }

  // Content parsing issues - use fallback since this is client-side
  if (errorMessage.includes('cannot parse content') || 
      errorMessage.includes('no content-type defined')) {
    const parseMessage = extractErrorMessage(responseBody, `Failed to parse response for ${operation}`);
    return new ContentParseError(parseMessage, operation, error, responseBody, responseHeaders);
  }

  // Server errors
  if (statusCode && statusCode >= 500) {
    return new SDKError(apiMessage, operation, error, statusCode, responseBody, responseHeaders);
  }

  // Default case
  const defaultMessage = extractErrorMessage(responseBody, `Request failed for ${operation}: ${error.message || 'Unknown error'}`);
  return new SDKError(defaultMessage, operation, error, statusCode, responseBody, responseHeaders);
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
    const { statusCode, responseBody, responseHeaders } = extractResponseDetails(error);
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
  if (error instanceof TokenExpiredError) return true;
  if (error instanceof ContentParseError) return true;
  if (error.statusCode && error.statusCode >= 500) return true;
  return false;
}

/**
 * Get user-friendly error message - now just returns the API message
 */
export function getUserFriendlyMessage(error: any): string {
  if (error instanceof SDKError) {
    return error.message; // This is now the API's message
  }
  return 'An unexpected error occurred. Please try again.';
}