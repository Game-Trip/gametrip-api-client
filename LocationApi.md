# .LocationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**locationCreateLocationPost**](LocationApi.md#locationCreateLocationPost) | **POST** /Location/CreateLocation | Create new location
[**locationDeleteLocationIdDelete**](LocationApi.md#locationDeleteLocationIdDelete) | **DELETE** /Location/Delete/{locationId} | Delete location by id
[**locationDeleteRequestUpdateRequestUpdateIdDelete**](LocationApi.md#locationDeleteRequestUpdateRequestUpdateIdDelete) | **DELETE** /Location/DeleteRequestUpdate/{requestUpdateId} | Request Update Game by Id
[**locationGameIdGameIdGet**](LocationApi.md#locationGameIdGameIdGet) | **GET** /Location/Game/Id/{gameId} | Get all location by game id
[**locationGameNameGameNameGet**](LocationApi.md#locationGameNameGameNameGet) | **GET** /Location/Game/Name/{gameName} | Get all location by game name
[**locationGet**](LocationApi.md#locationGet) | **GET** /Location | Get all locations
[**locationIdLocationIdGet**](LocationApi.md#locationIdLocationIdGet) | **GET** /Location/Id/{locationId} | Get location by id
[**locationLocationIdPost**](LocationApi.md#locationLocationIdPost) | **POST** /Location/{locationId} | Make a request to update a location
[**locationLocationIdPut**](LocationApi.md#locationLocationIdPut) | **PUT** /Location/{locationId} | Update location -&gt; For Admin only
[**locationNameLocationNameGet**](LocationApi.md#locationNameLocationNameGet) | **GET** /Location/Name/{locationName} | Get location by name
[**locationRequestUpdateLocationIdGet**](LocationApi.md#locationRequestUpdateLocationIdGet) | **GET** /Location/Request_Update/{locationId} | Get location with all request update


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

# **locationDeleteRequestUpdateRequestUpdateIdDelete**
> MessageDto locationDeleteRequestUpdateRequestUpdateIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationDeleteRequestUpdateRequestUpdateIdDeleteRequest = {
  // string | Id of request UpdateId Game
  requestUpdateId: "requestUpdateId_example",
};

apiInstance.locationDeleteRequestUpdateRequestUpdateIdDelete(body).then((data:any) => {
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
    idGame: "idGame_example",
    game: {
      idGame: "idGame_example",
      name: "name_example",
      description: "description_example",
      editor: "editor_example",
      releaseDate: 1,
      isValidate: true,
      authorId: "authorId_example",
      author: {
        id: "id_example",
        userName: "userName_example",
        normalizedUserName: "normalizedUserName_example",
        email: "email_example",
        normalizedEmail: "normalizedEmail_example",
        emailConfirmed: true,
        passwordHash: "passwordHash_example",
        securityStamp: "securityStamp_example",
        concurrencyStamp: "concurrencyStamp_example",
        phoneNumber: "phoneNumber_example",
        phoneNumberConfirmed: true,
        twoFactorEnabled: true,
        lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
        lockoutEnabled: true,
        accessFailedCount: 1,
        createdGame: [
          ,
        ],
        createdLocation: [
          {
            idLocation: "idLocation_example",
            name: "name_example",
            description: "description_example",
            latitude: 3.14,
            longitude: 3.14,
            isValid: true,
            authorId: "authorId_example",
            author: ,
            pictures: [
              {
                idPicture: "idPicture_example",
                name: "name_example",
                description: "description_example",
                data: 'YQ==',
                locationId: "locationId_example",
                location: ,
                gameId: "gameId_example",
                game: ,
                isValidate: true,
                authorId: "authorId_example",
                author: ,
              },
            ],
            games: [
              ,
            ],
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: ,
                locationId: "locationId_example",
                location: ,
                isValidate: true,
              },
            ],
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: ,
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
            requestLocationUpdates: [
              {
                idRequestLocationUpdate: "idRequestLocationUpdate_example",
                locationId: "locationId_example",
                location: ,
                name: "name_example",
                description: "description_example",
                latitude: 3.14,
                longitude: 3.14,
                idPicture: "idPicture_example",
                picture: {
                  idPicture: "idPicture_example",
                  name: "name_example",
                  description: "description_example",
                  data: 'YQ==',
                  locationId: "locationId_example",
                  location: ,
                  gameId: "gameId_example",
                  game: ,
                  isValidate: true,
                  authorId: "authorId_example",
                  author: ,
                },
                isAddedPicture: true,
                idGame: "idGame_example",
                game: ,
                isAddedGame: true,
              },
            ],
          },
        ],
        createdPictures: [
          {
            idPicture: "idPicture_example",
            name: "name_example",
            description: "description_example",
            data: 'YQ==',
            locationId: "locationId_example",
            location: {
              idLocation: "idLocation_example",
              name: "name_example",
              description: "description_example",
              latitude: 3.14,
              longitude: 3.14,
              isValid: true,
              authorId: "authorId_example",
              author: ,
              pictures: null,
              games: [
                ,
              ],
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: ,
                  locationId: "locationId_example",
                  location: ,
                  isValidate: true,
                },
              ],
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
              requestLocationUpdates: [
                {
                  idRequestLocationUpdate: "idRequestLocationUpdate_example",
                  locationId: "locationId_example",
                  location: ,
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  idPicture: "idPicture_example",
                  picture: ,
                  isAddedPicture: true,
                  idGame: "idGame_example",
                  game: ,
                  isAddedGame: true,
                },
              ],
            },
            gameId: "gameId_example",
            game: ,
            isValidate: true,
            authorId: "authorId_example",
            author: ,
          },
        ],
        comments: [
          {
            idComment: "idComment_example",
            text: "text_example",
            userId: "userId_example",
            user: ,
            locationId: "locationId_example",
            location: {
              idLocation: "idLocation_example",
              name: "name_example",
              description: "description_example",
              latitude: 3.14,
              longitude: 3.14,
              isValid: true,
              authorId: "authorId_example",
              author: ,
              pictures: [
                {
                  idPicture: "idPicture_example",
                  name: "name_example",
                  description: "description_example",
                  data: 'YQ==',
                  locationId: "locationId_example",
                  location: ,
                  gameId: "gameId_example",
                  game: ,
                  isValidate: true,
                  authorId: "authorId_example",
                  author: ,
                },
              ],
              games: [
                ,
              ],
              comments: null,
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
              requestLocationUpdates: [
                {
                  idRequestLocationUpdate: "idRequestLocationUpdate_example",
                  locationId: "locationId_example",
                  location: ,
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  idPicture: "idPicture_example",
                  picture: {
                    idPicture: "idPicture_example",
                    name: "name_example",
                    description: "description_example",
                    data: 'YQ==',
                    locationId: "locationId_example",
                    location: ,
                    gameId: "gameId_example",
                    game: ,
                    isValidate: true,
                    authorId: "authorId_example",
                    author: ,
                  },
                  isAddedPicture: true,
                  idGame: "idGame_example",
                  game: ,
                  isAddedGame: true,
                },
              ],
            },
            isValidate: true,
          },
        ],
        likedGames: [
          {
            idLikedGame: "idLikedGame_example",
            gameId: "gameId_example",
            game: ,
            userId: "userId_example",
            user: ,
            vote: 3.14,
          },
        ],
        likedLocations: [
          {
            idLikedLocation: "idLikedLocation_example",
            locationId: "locationId_example",
            location: {
              idLocation: "idLocation_example",
              name: "name_example",
              description: "description_example",
              latitude: 3.14,
              longitude: 3.14,
              isValid: true,
              authorId: "authorId_example",
              author: ,
              pictures: [
                {
                  idPicture: "idPicture_example",
                  name: "name_example",
                  description: "description_example",
                  data: 'YQ==',
                  locationId: "locationId_example",
                  location: ,
                  gameId: "gameId_example",
                  game: ,
                  isValidate: true,
                  authorId: "authorId_example",
                  author: ,
                },
              ],
              games: [
                ,
              ],
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: ,
                  locationId: "locationId_example",
                  location: ,
                  isValidate: true,
                },
              ],
              likedLocations: null,
              requestLocationUpdates: [
                {
                  idRequestLocationUpdate: "idRequestLocationUpdate_example",
                  locationId: "locationId_example",
                  location: ,
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  idPicture: "idPicture_example",
                  picture: {
                    idPicture: "idPicture_example",
                    name: "name_example",
                    description: "description_example",
                    data: 'YQ==',
                    locationId: "locationId_example",
                    location: ,
                    gameId: "gameId_example",
                    game: ,
                    isValidate: true,
                    authorId: "authorId_example",
                    author: ,
                  },
                  isAddedPicture: true,
                  idGame: "idGame_example",
                  game: ,
                  isAddedGame: true,
                },
              ],
            },
            userId: "userId_example",
            user: ,
            vote: 3.14,
          },
        ],
      },
      locations: [
        {
          idLocation: "idLocation_example",
          name: "name_example",
          description: "description_example",
          latitude: 3.14,
          longitude: 3.14,
          isValid: true,
          authorId: "authorId_example",
          author: {
            id: "id_example",
            userName: "userName_example",
            normalizedUserName: "normalizedUserName_example",
            email: "email_example",
            normalizedEmail: "normalizedEmail_example",
            emailConfirmed: true,
            passwordHash: "passwordHash_example",
            securityStamp: "securityStamp_example",
            concurrencyStamp: "concurrencyStamp_example",
            phoneNumber: "phoneNumber_example",
            phoneNumberConfirmed: true,
            twoFactorEnabled: true,
            lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
            lockoutEnabled: true,
            accessFailedCount: 1,
            createdGame: [
              ,
            ],
            createdLocation: null,
            createdPictures: [
              {
                idPicture: "idPicture_example",
                name: "name_example",
                description: "description_example",
                data: 'YQ==',
                locationId: "locationId_example",
                location: ,
                gameId: "gameId_example",
                game: ,
                isValidate: true,
                authorId: "authorId_example",
                author: ,
              },
            ],
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: ,
                locationId: "locationId_example",
                location: ,
                isValidate: true,
              },
            ],
            likedGames: [
              {
                idLikedGame: "idLikedGame_example",
                gameId: "gameId_example",
                game: ,
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: ,
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
          },
          pictures: [
            {
              idPicture: "idPicture_example",
              name: "name_example",
              description: "description_example",
              data: 'YQ==',
              locationId: "locationId_example",
              location: ,
              gameId: "gameId_example",
              game: ,
              isValidate: true,
              authorId: "authorId_example",
              author: {
                id: "id_example",
                userName: "userName_example",
                normalizedUserName: "normalizedUserName_example",
                email: "email_example",
                normalizedEmail: "normalizedEmail_example",
                emailConfirmed: true,
                passwordHash: "passwordHash_example",
                securityStamp: "securityStamp_example",
                concurrencyStamp: "concurrencyStamp_example",
                phoneNumber: "phoneNumber_example",
                phoneNumberConfirmed: true,
                twoFactorEnabled: true,
                lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                lockoutEnabled: true,
                accessFailedCount: 1,
                createdGame: [
                  ,
                ],
                createdLocation: null,
                createdPictures: null,
                comments: [
                  {
                    idComment: "idComment_example",
                    text: "text_example",
                    userId: "userId_example",
                    user: ,
                    locationId: "locationId_example",
                    location: ,
                    isValidate: true,
                  },
                ],
                likedGames: [
                  {
                    idLikedGame: "idLikedGame_example",
                    gameId: "gameId_example",
                    game: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                likedLocations: [
                  {
                    idLikedLocation: "idLikedLocation_example",
                    locationId: "locationId_example",
                    location: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
              },
            },
          ],
          games: [
            ,
          ],
          comments: [
            {
              idComment: "idComment_example",
              text: "text_example",
              userId: "userId_example",
              user: {
                id: "id_example",
                userName: "userName_example",
                normalizedUserName: "normalizedUserName_example",
                email: "email_example",
                normalizedEmail: "normalizedEmail_example",
                emailConfirmed: true,
                passwordHash: "passwordHash_example",
                securityStamp: "securityStamp_example",
                concurrencyStamp: "concurrencyStamp_example",
                phoneNumber: "phoneNumber_example",
                phoneNumberConfirmed: true,
                twoFactorEnabled: true,
                lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                lockoutEnabled: true,
                accessFailedCount: 1,
                createdGame: [
                  ,
                ],
                createdLocation: null,
                createdPictures: [
                  {
                    idPicture: "idPicture_example",
                    name: "name_example",
                    description: "description_example",
                    data: 'YQ==',
                    locationId: "locationId_example",
                    location: ,
                    gameId: "gameId_example",
                    game: ,
                    isValidate: true,
                    authorId: "authorId_example",
                    author: ,
                  },
                ],
                comments: null,
                likedGames: [
                  {
                    idLikedGame: "idLikedGame_example",
                    gameId: "gameId_example",
                    game: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                likedLocations: [
                  {
                    idLikedLocation: "idLikedLocation_example",
                    locationId: "locationId_example",
                    location: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
              },
              locationId: "locationId_example",
              location: ,
              isValidate: true,
            },
          ],
          likedLocations: [
            {
              idLikedLocation: "idLikedLocation_example",
              locationId: "locationId_example",
              location: ,
              userId: "userId_example",
              user: {
                id: "id_example",
                userName: "userName_example",
                normalizedUserName: "normalizedUserName_example",
                email: "email_example",
                normalizedEmail: "normalizedEmail_example",
                emailConfirmed: true,
                passwordHash: "passwordHash_example",
                securityStamp: "securityStamp_example",
                concurrencyStamp: "concurrencyStamp_example",
                phoneNumber: "phoneNumber_example",
                phoneNumberConfirmed: true,
                twoFactorEnabled: true,
                lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                lockoutEnabled: true,
                accessFailedCount: 1,
                createdGame: [
                  ,
                ],
                createdLocation: null,
                createdPictures: [
                  {
                    idPicture: "idPicture_example",
                    name: "name_example",
                    description: "description_example",
                    data: 'YQ==',
                    locationId: "locationId_example",
                    location: ,
                    gameId: "gameId_example",
                    game: ,
                    isValidate: true,
                    authorId: "authorId_example",
                    author: ,
                  },
                ],
                comments: [
                  {
                    idComment: "idComment_example",
                    text: "text_example",
                    userId: "userId_example",
                    user: ,
                    locationId: "locationId_example",
                    location: ,
                    isValidate: true,
                  },
                ],
                likedGames: [
                  {
                    idLikedGame: "idLikedGame_example",
                    gameId: "gameId_example",
                    game: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                likedLocations: null,
              },
              vote: 3.14,
            },
          ],
          requestLocationUpdates: [
            {
              idRequestLocationUpdate: "idRequestLocationUpdate_example",
              locationId: "locationId_example",
              location: ,
              name: "name_example",
              description: "description_example",
              latitude: 3.14,
              longitude: 3.14,
              idPicture: "idPicture_example",
              picture: {
                idPicture: "idPicture_example",
                name: "name_example",
                description: "description_example",
                data: 'YQ==',
                locationId: "locationId_example",
                location: ,
                gameId: "gameId_example",
                game: ,
                isValidate: true,
                authorId: "authorId_example",
                author: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: null,
                  createdPictures: [
                    ,
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                },
              },
              isAddedPicture: true,
              idGame: "idGame_example",
              game: ,
              isAddedGame: true,
            },
          ],
        },
      ],
      pictures: [
        {
          idPicture: "idPicture_example",
          name: "name_example",
          description: "description_example",
          data: 'YQ==',
          locationId: "locationId_example",
          location: {
            idLocation: "idLocation_example",
            name: "name_example",
            description: "description_example",
            latitude: 3.14,
            longitude: 3.14,
            isValid: true,
            authorId: "authorId_example",
            author: {
              id: "id_example",
              userName: "userName_example",
              normalizedUserName: "normalizedUserName_example",
              email: "email_example",
              normalizedEmail: "normalizedEmail_example",
              emailConfirmed: true,
              passwordHash: "passwordHash_example",
              securityStamp: "securityStamp_example",
              concurrencyStamp: "concurrencyStamp_example",
              phoneNumber: "phoneNumber_example",
              phoneNumberConfirmed: true,
              twoFactorEnabled: true,
              lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
              lockoutEnabled: true,
              accessFailedCount: 1,
              createdGame: [
                ,
              ],
              createdLocation: [
                ,
              ],
              createdPictures: null,
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: ,
                  locationId: "locationId_example",
                  location: ,
                  isValidate: true,
                },
              ],
              likedGames: [
                {
                  idLikedGame: "idLikedGame_example",
                  gameId: "gameId_example",
                  game: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
            },
            pictures: null,
            games: [
              ,
            ],
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: [
                    ,
                  ],
                  createdPictures: null,
                  comments: null,
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                },
                locationId: "locationId_example",
                location: ,
                isValidate: true,
              },
            ],
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: ,
                userId: "userId_example",
                user: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: [
                    ,
                  ],
                  createdPictures: null,
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: null,
                },
                vote: 3.14,
              },
            ],
            requestLocationUpdates: [
              {
                idRequestLocationUpdate: "idRequestLocationUpdate_example",
                locationId: "locationId_example",
                location: ,
                name: "name_example",
                description: "description_example",
                latitude: 3.14,
                longitude: 3.14,
                idPicture: "idPicture_example",
                picture: ,
                isAddedPicture: true,
                idGame: "idGame_example",
                game: ,
                isAddedGame: true,
              },
            ],
          },
          gameId: "gameId_example",
          game: ,
          isValidate: true,
          authorId: "authorId_example",
          author: {
            id: "id_example",
            userName: "userName_example",
            normalizedUserName: "normalizedUserName_example",
            email: "email_example",
            normalizedEmail: "normalizedEmail_example",
            emailConfirmed: true,
            passwordHash: "passwordHash_example",
            securityStamp: "securityStamp_example",
            concurrencyStamp: "concurrencyStamp_example",
            phoneNumber: "phoneNumber_example",
            phoneNumberConfirmed: true,
            twoFactorEnabled: true,
            lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
            lockoutEnabled: true,
            accessFailedCount: 1,
            createdGame: [
              ,
            ],
            createdLocation: [
              {
                idLocation: "idLocation_example",
                name: "name_example",
                description: "description_example",
                latitude: 3.14,
                longitude: 3.14,
                isValid: true,
                authorId: "authorId_example",
                author: ,
                pictures: null,
                games: [
                  ,
                ],
                comments: [
                  {
                    idComment: "idComment_example",
                    text: "text_example",
                    userId: "userId_example",
                    user: ,
                    locationId: "locationId_example",
                    location: ,
                    isValidate: true,
                  },
                ],
                likedLocations: [
                  {
                    idLikedLocation: "idLikedLocation_example",
                    locationId: "locationId_example",
                    location: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                requestLocationUpdates: [
                  {
                    idRequestLocationUpdate: "idRequestLocationUpdate_example",
                    locationId: "locationId_example",
                    location: ,
                    name: "name_example",
                    description: "description_example",
                    latitude: 3.14,
                    longitude: 3.14,
                    idPicture: "idPicture_example",
                    picture: ,
                    isAddedPicture: true,
                    idGame: "idGame_example",
                    game: ,
                    isAddedGame: true,
                  },
                ],
              },
            ],
            createdPictures: null,
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: ,
                locationId: "locationId_example",
                location: {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: null,
                  games: [
                    ,
                  ],
                  comments: null,
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: ,
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
                isValidate: true,
              },
            ],
            likedGames: [
              {
                idLikedGame: "idLikedGame_example",
                gameId: "gameId_example",
                game: ,
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: null,
                  games: [
                    ,
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedLocations: null,
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: ,
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
          },
        },
      ],
      likedGames: [
        {
          idLikedGame: "idLikedGame_example",
          gameId: "gameId_example",
          game: ,
          userId: "userId_example",
          user: {
            id: "id_example",
            userName: "userName_example",
            normalizedUserName: "normalizedUserName_example",
            email: "email_example",
            normalizedEmail: "normalizedEmail_example",
            emailConfirmed: true,
            passwordHash: "passwordHash_example",
            securityStamp: "securityStamp_example",
            concurrencyStamp: "concurrencyStamp_example",
            phoneNumber: "phoneNumber_example",
            phoneNumberConfirmed: true,
            twoFactorEnabled: true,
            lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
            lockoutEnabled: true,
            accessFailedCount: 1,
            createdGame: [
              ,
            ],
            createdLocation: [
              {
                idLocation: "idLocation_example",
                name: "name_example",
                description: "description_example",
                latitude: 3.14,
                longitude: 3.14,
                isValid: true,
                authorId: "authorId_example",
                author: ,
                pictures: [
                  {
                    idPicture: "idPicture_example",
                    name: "name_example",
                    description: "description_example",
                    data: 'YQ==',
                    locationId: "locationId_example",
                    location: ,
                    gameId: "gameId_example",
                    game: ,
                    isValidate: true,
                    authorId: "authorId_example",
                    author: ,
                  },
                ],
                games: [
                  ,
                ],
                comments: [
                  {
                    idComment: "idComment_example",
                    text: "text_example",
                    userId: "userId_example",
                    user: ,
                    locationId: "locationId_example",
                    location: ,
                    isValidate: true,
                  },
                ],
                likedLocations: [
                  {
                    idLikedLocation: "idLikedLocation_example",
                    locationId: "locationId_example",
                    location: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                requestLocationUpdates: [
                  {
                    idRequestLocationUpdate: "idRequestLocationUpdate_example",
                    locationId: "locationId_example",
                    location: ,
                    name: "name_example",
                    description: "description_example",
                    latitude: 3.14,
                    longitude: 3.14,
                    idPicture: "idPicture_example",
                    picture: {
                      idPicture: "idPicture_example",
                      name: "name_example",
                      description: "description_example",
                      data: 'YQ==',
                      locationId: "locationId_example",
                      location: ,
                      gameId: "gameId_example",
                      game: ,
                      isValidate: true,
                      authorId: "authorId_example",
                      author: ,
                    },
                    isAddedPicture: true,
                    idGame: "idGame_example",
                    game: ,
                    isAddedGame: true,
                  },
                ],
              },
            ],
            createdPictures: [
              {
                idPicture: "idPicture_example",
                name: "name_example",
                description: "description_example",
                data: 'YQ==',
                locationId: "locationId_example",
                location: {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: null,
                  games: [
                    ,
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: ,
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
                gameId: "gameId_example",
                game: ,
                isValidate: true,
                authorId: "authorId_example",
                author: ,
              },
            ],
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: ,
                locationId: "locationId_example",
                location: {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: [
                    {
                      idPicture: "idPicture_example",
                      name: "name_example",
                      description: "description_example",
                      data: 'YQ==',
                      locationId: "locationId_example",
                      location: ,
                      gameId: "gameId_example",
                      game: ,
                      isValidate: true,
                      authorId: "authorId_example",
                      author: ,
                    },
                  ],
                  games: [
                    ,
                  ],
                  comments: null,
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: {
                        idPicture: "idPicture_example",
                        name: "name_example",
                        description: "description_example",
                        data: 'YQ==',
                        locationId: "locationId_example",
                        location: ,
                        gameId: "gameId_example",
                        game: ,
                        isValidate: true,
                        authorId: "authorId_example",
                        author: ,
                      },
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
                isValidate: true,
              },
            ],
            likedGames: null,
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: [
                    {
                      idPicture: "idPicture_example",
                      name: "name_example",
                      description: "description_example",
                      data: 'YQ==',
                      locationId: "locationId_example",
                      location: ,
                      gameId: "gameId_example",
                      game: ,
                      isValidate: true,
                      authorId: "authorId_example",
                      author: ,
                    },
                  ],
                  games: [
                    ,
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedLocations: null,
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: {
                        idPicture: "idPicture_example",
                        name: "name_example",
                        description: "description_example",
                        data: 'YQ==',
                        locationId: "locationId_example",
                        location: ,
                        gameId: "gameId_example",
                        game: ,
                        isValidate: true,
                        authorId: "authorId_example",
                        author: ,
                      },
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
                userId: "userId_example",
                user: ,
                vote: 3.14,
              },
            ],
          },
          vote: 3.14,
        },
      ],
      requestGameUpdates: [
        {
          idRequestGameUpdate: "idRequestGameUpdate_example",
          gameId: "gameId_example",
          game: ,
          name: "name_example",
          description: "description_example",
          editor: "editor_example",
          releaseDate: 1,
          idLocation: "idLocation_example",
          location: {
            idLocation: "idLocation_example",
            name: "name_example",
            description: "description_example",
            latitude: 3.14,
            longitude: 3.14,
            isValid: true,
            authorId: "authorId_example",
            author: {
              id: "id_example",
              userName: "userName_example",
              normalizedUserName: "normalizedUserName_example",
              email: "email_example",
              normalizedEmail: "normalizedEmail_example",
              emailConfirmed: true,
              passwordHash: "passwordHash_example",
              securityStamp: "securityStamp_example",
              concurrencyStamp: "concurrencyStamp_example",
              phoneNumber: "phoneNumber_example",
              phoneNumberConfirmed: true,
              twoFactorEnabled: true,
              lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
              lockoutEnabled: true,
              accessFailedCount: 1,
              createdGame: [
                ,
              ],
              createdLocation: [
                ,
              ],
              createdPictures: [
                {
                  idPicture: "idPicture_example",
                  name: "name_example",
                  description: "description_example",
                  data: 'YQ==',
                  locationId: "locationId_example",
                  location: ,
                  gameId: "gameId_example",
                  game: ,
                  isValidate: true,
                  authorId: "authorId_example",
                  author: ,
                },
              ],
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: ,
                  locationId: "locationId_example",
                  location: ,
                  isValidate: true,
                },
              ],
              likedGames: [
                {
                  idLikedGame: "idLikedGame_example",
                  gameId: "gameId_example",
                  game: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
            },
            pictures: [
              {
                idPicture: "idPicture_example",
                name: "name_example",
                description: "description_example",
                data: 'YQ==',
                locationId: "locationId_example",
                location: ,
                gameId: "gameId_example",
                game: ,
                isValidate: true,
                authorId: "authorId_example",
                author: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: [
                    ,
                  ],
                  createdPictures: null,
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                },
              },
            ],
            games: [
              ,
            ],
            comments: [
              {
                idComment: "idComment_example",
                text: "text_example",
                userId: "userId_example",
                user: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: [
                    ,
                  ],
                  createdPictures: [
                    {
                      idPicture: "idPicture_example",
                      name: "name_example",
                      description: "description_example",
                      data: 'YQ==',
                      locationId: "locationId_example",
                      location: ,
                      gameId: "gameId_example",
                      game: ,
                      isValidate: true,
                      authorId: "authorId_example",
                      author: ,
                    },
                  ],
                  comments: null,
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                },
                locationId: "locationId_example",
                location: ,
                isValidate: true,
              },
            ],
            likedLocations: [
              {
                idLikedLocation: "idLikedLocation_example",
                locationId: "locationId_example",
                location: ,
                userId: "userId_example",
                user: {
                  id: "id_example",
                  userName: "userName_example",
                  normalizedUserName: "normalizedUserName_example",
                  email: "email_example",
                  normalizedEmail: "normalizedEmail_example",
                  emailConfirmed: true,
                  passwordHash: "passwordHash_example",
                  securityStamp: "securityStamp_example",
                  concurrencyStamp: "concurrencyStamp_example",
                  phoneNumber: "phoneNumber_example",
                  phoneNumberConfirmed: true,
                  twoFactorEnabled: true,
                  lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                  lockoutEnabled: true,
                  accessFailedCount: 1,
                  createdGame: [
                    ,
                  ],
                  createdLocation: [
                    ,
                  ],
                  createdPictures: [
                    {
                      idPicture: "idPicture_example",
                      name: "name_example",
                      description: "description_example",
                      data: 'YQ==',
                      locationId: "locationId_example",
                      location: ,
                      gameId: "gameId_example",
                      game: ,
                      isValidate: true,
                      authorId: "authorId_example",
                      author: ,
                    },
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedGames: [
                    {
                      idLikedGame: "idLikedGame_example",
                      gameId: "gameId_example",
                      game: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  likedLocations: null,
                },
                vote: 3.14,
              },
            ],
            requestLocationUpdates: [
              {
                idRequestLocationUpdate: "idRequestLocationUpdate_example",
                locationId: "locationId_example",
                location: ,
                name: "name_example",
                description: "description_example",
                latitude: 3.14,
                longitude: 3.14,
                idPicture: "idPicture_example",
                picture: {
                  idPicture: "idPicture_example",
                  name: "name_example",
                  description: "description_example",
                  data: 'YQ==',
                  locationId: "locationId_example",
                  location: ,
                  gameId: "gameId_example",
                  game: ,
                  isValidate: true,
                  authorId: "authorId_example",
                  author: {
                    id: "id_example",
                    userName: "userName_example",
                    normalizedUserName: "normalizedUserName_example",
                    email: "email_example",
                    normalizedEmail: "normalizedEmail_example",
                    emailConfirmed: true,
                    passwordHash: "passwordHash_example",
                    securityStamp: "securityStamp_example",
                    concurrencyStamp: "concurrencyStamp_example",
                    phoneNumber: "phoneNumber_example",
                    phoneNumberConfirmed: true,
                    twoFactorEnabled: true,
                    lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                    lockoutEnabled: true,
                    accessFailedCount: 1,
                    createdGame: [
                      ,
                    ],
                    createdLocation: [
                      ,
                    ],
                    createdPictures: [
                      ,
                    ],
                    comments: [
                      {
                        idComment: "idComment_example",
                        text: "text_example",
                        userId: "userId_example",
                        user: ,
                        locationId: "locationId_example",
                        location: ,
                        isValidate: true,
                      },
                    ],
                    likedGames: [
                      {
                        idLikedGame: "idLikedGame_example",
                        gameId: "gameId_example",
                        game: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                    likedLocations: [
                      {
                        idLikedLocation: "idLikedLocation_example",
                        locationId: "locationId_example",
                        location: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                  },
                },
                isAddedPicture: true,
                idGame: "idGame_example",
                game: ,
                isAddedGame: true,
              },
            ],
          },
          isAddedLocation: true,
          idPicture: "idPicture_example",
          picture: {
            idPicture: "idPicture_example",
            name: "name_example",
            description: "description_example",
            data: 'YQ==',
            locationId: "locationId_example",
            location: {
              idLocation: "idLocation_example",
              name: "name_example",
              description: "description_example",
              latitude: 3.14,
              longitude: 3.14,
              isValid: true,
              authorId: "authorId_example",
              author: {
                id: "id_example",
                userName: "userName_example",
                normalizedUserName: "normalizedUserName_example",
                email: "email_example",
                normalizedEmail: "normalizedEmail_example",
                emailConfirmed: true,
                passwordHash: "passwordHash_example",
                securityStamp: "securityStamp_example",
                concurrencyStamp: "concurrencyStamp_example",
                phoneNumber: "phoneNumber_example",
                phoneNumberConfirmed: true,
                twoFactorEnabled: true,
                lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                lockoutEnabled: true,
                accessFailedCount: 1,
                createdGame: [
                  ,
                ],
                createdLocation: [
                  ,
                ],
                createdPictures: [
                  ,
                ],
                comments: [
                  {
                    idComment: "idComment_example",
                    text: "text_example",
                    userId: "userId_example",
                    user: ,
                    locationId: "locationId_example",
                    location: ,
                    isValidate: true,
                  },
                ],
                likedGames: [
                  {
                    idLikedGame: "idLikedGame_example",
                    gameId: "gameId_example",
                    game: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
                likedLocations: [
                  {
                    idLikedLocation: "idLikedLocation_example",
                    locationId: "locationId_example",
                    location: ,
                    userId: "userId_example",
                    user: ,
                    vote: 3.14,
                  },
                ],
              },
              pictures: [
                ,
              ],
              games: [
                ,
              ],
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: {
                    id: "id_example",
                    userName: "userName_example",
                    normalizedUserName: "normalizedUserName_example",
                    email: "email_example",
                    normalizedEmail: "normalizedEmail_example",
                    emailConfirmed: true,
                    passwordHash: "passwordHash_example",
                    securityStamp: "securityStamp_example",
                    concurrencyStamp: "concurrencyStamp_example",
                    phoneNumber: "phoneNumber_example",
                    phoneNumberConfirmed: true,
                    twoFactorEnabled: true,
                    lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                    lockoutEnabled: true,
                    accessFailedCount: 1,
                    createdGame: [
                      ,
                    ],
                    createdLocation: [
                      ,
                    ],
                    createdPictures: [
                      ,
                    ],
                    comments: null,
                    likedGames: [
                      {
                        idLikedGame: "idLikedGame_example",
                        gameId: "gameId_example",
                        game: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                    likedLocations: [
                      {
                        idLikedLocation: "idLikedLocation_example",
                        locationId: "locationId_example",
                        location: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                  },
                  locationId: "locationId_example",
                  location: ,
                  isValidate: true,
                },
              ],
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: ,
                  userId: "userId_example",
                  user: {
                    id: "id_example",
                    userName: "userName_example",
                    normalizedUserName: "normalizedUserName_example",
                    email: "email_example",
                    normalizedEmail: "normalizedEmail_example",
                    emailConfirmed: true,
                    passwordHash: "passwordHash_example",
                    securityStamp: "securityStamp_example",
                    concurrencyStamp: "concurrencyStamp_example",
                    phoneNumber: "phoneNumber_example",
                    phoneNumberConfirmed: true,
                    twoFactorEnabled: true,
                    lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
                    lockoutEnabled: true,
                    accessFailedCount: 1,
                    createdGame: [
                      ,
                    ],
                    createdLocation: [
                      ,
                    ],
                    createdPictures: [
                      ,
                    ],
                    comments: [
                      {
                        idComment: "idComment_example",
                        text: "text_example",
                        userId: "userId_example",
                        user: ,
                        locationId: "locationId_example",
                        location: ,
                        isValidate: true,
                      },
                    ],
                    likedGames: [
                      {
                        idLikedGame: "idLikedGame_example",
                        gameId: "gameId_example",
                        game: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                    likedLocations: null,
                  },
                  vote: 3.14,
                },
              ],
              requestLocationUpdates: [
                {
                  idRequestLocationUpdate: "idRequestLocationUpdate_example",
                  locationId: "locationId_example",
                  location: ,
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  idPicture: "idPicture_example",
                  picture: ,
                  isAddedPicture: true,
                  idGame: "idGame_example",
                  game: ,
                  isAddedGame: true,
                },
              ],
            },
            gameId: "gameId_example",
            game: ,
            isValidate: true,
            authorId: "authorId_example",
            author: {
              id: "id_example",
              userName: "userName_example",
              normalizedUserName: "normalizedUserName_example",
              email: "email_example",
              normalizedEmail: "normalizedEmail_example",
              emailConfirmed: true,
              passwordHash: "passwordHash_example",
              securityStamp: "securityStamp_example",
              concurrencyStamp: "concurrencyStamp_example",
              phoneNumber: "phoneNumber_example",
              phoneNumberConfirmed: true,
              twoFactorEnabled: true,
              lockoutEnd: new Date('1970-01-01T00:00:00.00Z'),
              lockoutEnabled: true,
              accessFailedCount: 1,
              createdGame: [
                ,
              ],
              createdLocation: [
                {
                  idLocation: "idLocation_example",
                  name: "name_example",
                  description: "description_example",
                  latitude: 3.14,
                  longitude: 3.14,
                  isValid: true,
                  authorId: "authorId_example",
                  author: ,
                  pictures: [
                    ,
                  ],
                  games: [
                    ,
                  ],
                  comments: [
                    {
                      idComment: "idComment_example",
                      text: "text_example",
                      userId: "userId_example",
                      user: ,
                      locationId: "locationId_example",
                      location: ,
                      isValidate: true,
                    },
                  ],
                  likedLocations: [
                    {
                      idLikedLocation: "idLikedLocation_example",
                      locationId: "locationId_example",
                      location: ,
                      userId: "userId_example",
                      user: ,
                      vote: 3.14,
                    },
                  ],
                  requestLocationUpdates: [
                    {
                      idRequestLocationUpdate: "idRequestLocationUpdate_example",
                      locationId: "locationId_example",
                      location: ,
                      name: "name_example",
                      description: "description_example",
                      latitude: 3.14,
                      longitude: 3.14,
                      idPicture: "idPicture_example",
                      picture: ,
                      isAddedPicture: true,
                      idGame: "idGame_example",
                      game: ,
                      isAddedGame: true,
                    },
                  ],
                },
              ],
              createdPictures: [
                ,
              ],
              comments: [
                {
                  idComment: "idComment_example",
                  text: "text_example",
                  userId: "userId_example",
                  user: ,
                  locationId: "locationId_example",
                  location: {
                    idLocation: "idLocation_example",
                    name: "name_example",
                    description: "description_example",
                    latitude: 3.14,
                    longitude: 3.14,
                    isValid: true,
                    authorId: "authorId_example",
                    author: ,
                    pictures: [
                      ,
                    ],
                    games: [
                      ,
                    ],
                    comments: null,
                    likedLocations: [
                      {
                        idLikedLocation: "idLikedLocation_example",
                        locationId: "locationId_example",
                        location: ,
                        userId: "userId_example",
                        user: ,
                        vote: 3.14,
                      },
                    ],
                    requestLocationUpdates: [
                      {
                        idRequestLocationUpdate: "idRequestLocationUpdate_example",
                        locationId: "locationId_example",
                        location: ,
                        name: "name_example",
                        description: "description_example",
                        latitude: 3.14,
                        longitude: 3.14,
                        idPicture: "idPicture_example",
                        picture: ,
                        isAddedPicture: true,
                        idGame: "idGame_example",
                        game: ,
                        isAddedGame: true,
                      },
                    ],
                  },
                  isValidate: true,
                },
              ],
              likedGames: [
                {
                  idLikedGame: "idLikedGame_example",
                  gameId: "gameId_example",
                  game: ,
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
              likedLocations: [
                {
                  idLikedLocation: "idLikedLocation_example",
                  locationId: "locationId_example",
                  location: {
                    idLocation: "idLocation_example",
                    name: "name_example",
                    description: "description_example",
                    latitude: 3.14,
                    longitude: 3.14,
                    isValid: true,
                    authorId: "authorId_example",
                    author: ,
                    pictures: [
                      ,
                    ],
                    games: [
                      ,
                    ],
                    comments: [
                      {
                        idComment: "idComment_example",
                        text: "text_example",
                        userId: "userId_example",
                        user: ,
                        locationId: "locationId_example",
                        location: ,
                        isValidate: true,
                      },
                    ],
                    likedLocations: null,
                    requestLocationUpdates: [
                      {
                        idRequestLocationUpdate: "idRequestLocationUpdate_example",
                        locationId: "locationId_example",
                        location: ,
                        name: "name_example",
                        description: "description_example",
                        latitude: 3.14,
                        longitude: 3.14,
                        idPicture: "idPicture_example",
                        picture: ,
                        isAddedPicture: true,
                        idGame: "idGame_example",
                        game: ,
                        isAddedGame: true,
                      },
                    ],
                  },
                  userId: "userId_example",
                  user: ,
                  vote: 3.14,
                },
              ],
            },
          },
          isAddedPicture: true,
        },
      ],
    },
    isAddedGame: true,
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
  // string | If used, this means that the update is performed following validation of a request (optional)
  requestUpdateId: "requestUpdateId_example",
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
 **requestUpdateId** | [**string**] | If used, this means that the update is performed following validation of a request | (optional) defaults to undefined


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

# **locationRequestUpdateLocationIdGet**
> ListLocationUpdateRequest locationRequestUpdateLocationIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LocationApi(configuration);

let body:.LocationApiLocationRequestUpdateLocationIdGetRequest = {
  // string | Id of location
  locationId: "locationId_example",
};

apiInstance.locationRequestUpdateLocationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | Id of location | defaults to undefined


### Return type

**ListLocationUpdateRequest**

### Authorization

[Bearer](README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


