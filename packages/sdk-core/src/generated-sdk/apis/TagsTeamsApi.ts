// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { PaginatedTags } from '../models/PaginatedTags';
import { ProblemDetails } from '../models/ProblemDetails';
import { SortOrder } from '../models/SortOrder';
import { SubjectMatterExpertRequestModel } from '../models/SubjectMatterExpertRequestModel';
import { SubjectMatterExpertResponseModel } from '../models/SubjectMatterExpertResponseModel';
import { TagResponseModel } from '../models/TagResponseModel';
import { TagWatchersResponseModel } from '../models/TagWatchersResponseModel';
import { TagsSortParameter } from '../models/TagsSortParameter';

/**
 * no description
 */
export class TagsTeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Queries all tags on the site.
     * Retrieve tags
     * @param team 
     * @param page 
     * @param pageSize 
     * @param sort 
     * @param order 
     * @param partialName 
     * @param hasSmes 
     * @param hasSynonyms 
     */
    public async teamsTeamTagsGet(team: string, page?: number, pageSize?: 15 | 30 | 50 | 100, sort?: TagsSortParameter, order?: SortOrder, partialName?: string, hasSmes?: boolean, hasSynonyms?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsGet", "team");
        }









        // Path Params
        const localVarPath = '/teams/{team}/tags'
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
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "TagsSortParameter", ""));
        }

        // Query Params
        if (order !== undefined) {
            requestContext.setQueryParam("order", ObjectSerializer.serialize(order, "SortOrder", ""));
        }

        // Query Params
        if (partialName !== undefined) {
            requestContext.setQueryParam("partialName", ObjectSerializer.serialize(partialName, "string", ""));
        }

        // Query Params
        if (hasSmes !== undefined) {
            requestContext.setQueryParam("hasSmes", ObjectSerializer.serialize(hasSmes, "boolean", ""));
        }

        // Query Params
        if (hasSynonyms !== undefined) {
            requestContext.setQueryParam("hasSynonyms", ObjectSerializer.serialize(hasSynonyms, "boolean", ""));
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
     * Retrieves a tag, identified by tag ID.
     * Retrieve a tag
     * @param tagId Tag ID
     * @param team 
     */
    public async teamsTeamTagsTagIdGet(tagId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdGet", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
     * Retrieves the subject matter experts for a tag, identified by tag ID.
     * Retrieve subject matter experts for a tag
     * @param tagId Tag ID
     * @param team 
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsGet(tagId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsGet", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
     * Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).
     * Replace subject matter expert(s) for a tag
     * @param tagId Tag ID
     * @param team 
     * @param subjectMatterExpertRequestModel 
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsPut(tagId: number, team: string, subjectMatterExpertRequestModel?: SubjectMatterExpertRequestModel, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsPut", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsPut", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
            ObjectSerializer.serialize(subjectMatterExpertRequestModel, "SubjectMatterExpertRequestModel", ""),
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
     * Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).
     * Add user group(s) as subject matter experts to a tag
     * @param tagId Tag ID
     * @param team 
     * @param requestBody User group IDs
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(tagId: number, team: string, requestBody?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts/user-groups'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
     * Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.
     * Remove a user group as subject matter experts for a tag
     * @param tagId Tag ID
     * @param userGroupId User group ID
     * @param team 
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(tagId: number, userGroupId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete", "tagId");
        }


        // verify required parameter 'userGroupId' is not null or undefined
        if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete", "userGroupId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts/user-groups/{userGroupId}'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
            .replace('{' + 'userGroupId' + '}', encodeURIComponent(String(userGroupId)))
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
     * Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).
     * Add user(s) as subject matter expert(s) to a tag
     * @param tagId Tag ID
     * @param team 
     * @param requestBody User ID(s)
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(tagId: number, team: string, requestBody?: Array<number>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUsersPost", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUsersPost", "team");
        }



        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts/users'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
     * Removes a user as subject matter expert for a tag, identified by tag ID and user ID.
     * Remove a user as subject matter expert for a tag
     * @param tagId Tag ID
     * @param userId User ID
     * @param team 
     */
    public async teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(tagId: number, userId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete", "tagId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete", "userId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/subject-matter-experts/users/{userId}'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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
     * Retrieves the tag watchers for a tag, identified by tag ID.
     * Retrieves users who are tag watchers of the specified tag
     * @param tagId Tag Id
     * @param team 
     */
    public async teamsTeamTagsTagIdTagWatchersGet(tagId: number, team: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagId' is not null or undefined
        if (tagId === null || tagId === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdTagWatchersGet", "tagId");
        }


        // verify required parameter 'team' is not null or undefined
        if (team === null || team === undefined) {
            throw new RequiredError("TagsTeamsApi", "teamsTeamTagsTagIdTagWatchersGet", "team");
        }


        // Path Params
        const localVarPath = '/teams/{team}/tags/{tagId}/tag-watchers'
            .replace('{' + 'tagId' + '}', encodeURIComponent(String(tagId)))
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

export class TagsTeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PaginatedTags >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PaginatedTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedTags", ""
            ) as PaginatedTags;
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
            const body: PaginatedTags = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PaginatedTags", ""
            ) as PaginatedTags;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TagResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TagResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagResponseModel", ""
            ) as TagResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Tag not found", body, response.headers);
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
            const body: TagResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagResponseModel", ""
            ) as TagResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubjectMatterExpertResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter expert(s) not found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsPutWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubjectMatterExpertResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubjectMatterExpertResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsUsersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsUsersPostWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SubjectMatterExpertResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
            const body: SubjectMatterExpertResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SubjectMatterExpertResponseModel", ""
            ) as SubjectMatterExpertResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Subject matter experts feature not enabled", body, response.headers);
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
     * @params response Response returned by the server for a request to teamsTeamTagsTagIdTagWatchersGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async teamsTeamTagsTagIdTagWatchersGetWithHttpInfo(response: ResponseContext): Promise<HttpInfo<TagWatchersResponseModel >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TagWatchersResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagWatchersResponseModel", ""
            ) as TagWatchersResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: ProblemDetails = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ProblemDetails", ""
            ) as ProblemDetails;
            throw new ApiException<ProblemDetails>(response.httpStatusCode, "Tag not found", body, response.headers);
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
            const body: TagWatchersResponseModel = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagWatchersResponseModel", ""
            ) as TagWatchersResponseModel;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
