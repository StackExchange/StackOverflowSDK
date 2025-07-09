# .CollectionsTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamCollectionsCollectionIdDelete**](CollectionsTeamsApi.md#teamsTeamCollectionsCollectionIdDelete) | **DELETE** /teams/{team}/collections/{collectionId} | Delete a collection
[**teamsTeamCollectionsCollectionIdGet**](CollectionsTeamsApi.md#teamsTeamCollectionsCollectionIdGet) | **GET** /teams/{team}/collections/{collectionId} | Retrieve a collection
[**teamsTeamCollectionsCollectionIdPut**](CollectionsTeamsApi.md#teamsTeamCollectionsCollectionIdPut) | **PUT** /teams/{team}/collections/{collectionId} | Update a collection
[**teamsTeamCollectionsGet**](CollectionsTeamsApi.md#teamsTeamCollectionsGet) | **GET** /teams/{team}/collections | Retrieve all collections
[**teamsTeamCollectionsPost**](CollectionsTeamsApi.md#teamsTeamCollectionsPost) | **POST** /teams/{team}/collections | Create a collection


# **teamsTeamCollectionsCollectionIdDelete**
> void teamsTeamCollectionsCollectionIdDelete()

Deletes a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsTeamsApi } from '';
import type { CollectionsTeamsApiTeamsTeamCollectionsCollectionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsTeamsApi(configuration);

const request: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdDeleteRequest = {
    // Collection ID
  collectionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamCollectionsCollectionIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] | Collection ID | defaults to undefined
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
**204** | Collection deleted |  -  |
**403** | No permissions |  -  |
**404** | Collection not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamCollectionsCollectionIdGet**
> CollectionsResponseModel teamsTeamCollectionsCollectionIdGet()

Retrieves a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsTeamsApi } from '';
import type { CollectionsTeamsApiTeamsTeamCollectionsCollectionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsTeamsApi(configuration);

const request: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdGetRequest = {
    // Collection ID
  collectionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamCollectionsCollectionIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] | Collection ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**CollectionsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection found |  -  |
**404** | Collection not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamCollectionsCollectionIdPut**
> CollectionsResponseModel teamsTeamCollectionsCollectionIdPut()

Updates a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsTeamsApi } from '';
import type { CollectionsTeamsApiTeamsTeamCollectionsCollectionIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsTeamsApi(configuration);

const request: CollectionsTeamsApiTeamsTeamCollectionsCollectionIdPutRequest = {
    // Collection ID
  collectionId: 1,
  
  team: "team_example",
    //  (optional)
  editCollectionRequestModel: {
    ownerId: 476,
    title: "Gamification and Reputation",
    description: "Questions and articles about gamification and reputation.",
    editorUserIds: [2,20,46],
    editorUserGroupIds: [89,12,43],
    contentIds: [47,2,81],
  },
};

const data = await apiInstance.teamsTeamCollectionsCollectionIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editCollectionRequestModel** | **EditCollectionRequestModel**|  |
 **collectionId** | [**number**] | Collection ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**CollectionsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamCollectionsGet**
> PaginatedCollections teamsTeamCollectionsGet()

Retrieves all collections for the full site or specified team.

### Example


```typescript
import { createConfiguration, CollectionsTeamsApi } from '';
import type { CollectionsTeamsApiTeamsTeamCollectionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsTeamsApi(configuration);

const request: CollectionsTeamsApiTeamsTeamCollectionsGetRequest = {
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "creation",
  
  order: "asc",
  
  authorIds: [
    1,
  ],
  
  partialTitle: "partialTitle_example",
  
  permissions: "all",
  
  _from: new Date('1970-01-01T00:00:00.00Z'),
  
  to: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.teamsTeamCollectionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **CollectionsSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined
 **authorIds** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **partialTitle** | [**string**] |  | (optional) defaults to undefined
 **permissions** | **CollectionsPermissionsFilter** |  | (optional) defaults to undefined
 **_from** | [**Date**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined


### Return type

**PaginatedCollections**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collections found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamCollectionsPost**
> CollectionsResponseModel teamsTeamCollectionsPost()

Creates a collection.

### Example


```typescript
import { createConfiguration, CollectionsTeamsApi } from '';
import type { CollectionsTeamsApiTeamsTeamCollectionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsTeamsApi(configuration);

const request: CollectionsTeamsApiTeamsTeamCollectionsPostRequest = {
  
  team: "team_example",
    //  (optional)
  collectionRequestModel: {
    title: "Gamification and Reputation",
    description: "Questions and articles about gamification and reputation.",
    editorUserIds: [2,20,46],
    editorUserGroupIds: [89,12,43],
    contentIds: [47,2,81],
  },
};

const data = await apiInstance.teamsTeamCollectionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionRequestModel** | **CollectionRequestModel**|  |
 **team** | [**string**] |  | defaults to undefined


### Return type

**CollectionsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Collection created |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


