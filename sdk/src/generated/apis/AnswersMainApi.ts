// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AnswerRequestModel } from '../models/AnswerRequestModel';
import { AnswerResponseModel } from '../models/AnswerResponseModel';
import { AnswerSummaryResponseModel } from '../models/AnswerSummaryResponseModel';
import { AnswersSortParameter } from '../models/AnswersSortParameter';
import { FlagOptionResponseModel } from '../models/FlagOptionResponseModel';
import { FlagRequestModel } from '../models/FlagRequestModel';
import { PaginatedAnswers } from '../models/PaginatedAnswers';
import { ProblemDetails } from '../models/ProblemDetails';
import { SortOrder } from '../models/SortOrder';

/**
 * no description
 */
export class AnswersMainApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdAcceptDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdAcceptDelete", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/accept'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Accepts an answer, identified by question ID and answer ID.
     * Accept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdAcceptPost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdAcceptPost", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/accept'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Deletes an answer, identified by question ID and answer ID.
     * Delete an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDelete", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Deletes the downvote of an answer, identified by question ID and answer ID.
     * Delete answer downvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDownvoteDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDownvoteDelete", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/downvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Downvotes an answer, identified by question ID and answer ID.
     * Downvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDownvotePost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdDownvotePost", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/downvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Retrieve a list of flag options for an answer, identified by question ID and answer ID.
     * Retrive a list of flag options
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdFlagsOptionsGet", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdFlagsOptionsGet", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/flags/options'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

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
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param flagRequestModel 
     */
    public async questionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, flagRequestModel?: FlagRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdFlagsPost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdFlagsPost", "answerId");
        }



        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/flags'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(flagRequestModel, "FlagRequestModel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Retrieves an answer to a question, identified by question ID and answer ID.
     * Retrieve an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdGet", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdGet", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

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
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param answerRequestModel 
     */
    public async questionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, answerRequestModel?: AnswerRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdPut", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdPut", "answerId");
        }



        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(answerRequestModel, "AnswerRequestModel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Deletes the upvote of an answer, identified by question ID and answer ID.
     * Delete answer upvote
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdUpvoteDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdUpvoteDelete", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/upvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * Upvotes an answer, identified by question ID and answer ID.
     * Upvote an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     */
    public async questionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdUpvotePost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersAnswerIdUpvotePost", "answerId");
        }


        // Path Params
        const localVarPath = '/questions/{questionId}/answers/{answerId}/upvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Retrieves all answers to a question, identified by question ID.
     * Retrieve all answers to a question
     * @param questionId Question ID
     * @param page 
     * @param pageSize 
     * @param sort 
     * @param order 
     */
    public async questionsQuestionIdAnswersGet(questionId: number, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersGet", "questionId");
        }






        // Path Params
        const localVarPath = '/questions/{questionId}/answers'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "15 | 30 | 50 | 100", "int32"));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "AnswersSortParameter", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "SortOrder", ""));
        }


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
     * Creates an answer to a question, identified by question ID.
     * Create an answer
     * @param questionId Question ID
     * @param answerRequestModel 
     */
    public async questionsQuestionIdAnswersPost(questionId: number, answerRequestModel?: AnswerRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersMainApi", "questionsQuestionIdAnswersPost", "questionId");
        }



        // Path Params
        const localVarPath = '/questions/{questionId}/answers'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json-patch+json",
        
            "application/json",
        
            "text/json",
        
            "application/*+json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(answerRequestModel, "AnswerRequestModel", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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

export class AnswersMainApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdAcceptDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdAcceptPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Answer not found", body, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdDownvoteDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdDownvotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FlagOptionResponseModel> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FlagOptionResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FlagOptionResponseModel>", ""
            ) as Array<FlagOptionResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Answer not found", body, response.headers);
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
            const body: Array<FlagOptionResponseModel> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FlagOptionResponseModel>", ""
            ) as Array<FlagOptionResponseModel>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdFlagsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Unable to add flag", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Answer not found", body, response.headers);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
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
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdUpvoteDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersAnswerIdUpvotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Question or answer not found", body, response.headers);
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
            const body: AnswerSummaryResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerSummaryResponseModel", ""
            ) as AnswerSummaryResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedAnswers >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedAnswers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedAnswers", ""
            ) as PaginatedAnswers;
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
            const body: PaginatedAnswers = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedAnswers", ""
            ) as PaginatedAnswers;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to questionsQuestionIdAnswersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async questionsQuestionIdAnswersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
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
            const body: AnswerResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnswerResponseModel", ""
            ) as AnswerResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
