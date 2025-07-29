import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableAnswersMainApi } from "./ObservableAPI";
import { AnswersMainApiRequestFactory, AnswersMainApiResponseProcessor} from "../apis/AnswersMainApi";

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdAcceptDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdAcceptDelete
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdAcceptPost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdAcceptPost
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDelete
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDownvoteDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDownvoteDelete
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDownvotePost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdDownvotePost
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    answerId: number
    /**
     * 
     * @type FlagRequestModel
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    flagRequestModel?: FlagRequestModel
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdGet
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdPutRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdPut
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdPut
     */
    answerId: number
    /**
     * 
     * @type AnswerRequestModel
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdPut
     */
    answerRequestModel?: AnswerRequestModel
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdUpvoteDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdUpvoteDelete
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdUpvotePost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersAnswerIdUpvotePost
     */
    answerId: number
}

export interface AnswersMainApiQuestionsQuestionIdAnswersGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersGet
     */
    questionId: number
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof AnswersMainApiquestionsQuestionIdAnswersGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type AnswersSortParameter
     * @memberof AnswersMainApiquestionsQuestionIdAnswersGet
     */
    sort?: AnswersSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof AnswersMainApiquestionsQuestionIdAnswersGet
     */
    order?: SortOrder
}

export interface AnswersMainApiQuestionsQuestionIdAnswersPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersMainApiquestionsQuestionIdAnswersPost
     */
    questionId: number
    /**
     * 
     * @type AnswerRequestModel
     * @memberof AnswersMainApiquestionsQuestionIdAnswersPost
     */
    answerRequestModel?: AnswerRequestModel
}

export class ObjectAnswersMainApi {
    private api: ObservableAnswersMainApi

    public constructor(configuration: Configuration, requestFactory?: AnswersMainApiRequestFactory, responseProcessor?: AnswersMainApiResponseProcessor) {
        this.api = new ObservableAnswersMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdAcceptDelete(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdAcceptDelete(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdAcceptPost(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdAcceptPost(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDelete(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.questionsQuestionIdAnswersAnswerIdDelete(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDownvoteDelete(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdDownvoteDelete(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdDownvotePost(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdDownvotePost(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        return this.api.questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(param.questionId, param.answerId, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdFlagsPost(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.questionsQuestionIdAnswersAnswerIdFlagsPost(param.questionId, param.answerId, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdGet(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdGetRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdGet(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(param.questionId, param.answerId, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdPut(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdPutRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdPut(param.questionId, param.answerId, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdUpvoteDelete(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdUpvoteDelete(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdUpvotePost(param: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.questionsQuestionIdAnswersAnswerIdUpvotePost(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param param the request object
     */
    public questionsQuestionIdAnswersGetWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedAnswers>> {
        return this.api.questionsQuestionIdAnswersGetWithHttpInfo(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param param the request object
     */
    public questionsQuestionIdAnswersGet(param: AnswersMainApiQuestionsQuestionIdAnswersGetRequest, options?: ConfigurationOptions): Promise<PaginatedAnswers> {
        return this.api.questionsQuestionIdAnswersGet(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersPostWithHttpInfo(param: AnswersMainApiQuestionsQuestionIdAnswersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.questionsQuestionIdAnswersPostWithHttpInfo(param.questionId, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersPost(param: AnswersMainApiQuestionsQuestionIdAnswersPostRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.questionsQuestionIdAnswersPost(param.questionId, param.answerRequestModel,  options).toPromise();
    }

}

import { ObservableAnswersTeamsApi } from "./ObservableAPI";
import { AnswersTeamsApiRequestFactory, AnswersTeamsApiResponseProcessor} from "../apis/AnswersTeamsApi";

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDelete
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDelete
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    team: string
    /**
     * 
     * @type FlagRequestModel
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost
     */
    flagRequestModel?: FlagRequestModel
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdGet
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdGet
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdPutRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdPut
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdPut
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdPut
     */
    team: string
    /**
     * 
     * @type AnswerRequestModel
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdPut
     */
    answerRequestModel?: AnswerRequestModel
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost
     */
    questionId: number
    /**
     * Answer ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost
     */
    team: string
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type AnswersSortParameter
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    sort?: AnswersSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersGet
     */
    order?: SortOrder
}

export interface AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersPost
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersPost
     */
    team: string
    /**
     * 
     * @type AnswerRequestModel
     * @memberof AnswersTeamsApiteamsTeamQuestionsQuestionIdAnswersPost
     */
    answerRequestModel?: AnswerRequestModel
}

export class ObjectAnswersTeamsApi {
    private api: ObservableAnswersTeamsApi

    public constructor(configuration: Configuration, requestFactory?: AnswersTeamsApiRequestFactory, responseProcessor?: AnswersTeamsApiResponseProcessor) {
        this.api = new ObservableAnswersTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(param.questionId, param.answerId, param.team, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(param.questionId, param.answerId, param.team, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdGetRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(param.questionId, param.answerId, param.team, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdPutRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(param.questionId, param.answerId, param.team, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerSummaryResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest, options?: ConfigurationOptions): Promise<AnswerSummaryResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedAnswers>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersGet(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersGetRequest, options?: ConfigurationOptions): Promise<PaginatedAnswers> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersGet(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnswerResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(param.questionId, param.team, param.answerRequestModel,  options).toPromise();
    }

    /**
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersPost(param: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersPostRequest, options?: ConfigurationOptions): Promise<AnswerResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersPost(param.questionId, param.team, param.answerRequestModel,  options).toPromise();
    }

}

import { ObservableArticlesMainApi } from "./ObservableAPI";
import { ArticlesMainApiRequestFactory, ArticlesMainApiResponseProcessor} from "../apis/ArticlesMainApi";

export interface ArticlesMainApiArticlesArticleIdDeleteRequest {
    /**
     * Article ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdDelete
     */
    articleId: number
}

export interface ArticlesMainApiArticlesArticleIdGetRequest {
    /**
     * Article ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdGet
     */
    articleId: number
}

export interface ArticlesMainApiArticlesArticleIdLinkedQuestionsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdLinkedQuestionsGet
     */
    articleId: number
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdLinkedQuestionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof ArticlesMainApiarticlesArticleIdLinkedQuestionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof ArticlesMainApiarticlesArticleIdLinkedQuestionsGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof ArticlesMainApiarticlesArticleIdLinkedQuestionsGet
     */
    order?: SortOrder
}

export interface ArticlesMainApiArticlesArticleIdPutRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdPut
     */
    articleId: number
    /**
     * 
     * @type ArticleRequestModel
     * @memberof ArticlesMainApiarticlesArticleIdPut
     */
    articleRequestModel?: ArticleRequestModel
}

export interface ArticlesMainApiArticlesArticleIdUpvoteDeleteRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdUpvoteDelete
     */
    articleId: number
}

export interface ArticlesMainApiArticlesArticleIdUpvotePostRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesArticleIdUpvotePost
     */
    articleId: number
}

export interface ArticlesMainApiArticlesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof ArticlesMainApiarticlesGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type ArticleSortParameter
     * @memberof ArticlesMainApiarticlesGet
     */
    sort?: ArticleSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof ArticlesMainApiarticlesGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof ArticlesMainApiarticlesGet
     */
    tagId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesMainApiarticlesGet
     */
    authorId?: number
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof ArticlesMainApiarticlesGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof ArticlesMainApiarticlesGet
     */
    to?: Date
}

export interface ArticlesMainApiArticlesPostRequest {
    /**
     * 
     * @type ArticleRequestModel
     * @memberof ArticlesMainApiarticlesPost
     */
    articleRequestModel?: ArticleRequestModel
}

export class ObjectArticlesMainApi {
    private api: ObservableArticlesMainApi

    public constructor(configuration: Configuration, requestFactory?: ArticlesMainApiRequestFactory, responseProcessor?: ArticlesMainApiResponseProcessor) {
        this.api = new ObservableArticlesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param param the request object
     */
    public articlesArticleIdDeleteWithHttpInfo(param: ArticlesMainApiArticlesArticleIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.articlesArticleIdDeleteWithHttpInfo(param.articleId,  options).toPromise();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param param the request object
     */
    public articlesArticleIdDelete(param: ArticlesMainApiArticlesArticleIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.articlesArticleIdDelete(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param param the request object
     */
    public articlesArticleIdGetWithHttpInfo(param: ArticlesMainApiArticlesArticleIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.articlesArticleIdGetWithHttpInfo(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param param the request object
     */
    public articlesArticleIdGet(param: ArticlesMainApiArticlesArticleIdGetRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.articlesArticleIdGet(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public articlesArticleIdLinkedQuestionsGetWithHttpInfo(param: ArticlesMainApiArticlesArticleIdLinkedQuestionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.articlesArticleIdLinkedQuestionsGetWithHttpInfo(param.articleId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public articlesArticleIdLinkedQuestionsGet(param: ArticlesMainApiArticlesArticleIdLinkedQuestionsGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.articlesArticleIdLinkedQuestionsGet(param.articleId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param param the request object
     */
    public articlesArticleIdPutWithHttpInfo(param: ArticlesMainApiArticlesArticleIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.articlesArticleIdPutWithHttpInfo(param.articleId, param.articleRequestModel,  options).toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param param the request object
     */
    public articlesArticleIdPut(param: ArticlesMainApiArticlesArticleIdPutRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.articlesArticleIdPut(param.articleId, param.articleRequestModel,  options).toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param param the request object
     */
    public articlesArticleIdUpvoteDeleteWithHttpInfo(param: ArticlesMainApiArticlesArticleIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.articlesArticleIdUpvoteDeleteWithHttpInfo(param.articleId,  options).toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param param the request object
     */
    public articlesArticleIdUpvoteDelete(param: ArticlesMainApiArticlesArticleIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.articlesArticleIdUpvoteDelete(param.articleId,  options).toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param param the request object
     */
    public articlesArticleIdUpvotePostWithHttpInfo(param: ArticlesMainApiArticlesArticleIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.articlesArticleIdUpvotePostWithHttpInfo(param.articleId,  options).toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param param the request object
     */
    public articlesArticleIdUpvotePost(param: ArticlesMainApiArticlesArticleIdUpvotePostRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.articlesArticleIdUpvotePost(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param param the request object
     */
    public articlesGetWithHttpInfo(param: ArticlesMainApiArticlesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedArticles>> {
        return this.api.articlesGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param param the request object
     */
    public articlesGet(param: ArticlesMainApiArticlesGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedArticles> {
        return this.api.articlesGet(param.page, param.pageSize, param.sort, param.order, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param param the request object
     */
    public articlesPostWithHttpInfo(param: ArticlesMainApiArticlesPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.articlesPostWithHttpInfo(param.articleRequestModel,  options).toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param param the request object
     */
    public articlesPost(param: ArticlesMainApiArticlesPostRequest = {}, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.articlesPost(param.articleRequestModel,  options).toPromise();
    }

}

import { ObservableArticlesTeamsApi } from "./ObservableAPI";
import { ArticlesTeamsApiRequestFactory, ArticlesTeamsApiResponseProcessor} from "../apis/ArticlesTeamsApi";

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdDeleteRequest {
    /**
     * Article ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdDelete
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdDelete
     */
    team: string
}

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdGetRequest {
    /**
     * Article ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdGet
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdGet
     */
    team: string
}

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdLinkedQuestionsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdLinkedQuestionsGet
     */
    order?: SortOrder
}

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdPutRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdPut
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdPut
     */
    team: string
    /**
     * 
     * @type ArticleRequestModel
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdPut
     */
    articleRequestModel?: ArticleRequestModel
}

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvoteDeleteRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdUpvoteDelete
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdUpvoteDelete
     */
    team: string
}

export interface ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvotePostRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdUpvotePost
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesArticleIdUpvotePost
     */
    team: string
}

export interface ArticlesTeamsApiTeamsTeamArticlesGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type ArticleSortParameter
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    sort?: ArticleSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    tagId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    authorId?: number
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof ArticlesTeamsApiteamsTeamArticlesGet
     */
    to?: Date
}

export interface ArticlesTeamsApiTeamsTeamArticlesPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ArticlesTeamsApiteamsTeamArticlesPost
     */
    team: string
    /**
     * 
     * @type ArticleRequestModel
     * @memberof ArticlesTeamsApiteamsTeamArticlesPost
     */
    articleRequestModel?: ArticleRequestModel
}

export class ObjectArticlesTeamsApi {
    private api: ObservableArticlesTeamsApi

    public constructor(configuration: Configuration, requestFactory?: ArticlesTeamsApiRequestFactory, responseProcessor?: ArticlesTeamsApiResponseProcessor) {
        this.api = new ObservableArticlesTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdDeleteWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamArticlesArticleIdDeleteWithHttpInfo(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Deletes an article, identified by article ID.
     * Delete an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdDelete(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamArticlesArticleIdDelete(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdGetWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.teamsTeamArticlesArticleIdGetWithHttpInfo(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a article, identified by article ID.
     * Retrieve an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdGet(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdGetRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.teamsTeamArticlesArticleIdGet(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdLinkedQuestionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.teamsTeamArticlesArticleIdLinkedQuestionsGetWithHttpInfo(param.articleId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions linked to an article, identified by article ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdLinkedQuestionsGet(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdLinkedQuestionsGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.teamsTeamArticlesArticleIdLinkedQuestionsGet(param.articleId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdPutWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.teamsTeamArticlesArticleIdPutWithHttpInfo(param.articleId, param.team, param.articleRequestModel,  options).toPromise();
    }

    /**
     * Updates an article, identified by Article ID.
     * Update an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdPut(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdPutRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.teamsTeamArticlesArticleIdPut(param.articleId, param.team, param.articleRequestModel,  options).toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.teamsTeamArticlesArticleIdUpvoteDeleteWithHttpInfo(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Deletes the upvote of an article, identified by Article ID.
     * Delete article upvote
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdUpvoteDelete(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.teamsTeamArticlesArticleIdUpvoteDelete(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.teamsTeamArticlesArticleIdUpvotePostWithHttpInfo(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Upvotes an article, identified by Article ID.
     * Upvote an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdUpvotePost(param: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvotePostRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.teamsTeamArticlesArticleIdUpvotePost(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param param the request object
     */
    public teamsTeamArticlesGetWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedArticles>> {
        return this.api.teamsTeamArticlesGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all articles on the site or team.
     * Retrieve all articles
     * @param param the request object
     */
    public teamsTeamArticlesGet(param: ArticlesTeamsApiTeamsTeamArticlesGetRequest, options?: ConfigurationOptions): Promise<PaginatedArticles> {
        return this.api.teamsTeamArticlesGet(param.team, param.page, param.pageSize, param.sort, param.order, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param param the request object
     */
    public teamsTeamArticlesPostWithHttpInfo(param: ArticlesTeamsApiTeamsTeamArticlesPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ArticleResponseModel>> {
        return this.api.teamsTeamArticlesPostWithHttpInfo(param.team, param.articleRequestModel,  options).toPromise();
    }

    /**
     * Creates an article.
     * Create an article
     * @param param the request object
     */
    public teamsTeamArticlesPost(param: ArticlesTeamsApiTeamsTeamArticlesPostRequest, options?: ConfigurationOptions): Promise<ArticleResponseModel> {
        return this.api.teamsTeamArticlesPost(param.team, param.articleRequestModel,  options).toPromise();
    }

}

import { ObservableCollectionsMainApi } from "./ObservableAPI";
import { CollectionsMainApiRequestFactory, CollectionsMainApiResponseProcessor} from "../apis/CollectionsMainApi";

export interface CollectionsMainApiCollectionsCollectionIdDeleteRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsMainApicollectionsCollectionIdDelete
     */
    collectionId: number
}

export interface CollectionsMainApiCollectionsCollectionIdGetRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsMainApicollectionsCollectionIdGet
     */
    collectionId: number
}

export interface CollectionsMainApiCollectionsCollectionIdPutRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsMainApicollectionsCollectionIdPut
     */
    collectionId: number
    /**
     * 
     * @type EditCollectionRequestModel
     * @memberof CollectionsMainApicollectionsCollectionIdPut
     */
    editCollectionRequestModel?: EditCollectionRequestModel
}

export interface CollectionsMainApiCollectionsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsMainApicollectionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof CollectionsMainApicollectionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type CollectionsSortParameter
     * @memberof CollectionsMainApicollectionsGet
     */
    sort?: CollectionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof CollectionsMainApicollectionsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof CollectionsMainApicollectionsGet
     */
    authorIds?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsMainApicollectionsGet
     */
    partialTitle?: string
    /**
     * 
     * Defaults to: undefined
     * @type CollectionsPermissionsFilter
     * @memberof CollectionsMainApicollectionsGet
     */
    permissions?: CollectionsPermissionsFilter
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof CollectionsMainApicollectionsGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof CollectionsMainApicollectionsGet
     */
    to?: Date
}

export interface CollectionsMainApiCollectionsPostRequest {
    /**
     * 
     * @type CollectionRequestModel
     * @memberof CollectionsMainApicollectionsPost
     */
    collectionRequestModel?: CollectionRequestModel
}

export class ObjectCollectionsMainApi {
    private api: ObservableCollectionsMainApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsMainApiRequestFactory, responseProcessor?: CollectionsMainApiResponseProcessor) {
        this.api = new ObservableCollectionsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param param the request object
     */
    public collectionsCollectionIdDeleteWithHttpInfo(param: CollectionsMainApiCollectionsCollectionIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.collectionsCollectionIdDeleteWithHttpInfo(param.collectionId,  options).toPromise();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param param the request object
     */
    public collectionsCollectionIdDelete(param: CollectionsMainApiCollectionsCollectionIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.collectionsCollectionIdDelete(param.collectionId,  options).toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param param the request object
     */
    public collectionsCollectionIdGetWithHttpInfo(param: CollectionsMainApiCollectionsCollectionIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.collectionsCollectionIdGetWithHttpInfo(param.collectionId,  options).toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param param the request object
     */
    public collectionsCollectionIdGet(param: CollectionsMainApiCollectionsCollectionIdGetRequest, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.collectionsCollectionIdGet(param.collectionId,  options).toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param param the request object
     */
    public collectionsCollectionIdPutWithHttpInfo(param: CollectionsMainApiCollectionsCollectionIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.collectionsCollectionIdPutWithHttpInfo(param.collectionId, param.editCollectionRequestModel,  options).toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param param the request object
     */
    public collectionsCollectionIdPut(param: CollectionsMainApiCollectionsCollectionIdPutRequest, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.collectionsCollectionIdPut(param.collectionId, param.editCollectionRequestModel,  options).toPromise();
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param param the request object
     */
    public collectionsGetWithHttpInfo(param: CollectionsMainApiCollectionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCollections>> {
        return this.api.collectionsGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order, param.authorIds, param.partialTitle, param.permissions, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param param the request object
     */
    public collectionsGet(param: CollectionsMainApiCollectionsGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCollections> {
        return this.api.collectionsGet(param.page, param.pageSize, param.sort, param.order, param.authorIds, param.partialTitle, param.permissions, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param param the request object
     */
    public collectionsPostWithHttpInfo(param: CollectionsMainApiCollectionsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.collectionsPostWithHttpInfo(param.collectionRequestModel,  options).toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param param the request object
     */
    public collectionsPost(param: CollectionsMainApiCollectionsPostRequest = {}, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.collectionsPost(param.collectionRequestModel,  options).toPromise();
    }

}

import { ObservableCollectionsTeamsApi } from "./ObservableAPI";
import { CollectionsTeamsApiRequestFactory, CollectionsTeamsApiResponseProcessor} from "../apis/CollectionsTeamsApi";

export interface CollectionsTeamsApiTeamsTeamCollectionsCollectionIdDeleteRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdDelete
     */
    collectionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdDelete
     */
    team: string
}

export interface CollectionsTeamsApiTeamsTeamCollectionsCollectionIdGetRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdGet
     */
    collectionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdGet
     */
    team: string
}

export interface CollectionsTeamsApiTeamsTeamCollectionsCollectionIdPutRequest {
    /**
     * Collection ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdPut
     */
    collectionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdPut
     */
    team: string
    /**
     * 
     * @type EditCollectionRequestModel
     * @memberof CollectionsTeamsApiteamsTeamCollectionsCollectionIdPut
     */
    editCollectionRequestModel?: EditCollectionRequestModel
}

export interface CollectionsTeamsApiTeamsTeamCollectionsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type CollectionsSortParameter
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    sort?: CollectionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    authorIds?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    partialTitle?: string
    /**
     * 
     * Defaults to: undefined
     * @type CollectionsPermissionsFilter
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    permissions?: CollectionsPermissionsFilter
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof CollectionsTeamsApiteamsTeamCollectionsGet
     */
    to?: Date
}

export interface CollectionsTeamsApiTeamsTeamCollectionsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CollectionsTeamsApiteamsTeamCollectionsPost
     */
    team: string
    /**
     * 
     * @type CollectionRequestModel
     * @memberof CollectionsTeamsApiteamsTeamCollectionsPost
     */
    collectionRequestModel?: CollectionRequestModel
}

export class ObjectCollectionsTeamsApi {
    private api: ObservableCollectionsTeamsApi

    public constructor(configuration: Configuration, requestFactory?: CollectionsTeamsApiRequestFactory, responseProcessor?: CollectionsTeamsApiResponseProcessor) {
        this.api = new ObservableCollectionsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamCollectionsCollectionIdDeleteWithHttpInfo(param.collectionId, param.team,  options).toPromise();
    }

    /**
     * Deletes a collection, identified by collection ID.
     * Delete a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdDelete(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamCollectionsCollectionIdDelete(param.collectionId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdGetWithHttpInfo(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.teamsTeamCollectionsCollectionIdGetWithHttpInfo(param.collectionId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a collection, identified by collection ID.
     * Retrieve a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdGet(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdGetRequest, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.teamsTeamCollectionsCollectionIdGet(param.collectionId, param.team,  options).toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdPutWithHttpInfo(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.teamsTeamCollectionsCollectionIdPutWithHttpInfo(param.collectionId, param.team, param.editCollectionRequestModel,  options).toPromise();
    }

    /**
     * Updates a collection, identified by collection ID.
     * Update a collection
     * @param param the request object
     */
    public teamsTeamCollectionsCollectionIdPut(param: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdPutRequest, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.teamsTeamCollectionsCollectionIdPut(param.collectionId, param.team, param.editCollectionRequestModel,  options).toPromise();
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param param the request object
     */
    public teamsTeamCollectionsGetWithHttpInfo(param: CollectionsTeamsApiTeamsTeamCollectionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCollections>> {
        return this.api.teamsTeamCollectionsGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order, param.authorIds, param.partialTitle, param.permissions, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all collections for the full site or specified team.
     * Retrieve all collections
     * @param param the request object
     */
    public teamsTeamCollectionsGet(param: CollectionsTeamsApiTeamsTeamCollectionsGetRequest, options?: ConfigurationOptions): Promise<PaginatedCollections> {
        return this.api.teamsTeamCollectionsGet(param.team, param.page, param.pageSize, param.sort, param.order, param.authorIds, param.partialTitle, param.permissions, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param param the request object
     */
    public teamsTeamCollectionsPostWithHttpInfo(param: CollectionsTeamsApiTeamsTeamCollectionsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionsResponseModel>> {
        return this.api.teamsTeamCollectionsPostWithHttpInfo(param.team, param.collectionRequestModel,  options).toPromise();
    }

    /**
     * Creates a collection.
     * Create a collection
     * @param param the request object
     */
    public teamsTeamCollectionsPost(param: CollectionsTeamsApiTeamsTeamCollectionsPostRequest, options?: ConfigurationOptions): Promise<CollectionsResponseModel> {
        return this.api.teamsTeamCollectionsPost(param.team, param.collectionRequestModel,  options).toPromise();
    }

}

import { ObservableCommentsMainApi } from "./ObservableAPI";
import { CommentsMainApiRequestFactory, CommentsMainApiResponseProcessor} from "../apis/CommentsMainApi";

export interface CommentsMainApiArticlesArticleIdCommentsGetRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsMainApiarticlesArticleIdCommentsGet
     */
    articleId: number
}

export interface CommentsMainApiQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsMainApiquestionsQuestionIdAnswersAnswerIdCommentsGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsMainApiquestionsQuestionIdAnswersAnswerIdCommentsGet
     */
    answerId: number
}

export interface CommentsMainApiQuestionsQuestionIdCommentsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsMainApiquestionsQuestionIdCommentsGet
     */
    questionId: number
}

export class ObjectCommentsMainApi {
    private api: ObservableCommentsMainApi

    public constructor(configuration: Configuration, requestFactory?: CommentsMainApiRequestFactory, responseProcessor?: CommentsMainApiResponseProcessor) {
        this.api = new ObservableCommentsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param param the request object
     */
    public articlesArticleIdCommentsGetWithHttpInfo(param: CommentsMainApiArticlesArticleIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.articlesArticleIdCommentsGetWithHttpInfo(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param param the request object
     */
    public articlesArticleIdCommentsGet(param: CommentsMainApiArticlesArticleIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.articlesArticleIdCommentsGet(param.articleId,  options).toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(param: CommentsMainApiQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.questionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param param the request object
     */
    public questionsQuestionIdAnswersAnswerIdCommentsGet(param: CommentsMainApiQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.questionsQuestionIdAnswersAnswerIdCommentsGet(param.questionId, param.answerId,  options).toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param param the request object
     */
    public questionsQuestionIdCommentsGetWithHttpInfo(param: CommentsMainApiQuestionsQuestionIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.questionsQuestionIdCommentsGetWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param param the request object
     */
    public questionsQuestionIdCommentsGet(param: CommentsMainApiQuestionsQuestionIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.questionsQuestionIdCommentsGet(param.questionId,  options).toPromise();
    }

}

import { ObservableCommentsTeamsApi } from "./ObservableAPI";
import { CommentsTeamsApiRequestFactory, CommentsTeamsApiResponseProcessor} from "../apis/CommentsTeamsApi";

export interface CommentsTeamsApiTeamsTeamArticlesArticleIdCommentsGetRequest {
    /**
     * Article ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsTeamsApiteamsTeamArticlesArticleIdCommentsGet
     */
    articleId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsTeamsApiteamsTeamArticlesArticleIdCommentsGet
     */
    team: string
}

export interface CommentsTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet
     */
    questionId: number
    /**
     * Answer ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet
     */
    answerId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsTeamsApiteamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet
     */
    team: string
}

export interface CommentsTeamsApiTeamsTeamQuestionsQuestionIdCommentsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof CommentsTeamsApiteamsTeamQuestionsQuestionIdCommentsGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CommentsTeamsApiteamsTeamQuestionsQuestionIdCommentsGet
     */
    team: string
}

export class ObjectCommentsTeamsApi {
    private api: ObservableCommentsTeamsApi

    public constructor(configuration: Configuration, requestFactory?: CommentsTeamsApiRequestFactory, responseProcessor?: CommentsTeamsApiResponseProcessor) {
        this.api = new ObservableCommentsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(param: CommentsTeamsApiTeamsTeamArticlesArticleIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param param the request object
     */
    public teamsTeamArticlesArticleIdCommentsGet(param: CommentsTeamsApiTeamsTeamArticlesArticleIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.teamsTeamArticlesArticleIdCommentsGet(param.articleId, param.team,  options).toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(param: CommentsTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(param: CommentsTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(param.questionId, param.answerId, param.team,  options).toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(param: CommentsTeamsApiTeamsTeamQuestionsQuestionIdCommentsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<CommentResponseModel>>> {
        return this.api.teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdCommentsGet(param: CommentsTeamsApiTeamsTeamQuestionsQuestionIdCommentsGetRequest, options?: ConfigurationOptions): Promise<Array<CommentResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdCommentsGet(param.questionId, param.team,  options).toPromise();
    }

}

import { ObservableCommunitiesMainApi } from "./ObservableAPI";
import { CommunitiesMainApiRequestFactory, CommunitiesMainApiResponseProcessor} from "../apis/CommunitiesMainApi";

export interface CommunitiesMainApiCommunitiesCommunityIdGetRequest {
    /**
     * Community ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesCommunityIdGet
     */
    communityId: number
}

export interface CommunitiesMainApiCommunitiesCommunityIdJoinBulkPostRequest {
    /**
     * Community ID
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesCommunityIdJoinBulkPost
     */
    communityId: number
    /**
     * 
     * @type CommunityJoinModel
     * @memberof CommunitiesMainApicommunitiesCommunityIdJoinBulkPost
     */
    communityJoinModel?: CommunityJoinModel
}

export interface CommunitiesMainApiCommunitiesCommunityIdJoinPostRequest {
    /**
     * Community ID
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesCommunityIdJoinPost
     */
    communityId: number
}

export interface CommunitiesMainApiCommunitiesCommunityIdLeaveBulkPostRequest {
    /**
     * Community ID
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesCommunityIdLeaveBulkPost
     */
    communityId: number
    /**
     * 
     * @type CommunityLeaveModel
     * @memberof CommunitiesMainApicommunitiesCommunityIdLeaveBulkPost
     */
    communityLeaveModel?: CommunityLeaveModel
}

export interface CommunitiesMainApiCommunitiesCommunityIdLeavePostRequest {
    /**
     * Community ID
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesCommunityIdLeavePost
     */
    communityId: number
}

export interface CommunitiesMainApiCommunitiesGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof CommunitiesMainApicommunitiesGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof CommunitiesMainApicommunitiesGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type CommunitySortParameter
     * @memberof CommunitiesMainApicommunitiesGet
     */
    sort?: CommunitySortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof CommunitiesMainApicommunitiesGet
     */
    order?: SortOrder
}

export class ObjectCommunitiesMainApi {
    private api: ObservableCommunitiesMainApi

    public constructor(configuration: Configuration, requestFactory?: CommunitiesMainApiRequestFactory, responseProcessor?: CommunitiesMainApiResponseProcessor) {
        this.api = new ObservableCommunitiesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param param the request object
     */
    public communitiesCommunityIdGetWithHttpInfo(param: CommunitiesMainApiCommunitiesCommunityIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        return this.api.communitiesCommunityIdGetWithHttpInfo(param.communityId,  options).toPromise();
    }

    /**
     * Retrieves a community, identified by community ID.
     * Retrieve a community
     * @param param the request object
     */
    public communitiesCommunityIdGet(param: CommunitiesMainApiCommunitiesCommunityIdGetRequest, options?: ConfigurationOptions): Promise<CommunityResponseModel> {
        return this.api.communitiesCommunityIdGet(param.communityId,  options).toPromise();
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param param the request object
     */
    public communitiesCommunityIdJoinBulkPostWithHttpInfo(param: CommunitiesMainApiCommunitiesCommunityIdJoinBulkPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        return this.api.communitiesCommunityIdJoinBulkPostWithHttpInfo(param.communityId, param.communityJoinModel,  options).toPromise();
    }

    /**
     * Adds the given users by ID to a community, identified by community ID.
     * Join multiple users to a community
     * @param param the request object
     */
    public communitiesCommunityIdJoinBulkPost(param: CommunitiesMainApiCommunitiesCommunityIdJoinBulkPostRequest, options?: ConfigurationOptions): Promise<CommunityResponseModel> {
        return this.api.communitiesCommunityIdJoinBulkPost(param.communityId, param.communityJoinModel,  options).toPromise();
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param param the request object
     */
    public communitiesCommunityIdJoinPostWithHttpInfo(param: CommunitiesMainApiCommunitiesCommunityIdJoinPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        return this.api.communitiesCommunityIdJoinPostWithHttpInfo(param.communityId,  options).toPromise();
    }

    /**
     * Adds current user to a community, identified by community ID.
     * Join a community
     * @param param the request object
     */
    public communitiesCommunityIdJoinPost(param: CommunitiesMainApiCommunitiesCommunityIdJoinPostRequest, options?: ConfigurationOptions): Promise<CommunityResponseModel> {
        return this.api.communitiesCommunityIdJoinPost(param.communityId,  options).toPromise();
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param param the request object
     */
    public communitiesCommunityIdLeaveBulkPostWithHttpInfo(param: CommunitiesMainApiCommunitiesCommunityIdLeaveBulkPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        return this.api.communitiesCommunityIdLeaveBulkPostWithHttpInfo(param.communityId, param.communityLeaveModel,  options).toPromise();
    }

    /**
     * Remove the given users by ID from a community, identified by community ID.
     * Leave a community for multiple users
     * @param param the request object
     */
    public communitiesCommunityIdLeaveBulkPost(param: CommunitiesMainApiCommunitiesCommunityIdLeaveBulkPostRequest, options?: ConfigurationOptions): Promise<CommunityResponseModel> {
        return this.api.communitiesCommunityIdLeaveBulkPost(param.communityId, param.communityLeaveModel,  options).toPromise();
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param param the request object
     */
    public communitiesCommunityIdLeavePostWithHttpInfo(param: CommunitiesMainApiCommunitiesCommunityIdLeavePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<CommunityResponseModel>> {
        return this.api.communitiesCommunityIdLeavePostWithHttpInfo(param.communityId,  options).toPromise();
    }

    /**
     * Remove current user from a community, identified by community ID.
     * Leave a community
     * @param param the request object
     */
    public communitiesCommunityIdLeavePost(param: CommunitiesMainApiCommunitiesCommunityIdLeavePostRequest, options?: ConfigurationOptions): Promise<CommunityResponseModel> {
        return this.api.communitiesCommunityIdLeavePost(param.communityId,  options).toPromise();
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param param the request object
     */
    public communitiesGetWithHttpInfo(param: CommunitiesMainApiCommunitiesGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedCommunities>> {
        return this.api.communitiesGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Queries all communities on the site.
     * Retrieves all communities on the site.
     * @param param the request object
     */
    public communitiesGet(param: CommunitiesMainApiCommunitiesGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedCommunities> {
        return this.api.communitiesGet(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

}

import { ObservableImagesMainApi } from "./ObservableAPI";
import { ImagesMainApiRequestFactory, ImagesMainApiResponseProcessor} from "../apis/ImagesMainApi";

export interface ImagesMainApiImagesImageIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImagesMainApiimagesImageIdGet
     */
    imageId: string
}

export interface ImagesMainApiImagesUploadPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ImagesMainApiimagesUploadPost
     */
    file?: HttpFile
}

export class ObjectImagesMainApi {
    private api: ObservableImagesMainApi

    public constructor(configuration: Configuration, requestFactory?: ImagesMainApiRequestFactory, responseProcessor?: ImagesMainApiResponseProcessor) {
        this.api = new ObservableImagesMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param param the request object
     */
    public imagesImageIdGetWithHttpInfo(param: ImagesMainApiImagesImageIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.imagesImageIdGetWithHttpInfo(param.imageId,  options).toPromise();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param param the request object
     */
    public imagesImageIdGet(param: ImagesMainApiImagesImageIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.imagesImageIdGet(param.imageId,  options).toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param param the request object
     */
    public imagesUploadPostWithHttpInfo(param: ImagesMainApiImagesUploadPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ImageResponseModel>> {
        return this.api.imagesUploadPostWithHttpInfo(param.file,  options).toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param param the request object
     */
    public imagesUploadPost(param: ImagesMainApiImagesUploadPostRequest = {}, options?: ConfigurationOptions): Promise<ImageResponseModel> {
        return this.api.imagesUploadPost(param.file,  options).toPromise();
    }

}

import { ObservableImagesTeamsApi } from "./ObservableAPI";
import { ImagesTeamsApiRequestFactory, ImagesTeamsApiResponseProcessor} from "../apis/ImagesTeamsApi";

export interface ImagesTeamsApiTeamsTeamImagesImageIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImagesTeamsApiteamsTeamImagesImageIdGet
     */
    imageId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImagesTeamsApiteamsTeamImagesImageIdGet
     */
    team: string
}

export interface ImagesTeamsApiTeamsTeamImagesUploadPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ImagesTeamsApiteamsTeamImagesUploadPost
     */
    team: string
    /**
     * 
     * Defaults to: undefined
     * @type HttpFile
     * @memberof ImagesTeamsApiteamsTeamImagesUploadPost
     */
    file?: HttpFile
}

export class ObjectImagesTeamsApi {
    private api: ObservableImagesTeamsApi

    public constructor(configuration: Configuration, requestFactory?: ImagesTeamsApiRequestFactory, responseProcessor?: ImagesTeamsApiResponseProcessor) {
        this.api = new ObservableImagesTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param param the request object
     */
    public teamsTeamImagesImageIdGetWithHttpInfo(param: ImagesTeamsApiTeamsTeamImagesImageIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamImagesImageIdGetWithHttpInfo(param.imageId, param.team,  options).toPromise();
    }

    /**
     * This endpoint retrieves an image file given its id.
     * Gets an image by Id.
     * @param param the request object
     */
    public teamsTeamImagesImageIdGet(param: ImagesTeamsApiTeamsTeamImagesImageIdGetRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamImagesImageIdGet(param.imageId, param.team,  options).toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param param the request object
     */
    public teamsTeamImagesUploadPostWithHttpInfo(param: ImagesTeamsApiTeamsTeamImagesUploadPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<ImageResponseModel>> {
        return this.api.teamsTeamImagesUploadPostWithHttpInfo(param.team, param.file,  options).toPromise();
    }

    /**
     * This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)
     * Uploads an image file.
     * @param param the request object
     */
    public teamsTeamImagesUploadPost(param: ImagesTeamsApiTeamsTeamImagesUploadPostRequest, options?: ConfigurationOptions): Promise<ImageResponseModel> {
        return this.api.teamsTeamImagesUploadPost(param.team, param.file,  options).toPromise();
    }

}

import { ObservableQuestionsMainApi } from "./ObservableAPI";
import { QuestionsMainApiRequestFactory, QuestionsMainApiResponseProcessor} from "../apis/QuestionsMainApi";

export interface QuestionsMainApiQuestionsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsMainApiquestionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type QuestionSortParameter
     * @memberof QuestionsMainApiquestionsGet
     */
    sort?: QuestionSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsMainApiquestionsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof QuestionsMainApiquestionsGet
     */
    isAnswered?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof QuestionsMainApiquestionsGet
     */
    hasAcceptedAnswer?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof QuestionsMainApiquestionsGet
     */
    questionId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof QuestionsMainApiquestionsGet
     */
    tagId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsGet
     */
    authorId?: number
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof QuestionsMainApiquestionsGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof QuestionsMainApiquestionsGet
     */
    to?: Date
}

export interface QuestionsMainApiQuestionsPostRequest {
    /**
     * 
     * @type QuestionRequestModel
     * @memberof QuestionsMainApiquestionsPost
     */
    questionRequestModel?: QuestionRequestModel
}

export interface QuestionsMainApiQuestionsQuestionIdBookmarkDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdBookmarkDelete
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdBookmarkPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdBookmarkPost
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdDelete
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdDownvoteDeleteRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdDownvoteDelete
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdDownvotePostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdDownvotePost
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdFlagsOptionsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdFlagsOptionsGet
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdFlagsPostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdFlagsPost
     */
    questionId: number
    /**
     * 
     * @type FlagRequestModel
     * @memberof QuestionsMainApiquestionsQuestionIdFlagsPost
     */
    flagRequestModel?: FlagRequestModel
}

export interface QuestionsMainApiQuestionsQuestionIdGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdGet
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdLinkedGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdLinkedGet
     */
    questionId: number
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdLinkedGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsMainApiquestionsQuestionIdLinkedGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof QuestionsMainApiquestionsQuestionIdLinkedGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsMainApiquestionsQuestionIdLinkedGet
     */
    order?: SortOrder
}

export interface QuestionsMainApiQuestionsQuestionIdPutRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdPut
     */
    questionId: number
    /**
     * 
     * @type QuestionRequestModel
     * @memberof QuestionsMainApiquestionsQuestionIdPut
     */
    questionRequestModel?: QuestionRequestModel
}

export interface QuestionsMainApiQuestionsQuestionIdRelatedGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdRelatedGet
     */
    questionId: number
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdRelatedGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsMainApiquestionsQuestionIdRelatedGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof QuestionsMainApiquestionsQuestionIdRelatedGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsMainApiquestionsQuestionIdRelatedGet
     */
    order?: SortOrder
}

export interface QuestionsMainApiQuestionsQuestionIdUpvoteDeleteRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdUpvoteDelete
     */
    questionId: number
}

export interface QuestionsMainApiQuestionsQuestionIdUpvotePostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsMainApiquestionsQuestionIdUpvotePost
     */
    questionId: number
}

export class ObjectQuestionsMainApi {
    private api: ObservableQuestionsMainApi

    public constructor(configuration: Configuration, requestFactory?: QuestionsMainApiRequestFactory, responseProcessor?: QuestionsMainApiResponseProcessor) {
        this.api = new ObservableQuestionsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param param the request object
     */
    public questionsGetWithHttpInfo(param: QuestionsMainApiQuestionsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedQuestions>> {
        return this.api.questionsGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order, param.isAnswered, param.hasAcceptedAnswer, param.questionId, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param param the request object
     */
    public questionsGet(param: QuestionsMainApiQuestionsGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedQuestions> {
        return this.api.questionsGet(param.page, param.pageSize, param.sort, param.order, param.isAnswered, param.hasAcceptedAnswer, param.questionId, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param param the request object
     */
    public questionsPostWithHttpInfo(param: QuestionsMainApiQuestionsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsPostWithHttpInfo(param.questionRequestModel,  options).toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param param the request object
     */
    public questionsPost(param: QuestionsMainApiQuestionsPostRequest = {}, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsPost(param.questionRequestModel,  options).toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param param the request object
     */
    public questionsQuestionIdBookmarkDeleteWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdBookmarkDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdBookmarkDeleteWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param param the request object
     */
    public questionsQuestionIdBookmarkDelete(param: QuestionsMainApiQuestionsQuestionIdBookmarkDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdBookmarkDelete(param.questionId,  options).toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param param the request object
     */
    public questionsQuestionIdBookmarkPostWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdBookmarkPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdBookmarkPostWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param param the request object
     */
    public questionsQuestionIdBookmarkPost(param: QuestionsMainApiQuestionsQuestionIdBookmarkPostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdBookmarkPost(param.questionId,  options).toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param param the request object
     */
    public questionsQuestionIdDeleteWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.questionsQuestionIdDeleteWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param param the request object
     */
    public questionsQuestionIdDelete(param: QuestionsMainApiQuestionsQuestionIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.questionsQuestionIdDelete(param.questionId,  options).toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param param the request object
     */
    public questionsQuestionIdDownvoteDeleteWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdDownvoteDeleteWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param param the request object
     */
    public questionsQuestionIdDownvoteDelete(param: QuestionsMainApiQuestionsQuestionIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdDownvoteDelete(param.questionId,  options).toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param param the request object
     */
    public questionsQuestionIdDownvotePostWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdDownvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdDownvotePostWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param param the request object
     */
    public questionsQuestionIdDownvotePost(param: QuestionsMainApiQuestionsQuestionIdDownvotePostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdDownvotePost(param.questionId,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param param the request object
     */
    public questionsQuestionIdFlagsOptionsGetWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        return this.api.questionsQuestionIdFlagsOptionsGetWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param param the request object
     */
    public questionsQuestionIdFlagsOptionsGet(param: QuestionsMainApiQuestionsQuestionIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        return this.api.questionsQuestionIdFlagsOptionsGet(param.questionId,  options).toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param param the request object
     */
    public questionsQuestionIdFlagsPostWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdFlagsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.questionsQuestionIdFlagsPostWithHttpInfo(param.questionId, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param param the request object
     */
    public questionsQuestionIdFlagsPost(param: QuestionsMainApiQuestionsQuestionIdFlagsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.questionsQuestionIdFlagsPost(param.questionId, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param param the request object
     */
    public questionsQuestionIdGetWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdGetWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param param the request object
     */
    public questionsQuestionIdGet(param: QuestionsMainApiQuestionsQuestionIdGetRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdGet(param.questionId,  options).toPromise();
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public questionsQuestionIdLinkedGetWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdLinkedGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.questionsQuestionIdLinkedGetWithHttpInfo(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public questionsQuestionIdLinkedGet(param: QuestionsMainApiQuestionsQuestionIdLinkedGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.questionsQuestionIdLinkedGet(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param param the request object
     */
    public questionsQuestionIdPutWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdPutWithHttpInfo(param.questionId, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param param the request object
     */
    public questionsQuestionIdPut(param: QuestionsMainApiQuestionsQuestionIdPutRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdPut(param.questionId, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param param the request object
     */
    public questionsQuestionIdRelatedGetWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdRelatedGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.questionsQuestionIdRelatedGetWithHttpInfo(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param param the request object
     */
    public questionsQuestionIdRelatedGet(param: QuestionsMainApiQuestionsQuestionIdRelatedGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.questionsQuestionIdRelatedGet(param.questionId, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param param the request object
     */
    public questionsQuestionIdUpvoteDeleteWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdUpvoteDeleteWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param param the request object
     */
    public questionsQuestionIdUpvoteDelete(param: QuestionsMainApiQuestionsQuestionIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdUpvoteDelete(param.questionId,  options).toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param param the request object
     */
    public questionsQuestionIdUpvotePostWithHttpInfo(param: QuestionsMainApiQuestionsQuestionIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.questionsQuestionIdUpvotePostWithHttpInfo(param.questionId,  options).toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param param the request object
     */
    public questionsQuestionIdUpvotePost(param: QuestionsMainApiQuestionsQuestionIdUpvotePostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.questionsQuestionIdUpvotePost(param.questionId,  options).toPromise();
    }

}

import { ObservableQuestionsTeamsApi } from "./ObservableAPI";
import { QuestionsTeamsApiRequestFactory, QuestionsTeamsApiResponseProcessor} from "../apis/QuestionsTeamsApi";

export interface QuestionsTeamsApiTeamsTeamQuestionsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type QuestionSortParameter
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    sort?: QuestionSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    isAnswered?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    hasAcceptedAnswer?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    questionId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    tagId?: Array<number>
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    authorId?: number
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    _from?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof QuestionsTeamsApiteamsTeamQuestionsGet
     */
    to?: Date
}

export interface QuestionsTeamsApiTeamsTeamQuestionsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsPost
     */
    team: string
    /**
     * 
     * @type QuestionRequestModel
     * @memberof QuestionsTeamsApiteamsTeamQuestionsPost
     */
    questionRequestModel?: QuestionRequestModel
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdBookmarkDelete
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdBookmarkDelete
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkPostRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdBookmarkPost
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdBookmarkPost
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDeleteRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDelete
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDelete
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvoteDeleteRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDownvoteDelete
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDownvoteDelete
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvotePostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDownvotePost
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdDownvotePost
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsOptionsGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdFlagsOptionsGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdFlagsOptionsGet
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsPostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdFlagsPost
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdFlagsPost
     */
    team: string
    /**
     * 
     * @type FlagRequestModel
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdFlagsPost
     */
    flagRequestModel?: FlagRequestModel
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdGetRequest {
    /**
     * Question ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdGet
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdLinkedGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdLinkedGet
     */
    order?: SortOrder
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdPutRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdPut
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdPut
     */
    team: string
    /**
     * 
     * @type QuestionRequestModel
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdPut
     */
    questionRequestModel?: QuestionRequestModel
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdRelatedGetRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type LinkedOrRelatedQuestionsSortParameter
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    sort?: LinkedOrRelatedQuestionsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdRelatedGet
     */
    order?: SortOrder
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvoteDeleteRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdUpvoteDelete
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdUpvoteDelete
     */
    team: string
}

export interface QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvotePostRequest {
    /**
     * Question ID
     * Defaults to: undefined
     * @type number
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdUpvotePost
     */
    questionId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof QuestionsTeamsApiteamsTeamQuestionsQuestionIdUpvotePost
     */
    team: string
}

export class ObjectQuestionsTeamsApi {
    private api: ObservableQuestionsTeamsApi

    public constructor(configuration: Configuration, requestFactory?: QuestionsTeamsApiRequestFactory, responseProcessor?: QuestionsTeamsApiResponseProcessor) {
        this.api = new ObservableQuestionsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param param the request object
     */
    public teamsTeamQuestionsGetWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedQuestions>> {
        return this.api.teamsTeamQuestionsGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order, param.isAnswered, param.hasAcceptedAnswer, param.questionId, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Retrieves all questions on the site or team.
     * Retrieve all questions
     * @param param the request object
     */
    public teamsTeamQuestionsGet(param: QuestionsTeamsApiTeamsTeamQuestionsGetRequest, options?: ConfigurationOptions): Promise<PaginatedQuestions> {
        return this.api.teamsTeamQuestionsGet(param.team, param.page, param.pageSize, param.sort, param.order, param.isAnswered, param.hasAcceptedAnswer, param.questionId, param.tagId, param.authorId, param._from, param.to,  options).toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param param the request object
     */
    public teamsTeamQuestionsPostWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsPostWithHttpInfo(param.team, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Creates a question.
     * Create a question
     * @param param the request object
     */
    public teamsTeamQuestionsPost(param: QuestionsTeamsApiTeamsTeamQuestionsPostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsPost(param.team, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdBookmarkDeleteWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Unbookmarks a question, identified by question ID.
     * Unbookmark question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdBookmarkDelete(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdBookmarkDelete(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdBookmarkPostWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Bookmarks a question, identified by question ID.
     * Bookmark question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdBookmarkPost(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkPostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdBookmarkPost(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamQuestionsQuestionIdDeleteWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Deletes a question, identified by question ID.
     * Delete a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDelete(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamQuestionsQuestionIdDelete(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdDownvoteDeleteWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Deletes the downvote of a question, identified by question ID.
     * Delete question downvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDownvoteDelete(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvoteDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdDownvoteDelete(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdDownvotePostWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Downvote a question, identified by question ID.
     * Downvote a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdDownvotePost(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvotePostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdDownvotePost(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<FlagOptionResponseModel>>> {
        return this.api.teamsTeamQuestionsQuestionIdFlagsOptionsGetWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Retrieve a list of flag options for a question, identified by question ID.
     * Retrieve list of flag options
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdFlagsOptionsGet(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsOptionsGetRequest, options?: ConfigurationOptions): Promise<Array<FlagOptionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdFlagsOptionsGet(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamQuestionsQuestionIdFlagsPostWithHttpInfo(param.questionId, param.team, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Raises a flag for a question, identified by question ID.
     * Raises a flag for a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdFlagsPost(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamQuestionsQuestionIdFlagsPost(param.questionId, param.team, param.flagRequestModel,  options).toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdGetWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdGetWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a question, identified by question ID.
     * Retrieve a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdGet(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdGetRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdGet(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdLinkedGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.teamsTeamQuestionsQuestionIdLinkedGetWithHttpInfo(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions linked to another question, identified by question ID.
     * Retrieve linked questions
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdLinkedGet(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdLinkedGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.teamsTeamQuestionsQuestionIdLinkedGet(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdPutWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdPutWithHttpInfo(param.questionId, param.team, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Updates a question, identified by question ID.
     * Update a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdPut(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdPutRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdPut(param.questionId, param.team, param.questionRequestModel,  options).toPromise();
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdRelatedGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedLinkedOrRelatedQuestions>> {
        return this.api.teamsTeamQuestionsQuestionIdRelatedGetWithHttpInfo(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves questions related to another question, identified by question ID.
     * Retrieve related questions
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdRelatedGet(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdRelatedGetRequest, options?: ConfigurationOptions): Promise<PaginatedLinkedOrRelatedQuestions> {
        return this.api.teamsTeamQuestionsQuestionIdRelatedGet(param.questionId, param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdUpvoteDeleteWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Deletes the upvote of a question, identified by question ID.
     * Delete question upvote
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdUpvoteDelete(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvoteDeleteRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdUpvoteDelete(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvotePostRequest, options?: ConfigurationOptions): Promise<HttpInfo<QuestionResponseModel>> {
        return this.api.teamsTeamQuestionsQuestionIdUpvotePostWithHttpInfo(param.questionId, param.team,  options).toPromise();
    }

    /**
     * Upvotes a question, identified by question ID.
     * Upvote a question
     * @param param the request object
     */
    public teamsTeamQuestionsQuestionIdUpvotePost(param: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvotePostRequest, options?: ConfigurationOptions): Promise<QuestionResponseModel> {
        return this.api.teamsTeamQuestionsQuestionIdUpvotePost(param.questionId, param.team,  options).toPromise();
    }

}

import { ObservableSearchMainApi } from "./ObservableAPI";
import { SearchMainApiRequestFactory, SearchMainApiResponseProcessor} from "../apis/SearchMainApi";

export interface SearchMainApiSearchGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchMainApisearchGet
     */
    query?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof SearchMainApisearchGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof SearchMainApisearchGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type SearchSortParameter
     * @memberof SearchMainApisearchGet
     */
    sort?: SearchSortParameter
}

export class ObjectSearchMainApi {
    private api: ObservableSearchMainApi

    public constructor(configuration: Configuration, requestFactory?: SearchMainApiRequestFactory, responseProcessor?: SearchMainApiResponseProcessor) {
        this.api = new ObservableSearchMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public searchGetWithHttpInfo(param: SearchMainApiSearchGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedSearchResults>> {
        return this.api.searchGetWithHttpInfo(param.query, param.page, param.pageSize, param.sort,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public searchGet(param: SearchMainApiSearchGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedSearchResults> {
        return this.api.searchGet(param.query, param.page, param.pageSize, param.sort,  options).toPromise();
    }

}

import { ObservableSearchTeamsApi } from "./ObservableAPI";
import { SearchTeamsApiRequestFactory, SearchTeamsApiResponseProcessor} from "../apis/SearchTeamsApi";

export interface SearchTeamsApiTeamsTeamSearchGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchTeamsApiteamsTeamSearchGet
     */
    team: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof SearchTeamsApiteamsTeamSearchGet
     */
    query?: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof SearchTeamsApiteamsTeamSearchGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof SearchTeamsApiteamsTeamSearchGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type SearchSortParameter
     * @memberof SearchTeamsApiteamsTeamSearchGet
     */
    sort?: SearchSortParameter
}

export class ObjectSearchTeamsApi {
    private api: ObservableSearchTeamsApi

    public constructor(configuration: Configuration, requestFactory?: SearchTeamsApiRequestFactory, responseProcessor?: SearchTeamsApiResponseProcessor) {
        this.api = new ObservableSearchTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public teamsTeamSearchGetWithHttpInfo(param: SearchTeamsApiTeamsTeamSearchGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedSearchResults>> {
        return this.api.teamsTeamSearchGetWithHttpInfo(param.team, param.query, param.page, param.pageSize, param.sort,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public teamsTeamSearchGet(param: SearchTeamsApiTeamsTeamSearchGetRequest, options?: ConfigurationOptions): Promise<PaginatedSearchResults> {
        return this.api.teamsTeamSearchGet(param.team, param.query, param.page, param.pageSize, param.sort,  options).toPromise();
    }

}

import { ObservableStackyMainApi } from "./ObservableAPI";
import { StackyMainApiRequestFactory, StackyMainApiResponseProcessor} from "../apis/StackyMainApi";

export interface StackyMainApiStackyGetRequest {
}

export class ObjectStackyMainApi {
    private api: ObservableStackyMainApi

    public constructor(configuration: Configuration, requestFactory?: StackyMainApiRequestFactory, responseProcessor?: StackyMainApiResponseProcessor) {
        this.api = new ObservableStackyMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     * @param param the request object
     */
    public stackyGetWithHttpInfo(param: StackyMainApiStackyGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<string>> {
        return this.api.stackyGetWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves Stacky ASCII art (useful for testing).
     * Retrieve Stacky ASCII art
     * @param param the request object
     */
    public stackyGet(param: StackyMainApiStackyGetRequest = {}, options?: ConfigurationOptions): Promise<string> {
        return this.api.stackyGet( options).toPromise();
    }

}

import { ObservableTagsMainApi } from "./ObservableAPI";
import { TagsMainApiRequestFactory, TagsMainApiResponseProcessor} from "../apis/TagsMainApi";

export interface TagsMainApiTagsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof TagsMainApitagsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type TagsSortParameter
     * @memberof TagsMainApitagsGet
     */
    sort?: TagsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof TagsMainApitagsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsMainApitagsGet
     */
    partialName?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TagsMainApitagsGet
     */
    hasSmes?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TagsMainApitagsGet
     */
    hasSynonyms?: boolean
}

export interface TagsMainApiTagsTagIdGetRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdGet
     */
    tagId: number
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsGetRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsGet
     */
    tagId: number
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsPutRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsPut
     */
    tagId: number
    /**
     * 
     * @type SubjectMatterExpertRequestModel
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsPut
     */
    subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsPostRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUserGroupsPost
     */
    tagId: number
    /**
     * User group IDs
     * @type Array&lt;number&gt;
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUserGroupsPost
     */
    requestBody?: Array<number>
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     */
    tagId: number
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     */
    userGroupId: number
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsUsersPostRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUsersPost
     */
    tagId: number
    /**
     * User ID(s)
     * @type Array&lt;number&gt;
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUsersPost
     */
    requestBody?: Array<number>
}

export interface TagsMainApiTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUsersUserIdDelete
     */
    tagId: number
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdSubjectMatterExpertsUsersUserIdDelete
     */
    userId: number
}

export interface TagsMainApiTagsTagIdTagWatchersGetRequest {
    /**
     * Tag Id
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsMainApitagsTagIdTagWatchersGet
     */
    tagId: number
}

export class ObjectTagsMainApi {
    private api: ObservableTagsMainApi

    public constructor(configuration: Configuration, requestFactory?: TagsMainApiRequestFactory, responseProcessor?: TagsMainApiResponseProcessor) {
        this.api = new ObservableTagsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param param the request object
     */
    public tagsGetWithHttpInfo(param: TagsMainApiTagsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedTags>> {
        return this.api.tagsGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order, param.partialName, param.hasSmes, param.hasSynonyms,  options).toPromise();
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param param the request object
     */
    public tagsGet(param: TagsMainApiTagsGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedTags> {
        return this.api.tagsGet(param.page, param.pageSize, param.sort, param.order, param.partialName, param.hasSmes, param.hasSynonyms,  options).toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param param the request object
     */
    public tagsTagIdGetWithHttpInfo(param: TagsMainApiTagsTagIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagResponseModel>> {
        return this.api.tagsTagIdGetWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param param the request object
     */
    public tagsTagIdGet(param: TagsMainApiTagsTagIdGetRequest, options?: ConfigurationOptions): Promise<TagResponseModel> {
        return this.api.tagsTagIdGet(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsGetWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.tagsTagIdSubjectMatterExpertsGetWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsGet(param: TagsMainApiTagsTagIdSubjectMatterExpertsGetRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.tagsTagIdSubjectMatterExpertsGet(param.tagId,  options).toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsPutWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.tagsTagIdSubjectMatterExpertsPutWithHttpInfo(param.tagId, param.subjectMatterExpertRequestModel,  options).toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsPut(param: TagsMainApiTagsTagIdSubjectMatterExpertsPutRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.tagsTagIdSubjectMatterExpertsPut(param.tagId, param.subjectMatterExpertRequestModel,  options).toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.tagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(param.tagId, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsPost(param: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsPostRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.tagsTagIdSubjectMatterExpertsUserGroupsPost(param.tagId, param.requestBody,  options).toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(param.tagId, param.userGroupId,  options).toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(param: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(param.tagId, param.userGroupId,  options).toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsUsersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.tagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(param.tagId, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUsersPost(param: TagsMainApiTagsTagIdSubjectMatterExpertsUsersPostRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.tagsTagIdSubjectMatterExpertsUsersPost(param.tagId, param.requestBody,  options).toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(param: TagsMainApiTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.tagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(param.tagId, param.userId,  options).toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param param the request object
     */
    public tagsTagIdSubjectMatterExpertsUsersUserIdDelete(param: TagsMainApiTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(param.tagId, param.userId,  options).toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param param the request object
     */
    public tagsTagIdTagWatchersGetWithHttpInfo(param: TagsMainApiTagsTagIdTagWatchersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagWatchersResponseModel>> {
        return this.api.tagsTagIdTagWatchersGetWithHttpInfo(param.tagId,  options).toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param param the request object
     */
    public tagsTagIdTagWatchersGet(param: TagsMainApiTagsTagIdTagWatchersGetRequest, options?: ConfigurationOptions): Promise<TagWatchersResponseModel> {
        return this.api.tagsTagIdTagWatchersGet(param.tagId,  options).toPromise();
    }

}

import { ObservableTagsTeamsApi } from "./ObservableAPI";
import { TagsTeamsApiRequestFactory, TagsTeamsApiResponseProcessor} from "../apis/TagsTeamsApi";

export interface TagsTeamsApiTeamsTeamTagsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type TagsSortParameter
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    sort?: TagsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    partialName?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    hasSmes?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof TagsTeamsApiteamsTeamTagsGet
     */
    hasSynonyms?: boolean
}

export interface TagsTeamsApiTeamsTeamTagsTagIdGetRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdGet
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdGet
     */
    team: string
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsGetRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsGet
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsGet
     */
    team: string
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsPutRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsPut
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsPut
     */
    team: string
    /**
     * 
     * @type SubjectMatterExpertRequestModel
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsPut
     */
    subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost
     */
    team: string
    /**
     * User group IDs
     * @type Array&lt;number&gt;
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost
     */
    requestBody?: Array<number>
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     */
    tagId: number
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     */
    userGroupId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     */
    team: string
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersPostRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersPost
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersPost
     */
    team: string
    /**
     * User ID(s)
     * @type Array&lt;number&gt;
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersPost
     */
    requestBody?: Array<number>
}

export interface TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest {
    /**
     * Tag ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete
     */
    tagId: number
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete
     */
    userId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete
     */
    team: string
}

export interface TagsTeamsApiTeamsTeamTagsTagIdTagWatchersGetRequest {
    /**
     * Tag Id
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof TagsTeamsApiteamsTeamTagsTagIdTagWatchersGet
     */
    tagId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TagsTeamsApiteamsTeamTagsTagIdTagWatchersGet
     */
    team: string
}

export class ObjectTagsTeamsApi {
    private api: ObservableTagsTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TagsTeamsApiRequestFactory, responseProcessor?: TagsTeamsApiResponseProcessor) {
        this.api = new ObservableTagsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param param the request object
     */
    public teamsTeamTagsGetWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedTags>> {
        return this.api.teamsTeamTagsGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order, param.partialName, param.hasSmes, param.hasSynonyms,  options).toPromise();
    }

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param param the request object
     */
    public teamsTeamTagsGet(param: TagsTeamsApiTeamsTeamTagsGetRequest, options?: ConfigurationOptions): Promise<PaginatedTags> {
        return this.api.teamsTeamTagsGet(param.team, param.page, param.pageSize, param.sort, param.order, param.partialName, param.hasSmes, param.hasSynonyms,  options).toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdGetWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagResponseModel>> {
        return this.api.teamsTeamTagsTagIdGetWithHttpInfo(param.tagId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdGet(param: TagsTeamsApiTeamsTeamTagsTagIdGetRequest, options?: ConfigurationOptions): Promise<TagResponseModel> {
        return this.api.teamsTeamTagsTagIdGet(param.tagId, param.team,  options).toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(param.tagId, param.team,  options).toPromise();
    }

    /**
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsGet(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsGetRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsGet(param.tagId, param.team,  options).toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(param.tagId, param.team, param.subjectMatterExpertRequestModel,  options).toPromise();
    }

    /**
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsPut(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsPutRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsPut(param.tagId, param.team, param.subjectMatterExpertRequestModel,  options).toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(param.tagId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(param.tagId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(param.tagId, param.userGroupId, param.team,  options).toPromise();
    }

    /**
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(param.tagId, param.userGroupId, param.team,  options).toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<SubjectMatterExpertResponseModel>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(param.tagId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersPostRequest, options?: ConfigurationOptions): Promise<SubjectMatterExpertResponseModel> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(param.tagId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(param.tagId, param.userId, param.team,  options).toPromise();
    }

    /**
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(param: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(param.tagId, param.userId, param.team,  options).toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(param: TagsTeamsApiTeamsTeamTagsTagIdTagWatchersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagWatchersResponseModel>> {
        return this.api.teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(param.tagId, param.team,  options).toPromise();
    }

    /**
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param param the request object
     */
    public teamsTeamTagsTagIdTagWatchersGet(param: TagsTeamsApiTeamsTeamTagsTagIdTagWatchersGetRequest, options?: ConfigurationOptions): Promise<TagWatchersResponseModel> {
        return this.api.teamsTeamTagsTagIdTagWatchersGet(param.tagId, param.team,  options).toPromise();
    }

}

import { ObservableUserGroupsMainApi } from "./ObservableAPI";
import { UserGroupsMainApiRequestFactory, UserGroupsMainApiResponseProcessor} from "../apis/UserGroupsMainApi";

export interface UserGroupsMainApiUserGroupsGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof UserGroupsMainApiuserGroupsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type UserGroupsSortParameter
     * @memberof UserGroupsMainApiuserGroupsGet
     */
    sort?: UserGroupsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof UserGroupsMainApiuserGroupsGet
     */
    order?: SortOrder
}

export interface UserGroupsMainApiUserGroupsPostRequest {
    /**
     * 
     * @type UserGroupRequestModel
     * @memberof UserGroupsMainApiuserGroupsPost
     */
    userGroupRequestModel?: UserGroupRequestModel
}

export interface UserGroupsMainApiUserGroupsUserGroupIdGetRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdGet
     */
    userGroupId: number
}

export interface UserGroupsMainApiUserGroupsUserGroupIdMembersPostRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdMembersPost
     */
    userGroupId: number
    /**
     * User ID(s)
     * @type Array&lt;number&gt;
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdMembersPost
     */
    requestBody?: Array<number>
}

export interface UserGroupsMainApiUserGroupsUserGroupIdMembersUserIdDeleteRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdMembersUserIdDelete
     */
    userGroupId: number
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdMembersUserIdDelete
     */
    userId: number
}

export interface UserGroupsMainApiUserGroupsUserGroupIdPutRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdPut
     */
    userGroupId: number
    /**
     * 
     * @type UserGroupRequestModel
     * @memberof UserGroupsMainApiuserGroupsUserGroupIdPut
     */
    userGroupRequestModel?: UserGroupRequestModel
}

export class ObjectUserGroupsMainApi {
    private api: ObservableUserGroupsMainApi

    public constructor(configuration: Configuration, requestFactory?: UserGroupsMainApiRequestFactory, responseProcessor?: UserGroupsMainApiResponseProcessor) {
        this.api = new ObservableUserGroupsMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param param the request object
     */
    public userGroupsGetWithHttpInfo(param: UserGroupsMainApiUserGroupsGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedUserGroups>> {
        return this.api.userGroupsGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param param the request object
     */
    public userGroupsGet(param: UserGroupsMainApiUserGroupsGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedUserGroups> {
        return this.api.userGroupsGet(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param param the request object
     */
    public userGroupsPostWithHttpInfo(param: UserGroupsMainApiUserGroupsPostRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.userGroupsPostWithHttpInfo(param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param param the request object
     */
    public userGroupsPost(param: UserGroupsMainApiUserGroupsPostRequest = {}, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.userGroupsPost(param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdGetWithHttpInfo(param: UserGroupsMainApiUserGroupsUserGroupIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.userGroupsUserGroupIdGetWithHttpInfo(param.userGroupId,  options).toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdGet(param: UserGroupsMainApiUserGroupsUserGroupIdGetRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.userGroupsUserGroupIdGet(param.userGroupId,  options).toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdMembersPostWithHttpInfo(param: UserGroupsMainApiUserGroupsUserGroupIdMembersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.userGroupsUserGroupIdMembersPostWithHttpInfo(param.userGroupId, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdMembersPost(param: UserGroupsMainApiUserGroupsUserGroupIdMembersPostRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.userGroupsUserGroupIdMembersPost(param.userGroupId, param.requestBody,  options).toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(param: UserGroupsMainApiUserGroupsUserGroupIdMembersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.userGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(param.userGroupId, param.userId,  options).toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdMembersUserIdDelete(param: UserGroupsMainApiUserGroupsUserGroupIdMembersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.userGroupsUserGroupIdMembersUserIdDelete(param.userGroupId, param.userId,  options).toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdPutWithHttpInfo(param: UserGroupsMainApiUserGroupsUserGroupIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.userGroupsUserGroupIdPutWithHttpInfo(param.userGroupId, param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param param the request object
     */
    public userGroupsUserGroupIdPut(param: UserGroupsMainApiUserGroupsUserGroupIdPutRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.userGroupsUserGroupIdPut(param.userGroupId, param.userGroupRequestModel,  options).toPromise();
    }

}

import { ObservableUserGroupsTeamsApi } from "./ObservableAPI";
import { UserGroupsTeamsApiRequestFactory, UserGroupsTeamsApiResponseProcessor} from "../apis/UserGroupsTeamsApi";

export interface UserGroupsTeamsApiTeamsTeamUserGroupsGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type UserGroupsSortParameter
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsGet
     */
    sort?: UserGroupsSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsGet
     */
    order?: SortOrder
}

export interface UserGroupsTeamsApiTeamsTeamUserGroupsPostRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsPost
     */
    team: string
    /**
     * 
     * @type UserGroupRequestModel
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsPost
     */
    userGroupRequestModel?: UserGroupRequestModel
}

export interface UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdGetRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdGet
     */
    userGroupId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdGet
     */
    team: string
}

export interface UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersPostRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersPost
     */
    userGroupId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersPost
     */
    team: string
    /**
     * User ID(s)
     * @type Array&lt;number&gt;
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersPost
     */
    requestBody?: Array<number>
}

export interface UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersUserIdDelete
     */
    userGroupId: number
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersUserIdDelete
     */
    userId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdMembersUserIdDelete
     */
    team: string
}

export interface UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdPutRequest {
    /**
     * User group ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdPut
     */
    userGroupId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdPut
     */
    team: string
    /**
     * 
     * @type UserGroupRequestModel
     * @memberof UserGroupsTeamsApiteamsTeamUserGroupsUserGroupIdPut
     */
    userGroupRequestModel?: UserGroupRequestModel
}

export class ObjectUserGroupsTeamsApi {
    private api: ObservableUserGroupsTeamsApi

    public constructor(configuration: Configuration, requestFactory?: UserGroupsTeamsApiRequestFactory, responseProcessor?: UserGroupsTeamsApiResponseProcessor) {
        this.api = new ObservableUserGroupsTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param param the request object
     */
    public teamsTeamUserGroupsGetWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedUserGroups>> {
        return this.api.teamsTeamUserGroupsGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param param the request object
     */
    public teamsTeamUserGroupsGet(param: UserGroupsTeamsApiTeamsTeamUserGroupsGetRequest, options?: ConfigurationOptions): Promise<PaginatedUserGroups> {
        return this.api.teamsTeamUserGroupsGet(param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsPostWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.teamsTeamUserGroupsPostWithHttpInfo(param.team, param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Creates a user group.
     * Create a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsPost(param: UserGroupsTeamsApiTeamsTeamUserGroupsPostRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.teamsTeamUserGroupsPost(param.team, param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(param.userGroupId, param.team,  options).toPromise();
    }

    /**
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdGet(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdGetRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.teamsTeamUserGroupsUserGroupIdGet(param.userGroupId, param.team,  options).toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(param.userGroupId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdMembersPost(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersPostRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.teamsTeamUserGroupsUserGroupIdMembersPost(param.userGroupId, param.team, param.requestBody,  options).toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(param.userGroupId, param.userId, param.team,  options).toPromise();
    }

    /**
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(param.userGroupId, param.userId, param.team,  options).toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdPutRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserGroupResponseModel>> {
        return this.api.teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(param.userGroupId, param.team, param.userGroupRequestModel,  options).toPromise();
    }

    /**
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param param the request object
     */
    public teamsTeamUserGroupsUserGroupIdPut(param: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdPutRequest, options?: ConfigurationOptions): Promise<UserGroupResponseModel> {
        return this.api.teamsTeamUserGroupsUserGroupIdPut(param.userGroupId, param.team, param.userGroupRequestModel,  options).toPromise();
    }

}

import { ObservableUsersMainApi } from "./ObservableAPI";
import { UsersMainApiRequestFactory, UsersMainApiResponseProcessor} from "../apis/UsersMainApi";

export interface UsersMainApiUsersByEmailEmailGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersMainApiusersByEmailEmailGet
     */
    email: string
}

export interface UsersMainApiUsersByExternalIdExternalIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersMainApiusersByExternalIdExternalIdGet
     */
    externalId: string
}

export interface UsersMainApiUsersGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof UsersMainApiusersGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof UsersMainApiusersGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type UsersSortParameter
     * @memberof UsersMainApiusersGet
     */
    sort?: UsersSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof UsersMainApiusersGet
     */
    order?: SortOrder
}

export interface UsersMainApiUsersManageGetRequest {
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof UsersMainApiusersManageGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof UsersMainApiusersManageGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type ManageUsersSortParameter
     * @memberof UsersMainApiusersManageGet
     */
    sort?: ManageUsersSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof UsersMainApiusersManageGet
     */
    order?: SortOrder
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof UsersMainApiusersManageGet
     */
    isDeactivated?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof UsersMainApiusersManageGet
     */
    lastAccessDateFrom?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof UsersMainApiusersManageGet
     */
    lastAccessDateTo?: Date
}

export interface UsersMainApiUsersMeGetRequest {
}

export interface UsersMainApiUsersUserIdGetRequest {
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UsersMainApiusersUserIdGet
     */
    userId: number
}

export interface UsersMainApiUsersUserIdWatchedTagsGetRequest {
    /**
     * 123
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UsersMainApiusersUserIdWatchedTagsGet
     */
    userId: number
}

export class ObjectUsersMainApi {
    private api: ObservableUsersMainApi

    public constructor(configuration: Configuration, requestFactory?: UsersMainApiRequestFactory, responseProcessor?: UsersMainApiResponseProcessor) {
        this.api = new ObservableUsersMainApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user by email address
     * @param param the request object
     */
    public usersByEmailEmailGetWithHttpInfo(param: UsersMainApiUsersByEmailEmailGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.usersByEmailEmailGetWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * Retrieve a user by email address
     * @param param the request object
     */
    public usersByEmailEmailGet(param: UsersMainApiUsersByEmailEmailGetRequest, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.usersByEmailEmailGet(param.email,  options).toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param param the request object
     */
    public usersByExternalIdExternalIdGetWithHttpInfo(param: UsersMainApiUsersByExternalIdExternalIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<UserResponseModel>>> {
        return this.api.usersByExternalIdExternalIdGetWithHttpInfo(param.externalId,  options).toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param param the request object
     */
    public usersByExternalIdExternalIdGet(param: UsersMainApiUsersByExternalIdExternalIdGetRequest, options?: ConfigurationOptions): Promise<Array<UserResponseModel>> {
        return this.api.usersByExternalIdExternalIdGet(param.externalId,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param param the request object
     */
    public usersGetWithHttpInfo(param: UsersMainApiUsersGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedUsers>> {
        return this.api.usersGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param param the request object
     */
    public usersGet(param: UsersMainApiUsersGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedUsers> {
        return this.api.usersGet(param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team, for user management.
     * Manage all users
     * @param param the request object
     */
    public usersManageGetWithHttpInfo(param: UsersMainApiUsersManageGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedManageUsers>> {
        return this.api.usersManageGetWithHttpInfo(param.page, param.pageSize, param.sort, param.order, param.isDeactivated, param.lastAccessDateFrom, param.lastAccessDateTo,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team, for user management.
     * Manage all users
     * @param param the request object
     */
    public usersManageGet(param: UsersMainApiUsersManageGetRequest = {}, options?: ConfigurationOptions): Promise<PaginatedManageUsers> {
        return this.api.usersManageGet(param.page, param.pageSize, param.sort, param.order, param.isDeactivated, param.lastAccessDateFrom, param.lastAccessDateTo,  options).toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param param the request object
     */
    public usersMeGetWithHttpInfo(param: UsersMainApiUsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.usersMeGetWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param param the request object
     */
    public usersMeGet(param: UsersMainApiUsersMeGetRequest = {}, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.usersMeGet( options).toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param param the request object
     */
    public usersUserIdGetWithHttpInfo(param: UsersMainApiUsersUserIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.usersUserIdGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param param the request object
     */
    public usersUserIdGet(param: UsersMainApiUsersUserIdGetRequest, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.usersUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param param the request object
     */
    public usersUserIdWatchedTagsGetWithHttpInfo(param: UsersMainApiUsersUserIdWatchedTagsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagSummaryResponseModel>> {
        return this.api.usersUserIdWatchedTagsGetWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param param the request object
     */
    public usersUserIdWatchedTagsGet(param: UsersMainApiUsersUserIdWatchedTagsGetRequest, options?: ConfigurationOptions): Promise<TagSummaryResponseModel> {
        return this.api.usersUserIdWatchedTagsGet(param.userId,  options).toPromise();
    }

}

import { ObservableUsersTeamsApi } from "./ObservableAPI";
import { UsersTeamsApiRequestFactory, UsersTeamsApiResponseProcessor} from "../apis/UsersTeamsApi";

export interface UsersTeamsApiTeamsTeamUsersByEmailEmailGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersByEmailEmailGet
     */
    email: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersByEmailEmailGet
     */
    team: string
}

export interface UsersTeamsApiTeamsTeamUsersByExternalIdExternalIdGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersByExternalIdExternalIdGet
     */
    externalId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersByExternalIdExternalIdGet
     */
    team: string
}

export interface UsersTeamsApiTeamsTeamUsersGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersGet
     */
    team: string
    /**
     * 
     * Minimum: 1
     * Maximum: 2147483647
     * Defaults to: undefined
     * @type number
     * @memberof UsersTeamsApiteamsTeamUsersGet
     */
    page?: number
    /**
     * 
     * Defaults to: undefined
     * @type 15 | 30 | 50 | 100
     * @memberof UsersTeamsApiteamsTeamUsersGet
     */
    pageSize?: 15 | 30 | 50 | 100
    /**
     * 
     * Defaults to: undefined
     * @type UsersSortParameter
     * @memberof UsersTeamsApiteamsTeamUsersGet
     */
    sort?: UsersSortParameter
    /**
     * 
     * Defaults to: undefined
     * @type SortOrder
     * @memberof UsersTeamsApiteamsTeamUsersGet
     */
    order?: SortOrder
}

export interface UsersTeamsApiTeamsTeamUsersMeGetRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersMeGet
     */
    team: string
}

export interface UsersTeamsApiTeamsTeamUsersUserIdGetRequest {
    /**
     * User ID
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UsersTeamsApiteamsTeamUsersUserIdGet
     */
    userId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersUserIdGet
     */
    team: string
}

export interface UsersTeamsApiTeamsTeamUsersUserIdWatchedTagsGetRequest {
    /**
     * 123
     * Minimum: 1
     * Defaults to: undefined
     * @type number
     * @memberof UsersTeamsApiteamsTeamUsersUserIdWatchedTagsGet
     */
    userId: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersTeamsApiteamsTeamUsersUserIdWatchedTagsGet
     */
    team: string
}

export class ObjectUsersTeamsApi {
    private api: ObservableUsersTeamsApi

    public constructor(configuration: Configuration, requestFactory?: UsersTeamsApiRequestFactory, responseProcessor?: UsersTeamsApiResponseProcessor) {
        this.api = new ObservableUsersTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a user by email address
     * @param param the request object
     */
    public teamsTeamUsersByEmailEmailGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersByEmailEmailGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.teamsTeamUsersByEmailEmailGetWithHttpInfo(param.email, param.team,  options).toPromise();
    }

    /**
     * Retrieve a user by email address
     * @param param the request object
     */
    public teamsTeamUsersByEmailEmailGet(param: UsersTeamsApiTeamsTeamUsersByEmailEmailGetRequest, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.teamsTeamUsersByEmailEmailGet(param.email, param.team,  options).toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param param the request object
     */
    public teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersByExternalIdExternalIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<Array<UserResponseModel>>> {
        return this.api.teamsTeamUsersByExternalIdExternalIdGetWithHttpInfo(param.externalId, param.team,  options).toPromise();
    }

    /**
     * Retrieve a user by external ID
     * @param param the request object
     */
    public teamsTeamUsersByExternalIdExternalIdGet(param: UsersTeamsApiTeamsTeamUsersByExternalIdExternalIdGetRequest, options?: ConfigurationOptions): Promise<Array<UserResponseModel>> {
        return this.api.teamsTeamUsersByExternalIdExternalIdGet(param.externalId, param.team,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param param the request object
     */
    public teamsTeamUsersGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaginatedUsers>> {
        return this.api.teamsTeamUsersGetWithHttpInfo(param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves all users on the site or team.
     * Retrieve all users
     * @param param the request object
     */
    public teamsTeamUsersGet(param: UsersTeamsApiTeamsTeamUsersGetRequest, options?: ConfigurationOptions): Promise<PaginatedUsers> {
        return this.api.teamsTeamUsersGet(param.team, param.page, param.pageSize, param.sort, param.order,  options).toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param param the request object
     */
    public teamsTeamUsersMeGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersMeGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.teamsTeamUsersMeGetWithHttpInfo(param.team,  options).toPromise();
    }

    /**
     * Retrieves details for the logged-in user.
     * Retrieve logged-in user details
     * @param param the request object
     */
    public teamsTeamUsersMeGet(param: UsersTeamsApiTeamsTeamUsersMeGetRequest, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.teamsTeamUsersMeGet(param.team,  options).toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param param the request object
     */
    public teamsTeamUsersUserIdGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersUserIdGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDetailsResponseModel>> {
        return this.api.teamsTeamUsersUserIdGetWithHttpInfo(param.userId, param.team,  options).toPromise();
    }

    /**
     * Retrieves details for a user, identified by user ID.
     * Retrieve a user
     * @param param the request object
     */
    public teamsTeamUsersUserIdGet(param: UsersTeamsApiTeamsTeamUsersUserIdGetRequest, options?: ConfigurationOptions): Promise<UserDetailsResponseModel> {
        return this.api.teamsTeamUsersUserIdGet(param.userId, param.team,  options).toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param param the request object
     */
    public teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(param: UsersTeamsApiTeamsTeamUsersUserIdWatchedTagsGetRequest, options?: ConfigurationOptions): Promise<HttpInfo<TagSummaryResponseModel>> {
        return this.api.teamsTeamUsersUserIdWatchedTagsGetWithHttpInfo(param.userId, param.team,  options).toPromise();
    }

    /**
     * Retrieves watched tags, identified by tag name.
     * Retrieves a list of tags watched by user
     * @param param the request object
     */
    public teamsTeamUsersUserIdWatchedTagsGet(param: UsersTeamsApiTeamsTeamUsersUserIdWatchedTagsGetRequest, options?: ConfigurationOptions): Promise<TagSummaryResponseModel> {
        return this.api.teamsTeamUsersUserIdWatchedTagsGet(param.userId, param.team,  options).toPromise();
    }

}
