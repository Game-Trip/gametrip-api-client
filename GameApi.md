# .GameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameAddGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameAddGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/AddGameToLocation/Game/{gameId}/Location/{locationId} | Add Game to Location by Game Id and Location Id
[**gameCreateGamePost**](GameApi.md#gameCreateGamePost) | **POST** /Game/CreateGame | Create new Game
[**gameDeleteGameIdDelete**](GameApi.md#gameDeleteGameIdDelete) | **DELETE** /Game/Delete/{gameId} | Delete Game by Id
[**gameDeleteRequestUpdateRequestUpdateIdDelete**](GameApi.md#gameDeleteRequestUpdateRequestUpdateIdDelete) | **DELETE** /Game/DeleteRequestUpdate/{requestUpdateId} | Request Update Game by Id
[**gameGameIdPost**](GameApi.md#gameGameIdPost) | **POST** /Game/{gameId} | Make a request to update a game
[**gameGameIdPut**](GameApi.md#gameGameIdPut) | **PUT** /Game/{gameId} | Update Game
[**gameGet**](GameApi.md#gameGet) | **GET** /Game | Get All Games
[**gameIdGameIdGet**](GameApi.md#gameIdGameIdGet) | **GET** /Game/Id/{gameId} | Get Game by Id
[**gameLocationIdLocationIdGet**](GameApi.md#gameLocationIdLocationIdGet) | **GET** /Game/Location/Id/{locationId} | Get all Games by related location id
[**gameLocationNameLocationNameGet**](GameApi.md#gameLocationNameLocationNameGet) | **GET** /Game/Location/Name/{locationName} | Get all Games by related location name
[**gameNameGameNameGet**](GameApi.md#gameNameGameNameGet) | **GET** /Game/Name/{gameName} | Get Game by Name
[**gameRemoveGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameRemoveGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/RemoveGameToLocation/Game/{gameId}/Location/{locationId} | Remove Game from Location by Game Id and Location Id
[**gameRequestAddGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameRequestAddGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/RequestAddGameToLocation/Game/{gameId}/Location/{locationId} | Create request to Add Game to Location by Game Id and Location Id
[**gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost**](GameApi.md#gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost) | **POST** /Game/RequestToRemoveGameToLocation/Game/{gameId}/Location/{locationId} | Create request to remove Game from Location by Game Id and Location Id
[**gameRequestUpdateGameIdGet**](GameApi.md#gameRequestUpdateGameIdGet) | **GET** /Game/Request_Update/{gameId} | Get game with all request update


# **gameAddGameToLocationGameGameIdLocationLocationIdPost**
> MessageDto gameAddGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string | Id of added Game
  gameId: "gameId_example",
  // string | Id of location to add Game
  locationId: "locationId_example",
};

apiInstance.gameAddGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of added Game | defaults to undefined
 **locationId** | [**string**] | Id of location to add Game | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameCreateGamePost**
> MessageDto gameCreateGamePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameCreateGamePostRequest = {
  // boolean (optional)
  force: true,
  // CreateGameDto | CreateGameDto (optional)
  createGameDto: {
    name: "name_example",
    description: "description_example",
    editor: "editor_example",
    releaseDate: 1,
    authorId: "authorId_example",
  },
};

apiInstance.gameCreateGamePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGameDto** | **CreateGameDto**| CreateGameDto |
 **force** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**MessageDto**

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

# **gameDeleteGameIdDelete**
> MessageDto gameDeleteGameIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameDeleteGameIdDeleteRequest = {
  // string | Id of deleted Game
  gameId: "gameId_example",
};

apiInstance.gameDeleteGameIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of deleted Game | defaults to undefined


### Return type

**MessageDto**

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

# **gameDeleteRequestUpdateRequestUpdateIdDelete**
> MessageDto gameDeleteRequestUpdateRequestUpdateIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameDeleteRequestUpdateRequestUpdateIdDeleteRequest = {
  // string | Id of request UpdateId Game
  requestUpdateId: "requestUpdateId_example",
};

apiInstance.gameDeleteRequestUpdateRequestUpdateIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestUpdateId** | [**string**] | Id of request UpdateId Game | defaults to undefined


### Return type

**MessageDto**

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

# **gameGameIdPost**
> MessageDto gameGameIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameGameIdPostRequest = {
  // string | Id of game to request an update
  gameId: "gameId_example",
  // GameUpdateRequestDto | GameUpdateRequestDto (optional)
  gameUpdateRequestDto: {
    gameId: "gameId_example",
    name: "name_example",
    description: "description_example",
    editor: "editor_example",
    releaseDate: 1,
  },
};

apiInstance.gameGameIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameUpdateRequestDto** | **GameUpdateRequestDto**| GameUpdateRequestDto |
 **gameId** | [**string**] | Id of game to request an update | defaults to undefined


### Return type

**MessageDto**

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

# **gameGameIdPut**
> GameDto gameGameIdPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameGameIdPutRequest = {
  // string | Id of game to update
  gameId: "gameId_example",
  // string | If used, this means that the update is performed following validation of a request (optional)
  requestUpdateId: "requestUpdateId_example",
  // UpdateGameDto | UpdateGameDto (optional)
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
 **updateGameDto** | **UpdateGameDto**| UpdateGameDto |
 **gameId** | [**string**] | Id of game to update | defaults to undefined
 **requestUpdateId** | [**string**] | If used, this means that the update is performed following validation of a request | (optional) defaults to undefined


### Return type

**GameDto**

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

# **gameGet**
> Array<ListGameDto> gameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameGetRequest = {
  // number | Set the limit of number items return (optional)
  limit: 1,
};

apiInstance.gameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Set the limit of number items return | (optional) defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameIdGameIdGet**
> GameDto gameIdGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameIdGameIdGetRequest = {
  // string | Id of Game
  gameId: "gameId_example",
};

apiInstance.gameIdGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of Game | defaults to undefined


### Return type

**GameDto**

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

# **gameLocationIdLocationIdGet**
> Array<ListGameDto> gameLocationIdLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameLocationIdLocationIdGetRequest = {
  // string | Id of related location
  locationId: "locationId_example",
};

apiInstance.gameLocationIdLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of related location | defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameLocationNameLocationNameGet**
> Array<ListGameDto> gameLocationNameLocationNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameLocationNameLocationNameGetRequest = {
  // string | Name of related location
  locationName: "locationName_example",
};

apiInstance.gameLocationNameLocationNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationName** | [**string**] | Name of related location | defaults to undefined


### Return type

**Array<ListGameDto>**

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

# **gameNameGameNameGet**
> GameDto gameNameGameNameGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameNameGameNameGetRequest = {
  // string | Name of Game
  gameName: "gameName_example",
};

apiInstance.gameNameGameNameGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameName** | [**string**] | Name of Game | defaults to undefined


### Return type

**GameDto**

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

# **gameRemoveGameToLocationGameGameIdLocationLocationIdPost**
> MessageDto gameRemoveGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string | Id of removed Game
  gameId: "gameId_example",
  // string | Id of location to remove Game
  locationId: "locationId_example",
};

apiInstance.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of removed Game | defaults to undefined
 **locationId** | [**string**] | Id of location to remove Game | defaults to undefined


### Return type

**MessageDto**

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

# **gameRequestAddGameToLocationGameGameIdLocationLocationIdPost**
> MessageDto gameRequestAddGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameRequestAddGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string | Id of added Game
  gameId: "gameId_example",
  // string | Id of location to add Game
  locationId: "locationId_example",
};

apiInstance.gameRequestAddGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of added Game | defaults to undefined
 **locationId** | [**string**] | Id of location to add Game | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost**
> MessageDto gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPostRequest = {
  // string | Id of removed Game
  gameId: "gameId_example",
  // string | Id of location to remove Game
  locationId: "locationId_example",
};

apiInstance.gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of removed Game | defaults to undefined
 **locationId** | [**string**] | Id of location to remove Game | defaults to undefined


### Return type

**MessageDto**

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

# **gameRequestUpdateGameIdGet**
> MessageDto gameRequestUpdateGameIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GameApi(configuration);

let body:.GameApiGameRequestUpdateGameIdGetRequest = {
  // string | Id of game wanted
  gameId: "gameId_example",
};

apiInstance.gameRequestUpdateGameIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of game wanted | defaults to undefined


### Return type

**MessageDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/Json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


