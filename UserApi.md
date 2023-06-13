# .UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userEmailUserMailGet**](UserApi.md#userEmailUserMailGet) | **GET** /User/Email/{userMail} | Get user by Mail
[**userIdUserIdGet**](UserApi.md#userIdUserIdGet) | **GET** /User/Id/{userId} | Get user by id
[**userNameUserNameGet**](UserApi.md#userNameUserNameGet) | **GET** /User/Name/{userName} | Get user by Name
[**userUserIdDelete**](UserApi.md#userUserIdDelete) | **DELETE** /User/{userId} | Delete User By Id
[**userUserIdPut**](UserApi.md#userUserIdPut) | **PUT** /User/{userId} | Update User


# **userEmailUserMailGet**
> GameTripUserDto userEmailUserMailGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUserEmailUserMailGetRequest = {
  // string | Mail of user
  userMail: "userMail_example",
};

apiInstance.userEmailUserMailGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userMail** | [**string**] | Mail of user | defaults to undefined


### Return type

**GameTripUserDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userIdUserIdGet**
> GameTripUserDto userIdUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUserIdUserIdGetRequest = {
  // string | Id of user
  userId: "userId_example",
};

apiInstance.userIdUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | Id of user | defaults to undefined


### Return type

**GameTripUserDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userNameUserNameGet**
> GameTripUserDto userNameUserNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUserNameUserNameGetRequest = {
  // string | Name of user
  userName: "userName_example",
};

apiInstance.userNameUserNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | [**string**] | Name of user | defaults to undefined


### Return type

**GameTripUserDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userUserIdDelete**
> GameTripUserDto userUserIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUserUserIdDeleteRequest = {
  // string | Id of user
  userId: "userId_example",
};

apiInstance.userUserIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | Id of user | defaults to undefined


### Return type

**GameTripUserDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **userUserIdPut**
> GameTripUserDto userUserIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserApi(configuration);

let body:.UserApiUserUserIdPutRequest = {
  // string | Id of user to delete
  userId: "userId_example",
  // UpdateGameTripUserDto | UpdateGameTripUserDto (optional)
  updateGameTripUserDto: {
    id: "id_example",
    userName: "userName_example",
    email: "email_example",
  },
};

apiInstance.userUserIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGameTripUserDto** | **UpdateGameTripUserDto**| UpdateGameTripUserDto |
 **userId** | [**string**] | Id of user to delete | defaults to undefined


### Return type

**GameTripUserDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


