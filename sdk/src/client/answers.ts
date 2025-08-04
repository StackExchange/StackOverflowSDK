import { BaseClient } from './shared';
import { AnswersMainApi, AnswersTeamsApi } from '../generated/index.js';
import { 
  AnswerRequestModel, 
  AnswerResponseModel, 
  AnswerSummaryResponseModel,
  PaginatedAnswers,
  AnswersSortParameter,
  SortOrder 
} from '../generated/index.js';

export interface CreateAnswerOptions {
  body: string;
  // Add other answer creation options as needed
}

export interface GetAnswersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: AnswersSortParameter;
  order?: SortOrder;
}

export class AnswerClient extends BaseClient {
  private mainApi: AnswersMainApi;
  private teamsApi?: AnswersTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new AnswersMainApi(config);
    if (teamId) {
      this.teamsApi = new AnswersTeamsApi(config);
    }
  }

  // Clean, intuitive methods - much less repetitive!
  async getAll(questionId: number, options: GetAnswersOptions = {}): Promise<PaginatedAnswers> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersGet(
          questionId, this.teamId, options.page, options.pageSize, options.sort, options.order
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersGet(
        questionId, options.page, options.pageSize, options.sort, options.order
      );
    }, 'getAll');
  }

  async get(questionId: number, answerId: number): Promise<AnswerResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdGet(questionId, answerId);
    }, 'get');
  }

  async create(questionId: number, options: CreateAnswerOptions): Promise<AnswerResponseModel> {
    return this.handleApiCall(async () => {
      const request: AnswerRequestModel = { body: options.body };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersPost(
          questionId, this.teamId, request
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersPost(questionId, request);
    }, 'create');
  }

  async update(questionId: number, answerId: number, options: CreateAnswerOptions): Promise<AnswerResponseModel> {
    return this.handleApiCall(async () => {
      const request: AnswerRequestModel = { body: options.body };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(
          questionId, answerId, this.teamId, request
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdPut(questionId, answerId, request);
    }, 'update');
  }

  async delete(questionId: number, answerId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(
          questionId, answerId, this.teamId
        );
        return;
      }
      
      await this.mainApi.questionsQuestionIdAnswersAnswerIdDelete(questionId, answerId);
    }, 'delete');
  }

  // Voting methods
  async upvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId);
    }, 'upvote');
  }

  async removeUpvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId);
    }, 'removeUpvote');
  }

  async downvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId);
    }, 'downvote');
  }

  async removeDownvote(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId);
    }, 'removeDownvote');
  }

  // Moderation methods
  async accept(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId);
    }, 'accept');
  }

  async unaccept(questionId: number, answerId: number): Promise<AnswerSummaryResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId);
    }, 'unaccept');
  }

  // Additional utility methods
  async getFlagOptions(questionId: number, answerId: number) {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(
          questionId, answerId, this.teamId
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId);
    }, 'getFlagOptions');
  }

  async flag(questionId: number, answerId: number, flagData: any) {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(
          questionId, answerId, this.teamId, flagData
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, flagData);
    }, 'flag');
  }
}