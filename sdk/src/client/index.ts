import { createConfiguration, ConfigurationParameters } from '../generated/configuration.js';
import { AuthMethodsConfiguration } from '../generated/auth/auth.js';
import { ServerConfiguration, server1 } from '../generated/servers.js';
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

export interface SDKConfig {
  accessToken?: string;
  baseUrl?: string;
  // Add other config options as needed
}

export class StackOverflowSDK {
  private config: ReturnType<typeof createConfiguration>;
  
  // Core Q&A functionality
  public readonly answers: AnswerClient;
  // Add other clients as you create them
  public readonly questions: QuestionClient;
  public readonly collections: CollectionClient;
  public readonly users: UserClient;
  public readonly articles: ArticleClient;
  public readonly comments: CommentClient;
  public readonly tags: TagClient;
  public readonly search: SearchClient;
  public readonly usergroups: UserGroupClient
  public readonly communities: CommunityClient 

  constructor(config: SDKConfig) {
    // Prepare auth configuration
    const authConfig: AuthMethodsConfiguration = {};
    
    if (config.accessToken) {
      authConfig.oauth2 = {
        accessToken: config.accessToken
      };
    }

    // Create configuration parameters
    const configParams: ConfigurationParameters = {
      authMethods: authConfig
    };

    // Configure base server
    if (config.baseUrl) {
      configParams.baseServer = new ServerConfiguration(config.baseUrl, {});
    } else {
      // Use default server from generated code
      configParams.baseServer = server1;
    }

    this.config = createConfiguration(configParams);

    // Initialize client modules (only answers for now)
    this.answers = new AnswerClient(this.config);
    // Add others as you create them:
    this.questions = new QuestionClient(this.config);
    this.articles = new ArticleClient(this.config);
    this.collections = new CollectionClient(this.config);
    this.comments = new CommentClient(this.config);
    this.users = new UserClient(this.config);
    this.tags = new TagClient(this.config);
    this.search = new SearchClient(this.config)
    this.usergroups = new UserGroupClient(this.config)
    this.communities = new CommunityClient(this.config)
  }

  // Convenience method for switching to team context
  forTeam(teamId: string): TeamContext {
    return new TeamContext(this.config, teamId);
  }
}

// Team-specific context for cleaner API
export class TeamContext {
  public readonly answers: AnswerClient;
  // Add other team clients as you build them
  public readonly questions: QuestionClient;
  // public readonly users: UserClient;

  constructor(private config: ReturnType<typeof createConfiguration>, private teamId: string) {
    // Initialize team-specific clients
    this.answers = new AnswerClient(config, teamId);
    // Add others as you create them:
    this.questions = new QuestionClient(config, teamId);
    // this.users = new UserClient(config, teamId);
  }
}

// Export the main SDK and types
export { AnswerClient } from './answers.js';
export { QuestionClient } from './questions.js';
export { ArticleClient } from './articles.js';
export { CollectionClient } from './collections.js';
export { CommentClient } from './comments.js';
export { SearchClient } from './search.js';
export { CommunityClient } from './communities.js' 
export { UserClient } from './users.js'
export { TagClient } from './tags.js'
export { UserGroupClient } from './userGroups.js'

// Default export for convenience
export default StackOverflowSDK;

/* 
Usage example:

import StackOverflowSDK from './client';
// or
import { StackOverflowSDK } from './client';

// Using default server (https://support-autotest.stackenterprise.co/api/v3)
const sdk = new StackOverflowSDK({ 
  accessToken: 'your-oauth2-token'
});

// Using custom server
const sdk = new StackOverflowSDK({ 
  accessToken: 'your-oauth2-token',
  baseUrl: 'https://your-custom-stackenterprise.com/api/v3'
});

// Main Stack Overflow usage
const answers = await sdk.answers.getAll(123);
await sdk.answers.upvote(123, 456);

// Teams context
const team = sdk.forTeam('team-123');
await team.answers.create(123, { body: 'Great answer!' });
*/