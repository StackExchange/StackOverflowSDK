# .UserGroupsMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userGroupsGet**](UserGroupsMainApi.md#userGroupsGet) | **GET** /user-groups | Retrieve all user groups
[**userGroupsPost**](UserGroupsMainApi.md#userGroupsPost) | **POST** /user-groups | Create a user group
[**userGroupsUserGroupIdGet**](UserGroupsMainApi.md#userGroupsUserGroupIdGet) | **GET** /user-groups/{userGroupId} | Retrieve a user group
[**userGroupsUserGroupIdMembersPost**](UserGroupsMainApi.md#userGroupsUserGroupIdMembersPost) | **POST** /user-groups/{userGroupId}/members | Add member(s) to a user group
[**userGroupsUserGroupIdMembersUserIdDelete**](UserGroupsMainApi.md#userGroupsUserGroupIdMembersUserIdDelete) | **DELETE** /user-groups/{userGroupId}/members/{userId} | Delete a member from a user group
[**userGroupsUserGroupIdPut**](UserGroupsMainApi.md#userGroupsUserGroupIdPut) | **PUT** /user-groups/{userGroupId} | Update a user group


# **userGroupsGet**
> PaginatedUserGroups userGroupsGet()

Retrieves all user groups on the site or team.

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "name",
  
  order: "asc",
};

const data = await apiInstance.userGroupsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **userGroupsPost**
> UserGroupResponseModel userGroupsPost()

Creates a user group.

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsPostRequest = {
    //  (optional)
  userGroupRequestModel: {
    name: "Knowledgeable Group",
    description: "A group of our most knowledgeable users",
    userIds: [2,20,46],
  },
};

const data = await apiInstance.userGroupsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequestModel** | **UserGroupRequestModel**|  |


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

# **userGroupsUserGroupIdGet**
> UserGroupResponseModel userGroupsUserGroupIdGet()

Retrieves a user group, identified by user group ID.

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsUserGroupIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsUserGroupIdGetRequest = {
    // User group ID
  userGroupId: 789,
};

const data = await apiInstance.userGroupsUserGroupIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**number**] | User group ID | defaults to undefined


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

# **userGroupsUserGroupIdMembersPost**
> UserGroupResponseModel userGroupsUserGroupIdMembersPost()

Adds one or more members to a user group, identified by user group ID and user ID(s).

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsUserGroupIdMembersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsUserGroupIdMembersPostRequest = {
    // User group ID
  userGroupId: 789,
    // User ID(s) (optional)
  requestBody: [123,456],
};

const data = await apiInstance.userGroupsUserGroupIdMembersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User ID(s) |
 **userGroupId** | [**number**] | User group ID | defaults to undefined


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

# **userGroupsUserGroupIdMembersUserIdDelete**
> UserGroupResponseModel userGroupsUserGroupIdMembersUserIdDelete()

Deletes a member from a user group, identified by user group ID and user ID.

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsUserGroupIdMembersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsUserGroupIdMembersUserIdDeleteRequest = {
    // User group ID
  userGroupId: 789,
    // User ID
  userId: 123,
};

const data = await apiInstance.userGroupsUserGroupIdMembersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupId** | [**number**] | User group ID | defaults to undefined
 **userId** | [**number**] | User ID | defaults to undefined


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

# **userGroupsUserGroupIdPut**
> UserGroupResponseModel userGroupsUserGroupIdPut()

Updates a user group, identified by user group ID.

### Example


```typescript
import { createConfiguration, UserGroupsMainApi } from '';
import type { UserGroupsMainApiUserGroupsUserGroupIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserGroupsMainApi(configuration);

const request: UserGroupsMainApiUserGroupsUserGroupIdPutRequest = {
    // User group ID
  userGroupId: 789,
    //  (optional)
  userGroupRequestModel: {
    name: "Knowledgeable Group",
    description: "A group of our most knowledgeable users",
    userIds: [2,20,46],
  },
};

const data = await apiInstance.userGroupsUserGroupIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGroupRequestModel** | **UserGroupRequestModel**|  |
 **userGroupId** | [**number**] | User group ID | defaults to undefined


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


