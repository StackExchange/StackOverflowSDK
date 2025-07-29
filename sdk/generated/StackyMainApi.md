# .StackyMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stackyGet**](StackyMainApi.md#stackyGet) | **GET** /stacky | Retrieve Stacky ASCII art


# **stackyGet**
> string stackyGet()

Retrieves Stacky ASCII art (useful for testing).

### Example


```typescript
import { createConfiguration, StackyMainApi } from '';

const configuration = createConfiguration();
const apiInstance = new StackyMainApi(configuration);

const request = {};

const data = await apiInstance.stackyGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**string**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


