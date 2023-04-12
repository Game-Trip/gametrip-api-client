# .AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authInitializePost**](AuthApi.md#authInitializePost) | **POST** /Auth/Initialize | Initialise les table avec les rôles et l&#39;utilisateur Admin
[**authLoginPost**](AuthApi.md#authLoginPost) | **POST** /Auth/Login | Permet de login un user dans la DB
[**authRegisterPost**](AuthApi.md#authRegisterPost) | **POST** /Auth/Register | Permet de register un user dans la DB
[**authResetPasswordPost**](AuthApi.md#authResetPasswordPost) | **POST** /Auth/ResetPassword | 
[**authTokenTestPost**](AuthApi.md#authTokenTestPost) | **POST** /Auth/TokenTest | Teste la validiter d&#39;un token


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
**200 + Message** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authLoginPost**
> TokenDTO authLoginPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthLoginPostRequest = {
  // LoginDTO | Model de login d'un user (optional)
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
 **loginDTO** | **LoginDTO**| Model de login d&#39;un user |


### Return type

**TokenDTO**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token + date d&#39;expiration |  -  |
**400 + Message** |  |  -  |
**401** | Erreur de mdp ou username |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authRegisterPost**
> void | GameTripUserDTO authRegisterPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthRegisterPostRequest = {
  // RegisterDTO | Model de l'utilisateur (optional)
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
 **registerDTO** | **RegisterDTO**| Model de l&#39;utilisateur |


### Return type

**void | GameTripUserDTO**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400 + Message** |  |  -  |
**200 + Message** |  |  -  |

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
  // ResetPasswordDTO (optional)
  resetPasswordDTO: {
    email: "email_example",
    password: "password_example",
    passwordConfirmation: "passwordConfirmation_example",
  },
};

apiInstance.authResetPasswordPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPasswordDTO** | **ResetPasswordDTO**|  |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authTokenTestPost**
> void authTokenTestPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthTokenTestPostRequest = {
  // string | token a check (optional)
  body: "body_example",
};

apiInstance.authTokenTestPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string**| token a check |


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token valide |  -  |
**401** | Token non valide || Pas la permission d&#39;acceder a cette endpoint |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


