# .AnswersTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete) | **DELETE** /teams/{team}/questions/{questionId}/answers/{answerId}/accept | Unaccept an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost) | **POST** /teams/{team}/questions/{questionId}/answers/{answerId}/accept | Accept an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete) | **DELETE** /teams/{team}/questions/{questionId}/answers/{answerId} | Delete an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete) | **DELETE** /teams/{team}/questions/{questionId}/answers/{answerId}/downvote | Delete answer downvote
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost) | **POST** /teams/{team}/questions/{questionId}/answers/{answerId}/downvote | Downvote an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet) | **GET** /teams/{team}/questions/{questionId}/answers/{answerId}/flags/options | Retrive a list of flag options
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost) | **POST** /teams/{team}/questions/{questionId}/answers/{answerId}/flags | Raises a flag for an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdGet**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdGet) | **GET** /teams/{team}/questions/{questionId}/answers/{answerId} | Retrieve an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdPut**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdPut) | **PUT** /teams/{team}/questions/{questionId}/answers/{answerId} | Update an answer
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete) | **DELETE** /teams/{team}/questions/{questionId}/answers/{answerId}/upvote | Delete answer upvote
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost) | **POST** /teams/{team}/questions/{questionId}/answers/{answerId}/upvote | Upvote an answer
[**teamsTeamQuestionsQuestionIdAnswersGet**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersGet) | **GET** /teams/{team}/questions/{questionId}/answers | Retrieve all answers to a question
[**teamsTeamQuestionsQuestionIdAnswersPost**](AnswersTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersPost) | **POST** /teams/{team}/questions/{questionId}/answers | Create an answer


# **teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete()

Unaccepts an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully unaccepted answer |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost()

Accepts an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdAcceptPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer accepted |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete**
> void teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete()

Deletes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
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
**204** | Answer deleted |  -  |
**404** | Answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete()

Deletes the downvote of an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Downvote deleted |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost()

Downvotes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdDownvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer downvoted |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet**
> Array<FlagOptionResponseModel> teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet()

Retrieve a list of flag options for an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**Array<FlagOptionResponseModel>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flags |  -  |
**404** | Answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost**
> void teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost()

Raises a flag for an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
    //  (optional)
  flagRequestModel: {
    optionId: 1234,
    comment: "I'm flagging this post because it is spam",
    relatedQuestionId: 1234,
    targetSite: "stackoverflow.com",
  },
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdFlagsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagRequestModel** | **FlagRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Flag added |  -  |
**400** | Unable to add flag |  -  |
**404** | Answer not found |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdGet**
> AnswerResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdGet()

Retrieves an answer to a question, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer found |  -  |
**404** | Answer or question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdPut**
> AnswerResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdPut()

Updates an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdPutRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
    //  (optional)
  answerRequestModel: {
    body: "This is a common answer to a common question.",
  },
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answerRequestModel** | **AnswerRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete()

Deletes the upvote of an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upvote deleted |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost**
> AnswerSummaryResponseModel teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost()

Upvotes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerSummaryResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer upvoted |  -  |
**404** | Question or answer not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersGet**
> PaginatedAnswers teamsTeamQuestionsQuestionIdAnswersGet()

Retrieves all answers to a question, identified by question ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "score",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **AnswersSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedAnswers**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Answer(s) found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdAnswersPost**
> AnswerResponseModel teamsTeamQuestionsQuestionIdAnswersPost()

Creates an answer to a question, identified by question ID.

### Example


```typescript
import { createConfiguration, AnswersTeamsApi } from '';
import type { AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersTeamsApi(configuration);

const request: AnswersTeamsApiTeamsTeamQuestionsQuestionIdAnswersPostRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
    //  (optional)
  answerRequestModel: {
    body: "This is a common answer to a common question.",
  },
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answerRequestModel** | **AnswerRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**AnswerResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Answer created |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


