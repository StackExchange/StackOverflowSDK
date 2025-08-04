# .QuestionsTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamQuestionsGet**](QuestionsTeamsApi.md#teamsTeamQuestionsGet) | **GET** /teams/{team}/questions | Retrieve all questions
[**teamsTeamQuestionsPost**](QuestionsTeamsApi.md#teamsTeamQuestionsPost) | **POST** /teams/{team}/questions | Create a question
[**teamsTeamQuestionsQuestionIdBookmarkDelete**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdBookmarkDelete) | **DELETE** /teams/{team}/questions/{questionId}/bookmark | Unbookmark question
[**teamsTeamQuestionsQuestionIdBookmarkPost**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdBookmarkPost) | **POST** /teams/{team}/questions/{questionId}/bookmark | Bookmark question
[**teamsTeamQuestionsQuestionIdDelete**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdDelete) | **DELETE** /teams/{team}/questions/{questionId} | Delete a question
[**teamsTeamQuestionsQuestionIdDownvoteDelete**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdDownvoteDelete) | **DELETE** /teams/{team}/questions/{questionId}/downvote | Delete question downvote
[**teamsTeamQuestionsQuestionIdDownvotePost**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdDownvotePost) | **POST** /teams/{team}/questions/{questionId}/downvote | Downvote a question
[**teamsTeamQuestionsQuestionIdFlagsOptionsGet**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdFlagsOptionsGet) | **GET** /teams/{team}/questions/{questionId}/flags/options | Retrieve list of flag options
[**teamsTeamQuestionsQuestionIdFlagsPost**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdFlagsPost) | **POST** /teams/{team}/questions/{questionId}/flags | Raises a flag for a question
[**teamsTeamQuestionsQuestionIdGet**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdGet) | **GET** /teams/{team}/questions/{questionId} | Retrieve a question
[**teamsTeamQuestionsQuestionIdLinkedGet**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdLinkedGet) | **GET** /teams/{team}/questions/{questionId}/linked | Retrieve linked questions
[**teamsTeamQuestionsQuestionIdPut**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdPut) | **PUT** /teams/{team}/questions/{questionId} | Update a question
[**teamsTeamQuestionsQuestionIdRelatedGet**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdRelatedGet) | **GET** /teams/{team}/questions/{questionId}/related | Retrieve related questions
[**teamsTeamQuestionsQuestionIdUpvoteDelete**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdUpvoteDelete) | **DELETE** /teams/{team}/questions/{questionId}/upvote | Delete question upvote
[**teamsTeamQuestionsQuestionIdUpvotePost**](QuestionsTeamsApi.md#teamsTeamQuestionsQuestionIdUpvotePost) | **POST** /teams/{team}/questions/{questionId}/upvote | Upvote a question


# **teamsTeamQuestionsGet**
> PaginatedQuestions teamsTeamQuestionsGet()

Retrieves all questions on the site or team.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsGetRequest = {
  
  team: "team_example",
  
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

const data = await apiInstance.teamsTeamQuestionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
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

# **teamsTeamQuestionsPost**
> QuestionResponseModel teamsTeamQuestionsPost()

Creates a question.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsPostRequest = {
  
  team: "team_example",
    //  (optional)
  questionRequestModel: {
    title: "How do I undo the most recent local commits in Git?",
    body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet.",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.teamsTeamQuestionsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionRequestModel** | **QuestionRequestModel**|  |
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdBookmarkDelete**
> QuestionResponseModel teamsTeamQuestionsQuestionIdBookmarkDelete()

Unbookmarks a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkDeleteRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdBookmarkDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdBookmarkPost**
> QuestionResponseModel teamsTeamQuestionsQuestionIdBookmarkPost()

Bookmarks a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdBookmarkPostRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdBookmarkPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdDelete**
> void teamsTeamQuestionsQuestionIdDelete()

Deletes a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDeleteRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
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
**204** | Question deleted |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdDownvoteDelete**
> QuestionResponseModel teamsTeamQuestionsQuestionIdDownvoteDelete()

Deletes the downvote of a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvoteDeleteRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdDownvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdDownvotePost**
> QuestionResponseModel teamsTeamQuestionsQuestionIdDownvotePost()

Downvote a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdDownvotePostRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdDownvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdFlagsOptionsGet**
> Array<FlagOptionResponseModel> teamsTeamQuestionsQuestionIdFlagsOptionsGet()

Retrieve a list of flag options for a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsOptionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsOptionsGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdFlagsOptionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
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
**200** | Flag options found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdFlagsPost**
> void teamsTeamQuestionsQuestionIdFlagsPost()

Raises a flag for a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdFlagsPostRequest = {
    // Question ID
  questionId: 1,
  
  team: "team_example",
    //  (optional)
  flagRequestModel: {
    optionId: 1234,
    comment: "I'm flagging this post because it is spam",
    relatedQuestionId: 1234,
    targetSite: "stackoverflow.com",
  },
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdFlagsPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **flagRequestModel** | **FlagRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
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
**404** | Question not found |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamQuestionsQuestionIdGet**
> QuestionResponseModel teamsTeamQuestionsQuestionIdGet()

Retrieves a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdLinkedGet**
> PaginatedLinkedOrRelatedQuestions teamsTeamQuestionsQuestionIdLinkedGet()

Retrieves questions linked to another question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdLinkedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdLinkedGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdLinkedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined
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

# **teamsTeamQuestionsQuestionIdPut**
> QuestionResponseModel teamsTeamQuestionsQuestionIdPut()

Updates a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdPutRequest = {
    // Question ID
  questionId: 1,
  
  team: "team_example",
    //  (optional)
  questionRequestModel: {
    title: "How do I undo the most recent local commits in Git?",
    body: "I accidentally committed the wrong files to Git, but didn't push the commit to the server yet.",
    tags: [
      "tags_example",
    ],
  },
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionRequestModel** | **QuestionRequestModel**|  |
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdRelatedGet**
> PaginatedLinkedOrRelatedQuestions teamsTeamQuestionsQuestionIdRelatedGet()

Retrieves questions related to another question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdRelatedGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdRelatedGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdRelatedGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined
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

# **teamsTeamQuestionsQuestionIdUpvoteDelete**
> QuestionResponseModel teamsTeamQuestionsQuestionIdUpvoteDelete()

Deletes the upvote of a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvoteDeleteRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdUpvotePost**
> QuestionResponseModel teamsTeamQuestionsQuestionIdUpvotePost()

Upvotes a question, identified by question ID.

### Example


```typescript
import { createConfiguration, QuestionsTeamsApi } from '';
import type { QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new QuestionsTeamsApi(configuration);

const request: QuestionsTeamsApiTeamsTeamQuestionsQuestionIdUpvotePostRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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


