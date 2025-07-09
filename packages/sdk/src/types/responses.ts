export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    hasNext: boolean;
    hasPrevious: boolean;
    nextCursor?: string;
    previousCursor?: string;
    totalCount?: number;
  };
}

export interface SDKError {
  code: string;
  message: string;
  statusCode?: number;
  originalError?: any;
}