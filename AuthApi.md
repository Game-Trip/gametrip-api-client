# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authConfirmEmailPost**](AuthApi.md#authConfirmEmailPost) | **POST** /Auth/ConfirmEmail | Confirms the email.
[**authFrogotPasswordPost**](AuthApi.md#authFrogotPasswordPost) | **POST** /Auth/FrogotPassword | Frogots the password.
[**authInitializePost**](AuthApi.md#authInitializePost) | **POST** /Auth/Initialize | 
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /Auth/Login | Logins the.
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /Auth/Register | Registers the.
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /Auth/ResetPassword | Resets the password.


# **authConfirmEmailPost**
> void authConfirmEmailPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthConfirmEmailPostRequest = {
  // ConfirmMailDto | The dto. (optional)
  confirmMailDto: {
    token: "token_example",
    email: "email_example",
  },
};

apiInstance.authConfirmEmailPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmMailDto** | **ConfirmMailDto**| The dto. |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authFrogotPasswordPost**
> void authFrogotPasswordPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthFrogotPasswordPostRequest = {
  // FrogotPasswordDto | The dto. (optional)
  frogotPasswordDto: {
    email: "email_example",
  },
};

apiInstance.authFrogotPasswordPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **frogotPasswordDto** | **FrogotPasswordDto**| The dto. |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authInitializePost**
> void authInitializePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authInitializePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authLoginPost**
> TokenDTO authLoginPost()

{    \"username\": \"Dercraker\",    \"password\": \"NMdRx$HqyT8jX6\"  }

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthLoginPostRequest = {
  // LoginDTO | The dto. (optional)
  loginDTO: {
    username: "username_example",
    password: "password_example",
  },
};

apiInstance.authLoginPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDTO** | **LoginDTO**| The dto. |


### Return type

**TokenDTO**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authRegisterPost**
> GameTripUserDTO authRegisterPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthRegisterPostRequest = {
  // RegisterDTO | The dto. (optional)
  registerDTO: {
    username: "username_example",
    email: "email_example",
    password: "password_example",
    confirmPassword: "confirmPassword_example",
  },
};

apiInstance.authRegisterPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerDTO** | **RegisterDTO**| The dto. |


### Return type

**GameTripUserDTO**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authResetPasswordPost**
> void authResetPasswordPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthResetPasswordPostRequest = {
  // ResetPasswordDTO | The dto. (optional)
  resetPasswordDTO: {
    email: "email_example",
    password: "password_example",
    passwordConfirmation: "passwordConfirmation_example",
    token: "token_example",
  },
};

apiInstance.authResetPasswordPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordDTO** | **ResetPasswordDTO**| The dto. |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


