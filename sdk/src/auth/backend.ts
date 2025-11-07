import { AuthConfig, TokenResponse, PKCETokens } from './types.js';
import crypto from 'crypto';

/**
 * Backend authentication client for Stack Overflow Internal Enterprise using PKCE flow
 * Designed for server-side Node.js environments with access to crypto module
 */
export class BackendAuthClient {
  private config: AuthConfig;

  /**
   * Creates a new backend authentication client
   * @param config - Authentication configuration for Stack Overflow Internal Enterprise
   */
  constructor(config: AuthConfig) {
    this.config = config;
  }

  /**
   * Generate PKCE tokens using Node.js crypto (backend)
   * Creates cryptographically secure code verifier, challenge, and state parameters
   * 
   * @returns Promise resolving to PKCE tokens needed for secure OAuth flow
   * @example
   * ```typescript
   * const { codeVerifier, codeChallenge, state } = await authClient.generatePKCETokens();
   * // Store codeVerifier and state securely for later use
   * ```
   */
  async generatePKCETokens(): Promise<PKCETokens> {
    // Use Node.js crypto for backend
    const codeVerifier = crypto.randomBytes(32).toString('hex');
    const codeChallenge = crypto
      .createHash('sha256')
      .update(codeVerifier)
      .digest('base64url');
    const state = crypto.randomBytes(16).toString('hex');

    return {
      codeVerifier,
      codeChallenge,
      state,
    };
  }

  /**
   * Generate authorization URL for Stack Overflow Internal Enterprise with PKCE
   * Creates the URL where users should be redirected to authorize your application
   * 
   * @returns Promise resolving to authorization data including the URL and tokens to store
   * @throws {Error} When clientId or redirectUri are missing from configuration
   * @example
   * ```typescript
   * const { url, codeVerifier, state } = await authClient.getAuthUrl();
   * // Redirect user to `url`
   * // Store `codeVerifier` and `state` securely (session, database, etc.)
   * ```
   */
  async getAuthUrl(): Promise<{
    url: string;
    codeVerifier: string;
    state: string;
  }> {
    if (!this.config.clientId || !this.config.redirectUri) {
      throw new Error('clientId and redirectUri are required for authentication');
    }

    const { codeVerifier, codeChallenge, state } = await this.generatePKCETokens();
    
    // Stack Overflow Internal Enterprise uses /oauth endpoint, not /oauth/authorize
    const authUrl = `${this.config.baseUrl}/oauth?client_id=${
      this.config.clientId
    }&redirect_uri=${encodeURIComponent(
      this.config.redirectUri,
    )}&code_challenge=${codeChallenge}&code_challenge_method=S256&state=${state}&scope=${
      this.config.scope || ''
    }`;

    return { url: authUrl, codeVerifier, state };
  }

  /**
   * Exchange authorization code for access token using PKCE
   * Completes the OAuth flow by trading the authorization code for an access token
   * 
   * @param code - The authorization code received from the callback
   * @param codeVerifier - The code verifier that was generated during authorization URL creation
   * @returns Promise resolving to token response with access token and expiration
   * @throws {Error} When the token exchange fails or required config is missing
   * @example
   * ```typescript
   * // In your callback handler:
   * const tokens = await authClient.exchangeCodeForToken(
   *   callbackCode, 
   *   storedCodeVerifier
   * );
   * console.log('Access token:', tokens.access_token);
   * console.log('Expires at:', new Date(tokens.expires * 1000));
   * ```
   */
  async exchangeCodeForToken(
    code: string,
    codeVerifier: string,
  ): Promise<TokenResponse> {
    if (!this.config.clientId || !this.config.redirectUri) {
      throw new Error('clientId and redirectUri are required for authentication');
    }

    // Stack Overflow Internal Enterprise uses /oauth/access_token/json endpoint
    const tokenUrl = `${this.config.baseUrl}/oauth/access_token/json`;
    
    const queryParams = new URLSearchParams({
      client_id: String(this.config.clientId),
      code,
      redirect_uri: this.config.redirectUri,
      code_verifier: codeVerifier,
    });

    const response = await fetch(`${tokenUrl}?${queryParams.toString()}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to exchange code for access token: ${errorText}`);
    }

    const data = await response.json();
    
    return {
      access_token: data.access_token,
      expires: data.expires,
    };
  }

  /**
   * Validate the state parameter for CSRF protection
   * Compares the state parameter received in the callback with the expected value
   * 
   * @param receivedState - The state parameter received in the OAuth callback
   * @param expectedState - The state parameter that was originally generated
   * @returns True if the states match, false otherwise
   * @example
   * ```typescript
   * const isValid = authClient.validateState(callbackState, storedState);
   * if (!isValid) {
   *   throw new Error('Possible CSRF attack detected');
   * }
   * ```
   */
  validateState(receivedState: string, expectedState: string): boolean {
    return receivedState === expectedState;
  }
}