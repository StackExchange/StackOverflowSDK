import { AuthConfig } from './types.js';

/**
 * Frontend authentication client for Stack Overflow Enterprise
 * This client communicates with your backend API to handle OAuth flows securely.
 * The backend performs all PKCE operations and token exchanges.
 */
export class FrontendAuthClient {
  private config: AuthConfig;
  private apiBaseUrl: string;

  /**
   * Creates a new frontend authentication client
   * @param config - Authentication configuration for Stack Overflow Enterprise
   * @param apiBaseUrl - Base URL of your backend API that handles OAuth operations
   */
  constructor(config: AuthConfig, apiBaseUrl: string = '/api') {
    this.config = config;
    this.apiBaseUrl = apiBaseUrl;
  }

  /**
   * Start the authentication process by requesting an authorization URL from your backend
   * Your backend will generate PKCE tokens and return the authorization URL
   * 
   * @returns Promise resolving to the authorization URL where users should be redirected
   * @throws {Error} When the backend request fails
   * @example
   * ```typescript
   * const authUrl = await frontendClient.startAuth();
   * window.location.href = authUrl; // Redirect user to Stack Overflow Enterprise
   * ```
   */
  async startAuth(): Promise<string> {
    try {
      const response = await this.requestAPI<{ authUrl: string }>('auth/start');
      return response.authUrl;
    } catch (error) {
      throw new Error(`Failed to start authentication: ${error}`);
    }
  }

  /**
   * Complete the authentication process by sending the callback parameters to your backend
   * Your backend will validate the state, exchange the code for tokens, and store them securely
   * 
   * @param code - The authorization code received from Stack Overflow Enterprise callback
   * @param state - The state parameter received from Stack Overflow Enterprise callback
   * @throws {Error} When the backend request fails or authentication is invalid
   * @example
   * ```typescript
   * // In your callback page/component:
   * const urlParams = new URLSearchParams(window.location.search);
   * const code = urlParams.get('code');
   * const state = urlParams.get('state');
   * 
   * if (code && state) {
   *   await frontendClient.completeAuth(code, state);
   *   // User is now authenticated, redirect to main app
   * }
   * ```
   */
  async completeAuth(code: string, state: string): Promise<void> {
    try {
      await this.requestAPI('callback', 'GET', undefined, [
        `code=${encodeURIComponent(code)}`,
        `state=${encodeURIComponent(state)}`,
      ]);
    } catch (error) {
      throw new Error(`Failed to complete authentication: ${error}`);
    }
  }

  /**
   * Check if the user is currently authenticated
   * Verifies with your backend whether valid authentication exists (e.g., via HTTP-only cookies)
   * 
   * @returns Promise resolving to true if authenticated, false otherwise
   * @example
   * ```typescript
   * const isAuthenticated = await frontendClient.getAuthStatus();
   * if (!isAuthenticated) {
   *   // Redirect to login
   * }
   * ```
   */
  async getAuthStatus(): Promise<boolean> {
    try {
      await this.requestAPI('authStatus');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Log out the current user
   * Clears authentication state on your backend (e.g., removes HTTP-only cookies, clears tokens)
   * 
   * @returns Promise resolving to true if logout was successful, false otherwise
   * @example
   * ```typescript
   * const loggedOut = await frontendClient.logout();
   * if (loggedOut) {
   *   // Redirect to login page
   * }
   * ```
   */
  async logout(): Promise<boolean> {
    try {
      await this.requestAPI('logout', 'POST');
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Submit an access token directly (for cases where user provides their own token)
   * Allows users to manually provide a Stack Overflow Enterprise access token
   * 
   * @param token - The Stack Overflow Enterprise access token
   * @returns Promise resolving to true if token was accepted, false otherwise
   * @example
   * ```typescript
   * // If user has a personal access token:
   * const success = await frontendClient.submitAccessToken(userProvidedToken);
   * if (success) {
   *   // Token stored successfully
   * }
   * ```
   */
  async submitAccessToken(token: string): Promise<boolean> {
    try {
      await this.requestAPI('auth/token', 'POST', { accessToken: token });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Handle the OAuth callback in the current page
   * Parses the current URL for OAuth callback parameters and completes authentication
   * 
   * @returns Promise resolving when authentication is complete
   * @throws {Error} When callback parameters are missing or authentication fails
   * @example
   * ```typescript
   * // In your OAuth callback page:
   * try {
   *   await frontendClient.handleCallback();
   *   // Success - user is authenticated
   *   window.location.href = '/dashboard';
   * } catch (error) {
   *   // Handle error
   *   console.error('Authentication failed:', error);
   * }
   * ```
   */
  async handleCallback(): Promise<void> {
    const url = new URL(window.location.href);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const error = url.searchParams.get('error');

    if (error) {
      throw new Error(`OAuth error: ${error}`);
    }

    if (!code || !state) {
      throw new Error('Authorization code or state not found in callback URL');
    }

    await this.completeAuth(code, state);
  }

  /**
   * Make a request to your backend API
   * Internal utility method for communicating with your authentication backend
   * 
   * @param endpoint - API endpoint path
   * @param method - HTTP method (defaults to 'GET')
   * @param body - Request body for POST/PUT requests
   * @param queryParams - Query parameters to append to the URL
   * @returns Promise resolving to the API response
   * @private
   */
  private async requestAPI<T = any>(
    endpoint: string,
    method: string = 'GET',
    body?: any,
    queryParams?: string[]
  ): Promise<T> {
    const url = new URL(`${this.apiBaseUrl}/${endpoint}`, window.location.origin);
    
    if (queryParams) {
      url.search = queryParams.join('&');
    }

    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important for HTTP-only cookies
    };

    if (body && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url.toString(), options);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${errorText}`);
    }

    // Return empty object for successful requests with no content
    if (response.status === 204 || response.headers.get('content-length') === '0') {
      return {} as T;
    }

    return response.json();
  }
}