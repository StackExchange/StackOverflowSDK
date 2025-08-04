# .ImagesMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imagesImageIdGet**](ImagesMainApi.md#imagesImageIdGet) | **GET** /images/{imageId} | Gets an image by Id.
[**imagesUploadPost**](ImagesMainApi.md#imagesUploadPost) | **POST** /images/upload | Uploads an image file.


# **imagesImageIdGet**
> void imagesImageIdGet()

This endpoint retrieves an image file given its id.

### Example


```typescript
import { createConfiguration, ImagesMainApi } from '';
import type { ImagesMainApiImagesImageIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImagesMainApi(configuration);

const request: ImagesMainApiImagesImageIdGetRequest = {
  
  imageId: "imageId_example",
};

const data = await apiInstance.imagesImageIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageId** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image retrieved successfully. |  -  |
**404** | Image not found. |  -  |
**500** | Internal server error. |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesUploadPost**
> ImageResponseModel imagesUploadPost()

This endpoint uploads an image file and returns the URI of the uploaded image if successful.  Supported file types: jpeg, png, gif, bmp, webp (Max size 2 MiB)

### Example


```typescript
import { createConfiguration, ImagesMainApi } from '';
import type { ImagesMainApiImagesUploadPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ImagesMainApi(configuration);

const request: ImagesMainApiImagesUploadPostRequest = {
  
  file: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

const data = await apiInstance.imagesUploadPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**ImageResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data, image/jpeg, img/png, img/gif, img/bmp, img/webp
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image uploaded successfully. |  -  |
**400** | Bad request with details in the problem details format. |  -  |
**415** | Unsupported media type. |  -  |
**500** | Internal server error. |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


