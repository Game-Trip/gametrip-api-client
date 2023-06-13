# .LikeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**likeAddLikeToGamePost**](LikeApi.md#likeAddLikeToGamePost) | **POST** /Like/AddLikeToGame | Add like to game
[**likeAddLikeToLocationPost**](LikeApi.md#likeAddLikeToLocationPost) | **POST** /Like/AddLikeToLocation | Add like to location
[**likeAllLikedGamesGet**](LikeApi.md#likeAllLikedGamesGet) | **GET** /Like/AllLikedGames | Get all liked games
[**likeAllLikedLocationsGet**](LikeApi.md#likeAllLikedLocationsGet) | **GET** /Like/AllLikedLocations | Get all liked location
[**likeLikedGamesUserIdGet**](LikeApi.md#likeLikedGamesUserIdGet) | **GET** /Like/LikedGames/{userId} | Get all liked game by user id
[**likeLikedLocationsUserIdGet**](LikeApi.md#likeLikedLocationsUserIdGet) | **GET** /Like/LikedLocations/{userId} | Get all liked location by user id
[**likeRemoveLikeToGameGameIdUserIdPost**](LikeApi.md#likeRemoveLikeToGameGameIdUserIdPost) | **POST** /Like/RemoveLikeToGame/{gameId}/{userId} | Remove Like to game
[**likeRemoveLikeToLocationLocationIdUserIdPost**](LikeApi.md#likeRemoveLikeToLocationLocationIdUserIdPost) | **POST** /Like/RemoveLikeToLocation/{locationId}/{userId} | Remove like to location


# **likeAddLikeToGamePost**
> LikedGameDto likeAddLikeToGamePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeAddLikeToGamePostRequest = {
  // AddLikeGameDto | AddLikeGame (optional)
  addLikeGameDto: {
    gameId: "gameId_example",
    userId: "userId_example",
    value: 3.14,
  },
};

apiInstance.likeAddLikeToGamePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLikeGameDto** | **AddLikeGameDto**| AddLikeGame |


### Return type

**LikedGameDto**

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

# **likeAddLikeToLocationPost**
> LikedLocationDto likeAddLikeToLocationPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeAddLikeToLocationPostRequest = {
  // AddLikeLocationDto | AddLikeLocationDto (optional)
  addLikeLocationDto: {
    locationId: "locationId_example",
    userId: "userId_example",
    value: 3.14,
  },
};

apiInstance.likeAddLikeToLocationPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addLikeLocationDto** | **AddLikeLocationDto**| AddLikeLocationDto |


### Return type

**LikedLocationDto**

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

# **likeAllLikedGamesGet**
> Array<LikedGameDto> likeAllLikedGamesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:any = {};

apiInstance.likeAllLikedGamesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LikedGameDto>**

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

# **likeAllLikedLocationsGet**
> Array<ListLikedLocationDto> likeAllLikedLocationsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:any = {};

apiInstance.likeAllLikedLocationsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<ListLikedLocationDto>**

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

# **likeLikedGamesUserIdGet**
> Array<ListLikedGameDto> likeLikedGamesUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeLikedGamesUserIdGetRequest = {
  // string | Id of user who liked games
  userId: "userId_example",
};

apiInstance.likeLikedGamesUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | Id of user who liked games | defaults to undefined


### Return type

**Array<ListLikedGameDto>**

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

# **likeLikedLocationsUserIdGet**
> Array<ListLikedLocationDto> likeLikedLocationsUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeLikedLocationsUserIdGetRequest = {
  // string | Id of user who liked all getted location
  userId: "userId_example",
};

apiInstance.likeLikedLocationsUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | Id of user who liked all getted location | defaults to undefined


### Return type

**Array<ListLikedLocationDto>**

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

# **likeRemoveLikeToGameGameIdUserIdPost**
> LikedGameDto likeRemoveLikeToGameGameIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest = {
  // string | Id of game to remove like
  gameId: "gameId_example",
  // string | Id of user who liked Game
  userId: "userId_example",
};

apiInstance.likeRemoveLikeToGameGameIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] | Id of game to remove like | defaults to undefined
 **userId** | [**string**] | Id of user who liked Game | defaults to undefined


### Return type

**LikedGameDto**

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

# **likeRemoveLikeToLocationLocationIdUserIdPost**
> LikedLocationDto likeRemoveLikeToLocationLocationIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest = {
  // string | id of liked location
  locationId: "locationId_example",
  // string | id of user who liked location
  userId: "userId_example",
};

apiInstance.likeRemoveLikeToLocationLocationIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | id of liked location | defaults to undefined
 **userId** | [**string**] | id of user who liked location | defaults to undefined


### Return type

**LikedLocationDto**

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


