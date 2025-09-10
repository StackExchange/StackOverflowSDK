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

/**
 * Options for creating a new question
 * @typedef {Object} CreateQuestionOptions
 * @property {string} title - The actual question, stated briefly in one sentence
 * @property {string} body - The main content of the question in Markdown format
 * @property {string[]} tags - Array of tag names to associate with the question
 */
export interface CreateQuestionOptions {
  title: string;
  body: string;
  tags: string[];
}

/**
 * Options for updating an existing question
 * @typedef {Object} UpdateQuestionOptions
 * @property {string} title - The updated question title
 * @property {string} body - The updated main content in Markdown format
 * @property {string[]} tags - Updated array of tag names
 */
export interface UpdateQuestionOptions {
  title: string;
  body: string;
  tags: string[];
}

/**
 * Options for retrieving questions with comprehensive filtering, pagination and sorting
 * @typedef {Object} GetQuestionsOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of questions per page
 * @property {QuestionSortParameter} [sort] - Sort parameter ('activity', 'creation', 'score')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 * @property {boolean} [isAnswered] - Filter by whether questions have at least one upvoted answer
 * @property {boolean} [hasAcceptedAnswer] - Filter by whether questions have an accepted answer
 * @property {number[]} [questionId] - Filter by specific question IDs
 * @property {number[]} [tagId] - Filter by tag IDs
 * @property {number} [authorId] - Filter by specific author ID
 * @property {Date} [from] - Filter questions created after this date
 * @property {Date} [to] - Filter questions created before this date
 */
export interface GetQuestionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'activity' | 'creation' | 'score' | QuestionSortParameter;
  order?: 'asc' | 'desc' | SortOrder;
  isAnswered?: boolean;
  hasAcceptedAnswer?: boolean;
  questionId?: Array<number>;
  tagId?: Array<number>;
  authorId?: number;
  from?: Date;
  to?: Date;
}

/**
 * Options for retrieving linked or related questions with pagination and sorting
 * @typedef {Object} GetLinkedQuestionsOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of questions per page
 * @property {LinkedOrRelatedQuestionsSortParameter} [sort] - Sort parameter ('hot', 'creation', 'activity', 'score')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 */
export interface GetLinkedQuestionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: LinkedOrRelatedQuestionsSortParameter;
  order?: SortOrder;
}

/**
 * Client for managing questions in Stack Overflow for Teams
 * 
 * The QuestionClient provides comprehensive methods for creating, reading, updating,
 * and deleting questions, as well as managing votes, bookmarks, and discovering
 * related content. Questions are the core content type in Stack Overflow for Teams,
 * supporting rich interactions including voting, bookmarking, flagging, and
 * relationship discovery with other questions.
 * 
 * @class QuestionClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const questionClient = new QuestionClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const questionClient = new QuestionClient(config, 'team-123');
 */
export class QuestionClient extends BaseClient {
  private mainApi: QuestionsMainApi;
  private teamsApi?: QuestionsTeamsApi;

  /**
   * Creates a new QuestionClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new QuestionClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new QuestionClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new QuestionsMainApi(config);
    if (teamId) {
      this.teamsApi = new QuestionsTeamsApi(config);
    }
  }

  /**
   * Retrieves all questions with comprehensive filtering, pagination and sorting options
   * 
   * @param {GetQuestionsOptions} [options={}] - Options for filtering, pagination and sorting
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated question results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of questions with default settings
   * const questions = await questionClient.getAll();
   * 
   * @example
   * // Get questions with custom pagination and sorting
   * const questions = await questionClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'activity',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Filter by multiple criteria
   * const filteredQuestions = await questionClient.getAll({
   *   isAnswered: false,
   *   tagId: [123, 456],
   *   authorId: 789,
   *   from: new Date('2024-01-01')
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total questions: ${questions.totalCount}`);
   * questions.items?.forEach(question => {
   *   console.log(`${question.title}: ${question.score} points, ${question.answerCount} answers`);
   * });
   */
  async getAll(options: GetQuestionsOptions = {}): Promise<PaginatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort as QuestionSortParameter,
          options.order as SortOrder,
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
        options.sort as QuestionSortParameter,
        options.order as SortOrder,
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

  /**
   * Retrieves a specific question by its ID
   * 
   * @param {number} questionId - The unique identifier of the question
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the complete question details
   * 
   * @throws {Error} When the question is not found or the API request fails
   * 
   * @example
   * const question = await questionClient.get(123);
   * console.log(`Title: ${question.title}`);
   * console.log(`Body: ${question.body}`);
   * console.log(`Score: ${question.score}, Views: ${question.viewCount}`);
   * console.log(`Answered: ${question.isAnswered}, Answers: ${question.answerCount}`);
   * console.log(`Tags: ${question.tags?.map(tag => tag.name).join(', ')}`);
   * console.log(`User interactions: upvoted=${question.userHasUpvoted}, bookmarked=${question.userHasBookmarked}`);
   * 
   * // Check for bounty
   * if (question.bounty) {
   *   console.log(`Bounty: ${question.bounty.amount} points`);
   * }
   */
  async get(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdGet(questionId);
    }, 'get');
  }

  /**
   * Creates a new question (asks a question)
   * 
   * @param {CreateQuestionOptions} options - The question content and configuration
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the created question
   * 
   * @throws {Error} When question creation fails due to validation errors or API issues
   * 
   * @example
   * const newQuestion = await questionClient.ask({
   *   title: 'How do I implement authentication in React?',
   *   body: '## Context\n\nI\'m building a React application and need to implement user authentication...',
   *   tags: ['react', 'authentication', 'javascript', 'security']
   * });
   * console.log(`Created question with ID: ${newQuestion.id}`);
   * console.log(`Question URL: ${newQuestion.webUrl}`);
   */
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

  /**
   * Updates an existing question
   * 
   * @param {number} questionId - The unique identifier of the question to update
   * @param {UpdateQuestionOptions} options - The updated question content
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedQuestion = await questionClient.update(123, {
   *   title: 'Updated: How do I implement authentication in React?',
   *   body: '## Updated Context\n\nI\'ve made some progress but now I\'m stuck on...',
   *   tags: ['react', 'authentication', 'javascript', 'oauth', 'security']
   * });
   */
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

  /**
   * Deletes a question
   * 
   * @param {number} questionId - The unique identifier of the question to delete
   * @returns {Promise<void>} A promise that resolves when the question is successfully deleted
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * await questionClient.delete(123);
   * console.log('Question deleted successfully');
   */
  async delete(questionId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamQuestionsQuestionIdDelete(questionId, this.teamId);
        return;
      }
      
      await this.mainApi.questionsQuestionIdDelete(questionId);
    }, 'delete');
  }

  /**
   * Upvotes a question
   * 
   * @param {number} questionId - The unique identifier of the question to upvote
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or has already upvoted
   * 
   * @example
   * const updatedQuestion = await questionClient.upvote(123);
   * console.log(`New score: ${updatedQuestion.score}`);
   * console.log(`User has upvoted: ${updatedQuestion.userHasUpvoted}`);
   */
  async upvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdUpvotePost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdUpvotePost(questionId);
    }, 'upvote');
  }

  /**
   * Removes an upvote from a question
   * 
   * @param {number} questionId - The unique identifier of the question to remove upvote from
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or hasn't upvoted
   * 
   * @example
   * const updatedQuestion = await questionClient.removeUpvote(123);
   * console.log(`Score after removing upvote: ${updatedQuestion.score}`);
   */
  async removeUpvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdUpvoteDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdUpvoteDelete(questionId);
    }, 'removeUpvote');
  }

  /**
   * Downvotes a question
   * 
   * @param {number} questionId - The unique identifier of the question to downvote
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or has already downvoted
   * 
   * @example
   * const updatedQuestion = await questionClient.downvote(123);
   * console.log(`New score: ${updatedQuestion.score}`);
   * console.log(`User has downvoted: ${updatedQuestion.userHasDownvoted}`);
   */
  async downvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdDownvotePost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdDownvotePost(questionId);
    }, 'downvote');
  }

  /**
   * Removes a downvote from a question
   * 
   * @param {number} questionId - The unique identifier of the question to remove downvote from
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or hasn't downvoted
   * 
   * @example
   * const updatedQuestion = await questionClient.removeDownvote(123);
   * console.log(`Score after removing downvote: ${updatedQuestion.score}`);
   */
  async removeDownvote(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdDownvoteDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdDownvoteDelete(questionId);
    }, 'removeDownvote');
  }

  /**
   * Bookmarks a question for the current user
   * 
   * Bookmarking allows users to save questions for later reference. This is a
   * question-specific feature not available for other content types.
   * 
   * @param {number} questionId - The unique identifier of the question to bookmark
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or has already bookmarked
   * 
   * @example
   * const bookmarkedQuestion = await questionClient.bookmark(123);
   * console.log(`Question bookmarked: ${bookmarkedQuestion.userHasBookmarked}`);
   */
  async bookmark(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdBookmarkPost(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdBookmarkPost(questionId);
    }, 'bookmark');
  }

  /**
   * Removes a bookmark from a question
   * 
   * @param {number} questionId - The unique identifier of the question to remove bookmark from
   * @returns {Promise<QuestionResponseModel>} A promise that resolves to the updated question
   * 
   * @throws {Error} When the question is not found, user lacks permissions, or hasn't bookmarked
   * 
   * @example
   * const unbookmarkedQuestion = await questionClient.removeBookmark(123);
   * console.log(`Bookmark removed: ${!unbookmarkedQuestion.userHasBookmarked}`);
   */
  async removeBookmark(questionId: number): Promise<QuestionResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdBookmarkDelete(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdBookmarkDelete(questionId);
    }, 'removeBookmark');
  }

  /**
   * Retrieves questions that are explicitly linked to a specific question
   * 
   * Linked questions are manually connected by users or moderators and represent
   * direct relationships between questions.
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {GetLinkedQuestionsOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedLinkedOrRelatedQuestions>} A promise that resolves to paginated linked questions
   * 
   * @throws {Error} When the question is not found or the API request fails
   * 
   * @example
   * const linkedQuestions = await questionClient.getLinked(123);
   * console.log(`Found ${linkedQuestions.totalCount} linked questions`);
   * 
   * linkedQuestions.items?.forEach(question => {
   *   console.log(`Linked: ${question.title} (Score: ${question.score})`);
   * });
   */
  async getLinked(questionId: number, options: GetLinkedQuestionsOptions = {}): Promise<PaginatedLinkedOrRelatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdLinkedGet(
          questionId,
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order as SortOrder
        );
      }
      
      return await this.mainApi.questionsQuestionIdLinkedGet(
        questionId,
        options.page,
        options.pageSize,
        options.sort,
        options.order as SortOrder
      );
    }, 'getLinked');
  }

  /**
   * Retrieves questions that are algorithmically related to a specific question
   * 
   * Related questions are discovered through algorithmic analysis of content similarity,
   * tags, and other factors.
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {GetLinkedQuestionsOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedLinkedOrRelatedQuestions>} A promise that resolves to paginated related questions
   * 
   * @throws {Error} When the question is not found or the API request fails
   * 
   * @example
   * const relatedQuestions = await questionClient.getRelated(123, {
   *   sort: 'score',
   *   order: 'desc',
   *   pageSize: 10
   * });
   * 
   * console.log('Top related questions:');
   * relatedQuestions.items?.forEach(question => {
   *   console.log(`Related: ${question.title} (Score: ${question.score})`);
   * });
   */
  async getRelated(questionId: number, options: GetLinkedQuestionsOptions = {}): Promise<PaginatedLinkedOrRelatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdRelatedGet(
          questionId,
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order as SortOrder
        );
      }
      
      return await this.mainApi.questionsQuestionIdRelatedGet(
        questionId,
        options.page,
        options.pageSize,
        options.sort,
        options.order as SortOrder
      );
    }, 'getRelated');
  }

  /**
   * Retrieves available flagging options for a question
   * 
   * This method returns the flagging options available to the current user for the
   * specified question, including any required fields for each option.
   * 
   * @param {number} questionId - The unique identifier of the question
   * @returns {Promise<Array<FlagOptionResponseModel>>} A promise that resolves to available flag options
   * 
   * @throws {Error} When the question is not found or the API request fails
   * 
   * @example
   * const flagOptions = await questionClient.getFlagOptions(123);
   * flagOptions.forEach(option => {
   *   console.log(`Flag option: ${option.title}`);
   *   console.log(`Description: ${option.description}`);
   *   console.log(`Requires comment: ${option.requiresComment}`);
   *   if (option.subOptions?.length) {
   *     console.log(`Sub-options available: ${option.subOptions.length}`);
   *   }
   * });
   */
  async getFlagOptions(questionId: number): Promise<Array<FlagOptionResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdFlagsOptionsGet(questionId);
    }, 'getFlagOptions');
  }

  /**
   * Flags a question for moderator attention
   * 
   * Flagging is used to report questions that violate community guidelines or
   * require moderator intervention.
   * 
   * @param {number} questionId - The unique identifier of the question to flag
   * @param {FlagRequestModel} flagData - The flag configuration including option ID and any required fields
   * @returns {Promise<void>} A promise that resolves when the flag is successfully submitted
   * 
   * @throws {Error} When the question is not found, flag data is invalid, or the API request fails
   * 
   * @example
   * // First get available flag options
   * const flagOptions = await questionClient.getFlagOptions(123);
   * const offTopicOption = flagOptions.find(opt => opt.title?.includes('off-topic'));
   * 
   * if (offTopicOption) {
   *   await questionClient.flag(123, {
   *     optionId: offTopicOption.optionId!,
   *     comment: 'This question is not related to our team\'s technology stack'
   *   });
   *   console.log('Question flagged successfully');
   * }
   * 
   * @example
   * // Flag for migration to another site
   * await questionClient.flag(123, {
   *   optionId: 42, // Migration option ID
   *   targetSite: 'stackoverflow.com',
   *   comment: 'Better suited for the main Stack Overflow site'
   * });
   */
  async flag(questionId: number, flagData: FlagRequestModel): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamQuestionsQuestionIdFlagsPost(questionId, this.teamId, flagData);
        return;
      }
      
      await this.mainApi.questionsQuestionIdFlagsPost(questionId, flagData);
    }, 'flag');
  }

  /**
   * Retrieves questions that have no upvoted answers
   * 
   * @param {Omit<GetQuestionsOptions, 'isAnswered'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated unanswered questions
   * 
   * @example
   * const unansweredQuestions = await questionClient.getUnanswered({
   *   sort: 'creation',
   *   order: 'desc',
   *   pageSize: 25
   * });
   */
  async getUnanswered(options: Omit<GetQuestionsOptions, 'isAnswered'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, isAnswered: false });
  }

  /**
   * Retrieves questions that have no accepted answer
   * 
   * @param {Omit<GetQuestionsOptions, 'hasAcceptedAnswer'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated questions without accepted answers
   * 
   * @example
   * const questionsNeedingAcceptance = await questionClient.getWithoutAcceptedAnswer({
   *   tagId: [123], // Filter by specific technology
   *   sort: 'score',
   *   order: 'desc'
   * });
   */
  async getWithoutAcceptedAnswer(options: Omit<GetQuestionsOptions, 'hasAcceptedAnswer'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, hasAcceptedAnswer: false });
  }

  /**
   * Retrieves all questions by a specific author
   * 
   * @param {number} authorId - The unique identifier of the author
   * @param {Omit<GetQuestionsOptions, 'authorId'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated questions by the author
   * 
   * @example
   * const authorQuestions = await questionClient.getByAuthor(456, {
   *   sort: 'creation',
   *   order: 'desc'
   * });
   */
  async getByAuthor(authorId: number, options: Omit<GetQuestionsOptions, 'authorId'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, authorId });
  }

  /**
   * Retrieves all questions with a specific tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {Omit<GetQuestionsOptions, 'tagId'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated questions with the tag
   * 
   * @example
   * const reactQuestions = await questionClient.getByTag(123);
   */
  async getByTag(tagId: number, options: Omit<GetQuestionsOptions, 'tagId'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, tagId: [tagId] });
  }

  /**
   * Retrieves questions created within a specific date range
   * 
   * @param {Date} from - Start date for the range (inclusive)
   * @param {Date} to - End date for the range (inclusive)
   * @param {Omit<GetQuestionsOptions, 'from' | 'to'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedQuestions>} A promise that resolves to paginated questions in the date range
   * 
   * @example
   * const q1Questions = await questionClient.getByDateRange(
   *   new Date('2024-01-01'),
   *   new Date('2024-03-31')
   * );
   */
  async getByDateRange(from: Date, to: Date, options: Omit<GetQuestionsOptions, 'from' | 'to'> = {}): Promise<PaginatedQuestions> {
    return this.getAll({ ...options, from, to });
  }
}