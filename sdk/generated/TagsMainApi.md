# .TagsMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsGet**](TagsMainApi.md#tagsGet) | **GET** /tags | Retrieve tags
[**tagsTagIdGet**](TagsMainApi.md#tagsTagIdGet) | **GET** /tags/{tagId} | Retrieve a tag
[**tagsTagIdSubjectMatterExpertsGet**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsGet) | **GET** /tags/{tagId}/subject-matter-experts | Retrieve subject matter experts for a tag
[**tagsTagIdSubjectMatterExpertsPut**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsPut) | **PUT** /tags/{tagId}/subject-matter-experts | Replace subject matter expert(s) for a tag
[**tagsTagIdSubjectMatterExpertsUserGroupsPost**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsUserGroupsPost) | **POST** /tags/{tagId}/subject-matter-experts/user-groups | Add user group(s) as subject matter experts to a tag
[**tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete) | **DELETE** /tags/{tagId}/subject-matter-experts/user-groups/{userGroupId} | Remove a user group as subject matter experts for a tag
[**tagsTagIdSubjectMatterExpertsUsersPost**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsUsersPost) | **POST** /tags/{tagId}/subject-matter-experts/users | Add user(s) as subject matter expert(s) to a tag
[**tagsTagIdSubjectMatterExpertsUsersUserIdDelete**](TagsMainApi.md#tagsTagIdSubjectMatterExpertsUsersUserIdDelete) | **DELETE** /tags/{tagId}/subject-matter-experts/users/{userId} | Remove a user as subject matter expert for a tag
[**tagsTagIdTagWatchersGet**](TagsMainApi.md#tagsTagIdTagWatchersGet) | **GET** /tags/{tagId}/tag-watchers | Retrieves users who are tag watchers of the specified tag


# **tagsGet**
> PaginatedTags tagsGet()

Queries all tags on the site.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "name",
  
  order: "asc",
  
  partialName: "partialName_example",
  
  hasSmes: true,
  
  hasSynonyms: true,
};

const data = await apiInstance.tagsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **tagsTagIdGet**
> TagResponseModel tagsTagIdGet()

Retrieves a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdGetRequest = {
    // Tag ID
  tagId: 123,
};

const data = await apiInstance.tagsTagIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsGet**
> SubjectMatterExpertResponseModel tagsTagIdSubjectMatterExpertsGet()

Retrieves the subject matter experts for a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsGetRequest = {
    // Tag ID
  tagId: 123,
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsPut**
> SubjectMatterExpertResponseModel tagsTagIdSubjectMatterExpertsPut()

Replaces the subject matter expert(s) for a tag, identified by tag ID. Send new user ID(s) and/or user group ID(s).

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsPutRequest = {
    // Tag ID
  tagId: 123,
    //  (optional)
  subjectMatterExpertRequestModel: {
    userIds: [2,20,46],
    userGroupIds: [12,13,111],
  },
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subjectMatterExpertRequestModel** | **SubjectMatterExpertRequestModel**|  |
 **tagId** | [**number**] | Tag ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsUserGroupsPost**
> SubjectMatterExpertResponseModel tagsTagIdSubjectMatterExpertsUserGroupsPost()

Adds one or more user groups as subject matter experts to a tag, identified by tag ID and user group ID(s).

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsPostRequest = {
    // Tag ID
  tagId: 123,
    // User group IDs (optional)
  requestBody: [2,5],
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsUserGroupsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User group IDs |
 **tagId** | [**number**] | Tag ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete**
> void tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete()

Removes a user group as subject matter experts for a tag, identified by tag ID and user group ID.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDeleteRequest = {
    // Tag ID
  tagId: 123,
    // User group ID
  userGroupId: 789,
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsUserGroupsUserGroupIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **userGroupId** | [**number**] | User group ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsUsersPost**
> SubjectMatterExpertResponseModel tagsTagIdSubjectMatterExpertsUsersPost()

Adds one or more users as subject matter experts to a tag, identified by tag ID and user ID(s).

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsUsersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsUsersPostRequest = {
    // Tag ID
  tagId: 123,
    // User ID(s) (optional)
  requestBody: [123,456],
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsUsersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<number>**| User ID(s) |
 **tagId** | [**number**] | Tag ID | defaults to undefined


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

# **tagsTagIdSubjectMatterExpertsUsersUserIdDelete**
> void tagsTagIdSubjectMatterExpertsUsersUserIdDelete()

Removes a user as subject matter expert for a tag, identified by tag ID and user ID.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdSubjectMatterExpertsUsersUserIdDeleteRequest = {
    // Tag ID
  tagId: 123,
    // User ID
  userId: 123,
};

const data = await apiInstance.tagsTagIdSubjectMatterExpertsUsersUserIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag ID | defaults to undefined
 **userId** | [**number**] | User ID | defaults to undefined


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

# **tagsTagIdTagWatchersGet**
> TagWatchersResponseModel tagsTagIdTagWatchersGet()

Retrieves the tag watchers for a tag, identified by tag ID.

### Example


```typescript
import { createConfiguration, TagsMainApi } from '';
import type { TagsMainApiTagsTagIdTagWatchersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TagsMainApi(configuration);

const request: TagsMainApiTagsTagIdTagWatchersGetRequest = {
    // Tag Id
  tagId: 123,
};

const data = await apiInstance.tagsTagIdTagWatchersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**number**] | Tag Id | defaults to undefined


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


