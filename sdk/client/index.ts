// client/index.ts - Main SDK entry point
import { createConfiguration, ConfigurationParameters } from '../generated/dist/configuration';
import { AuthMethodsConfiguration } from '../generated/dist/auth/auth';
import { ServerConfiguration, server1 } from '../generated/dist/servers';
import { AnswerClient } from './answers';
// Import other clients as you create them
// import { QuestionClient } from './questions';
// import { UserClient } from './users';
// import { TeamClient } from './teams';
// import { SearchClient } from './search';
// import { TagClient } from './tags';
// import { ArticleClient } from './articles';

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
  // public readonly questions: QuestionClient;
  // public readonly users: UserClient;
  // public readonly articles: ArticleClient;
  // public readonly tags: TagClient;
  // public readonly search: SearchClient;
  // public readonly teams: TeamClient;

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
    // this.questions = new QuestionClient(this.config);
    // this.users = new UserClient(this.config);
    // etc...
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
  // public readonly questions: QuestionClient;
  // public readonly users: UserClient;

  constructor(private config: ReturnType<typeof createConfiguration>, private teamId: string) {
    // Initialize team-specific clients
    this.answers = new AnswerClient(config, teamId);
    // Add others as you create them:
    // this.questions = new QuestionClient(config, teamId);
    // this.users = new UserClient(config, teamId);
  }
}

// Export the main SDK and types
export { AnswerClient } from './answers';
// Export other clients as you create them
// export { QuestionClient } from './questions';
// export { UserClient } from './users';

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