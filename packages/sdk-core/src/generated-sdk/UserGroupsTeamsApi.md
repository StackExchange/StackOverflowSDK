# .UserGroupsTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamUserGroupsGet**](UserGroupsTeamsApi.md#teamsTeamUserGroupsGet) | **GET** /teams/{team}/user-groups | Retrieve all user groups
[**teamsTeamUserGroupsPost**](UserGroupsTeamsApi.md#teamsTeamUserGroupsPost) | **POST** /teams/{team}/user-groups | Create a user group
[**teamsTeamUserGroupsUserGroupIdGet**](UserGroupsTeamsApi.md#teamsTeamUserGroupsUserGroupIdGet) | **GET** /teams/{team}/user-groups/{userGroupId} | Retrieve a user group
[**teamsTeamUserGroupsUserGroupIdMembersPost**](UserGroupsTeamsApi.md#teamsTeamUserGroupsUserGroupIdMembersPost) | **POST** /teams/{team}/user-groups/{userGroupId}/members | Add member(s) to a user group
[**teamsTeamUserGroupsUserGroupIdMembersUserIdDelete**](UserGroupsTeamsApi.md#teamsTeamUserGroupsUserGroupIdMembersUserIdDelete) | **DELETE** /teams/{team}/user-groups/{userGroupId}/members/{userId} | Delete a member from a user group
[**teamsTeamUserGroupsUserGroupIdPut**](UserGroupsTeamsApi.md#teamsTeamUserGroupsUserGroupIdPut) | **PUT** /teams/{team}/user-groups/{userGroupId} | Update a user group


# **teamsTeamUserGroupsGet**
> PaginatedUserGroups teamsTeamUserGroupsGet()

Retrieves all user groups on the site or team.

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsGetRequest = {
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "name",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamUserGroupsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **UserGroupsSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedUserGroups**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User groups found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamUserGroupsPost**
> UserGroupResponseModel teamsTeamUserGroupsPost()

Creates a user group.

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsPostRequest = {
  
  team: "team_example",
    //  (optional)
  userGroupRequestModel: {
    name: "Knowledgeable Group",
    description: "A group of our most knowledgeable users",
    userIds: [2,20,46],
  },
};

const data = await apiInstance.teamsTeamUserGroupsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequestModel** | **UserGroupRequestModel**|  |
 **team** | [**string**] |  | defaults to undefined


### Return type

**UserGroupResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User group created |  -  |
**400** | Invalid request |  -  |
**403** | Inadequate permissions |  -  |
**500** | Server Error |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamUserGroupsUserGroupIdGet**
> UserGroupResponseModel teamsTeamUserGroupsUserGroupIdGet()

Retrieves a user group, identified by user group ID.

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdGetRequest = {
    // User group ID
  userGroupId: 789,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUserGroupsUserGroupIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**UserGroupResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group found |  -  |
**404** | User group not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamUserGroupsUserGroupIdMembersPost**
> UserGroupResponseModel teamsTeamUserGroupsUserGroupIdMembersPost()

Adds one or more members to a user group, identified by user group ID and user ID(s).

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersPostRequest = {
    // User group ID
  userGroupId: 789,
  
  team: "team_example",
    // User ID(s) (optional)
  requestBody: [123,456],
};

const data = await apiInstance.teamsTeamUserGroupsUserGroupIdMembersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User ID(s) |
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**UserGroupResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Member(s) added |  -  |
**404** | User group not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamUserGroupsUserGroupIdMembersUserIdDelete**
> UserGroupResponseModel teamsTeamUserGroupsUserGroupIdMembersUserIdDelete()

Deletes a member from a user group, identified by user group ID and user ID.

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdMembersUserIdDeleteRequest = {
    // User group ID
  userGroupId: 789,
    // User ID
  userId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUserGroupsUserGroupIdMembersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **userId** | [**number**] | User ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**UserGroupResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Member deleted |  -  |
**404** | User group or user not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamUserGroupsUserGroupIdPut**
> UserGroupResponseModel teamsTeamUserGroupsUserGroupIdPut()

Updates a user group, identified by user group ID.

### Example


```typescript
import { createConfiguration, UserGroupsTeamsApi } from '';
import type { UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsTeamsApi(configuration);

const request: UserGroupsTeamsApiTeamsTeamUserGroupsUserGroupIdPutRequest = {
    // User group ID
  userGroupId: 789,
  
  team: "team_example",
    //  (optional)
  userGroupRequestModel: {
    name: "Knowledgeable Group",
    description: "A group of our most knowledgeable users",
    userIds: [2,20,46],
  },
};

const data = await apiInstance.teamsTeamUserGroupsUserGroupIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequestModel** | **UserGroupRequestModel**|  |
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**UserGroupResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


