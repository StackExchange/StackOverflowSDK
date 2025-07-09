# .CommunitiesMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**communitiesCommunityIdGet**](CommunitiesMainApi.md#communitiesCommunityIdGet) | **GET** /communities/{communityId} | Retrieve a community
[**communitiesCommunityIdJoinBulkPost**](CommunitiesMainApi.md#communitiesCommunityIdJoinBulkPost) | **POST** /communities/{communityId}/join/bulk | Join multiple users to a community
[**communitiesCommunityIdJoinPost**](CommunitiesMainApi.md#communitiesCommunityIdJoinPost) | **POST** /communities/{communityId}/join | Join a community
[**communitiesCommunityIdLeaveBulkPost**](CommunitiesMainApi.md#communitiesCommunityIdLeaveBulkPost) | **POST** /communities/{communityId}/leave/bulk | Leave a community for multiple users
[**communitiesCommunityIdLeavePost**](CommunitiesMainApi.md#communitiesCommunityIdLeavePost) | **POST** /communities/{communityId}/leave | Leave a community
[**communitiesGet**](CommunitiesMainApi.md#communitiesGet) | **GET** /communities | Retrieves all communities on the site.


# **communitiesCommunityIdGet**
> CommunityResponseModel communitiesCommunityIdGet()

Retrieves a community, identified by community ID.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesCommunityIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesCommunityIdGetRequest = {
    // Community ID
  communityId: 123,
};

const data = await apiInstance.communitiesCommunityIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | [**number**] | Community ID | defaults to undefined


### Return type

**CommunityResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Community found |  -  |
**404** | Community not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **communitiesCommunityIdJoinBulkPost**
> CommunityResponseModel communitiesCommunityIdJoinBulkPost()

Adds the given users by ID to a community, identified by community ID.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesCommunityIdJoinBulkPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesCommunityIdJoinBulkPostRequest = {
    // Community ID
  communityId: 123,
    //  (optional)
  communityJoinModel: {
    memberUserIds: [2,20,46],
  },
};

const data = await apiInstance.communitiesCommunityIdJoinBulkPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityJoinModel** | **CommunityJoinModel**|  |
 **communityId** | [**number**] | Community ID | defaults to undefined


### Return type

**CommunityResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Users joined |  -  |
**404** | Community not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **communitiesCommunityIdJoinPost**
> CommunityResponseModel communitiesCommunityIdJoinPost()

Adds current user to a community, identified by community ID.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesCommunityIdJoinPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesCommunityIdJoinPostRequest = {
    // Community ID
  communityId: 123,
};

const data = await apiInstance.communitiesCommunityIdJoinPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | [**number**] | Community ID | defaults to undefined


### Return type

**CommunityResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User joined |  -  |
**404** | Community not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **communitiesCommunityIdLeaveBulkPost**
> CommunityResponseModel communitiesCommunityIdLeaveBulkPost()

Remove the given users by ID from a community, identified by community ID.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesCommunityIdLeaveBulkPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesCommunityIdLeaveBulkPostRequest = {
    // Community ID
  communityId: 123,
    //  (optional)
  communityLeaveModel: {
    memberUserIds: [2,20,46],
  },
};

const data = await apiInstance.communitiesCommunityIdLeaveBulkPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityLeaveModel** | **CommunityLeaveModel**|  |
 **communityId** | [**number**] | Community ID | defaults to undefined


### Return type

**CommunityResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User left |  -  |
**404** | Community not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **communitiesCommunityIdLeavePost**
> CommunityResponseModel communitiesCommunityIdLeavePost()

Remove current user from a community, identified by community ID.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesCommunityIdLeavePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesCommunityIdLeavePostRequest = {
    // Community ID
  communityId: 123,
};

const data = await apiInstance.communitiesCommunityIdLeavePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | [**number**] | Community ID | defaults to undefined


### Return type

**CommunityResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User left |  -  |
**404** | Community not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **communitiesGet**
> PaginatedCommunities communitiesGet()

Queries all communities on the site.

### Example


```typescript
import { createConfiguration, CommunitiesMainApi } from '';
import type { CommunitiesMainApiCommunitiesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommunitiesMainApi(configuration);

const request: CommunitiesMainApiCommunitiesGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "name",
  
  order: "asc",
};

const data = await apiInstance.communitiesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **CommunitySortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedCommunities**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Communities(s) found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


