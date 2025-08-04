# .CommentsTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamArticlesArticleIdCommentsGet**](CommentsTeamsApi.md#teamsTeamArticlesArticleIdCommentsGet) | **GET** /teams/{team}/articles/{articleId}/comments | Retrieve comments on an article
[**teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet**](CommentsTeamsApi.md#teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet) | **GET** /teams/{team}/questions/{questionId}/answers/{answerId}/comments | Retrieve comments on an answer
[**teamsTeamQuestionsQuestionIdCommentsGet**](CommentsTeamsApi.md#teamsTeamQuestionsQuestionIdCommentsGet) | **GET** /teams/{team}/questions/{questionId}/comments | Retrieve comments on a question


# **teamsTeamArticlesArticleIdCommentsGet**
> Array<CommentResponseModel> teamsTeamArticlesArticleIdCommentsGet()

Retrieves comments on an article, identified by article ID.

### Example


```typescript
import { createConfiguration, CommentsTeamsApi } from '';
import type { CommentsTeamsApiTeamsTeamArticlesArticleIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsTeamsApi(configuration);

const request: CommentsTeamsApiTeamsTeamArticlesArticleIdCommentsGetRequest = {
    // Article ID
  articleId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamArticlesArticleIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet**
> Array<CommentResponseModel> teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet()

Retrieves comments on an answer, identified by question ID and answer ID.

### Example


```typescript
import { createConfiguration, CommentsTeamsApi } from '';
import type { CommentsTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsTeamsApi(configuration);

const request: CommentsTeamsApiTeamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGetRequest = {
    // Question ID
  questionId: 123,
    // Answer ID
  answerId: 456,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdAnswersAnswerIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **answerId** | [**number**] | Answer ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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

# **teamsTeamQuestionsQuestionIdCommentsGet**
> Array<CommentResponseModel> teamsTeamQuestionsQuestionIdCommentsGet()

Retrieves comments on a question, identified by question ID.

### Example


```typescript
import { createConfiguration, CommentsTeamsApi } from '';
import type { CommentsTeamsApiTeamsTeamQuestionsQuestionIdCommentsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new CommentsTeamsApi(configuration);

const request: CommentsTeamsApiTeamsTeamQuestionsQuestionIdCommentsGetRequest = {
    // Question ID
  questionId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamQuestionsQuestionIdCommentsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questionId** | [**number**] | Question ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


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


