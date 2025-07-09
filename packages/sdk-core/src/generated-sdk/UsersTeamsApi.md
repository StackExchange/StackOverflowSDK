# .UsersTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamUsersByEmailEmailGet**](UsersTeamsApi.md#teamsTeamUsersByEmailEmailGet) | **GET** /teams/{team}/users/by-email/{email} | Retrieve a user by email address
[**teamsTeamUsersByExternalIdExternalIdGet**](UsersTeamsApi.md#teamsTeamUsersByExternalIdExternalIdGet) | **GET** /teams/{team}/users/by-external-id/{externalId} | Retrieve a user by external ID
[**teamsTeamUsersGet**](UsersTeamsApi.md#teamsTeamUsersGet) | **GET** /teams/{team}/users | Retrieve all users
[**teamsTeamUsersMeGet**](UsersTeamsApi.md#teamsTeamUsersMeGet) | **GET** /teams/{team}/users/me | Retrieve logged-in user details
[**teamsTeamUsersUserIdGet**](UsersTeamsApi.md#teamsTeamUsersUserIdGet) | **GET** /teams/{team}/users/{userId} | Retrieve a user
[**teamsTeamUsersUserIdWatchedTagsGet**](UsersTeamsApi.md#teamsTeamUsersUserIdWatchedTagsGet) | **GET** /teams/{team}/users/{userId}/watched-tags | Retrieves a list of tags watched by user


# **teamsTeamUsersByEmailEmailGet**
> UserDetailsResponseModel teamsTeamUsersByEmailEmailGet()


### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersByEmailEmailGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersByEmailEmailGetRequest = {
    // 
  email: "email_example",
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUsersByEmailEmailGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamUsersByExternalIdExternalIdGet**
> Array<UserResponseModel> teamsTeamUsersByExternalIdExternalIdGet()


### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersByExternalIdExternalIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersByExternalIdExternalIdGetRequest = {
    // 
  externalId: "externalId_example",
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUsersByExternalIdExternalIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalId** | [**string**] |  | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamUsersGet**
> PaginatedUsers teamsTeamUsersGet()

Retrieves all users on the site or team.

### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersGetRequest = {
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "reputation",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamUsersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
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

# **teamsTeamUsersMeGet**
> UserDetailsResponseModel teamsTeamUsersMeGet()

Retrieves details for the logged-in user.

### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersMeGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersMeGetRequest = {
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUsersMeGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamUsersUserIdGet**
> UserDetailsResponseModel teamsTeamUsersUserIdGet()

Retrieves details for a user, identified by user ID.

### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersUserIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersUserIdGetRequest = {
    // User ID
  userId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUsersUserIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | User ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamUsersUserIdWatchedTagsGet**
> TagSummaryResponseModel teamsTeamUsersUserIdWatchedTagsGet()

Retrieves watched tags, identified by tag name.

### Example


```typescript
import { createConfiguration, UsersTeamsApi } from '';
import type { UsersTeamsApiTeamsTeamUsersUserIdWatchedTagsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UsersTeamsApi(configuration);

const request: UsersTeamsApiTeamsTeamUsersUserIdWatchedTagsGetRequest = {
    // 123
  userId: 1,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamUsersUserIdWatchedTagsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**number**] | 123 | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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


