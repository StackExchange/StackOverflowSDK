// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PaginatedUserGroups } from '../models/PaginatedUserGroups';
import { ProblemDetails } from '../models/ProblemDetails';
import { SortOrder } from '../models/SortOrder';
import { UserGroupRequestModel } from '../models/UserGroupRequestModel';
import { UserGroupResponseModel } from '../models/UserGroupResponseModel';
import { UserGroupsSortParameter } from '../models/UserGroupsSortParameter';

/**
 * no description
 */
export class UserGroupsTeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Retrieves all user groups on the site or team.
     * Retrieve all user groups
     * @param team 
     * @param page 
     * @param pageSize 
     * @param sort 
     * @param order 
     */
    public async teamsTeamUserGroupsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: UserGroupsSortParameter, order?: SortOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsGet", "team");
        }






        // Path Params
        const localVarPath = '/teams/{team}/user-groups'
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
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "UserGroupsSortParameter", ""));
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
     * Creates a user group.
     * Create a user group
     * @param team 
     * @param userGroupRequestModel 
     */
    public async teamsTeamUserGroupsPost(team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/user-groups'
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
            ObjectSerializer.serialize(userGroupRequestModel, "UserGroupRequestModel", ""),
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
     * Retrieves a user group, identified by user group ID.
     * Retrieve a user group
     * @param userGroupId User group ID
     * @param team 
     */
    public async teamsTeamUserGroupsUserGroupIdGet(userGroupId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userGroupId' is not null or undefined
        if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdGet", "userGroupId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/user-groups/{userGroupId}'
            .replace('{' + 'userGroupId' + '}', encodeURIComponent(String(userGroupId)))
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
     * Adds one or more members to a user group, identified by user group ID and user ID(s).
     * Add member(s) to a user group
     * @param userGroupId User group ID
     * @param team 
     * @param requestBody User ID(s)
     */
    public async teamsTeamUserGroupsUserGroupIdMembersPost(userGroupId: number, team: string, requestBody?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userGroupId' is not null or undefined
        if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdMembersPost", "userGroupId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdMembersPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/user-groups/{userGroupId}/members'
            .replace('{' + 'userGroupId' + '}', encodeURIComponent(String(userGroupId)))
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
            ObjectSerializer.serialize(requestBody, "Array<number>", ""),
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
     * Deletes a member from a user group, identified by user group ID and user ID.
     * Delete a member from a user group
     * @param userGroupId User group ID
     * @param userId User ID
     * @param team 
     */
    public async teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(userGroupId: number, userId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userGroupId' is not null or undefined
        if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdMembersUserIdDelete", "userGroupId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdMembersUserIdDelete", "userId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdMembersUserIdDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/user-groups/{userGroupId}/members/{userId}'
            .replace('{' + 'userGroupId' + '}', encodeURIComponent(String(userGroupId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)))
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
     * Updates a user group, identified by user group ID.
     * Update a user group
     * @param userGroupId User group ID
     * @param team 
     * @param userGroupRequestModel 
     */
    public async teamsTeamUserGroupsUserGroupIdPut(userGroupId: number, team: string, userGroupRequestModel?: UserGroupRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userGroupId' is not null or undefined
        if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdPut", "userGroupId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("UserGroupsTeamsApi", "teamsTeamUserGroupsUserGroupIdPut", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/user-groups/{userGroupId}'
            .replace('{' + 'userGroupId' + '}', encodeURIComponent(String(userGroupId)))
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
            ObjectSerializer.serialize(userGroupRequestModel, "UserGroupRequestModel", ""),
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

export class UserGroupsTeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedUserGroups >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedUserGroups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedUserGroups", ""
            ) as PaginatedUserGroups;
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
            const body: PaginatedUserGroups = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedUserGroups", ""
            ) as PaginatedUserGroups;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserGroupResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Invalid request", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Inadequate permissions", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Server Error", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsUserGroupIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsUserGroupIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserGroupResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "User group not found", body, response.headers);
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
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsUserGroupIdMembersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsUserGroupIdMembersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserGroupResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "User group not found", body, response.headers);
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
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsUserGroupIdMembersUserIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsUserGroupIdMembersUserIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserGroupResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "User group or user not found", body, response.headers);
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
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamUserGroupsUserGroupIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamUserGroupsUserGroupIdPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<UserGroupResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
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
            const body: UserGroupResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserGroupResponseModel", ""
            ) as UserGroupResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
