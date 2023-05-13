# .CommentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentAddLocationIdPost**](CommentApi.md#commentAddLocationIdPost) | **POST** /Comment/Add/{locationId} | Add Comment To location
[**commentCommentIdGet**](CommentApi.md#commentCommentIdGet) | **GET** /Comment/{commentId} | Get Comment By Id
[**commentCommentIdPut**](CommentApi.md#commentCommentIdPut) | **PUT** /Comment/{commentId} | 
[**commentLocationLocationIdGet**](CommentApi.md#commentLocationLocationIdGet) | **GET** /Comment/Location/{locationId} | Get All Comment By Location
[**commentRemoveCommentIdDelete**](CommentApi.md#commentRemoveCommentIdDelete) | **DELETE** /Comment/Remove/{commentId} | Remove Comment By Id
[**commentUserUserIdGet**](CommentApi.md#commentUserUserIdGet) | **GET** /Comment/User/{userId} | Get All Comment By User


# **commentAddLocationIdPost**
> MessageDto commentAddLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentAddLocationIdPostRequest = {
  // string | Id of location where add comment
  locationId: "locationId_example",
  // AddCommentToLocationDto | AddCommentToLocationDto (optional)
  addCommentToLocationDto: {
    text: "text_example",
    userId: "userId_example",
    locationId: "locationId_example",
  },
};

apiInstance.commentAddLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCommentToLocationDto** | **AddCommentToLocationDto**| AddCommentToLocationDto |
 **locationId** | [**string**] | Id of location where add comment | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentCommentIdGet**
> void | Array<ListCommentDto> commentCommentIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentCommentIdGetRequest = {
  // string | Id of wanted Comment
  commentId: "commentId_example",
};

apiInstance.commentCommentIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | [**string**] | Id of wanted Comment | defaults to undefined


### Return type

**void | Array<ListCommentDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentCommentIdPut**
> void | Array<ListCommentDto> commentCommentIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentCommentIdPutRequest = {
  // string
  commentId: "commentId_example",
  // UpdateCommentDto (optional)
  updateCommentDto: {
    commentId: "commentId_example",
    locationId: "locationId_example",
    userId: "userId_example",
    text: "text_example",
  },
};

apiInstance.commentCommentIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCommentDto** | **UpdateCommentDto**|  |
 **commentId** | [**string**] |  | defaults to undefined


### Return type

**void | Array<ListCommentDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentLocationLocationIdGet**
> void | Array<ListCommentDto> commentLocationLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentLocationLocationIdGetRequest = {
  // string | Id of location related of Comments
  locationId: "locationId_example",
};

apiInstance.commentLocationLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of location related of Comments | defaults to undefined


### Return type

**void | Array<ListCommentDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentRemoveCommentIdDelete**
> void commentRemoveCommentIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentRemoveCommentIdDeleteRequest = {
  // string | Id of comment to be removed
  commentId: "commentId_example",
};

apiInstance.commentRemoveCommentIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | [**string**] | Id of comment to be removed | defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Comment has been deleted |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **commentUserUserIdGet**
> void | Array<ListCommentDto> commentUserUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentApi(configuration);

let body:.CommentApiCommentUserUserIdGetRequest = {
  // string | Id of User related of Comment
  userId: "userId_example",
};

apiInstance.commentUserUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | Id of User related of Comment | defaults to undefined


### Return type

**void | Array<ListCommentDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


