# .SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchSearchGameGet**](SearchApi.md#searchSearchGameGet) | **GET** /Search/SearchGame | 
[**searchSearchLocationGet**](SearchApi.md#searchSearchLocationGet) | **GET** /Search/SearchLocation | 


# **searchSearchGameGet**
> Array<GameNameDto> searchSearchGameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SearchApi(configuration);

let body:.SearchApiSearchSearchGameGetRequest = {
  // string (optional)
  name: "Name_example",
  // string (optional)
  description: "Description_example",
  // string (optional)
  editor: "Editor_example",
  // number (optional)
  releaseDate: 1,
};

apiInstance.searchSearchGameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **editor** | [**string**] |  | (optional) defaults to undefined
 **releaseDate** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<GameNameDto>**

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

# **searchSearchLocationGet**
> Array<LocationNameDto> searchSearchLocationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SearchApi(configuration);

let body:.SearchApiSearchSearchLocationGetRequest = {
  // string (optional)
  name: "Name_example",
  // string (optional)
  description: "Description_example",
  // number (optional)
  latitude: 3.14,
  // number (optional)
  longitude: 3.14,
};

apiInstance.searchSearchLocationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<LocationNameDto>**

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


