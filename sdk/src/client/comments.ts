import { BaseClient } from './shared';
import { CommentsMainApi, CommentsTeamsApi } from '../generated/index.js';
import { CommentResponseModel } from '../generated/index.js';

/**
 * Client for retrieving comments from articles, questions, and answers in Stack Overflow Internal
 * 
 * The CommentClient provides methods to retrieve comments associated with different types of content.
 * Comments are read-only through this API and provide additional context and discussion around
 * the main content. The client includes convenient overloaded methods and helper functions for
 * working with comments across different content types.
 * 
 * Note: This client currently only supports reading comments. Comment creation, editing, and 
 * deletion are not implemented in the current API version.
 * 
 * @class CommentClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const commentClient = new CommentClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const commentClient = new CommentClient(config, 'team-123');
 */
export class CommentClient extends BaseClient {
  private mainApi: CommentsMainApi;
  private teamsApi?: CommentsTeamsApi;

  /**
   * Creates a new CommentClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new CommentClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new CommentClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new CommentsMainApi(config);
    if (teamId) {
      this.teamsApi = new CommentsTeamsApi(config);
    }
  }

  /**
   * Retrieves all comments for a specific article
   * 
   * @param {number} articleId - The unique identifier of the article
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @throws {Error} When the article is not found or the API request fails
   * 
   * @example
   * const comments = await commentClient.getArticleComments(123);
   * comments.forEach(comment => {
   *   console.log(`${comment.ownerDisplayName}: ${comment.body}`);
   *   console.log(`Score: ${comment.score}, Created: ${comment.creationDate}`);
   * });
   */
  async getArticleComments(articleId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdCommentsGet(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdCommentsGet(articleId);
    }, 'getArticleComments');
  }

  /**
   * Retrieves all comments for a specific question
   * 
   * @param {number} questionId - The unique identifier of the question
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @throws {Error} When the question is not found or the API request fails
   * 
   * @example
   * const comments = await commentClient.getQuestionComments(456);
   * console.log(`Found ${comments.length} comments on this question`);
   * 
   * // Find the highest-scored comment
   * const topComment = comments.reduce((prev, current) => 
   *   (current.score || 0) > (prev.score || 0) ? current : prev
   * );
   */
  async getQuestionComments(questionId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdCommentsGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdCommentsGet(questionId);
    }, 'getQuestionComments');
  }

  /**
   * Retrieves all comments for a specific answer
   * 
   * @param {number} questionId - The unique identifier of the question containing the answer
   * @param {number} answerId - The unique identifier of the answer
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @throws {Error} When the question or answer is not found, or the API request fails
   * 
   * @example
   * const comments = await commentClient.getAnswerComments(456, 789);
   * 
   * // Group comments by author
   * const commentsByAuthor = comments.reduce((acc, comment) => {
   *   const author = comment.ownerDisplayName || 'Anonymous';
   *   if (!acc[author]) acc[author] = [];
   *   acc[author].push(comment);
   *   return acc;
   * }, {});
   */
  async getAnswerComments(questionId: number, answerId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId);
    }, 'getAnswerComments');
  }

  /**
   * Retrieves comments for different content types using a unified interface
   * 
   * This overloaded method provides a convenient way to get comments without needing
   * to know which specific method to call for each content type.
   * 
   * @overload
   * @param {'article'} contentType - The type of content (article)
   * @param {number} contentId - The unique identifier of the article
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @overload
   * @param {'question'} contentType - The type of content (question)
   * @param {number} contentId - The unique identifier of the question
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @overload
   * @param {'answer'} contentType - The type of content (answer)
   * @param {number} questionId - The unique identifier of the question containing the answer
   * @param {number} answerId - The unique identifier of the answer
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of comments
   * 
   * @example
   * // Get comments for an article
   * const articleComments = await commentClient.getCommentsFor('article', 123);
   * 
   * @example
   * // Get comments for a question
   * const questionComments = await commentClient.getCommentsFor('question', 456);
   * 
   * @example
   * // Get comments for an answer
   * const answerComments = await commentClient.getCommentsFor('answer', 456, 789);
   */
  async getCommentsFor(contentType: 'article', contentId: number): Promise<Array<CommentResponseModel>>;
  async getCommentsFor(contentType: 'question', contentId: number): Promise<Array<CommentResponseModel>>;
  async getCommentsFor(contentType: 'answer', questionId: number, answerId: number): Promise<Array<CommentResponseModel>>;
  async getCommentsFor(
    contentType: 'article' | 'question' | 'answer', 
    contentId: number, 
    answerId?: number
  ): Promise<Array<CommentResponseModel>> {
    switch (contentType) {
      case 'article':
        return this.getArticleComments(contentId);
      case 'question':
        return this.getQuestionComments(contentId);
      case 'answer':
        if (answerId === undefined) {
          throw new Error('answerId is required when getting comments for an answer');
        }
        return this.getAnswerComments(contentId, answerId);
      default:
        throw new Error(`Unknown content type: ${contentType}`);
    }
  }

  /**
   * Gets the total number of comments for different content types
   * 
   * This method retrieves all comments and returns the count, providing a quick way
   * to check comment activity without processing the full comment list.
   * 
   * @overload
   * @param {'article'} contentType - The type of content (article)
   * @param {number} contentId - The unique identifier of the article
   * @returns {Promise<number>} A promise that resolves to the comment count
   * 
   * @overload
   * @param {'question'} contentType - The type of content (question)
   * @param {number} contentId - The unique identifier of the question
   * @returns {Promise<number>} A promise that resolves to the comment count
   * 
   * @overload
   * @param {'answer'} contentType - The type of content (answer)
   * @param {number} questionId - The unique identifier of the question containing the answer
   * @param {number} answerId - The unique identifier of the answer
   * @returns {Promise<number>} A promise that resolves to the comment count
   * 
   * @example
   * // Check comment counts for different content types
   * const articleCommentCount = await commentClient.getCommentCount('article', 123);
   * const questionCommentCount = await commentClient.getCommentCount('question', 456);
   * const answerCommentCount = await commentClient.getCommentCount('answer', 456, 789);
   * 
   * console.log(`Article has ${articleCommentCount} comments`);
   * console.log(`Question has ${questionCommentCount} comments`);
   * console.log(`Answer has ${answerCommentCount} comments`);
   */
  async getCommentCount(contentType: 'article' | 'question', contentId: number): Promise<number>;
  async getCommentCount(contentType: 'answer', questionId: number, answerId: number): Promise<number>;
  async getCommentCount(
    contentType: 'article' | 'question' | 'answer', 
    contentId: number, 
    answerId?: number
  ): Promise<number> {
    switch (contentType) {
      case 'article':
        const articleComments = await this.getCommentsFor('article', contentId);
        return articleComments.length;
      case 'question':
        const questionComments = await this.getCommentsFor('question', contentId);
        return questionComments.length;
      case 'answer':
        if (answerId === undefined) {
          throw new Error('answerId is required when getting comment count for an answer');
        }
        const answerComments = await this.getCommentsFor('answer', contentId, answerId);
        return answerComments.length;
      default:
        throw new Error(`Unknown content type: ${contentType}`);
    }
  }

  /**
   * Checks if content has any comments
   * 
   * This is a convenience method that's more efficient than checking if the comment
   * count is greater than zero, especially for content with many comments.
   * 
   * @overload
   * @param {'article'} contentType - The type of content (article)
   * @param {number} contentId - The unique identifier of the article
   * @returns {Promise<boolean>} A promise that resolves to true if the content has comments
   * 
   * @overload
   * @param {'question'} contentType - The type of content (question)
   * @param {number} contentId - The unique identifier of the question
   * @returns {Promise<boolean>} A promise that resolves to true if the content has comments
   * 
   * @overload
   * @param {'answer'} contentType - The type of content (answer)
   * @param {number} questionId - The unique identifier of the question containing the answer
   * @param {number} answerId - The unique identifier of the answer
   * @returns {Promise<boolean>} A promise that resolves to true if the content has comments
   * 
   * @example
   * const hasDiscussion = await commentClient.hasComments('article', 123);
   * if (hasDiscussion) {
   *   console.log('This article has generated discussion');
   *   const comments = await commentClient.getCommentsFor('article', 123);
   *   // Process comments...
   * }
   * 
   * @example
   * // Check multiple content types for activity
   * const [hasArticleComments, hasQuestionComments] = await Promise.all([
   *   commentClient.hasComments('article', 123),
   *   commentClient.hasComments('question', 456)
   * ]);
   */
  async hasComments(contentType: 'article' | 'question', contentId: number): Promise<boolean>;
  async hasComments(contentType: 'answer', questionId: number, answerId: number): Promise<boolean>;
  async hasComments(
    contentType: 'article' | 'question' | 'answer', 
    contentId: number, 
    answerId?: number
  ): Promise<boolean> {
    switch (contentType) {
      case 'article':
        const count = await this.getCommentCount('article', contentId);
        return count > 0;
      case 'question':
        const questionCount = await this.getCommentCount('question', contentId);
        return questionCount > 0;
      case 'answer':
        if (answerId === undefined) {
          throw new Error('answerId is required when checking if answer has comments');
        }
        const answerCount = await this.getCommentCount('answer', contentId, answerId);
        return answerCount > 0;
      default:
        throw new Error(`Unknown content type: ${contentType}`);
    }
  }

  /**
   * Retrieves the most recent comments for content, sorted by creation date
   * 
   * This method fetches all comments and sorts them by creation date (newest first),
   * with an optional limit to return only the most recent comments.
   * 
   * @overload
   * @param {'article'} contentType - The type of content (article)
   * @param {number} contentId - The unique identifier of the article
   * @param {number} [limit] - Optional limit on the number of comments to return
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of recent comments
   * 
   * @overload
   * @param {'question'} contentType - The type of content (question)
   * @param {number} contentId - The unique identifier of the question
   * @param {number} [limit] - Optional limit on the number of comments to return
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of recent comments
   * 
   * @overload
   * @param {'answer'} contentType - The type of content (answer)
   * @param {number} questionId - The unique identifier of the question containing the answer
   * @param {number} answerId - The unique identifier of the answer
   * @param {number} [limit] - Optional limit on the number of comments to return
   * @returns {Promise<Array<CommentResponseModel>>} A promise that resolves to an array of recent comments
   * 
   * @example
   * // Get the 5 most recent comments on an article
   * const recentComments = await commentClient.getRecentComments('article', 123, 5);
   * recentComments.forEach(comment => {
   *   console.log(`Recent: ${comment.ownerDisplayName} - ${comment.body}`);
   * });
   * 
   * @example
   * // Get all comments sorted by recency
   * const allRecentComments = await commentClient.getRecentComments('question', 456);
   * 
   * @example
   * // Get recent answer comments
   * const recentAnswerComments = await commentClient.getRecentComments('answer', 456, 789, 3);
   */
  async getRecentComments(
    contentType: 'article' | 'question', 
    contentId: number, 
    limit?: number
  ): Promise<Array<CommentResponseModel>>;
  async getRecentComments(
    contentType: 'answer', 
    questionId: number, 
    answerId: number, 
    limit?: number
  ): Promise<Array<CommentResponseModel>>;
  async getRecentComments(
    contentType: 'article' | 'question' | 'answer', 
    contentId: number, 
    answerIdOrLimit?: number, 
    limit?: number
  ): Promise<Array<CommentResponseModel>> {
    let comments: Array<CommentResponseModel>;
    
    if (contentType === 'answer') {
      comments = await this.getAnswerComments(contentId, answerIdOrLimit!);
      limit = limit;
    } else if (contentType === 'article') {
      comments = await this.getCommentsFor('article', contentId);
      limit = answerIdOrLimit;
    } else {
      comments = await this.getCommentsFor('question', contentId);
      limit = answerIdOrLimit;
    }

    // Sort by creation date (newest first)
    const sortedComments = comments.sort((a: CommentResponseModel, b: CommentResponseModel) => {
      if (a.creationDate && b.creationDate) {
        return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
      }
      return 0;
    });

    return limit ? sortedComments.slice(0, limit) : sortedComments;
  }
}