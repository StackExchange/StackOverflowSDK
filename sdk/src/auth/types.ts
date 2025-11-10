/**
 * Configuration for Stack Overflow Internal Enterprise authentication using PKCE
 */
export interface AuthConfig {
  /** The OAuth client ID from your Stack Overflow Internal Enterprise application */
  clientId: string;
  /** The redirect URI registered with your Stack Overflow Internal Enterprise application */
  redirectUri: string;
  /** The base URL of your Stack Overflow Internal Enterprise instance (e.g., 'https://acme.stackenterprise.co') */
  baseUrl: string; // Stack Overflow Internal Enterprise instance URL
  /** OAuth scope to request (defaults to read-only access if not specified) */
  scope?: string;
}

/**
 * Response from Stack Overflow Internal Enterprise token exchange endpoint
 */
export interface TokenResponse {
  /** The access token for making authenticated API requests */
  access_token: string;
  /** Number of seconds until token expiration, defaults to 24hr unless 'no_expiry' scope is provided */
  expires?: number; 
}

/**
 * PKCE (Proof Key for Code Exchange) tokens for secure OAuth flow
 * Used to prevent authorization code interception attacks
 */
export interface PKCETokens {
  /** The code verifier - a cryptographically random string */
  codeVerifier: string;
  /** The code challenge - SHA256 hash of the code verifier, base64url encoded */
  codeChallenge: string;
  /** Random state parameter for CSRF protection */
  state: string;
}