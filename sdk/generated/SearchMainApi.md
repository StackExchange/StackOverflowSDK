# .SearchMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchGet**](SearchMainApi.md#searchGet) | **GET** /search | 


# **searchGet**
> PaginatedSearchResults searchGet()


### Example


```typescript
import { createConfiguration, SearchMainApi } from '';
import type { SearchMainApiSearchGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new SearchMainApi(configuration);

const request: SearchMainApiSearchGetRequest = {
  
  query: "query_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "relevance",
};

const data = await apiInstance.searchGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] |  | (optional) defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **SearchSortParameter** |  | (optional) defaults to undefined


### Return type

**PaginatedSearchResults**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Search results |  -  |
**429** | Too many requests |  -  |
**500** | Internal server error |  -  |
**503** | Service unavailable |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


