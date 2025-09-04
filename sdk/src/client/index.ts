import { createConfiguration, ConfigurationParameters } from '../generated/configuration.js';
import { AuthMethodsConfiguration } from '../generated/auth/auth.js';
import { ServerConfiguration } from '../generated/servers.js';
import { FixedIsomorphicFetchHttpLibrary } from '../helper/fixedHttpLibrary.js';
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
  accessToken: string;
  baseUrl: string; 
  // httpApi?: HttpLibrary; // defaults to FixedIsomorphicFetchHttpLibrary
}

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
      authMethods: authConfig,
      httpApi: new FixedIsomorphicFetchHttpLibrary(),
      baseServer: new ServerConfiguration(config.baseUrl, {})
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
  }

  // Convenience method for switching to team context
  forTeam(teamId: string): TeamContext {
    return new TeamContext(this.config, teamId);
  }
}

// Team-specific context for cleaner API
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

export { FixedIsomorphicFetchHttpLibrary } from '../helper/fixedHttpLibrary.js';

export default StackOverflowSDK;