export interface AuthConfig {
  clientId: string;
  redirectUri: string;
  scopes?: string[];
  customAuthUrl?: string;
}

export interface SDKConfig {
  baseUrl: string;
  accessToken?: string;
  auth?: AuthConfig;
  fetchApi?: typeof fetch;
  timeout?: number;
  retryConfig?: {
    maxRetries: number;
    backoff: 'linear' | 'exponential';
    baseDelay: number;
  };
}