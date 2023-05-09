# .PictureApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pictureAddPictureToGameGameIdPost**](PictureApi.md#pictureAddPictureToGameGameIdPost) | **POST** /Picture/AddPictureToGame/{gameId} | 
[**pictureAddPictureToLocationLocationIdPost**](PictureApi.md#pictureAddPictureToLocationLocationIdPost) | **POST** /Picture/AddPictureToLocation/{locationId} | 
[**pictureDeletePicturePictureIdDelete**](PictureApi.md#pictureDeletePicturePictureIdDelete) | **DELETE** /Picture/DeletePicture/{pictureId} | 
[**pictureGetPicturesByGameIdGameIdGet**](PictureApi.md#pictureGetPicturesByGameIdGameIdGet) | **GET** /Picture/GetPicturesByGameId/{gameId} | 
[**pictureGetPicturesByLocationIdLocationIdGet**](PictureApi.md#pictureGetPicturesByLocationIdLocationIdGet) | **GET** /Picture/GetPicturesByLocationId/{locationId} | 


# **pictureAddPictureToGameGameIdPost**
> void pictureAddPictureToGameGameIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureAddPictureToGameGameIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  description: "description_example",
  // HttpFile (optional)
  pictureData: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.pictureAddPictureToGameGameIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **pictureData** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pictureAddPictureToLocationLocationIdPost**
> void pictureAddPictureToLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureAddPictureToLocationLocationIdPostRequest = {
  // string
  locationId: "locationId_example",
  // string (optional)
  name: "name_example",
  // string (optional)
  description: "description_example",
  // HttpFile (optional)
  pictureData: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.pictureAddPictureToLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **name** | [**string**] |  | (optional) defaults to undefined
 **description** | [**string**] |  | (optional) defaults to undefined
 **pictureData** | [**HttpFile**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pictureDeletePicturePictureIdDelete**
> void pictureDeletePicturePictureIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureDeletePicturePictureIdDeleteRequest = {
  // string
  pictureId: "pictureId_example",
};

apiInstance.pictureDeletePicturePictureIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pictureId** | [**string**] |  | defaults to undefined


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

# **pictureGetPicturesByGameIdGameIdGet**
> Array<ListPictureDto> pictureGetPicturesByGameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureGetPicturesByGameIdGameIdGetRequest = {
  // string
  gameId: "gameId_example",
};

apiInstance.pictureGetPicturesByGameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListPictureDto>**

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

# **pictureGetPicturesByLocationIdLocationIdGet**
> Array<ListPictureDto> pictureGetPicturesByLocationIdLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureGetPicturesByLocationIdLocationIdGetRequest = {
  // string
  locationId: "locationId_example",
};

apiInstance.pictureGetPicturesByLocationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListPictureDto>**

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


