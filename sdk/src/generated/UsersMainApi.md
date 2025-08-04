# .UsersMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersByEmailEmailGet**](UsersMainApi.md#usersByEmailEmailGet) | **GET** /users/by-email/{email} | Retrieve a user by email address
[**usersByExternalIdExternalIdGet**](UsersMainApi.md#usersByExternalIdExternalIdGet) | **GET** /users/by-external-id/{externalId} | Retrieve a user by external ID
[**usersGet**](UsersMainApi.md#usersGet) | **GET** /users | Retrieve all users
[**usersManageGet**](UsersMainApi.md#usersManageGet) | **GET** /users/manage | Manage all users
[**usersMeGet**](UsersMainApi.md#usersMeGet) | **GET** /users/me | Retrieve logged-in user details
[**usersUserIdGet**](UsersMainApi.md#usersUserIdGet) | **GET** /users/{userId} | Retrieve a user
[**usersUserIdWatchedTagsGet**](UsersMainApi.md#usersUserIdWatchedTagsGet) | **GET** /users/{userId}/watched-tags | Retrieves a list of tags watched by user


# **usersByEmailEmailGet**
> UserDetailsResponseModel usersByEmailEmailGet()


### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersByEmailEmailGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersByEmailEmailGetRequest = {
    // 
  email: "email_example",
};

const data = await apiInstance.usersByEmailEmailGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined


### Return type

**UserDetailsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User details found |  -  |
**404** | User not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersByExternalIdExternalIdGet**
> Array<UserResponseModel> usersByExternalIdExternalIdGet()


### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersByExternalIdExternalIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersByExternalIdExternalIdGetRequest = {
    // 
  externalId: "externalId_example",
};

const data = await apiInstance.usersByExternalIdExternalIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | [**string**] |  | defaults to undefined


### Return type

**Array<UserResponseModel>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User details found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersGet**
> PaginatedUsers usersGet()

Retrieves all users on the site or team.

### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "reputation",
  
  order: "asc",
};

const data = await apiInstance.usersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **UsersSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedUsers**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Users found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersManageGet**
> PaginatedManageUsers usersManageGet()

Retrieves all users on the site or team, for user management.

### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersManageGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersManageGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "id",
  
  order: "asc",
  
  isDeactivated: true,
  
  lastAccessDateFrom: new Date('1970-01-01T00:00:00.00Z'),
  
  lastAccessDateTo: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.usersManageGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **ManageUsersSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined
 **isDeactivated** | [**boolean**] |  | (optional) defaults to undefined
 **lastAccessDateFrom** | [**Date**] |  | (optional) defaults to undefined
 **lastAccessDateTo** | [**Date**] |  | (optional) defaults to undefined


### Return type

**PaginatedManageUsers**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Users found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersMeGet**
> UserDetailsResponseModel usersMeGet()

Retrieves details for the logged-in user.

### Example


```typescript
import { createConfiguration, UsersMainApi } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request = {};

const data = await apiInstance.usersMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserDetailsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User details found |  -  |
**404** | User details not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdGet**
> UserDetailsResponseModel usersUserIdGet()

Retrieves details for a user, identified by user ID.

### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersUserIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersUserIdGetRequest = {
    // User ID
  userId: 123,
};

const data = await apiInstance.usersUserIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | User ID | defaults to undefined


### Return type

**UserDetailsResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User details found |  -  |
**404** | User not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersUserIdWatchedTagsGet**
> TagSummaryResponseModel usersUserIdWatchedTagsGet()

Retrieves watched tags, identified by tag name.

### Example


```typescript
import { createConfiguration, UsersMainApi } from '';
import type { UsersMainApiUsersUserIdWatchedTagsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersMainApi(configuration);

const request: UsersMainApiUsersUserIdWatchedTagsGetRequest = {
    // 123
  userId: 1,
};

const data = await apiInstance.usersUserIdWatchedTagsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | 123 | defaults to undefined


### Return type

**TagSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User found |  -  |
**404** | User not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


