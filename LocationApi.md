# .LocationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationCreateLocationPost**](LocationApi.md#locationCreateLocationPost) | **POST** /Location/CreateLocation | 
[**locationDeleteLocationIdDelete**](LocationApi.md#locationDeleteLocationIdDelete) | **DELETE** /Location/Delete/{locationId} | 
[**locationGameIdGameIdGet**](LocationApi.md#locationGameIdGameIdGet) | **GET** /Location/Game/Id/{gameId} | 
[**locationGameNameGameNameGet**](LocationApi.md#locationGameNameGameNameGet) | **GET** /Location/Game/Name/{gameName} | 
[**locationGet**](LocationApi.md#locationGet) | **GET** /Location | 
[**locationIdLocationIdGet**](LocationApi.md#locationIdLocationIdGet) | **GET** /Location/Id/{locationId} | 
[**locationLocationIdPut**](LocationApi.md#locationLocationIdPut) | **PUT** /Location/{locationId} | 
[**locationNameLocationNameGet**](LocationApi.md#locationNameLocationNameGet) | **GET** /Location/Name/{locationName} | 


# **locationCreateLocationPost**
> void locationCreateLocationPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationCreateLocationPostRequest = {
  // CreateLocationDto (optional)
  createLocationDto: {
    name: "name_example",
    description: "description_example",
    latitude: 3.14,
    longitude: 3.14,
  },
};

apiInstance.locationCreateLocationPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createLocationDto** | **CreateLocationDto**|  |


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

# **locationDeleteLocationIdDelete**
> Location locationDeleteLocationIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationDeleteLocationIdDeleteRequest = {
  // string
  locationId: "locationId_example",
};

apiInstance.locationDeleteLocationIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined


### Return type

**Location**

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

# **locationGameIdGameIdGet**
> Array<LocationDto> locationGameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGameIdGameIdGetRequest = {
  // string
  gameId: "gameId_example",
};

apiInstance.locationGameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined


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

# **locationGameNameGameNameGet**
> Array<LocationDto> locationGameNameGameNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGameNameGameNameGetRequest = {
  // string
  gameName: "gameName_example",
};

apiInstance.locationGameNameGameNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameName** | [**string**] |  | defaults to undefined


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

# **locationGet**
> Array<LocationDto> locationGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationGetRequest = {
  // number (optional)
  limit: 1,
};

apiInstance.locationGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined


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
  // string
  locationId: "locationId_example",
};

apiInstance.locationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **locationLocationIdPut**
> GameDto locationLocationIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationLocationIdPutRequest = {
  // string
  locationId: "locationId_example",
  // UpdateLocationDto (optional)
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
 **updateLocationDto** | **UpdateLocationDto**|  |
 **locationId** | [**string**] |  | defaults to undefined


### Return type

**GameDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

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
  // string
  locationName: "locationName_example",
};

apiInstance.locationNameLocationNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | [**string**] |  | defaults to undefined


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


