import { BaseClient } from './shared';
import { ArticlePermissionsRequestModel, ArticlesMainApi, ArticlesTeamsApi, ArticleType } from '../generated/index.js';
import { 
  ArticleRequestModel,
  ArticleResponseModel,
  PaginatedArticles,
  PaginatedLinkedOrRelatedQuestions,
  ArticleSortParameter,
  LinkedOrRelatedQuestionsSortParameter,
  SortOrder
} from '../generated/index.js';

/**
 * Options for creating a new article
 * @typedef {Object} CreateArticleOptions
 * @property {string} title - The purpose of the article, stated briefly in one sentence
 * @property {string} body - The main content of the article in Markdown format
 * @property {string[]} tags - Array of tag names to associate with the article
 * @property {ArticleType} type - The type of article (determines how it's categorized and displayed)
 * @property {ArticlePermissionsRequestModel} permissions - Permissions configuration controlling who can view and edit the article
 */
export interface CreateArticleOptions {
  title: string;
  body: string;
  tags: string[];
  type: ArticleType;
  permissions: ArticlePermissionsRequestModel;
}

/**
 * Options for updating an existing article
 * @typedef {Object} UpdateArticleOptions
 * @property {string} title - The updated purpose of the article, stated briefly in one sentence
 * @property {string} body - The updated main content of the article in Markdown format
 * @property {string[]} tags - Updated array of tag names to associate with the article
 * @property {ArticleType} type - The updated type of article
 * @property {ArticlePermissionsRequestModel} permissions - Updated permissions configuration
 */
export interface UpdateArticleOptions {
  title: string;
  body: string;
  tags: string[];
  type: ArticleType;
  permissions: ArticlePermissionsRequestModel;
}

/**
 * Options for retrieving articles with filtering, pagination and sorting
 * @typedef {Object} GetArticlesOptions
 * @property {number} [page] - Page number to retrieve (1-based)
 * @property {15|30|50|100} [pageSize] - Number of articles per page
 * @property {ArticleSortParameter} [sort] - Sort parameter ('activity', 'creation', 'score')
 * @property {SortOrder} [order] - Sort order ('asc' or 'desc')
 * @property {number[]} [tagId] - Array of tag IDs to filter articles by
 * @property {number} [authorId] - Filter articles by specific author ID
 * @property {Date} [from] - Filter articles created after this date
 * @property {Date} [to] - Filter articles created before this date
 */
export interface GetArticlesOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: ArticleSortParameter;
  order?: SortOrder;
  tagId?: Array<number>;
  authorId?: number;
  from?: Date;
  to?: Date;
}

/**
 * Options for retrieving linked questions with pagination and sorting
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
 * Client for managing articles in Stack Overflow for Teams
 * 
 * The ArticleClient provides comprehensive methods for creating, reading, updating,
 * and deleting articles, as well as managing upvotes and retrieving linked questions.
 * Articles are knowledge-base content that can be categorized, tagged, and linked
 * to questions. Unlike questions, articles support only upvoting (no downvoting)
 * and offer rich filtering capabilities by author, tags, and date ranges.
 * 
 * @class ArticleClient
 * @extends {BaseClient}
 * 
 * @example
 * // Initialize for main site
 * const articleClient = new ArticleClient(config);
 * 
 * @example
 * // Initialize for a specific team
 * const articleClient = new ArticleClient(config, 'team-123');
 */
export class ArticleClient extends BaseClient {
  private mainApi: ArticlesMainApi;
  private teamsApi?: ArticlesTeamsApi;

  /**
   * Creates a new ArticleClient instance
   * 
   * @param {ReturnType<typeof import('../generated/configuration').createConfiguration>} config - API configuration object
   * @param {string} [teamId] - Optional team ID for team-specific operations
   * 
   * @example
   * const config = createConfiguration({ ... });
   * const client = new ArticleClient(config);
   * 
   * @example
   * // For team-specific operations
   * const teamClient = new ArticleClient(config, 'my-team-id');
   */
  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new ArticlesMainApi(config);
    if (teamId) {
      this.teamsApi = new ArticlesTeamsApi(config);
    }
  }

  /**
   * Retrieves all articles with optional filtering, pagination and sorting
   * 
   * @param {GetArticlesOptions} [options={}] - Options for filtering, pagination and sorting
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated article results
   * 
   * @throws {Error} When the API request fails or returns an error
   * 
   * @example
   * // Get first page of articles with default settings
   * const articles = await articleClient.getAll();
   * 
   * @example
   * // Get articles with custom pagination and sorting
   * const articles = await articleClient.getAll({
   *   page: 2,
   *   pageSize: 50,
   *   sort: 'score',
   *   order: 'desc'
   * });
   * 
   * @example
   * // Filter by author and date range
   * const articles = await articleClient.getAll({
   *   authorId: 123,
   *   from: new Date('2024-01-01'),
   *   to: new Date('2024-12-31')
   * });
   * 
   * @example
   * // Access the results
   * console.log(`Total articles: ${articles.totalCount}`);
   * articles.items?.forEach(article => {
   *   console.log(`${article.title}: ${article.score} points, ${article.viewCount} views`);
   * });
   */
  async getAll(options: GetArticlesOptions = {}): Promise<PaginatedArticles> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesGet(
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order,
          options.tagId,
          options.authorId,
          options.from,
          options.to
        );
      }
      
      return await this.mainApi.articlesGet(
        options.page,
        options.pageSize,
        options.sort,
        options.order,
        options.tagId,
        options.authorId,
        options.from,
        options.to
      );
    }, 'getAll');
  }

  /**
   * Retrieves a specific article by its ID
   * 
   * @param {number} articleId - The unique identifier of the article
   * @returns {Promise<ArticleResponseModel>} A promise that resolves to the complete article details
   * 
   * @throws {Error} When the article is not found or the API request fails
   * 
   * @example
   * const article = await articleClient.get(123);
   * console.log(`Title: ${article.title}`);
   * console.log(`Body: ${article.body}`);
   * console.log(`Score: ${article.score}, Views: ${article.viewCount}`);
   * console.log(`Tags: ${article.tags?.map(tag => tag.name).join(', ')}`);
   * console.log(`Can edit: ${article.userCanEdit}`);
   */
  async get(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdGet(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdGet(articleId);
    }, 'get');
  }

  /**
   * Creates a new article
   * 
   * @param {CreateArticleOptions} options - The article content and configuration
   * @returns {Promise<ArticleResponseModel>} A promise that resolves to the created article
   * 
   * @throws {Error} When article creation fails due to validation errors or API issues
   * 
   * @example
   * const newArticle = await articleClient.create({
   *   title: 'How to Configure API Authentication',
   *   body: '## Overview\n\nThis article explains how to...',
   *   tags: ['api', 'authentication', 'security'],
   *   type: ArticleType.HowToGuide,
   *   permissions: {
   *     canView: ['everyone'],
   *     canEdit: ['moderators']
   *   }
   * });
   * console.log(`Created article with ID: ${newArticle.id}`);
   */
  async create(options: CreateArticleOptions): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      const request: ArticleRequestModel = {
        title: options.title,
        body: options.body,
        tags: options.tags,
        type: options.type,
        permissions: options.permissions
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesPost(this.teamId, request);
      }
      
      return await this.mainApi.articlesPost(request);
    }, 'create');
  }

  /**
   * Updates an existing article
   * 
   * @param {number} articleId - The unique identifier of the article to update
   * @param {UpdateArticleOptions} options - The updated article content and configuration
   * @returns {Promise<ArticleResponseModel>} A promise that resolves to the updated article
   * 
   * @throws {Error} When the article is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * const updatedArticle = await articleClient.update(123, {
   *   title: 'Updated: How to Configure API Authentication',
   *   body: '## Overview\n\nThis updated article explains...',
   *   tags: ['api', 'authentication', 'security', 'oauth'],
   *   type: ArticleType.HowToGuide,
   *   permissions: {
   *     canView: ['everyone'],
   *     canEdit: ['moderators', 'senior-developers']
   *   }
   * });
   */
  async update(articleId: number, options: UpdateArticleOptions): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      const request: ArticleRequestModel = {
        title: options.title,
        body: options.body,
        tags: options.tags,
        type: options.type,
        permissions: options.permissions,
      };

      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdPut(articleId, this.teamId, request);
      }
      
      return await this.mainApi.articlesArticleIdPut(articleId, request);
    }, 'update');
  }

  /**
   * Deletes an article
   * 
   * @param {number} articleId - The unique identifier of the article to delete
   * @returns {Promise<void>} A promise that resolves when the article is successfully deleted
   * 
   * @throws {Error} When the article is not found, user lacks permissions, or the API request fails
   * 
   * @example
   * await articleClient.delete(123);
   * console.log('Article deleted successfully');
   */
  async delete(articleId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamArticlesArticleIdDelete(articleId, this.teamId);
        return;
      }
      
      await this.mainApi.articlesArticleIdDelete(articleId);
    }, 'delete');
  }

  /**
   * Upvotes an article
   * 
   * Articles support upvoting but not downvoting. Upvotes increase the article's
   * score and help surface valuable content to other users.
   * 
   * @param {number} articleId - The unique identifier of the article to upvote
   * @returns {Promise<ArticleResponseModel>} A promise that resolves to the updated article
   * 
   * @throws {Error} When the article is not found, user lacks permissions, or has already upvoted
   * 
   * @example
   * const updatedArticle = await articleClient.upvote(123);
   * console.log(`New score: ${updatedArticle.score}`);
   * console.log(`User has upvoted: ${updatedArticle.userHasUpvoted}`);
   */
  async upvote(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdUpvotePost(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdUpvotePost(articleId);
    }, 'upvote');
  }

  /**
   * Removes an upvote from an article
   * 
   * @param {number} articleId - The unique identifier of the article to remove upvote from
   * @returns {Promise<ArticleResponseModel>} A promise that resolves to the updated article
   * 
   * @throws {Error} When the article is not found, user lacks permissions, or hasn't upvoted
   * 
   * @example
   * const updatedArticle = await articleClient.removeUpvote(123);
   * console.log(`Score after removing upvote: ${updatedArticle.score}`);
   * console.log(`User has upvoted: ${updatedArticle.userHasUpvoted}`);
   */
  async removeUpvote(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdUpvoteDelete(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdUpvoteDelete(articleId);
    }, 'removeUpvote');
  }

  /**
   * Retrieves questions that are linked to or related to a specific article
   * 
   * This method helps discover Q&A content that's connected to the article,
   * either through explicit linking or algorithmic relationships.
   * 
   * @param {number} articleId - The unique identifier of the article
   * @param {GetLinkedQuestionsOptions} [options={}] - Options for pagination and sorting
   * @returns {Promise<PaginatedLinkedOrRelatedQuestions>} A promise that resolves to paginated linked questions
   * 
   * @throws {Error} When the article is not found or the API request fails
   * 
   * @example
   * const linkedQuestions = await articleClient.getLinkedQuestions(123);
   * console.log(`Found ${linkedQuestions.totalCount} linked questions`);
   * 
   * @example
   * // Get linked questions sorted by score
   * const topQuestions = await articleClient.getLinkedQuestions(123, {
   *   sort: 'score',
   *   order: 'desc',
   *   pageSize: 10
   * });
   * 
   * topQuestions.items?.forEach(question => {
   *   console.log(`Q: ${question.title} (Score: ${question.score})`);
   * });
   */
  async getLinkedQuestions(articleId: number, options: GetLinkedQuestionsOptions = {}): Promise<PaginatedLinkedOrRelatedQuestions> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdLinkedQuestionsGet(
          articleId,
          this.teamId,
          options.page,
          options.pageSize,
          options.sort,
          options.order
        );
      }
      
      return await this.mainApi.articlesArticleIdLinkedQuestionsGet(
        articleId,
        options.page,
        options.pageSize,
        options.sort,
        options.order
      );
    }, 'getLinkedQuestions');
  }

  // Convenience methods for common use cases

  /**
   * Retrieves all articles by a specific author
   * 
   * @param {number} authorId - The unique identifier of the author
   * @param {Omit<GetArticlesOptions, 'authorId'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles by the author
   * 
   * @example
   * const authorArticles = await articleClient.getByAuthor(456, {
   *   sort: 'creation',
   *   order: 'desc'
   * });
   */
  async getByAuthor(authorId: number, options: Omit<GetArticlesOptions, 'authorId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, authorId });
  }

  /**
   * Retrieves all articles with a specific tag
   * 
   * @param {number} tagId - The unique identifier of the tag
   * @param {Omit<GetArticlesOptions, 'tagId'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles with the tag
   * 
   * @example
   * const javaScriptArticles = await articleClient.getByTag(123);
   */
  async getByTag(tagId: number, options: Omit<GetArticlesOptions, 'tagId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, tagId: [tagId] });
  }

  /**
   * Retrieves all articles with any of the specified tags
   * 
   * @param {number[]} tagIds - Array of tag IDs to filter by
   * @param {Omit<GetArticlesOptions, 'tagId'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles with any of the tags
   * 
   * @example
   * const techArticles = await articleClient.getByTags([123, 456, 789], {
   *   sort: 'score',
   *   order: 'desc'
   * });
   */
  async getByTags(tagIds: number[], options: Omit<GetArticlesOptions, 'tagId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, tagId: tagIds });
  }

  /**
   * Retrieves articles created within a specific date range
   * 
   * @param {Date} from - Start date for the range (inclusive)
   * @param {Date} to - End date for the range (inclusive)
   * @param {Omit<GetArticlesOptions, 'from' | 'to'>} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles in the date range
   * 
   * @example
   * const q1Articles = await articleClient.getByDateRange(
   *   new Date('2024-01-01'),
   *   new Date('2024-03-31')
   * );
   */
  async getByDateRange(from: Date, to: Date, options: Omit<GetArticlesOptions, 'from' | 'to'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, from, to });
  }

  /**
   * Retrieves the most recently created articles
   * 
   * @param {GetArticlesOptions} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles sorted by creation date (newest first)
   * 
   * @example
   * const recentArticles = await articleClient.getRecent({ pageSize: 10 });
   */
  async getRecent(options: GetArticlesOptions = {}): Promise<PaginatedArticles> {
    return this.getAll({ 
      ...options, 
      sort: ArticleSortParameter.Creation,
      order: SortOrder.Desc 
    });
  }

  /**
   * Retrieves the highest-scored articles
   * 
   * @param {GetArticlesOptions} [options={}] - Additional filtering and pagination options
   * @returns {Promise<PaginatedArticles>} A promise that resolves to paginated articles sorted by score (highest first)
   * 
   * @example
   * const topArticles = await articleClient.getMostUpvoted({ pageSize: 25 });
   */
  async getMostUpvoted(options: GetArticlesOptions = {}): Promise<PaginatedArticles> {
    return this.getAll({ 
      ...options, 
      sort: ArticleSortParameter.Score,
      order: SortOrder.Desc 
    });
  }
}