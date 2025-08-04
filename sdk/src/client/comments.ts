import { BaseClient } from './shared';
import { CommentsMainApi, CommentsTeamsApi } from '../generated/index.js';
import { CommentResponseModel } from '../generated/index.js';

export class CommentClient extends BaseClient {
  private mainApi: CommentsMainApi;
  private teamsApi?: CommentsTeamsApi;

  constructor(config: ReturnType<typeof import('../generated/configuration').createConfiguration>, private teamId?: string) {
    super();
    this.mainApi = new CommentsMainApi(config);
    if (teamId) {
      this.teamsApi = new CommentsTeamsApi(config);
    }
  }

  // Article comments
  async getArticleComments(articleId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamArticlesArticleIdCommentsGet(articleId, this.teamId);
      }
      
      return await this.mainApi.articlesArticleIdCommentsGet(articleId);
    }, 'getArticleComments');
  }

  // Question comments
  async getQuestionComments(questionId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdCommentsGet(questionId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdCommentsGet(questionId);
    }, 'getQuestionComments');
  }

  // Answer comments
  async getAnswerComments(questionId: number, answerId: number): Promise<Array<CommentResponseModel>> {
    return this.handleApiCall(async () => {
      if (this.teamId && this.teamsApi) {
        return await this.teamsApi.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, this.teamId);
      }
      
      return await this.mainApi.questionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId);
    }, 'getAnswerComments');
  }

  // Convenience methods for different content types
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

  // Helper methods for working with comment arrays
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

  // Filter comments by properties (assuming CommentResponseModel has common properties)
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

    // Sort by creation date if available (assuming creationDate property exists)
    const sortedComments = comments.sort((a: any, b: any) => {
      if (a.creationDate && b.creationDate) {
        return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
      }
      return 0;
    });

    return limit ? sortedComments.slice(0, limit) : sortedComments;
  }
}