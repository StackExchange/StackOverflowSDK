import { BaseClient } from './shared';
import { ArticlePermissionsRequestModel, ArticlesMainApi, ArticlesTeamsApi, ArticleType } from '../generated/dist';
import { 
  ArticleRequestModel,
  ArticleResponseModel,
  PaginatedArticles,
  PaginatedLinkedOrRelatedQuestions,
  ArticleSortParameter,
  LinkedOrRelatedQuestionsSortParameter,
  SortOrder
} from '../generated/dist';

export interface CreateArticleOptions {
  title: string;
  body: string;
  tags: string[];
  type: ArticleType;
  permissions: ArticlePermissionsRequestModel;
  // Add other article creation options as needed
}
export interface UpdateArticleOptions {
  title: string;
  body: string;
  tags: string[];
  type: ArticleType;
  permissions: ArticlePermissionsRequestModel;
  // Add other update options
}

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

export interface GetLinkedQuestionsOptions {
  page?: number;
  pageSize?: 15 | 30 | 50 | 100;
  sort?: LinkedOrRelatedQuestionsSortParameter;
  order?: SortOrder;
}

export class ArticleClient extends BaseClient {
  private mainApi: ArticlesMainApi;
  private teamsApi?: ArticlesTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/dist/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new ArticlesMainApi(config);
    if (teamId) {
      this.teamsApi = new ArticlesTeamsApi(config);
    }
  }

  // Core CRUD operations
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

  async get(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdGet(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdGet(articleId);
    }, 'get');
  }

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

  async delete(articleId: number): Promise<void> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        await this.teamsApi.teamsTeamArticlesArticleIdDelete(articleId, this.teamId);
        return;
      }
      
      await this.mainApi.articlesArticleIdDelete(articleId);
    }, 'delete');
  }

  // Voting methods (articles only support upvote, no downvote like questions)
  async upvote(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdUpvotePost(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdUpvotePost(articleId);
    }, 'upvote');
  }

  async removeUpvote(articleId: number): Promise<ArticleResponseModel> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdUpvoteDelete(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdUpvoteDelete(articleId);
    }, 'removeUpvote');
  }

  // Related content (unique to articles)
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
  async getByAuthor(authorId: number, options: Omit<GetArticlesOptions, 'authorId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, authorId });
  }

  async getByTag(tagId: number, options: Omit<GetArticlesOptions, 'tagId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, tagId: [tagId] });
  }

  async getByTags(tagIds: number[], options: Omit<GetArticlesOptions, 'tagId'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, tagId: tagIds });
  }

  async getByDateRange(from: Date, to: Date, options: Omit<GetArticlesOptions, 'from' | 'to'> = {}): Promise<PaginatedArticles> {
    return this.getAll({ ...options, from, to });
  }

  async getRecent(options: GetArticlesOptions = {}): Promise<PaginatedArticles> {
    return this.getAll({ 
      ...options, 
      sort: ArticleSortParameter.Creation,
      order: SortOrder.Desc 
    });
  }

  async getMostUpvoted(options: GetArticlesOptions = {}): Promise<PaginatedArticles> {
    return this.getAll({ 
      ...options, 
      sort: ArticleSortParameter.Score,
      order: SortOrder.Desc 
    });
  }
}