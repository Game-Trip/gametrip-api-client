# .LikeApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**likeAddLikeToGamePost**](LikeApi.md#likeAddLikeToGamePost) | **POST** /Like/AddLikeToGame | 
[**likeAddLikeToLocationPost**](LikeApi.md#likeAddLikeToLocationPost) | **POST** /Like/AddLikeToLocation | 
[**likeAllLikedGamesGet**](LikeApi.md#likeAllLikedGamesGet) | **GET** /Like/AllLikedGames | 
[**likeAllLikedLocationsGet**](LikeApi.md#likeAllLikedLocationsGet) | **GET** /Like/AllLikedLocations | 
[**likeLikedGamesUserIdGet**](LikeApi.md#likeLikedGamesUserIdGet) | **GET** /Like/LikedGames/{userId} | 
[**likeLikedLocationsUserIdGet**](LikeApi.md#likeLikedLocationsUserIdGet) | **GET** /Like/LikedLocations/{userId} | 
[**likeRemoveLikeToGameGameIdUserIdPost**](LikeApi.md#likeRemoveLikeToGameGameIdUserIdPost) | **POST** /Like/RemoveLikeToGame/{gameId}/{userId} | Remove Like from Location
[**likeRemoveLikeToLocationLocationIdUserIdPost**](LikeApi.md#likeRemoveLikeToLocationLocationIdUserIdPost) | **POST** /Like/RemoveLikeToLocation/{locationId}/{userId} | Remove Like from Location


# **likeAddLikeToGamePost**
> LikedLocationDto likeAddLikeToGamePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeAddLikeToGamePostRequest = {
  // AddLikeGameDto (optional)
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
 **addLikeGameDto** | **AddLikeGameDto**|  |


### Return type

**LikedLocationDto**

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

# **likeAddLikeToLocationPost**
> LikedLocationDto likeAddLikeToLocationPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeAddLikeToLocationPostRequest = {
  // AddLikeLocationDto (optional)
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
 **addLikeLocationDto** | **AddLikeLocationDto**|  |


### Return type

**LikedLocationDto**

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
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **likeAllLikedLocationsGet**
> Array<LikedLocationDto> likeAllLikedLocationsGet()


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

**Array<LikedLocationDto>**

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

# **likeLikedGamesUserIdGet**
> Array<ListLikedLocationDto> likeLikedGamesUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeLikedGamesUserIdGetRequest = {
  // string
  userId: "userId_example",
};

apiInstance.likeLikedGamesUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListLikedLocationDto>**

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

# **likeLikedLocationsUserIdGet**
> Array<ListLikedLocationDto> likeLikedLocationsUserIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeLikedLocationsUserIdGetRequest = {
  // string
  userId: "userId_example",
};

apiInstance.likeLikedLocationsUserIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**Array<ListLikedLocationDto>**

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

# **likeRemoveLikeToGameGameIdUserIdPost**
> void | LikedLocationDto likeRemoveLikeToGameGameIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest = {
  // string
  gameId: "gameId_example",
  // string
  userId: "userId_example",
};

apiInstance.likeRemoveLikeToGameGameIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**void | LikedLocationDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Game provided did not have like from any users |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **likeRemoveLikeToLocationLocationIdUserIdPost**
> void | LikedLocationDto likeRemoveLikeToLocationLocationIdUserIdPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LikeApi(configuration);

let body:.LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest = {
  // string
  locationId: "locationId_example",
  // string
  userId: "userId_example",
};

apiInstance.likeRemoveLikeToLocationLocationIdUserIdPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | defaults to undefined


### Return type

**void | LikedLocationDto**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Location provided did not have like from any users |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


