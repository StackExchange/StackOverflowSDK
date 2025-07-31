// client/shared/errors.ts - Centralized error handling
export class SDKError extends Error {
  constructor(
    message: string,
    public readonly operation: string,
    public readonly originalError?: any,
    public readonly statusCode?: number
  ) {
    super(message);
    this.name = 'SDKError';
  }
}

export class AuthenticationError extends SDKError {
  constructor(operation: string, originalError?: any) {
    super(
      `Authentication failed. Please check your access token and API URL. Operation: ${operation}`,
      operation,
      originalError,
      401
    );
    this.name = 'AuthenticationError';
  }
}

export class TokenExpiredError extends SDKError {
  constructor(operation: string, originalError?: any) {
    super(
      `Access token expired. Please refresh your token and try again. Operation: ${operation}`,
      operation,
      originalError,
      402
    );
    this.name = 'TokenExpiredError';
  }
}

export class ForbiddenError extends SDKError {
  constructor(operation: string, originalError?: any) {
    super(
      `Access forbidden. You may not have permission for this operation: ${operation}`,
      operation,
      originalError,
      403
    );
    this.name = 'ForbiddenError';
  }
}

export class NotFoundError extends SDKError {
  constructor(operation: string, originalError?: any) {
    super(
      `Resource not found for operation: ${operation}. Check if the resource ID exists.`,
      operation,
      originalError,
      404
    );
    this.name = 'NotFoundError';
  }
}

/**
 * Centralized error handler for all API calls
 */
export async function handleApiCall<T>(
  apiCall: () => Promise<T>, 
  operation: string
): Promise<T> {
  try {
    return await apiCall();
  } catch (error: any) {
    // Check for the specific ObjectSerializer error (usually auth issues)
    if (error.message?.includes('Cannot parse content. No Content-Type defined')) {
      throw new TokenExpiredError(operation, error);
    }
    
    // Check for specific HTTP status codes
    switch (error.status) {
      case 401:
        throw new AuthenticationError(operation, error);
      case 402:
        throw new TokenExpiredError(operation, error);
      case 403:
        throw new ForbiddenError(operation, error);
      case 404:
        throw new NotFoundError(operation, error);
      default:
        // For other errors, provide more context
        throw new SDKError(
          `API call failed for ${operation}: ${error.message || error}`,
          operation,
          error,
          error.status
        );
    }
  }
}