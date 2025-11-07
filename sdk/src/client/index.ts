import { createConfiguration, ConfigurationParameters } from '../generated/configuration.js';
import { AuthMethodsConfiguration } from '../generated/auth/auth.js';
import { ServerConfiguration } from '../generated/servers.js';
import { FixedIsomorphicFetchHttpLibrary } from '../helper/fixedHttpLibrary.js';

// Existing clients
import { AnswerClient } from './answers.js';
import { QuestionClient } from './questions.js';
import { CollectionClient } from './collections.js';
import { UserClient } from './users.js';
import { UserGroupClient } from './userGroups.js';
import { SearchClient } from './search.js';
import { TagClient } from './tags.js';
import { CommentClient } from './comments.js';
import { ArticleClient } from './articles.js';
import { CommunityClient } from './communities.js';

// Auth clients
import { BackendAuthClient } from '../auth/backend.js';
import { FrontendAuthClient } from '../auth/frontend.js';
import type { AuthConfig } from '../auth/types.js';

/**
 * Normalizes the base URL to ensure it includes the API path
 * Only applies to Enterprise instances, this does not modify the B&B URL.
 * @param baseUrl - The input base URL
 * @returns Normalized URL with /api/v3 appended if needed for Enterprise instances
 */
function normalizeBaseUrl(baseUrl: string): string {
  // Remove trailing slashes
  const cleanUrl = baseUrl.replace(/\/+$/, '');
  
  // Don't modify the B&B Stack Overflow Internal API URL
  if (cleanUrl.startsWith('https://api.stackoverflowteams.com')) {
    return cleanUrl;
  }
  
  // Check if the URL already ends with /api/v3 or contains /api/v3/
  if (cleanUrl.endsWith('/api/v3') || cleanUrl.includes('/api/v3/')) {
    return cleanUrl;
  }
  
  // Append /api/v3 to enterprise/private instances only
  return `${cleanUrl}/api/v3`;
}

/**
 * Basic configuration for Stack Overflow SDK
 */
export interface SDKConfig {
  /** Optional access token for authenticated requests */
  accessToken?: string;
  /** Base URL of the Stack Overflow API V3 for your instance */
  baseUrl: string; 
  // httpApi?: HttpLibrary; // defaults to FixedIsomorphicFetchHttpLibrary
}

/**
 * Extended configuration that includes authentication setup
 */
export interface AuthSDKConfig extends SDKConfig {
  /** Authentication configuration for OAuth flows */
  auth: AuthConfig;
}

/**
 * Main Stack Overflow Internal SDK client
 * Provides access to all Stack Overflow Internal API endpoints and authentication flows
 */
export class StackOverflowSDK {
  private config: ReturnType<typeof createConfiguration>;
  
  // Core Q&A functionality
  public readonly answers: AnswerClient;
  public readonly questions: QuestionClient;
  public readonly collections: CollectionClient;
  public readonly users: UserClient;
  public readonly articles: ArticleClient;
  public readonly comments: CommentClient;
  public readonly tags: TagClient;
  public readonly search: SearchClient;
  public readonly usergroups: UserGroupClient;
  public readonly communities: CommunityClient;

  // Auth clients (optional)
  public readonly auth?: {
    backend: BackendAuthClient;
    frontend: FrontendAuthClient;
  };

  /**
   * Creates a new Stack Overflow Internal SDK instance
   * @param config - SDK configuration with optional authentication setup
   * @example
   * ```typescript
   * // Basic usage with access token
   * const sdk = new StackOverflowSDK({
   *   accessToken: 'your-token',
   *   baseUrl: 'https://stackoverflow.stackenterprise.co'
   * });
   * 
   * // With OAuth authentication setup
   * const sdk = new StackOverflowSDK({
   *   baseUrl: 'https://stackoverflow.stackenterprise.co',
   *   auth: {
   *     clientId: 'your-client-id',
   *     redirectUri: 'http://localhost:3000/callback',
   *     baseUrl: 'https://stackoverflow.stackenterprise.co'
   *   }
   * });
   * ```
   */
  constructor(config: SDKConfig | AuthSDKConfig) {
    // Normalize the base URL to include API path
    const normalizedBaseUrl = normalizeBaseUrl(config.baseUrl);
    
    // Prepare auth configuration
    const authConfig: AuthMethodsConfiguration = {};
    
    if (config.accessToken) {
      authConfig.oauth2 = {
        accessToken: config.accessToken
      };
    }

    // Create configuration parameters with normalized URL
    const configParams: ConfigurationParameters = {
      authMethods: authConfig,
      httpApi: new FixedIsomorphicFetchHttpLibrary(),
      baseServer: new ServerConfiguration(normalizedBaseUrl, {})
    };

    this.config = createConfiguration(configParams);

    // Initialize client modules
    this.answers = new AnswerClient(this.config);
    this.questions = new QuestionClient(this.config);
    this.articles = new ArticleClient(this.config);
    this.collections = new CollectionClient(this.config);
    this.comments = new CommentClient(this.config);
    this.users = new UserClient(this.config);
    this.tags = new TagClient(this.config);
    this.search = new SearchClient(this.config);
    this.usergroups = new UserGroupClient(this.config);
    this.communities = new CommunityClient(this.config);

    // Initialize auth clients if auth config is provided
    if ('auth' in config && config.auth) {
      // Also normalize the auth config base URL
      const normalizedAuthConfig = {
        ...config.auth,
        baseUrl: normalizeBaseUrl(config.auth.baseUrl)
      };
      
      this.auth = {
        backend: new BackendAuthClient(normalizedAuthConfig),
        frontend: new FrontendAuthClient(normalizedAuthConfig),
      };
    }
  }

  /**
   * Create a team-specific context for API operations
   * Switches the SDK to operate within a specific team context
   * 
   * @param teamId - The ID of the team to switch context to
   * @returns TeamContext instance configured for the specified team
   * @example
   * ```typescript
   * const sdk = StackOverflowSDK.fromToken('token', 'https://stackoverflow.stackenterprise.co');
   * const teamContext = sdk.forTeam('team-123');
   * 
   * // Now all operations are scoped to team-123
   * const teamQuestions = await teamContext.questions.getAll();
   * ```
   */
  forTeam(teamId: string): TeamContext {
    return new TeamContext(this.config, teamId);
  }

  /**
   * Create an authenticated SDK instance from an existing access token
   * Convenient factory method when you already have a valid access token
   * 
   * @param accessToken - Valid Stack Overflow Internal access token
   * @param baseUrl - Base URL of your Stack Overflow Internal instance (API v3 path automatically appended where needed)
   * @returns Configured SDK instance ready for authenticated API calls
   * @example
   * ```typescript
   * // Create SDK with existing token (API path automatically added if needed)
   * const sdk = StackOverflowSDK.fromToken(
   *   'your-access-token-here',
   *   'https://support-test-teams.stackenterprise.co' // becomes https://support-test-teams.stackenterprise.co/api/v3
   * );
   * 
   * // B&B API usage
   * const sdk = StackOverflowSDK.fromToken(
   *   'your-access-token-here',
   *   'https://api.stackoverflowteams.com/v3/'
   * );
   * 
   * // Make authenticated requests immediately
   * const currentUser = await sdk.users.getCurrentUser();
   * const questions = await sdk.questions.getAll();
   * ```
   */
  static fromToken(accessToken: string, baseUrl: string): StackOverflowSDK {
    return new StackOverflowSDK({
      accessToken,
      baseUrl,
    });
  }

  /**
   * Create an SDK instance configured for Stack Overflow Internal Enterprise OAuth authentication
   * Sets up both backend and frontend auth clients for handling OAuth flows
   * 
   * @param authConfig - Complete authentication configuration including OAuth settings
   * @returns SDK instance with auth clients configured for OAuth flows
   * @example
   * ```typescript
   * // Set up SDK for OAuth authentication
   * const sdk = StackOverflowSDK.enterpriseOAuth({
   *   clientId: 'your-oauth-client-id',
   *   redirectUri: 'https://yourapp.com/callback',
   *   baseUrl: 'https://stackoverflow.stackenterprise.co',
   *   scope: 'write_access'
   * });
   * 
   * // Use backend auth for server-side flows
   * const { url, codeVerifier, state } = await sdk.auth!.backend.getAuthUrl();
   * 
   * // Use frontend auth for client-side flows
   * const authUrl = await sdk.auth!.frontend.startAuth();
   * ```
   */
  static enterpriseOAuth(authConfig: AuthConfig): StackOverflowSDK {
    return new StackOverflowSDK({
      baseUrl: authConfig.baseUrl,
      auth: authConfig,
    });
  }
}

/**
 * Team-specific context for Stack Overflow Internal API operations (required for Basic and Business Internal teams)
 * Provides access to all API clients scoped to a specific team
 */
export class TeamContext {
  public readonly answers: AnswerClient;
  public readonly questions: QuestionClient;
  public readonly collections: CollectionClient;
  public readonly users: UserClient;
  public readonly articles: ArticleClient;
  public readonly comments: CommentClient;
  public readonly tags: TagClient;
  public readonly search: SearchClient;
  public readonly usergroups: UserGroupClient;

  /**
   * Creates a new team context with all clients configured for the specified team
   * @param config - SDK configuration
   * @param teamId - The team ID to scope operations to
   */
  constructor(private config: ReturnType<typeof createConfiguration>, private teamId: string) {
    // Initialize team-specific clients
    this.answers = new AnswerClient(config, teamId);
    this.questions = new QuestionClient(config, teamId);
    this.collections = new CollectionClient(config, teamId);
    this.users = new UserClient(config, teamId);
    this.articles = new ArticleClient(config, teamId);
    this.comments = new CommentClient(config, teamId);
    this.tags = new TagClient(config, teamId);
    this.search = new SearchClient(config, teamId);
    this.usergroups = new UserGroupClient(config, teamId);
  }
}

// Re-export all clients and types
export { AnswerClient } from './answers.js';
export { QuestionClient } from './questions.js';
export { ArticleClient } from './articles.js';
export { CollectionClient } from './collections.js';
export { CommentClient } from './comments.js';
export { SearchClient } from './search.js';
export { CommunityClient } from './communities.js';
export { UserClient } from './users.js';
export { TagClient } from './tags.js';
export { UserGroupClient } from './userGroups.js';
export { BackendAuthClient, FrontendAuthClient } from '../auth/index.js';
export type { AuthConfig, TokenResponse, PKCETokens } from '../auth/index.js';
export { FixedIsomorphicFetchHttpLibrary } from '../helper/fixedHttpLibrary.js';

export default StackOverflowSDK;