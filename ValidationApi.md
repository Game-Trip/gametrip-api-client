# .ValidationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**validationSwitchCommentValidateStateCommentIdUserIdPost**](ValidationApi.md#validationSwitchCommentValidateStateCommentIdUserIdPost) | **POST** /Validation/SwitchCommentValidateState/{commentId}/{userId} | 
[**validationSwitchGameValidateStateGameIdUserIdPost**](ValidationApi.md#validationSwitchGameValidateStateGameIdUserIdPost) | **POST** /Validation/SwitchGameValidateState/{gameId}/{userId} | 
[**validationSwitchLocationValidateStateLocationIdUserIdPost**](ValidationApi.md#validationSwitchLocationValidateStateLocationIdUserIdPost) | **POST** /Validation/SwitchLocationValidateState/{locationId}/{userId} | 
[**validationSwitchPictureValidateStatePictureIdUserIdPost**](ValidationApi.md#validationSwitchPictureValidateStatePictureIdUserIdPost) | **POST** /Validation/SwitchPictureValidateState/{pictureId}/{userId} | 


# **validationSwitchCommentValidateStateCommentIdUserIdPost**
> MessageDto validationSwitchCommentValidateStateCommentIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValidationApi(configuration);

let body:.ValidationApiValidationSwitchCommentValidateStateCommentIdUserIdPostRequest = {
  // string
  commentId: "commentId_example",
  // string
  userId: "userId_example",
};

apiInstance.validationSwitchCommentValidateStateCommentIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validationSwitchGameValidateStateGameIdUserIdPost**
> MessageDto validationSwitchGameValidateStateGameIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValidationApi(configuration);

let body:.ValidationApiValidationSwitchGameValidateStateGameIdUserIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string
  userId: "userId_example",
};

apiInstance.validationSwitchGameValidateStateGameIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validationSwitchLocationValidateStateLocationIdUserIdPost**
> MessageDto validationSwitchLocationValidateStateLocationIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValidationApi(configuration);

let body:.ValidationApiValidationSwitchLocationValidateStateLocationIdUserIdPostRequest = {
  // string
  locationId: "locationId_example",
  // string
  userId: "userId_example",
};

apiInstance.validationSwitchLocationValidateStateLocationIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **validationSwitchPictureValidateStatePictureIdUserIdPost**
> MessageDto validationSwitchPictureValidateStatePictureIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ValidationApi(configuration);

let body:.ValidationApiValidationSwitchPictureValidateStatePictureIdUserIdPostRequest = {
  // string
  pictureId: "pictureId_example",
  // string
  userId: "userId_example",
};

apiInstance.validationSwitchPictureValidateStatePictureIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pictureId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


