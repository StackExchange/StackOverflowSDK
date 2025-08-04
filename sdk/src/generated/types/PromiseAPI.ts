import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAnswersMainApi } from './ObservableAPI';

import { AnswersMainApiRequestFactory, AnswersMainApiResponseProcessor} from "../apis/AnswersMainApi";
export class PromiseAnswersMainApi {
    private api: ObservableAnswersMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnswersMainApiRequestFactory,
        responseProcessor?: AnswersMainApiResponseProcessor
    ) {
        this.api = new ObservableAnswersMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDelete(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId: number, answerId: number, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId, answerId, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdGet(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId: number, answerId: number, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId, answerId, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdPut(questionId, answerId, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdAnswersGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedAnswers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersGetWithHttpInfo(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdAnswersGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedAnswers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersGet(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersPostWithHttpInfo(questionId: number, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersPostWithHttpInfo(questionId, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param [answerRequestModel] 
     */
    public questionsQuestionIdAnswersPost(questionId: number, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersPost(questionId, answerRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAnswersTeamsApi } from './ObservableAPI';

import { AnswersTeamsApiRequestFactory, AnswersTeamsApiResponseProcessor} from "../apis/AnswersTeamsApi";
export class PromiseAnswersTeamsApi {
    private api: ObservableAnswersTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnswersTeamsApiRequestFactory,
        responseProcessor?: AnswersTeamsApiResponseProcessor
    ) {
        this.api = new ObservableAnswersTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId: number, answerId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(questionId, answerId, team, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(questionId, answerId, team, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId: number, answerId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(questionId, answerId, team, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(questionId, answerId, team, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(questionId, answerId, team, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedAnswers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdAnswersGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedAnswers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersGet(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(questionId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(questionId, team, answerRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param team
     * @param [answerRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdAnswersPost(questionId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: PromiseConfigurationOptions): Promise<AnswerResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersPost(questionId, team, answerRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableArticlesMainApi } from './ObservableAPI';

import { ArticlesMainApiRequestFactory, ArticlesMainApiResponseProcessor} from "../apis/ArticlesMainApi";
export class PromiseArticlesMainApi {
    private api: ObservableArticlesMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesMainApiRequestFactory,
        responseProcessor?: ArticlesMainApiResponseProcessor
    ) {
        this.api = new ObservableArticlesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     */
    public articlesArticleIdDeleteWithHttpInfo(articleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdDeleteWithHttpInfo(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     */
    public articlesArticleIdDelete(articleId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdDelete(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     */
    public articlesArticleIdGetWithHttpInfo(articleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdGetWithHttpInfo(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     */
    public articlesArticleIdGet(articleId: number, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdGet(articleId, observableOptions);
        return result.toPromise();
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
    public articlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public articlesArticleIdLinkedQuestionsGet(articleId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdLinkedQuestionsGet(articleId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param [articleRequestModel] 
     */
    public articlesArticleIdPutWithHttpInfo(articleId: number, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdPutWithHttpInfo(articleId, articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param [articleRequestModel] 
     */
    public articlesArticleIdPut(articleId: number, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdPut(articleId, articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     */
    public articlesArticleIdUpvoteDeleteWithHttpInfo(articleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdUpvoteDeleteWithHttpInfo(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     */
    public articlesArticleIdUpvoteDelete(articleId: number, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdUpvoteDelete(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     */
    public articlesArticleIdUpvotePostWithHttpInfo(articleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdUpvotePostWithHttpInfo(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     */
    public articlesArticleIdUpvotePost(articleId: number, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdUpvotePost(articleId, observableOptions);
        return result.toPromise();
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
    public articlesGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedArticles>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesGetWithHttpInfo(page, pageSize, sort, order, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
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
    public articlesGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedArticles> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesGet(page, pageSize, sort, order, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param [articleRequestModel] 
     */
    public articlesPostWithHttpInfo(articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesPostWithHttpInfo(articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param [articleRequestModel] 
     */
    public articlesPost(articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesPost(articleRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableArticlesTeamsApi } from './ObservableAPI';

import { ArticlesTeamsApiRequestFactory, ArticlesTeamsApiResponseProcessor} from "../apis/ArticlesTeamsApi";
export class PromiseArticlesTeamsApi {
    private api: ObservableArticlesTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ArticlesTeamsApiRequestFactory,
        responseProcessor?: ArticlesTeamsApiResponseProcessor
    ) {
        this.api = new ObservableArticlesTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdDeleteWithHttpInfo(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdDeleteWithHttpInfo(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdDelete(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdDelete(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdGetWithHttpInfo(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdGetWithHttpInfo(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdGet(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdGet(articleId, team, observableOptions);
        return result.toPromise();
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
    public teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(articleId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamArticlesArticleIdLinkedQuestionsGet(articleId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdLinkedQuestionsGet(articleId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesArticleIdPutWithHttpInfo(articleId: number, team: string, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdPutWithHttpInfo(articleId, team, articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param articleId Article ID
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesArticleIdPut(articleId: number, team: string, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdPut(articleId, team, articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvoteDelete(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdUpvoteDelete(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdUpvotePost(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdUpvotePost(articleId, team, observableOptions);
        return result.toPromise();
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
    public teamsTeamArticlesGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedArticles>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesGetWithHttpInfo(team, page, pageSize, sort, order, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
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
    public teamsTeamArticlesGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ArticleSortParameter, order?: SortOrder, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedArticles> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesGet(team, page, pageSize, sort, order, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesPostWithHttpInfo(team: string, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesPostWithHttpInfo(team, articleRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param team
     * @param [articleRequestModel] 
     */
    public teamsTeamArticlesPost(team: string, articleRequestModel?: ArticleRequestModel, _options?: PromiseConfigurationOptions): Promise<ArticleResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesPost(team, articleRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCollectionsMainApi } from './ObservableAPI';

import { CollectionsMainApiRequestFactory, CollectionsMainApiResponseProcessor} from "../apis/CollectionsMainApi";
export class PromiseCollectionsMainApi {
    private api: ObservableCollectionsMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsMainApiRequestFactory,
        responseProcessor?: CollectionsMainApiResponseProcessor
    ) {
        this.api = new ObservableCollectionsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdDeleteWithHttpInfo(collectionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdDeleteWithHttpInfo(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdDelete(collectionId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdDelete(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdGetWithHttpInfo(collectionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdGetWithHttpInfo(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     */
    public collectionsCollectionIdGet(collectionId: number, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdGet(collectionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param [editCollectionRequestModel] 
     */
    public collectionsCollectionIdPutWithHttpInfo(collectionId: number, editCollectionRequestModel?: EditCollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdPutWithHttpInfo(collectionId, editCollectionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param [editCollectionRequestModel] 
     */
    public collectionsCollectionIdPut(collectionId: number, editCollectionRequestModel?: EditCollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsCollectionIdPut(collectionId, editCollectionRequestModel, observableOptions);
        return result.toPromise();
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
    public collectionsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCollections>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsGetWithHttpInfo(page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, observableOptions);
        return result.toPromise();
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
    public collectionsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedCollections> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsGet(page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param [collectionRequestModel] 
     */
    public collectionsPostWithHttpInfo(collectionRequestModel?: CollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsPostWithHttpInfo(collectionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param [collectionRequestModel] 
     */
    public collectionsPost(collectionRequestModel?: CollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.collectionsPost(collectionRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCollectionsTeamsApi } from './ObservableAPI';

import { CollectionsTeamsApiRequestFactory, CollectionsTeamsApiResponseProcessor} from "../apis/CollectionsTeamsApi";
export class PromiseCollectionsTeamsApi {
    private api: ObservableCollectionsTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CollectionsTeamsApiRequestFactory,
        responseProcessor?: CollectionsTeamsApiResponseProcessor
    ) {
        this.api = new ObservableCollectionsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(collectionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(collectionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdDelete(collectionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdDelete(collectionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdGetWithHttpInfo(collectionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdGetWithHttpInfo(collectionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param collectionId Collection ID
     * @param team
     */
    public teamsTeamCollectionsCollectionIdGet(collectionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdGet(collectionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param team
     * @param [editCollectionRequestModel] 
     */
    public teamsTeamCollectionsCollectionIdPutWithHttpInfo(collectionId: number, team: string, editCollectionRequestModel?: EditCollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdPutWithHttpInfo(collectionId, team, editCollectionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param collectionId Collection ID
     * @param team
     * @param [editCollectionRequestModel] 
     */
    public teamsTeamCollectionsCollectionIdPut(collectionId: number, team: string, editCollectionRequestModel?: EditCollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsCollectionIdPut(collectionId, team, editCollectionRequestModel, observableOptions);
        return result.toPromise();
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
    public teamsTeamCollectionsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCollections>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsGetWithHttpInfo(team, page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, observableOptions);
        return result.toPromise();
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
    public teamsTeamCollectionsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CollectionsSortParameter, order?: SortOrder, authorIds?: Array<number>, partialTitle?: string, permissions?: CollectionsPermissionsFilter, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedCollections> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsGet(team, page, pageSize, sort, order, authorIds, partialTitle, permissions, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param team
     * @param [collectionRequestModel] 
     */
    public teamsTeamCollectionsPostWithHttpInfo(team: string, collectionRequestModel?: CollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsPostWithHttpInfo(team, collectionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param team
     * @param [collectionRequestModel] 
     */
    public teamsTeamCollectionsPost(team: string, collectionRequestModel?: CollectionRequestModel, _options?: PromiseConfigurationOptions): Promise<CollectionsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamCollectionsPost(team, collectionRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCommentsMainApi } from './ObservableAPI';

import { CommentsMainApiRequestFactory, CommentsMainApiResponseProcessor} from "../apis/CommentsMainApi";
export class PromiseCommentsMainApi {
    private api: ObservableCommentsMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsMainApiRequestFactory,
        responseProcessor?: CommentsMainApiResponseProcessor
    ) {
        this.api = new ObservableCommentsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     */
    public articlesArticleIdCommentsGetWithHttpInfo(articleId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdCommentsGetWithHttpInfo(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     */
    public articlesArticleIdCommentsGet(articleId: number, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.articlesArticleIdCommentsGet(articleId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGet(questionId: number, answerId: number, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     */
    public questionsQuestionIdCommentsGetWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdCommentsGetWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     */
    public questionsQuestionIdCommentsGet(questionId: number, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdCommentsGet(questionId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCommentsTeamsApi } from './ObservableAPI';

import { CommentsTeamsApiRequestFactory, CommentsTeamsApiResponseProcessor} from "../apis/CommentsTeamsApi";
export class PromiseCommentsTeamsApi {
    private api: ObservableCommentsTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentsTeamsApiRequestFactory,
        responseProcessor?: CommentsTeamsApiResponseProcessor
    ) {
        this.api = new ObservableCommentsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     * @param team
     */
    public teamsTeamArticlesArticleIdCommentsGet(articleId: number, team: string, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamArticlesArticleIdCommentsGet(articleId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId: number, answerId: number, team: string, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId, answerId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdCommentsGet(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<Array<CommentResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdCommentsGet(questionId, team, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCommunitiesMainApi } from './ObservableAPI';

import { CommunitiesMainApiRequestFactory, CommunitiesMainApiResponseProcessor} from "../apis/CommunitiesMainApi";
export class PromiseCommunitiesMainApi {
    private api: ObservableCommunitiesMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommunitiesMainApiRequestFactory,
        responseProcessor?: CommunitiesMainApiResponseProcessor
    ) {
        this.api = new ObservableCommunitiesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdGetWithHttpInfo(communityId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdGetWithHttpInfo(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdGet(communityId: number, _options?: PromiseConfigurationOptions): Promise<CommunityResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdGet(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param communityId Community ID
     * @param [communityJoinModel] 
     */
    public communitiesCommunityIdJoinBulkPostWithHttpInfo(communityId: number, communityJoinModel?: CommunityJoinModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdJoinBulkPostWithHttpInfo(communityId, communityJoinModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param communityId Community ID
     * @param [communityJoinModel] 
     */
    public communitiesCommunityIdJoinBulkPost(communityId: number, communityJoinModel?: CommunityJoinModel, _options?: PromiseConfigurationOptions): Promise<CommunityResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdJoinBulkPost(communityId, communityJoinModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdJoinPostWithHttpInfo(communityId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdJoinPostWithHttpInfo(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdJoinPost(communityId: number, _options?: PromiseConfigurationOptions): Promise<CommunityResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdJoinPost(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param communityId Community ID
     * @param [communityLeaveModel] 
     */
    public communitiesCommunityIdLeaveBulkPostWithHttpInfo(communityId: number, communityLeaveModel?: CommunityLeaveModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdLeaveBulkPostWithHttpInfo(communityId, communityLeaveModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param communityId Community ID
     * @param [communityLeaveModel] 
     */
    public communitiesCommunityIdLeaveBulkPost(communityId: number, communityLeaveModel?: CommunityLeaveModel, _options?: PromiseConfigurationOptions): Promise<CommunityResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdLeaveBulkPost(communityId, communityLeaveModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdLeavePostWithHttpInfo(communityId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdLeavePostWithHttpInfo(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param communityId Community ID
     */
    public communitiesCommunityIdLeavePost(communityId: number, _options?: PromiseConfigurationOptions): Promise<CommunityResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesCommunityIdLeavePost(communityId, observableOptions);
        return result.toPromise();
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public communitiesGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CommunitySortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedCommunities>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesGetWithHttpInfo(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public communitiesGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: CommunitySortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedCommunities> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.communitiesGet(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }


}



import { ObservableImagesMainApi } from './ObservableAPI';

import { ImagesMainApiRequestFactory, ImagesMainApiResponseProcessor} from "../apis/ImagesMainApi";
export class PromiseImagesMainApi {
    private api: ObservableImagesMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesMainApiRequestFactory,
        responseProcessor?: ImagesMainApiResponseProcessor
    ) {
        this.api = new ObservableImagesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     */
    public imagesImageIdGetWithHttpInfo(imageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.imagesImageIdGetWithHttpInfo(imageId, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     */
    public imagesImageIdGet(imageId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.imagesImageIdGet(imageId, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param [file]
     */
    public imagesUploadPostWithHttpInfo(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ImageResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.imagesUploadPostWithHttpInfo(file, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param [file]
     */
    public imagesUploadPost(file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<ImageResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.imagesUploadPost(file, observableOptions);
        return result.toPromise();
    }


}



import { ObservableImagesTeamsApi } from './ObservableAPI';

import { ImagesTeamsApiRequestFactory, ImagesTeamsApiResponseProcessor} from "../apis/ImagesTeamsApi";
export class PromiseImagesTeamsApi {
    private api: ObservableImagesTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImagesTeamsApiRequestFactory,
        responseProcessor?: ImagesTeamsApiResponseProcessor
    ) {
        this.api = new ObservableImagesTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     * @param team
     */
    public teamsTeamImagesImageIdGetWithHttpInfo(imageId: string, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamImagesImageIdGetWithHttpInfo(imageId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param imageId
     * @param team
     */
    public teamsTeamImagesImageIdGet(imageId: string, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamImagesImageIdGet(imageId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param team
     * @param [file]
     */
    public teamsTeamImagesUploadPostWithHttpInfo(team: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ImageResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamImagesUploadPostWithHttpInfo(team, file, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param team
     * @param [file]
     */
    public teamsTeamImagesUploadPost(team: string, file?: HttpFile, _options?: PromiseConfigurationOptions): Promise<ImageResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamImagesUploadPost(team, file, observableOptions);
        return result.toPromise();
    }


}



import { ObservableQuestionsMainApi } from './ObservableAPI';

import { QuestionsMainApiRequestFactory, QuestionsMainApiResponseProcessor} from "../apis/QuestionsMainApi";
export class PromiseQuestionsMainApi {
    private api: ObservableQuestionsMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QuestionsMainApiRequestFactory,
        responseProcessor?: QuestionsMainApiResponseProcessor
    ) {
        this.api = new ObservableQuestionsMainApi(configuration, requestFactory, responseProcessor);
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
    public questionsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsGetWithHttpInfo(page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
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
    public questionsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsGet(page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param [questionRequestModel] 
     */
    public questionsPostWithHttpInfo(questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsPostWithHttpInfo(questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param [questionRequestModel] 
     */
    public questionsPost(questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsPost(questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkDeleteWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdBookmarkDeleteWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkDelete(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdBookmarkDelete(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkPostWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdBookmarkPostWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     */
    public questionsQuestionIdBookmarkPost(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdBookmarkPost(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDeleteWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDeleteWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDelete(questionId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDelete(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvoteDeleteWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDownvoteDeleteWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvoteDelete(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDownvoteDelete(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvotePostWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDownvotePostWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdDownvotePost(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdDownvotePost(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     */
    public questionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     */
    public questionsQuestionIdFlagsOptionsGet(questionId: number, _options?: PromiseConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdFlagsOptionsGet(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdFlagsPostWithHttpInfo(questionId: number, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdFlagsPostWithHttpInfo(questionId, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param [flagRequestModel] 
     */
    public questionsQuestionIdFlagsPost(questionId: number, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdFlagsPost(questionId, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     */
    public questionsQuestionIdGetWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdGetWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     */
    public questionsQuestionIdGet(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdGet(questionId, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdLinkedGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdLinkedGetWithHttpInfo(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdLinkedGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdLinkedGet(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param [questionRequestModel] 
     */
    public questionsQuestionIdPutWithHttpInfo(questionId: number, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdPutWithHttpInfo(questionId, questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param [questionRequestModel] 
     */
    public questionsQuestionIdPut(questionId: number, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdPut(questionId, questionRequestModel, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdRelatedGetWithHttpInfo(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdRelatedGetWithHttpInfo(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public questionsQuestionIdRelatedGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdRelatedGet(questionId, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvoteDeleteWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdUpvoteDeleteWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvoteDelete(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdUpvoteDelete(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvotePostWithHttpInfo(questionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdUpvotePostWithHttpInfo(questionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     */
    public questionsQuestionIdUpvotePost(questionId: number, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.questionsQuestionIdUpvotePost(questionId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableQuestionsTeamsApi } from './ObservableAPI';

import { QuestionsTeamsApiRequestFactory, QuestionsTeamsApiResponseProcessor} from "../apis/QuestionsTeamsApi";
export class PromiseQuestionsTeamsApi {
    private api: ObservableQuestionsTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QuestionsTeamsApiRequestFactory,
        responseProcessor?: QuestionsTeamsApiResponseProcessor
    ) {
        this.api = new ObservableQuestionsTeamsApi(configuration, requestFactory, responseProcessor);
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
    public teamsTeamQuestionsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsGetWithHttpInfo(team, page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: QuestionSortParameter, order?: SortOrder, isAnswered?: boolean, hasAcceptedAnswer?: boolean, questionId?: Array<number>, tagId?: Array<number>, authorId?: number, _from?: Date, to?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsGet(team, page, pageSize, sort, order, isAnswered, hasAcceptedAnswer, questionId, tagId, authorId, _from, to, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsPostWithHttpInfo(team: string, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsPostWithHttpInfo(team, questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsPost(team: string, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsPost(team, questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkDelete(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdBookmarkDelete(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdBookmarkPost(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdBookmarkPost(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDelete(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDelete(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvoteDelete(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDownvoteDelete(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdDownvotePost(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdDownvotePost(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdFlagsOptionsGet(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(questionId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(questionId, team, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param questionId Question ID
     * @param team
     * @param [flagRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdFlagsPost(questionId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdFlagsPost(questionId, team, flagRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdGetWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdGetWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdGet(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdGet(questionId, team, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdLinkedGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdLinkedGet(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdPutWithHttpInfo(questionId: number, team: string, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdPutWithHttpInfo(questionId, team, questionRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param questionId Question ID
     * @param team
     * @param [questionRequestModel] 
     */
    public teamsTeamQuestionsQuestionIdPut(questionId: number, team: string, questionRequestModel?: QuestionRequestModel, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdPut(questionId, team, questionRequestModel, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamQuestionsQuestionIdRelatedGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: LinkedOrRelatedQuestionsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdRelatedGet(questionId, team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvoteDelete(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdUpvoteDelete(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(questionId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param questionId Question ID
     * @param team
     */
    public teamsTeamQuestionsQuestionIdUpvotePost(questionId: number, team: string, _options?: PromiseConfigurationOptions): Promise<QuestionResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamQuestionsQuestionIdUpvotePost(questionId, team, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchMainApi } from './ObservableAPI';

import { SearchMainApiRequestFactory, SearchMainApiResponseProcessor} from "../apis/SearchMainApi";
export class PromiseSearchMainApi {
    private api: ObservableSearchMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchMainApiRequestFactory,
        responseProcessor?: SearchMainApiResponseProcessor
    ) {
        this.api = new ObservableSearchMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public searchGetWithHttpInfo(query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedSearchResults>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchGetWithHttpInfo(query, page, pageSize, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public searchGet(query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: PromiseConfigurationOptions): Promise<PaginatedSearchResults> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.searchGet(query, page, pageSize, sort, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchTeamsApi } from './ObservableAPI';

import { SearchTeamsApiRequestFactory, SearchTeamsApiResponseProcessor} from "../apis/SearchTeamsApi";
export class PromiseSearchTeamsApi {
    private api: ObservableSearchTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchTeamsApiRequestFactory,
        responseProcessor?: SearchTeamsApiResponseProcessor
    ) {
        this.api = new ObservableSearchTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param team
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public teamsTeamSearchGetWithHttpInfo(team: string, query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedSearchResults>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamSearchGetWithHttpInfo(team, query, page, pageSize, sort, observableOptions);
        return result.toPromise();
    }

    /**
     * @param team
     * @param [query]
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     */
    public teamsTeamSearchGet(team: string, query?: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: SearchSortParameter, _options?: PromiseConfigurationOptions): Promise<PaginatedSearchResults> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamSearchGet(team, query, page, pageSize, sort, observableOptions);
        return result.toPromise();
    }


}



import { ObservableStackyMainApi } from './ObservableAPI';

import { StackyMainApiRequestFactory, StackyMainApiResponseProcessor} from "../apis/StackyMainApi";
export class PromiseStackyMainApi {
    private api: ObservableStackyMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StackyMainApiRequestFactory,
        responseProcessor?: StackyMainApiResponseProcessor
    ) {
        this.api = new ObservableStackyMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     */
    public stackyGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<string>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stackyGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     */
    public stackyGet(_options?: PromiseConfigurationOptions): Promise<string> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.stackyGet(observableOptions);
        return result.toPromise();
    }


}



import { ObservableTagsMainApi } from './ObservableAPI';

import { TagsMainApiRequestFactory, TagsMainApiResponseProcessor} from "../apis/TagsMainApi";
export class PromiseTagsMainApi {
    private api: ObservableTagsMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsMainApiRequestFactory,
        responseProcessor?: TagsMainApiResponseProcessor
    ) {
        this.api = new ObservableTagsMainApi(configuration, requestFactory, responseProcessor);
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
    public tagsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedTags>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsGetWithHttpInfo(page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, observableOptions);
        return result.toPromise();
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
    public tagsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: PromiseConfigurationOptions): Promise<PaginatedTags> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsGet(page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     */
    public tagsTagIdGetWithHttpInfo(tagId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdGetWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     */
    public tagsTagIdGet(tagId: number, _options?: PromiseConfigurationOptions): Promise<TagResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdGet(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     */
    public tagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     */
    public tagsTagIdSubjectMatterExpertsGet(tagId: number, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsGet(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param [subjectMatterExpertRequestModel] 
     */
    public tagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId: number, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId, subjectMatterExpertRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param [subjectMatterExpertRequestModel] 
     */
    public tagsTagIdSubjectMatterExpertsPut(tagId: number, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsPut(tagId, subjectMatterExpertRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param [requestBody] User group IDs
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param [requestBody] User group IDs
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId: number, userGroupId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId, userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId: number, userGroupId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param [requestBody] User ID(s)
     */
    public tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param [requestBody] User ID(s)
     */
    public tagsTagIdSubjectMatterExpertsUsersPost(tagId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUsersPost(tagId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId: number, userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId: number, userId: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     */
    public tagsTagIdTagWatchersGetWithHttpInfo(tagId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagWatchersResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdTagWatchersGetWithHttpInfo(tagId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     */
    public tagsTagIdTagWatchersGet(tagId: number, _options?: PromiseConfigurationOptions): Promise<TagWatchersResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.tagsTagIdTagWatchersGet(tagId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableTagsTeamsApi } from './ObservableAPI';

import { TagsTeamsApiRequestFactory, TagsTeamsApiResponseProcessor} from "../apis/TagsTeamsApi";
export class PromiseTagsTeamsApi {
    private api: ObservableTagsTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TagsTeamsApiRequestFactory,
        responseProcessor?: TagsTeamsApiResponseProcessor
    ) {
        this.api = new ObservableTagsTeamsApi(configuration, requestFactory, responseProcessor);
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
    public teamsTeamTagsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedTags>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsGetWithHttpInfo(team, page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, observableOptions);
        return result.toPromise();
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
    public teamsTeamTagsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: PromiseConfigurationOptions): Promise<PaginatedTags> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsGet(team, page, pageSize, sort, order, partialName, hasSmes, hasSynonyms, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdGetWithHttpInfo(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdGetWithHttpInfo(tagId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdGet(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<TagResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdGet(tagId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(tagId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param team
     * @param [subjectMatterExpertRequestModel] 
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId: number, team: string, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(tagId, team, subjectMatterExpertRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param team
     * @param [subjectMatterExpertRequestModel] 
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId: number, team: string, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId, team, subjectMatterExpertRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User group IDs
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(tagId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User group IDs
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId: number, userGroupId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(tagId, userGroupId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId: number, userGroupId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId, userGroupId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(tagId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId: number, userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(tagId, userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId: number, userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId, userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     * @param team
     */
    public teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagWatchersResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(tagId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     * @param team
     */
    public teamsTeamTagsTagIdTagWatchersGet(tagId: number, team: string, _options?: PromiseConfigurationOptions): Promise<TagWatchersResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamTagsTagIdTagWatchersGet(tagId, team, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserGroupsMainApi } from './ObservableAPI';

import { UserGroupsMainApiRequestFactory, UserGroupsMainApiResponseProcessor} from "../apis/UserGroupsMainApi";
export class PromiseUserGroupsMainApi {
    private api: ObservableUserGroupsMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsMainApiRequestFactory,
        responseProcessor?: UserGroupsMainApiResponseProcessor
    ) {
        this.api = new ObservableUserGroupsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public userGroupsGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedUserGroups>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsGetWithHttpInfo(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public userGroupsGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedUserGroups> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsGet(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param [userGroupRequestModel] 
     */
    public userGroupsPostWithHttpInfo(userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsPostWithHttpInfo(userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param [userGroupRequestModel] 
     */
    public userGroupsPost(userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsPost(userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     */
    public userGroupsUserGroupIdGetWithHttpInfo(userGroupId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdGetWithHttpInfo(userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     */
    public userGroupsUserGroupIdGet(userGroupId: number, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdGet(userGroupId, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param [requestBody] User ID(s)
     */
    public userGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param [requestBody] User ID(s)
     */
    public userGroupsUserGroupIdMembersPost(userGroupId: number, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdMembersPost(userGroupId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     */
    public userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId: number, userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     */
    public userGroupsUserGroupIdMembersUserIdDelete(userGroupId: number, userId: number, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param [userGroupRequestModel] 
     */
    public userGroupsUserGroupIdPutWithHttpInfo(userGroupId: number, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdPutWithHttpInfo(userGroupId, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param [userGroupRequestModel] 
     */
    public userGroupsUserGroupIdPut(userGroupId: number, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.userGroupsUserGroupIdPut(userGroupId, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUserGroupsTeamsApi } from './ObservableAPI';

import { UserGroupsTeamsApiRequestFactory, UserGroupsTeamsApiResponseProcessor} from "../apis/UserGroupsTeamsApi";
export class PromiseUserGroupsTeamsApi {
    private api: ObservableUserGroupsTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserGroupsTeamsApiRequestFactory,
        responseProcessor?: UserGroupsTeamsApiResponseProcessor
    ) {
        this.api = new ObservableUserGroupsTeamsApi(configuration, requestFactory, responseProcessor);
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
    public teamsTeamUserGroupsGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedUserGroups>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsGetWithHttpInfo(team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamUserGroupsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedUserGroups> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsGet(team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsPostWithHttpInfo(team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsPostWithHttpInfo(team, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsPost(team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsPost(team, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(userGroupId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(userGroupId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdGet(userGroupId: number, team: string, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdGet(userGroupId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(userGroupId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param team
     * @param [requestBody] User ID(s)
     */
    public teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId: number, team: string, requestBody?: Array<number>, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId, team, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId: number, userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(userGroupId, userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     * @param team
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId: number, userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId, userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(userGroupId: number, team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(userGroupId, team, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param team
     * @param [userGroupRequestModel] 
     */
    public teamsTeamUserGroupsUserGroupIdPut(userGroupId: number, team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: PromiseConfigurationOptions): Promise<UserGroupResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUserGroupsUserGroupIdPut(userGroupId, team, userGroupRequestModel, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersMainApi } from './ObservableAPI';

import { UsersMainApiRequestFactory, UsersMainApiResponseProcessor} from "../apis/UsersMainApi";
export class PromiseUsersMainApi {
    private api: ObservableUsersMainApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersMainApiRequestFactory,
        responseProcessor?: UsersMainApiResponseProcessor
    ) {
        this.api = new ObservableUsersMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user by email address
     * @param email 
     */
    public usersByEmailEmailGetWithHttpInfo(email: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersByEmailEmailGetWithHttpInfo(email, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by email address
     * @param email 
     */
    public usersByEmailEmailGet(email: string, _options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersByEmailEmailGet(email, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     */
    public usersByExternalIdExternalIdGetWithHttpInfo(externalId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersByExternalIdExternalIdGetWithHttpInfo(externalId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     */
    public usersByExternalIdExternalIdGet(externalId: string, _options?: PromiseConfigurationOptions): Promise<Array<UserResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersByExternalIdExternalIdGet(externalId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public usersGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedUsers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersGetWithHttpInfo(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param [page]
     * @param [pageSize]
     * @param [sort]
     * @param [order]
     */
    public usersGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedUsers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersGet(page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public usersManageGetWithHttpInfo(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ManageUsersSortParameter, order?: SortOrder, isDeactivated?: boolean, lastAccessDateFrom?: Date, lastAccessDateTo?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedManageUsers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersManageGetWithHttpInfo(page, pageSize, sort, order, isDeactivated, lastAccessDateFrom, lastAccessDateTo, observableOptions);
        return result.toPromise();
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
    public usersManageGet(page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: ManageUsersSortParameter, order?: SortOrder, isDeactivated?: boolean, lastAccessDateFrom?: Date, lastAccessDateTo?: Date, _options?: PromiseConfigurationOptions): Promise<PaginatedManageUsers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersManageGet(page, pageSize, sort, order, isDeactivated, lastAccessDateFrom, lastAccessDateTo, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     */
    public usersMeGetWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersMeGetWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     */
    public usersMeGet(_options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersMeGet(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     */
    public usersUserIdGetWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersUserIdGetWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     */
    public usersUserIdGet(userId: number, _options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersUserIdGet(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     */
    public usersUserIdWatchedTagsGetWithHttpInfo(userId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersUserIdWatchedTagsGetWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     */
    public usersUserIdWatchedTagsGet(userId: number, _options?: PromiseConfigurationOptions): Promise<TagSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.usersUserIdWatchedTagsGet(userId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersTeamsApi } from './ObservableAPI';

import { UsersTeamsApiRequestFactory, UsersTeamsApiResponseProcessor} from "../apis/UsersTeamsApi";
export class PromiseUsersTeamsApi {
    private api: ObservableUsersTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersTeamsApiRequestFactory,
        responseProcessor?: UsersTeamsApiResponseProcessor
    ) {
        this.api = new ObservableUsersTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user by email address
     * @param email 
     * @param team
     */
    public teamsTeamUsersByEmailEmailGetWithHttpInfo(email: string, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersByEmailEmailGetWithHttpInfo(email, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by email address
     * @param email 
     * @param team
     */
    public teamsTeamUsersByEmailEmailGet(email: string, team: string, _options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersByEmailEmailGet(email, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     * @param team
     */
    public teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(externalId: string, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Array<UserResponseModel>>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(externalId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param externalId 
     * @param team
     */
    public teamsTeamUsersByExternalIdExternalIdGet(externalId: string, team: string, _options?: PromiseConfigurationOptions): Promise<Array<UserResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersByExternalIdExternalIdGet(externalId, team, observableOptions);
        return result.toPromise();
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
    public teamsTeamUsersGetWithHttpInfo(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaginatedUsers>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersGetWithHttpInfo(team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
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
    public teamsTeamUsersGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UsersSortParameter, order?: SortOrder, _options?: PromiseConfigurationOptions): Promise<PaginatedUsers> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersGet(team, page, pageSize, sort, order, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param team
     */
    public teamsTeamUsersMeGetWithHttpInfo(team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersMeGetWithHttpInfo(team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param team
     */
    public teamsTeamUsersMeGet(team: string, _options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersMeGet(team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     * @param team
     */
    public teamsTeamUsersUserIdGetWithHttpInfo(userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersUserIdGetWithHttpInfo(userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param userId User ID
     * @param team
     */
    public teamsTeamUsersUserIdGet(userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<UserDetailsResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersUserIdGet(userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     * @param team
     */
    public teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TagSummaryResponseModel>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(userId, team, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param userId 123
     * @param team
     */
    public teamsTeamUsersUserIdWatchedTagsGet(userId: number, team: string, _options?: PromiseConfigurationOptions): Promise<TagSummaryResponseModel> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.teamsTeamUsersUserIdWatchedTagsGet(userId, team, observableOptions);
        return result.toPromise();
    }


}



