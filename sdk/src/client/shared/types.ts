export interface PaginationOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
}

export interface SDKConfig {
  accessToken?: string;
  baseUrl?: string;
}

// Common response interfaces that might be shared across clients
export interface ApiResponse<T> {
  totalCount: number,
  pageSize: number,
  page: number,
  totalPages: number,
  items: T;
}