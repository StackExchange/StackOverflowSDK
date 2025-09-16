// Main SDK classes and configurations
export {
    StackOverflowSDK,
    TeamContext,
    SDKConfig,
    AuthSDKConfig
} from './client/index.js';

// Client classes
export {
    AnswerClient,
    QuestionClient,
    ArticleClient,
    CollectionClient,
    CommentClient,
    SearchClient,
    CommunityClient,
    UserClient,
    TagClient,
    UserGroupClient
} from './client/index.js';

// Auth clients and types
export {
    BackendAuthClient,
    FrontendAuthClient
} from './client/index.js';

export type {
    AuthConfig,
    TokenResponse,
    PKCETokens
} from './client/index.js';

// Generated API models and types
export type {
    AnswerRequestModel,
    AnswerResponseModel,
    AnswerSearchResultModel,
    AnswerSummaryResponseModel,
    QuestionRequestModel,
    QuestionResponseModel,
    QuestionSearchResultModel,
    QuestionSummaryResponseModel,
    ArticleResponseModel,
    ArticleRequestModel,
    CommentResponseModel,
    UserResponseModel,
    UserDetailsResponseModel,
    UserSummaryResponseModel,
    UserGroupRequestModel,
    UserGroupResponseModel,
    CollectionRequestModel,
    CollectionContentSummaryResponseModel,
    CollectionsResponseModel,
    CollectionsSummaryResponseModel,
    SearchResultModel,
    CommunityMemberResponseModel,
    CommunityResponseModel,
    CommunitySummaryResponseModel,
    TagSummaryResponseModel,
    TagResponseModel,
} from './generated/index.js';

// Configuration utilities
export { 
    createConfiguration,
    ConfigurationParameters,
    ConfigurationOptions
} from './generated/configuration.js';

// Auth configuration
export {
    AuthMethodsConfiguration,
    AuthMethods
} from './generated/auth/auth.js';

// Server configuration
export {
    ServerConfiguration,
    server1
} from './generated/servers.js';

// HTTP library
export {
    FixedIsomorphicFetchHttpLibrary
} from './client/index.js';

// Default export
export { default } from './client/index.js';