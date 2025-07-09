import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AnswerRequestModel } from '../models/AnswerRequestModel';
import { AnswerResponseModel } from '../models/AnswerResponseModel';
import { AnswerSearchResultModel } from '../models/AnswerSearchResultModel';
import { AnswerSummaryResponseModel } from '../models/AnswerSummaryResponseModel';
import { AnswersSortParameter } from '../models/AnswersSortParameter';
import { ArticlePermissionsRequestModel } from '../models/ArticlePermissionsRequestModel';
import { ArticlePermissionsResponseModel } from '../models/ArticlePermissionsResponseModel';
import { ArticlePermissionsType } from '../models/ArticlePermissionsType';
import { ArticleRequestModel } from '../models/ArticleRequestModel';
import { ArticleResponseModel } from '../models/ArticleResponseModel';
import { ArticleSearchResultModel } from '../models/ArticleSearchResultModel';
import { ArticleSortParameter } from '../models/ArticleSortParameter';
import { ArticleSummaryResponseModel } from '../models/ArticleSummaryResponseModel';
import { ArticleType } from '../models/ArticleType';
import { BountyResponseModel } from '../models/BountyResponseModel';
import { CollectionContentSummaryResponseModel } from '../models/CollectionContentSummaryResponseModel';
import { CollectionContentType } from '../models/CollectionContentType';
import { CollectionRequestModel } from '../models/CollectionRequestModel';
import { CollectionsPermissionsFilter } from '../models/CollectionsPermissionsFilter';
import { CollectionsResponseModel } from '../models/CollectionsResponseModel';
import { CollectionsSortParameter } from '../models/CollectionsSortParameter';
import { CollectionsSummaryResponseModel } from '../models/CollectionsSummaryResponseModel';
import { CommentResponseModel } from '../models/CommentResponseModel';
import { CommunityJoinModel } from '../models/CommunityJoinModel';
import { CommunityLeaveModel } from '../models/CommunityLeaveModel';
import { CommunityMemberResponseModel } from '../models/CommunityMemberResponseModel';
import { CommunityResponseModel } from '../models/CommunityResponseModel';
import { CommunitySortParameter } from '../models/CommunitySortParameter';
import { CommunitySummaryResponseModel } from '../models/CommunitySummaryResponseModel';
import { EditCollectionRequestModel } from '../models/EditCollectionRequestModel';
import { FlagOptionResponseModel } from '../models/FlagOptionResponseModel';
import { FlagRequestModel } from '../models/FlagRequestModel';
import { ImageResponseModel } from '../models/ImageResponseModel';
import { ImagesUploadPostRequest } from '../models/ImagesUploadPostRequest';
import { LinkedOrRelatedQuestionsSortParameter } from '../models/LinkedOrRelatedQuestionsSortParameter';
import { ManageUserResponseModel } from '../models/ManageUserResponseModel';
import { ManageUsersSortParameter } from '../models/ManageUsersSortParameter';
import { MentionedUserGroupResponseModel } from '../models/MentionedUserGroupResponseModel';
import { MentionedUserResponseModel } from '../models/MentionedUserResponseModel';
import { PaginatedAnswers } from '../models/PaginatedAnswers';
import { PaginatedArticles } from '../models/PaginatedArticles';
import { PaginatedCollections } from '../models/PaginatedCollections';
import { PaginatedCommunities } from '../models/PaginatedCommunities';
import { PaginatedLinkedOrRelatedQuestions } from '../models/PaginatedLinkedOrRelatedQuestions';
import { PaginatedManageUsers } from '../models/PaginatedManageUsers';
import { PaginatedQuestions } from '../models/PaginatedQuestions';
import { PaginatedSearchResults } from '../models/PaginatedSearchResults';
import { PaginatedSearchResultsItemsInner } from '../models/PaginatedSearchResultsItemsInner';
import { PaginatedTags } from '../models/PaginatedTags';
import { PaginatedUserGroups } from '../models/PaginatedUserGroups';
import { PaginatedUsers } from '../models/PaginatedUsers';
import { ProblemDetails } from '../models/ProblemDetails';
import { QuestionRequestModel } from '../models/QuestionRequestModel';
import { QuestionResponseModel } from '../models/QuestionResponseModel';
import { QuestionSearchResultModel } from '../models/QuestionSearchResultModel';
import { QuestionSortParameter } from '../models/QuestionSortParameter';
import { QuestionSummaryResponseModel } from '../models/QuestionSummaryResponseModel';
import { SearchResultModel } from '../models/SearchResultModel';
import { SearchSortParameter } from '../models/SearchSortParameter';
import { SortOrder } from '../models/SortOrder';
import { SubjectMatterExpertRequestModel } from '../models/SubjectMatterExpertRequestModel';
import { SubjectMatterExpertResponseModel } from '../models/SubjectMatterExpertResponseModel';
import { TagResponseModel } from '../models/TagResponseModel';
import { TagSummaryResponseModel } from '../models/TagSummaryResponseModel';
import { TagWatchersResponseModel } from '../models/TagWatchersResponseModel';
import { TagsSortParameter } from '../models/TagsSortParameter';
import { UserDetailsResponseModel } from '../models/UserDetailsResponseModel';
import { UserGroupRequestModel } from '../models/UserGroupRequestModel';
import { UserGroupResponseModel } from '../models/UserGroupResponseModel';
import { UserGroupsSortParameter } from '../models/UserGroupsSortParameter';
import { UserResponseModel } from '../models/UserResponseModel';
import { UserSummaryResponseModel } from '../models/UserSummaryResponseModel';
import { UsersSortParameter } from '../models/UsersSortParameter';

import { AnswersMainApiRequestFactory, AnswersMainApiResponseProcessor} from "../apis/AnswersMainApi";
export class ObservableAnswersMainApi {
    private requestFactory: AnswersMainApiRequestFactory;
    private responseProcessor: AnswersMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnswersMainApiRequestFactory,
        responseProcessor?: AnswersMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnswersMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnswersMainApiResponseProcessor();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdDelete(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<FlagOptionResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<Array<FlagOptionResponseModel>> {
        return this.questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<Array<FlagOptionResponseModel>>) => apiResponse.data));
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId: number, answerId: number, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, flagRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<void> {
        return this.questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId, answerId, flagRequestModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdGet(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId: number, answerId: number, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdPut(questionId, answerId, answerRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId, answerId, answerRequestModel, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdAnswersGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedAnswers>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersGet(questionId, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdAnswersGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedAnswers> {
        return this.questionsQuestionIdAnswersGetWithHttpInfo(questionId, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedAnswers>) => apiResponse.data));
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersPostWithHttpInfo(questionId: number, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersPost(questionId, answerRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersPost(questionId: number, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.questionsQuestionIdAnswersPostWithHttpInfo(questionId, answerRequestModel, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

}

import { AnswersTeamsApiRequestFactory, AnswersTeamsApiResponseProcessor} from "../apis/AnswersTeamsApi";
export class ObservableAnswersTeamsApi {
    private requestFactory: AnswersTeamsApiRequestFactory;
    private responseProcessor: AnswersTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnswersTeamsApiRequestFactory,
        responseProcessor?: AnswersTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnswersTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnswersTeamsApiResponseProcessor();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<FlagOptionResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<Array<FlagOptionResponseModel>> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<Array<FlagOptionResponseModel>>) => apiResponse.data));
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId: number, answerId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, team, flagRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId, answerId, team, flagRequestModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId: number, answerId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(questionId, answerId, team, answerRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId, answerId, team, answerRequestModel, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<AnswerSummaryResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<AnswerSummaryResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedAnswers>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersGet(questionId, team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdAnswersGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedAnswers> {
        return this.teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(questionId, team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedAnswers>) => apiResponse.data));
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(questionId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<AnswerResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersPost(questionId, team, answerRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersPost(questionId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: ConfigurationOptions): Observable<AnswerResponseModel> {
        return this.teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(questionId, team, answerRequestModel, _options).pipe(map((apiResponse: HttpInfo<AnswerResponseModel>) => apiResponse.data));
    }

}

import { ArticlesMainApiRequestFactory, ArticlesMainApiResponseProcessor} from "../apis/ArticlesMainApi";
export class ObservableArticlesMainApi {
    private requestFactory: ArticlesMainApiRequestFactory;
    private responseProcessor: ArticlesMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesMainApiRequestFactory,
        responseProcessor?: ArticlesMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArticlesMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArticlesMainApiResponseProcessor();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     */
    public articlesArticleIdDeleteWithHttpInfo(articleId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdDelete(articleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     */
    public articlesArticleIdDelete(articleId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.articlesArticleIdDeleteWithHttpInfo(articleId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     */
    public articlesArticleIdGetWithHttpInfo(articleId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdGet(articleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     */
    public articlesArticleIdGet(articleId: number, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.articlesArticleIdGetWithHttpInfo(articleId, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param articleId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public articlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdLinkedQuestionsGet(articleId, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdLinkedQuestionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param articleId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public articlesArticleIdLinkedQuestionsGet(articleId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.articlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param [articleRequestModel] 
     */
    public articlesArticleIdPutWithHttpInfo(articleId: number, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdPut(articleId, articleRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param [articleRequestModel] 
     */
    public articlesArticleIdPut(articleId: number, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.articlesArticleIdPutWithHttpInfo(articleId, articleRequestModel, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     */
    public articlesArticleIdUpvoteDeleteWithHttpInfo(articleId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdUpvoteDelete(articleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     */
    public articlesArticleIdUpvoteDelete(articleId: number, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.articlesArticleIdUpvoteDeleteWithHttpInfo(articleId, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     */
    public articlesArticleIdUpvotePostWithHttpInfo(articleId: number, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdUpvotePost(articleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     */
    public articlesArticleIdUpvotePost(articleId: number, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.articlesArticleIdUpvotePostWithHttpInfo(articleId, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public articlesGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedArticles>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesGet(page, pageSize, sort, order, tagId, authorId, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public articlesGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedArticles> {
        return this.articlesGetWithHttpInfo(page, pageSize, sort, order, tagId, authorId, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedArticles>) => apiResponse.data));
    }

    /**
     * Creates an article.
     * Create an article
     * @param [articleRequestModel] 
     */
    public articlesPostWithHttpInfo(articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesPost(articleRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an article.
     * Create an article
     * @param [articleRequestModel] 
     */
    public articlesPost(articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.articlesPostWithHttpInfo(articleRequestModel, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

}

import { ArticlesTeamsApiRequestFactory, ArticlesTeamsApiResponseProcessor} from "../apis/ArticlesTeamsApi";
export class ObservableArticlesTeamsApi {
    private requestFactory: ArticlesTeamsApiRequestFactory;
    private responseProcessor: ArticlesTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesTeamsApiRequestFactory,
        responseProcessor?: ArticlesTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ArticlesTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ArticlesTeamsApiResponseProcessor();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdDeleteWithHttpInfo(articleId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdDelete(articleId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdDelete(articleId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamArticlesArticleIdDeleteWithHttpInfo(articleId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdGetWithHttpInfo(articleId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdGet(articleId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdGet(articleId: number, team: string, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.teamsTeamArticlesArticleIdGetWithHttpInfo(articleId, team, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param articleId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdLinkedQuestionsGet(articleId, team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param articleId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamArticlesArticleIdLinkedQuestionsGet(articleId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId, team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesArticleIdPutWithHttpInfo(articleId: number, team: string, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdPut(articleId, team, articleRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesArticleIdPut(articleId: number, team: string, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.teamsTeamArticlesArticleIdPutWithHttpInfo(articleId, team, articleRequestModel, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(articleId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdUpvoteDelete(articleId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvoteDelete(articleId: number, team: string, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(articleId, team, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(articleId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdUpvotePost(articleId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvotePost(articleId: number, team: string, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(articleId, team, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamArticlesGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedArticles>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesGet(team, page, pageSize, sort, order, tagId, authorId, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamArticlesGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedArticles> {
        return this.teamsTeamArticlesGetWithHttpInfo(team, page, pageSize, sort, order, tagId, authorId, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedArticles>) => apiResponse.data));
    }

    /**
     * Creates an article.
     * Create an article
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesPostWithHttpInfo(team: string, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<ArticleResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesPost(team, articleRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an article.
     * Create an article
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesPost(team: string, articleRequestModel?: ArticleRequestModel, _options?: ConfigurationOptions): Observable<ArticleResponseModel> {
        return this.teamsTeamArticlesPostWithHttpInfo(team, articleRequestModel, _options).pipe(map((apiResponse: HttpInfo<ArticleResponseModel>) => apiResponse.data));
    }

}

import { CollectionsMainApiRequestFactory, CollectionsMainApiResponseProcessor} from "../apis/CollectionsMainApi";
export class ObservableCollectionsMainApi {
    private requestFactory: CollectionsMainApiRequestFactory;
    private responseProcessor: CollectionsMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsMainApiRequestFactory,
        responseProcessor?: CollectionsMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionsMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionsMainApiResponseProcessor();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdDeleteWithHttpInfo(collectionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.collectionsCollectionIdDelete(collectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionsCollectionIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdDelete(collectionId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.collectionsCollectionIdDeleteWithHttpInfo(collectionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdGetWithHttpInfo(collectionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.collectionsCollectionIdGet(collectionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionsCollectionIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdGet(collectionId: number, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.collectionsCollectionIdGetWithHttpInfo(collectionId, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param [editCollectionRequestModel] 
     */
    public collectionsCollectionIdPutWithHttpInfo(collectionId: number, editCollectionRequestModel?: EditCollectionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.collectionsCollectionIdPut(collectionId, editCollectionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionsCollectionIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param [editCollectionRequestModel] 
     */
    public collectionsCollectionIdPut(collectionId: number, editCollectionRequestModel?: EditCollectionRequestModel, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.collectionsCollectionIdPutWithHttpInfo(collectionId, editCollectionRequestModel, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [authorIds]
     * @param [partialTitle]
     * @param [permissions]
     * @param [_from]
     * @param [to]
     */
    public collectionsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedCollections>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.collectionsGet(page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [authorIds]
     * @param [partialTitle]
     * @param [permissions]
     * @param [_from]
     * @param [to]
     */
    public collectionsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedCollections> {
        return this.collectionsGetWithHttpInfo(page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedCollections>) => apiResponse.data));
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param [collectionRequestModel] 
     */
    public collectionsPostWithHttpInfo(collectionRequestModel?: CollectionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.collectionsPost(collectionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.collectionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param [collectionRequestModel] 
     */
    public collectionsPost(collectionRequestModel?: CollectionRequestModel, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.collectionsPostWithHttpInfo(collectionRequestModel, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

}

import { CollectionsTeamsApiRequestFactory, CollectionsTeamsApiResponseProcessor} from "../apis/CollectionsTeamsApi";
export class ObservableCollectionsTeamsApi {
    private requestFactory: CollectionsTeamsApiRequestFactory;
    private responseProcessor: CollectionsTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsTeamsApiRequestFactory,
        responseProcessor?: CollectionsTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CollectionsTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CollectionsTeamsApiResponseProcessor();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(collectionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamCollectionsCollectionIdDelete(collectionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdDelete(collectionId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(collectionId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdGetWithHttpInfo(collectionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamCollectionsCollectionIdGet(collectionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamCollectionsCollectionIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdGet(collectionId: number, team: string, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.teamsTeamCollectionsCollectionIdGetWithHttpInfo(collectionId, team, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param team
     * @param [editCollectionRequestModel] 
     */
    public teamsTeamCollectionsCollectionIdPutWithHttpInfo(collectionId: number, team: string, editCollectionRequestModel?: EditCollectionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamCollectionsCollectionIdPut(collectionId, team, editCollectionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamCollectionsCollectionIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param team
     * @param [editCollectionRequestModel] 
     */
    public teamsTeamCollectionsCollectionIdPut(collectionId: number, team: string, editCollectionRequestModel?: EditCollectionRequestModel, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.teamsTeamCollectionsCollectionIdPutWithHttpInfo(collectionId, team, editCollectionRequestModel, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [authorIds]
     * @param [partialTitle]
     * @param [permissions]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamCollectionsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedCollections>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamCollectionsGet(team, page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamCollectionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [authorIds]
     * @param [partialTitle]
     * @param [permissions]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamCollectionsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedCollections> {
        return this.teamsTeamCollectionsGetWithHttpInfo(team, page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedCollections>) => apiResponse.data));
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param team
     * @param [collectionRequestModel] 
     */
    public teamsTeamCollectionsPostWithHttpInfo(team: string, collectionRequestModel?: CollectionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamCollectionsPost(team, collectionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamCollectionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param team
     * @param [collectionRequestModel] 
     */
    public teamsTeamCollectionsPost(team: string, collectionRequestModel?: CollectionRequestModel, _options?: ConfigurationOptions): Observable<CollectionsResponseModel> {
        return this.teamsTeamCollectionsPostWithHttpInfo(team, collectionRequestModel, _options).pipe(map((apiResponse: HttpInfo<CollectionsResponseModel>) => apiResponse.data));
    }

}

import { CommentsMainApiRequestFactory, CommentsMainApiResponseProcessor} from "../apis/CommentsMainApi";
export class ObservableCommentsMainApi {
    private requestFactory: CommentsMainApiRequestFactory;
    private responseProcessor: CommentsMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsMainApiRequestFactory,
        responseProcessor?: CommentsMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentsMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentsMainApiResponseProcessor();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     */
    public articlesArticleIdCommentsGetWithHttpInfo(articleId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.articlesArticleIdCommentsGet(articleId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.articlesArticleIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     */
    public articlesArticleIdCommentsGet(articleId: number, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.articlesArticleIdCommentsGetWithHttpInfo(articleId, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGet(questionId: number, answerId: number, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId, answerId, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     */
    public questionsQuestionIdCommentsGetWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdCommentsGet(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     */
    public questionsQuestionIdCommentsGet(questionId: number, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.questionsQuestionIdCommentsGetWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

}

import { CommentsTeamsApiRequestFactory, CommentsTeamsApiResponseProcessor} from "../apis/CommentsTeamsApi";
export class ObservableCommentsTeamsApi {
    private requestFactory: CommentsTeamsApiRequestFactory;
    private responseProcessor: CommentsTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsTeamsApiRequestFactory,
        responseProcessor?: CommentsTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentsTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentsTeamsApiResponseProcessor();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(articleId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamArticlesArticleIdCommentsGet(articleId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdCommentsGet(articleId: number, team: string, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(articleId, team, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId: number, answerId: number, team: string, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId, answerId, team, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<CommentResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdCommentsGet(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdCommentsGet(questionId: number, team: string, _options?: ConfigurationOptions): Observable<Array<CommentResponseModel>> {
        return this.teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<Array<CommentResponseModel>>) => apiResponse.data));
    }

}

import { CommunitiesMainApiRequestFactory, CommunitiesMainApiResponseProcessor} from "../apis/CommunitiesMainApi";
export class ObservableCommunitiesMainApi {
    private requestFactory: CommunitiesMainApiRequestFactory;
    private responseProcessor: CommunitiesMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommunitiesMainApiRequestFactory,
        responseProcessor?: CommunitiesMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommunitiesMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommunitiesMainApiResponseProcessor();
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdGetWithHttpInfo(communityId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesCommunityIdGet(communityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesCommunityIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdGet(communityId: number, _options?: ConfigurationOptions): Observable<CommunityResponseModel> {
        return this.communitiesCommunityIdGetWithHttpInfo(communityId, _options).pipe(map((apiResponse: HttpInfo<CommunityResponseModel>) => apiResponse.data));
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param communityId Community ID
     * @param [communityJoinModel] 
     */
    public communitiesCommunityIdJoinBulkPostWithHttpInfo(communityId: number, communityJoinModel?: CommunityJoinModel, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesCommunityIdJoinBulkPost(communityId, communityJoinModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesCommunityIdJoinBulkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param communityId Community ID
     * @param [communityJoinModel] 
     */
    public communitiesCommunityIdJoinBulkPost(communityId: number, communityJoinModel?: CommunityJoinModel, _options?: ConfigurationOptions): Observable<CommunityResponseModel> {
        return this.communitiesCommunityIdJoinBulkPostWithHttpInfo(communityId, communityJoinModel, _options).pipe(map((apiResponse: HttpInfo<CommunityResponseModel>) => apiResponse.data));
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdJoinPostWithHttpInfo(communityId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesCommunityIdJoinPost(communityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesCommunityIdJoinPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdJoinPost(communityId: number, _options?: ConfigurationOptions): Observable<CommunityResponseModel> {
        return this.communitiesCommunityIdJoinPostWithHttpInfo(communityId, _options).pipe(map((apiResponse: HttpInfo<CommunityResponseModel>) => apiResponse.data));
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param communityId Community ID
     * @param [communityLeaveModel] 
     */
    public communitiesCommunityIdLeaveBulkPostWithHttpInfo(communityId: number, communityLeaveModel?: CommunityLeaveModel, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesCommunityIdLeaveBulkPost(communityId, communityLeaveModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesCommunityIdLeaveBulkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param communityId Community ID
     * @param [communityLeaveModel] 
     */
    public communitiesCommunityIdLeaveBulkPost(communityId: number, communityLeaveModel?: CommunityLeaveModel, _options?: ConfigurationOptions): Observable<CommunityResponseModel> {
        return this.communitiesCommunityIdLeaveBulkPostWithHttpInfo(communityId, communityLeaveModel, _options).pipe(map((apiResponse: HttpInfo<CommunityResponseModel>) => apiResponse.data));
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdLeavePostWithHttpInfo(communityId: number, _options?: ConfigurationOptions): Observable<HttpInfo<CommunityResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesCommunityIdLeavePost(communityId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesCommunityIdLeavePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdLeavePost(communityId: number, _options?: ConfigurationOptions): Observable<CommunityResponseModel> {
        return this.communitiesCommunityIdLeavePostWithHttpInfo(communityId, _options).pipe(map((apiResponse: HttpInfo<CommunityResponseModel>) => apiResponse.data));
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public communitiesGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CommunitySortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedCommunities>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.communitiesGet(page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.communitiesGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public communitiesGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CommunitySortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedCommunities> {
        return this.communitiesGetWithHttpInfo(page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedCommunities>) => apiResponse.data));
    }

}

import { ImagesMainApiRequestFactory, ImagesMainApiResponseProcessor} from "../apis/ImagesMainApi";
export class ObservableImagesMainApi {
    private requestFactory: ImagesMainApiRequestFactory;
    private responseProcessor: ImagesMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesMainApiRequestFactory,
        responseProcessor?: ImagesMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImagesMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImagesMainApiResponseProcessor();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     */
    public imagesImageIdGetWithHttpInfo(imageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.imagesImageIdGet(imageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesImageIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     */
    public imagesImageIdGet(imageId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.imagesImageIdGetWithHttpInfo(imageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param [file]
     */
    public imagesUploadPostWithHttpInfo(file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<ImageResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.imagesUploadPost(file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imagesUploadPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param [file]
     */
    public imagesUploadPost(file?: HttpFile, _options?: ConfigurationOptions): Observable<ImageResponseModel> {
        return this.imagesUploadPostWithHttpInfo(file, _options).pipe(map((apiResponse: HttpInfo<ImageResponseModel>) => apiResponse.data));
    }

}

import { ImagesTeamsApiRequestFactory, ImagesTeamsApiResponseProcessor} from "../apis/ImagesTeamsApi";
export class ObservableImagesTeamsApi {
    private requestFactory: ImagesTeamsApiRequestFactory;
    private responseProcessor: ImagesTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesTeamsApiRequestFactory,
        responseProcessor?: ImagesTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ImagesTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ImagesTeamsApiResponseProcessor();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     * @param team
     */
    public teamsTeamImagesImageIdGetWithHttpInfo(imageId: string, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamImagesImageIdGet(imageId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamImagesImageIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     * @param team
     */
    public teamsTeamImagesImageIdGet(imageId: string, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamImagesImageIdGetWithHttpInfo(imageId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param team
     * @param [file]
     */
    public teamsTeamImagesUploadPostWithHttpInfo(team: string, file?: HttpFile, _options?: ConfigurationOptions): Observable<HttpInfo<ImageResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamImagesUploadPost(team, file, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamImagesUploadPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param team
     * @param [file]
     */
    public teamsTeamImagesUploadPost(team: string, file?: HttpFile, _options?: ConfigurationOptions): Observable<ImageResponseModel> {
        return this.teamsTeamImagesUploadPostWithHttpInfo(team, file, _options).pipe(map((apiResponse: HttpInfo<ImageResponseModel>) => apiResponse.data));
    }

}

import { QuestionsMainApiRequestFactory, QuestionsMainApiResponseProcessor} from "../apis/QuestionsMainApi";
export class ObservableQuestionsMainApi {
    private requestFactory: QuestionsMainApiRequestFactory;
    private responseProcessor: QuestionsMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QuestionsMainApiRequestFactory,
        responseProcessor?: QuestionsMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QuestionsMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QuestionsMainApiResponseProcessor();
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isAnswered]
     * @param [hasAcceptedAnswer]
     * @param [questionId]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public questionsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsGet(page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isAnswered]
     * @param [hasAcceptedAnswer]
     * @param [questionId]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public questionsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedQuestions> {
        return this.questionsGetWithHttpInfo(page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedQuestions>) => apiResponse.data));
    }

    /**
     * Creates a question.
     * Create a question
     * @param [questionRequestModel] 
     */
    public questionsPostWithHttpInfo(questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsPost(questionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a question.
     * Create a question
     * @param [questionRequestModel] 
     */
    public questionsPost(questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsPostWithHttpInfo(questionRequestModel, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkDeleteWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdBookmarkDelete(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdBookmarkDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkDelete(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdBookmarkDeleteWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkPostWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdBookmarkPost(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdBookmarkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkPost(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdBookmarkPostWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDeleteWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdDelete(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDelete(questionId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.questionsQuestionIdDeleteWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvoteDeleteWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdDownvoteDelete(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdDownvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvoteDelete(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdDownvoteDeleteWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvotePostWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdDownvotePost(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdDownvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvotePost(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdDownvotePostWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     */
    public questionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<Array<FlagOptionResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdFlagsOptionsGet(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdFlagsOptionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     */
    public questionsQuestionIdFlagsOptionsGet(questionId: number, _options?: ConfigurationOptions): Observable<Array<FlagOptionResponseModel>> {
        return this.questionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<Array<FlagOptionResponseModel>>) => apiResponse.data));
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdFlagsPostWithHttpInfo(questionId: number, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdFlagsPost(questionId, flagRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdFlagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdFlagsPost(questionId: number, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<void> {
        return this.questionsQuestionIdFlagsPostWithHttpInfo(questionId, flagRequestModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     */
    public questionsQuestionIdGetWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdGet(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     */
    public questionsQuestionIdGet(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdGetWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdLinkedGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdLinkedGet(questionId, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdLinkedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdLinkedGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.questionsQuestionIdLinkedGetWithHttpInfo(questionId, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param [questionRequestModel] 
     */
    public questionsQuestionIdPutWithHttpInfo(questionId: number, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdPut(questionId, questionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param [questionRequestModel] 
     */
    public questionsQuestionIdPut(questionId: number, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdPutWithHttpInfo(questionId, questionRequestModel, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdRelatedGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdRelatedGet(questionId, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdRelatedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param questionId Question ID
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public questionsQuestionIdRelatedGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.questionsQuestionIdRelatedGetWithHttpInfo(questionId, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvoteDeleteWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdUpvoteDelete(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvoteDelete(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdUpvoteDeleteWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvotePostWithHttpInfo(questionId: number, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.questionsQuestionIdUpvotePost(questionId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.questionsQuestionIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvotePost(questionId: number, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.questionsQuestionIdUpvotePostWithHttpInfo(questionId, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

}

import { QuestionsTeamsApiRequestFactory, QuestionsTeamsApiResponseProcessor} from "../apis/QuestionsTeamsApi";
export class ObservableQuestionsTeamsApi {
    private requestFactory: QuestionsTeamsApiRequestFactory;
    private responseProcessor: QuestionsTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QuestionsTeamsApiRequestFactory,
        responseProcessor?: QuestionsTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QuestionsTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QuestionsTeamsApiResponseProcessor();
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isAnswered]
     * @param [hasAcceptedAnswer]
     * @param [questionId]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamQuestionsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsGet(team, page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isAnswered]
     * @param [hasAcceptedAnswer]
     * @param [questionId]
     * @param [tagId]
     * @param [authorId]
     * @param [_from]
     * @param [to]
     */
    public teamsTeamQuestionsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: ConfigurationOptions): Observable<PaginatedQuestions> {
        return this.teamsTeamQuestionsGetWithHttpInfo(team, page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, _options).pipe(map((apiResponse: HttpInfo<PaginatedQuestions>) => apiResponse.data));
    }

    /**
     * Creates a question.
     * Create a question
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsPostWithHttpInfo(team: string, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsPost(team, questionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a question.
     * Create a question
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsPost(team: string, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsPostWithHttpInfo(team, questionRequestModel, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdBookmarkDelete(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkDelete(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdBookmarkPost(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkPost(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdDelete(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDelete(questionId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdDownvoteDelete(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvoteDelete(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdDownvotePost(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvotePost(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<FlagOptionResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId: number, team: string, _options?: ConfigurationOptions): Observable<Array<FlagOptionResponseModel>> {
        return this.teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<Array<FlagOptionResponseModel>>) => apiResponse.data));
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(questionId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdFlagsPost(questionId, team, flagRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdFlagsPost(questionId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(questionId, team, flagRequestModel, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdGetWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdGet(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdGet(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdGetWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdLinkedGet(questionId, team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdLinkedGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(questionId, team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdPutWithHttpInfo(questionId: number, team: string, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdPut(questionId, team, questionRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdPut(questionId: number, team: string, questionRequestModel?: QuestionRequestModel, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdPutWithHttpInfo(questionId, team, questionRequestModel, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdRelatedGet(questionId, team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param questionId Question ID
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamQuestionsQuestionIdRelatedGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedLinkedOrRelatedQuestions> {
        return this.teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(questionId, team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedLinkedOrRelatedQuestions>) => apiResponse.data));
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdUpvoteDelete(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvoteDelete(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(questionId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<QuestionResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamQuestionsQuestionIdUpvotePost(questionId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvotePost(questionId: number, team: string, _options?: ConfigurationOptions): Observable<QuestionResponseModel> {
        return this.teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(questionId, team, _options).pipe(map((apiResponse: HttpInfo<QuestionResponseModel>) => apiResponse.data));
    }

}

import { SearchMainApiRequestFactory, SearchMainApiResponseProcessor} from "../apis/SearchMainApi";
export class ObservableSearchMainApi {
    private requestFactory: SearchMainApiRequestFactory;
    private responseProcessor: SearchMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchMainApiRequestFactory,
        responseProcessor?: SearchMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchMainApiResponseProcessor();
    }

    /**
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public searchGetWithHttpInfo(query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedSearchResults>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.searchGet(query, page, pageSize, sort, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public searchGet(query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: ConfigurationOptions): Observable<PaginatedSearchResults> {
        return this.searchGetWithHttpInfo(query, page, pageSize, sort, _options).pipe(map((apiResponse: HttpInfo<PaginatedSearchResults>) => apiResponse.data));
    }

}

import { SearchTeamsApiRequestFactory, SearchTeamsApiResponseProcessor} from "../apis/SearchTeamsApi";
export class ObservableSearchTeamsApi {
    private requestFactory: SearchTeamsApiRequestFactory;
    private responseProcessor: SearchTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchTeamsApiRequestFactory,
        responseProcessor?: SearchTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchTeamsApiResponseProcessor();
    }

    /**
     * @param team
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public teamsTeamSearchGetWithHttpInfo(team: string, query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedSearchResults>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamSearchGet(team, query, page, pageSize, sort, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamSearchGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param team
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public teamsTeamSearchGet(team: string, query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: ConfigurationOptions): Observable<PaginatedSearchResults> {
        return this.teamsTeamSearchGetWithHttpInfo(team, query, page, pageSize, sort, _options).pipe(map((apiResponse: HttpInfo<PaginatedSearchResults>) => apiResponse.data));
    }

}

import { StackyMainApiRequestFactory, StackyMainApiResponseProcessor} from "../apis/StackyMainApi";
export class ObservableStackyMainApi {
    private requestFactory: StackyMainApiRequestFactory;
    private responseProcessor: StackyMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StackyMainApiRequestFactory,
        responseProcessor?: StackyMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StackyMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StackyMainApiResponseProcessor();
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     */
    public stackyGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<string>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.stackyGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.stackyGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     */
    public stackyGet(_options?: ConfigurationOptions): Observable<string> {
        return this.stackyGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { TagsMainApiRequestFactory, TagsMainApiResponseProcessor} from "../apis/TagsMainApi";
export class ObservableTagsMainApi {
    private requestFactory: TagsMainApiRequestFactory;
    private responseProcessor: TagsMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsMainApiRequestFactory,
        responseProcessor?: TagsMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsMainApiResponseProcessor();
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [partialName]
     * @param [hasSmes]
     * @param [hasSynonyms]
     */
    public tagsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedTags>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsGet(page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [partialName]
     * @param [hasSmes]
     * @param [hasSynonyms]
     */
    public tagsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: ConfigurationOptions): Observable<PaginatedTags> {
        return this.tagsGetWithHttpInfo(page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, _options).pipe(map((apiResponse: HttpInfo<PaginatedTags>) => apiResponse.data));
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     */
    public tagsTagIdGetWithHttpInfo(tagId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TagResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdGet(tagId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     */
    public tagsTagIdGet(tagId: number, _options?: ConfigurationOptions): Observable<TagResponseModel> {
        return this.tagsTagIdGetWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<TagResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     */
    public tagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId: number, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsGet(tagId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     */
    public tagsTagIdSubjectMatterExpertsGet(tagId: number, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.tagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param [subjectMatterExpertRequestModel] 
     */
    public tagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId: number, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsPut(tagId, subjectMatterExpertRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param [subjectMatterExpertRequestModel] 
     */
    public tagsTagIdSubjectMatterExpertsPut(tagId: number, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.tagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId, subjectMatterExpertRequestModel, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param [requestBody] User group IDs
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param [requestBody] User group IDs
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId, requestBody, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId: number, userGroupId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId: number, userGroupId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId, userGroupId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param [requestBody] User ID(s)
     */
    public tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsUsersPost(tagId, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param [requestBody] User ID(s)
     */
    public tagsTagIdSubjectMatterExpertsUsersPost(tagId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId, requestBody, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId: number, userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId: number, userId: number, _options?: ConfigurationOptions): Observable<void> {
        return this.tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId, userId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     */
    public tagsTagIdTagWatchersGetWithHttpInfo(tagId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TagWatchersResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.tagsTagIdTagWatchersGet(tagId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.tagsTagIdTagWatchersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     */
    public tagsTagIdTagWatchersGet(tagId: number, _options?: ConfigurationOptions): Observable<TagWatchersResponseModel> {
        return this.tagsTagIdTagWatchersGetWithHttpInfo(tagId, _options).pipe(map((apiResponse: HttpInfo<TagWatchersResponseModel>) => apiResponse.data));
    }

}

import { TagsTeamsApiRequestFactory, TagsTeamsApiResponseProcessor} from "../apis/TagsTeamsApi";
export class ObservableTagsTeamsApi {
    private requestFactory: TagsTeamsApiRequestFactory;
    private responseProcessor: TagsTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsTeamsApiRequestFactory,
        responseProcessor?: TagsTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TagsTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TagsTeamsApiResponseProcessor();
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [partialName]
     * @param [hasSmes]
     * @param [hasSynonyms]
     */
    public teamsTeamTagsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedTags>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsGet(team, page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [partialName]
     * @param [hasSmes]
     * @param [hasSynonyms]
     */
    public teamsTeamTagsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: ConfigurationOptions): Observable<PaginatedTags> {
        return this.teamsTeamTagsGetWithHttpInfo(team, page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, _options).pipe(map((apiResponse: HttpInfo<PaginatedTags>) => apiResponse.data));
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdGetWithHttpInfo(tagId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<TagResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdGet(tagId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdGet(tagId: number, team: string, _options?: ConfigurationOptions): Observable<TagResponseModel> {
        return this.teamsTeamTagsTagIdGetWithHttpInfo(tagId, team, _options).pipe(map((apiResponse: HttpInfo<TagResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId: number, team: string, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId, team, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param team
     * @param [subjectMatterExpertRequestModel] 
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId: number, team: string, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId, team, subjectMatterExpertRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param team
     * @param [subjectMatterExpertRequestModel] 
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId: number, team: string, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId, team, subjectMatterExpertRequestModel, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User group IDs
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, team, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User group IDs
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId, team, requestBody, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId: number, userGroupId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId: number, userGroupId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId, userGroupId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<SubjectMatterExpertResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId, team, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<SubjectMatterExpertResponseModel> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId, team, requestBody, _options).pipe(map((apiResponse: HttpInfo<SubjectMatterExpertResponseModel>) => apiResponse.data));
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId: number, userId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId: number, userId: number, team: string, _options?: ConfigurationOptions): Observable<void> {
        return this.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId, userId, team, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     * @param team
     */
    public teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(tagId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<TagWatchersResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamTagsTagIdTagWatchersGet(tagId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     * @param team
     */
    public teamsTeamTagsTagIdTagWatchersGet(tagId: number, team: string, _options?: ConfigurationOptions): Observable<TagWatchersResponseModel> {
        return this.teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(tagId, team, _options).pipe(map((apiResponse: HttpInfo<TagWatchersResponseModel>) => apiResponse.data));
    }

}

import { UserGroupsMainApiRequestFactory, UserGroupsMainApiResponseProcessor} from "../apis/UserGroupsMainApi";
export class ObservableUserGroupsMainApi {
    private requestFactory: UserGroupsMainApiRequestFactory;
    private responseProcessor: UserGroupsMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsMainApiRequestFactory,
        responseProcessor?: UserGroupsMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserGroupsMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserGroupsMainApiResponseProcessor();
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public userGroupsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedUserGroups>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsGet(page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public userGroupsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedUserGroups> {
        return this.userGroupsGetWithHttpInfo(page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedUserGroups>) => apiResponse.data));
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param [userGroupRequestModel] 
     */
    public userGroupsPostWithHttpInfo(userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsPost(userGroupRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param [userGroupRequestModel] 
     */
    public userGroupsPost(userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.userGroupsPostWithHttpInfo(userGroupRequestModel, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     */
    public userGroupsUserGroupIdGetWithHttpInfo(userGroupId: number, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsUserGroupIdGet(userGroupId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsUserGroupIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     */
    public userGroupsUserGroupIdGet(userGroupId: number, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.userGroupsUserGroupIdGetWithHttpInfo(userGroupId, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param [requestBody] User ID(s)
     */
    public userGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsUserGroupIdMembersPost(userGroupId, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsUserGroupIdMembersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param [requestBody] User ID(s)
     */
    public userGroupsUserGroupIdMembersPost(userGroupId: number, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.userGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId, requestBody, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     */
    public userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId: number, userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     */
    public userGroupsUserGroupIdMembersUserIdDelete(userGroupId: number, userId: number, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId, userId, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param [userGroupRequestModel] 
     */
    public userGroupsUserGroupIdPutWithHttpInfo(userGroupId: number, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.userGroupsUserGroupIdPut(userGroupId, userGroupRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userGroupsUserGroupIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param [userGroupRequestModel] 
     */
    public userGroupsUserGroupIdPut(userGroupId: number, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.userGroupsUserGroupIdPutWithHttpInfo(userGroupId, userGroupRequestModel, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

}

import { UserGroupsTeamsApiRequestFactory, UserGroupsTeamsApiResponseProcessor} from "../apis/UserGroupsTeamsApi";
export class ObservableUserGroupsTeamsApi {
    private requestFactory: UserGroupsTeamsApiRequestFactory;
    private responseProcessor: UserGroupsTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsTeamsApiRequestFactory,
        responseProcessor?: UserGroupsTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserGroupsTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserGroupsTeamsApiResponseProcessor();
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamUserGroupsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedUserGroups>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsGet(team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamUserGroupsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedUserGroups> {
        return this.teamsTeamUserGroupsGetWithHttpInfo(team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedUserGroups>) => apiResponse.data));
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsPostWithHttpInfo(team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsPost(team, userGroupRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsPost(team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.teamsTeamUserGroupsPostWithHttpInfo(team, userGroupRequestModel, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(userGroupId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsUserGroupIdGet(userGroupId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdGet(userGroupId: number, team: string, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(userGroupId, team, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId, team, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId: number, team: string, requestBody?: Array<number>, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId, team, requestBody, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId: number, userId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId: number, userId: number, team: string, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId, userId, team, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(userGroupId: number, team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<HttpInfo<UserGroupResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUserGroupsUserGroupIdPut(userGroupId, team, userGroupRequestModel, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsUserGroupIdPut(userGroupId: number, team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: ConfigurationOptions): Observable<UserGroupResponseModel> {
        return this.teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(userGroupId, team, userGroupRequestModel, _options).pipe(map((apiResponse: HttpInfo<UserGroupResponseModel>) => apiResponse.data));
    }

}

import { UsersMainApiRequestFactory, UsersMainApiResponseProcessor} from "../apis/UsersMainApi";
export class ObservableUsersMainApi {
    private requestFactory: UsersMainApiRequestFactory;
    private responseProcessor: UsersMainApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersMainApiRequestFactory,
        responseProcessor?: UsersMainApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersMainApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersMainApiResponseProcessor();
    }

    /**
     * Retrieve a user by email address
     * @param email 
     */
    public usersByEmailEmailGetWithHttpInfo(email: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersByEmailEmailGet(email, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersByEmailEmailGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a user by email address
     * @param email 
     */
    public usersByEmailEmailGet(email: string, _options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.usersByEmailEmailGetWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     */
    public usersByExternalIdExternalIdGetWithHttpInfo(externalId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<UserResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersByExternalIdExternalIdGet(externalId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersByExternalIdExternalIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     */
    public usersByExternalIdExternalIdGet(externalId: string, _options?: ConfigurationOptions): Observable<Array<UserResponseModel>> {
        return this.usersByExternalIdExternalIdGetWithHttpInfo(externalId, _options).pipe(map((apiResponse: HttpInfo<Array<UserResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public usersGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedUsers>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersGet(page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public usersGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedUsers> {
        return this.usersGetWithHttpInfo(page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedUsers>) => apiResponse.data));
    }

    /**
     * Retrieves all users on the site or team, for user management.
     * Manage all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isDeactivated]
     * @param [lastAccessDateFrom]
     * @param [lastAccessDateTo]
     */
    public usersManageGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ManageUsersSortParameter, order?: SortOrder, isDeactivated?: boolean, lastAccessDateFrom?: Date, lastAccessDateTo?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedManageUsers>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersManageGet(page, pageSize, sort, order, isDeactivated, lastAccessDateFrom, lastAccessDateTo, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersManageGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all users on the site or team, for user management.
     * Manage all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     * @param [isDeactivated]
     * @param [lastAccessDateFrom]
     * @param [lastAccessDateTo]
     */
    public usersManageGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ManageUsersSortParameter, order?: SortOrder, isDeactivated?: boolean, lastAccessDateFrom?: Date, lastAccessDateTo?: Date, _options?: ConfigurationOptions): Observable<PaginatedManageUsers> {
        return this.usersManageGetWithHttpInfo(page, pageSize, sort, order, isDeactivated, lastAccessDateFrom, lastAccessDateTo, _options).pipe(map((apiResponse: HttpInfo<PaginatedManageUsers>) => apiResponse.data));
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     */
    public usersMeGetWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersMeGet(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersMeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     */
    public usersMeGet(_options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.usersMeGetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     */
    public usersUserIdGetWithHttpInfo(userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersUserIdGet(userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     */
    public usersUserIdGet(userId: number, _options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.usersUserIdGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     */
    public usersUserIdWatchedTagsGetWithHttpInfo(userId: number, _options?: ConfigurationOptions): Observable<HttpInfo<TagSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.usersUserIdWatchedTagsGet(userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersUserIdWatchedTagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     */
    public usersUserIdWatchedTagsGet(userId: number, _options?: ConfigurationOptions): Observable<TagSummaryResponseModel> {
        return this.usersUserIdWatchedTagsGetWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<TagSummaryResponseModel>) => apiResponse.data));
    }

}

import { UsersTeamsApiRequestFactory, UsersTeamsApiResponseProcessor} from "../apis/UsersTeamsApi";
export class ObservableUsersTeamsApi {
    private requestFactory: UsersTeamsApiRequestFactory;
    private responseProcessor: UsersTeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersTeamsApiRequestFactory,
        responseProcessor?: UsersTeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersTeamsApiResponseProcessor();
    }

    /**
     * Retrieve a user by email address
     * @param email 
     * @param team
     */
    public teamsTeamUsersByEmailEmailGetWithHttpInfo(email: string, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersByEmailEmailGet(email, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersByEmailEmailGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a user by email address
     * @param email 
     * @param team
     */
    public teamsTeamUsersByEmailEmailGet(email: string, team: string, _options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.teamsTeamUsersByEmailEmailGetWithHttpInfo(email, team, _options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     * @param team
     */
    public teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(externalId: string, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<Array<UserResponseModel>>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersByExternalIdExternalIdGet(externalId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     * @param team
     */
    public teamsTeamUsersByExternalIdExternalIdGet(externalId: string, team: string, _options?: ConfigurationOptions): Observable<Array<UserResponseModel>> {
        return this.teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(externalId, team, _options).pipe(map((apiResponse: HttpInfo<Array<UserResponseModel>>) => apiResponse.data));
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamUsersGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<HttpInfo<PaginatedUsers>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersGet(team, page, pageSize, sort, order, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param team
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public teamsTeamUsersGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: ConfigurationOptions): Observable<PaginatedUsers> {
        return this.teamsTeamUsersGetWithHttpInfo(team, page, pageSize, sort, order, _options).pipe(map((apiResponse: HttpInfo<PaginatedUsers>) => apiResponse.data));
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param team
     */
    public teamsTeamUsersMeGetWithHttpInfo(team: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersMeGet(team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersMeGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param team
     */
    public teamsTeamUsersMeGet(team: string, _options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.teamsTeamUsersMeGetWithHttpInfo(team, _options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     * @param team
     */
    public teamsTeamUsersUserIdGetWithHttpInfo(userId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserDetailsResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersUserIdGet(userId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersUserIdGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     * @param team
     */
    public teamsTeamUsersUserIdGet(userId: number, team: string, _options?: ConfigurationOptions): Observable<UserDetailsResponseModel> {
        return this.teamsTeamUsersUserIdGetWithHttpInfo(userId, team, _options).pipe(map((apiResponse: HttpInfo<UserDetailsResponseModel>) => apiResponse.data));
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     * @param team
     */
    public teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(userId: number, team: string, _options?: ConfigurationOptions): Observable<HttpInfo<TagSummaryResponseModel>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.teamsTeamUsersUserIdWatchedTagsGet(userId, team, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     * @param team
     */
    public teamsTeamUsersUserIdWatchedTagsGet(userId: number, team: string, _options?: ConfigurationOptions): Observable<TagSummaryResponseModel> {
        return this.teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(userId, team, _options).pipe(map((apiResponse: HttpInfo<TagSummaryResponseModel>) => apiResponse.data));
    }

}
