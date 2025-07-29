# .TagsTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamTagsGet**](TagsTeamsApi.md#teamsTeamTagsGet) | **GET** /teams/{team}/tags | Retrieve tags
[**teamsTeamTagsTagIdGet**](TagsTeamsApi.md#teamsTeamTagsTagIdGet) | **GET** /teams/{team}/tags/{tagId} | Retrieve a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsGet**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsGet) | **GET** /teams/{team}/tags/{tagId}/subject-matter-experts | Retrieve subject matter experts for a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsPut**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsPut) | **PUT** /teams/{team}/tags/{tagId}/subject-matter-experts | Replace subject matter expert(s) for a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost) | **POST** /teams/{team}/tags/{tagId}/subject-matter-experts/user-groups | Add user group(s) as subject matter experts to a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete) | **DELETE** /teams/{team}/tags/{tagId}/subject-matter-experts/user-groups/{userGroupId} | Remove a user group as subject matter experts for a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsUsersPost**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsUsersPost) | **POST** /teams/{team}/tags/{tagId}/subject-matter-experts/users | Add user(s) as subject matter expert(s) to a tag
[**teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete**](TagsTeamsApi.md#teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete) | **DELETE** /teams/{team}/tags/{tagId}/subject-matter-experts/users/{userId} | Remove a user as subject matter expert for a tag
[**teamsTeamTagsTagIdTagWatchersGet**](TagsTeamsApi.md#teamsTeamTagsTagIdTagWatchersGet) | **GET** /teams/{team}/tags/{tagId}/tag-watchers | Retrieves users who are tag watchers of the specified tag


# **teamsTeamTagsGet**
> PaginatedTags teamsTeamTagsGet()

Queries all tags on the site.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsGetRequest = {
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "name",
  
  order: "asc",
  
  partialName: "partialName_example",
  
  hasSmes: true,
  
  hasSynonyms: true,
};

const data = await apiInstance.teamsTeamTagsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **TagsSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined
 **partialName** | [**string**] |  | (optional) defaults to undefined
 **hasSmes** | [**boolean**] |  | (optional) defaults to undefined
 **hasSynonyms** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**PaginatedTags**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag(s) found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdGet**
> TagResponseModel teamsTeamTagsTagIdGet()

Retrieves a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdGetRequest = {
    // Tag ID
  tagId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamTagsTagIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**TagResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag found |  -  |
**404** | Tag not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsGet**
> SubjectMatterExpertResponseModel teamsTeamTagsTagIdSubjectMatterExpertsGet()

Retrieves the subject matter experts for a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsGetRequest = {
    // Tag ID
  tagId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**SubjectMatterExpertResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subject matter expert(s) found |  -  |
**404** | Subject matter expert(s) not found |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsPut**
> SubjectMatterExpertResponseModel teamsTeamTagsTagIdSubjectMatterExpertsPut()

Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsPutRequest = {
    // Tag ID
  tagId: 123,
  
  team: "team_example",
    //  (optional)
  subjectMatterExpertRequestModel: {
    userIds: [2,20,46],
    userGroupIds: [12,13,111],
  },
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectMatterExpertRequestModel** | **SubjectMatterExpertRequestModel**|  |
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**SubjectMatterExpertResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subject matter experts replaced |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost**
> SubjectMatterExpertResponseModel teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost()

Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPostRequest = {
    // Tag ID
  tagId: 123,
  
  team: "team_example",
    // User group IDs (optional)
  requestBody: [2,5],
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User group IDs |
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**SubjectMatterExpertResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group(s) added as subject matter experts |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete**
> void teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete()

Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest = {
    // Tag ID
  tagId: 123,
    // User group ID
  userGroupId: 789,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User group removed as subject matter experts |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsUsersPost**
> SubjectMatterExpertResponseModel teamsTeamTagsTagIdSubjectMatterExpertsUsersPost()

Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersPostRequest = {
    // Tag ID
  tagId: 123,
  
  team: "team_example",
    // User ID(s) (optional)
  requestBody: [123,456],
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User ID(s) |
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**SubjectMatterExpertResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User(s) added as subject matter expert(s) |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete**
> void teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete()

Removes a user as subject matter expert for a tag, identified by tag ID and user ID.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest = {
    // Tag ID
  tagId: 123,
    // User ID
  userId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamTagsTagIdSubjectMatterExpertsUsersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **userId** | [**number**] | User ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | User removed as subject matter expert |  -  |
**422** | Subject matter experts feature not enabled |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamTagsTagIdTagWatchersGet**
> TagWatchersResponseModel teamsTeamTagsTagIdTagWatchersGet()

Retrieves the tag watchers for a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsTeamsApi } from '';
import type { TagsTeamsApiTeamsTeamTagsTagIdTagWatchersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsTeamsApi(configuration);

const request: TagsTeamsApiTeamsTeamTagsTagIdTagWatchersGetRequest = {
    // Tag Id
  tagId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamTagsTagIdTagWatchersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag Id | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**TagWatchersResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag watchers found |  -  |
**404** | Tag not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


