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
export class AnswersTeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Unaccepts an answer, identified by question ID and answer ID.
     * Unaccept an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/accept'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/accept'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/downvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/downvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/flags/options'
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
     * Raises a flag for an answer, identified by question ID and answer ID.
     * Raises a flag for an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team 
     * @param flagRequestModel 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(questionId: number, answerId: number, team: string, flagRequestModel?: FlagRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/flags'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdGet", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdGet", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}'
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
     * Updates an answer, identified by question ID and answer ID.
     * Update an answer
     * @param questionId Question ID
     * @param answerId Answer ID
     * @param team 
     * @param answerRequestModel 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(questionId: number, answerId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdPut", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdPut", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdPut", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/upvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     */
    public async teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(questionId: number, answerId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost", "questionId");
        }


        // verify required parameter 'answerId' is not null or undefined
        if (answerId === null || answerId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost", "answerId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers/{answerId}/upvote'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'answerId' + '}', encodeURIComponent(String(answerId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     * @param page 
     * @param pageSize 
     * @param sort 
     * @param order 
     */
    public async teamsTeamQuestionsQuestionIdAnswersGet(questionId: number, team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: AnswersSortParameter, order?: SortOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersGet", "questionId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersGet", "team");
        }






        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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
     * @param team 
     * @param answerRequestModel 
     */
    public async teamsTeamQuestionsQuestionIdAnswersPost(questionId: number, team: string, answerRequestModel?: AnswerRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'questionId' is not null or undefined
        if (questionId === null || questionId === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersPost", "questionId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("AnswersTeamsApi", "teamsTeamQuestionsQuestionIdAnswersPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/questions/{questionId}/answers'
            .replace('{' + 'questionId' + '}', encodeURIComponent(String(questionId)))
            .replace('{' + 'team' + '}', encodeURIComponent(String(team)));

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

export class AnswersTeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<FlagOptionResponseModel> >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerSummaryResponseModel >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedAnswers >> {
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
     * @params response Response returned by the server for a request to teamsTeamQuestionsQuestionIdAnswersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamQuestionsQuestionIdAnswersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<AnswerResponseModel >> {
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
