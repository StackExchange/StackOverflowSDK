# .ArticlesMainApi

All URIs are relative to *https://support-autotest.stackenterprise.co/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articlesArticleIdDelete**](ArticlesMainApi.md#articlesArticleIdDelete) | **DELETE** /articles/{articleId} | Delete an article
[**articlesArticleIdGet**](ArticlesMainApi.md#articlesArticleIdGet) | **GET** /articles/{articleId} | Retrieve an article
[**articlesArticleIdLinkedQuestionsGet**](ArticlesMainApi.md#articlesArticleIdLinkedQuestionsGet) | **GET** /articles/{articleId}/linked-questions | Retrieve linked questions
[**articlesArticleIdPut**](ArticlesMainApi.md#articlesArticleIdPut) | **PUT** /articles/{articleId} | Update an article
[**articlesArticleIdUpvoteDelete**](ArticlesMainApi.md#articlesArticleIdUpvoteDelete) | **DELETE** /articles/{articleId}/upvote | Delete article upvote
[**articlesArticleIdUpvotePost**](ArticlesMainApi.md#articlesArticleIdUpvotePost) | **POST** /articles/{articleId}/upvote | Upvote an article
[**articlesGet**](ArticlesMainApi.md#articlesGet) | **GET** /articles | Retrieve all articles
[**articlesPost**](ArticlesMainApi.md#articlesPost) | **POST** /articles | Create an article


# **articlesArticleIdDelete**
> void articlesArticleIdDelete()

Deletes an article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdDeleteRequest = {
    // Article ID
  articleId: 123,
};

const data = await apiInstance.articlesArticleIdDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined


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

# **articlesArticleIdGet**
> ArticleResponseModel articlesArticleIdGet()

Retrieves a article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdGetRequest = {
    // Article ID
  articleId: 123,
};

const data = await apiInstance.articlesArticleIdGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined


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

# **articlesArticleIdLinkedQuestionsGet**
> PaginatedLinkedOrRelatedQuestions articlesArticleIdLinkedQuestionsGet()

Retrieves questions linked to an article, identified by article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdLinkedQuestionsGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdLinkedQuestionsGetRequest = {
    // Question ID
  articleId: 123,
  
  page: 1,
  
  pageSize: 15,
  
  sort: "hot",
  
  order: "asc",
};

const data = await apiInstance.articlesArticleIdLinkedQuestionsGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Question ID | defaults to undefined
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

# **articlesArticleIdPut**
> ArticleResponseModel articlesArticleIdPut()

Updates an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdPutRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdPutRequest = {
    // Article ID
  articleId: 1,
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

const data = await apiInstance.articlesArticleIdPut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleRequestModel** | **ArticleRequestModel**|  |
 **articleId** | [**number**] | Article ID | defaults to undefined


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

# **articlesArticleIdUpvoteDelete**
> ArticleResponseModel articlesArticleIdUpvoteDelete()

Deletes the upvote of an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdUpvoteDeleteRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdUpvoteDeleteRequest = {
    // Article ID
  articleId: 123,
};

const data = await apiInstance.articlesArticleIdUpvoteDelete(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined


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

# **articlesArticleIdUpvotePost**
> ArticleResponseModel articlesArticleIdUpvotePost()

Upvotes an article, identified by Article ID.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesArticleIdUpvotePostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesArticleIdUpvotePostRequest = {
    // Article ID
  articleId: 123,
};

const data = await apiInstance.articlesArticleIdUpvotePost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleId** | [**number**] | Article ID | defaults to undefined


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

# **articlesGet**
> PaginatedArticles articlesGet()

Retrieves all articles on the site or team.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesGetRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesGetRequest = {
  
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

const data = await apiInstance.articlesGet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **articlesPost**
> ArticleResponseModel articlesPost()

Creates an article.

### Example


```typescript
import { createConfiguration, ArticlesMainApi } from '';
import type { ArticlesMainApiArticlesPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ArticlesMainApi(configuration);

const request: ArticlesMainApiArticlesPostRequest = {
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

const data = await apiInstance.articlesPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleRequestModel** | **ArticleRequestModel**|  |


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


