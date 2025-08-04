import { BaseClient } from './shared';
import { QuestionsMainApi, QuestionsTeamsApi } from '../generated/index.js';
import { 
  QuestionRequestModel,
  QuestionResponseModel,
  PaginatedQuestions,
  PaginatedLinkedOrRelatedQuestions,
  QuestionSortParameter,
  LinkedOrRelatedQuestionsSortParameter,
  SortOrder,
  FlagOptionResponseModel,
  FlagRequestModel
} from '../generated/index.js';

export interface CreateQuestionOptions {
  title: string;
  body: string;
  tags: string[];
  // Add other question creation options as needed
}

export interface UpdateQuestionOptions {
  title: string;
  body: string;
  tags: string[];
  // Add other update options
}

export interface GetQuestionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: QuestionSortParameter;
  order?: SortOrder;
  isAnswered?: boolean;
  hasAcceptedAnswer?: boolean;
  questionId?: Array<number>;
  tagId?: Array<number>;
  authorId?: number;
  from?: Date;
  to?: Date;
}

export interface GetLinkedQuestionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: LinkedOrRelatedQuestionsSortParameter;
  order?: SortOrder;
}

export class QuestionClient extends BaseClient {
  private mainApi: QuestionsMainApi;
  private teamsApi?: QuestionsTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new QuestionsMainApi(config);
    if (teamId) {
      this.teamsApi = new QuestionsTeamsApi(config);
    }
  }

  // Core CRUD operations
  async getAll(options: GetQuestionsOptions = {}): Promise<PaginatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order,
          options.isAnswered,
          options.hasAcceptedAnswer,
          options.questionId,
          options.tagId,
          options.authorId,
          options.from,
          options.to
        );
      }
      
      return await this.mainApi.questionsGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order,
        options.isAnswered,
        options.hasAcceptedAnswer,
        options.questionId,
        options.tagId,
        options.authorId,
        options.from,
        options.to
      );
    }, 'getAll');
  }

  async get(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdGet(questionId);
    }, 'get');
  }

  async ask(options: CreateQuestionOptions): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      const request: QuestionRequestModel = {
        title: options.title,
        body: options.body,
        tags: options.tags
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsPost(this.teamId, request);
      }
      
      return await this.mainApi.questionsPost(request);
    }, 'ask');
  }

  async update(questionId: number, options: UpdateQuestionOptions): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      const request: QuestionRequestModel = {
        title: options.title,
        body: options.body,
        tags: options.tags
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdPut(questionId, this.teamId, request);
      }
      
      return await this.mainApi.questionsQuestionIdPut(questionId, request);
    }, 'update');
  }

  async delete(questionId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamQuestionsQuestionIdDelete(questionId, this.teamId);
        return;
      }
      
      await this.mainApi.questionsQuestionIdDelete(questionId);
    }, 'delete');
  }

  // Voting methods
  async upvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdUpvotePost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdUpvotePost(questionId);
    }, 'upvote');
  }

  async removeUpvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdUpvoteDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdUpvoteDelete(questionId);
    }, 'removeUpvote');
  }

  async downvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdDownvotePost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdDownvotePost(questionId);
    }, 'downvote');
  }

  async removeDownvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdDownvoteDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdDownvoteDelete(questionId);
    }, 'removeDownvote');
  }

  // Bookmark methods (unique to questions)
  async bookmark(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdBookmarkPost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdBookmarkPost(questionId);
    }, 'bookmark');
  }

  async removeBookmark(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdBookmarkDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdBookmarkDelete(questionId);
    }, 'removeBookmark');
  }

  // Related questions (unique to questions)
  async getLinked(questionId: number, options: GetLinkedQuestionsOptions = {}): Promise<PaginatedLinkedOrRelatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdLinkedGet(
          questionId,
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order
        );
      }
      
      return await this.mainApi.questionsQuestionIdLinkedGet(
        questionId,
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getLinked');
  }

  async getRelated(questionId: number, options: GetLinkedQuestionsOptions = {}): Promise<PaginatedLinkedOrRelatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdRelatedGet(
          questionId,
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order
        );
      }
      
      return await this.mainApi.questionsQuestionIdRelatedGet(
        questionId,
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getRelated');
  }

  // Flag methods
  async getFlagOptions(questionId: number): Promise<Array<FlagOptionResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdFlagsOptionsGet(questionId);
    }, 'getFlagOptions');
  }

  async flag(questionId: number, flagData: FlagRequestModel): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamQuestionsQuestionIdFlagsPost(questionId, this.teamId, flagData);
        return;
      }
      
      await this.mainApi.questionsQuestionIdFlagsPost(questionId, flagData);
    }, 'flag');
  }

  // Convenience methods for common use cases
  async getUnanswered(options: Omit<GetQuestionsOptions, 'isAnswered'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, isAnswered: false });
  }

  async getWithoutAcceptedAnswer(options: Omit<GetQuestionsOptions, 'hasAcceptedAnswer'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, hasAcceptedAnswer: false });
  }

  async getByAuthor(authorId: number, options: Omit<GetQuestionsOptions, 'authorId'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, authorId });
  }

  async getByTag(tagId: number, options: Omit<GetQuestionsOptions, 'tagId'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, tagId: [tagId] });
  }

  async getByDateRange(from: Date, to: Date, options: Omit<GetQuestionsOptions, 'from' | 'to'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, from, to });
  }
}