// client/answers.ts - Clean answer management
import { AnswersMainApi } from '../generated/dist';
import { AnswersTeamsApi } from '../generated/dist';
import { 
  AnswerRequestModel, 
  AnswerResponseModel, 
  AnswerSummaryResponseModel,
  PaginatedAnswers,
  AnswersSortParameter,
  SortOrder 
} from '../generated/';

export interface CreateAnswerOptions {
  body: string;
  // Add other answer creation options
}

export interface GetAnswersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: AnswersSortParameter;
  order?: SortOrder;
}

export class AnswerClient {
  private mainApi: AnswersMainApi;
  private teamsApi?: AnswersTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    this.mainApi = new AnswersMainApi(config);
    if (teamId) {
      this.teamsApi = new AnswersTeamsApi(config);
    }
  }

  // Clean, intuitive methods
  async getAll(questionId: number, options: GetAnswersOptions = {}): Promise<PaginatedAnswers> {
    if (this.teamId && this.teamsApi) {
      // Teams API - questionId comes BEFORE team parameter
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersGet(
        questionId,
        this.teamId,
        options.page, 
        options.pageSize, 
        options.sort, 
        options.order
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersGet(
      questionId, 
      options.page, 
      options.pageSize, 
      options.sort, 
      options.order
    );
  }

  async get(questionId: number, answerId: number): Promise<AnswerResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdGet(questionId, answerId);
  }

  async create(questionId: number, options: CreateAnswerOptions): Promise<AnswerResponseModel> {
    const request: AnswerRequestModel = {
      body: options.body,
      // Map other options to the request model
    };

    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersPost(
        questionId,
        this.teamId,
        request
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersPost(questionId, request);
  }

  async update(questionId: number, answerId: number, options: CreateAnswerOptions): Promise<AnswerResponseModel> {
    const request: AnswerRequestModel = {
      body: options.body,
    };

    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(
        questionId,
        answerId,
        this.teamId,
        request
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdPut(questionId, answerId, request);
  }

  async delete(questionId: number, answerId: number): Promise<void> {
    if (this.teamId && this.teamsApi) {
      await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(
        questionId,
        answerId,
        this.teamId
      );
      return;
    }
    
    await this.mainApi.questionsQuestionIdAnswersAnswerIdDelete(questionId, answerId);
  }

  // Voting methods
  async upvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId);
  }

  async removeUpvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId);
  }

  async downvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId);
  }

  async removeDownvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId);
  }

  // Moderation methods
  async accept(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId);
  }

  async unaccept(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId);
  }

  // Additional methods that might be useful
  async getFlagOptions(questionId: number, answerId: number) {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(
        questionId,
        answerId,
        this.teamId
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId);
  }

  async flag(questionId: number, answerId: number, flagData: any) {
    if (this.teamId && this.teamsApi) {
      return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(
        questionId,
        answerId,
        this.teamId,
        flagData
      );
    }
    
    return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, flagData);
  }
}

// Usage examples:
/*
const sdk = new StackOverflowSDK({ 
  accessToken: 'your-oauth2-token'
});

// Main Stack Overflow
const answers = await sdk.answers.getAll(123);
await sdk.answers.upvote(123, 456);

// Teams context
const team = sdk.forTeam('team-123');
await team.answers.create(123, { body: 'Great answer!' });
*/