# .LocationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationCreateLocationPost**](LocationApi.md#locationCreateLocationPost) | **POST** /Location/CreateLocation | Create new location
[**locationDeleteLocationIdDelete**](LocationApi.md#locationDeleteLocationIdDelete) | **DELETE** /Location/Delete/{locationId} | Delete location by id
[**locationGameIdGameIdGet**](LocationApi.md#locationGameIdGameIdGet) | **GET** /Location/Game/Id/{gameId} | Get all location by game id
[**locationGameNameGameNameGet**](LocationApi.md#locationGameNameGameNameGet) | **GET** /Location/Game/Name/{gameName} | Get all location by game name
[**locationGet**](LocationApi.md#locationGet) | **GET** /Location | Get all locations
[**locationIdLocationIdGet**](LocationApi.md#locationIdLocationIdGet) | **GET** /Location/Id/{locationId} | Get location by id
[**locationLocationIdPost**](LocationApi.md#locationLocationIdPost) | **POST** /Location/{locationId} | Make a request to update a location
[**locationLocationIdPut**](LocationApi.md#locationLocationIdPut) | **PUT** /Location/{locationId} | Update location -&gt; For Admin only
[**locationNameLocationNameGet**](LocationApi.md#locationNameLocationNameGet) | **GET** /Location/Name/{locationName} | Get location by name
[**locationRequestUpdateLocationIdPost**](LocationApi.md#locationRequestUpdateLocationIdPost) | **POST** /Location/Request_Update/{locationId} | 


# **locationCreateLocationPost**
> MessageDto locationCreateLocationPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationCreateLocationPostRequest = {
  // boolean (optional)
  force: true,
  // CreateLocationDto | CreateLocationDto (optional)
  createLocationDto: {
    name: "name_example",
    description: "description_example",
    latitude: 3.14,
    longitude: 3.14,
    authorId: "authorId_example",
  },
};

apiInstance.locationCreateLocationPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLocationDto** | **CreateLocationDto**| CreateLocationDto |
 **force** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationDeleteLocationIdDelete**
> MessageDto locationDeleteLocationIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationDeleteLocationIdDeleteRequest = {
  // string | Id of deleted location
  locationId: "locationId_example",
};

apiInstance.locationDeleteLocationIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of deleted location | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationGameIdGameIdGet**
> Array<LocationDto> locationGameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGameIdGameIdGetRequest = {
  // string | Id of related game
  gameId: "gameId_example",
};

apiInstance.locationGameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of related game | defaults to undefined


### Return type

**Array<LocationDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationGameNameGameNameGet**
> Array<LocationDto> locationGameNameGameNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGameNameGameNameGetRequest = {
  // string | Name of related game
  gameName: "gameName_example",
};

apiInstance.locationGameNameGameNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameName** | [**string**] | Name of related game | defaults to undefined


### Return type

**Array<LocationDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationGet**
> Array<LocationDto> locationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGetRequest = {
  // number | Limit of location present in return (optional)
  limit: 1,
};

apiInstance.locationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Limit of location present in return | (optional) defaults to undefined


### Return type

**Array<LocationDto>**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationIdLocationIdGet**
> GetLocationDto locationIdLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationIdLocationIdGetRequest = {
  // string | Id of wanted location
  locationId: "locationId_example",
};

apiInstance.locationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of wanted location | defaults to undefined


### Return type

**GetLocationDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationLocationIdPost**
> MessageDto locationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationLocationIdPostRequest = {
  // string | Id of location to request an update
  locationId: "locationId_example",
  // LocationUpdateRequestDto | LocationUpdateRequestDto (optional)
  locationUpdateRequestDto: {
    locationId: "locationId_example",
    name: "name_example",
    description: "description_example",
    latitude: 3.14,
    longitude: 3.14,
  },
};

apiInstance.locationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationUpdateRequestDto** | **LocationUpdateRequestDto**| LocationUpdateRequestDto |
 **locationId** | [**string**] | Id of location to request an update | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationLocationIdPut**
> GetLocationDto locationLocationIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationLocationIdPutRequest = {
  // string | Id of location to update
  locationId: "locationId_example",
  // boolean | Bool -> Define if the update is due to an update request or not (optional)
  isRequestUpdate: true,
  // UpdateLocationDto | UpdateLocationDto (optional)
  updateLocationDto: {
    locationId: "locationId_example",
    name: "name_example",
    description: "description_example",
    latitude: 3.14,
    longitude: 3.14,
  },
};

apiInstance.locationLocationIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLocationDto** | **UpdateLocationDto**| UpdateLocationDto |
 **locationId** | [**string**] | Id of location to update | defaults to undefined
 **isRequestUpdate** | [**boolean**] | Bool -&gt; Define if the update is due to an update request or not | (optional) defaults to true


### Return type

**GetLocationDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationNameLocationNameGet**
> GetLocationDto locationNameLocationNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationNameLocationNameGetRequest = {
  // string | Name of wanted Location
  locationName: "locationName_example",
};

apiInstance.locationNameLocationNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | [**string**] | Name of wanted Location | defaults to undefined


### Return type

**GetLocationDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationRequestUpdateLocationIdPost**
> MessageDto locationRequestUpdateLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationRequestUpdateLocationIdPostRequest = {
  // string
  locationId: "locationId_example",
  // Array<HttpFile>
  files: [
    { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  ],
};

apiInstance.locationRequestUpdateLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **files** | **Array&lt;HttpFile&gt;** |  | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


