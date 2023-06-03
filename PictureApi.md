# .PictureApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pictureAddPictureToGameGameIdUserIdPost**](PictureApi.md#pictureAddPictureToGameGameIdUserIdPost) | **POST** /Picture/AddPictureToGame/{gameId}/{userId} | Create and Add picture to Game
[**pictureAddPictureToLocationLocationIdUserIdPost**](PictureApi.md#pictureAddPictureToLocationLocationIdUserIdPost) | **POST** /Picture/AddPictureToLocation/{locationId}/{userId} | Create and add picture to location
[**pictureDeletePicturePictureIdDelete**](PictureApi.md#pictureDeletePicturePictureIdDelete) | **DELETE** /Picture/DeletePicture/{pictureId} | Get picture by id
[**pictureGetPicturesByGameIdGameIdGet**](PictureApi.md#pictureGetPicturesByGameIdGameIdGet) | **GET** /Picture/GetPicturesByGameId/{gameId} | Get all pictures of game
[**pictureGetPicturesByLocationIdLocationIdGet**](PictureApi.md#pictureGetPicturesByLocationIdLocationIdGet) | **GET** /Picture/GetPicturesByLocationId/{locationId} | Get all pictures of location


# **pictureAddPictureToGameGameIdUserIdPost**
> MessageDto pictureAddPictureToGameGameIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureAddPictureToGameGameIdUserIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string
  userId: "userId_example",
  // boolean (optional)
  force: true,
  // AddPictureToGameDto (optional)
  addPictureToGameDto: {
    pictureId: "pictureId_example",
    name: "name_example",
    description: "description_example",
    gameId: "gameId_example",
    pictureData: 'YQ==',
    authorId: "authorId_example",
  },
};

apiInstance.pictureAddPictureToGameGameIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPictureToGameDto** | **AddPictureToGameDto**|  |
 **gameId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pictureAddPictureToLocationLocationIdUserIdPost**
> MessageDto pictureAddPictureToLocationLocationIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureAddPictureToLocationLocationIdUserIdPostRequest = {
  // string
  locationId: "locationId_example",
  // string
  userId: "userId_example",
  // boolean (optional)
  force: true,
  // AddPictureToLocationDto (optional)
  addPictureToLocationDto: {
    pictureId: "pictureId_example",
    name: "name_example",
    description: "description_example",
    locationId: "locationId_example",
    pictureData: 'YQ==',
    authorId: "authorId_example",
  },
};

apiInstance.pictureAddPictureToLocationLocationIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPictureToLocationDto** | **AddPictureToLocationDto**|  |
 **locationId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined
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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pictureDeletePicturePictureIdDelete**
> MessageDto pictureDeletePicturePictureIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureDeletePicturePictureIdDeleteRequest = {
  // string | Id of deleted Picture
  pictureId: "pictureId_example",
};

apiInstance.pictureDeletePicturePictureIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pictureId** | [**string**] | Id of deleted Picture | defaults to undefined


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

# **pictureGetPicturesByGameIdGameIdGet**
> Array<ListPictureDto> pictureGetPicturesByGameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PictureApi(configuration);

let body:.PictureApiPictureGetPicturesByGameIdGameIdGetRequest = {
  // string | Id of game
  gameId: "gameId_example",
};

apiInstance.pictureGetPicturesByGameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of game | defaults to undefined


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
**404** | Not Found |  -  |

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
  // string | Id of location
  locationId: "locationId_example",
};

apiInstance.pictureGetPicturesByLocationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of location | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


