# .GameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameAddGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameAddGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/AddGameToLocation/Game/{gameId}/Location/{locationId} | 
[**gameCreateGamePost**](GameApi.md#gameCreateGamePost) | **POST** /Game/CreateGame | 
[**gameDeleteGameIdDelete**](GameApi.md#gameDeleteGameIdDelete) | **DELETE** /Game/Delete/{gameId} | 
[**gameGameIdPut**](GameApi.md#gameGameIdPut) | **PUT** /Game/{gameId} | 
[**gameGet**](GameApi.md#gameGet) | **GET** /Game | 
[**gameIdGameIdGet**](GameApi.md#gameIdGameIdGet) | **GET** /Game/Id/{gameId} | 
[**gameLocationIdLocationIdGet**](GameApi.md#gameLocationIdLocationIdGet) | **GET** /Game/Location/Id/{locationId} | 
[**gameLocationNameLocationNameGet**](GameApi.md#gameLocationNameLocationNameGet) | **GET** /Game/Location/Name/{locationName} | 
[**gameNameGameNameGet**](GameApi.md#gameNameGameNameGet) | **GET** /Game/Name/{gameName} | 
[**gameRemoveGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameRemoveGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/RemoveGameToLocation/Game/{gameId}/Location/{locationId} | 


# **gameAddGameToLocationGameGameIdLocationLocationIdPost**
> void gameAddGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string
  locationId: "locationId_example",
};

apiInstance.gameAddGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined
 **locationId** | [**string**] |  | defaults to undefined


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

# **gameCreateGamePost**
> Game gameCreateGamePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameCreateGamePostRequest = {
  // CreateGameDto (optional)
  createGameDto: {
    name: "name_example",
    description: "description_example",
    editor: "editor_example",
    releaseDate: 1,
  },
};

apiInstance.gameCreateGamePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGameDto** | **CreateGameDto**|  |


### Return type

**Game**

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

# **gameDeleteGameIdDelete**
> void gameDeleteGameIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameDeleteGameIdDeleteRequest = {
  // string
  gameId: "gameId_example",
};

apiInstance.gameDeleteGameIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined


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

# **gameGameIdPut**
> GameDto gameGameIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameGameIdPutRequest = {
  // string
  gameId: "gameId_example",
  // UpdateGameDto (optional)
  updateGameDto: {
    gameId: "gameId_example",
    name: "name_example",
    description: "description_example",
    editor: "editor_example",
    releaseDate: 1,
  },
};

apiInstance.gameGameIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateGameDto** | **UpdateGameDto**|  |
 **gameId** | [**string**] |  | defaults to undefined


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

# **gameGet**
> Array<ListGameDto> gameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameGetRequest = {
  // number (optional)
  limit: 1,
};

apiInstance.gameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] |  | (optional) defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameIdGameIdGet**
> GameDto gameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameIdGameIdGetRequest = {
  // string
  gameId: "gameId_example",
};

apiInstance.gameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined


### Return type

**GameDto**

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

# **gameLocationIdLocationIdGet**
> Array<ListGameDto> gameLocationIdLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameLocationIdLocationIdGetRequest = {
  // string
  locationId: "locationId_example",
};

apiInstance.gameLocationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameLocationNameLocationNameGet**
> Array<ListGameDto> gameLocationNameLocationNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameLocationNameLocationNameGetRequest = {
  // string
  locationName: "locationName_example",
};

apiInstance.gameLocationNameLocationNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | [**string**] |  | defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameNameGameNameGet**
> GameDto gameNameGameNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameNameGameNameGetRequest = {
  // string
  gameName: "gameName_example",
};

apiInstance.gameNameGameNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameName** | [**string**] |  | defaults to undefined


### Return type

**GameDto**

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

# **gameRemoveGameToLocationGameGameIdLocationLocationIdPost**
> void gameRemoveGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string
  locationId: "locationId_example",
};

apiInstance.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined
 **locationId** | [**string**] |  | defaults to undefined


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


