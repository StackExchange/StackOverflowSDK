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

/**
 * Options for creating or updating an answer
 * @typedef {Object} CreateAnswerOptions
 * @property {string} body - The main content of the answer in Markdown format
 */
export interface CreateAnswerOptions {
  body: string;
}

/**
 * Options for retrieving answers with pagination and sorting
 * @typedef {Object} GetAnswersOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of answers per page
 * @property {AnswersSortParameter} [sort] - Sort parameter ('score', 'modified', 'creation')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 */
export interface GetAnswersOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: 'score' | 'modified' | 'creation' | AnswersSortParameter;
  order?: 'asc' | 'desc' | SortOrder;
}

/**
 * Client for managing answers in Stack Overflow Internal
 * 
 * The AnswerClient provides methods to create, read, update, and delete answers,
 * as well as handle voting and moderation actions. It supports both main site
 * and team-specific operations based on the configuration provided.
 * 
 * @class AnswerClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const answerClient = new AnswerClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const answerClient = new AnswerClient(config, 'team-123');
 */
export class AnswerClient extends BaseClient {
  private mainApi: AnswersMainApi;
  private teamsApi?: AnswersTeamsApi;

  /**
   * Creates a new AnswerClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new AnswerClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new AnswerClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new AnswersMainApi(config);
    if (teamId) {
      this.teamsApi = new AnswersTeamsApi(config);
    }
  }

  /**
   * Retrieves all answers for a specific question with pagination and sorting options
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {GetAnswersOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedAnswers>} A promise that resolves to paginated answer results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of answers with default settings
   * const answers = await answerClient.getAll(123);
   * 
   * @example
   * // Get answers with custom pagination and sorting
   * const answers = await answerClient.getAll(123, {
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'score',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total answers: ${answers.totalCount}`);
   * console.log(`Current page: ${answers.page}`);
   * answers.items?.forEach(answer => {
   *   console.log(`Answer ${answer.id}: ${answer.score} points`);
   * });
   */
  async getAll(questionId: number, options: GetAnswersOptions = {}): Promise<PaginatedAnswers> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersGet(
          questionId, this.teamId, options.page, options.pageSize, options.sort as AnswersSortParameter, options.order as SortOrder 
        );
      }
      
      return await this.mainApi.questionsQuestionIdAnswersGet(
        questionId, options.page, options.pageSize, options.sort as AnswersSortParameter, options.order as SortOrder
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific answer by its ID
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer
   * @returns {Promise<AnswerResponseModel>} A promise that resolves to the complete answer details
   * 
   * @throws {Error} When the answer is not found or the API request fails
   * 
   * @example
   * const answer = await answerClient.get(123, 456);
   * console.log(`Answer body: ${answer.body}`);
   * console.log(`Score: ${answer.score}`);
   * console.log(`Accepted: ${answer.isAccepted}`);
   */
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

  /**
   * Creates a new answer for a question
   * 
   * @param {number} questionId - The unique identifier of the question to answer
   * @param {CreateAnswerOptions} options - The answer content and options
   * @returns {Promise<AnswerResponseModel>} A promise that resolves to the created answer
   * 
   * @throws {Error} When the answer creation fails due to validation errors or API issues
   * 
   * @example
   * const newAnswer = await answerClient.create(123, {
   *   body: '## Solution\n\nHere is how you solve this problem...'
   * });
   * console.log(`Created answer with ID: ${newAnswer.id}`);
   */
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

  /**
   * Updates an existing answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to update
   * @param {CreateAnswerOptions} options - The updated answer content
   * @returns {Promise<AnswerResponseModel>} A promise that resolves to the updated answer
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedAnswer = await answerClient.update(123, 456, {
   *   body: '## Updated Solution\n\nI have revised my answer...'
   * });
   */
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

  /**
   * Deletes an answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to delete
   * @returns {Promise<void>} A promise that resolves when the answer is successfully deleted
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * await answerClient.delete(123, 456);
   * console.log('Answer deleted successfully');
   */
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

  /**
   * Upvotes an answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to upvote
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or has already upvoted
   * 
   * @example
   * const updatedAnswer = await answerClient.upvote(123, 456);
   * console.log(`New score: ${updatedAnswer.score}`);
   */
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

  /**
   * Removes an upvote from an answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to remove upvote from
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or hasn't upvoted
   * 
   * @example
   * const updatedAnswer = await answerClient.removeUpvote(123, 456);
   * console.log(`Score after removing upvote: ${updatedAnswer.score}`);
   */
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

  /**
   * Downvotes an answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to downvote
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or has already downvoted
   * 
   * @example
   * const updatedAnswer = await answerClient.downvote(123, 456);
   * console.log(`New score: ${updatedAnswer.score}`);
   */
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

  /**
   * Removes a downvote from an answer
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to remove downvote from
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or hasn't downvoted
   * 
   * @example
   * const updatedAnswer = await answerClient.removeDownvote(123, 456);
   * console.log(`Score after removing downvote: ${updatedAnswer.score}`);
   */
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

  /**
   * Accepts an answer as the solution to a question
   * 
   * This action can typically only be performed by the question author or users with
   * sufficient privileges. Only one answer can be accepted per question.
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to accept
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or another answer is already accepted
   * 
   * @example
   * const acceptedAnswer = await answerClient.accept(123, 456);
   * console.log(`Answer accepted: ${acceptedAnswer.isAccepted}`);
   */
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

  /**
   * Unaccepts a previously accepted answer
   * 
   * This removes the accepted status from an answer, allowing a different answer
   * to be accepted instead.
   * 
   * @param {number} questionId - The unique identifier of the question
   * @param {number} answerId - The unique identifier of the answer to unaccept
   * @returns {Promise<AnswerSummaryResponseModel>} A promise that resolves to the updated answer summary
   * 
   * @throws {Error} When the answer is not found, user lacks permissions, or the answer wasn't accepted
   * 
   * @example
   * const unacceptedAnswer = await answerClient.unaccept(123, 456);
   * console.log(`Answer no longer accepted: ${!unacceptedAnswer.isAccepted}`);
   */
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

  // Flagging is possible through the API, for now I see this as an inherited utility from the Public forum as it is not used as much on SOE, I'll review this in future but for now will not support.
//   async getFlagOptions(questionId: number, answerId: number) {
//     return this.handleApiCall(async () => {
//       if (this.teamId && this.teamsApi) {
//         return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(
//           questionId, answerId, this.teamId
//         );
//       }
      
//       return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId);
//     }, 'getFlagOptions');
//   }

//   async flag(questionId: number, answerId: number, flagData: any) {
//     return this.handleApiCall(async () => {
//       if (this.teamId && this.teamsApi) {
//         return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(
//           questionId, answerId, this.teamId, flagData
//         );
//       }
      
//       return await this.mainApi.questionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, flagData);
//     }, 'flag');
//   }
}