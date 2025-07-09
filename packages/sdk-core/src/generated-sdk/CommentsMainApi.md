# .CommentsMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articlesArticleIdCommentsGet**](CommentsMainApi.md#articlesArticleIdCommentsGet) | **GET** /articles/{articleId}/comments | Retrieve comments on an article
[**questionsQuestionIdAnswersAnswerIdCommentsGet**](CommentsMainApi.md#questionsQuestionIdAnswersAnswerIdCommentsGet) | **GET** /questions/{questionId}/answers/{answerId}/comments | Retrieve comments on an answer
[**questionsQuestionIdCommentsGet**](CommentsMainApi.md#questionsQuestionIdCommentsGet) | **GET** /questions/{questionId}/comments | Retrieve comments on a question


# **articlesArticleIdCommentsGet**
> Array<CommentResponseModel> articlesArticleIdCommentsGet()

Retrieves comments on an article, identified by article ID.

### Example


```typescript
import { createConfiguration, CommentsMainApi } from '';
import type { CommentsMainApiArticlesArticleIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsMainApi(configuration);

const request: CommentsMainApiArticlesArticleIdCommentsGetRequest = {
    // Article ID
  articleId: 123,
};

const data = await apiInstance.articlesArticleIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined


### Return type

**Array<CommentResponseModel>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment(s) found |  -  |
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdAnswersAnswerIdCommentsGet**
> Array<CommentResponseModel> questionsQuestionIdAnswersAnswerIdCommentsGet()

Retrieves comments on an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, CommentsMainApi } from '';
import type { CommentsMainApiQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsMainApi(configuration);

const request: CommentsMainApiQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
};

const data = await apiInstance.questionsQuestionIdAnswersAnswerIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined


### Return type

**Array<CommentResponseModel>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment(s) found |  -  |
**404** | Answer or question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **questionsQuestionIdCommentsGet**
> Array<CommentResponseModel> questionsQuestionIdCommentsGet()

Retrieves comments on a question, identified by question ID.

### Example


```typescript
import { createConfiguration, CommentsMainApi } from '';
import type { CommentsMainApiQuestionsQuestionIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsMainApi(configuration);

const request: CommentsMainApiQuestionsQuestionIdCommentsGetRequest = {
    // Question ID
  questionId: 123,
};

const data = await apiInstance.questionsQuestionIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined


### Return type

**Array<CommentResponseModel>**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment(s) found |  -  |
**404** | Question not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


