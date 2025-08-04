// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { CommentResponseModel } from '../models/CommentResponseModel';
import { ProblemDetails } from '../models/ProblemDetails';

/**
 * no description
 */
export class CommentsTeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves comments on an article, identified by article ID.
     * Retrieve comments on an article
     * @param articleId Article ID
     * @param team 
     */
    public async teamsTeamArticlesArticleIdCommentsGet(articleId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'articleId' is not null or undefined
        if (articleId === null || articleId === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamArticlesArticleIdCommentsGet", "articleId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamArticlesArticleIdCommentsGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/articles/{articleId}/comments'
            .replace('{' + 'articleId' + '}', encodeURIComponent(String(articleId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves comments on an answer, identified by question ID and answer ID.
     * Retrieve comments on an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/comments'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Retrieves comments on a question, identified by question ID.
     * Retrieve comments on a question
     * @param questionId Question ID
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdCommentsGet(questionId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamQuestionsQuestionIdCommentsGet", "questionId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("CommentsTeamsApi", "teamsTeamQuestionsQuestionIdCommentsGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/comments'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["oauth2"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _config?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class CommentsTeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamArticlesArticleIdCommentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamArticlesArticleIdCommentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<CommentResponseModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Article not found", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<CommentResponseModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Answer or question not found", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdCommentsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdCommentsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<CommentResponseModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question not found", body, response.headers);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Forbidden", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CommentResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CommentResponseModel>", ""
            ) as Array<CommentResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
