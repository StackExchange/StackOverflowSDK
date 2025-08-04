# .ArticlesTeamsApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsTeamArticlesArticleIdDelete**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdDelete) | **DELETE** /teams/{team}/articles/{articleId} | Delete an article
[**teamsTeamArticlesArticleIdGet**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdGet) | **GET** /teams/{team}/articles/{articleId} | Retrieve an article
[**teamsTeamArticlesArticleIdLinkedQuestionsGet**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdLinkedQuestionsGet) | **GET** /teams/{team}/articles/{articleId}/linked-questions | Retrieve linked questions
[**teamsTeamArticlesArticleIdPut**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdPut) | **PUT** /teams/{team}/articles/{articleId} | Update an article
[**teamsTeamArticlesArticleIdUpvoteDelete**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdUpvoteDelete) | **DELETE** /teams/{team}/articles/{articleId}/upvote | Delete article upvote
[**teamsTeamArticlesArticleIdUpvotePost**](ArticlesTeamsApi.md#teamsTeamArticlesArticleIdUpvotePost) | **POST** /teams/{team}/articles/{articleId}/upvote | Upvote an article
[**teamsTeamArticlesGet**](ArticlesTeamsApi.md#teamsTeamArticlesGet) | **GET** /teams/{team}/articles | Retrieve all articles
[**teamsTeamArticlesPost**](ArticlesTeamsApi.md#teamsTeamArticlesPost) | **POST** /teams/{team}/articles | Create an article


# **teamsTeamArticlesArticleIdDelete**
> void teamsTeamArticlesArticleIdDelete()

Deletes an article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdDeleteRequest = {
    // Article ID
  articleId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamArticlesArticleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined
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
**204** | Article deleted |  -  |
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesArticleIdGet**
> ArticleResponseModel teamsTeamArticlesArticleIdGet()

Retrieves a article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdGetRequest = {
    // Article ID
  articleId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamArticlesArticleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**ArticleResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article found |  -  |
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesArticleIdLinkedQuestionsGet**
> PaginatedLinkedOrRelatedQuestions teamsTeamArticlesArticleIdLinkedQuestionsGet()

Retrieves questions linked to an article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdLinkedQuestionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdLinkedQuestionsGetRequest = {
    // Question ID
  articleId: 123,
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.teamsTeamArticlesArticleIdLinkedQuestionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Question ID | defaults to undefined
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
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesArticleIdPut**
> ArticleResponseModel teamsTeamArticlesArticleIdPut()

Updates an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdPutRequest = {
    // Article ID
  articleId: 1,
  
  team: "team_example",
    //  (optional)
  articleRequestModel: {
    title: "Python Style Guide",
    body: "Python is the primary language for the Data Science Teams at Stack Overflow. This document is a style guide for how Python code is written at Stack Overflow.",
    tags: [
      "tags_example",
    ],
    type: "knowledgeArticle",
    permissions: {
      editableBy: "ownerOnly",
      editorUserIds: [2,20,46],
      editorUserGroupIds: [1001,1002],
    },
  },
};

const data = await apiInstance.teamsTeamArticlesArticleIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleRequestModel** | **ArticleRequestModel**|  |
 **articleId** | [**number**] | Article ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**ArticleResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article updated |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesArticleIdUpvoteDelete**
> ArticleResponseModel teamsTeamArticlesArticleIdUpvoteDelete()

Deletes the upvote of an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvoteDeleteRequest = {
    // Article ID
  articleId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamArticlesArticleIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**ArticleResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Upvote deleted |  -  |
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesArticleIdUpvotePost**
> ArticleResponseModel teamsTeamArticlesArticleIdUpvotePost()

Upvotes an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesArticleIdUpvotePostRequest = {
    // Article ID
  articleId: 123,
  
  team: "team_example",
};

const data = await apiInstance.teamsTeamArticlesArticleIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined
 **team** | [**string**] |  | defaults to undefined


### Return type

**ArticleResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article upvoted |  -  |
**404** | Article not found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesGet**
> PaginatedArticles teamsTeamArticlesGet()

Retrieves all articles on the site or team.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesGetRequest = {
  
  team: "team_example",
  
  page: 1,
  
  pageSize: 15,
  
  sort: "activity",
  
  order: "asc",
  
  tagId: [
    1,
  ],
  
  authorId: 1,
  
  _from: new Date('1970-01-01T00:00:00.00Z'),
  
  to: new Date('1970-01-01T00:00:00.00Z'),
};

const data = await apiInstance.teamsTeamArticlesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | (optional) defaults to undefined
 **pageSize** | [**15 | 30 | 50 | 100**]**Array<15 &#124; 30 &#124; 50 &#124; 100>** |  | (optional) defaults to undefined
 **sort** | **ArticleSortParameter** |  | (optional) defaults to undefined
 **order** | **SortOrder** |  | (optional) defaults to undefined
 **tagId** | **Array&lt;number&gt;** |  | (optional) defaults to undefined
 **authorId** | [**number**] |  | (optional) defaults to undefined
 **_from** | [**Date**] |  | (optional) defaults to undefined
 **to** | [**Date**] |  | (optional) defaults to undefined


### Return type

**PaginatedArticles**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Articles found |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsTeamArticlesPost**
> ArticleResponseModel teamsTeamArticlesPost()

Creates an article.

### Example


```typescript
import { createConfiguration, ArticlesTeamsApi } from '';
import type { ArticlesTeamsApiTeamsTeamArticlesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesTeamsApi(configuration);

const request: ArticlesTeamsApiTeamsTeamArticlesPostRequest = {
  
  team: "team_example",
    //  (optional)
  articleRequestModel: {
    title: "Python Style Guide",
    body: "Python is the primary language for the Data Science Teams at Stack Overflow. This document is a style guide for how Python code is written at Stack Overflow.",
    tags: [
      "tags_example",
    ],
    type: "knowledgeArticle",
    permissions: {
      editableBy: "ownerOnly",
      editorUserIds: [2,20,46],
      editorUserGroupIds: [1001,1002],
    },
  },
};

const data = await apiInstance.teamsTeamArticlesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleRequestModel** | **ArticleRequestModel**|  |
 **team** | [**string**] |  | defaults to undefined


### Return type

**ArticleResponseModel**

### Authorization

[oauth2](README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Article created |  -  |
**400** | Invalid request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


