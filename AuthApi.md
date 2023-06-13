# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authConfirmEmailPost**](AuthApi.md#authConfirmEmailPost) | **POST** /Auth/ConfirmEmail | Confirms the email of provided user.
[**authForgotPasswordPost**](AuthApi.md#authForgotPasswordPost) | **POST** /Auth/ForgotPassword | Send Forgot Password Mail to user
[**authInitializePost**](AuthApi.md#authInitializePost) | **POST** /Auth/Initialize | 
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /Auth/Login | Authenticate a user
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /Auth/Register | Register a user
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /Auth/ResetPassword | change the user\&#39;s password


# **authConfirmEmailPost**
> void authConfirmEmailPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthConfirmEmailPostRequest = {
  // ConfirmMailDto | ConfirmMailDto (optional)
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
 **confirmMailDto** | **ConfirmMailDto**| ConfirmMailDto |


### Return type

**void**

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
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authForgotPasswordPost**
> void authForgotPasswordPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthForgotPasswordPostRequest = {
  // ForgotPasswordDto | ForgotPasswordDto (optional)
  forgotPasswordDto: {
    email: "email_example",
  },
};

apiInstance.authForgotPasswordPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgotPasswordDto** | **ForgotPasswordDto**| ForgotPasswordDto |


### Return type

**void**

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
> TokenDto authLoginPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthLoginPostRequest = {
  // LoginDto | LoginDto (optional)
  loginDto: {
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
 **loginDto** | **LoginDto**| LoginDto |


### Return type

**TokenDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authRegisterPost**
> GameTripUserDto authRegisterPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthRegisterPostRequest = {
  // RegisterDto | RegisterDto (optional)
  registerDto: {
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
 **registerDto** | **RegisterDto**| RegisterDto |


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
  // ResetPasswordDto | ResetPasswrdDto (optional)
  resetPasswordDto: {
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
 **resetPasswordDto** | **ResetPasswordDto**| ResetPasswrdDto |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


