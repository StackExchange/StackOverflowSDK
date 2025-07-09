# .QuestionsMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**questionsGet**](QuestionsMainApi.md#questionsGet) | **GET** /questions | Retrieve all questions
[**questionsPost**](QuestionsMainApi.md#questionsPost) | **POST** /questions | Create a question
[**questionsQuestionIdBookmarkDelete**](QuestionsMainApi.md#questionsQuestionIdBookmarkDelete) | **DELETE** /questions/{questionId}/bookmark | Unbookmark question
[**questionsQuestionIdBookmarkPost**](QuestionsMainApi.md#questionsQuestionIdBookmarkPost) | **POST** /questions/{questionId}/bookmark | Bookmark question
[**questionsQuestionIdDelete**](QuestionsMainApi.md#questionsQuestionIdDelete) | **DELETE** /questions/{questionId} | Delete a question
[**questionsQuestionIdDownvoteDelete**](QuestionsMainApi.md#questionsQuestionIdDownvoteDelete) | **DELETE** /questions/{questionId}/downvote | Delete question downvote
[**questionsQuestionIdDownvotePost**](QuestionsMainApi.md#questionsQuestionIdDownvotePost) | **POST** /questions/{questionId}/downvote | Downvote a question
[**questionsQuestionIdFlagsOptionsGet**](QuestionsMainApi.md#questionsQuestionIdFlagsOptionsGet) | **GET** /questions/{questionId}/flags/options | Retrieve list of flag options
[**questionsQuestionIdFlagsPost**](QuestionsMainApi.md#questionsQuestionIdFlagsPost) | **POST** /questions/{questionId}/flags | Raises a flag for a question
[**questionsQuestionIdGet**](QuestionsMainApi.md#questionsQuestionIdGet) | **GET** /questions/{questionId} | Retrieve a question
[**questionsQuestionIdLinkedGet**](QuestionsMainApi.md#questionsQuestionIdLinkedGet) | **GET** /questions/{questionId}/linked | Retrieve linked questions
[**questionsQuestionIdPut**](QuestionsMainApi.md#questionsQuestionIdPut) | **PUT** /questions/{questionId} | Update a question
[**questionsQuestionIdRelatedGet**](QuestionsMainApi.md#questionsQuestionIdRelatedGet) | **GET** /questions/{questionId}/related | Retrieve related questions
[**questionsQuestionIdUpvoteDelete**](QuestionsMainApi.md#questionsQuestionIdUpvoteDelete) | **DELETE** /questions/{questionId}/upvote | Delete question upvote
[**questionsQuestionIdUpvotePost**](QuestionsMainApi.md#questionsQuestionIdUpvotePost) | **POST** /questions/{questionId}/upvote | Upvote a question


# **questionsGet**
> PaginatedQuestions questionsGet()

Retrieves all questions on the site or team.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsGetRequest = {
  
  page: 1,
  
  pageSize: 15,
  
  sort: "activity",
  
  order: "asc",
  
  isAnswered: true,
  
  hasAcceptedAnswer: true,
  
  questionId: [
    1,
  ],
  
  tagId: [
    1,
  ],
  
  authorId: 1,
  
  _from: new Date('1970-01-01T00:00:00.00Z'),
  
  to: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.questionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **QuestionSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined
 **isAnswered** | [**boolean**] |  | (optional) defaults to undefined
 **hasAcceptedAnswer** | [**boolean**] |  | (optional) defaults to undefined
 **questionId** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **tagId** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **authorId** | [**number**] |  | (optional) defaults to undefined
 **_from** | [**Date**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined


### Return type

**PaginatedQuestions**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Questions found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsPost**
> QuestionResponseModel questionsPost()

Creates a question.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsPostRequest = {
    //  (optional)
  questionRequestModel: {
    title: "How do I undo the most recent local commits in Git?",
    body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet.",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.questionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionRequestModel** | **QuestionRequestModel**|  |


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Question created |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdBookmarkDelete**
> QuestionResponseModel questionsQuestionIdBookmarkDelete()

Unbookmarks a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdBookmarkDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdBookmarkDeleteRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdBookmarkDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question unbookmarked |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdBookmarkPost**
> QuestionResponseModel questionsQuestionIdBookmarkPost()

Bookmarks a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdBookmarkPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdBookmarkPostRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdBookmarkPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Question bookmarked |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdDelete**
> void questionsQuestionIdDelete()

Deletes a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdDeleteRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


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
**204** | Question deleted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdDownvoteDelete**
> QuestionResponseModel questionsQuestionIdDownvoteDelete()

Deletes the downvote of a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdDownvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdDownvoteDeleteRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdDownvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Downvote deleted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdDownvotePost**
> QuestionResponseModel questionsQuestionIdDownvotePost()

Downvote a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdDownvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdDownvotePostRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdDownvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question downvoted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdFlagsOptionsGet**
> Array<FlagOptionResponseModel> questionsQuestionIdFlagsOptionsGet()

Retrieve a list of flag options for a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdFlagsOptionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdFlagsOptionsGetRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdFlagsOptionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


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
**200** | Flag options found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdFlagsPost**
> void questionsQuestionIdFlagsPost()

Raises a flag for a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdFlagsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdFlagsPostRequest = {
    // Question ID
  questionId: 1,
    //  (optional)
  flagRequestModel: {
    optionId: 1234,
    comment: "I'm flagging this post because it is spam",
    relatedQuestionId: 1234,
    targetSite: "stackoverflow.com",
  },
};

const data = await apiInstance.questionsQuestionIdFlagsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagRequestModel** | **FlagRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined


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
**404** | Question not found |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdGet**
> QuestionResponseModel questionsQuestionIdGet()

Retrieves a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdGetRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdLinkedGet**
> PaginatedLinkedOrRelatedQuestions questionsQuestionIdLinkedGet()

Retrieves questions linked to another question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdLinkedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdLinkedGetRequest = {
    // Question ID
  questionId: 123,
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.questionsQuestionIdLinkedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **LinkedOrRelatedQuestionsSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedLinkedOrRelatedQuestions**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Linked question(s) found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdPut**
> QuestionResponseModel questionsQuestionIdPut()

Updates a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdPutRequest = {
    // Question ID
  questionId: 1,
    //  (optional)
  questionRequestModel: {
    title: "How do I undo the most recent local commits in Git?",
    body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet.",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.questionsQuestionIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionRequestModel** | **QuestionRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdRelatedGet**
> PaginatedLinkedOrRelatedQuestions questionsQuestionIdRelatedGet()

Retrieves questions related to another question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdRelatedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdRelatedGetRequest = {
    // Question ID
  questionId: 123,
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.questionsQuestionIdRelatedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **LinkedOrRelatedQuestionsSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined


### Return type

**PaginatedLinkedOrRelatedQuestions**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related question(s) found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdUpvoteDelete**
> QuestionResponseModel questionsQuestionIdUpvoteDelete()

Deletes the upvote of a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdUpvoteDeleteRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upvote deleted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdUpvotePost**
> QuestionResponseModel questionsQuestionIdUpvotePost()

Upvotes a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsMainApi } from '';
import type { QuestionsMainApiQuestionsQuestionIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsMainApi(configuration);

const request: QuestionsMainApiQuestionsQuestionIdUpvotePostRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**QuestionResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Question upvoted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


