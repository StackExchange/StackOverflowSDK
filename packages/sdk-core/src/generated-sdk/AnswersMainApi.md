# .AnswersMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**questionsQuestionIdAnswersAnswerIdAcceptDelete**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdAcceptDelete) | **DELETE** /questions/{questionId}/answers/{answerId}/accept | Unaccept an answer
[**questionsQuestionIdAnswersAnswerIdAcceptPost**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdAcceptPost) | **POST** /questions/{questionId}/answers/{answerId}/accept | Accept an answer
[**questionsQuestionIdAnswersAnswerIdDelete**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdDelete) | **DELETE** /questions/{questionId}/answers/{answerId} | Delete an answer
[**questionsQuestionIdAnswersAnswerIdDownvoteDelete**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdDownvoteDelete) | **DELETE** /questions/{questionId}/answers/{answerId}/downvote | Delete answer downvote
[**questionsQuestionIdAnswersAnswerIdDownvotePost**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdDownvotePost) | **POST** /questions/{questionId}/answers/{answerId}/downvote | Downvote an answer
[**questionsQuestionIdAnswersAnswerIdFlagsOptionsGet**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdFlagsOptionsGet) | **GET** /questions/{questionId}/answers/{answerId}/flags/options | Retrive a list of flag options
[**questionsQuestionIdAnswersAnswerIdFlagsPost**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdFlagsPost) | **POST** /questions/{questionId}/answers/{answerId}/flags | Raises a flag for an answer
[**questionsQuestionIdAnswersAnswerIdGet**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdGet) | **GET** /questions/{questionId}/answers/{answerId} | Retrieve an answer
[**questionsQuestionIdAnswersAnswerIdPut**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdPut) | **PUT** /questions/{questionId}/answers/{answerId} | Update an answer
[**questionsQuestionIdAnswersAnswerIdUpvoteDelete**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdUpvoteDelete) | **DELETE** /questions/{questionId}/answers/{answerId}/upvote | Delete answer upvote
[**questionsQuestionIdAnswersAnswerIdUpvotePost**](AnswersMainApi.md#questionsQuestionIdAnswersAnswerIdUpvotePost) | **POST** /questions/{questionId}/answers/{answerId}/upvote | Upvote an answer
[**questionsQuestionIdAnswersGet**](AnswersMainApi.md#questionsQuestionIdAnswersGet) | **GET** /questions/{questionId}/answers | Retrieve all answers to a question
[**questionsQuestionIdAnswersPost**](AnswersMainApi.md#questionsQuestionIdAnswersPost) | **POST** /questions/{questionId}/answers | Create an answer


# **questionsQuestionIdAnswersAnswerIdAcceptDelete**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdAcceptDelete()

Unaccepts an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdAcceptDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdAcceptPost**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdAcceptPost()

Accepts an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdAcceptPostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdAcceptPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdDelete**
> void questionsQuestionIdAnswersAnswerIdDelete()

Deletes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdDownvoteDelete**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdDownvoteDelete()

Deletes the downvote of an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvoteDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdDownvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdDownvotePost**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdDownvotePost()

Downvotes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdDownvotePostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdDownvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdFlagsOptionsGet**
> Array<FlagOptionResponseModel> questionsQuestionIdAnswersAnswerIdFlagsOptionsGet()

Retrieve a list of flag options for an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsOptionsGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdFlagsOptionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdFlagsPost**
> void questionsQuestionIdAnswersAnswerIdFlagsPost()

Raises a flag for an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdFlagsPostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
    //  (optional)
  flagRequestModel: {
    optionId: 1234,
    comment: "I'm flagging this post because it is spam",
    relatedQuestionId: 1234,
    targetSite: "stackoverflow.com",
  },
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdFlagsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagRequestModel** | **FlagRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdGet**
> AnswerResponseModel questionsQuestionIdAnswersAnswerIdGet()

Retrieves an answer to a question, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdPut**
> AnswerResponseModel questionsQuestionIdAnswersAnswerIdPut()

Updates an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdPutRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
    //  (optional)
  answerRequestModel: {
    body: "This is a common answer to a common question.",
  },
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answerRequestModel** | **AnswerRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdUpvoteDelete**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdUpvoteDelete()

Deletes the upvote of an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvoteDeleteRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersAnswerIdUpvotePost**
> AnswerSummaryResponseModel questionsQuestionIdAnswersAnswerIdUpvotePost()

Upvotes an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersAnswerIdUpvotePostRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


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

# **questionsQuestionIdAnswersGet**
> PaginatedAnswers questionsQuestionIdAnswersGet()

Retrieves all answers to a question, identified by question ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersGetRequest = {
    // Question ID
  questionId: 123,
  
  page: 1,
  
  pageSize: 15,
  
  sort: "score",
  
  order: "asc",
};

const data = await apiInstance.questionsQuestionIdAnswersGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
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

# **questionsQuestionIdAnswersPost**
> AnswerResponseModel questionsQuestionIdAnswersPost()

Creates an answer to a question, identified by question ID.

### Example


```typescript
import { createConfiguration, AnswersMainApi } from '';
import type { AnswersMainApiQuestionsQuestionIdAnswersPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AnswersMainApi(configuration);

const request: AnswersMainApiQuestionsQuestionIdAnswersPostRequest = {
    // Question ID
  questionId: 123,
    //  (optional)
  answerRequestModel: {
    body: "This is a common answer to a common question.",
  },
};

const data = await apiInstance.questionsQuestionIdAnswersPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **answerRequestModel** | **AnswerRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined


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


