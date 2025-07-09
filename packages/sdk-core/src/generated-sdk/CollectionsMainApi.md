# .CollectionsMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsCollectionIdDelete**](CollectionsMainApi.md#collectionsCollectionIdDelete) | **DELETE** /collections/{collectionId} | Delete a collection
[**collectionsCollectionIdGet**](CollectionsMainApi.md#collectionsCollectionIdGet) | **GET** /collections/{collectionId} | Retrieve a collection
[**collectionsCollectionIdPut**](CollectionsMainApi.md#collectionsCollectionIdPut) | **PUT** /collections/{collectionId} | Update a collection
[**collectionsGet**](CollectionsMainApi.md#collectionsGet) | **GET** /collections | Retrieve all collections
[**collectionsPost**](CollectionsMainApi.md#collectionsPost) | **POST** /collections | Create a collection


# **collectionsCollectionIdDelete**
> void collectionsCollectionIdDelete()

Deletes a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsMainApi } from '';
import type { CollectionsMainApiCollectionsCollectionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsMainApi(configuration);

const request: CollectionsMainApiCollectionsCollectionIdDeleteRequest = {
    // Collection ID
  collectionId: 123,
};

const data = await apiInstance.collectionsCollectionIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] | Collection ID | defaults to undefined


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

# **collectionsCollectionIdGet**
> CollectionsResponseModel collectionsCollectionIdGet()

Retrieves a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsMainApi } from '';
import type { CollectionsMainApiCollectionsCollectionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsMainApi(configuration);

const request: CollectionsMainApiCollectionsCollectionIdGetRequest = {
    // Collection ID
  collectionId: 123,
};

const data = await apiInstance.collectionsCollectionIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | [**number**] | Collection ID | defaults to undefined


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

# **collectionsCollectionIdPut**
> CollectionsResponseModel collectionsCollectionIdPut()

Updates a collection, identified by collection ID.

### Example


```typescript
import { createConfiguration, CollectionsMainApi } from '';
import type { CollectionsMainApiCollectionsCollectionIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsMainApi(configuration);

const request: CollectionsMainApiCollectionsCollectionIdPutRequest = {
    // Collection ID
  collectionId: 1,
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

const data = await apiInstance.collectionsCollectionIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editCollectionRequestModel** | **EditCollectionRequestModel**|  |
 **collectionId** | [**number**] | Collection ID | defaults to undefined


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

# **collectionsGet**
> PaginatedCollections collectionsGet()

Retrieves all collections for the full site or specified team.

### Example


```typescript
import { createConfiguration, CollectionsMainApi } from '';
import type { CollectionsMainApiCollectionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsMainApi(configuration);

const request: CollectionsMainApiCollectionsGetRequest = {
  
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

const data = await apiInstance.collectionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **collectionsPost**
> CollectionsResponseModel collectionsPost()

Creates a collection.

### Example


```typescript
import { createConfiguration, CollectionsMainApi } from '';
import type { CollectionsMainApiCollectionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CollectionsMainApi(configuration);

const request: CollectionsMainApiCollectionsPostRequest = {
    //  (optional)
  collectionRequestModel: {
    title: "Gamification and Reputation",
    description: "Questions and articles about gamification and reputation.",
    editorUserIds: [2,20,46],
    editorUserGroupIds: [89,12,43],
    contentIds: [47,2,81],
  },
};

const data = await apiInstance.collectionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionRequestModel** | **CollectionRequestModel**|  |


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


