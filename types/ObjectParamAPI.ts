import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddLikeGameDto } from '../models/AddLikeGameDto';
import { AddLikeLocationDto } from '../models/AddLikeLocationDto';
import { Comment } from '../models/Comment';
import { ConfirmMailDto } from '../models/ConfirmMailDto';
import { CreateGameDto } from '../models/CreateGameDto';
import { CreateLocationDto } from '../models/CreateLocationDto';
import { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import { Game } from '../models/Game';
import { GameDto } from '../models/GameDto';
import { GameNameDto } from '../models/GameNameDto';
import { GameTripUser } from '../models/GameTripUser';
import { GameTripUserDto } from '../models/GameTripUserDto';
import { GetLocationDto } from '../models/GetLocationDto';
import { LikedGame } from '../models/LikedGame';
import { LikedGameDto } from '../models/LikedGameDto';
import { LikedLocation } from '../models/LikedLocation';
import { LikedLocationDto } from '../models/LikedLocationDto';
import { ListGameDto } from '../models/ListGameDto';
import { ListLikedGameDto } from '../models/ListLikedGameDto';
import { ListLikedLocationDto } from '../models/ListLikedLocationDto';
import { ListPictureDto } from '../models/ListPictureDto';
import { Location } from '../models/Location';
import { LocationDto } from '../models/LocationDto';
import { LocationNameDto } from '../models/LocationNameDto';
import { LoginDto } from '../models/LoginDto';
import { Picture } from '../models/Picture';
import { RegisterDto } from '../models/RegisterDto';
import { ResetPasswordDto } from '../models/ResetPasswordDto';
import { TokenDto } from '../models/TokenDto';
import { UpdateGameDto } from '../models/UpdateGameDto';
import { UpdateLocationDto } from '../models/UpdateLocationDto';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthConfirmEmailPostRequest {
    /**
     * The dto.
     * @type ConfirmMailDto
     * @memberof AuthApiauthConfirmEmailPost
     */
    confirmMailDto?: ConfirmMailDto
}

export interface AuthApiAuthForgotPasswordPostRequest {
    /**
     * The dto.
     * @type ForgotPasswordDto
     * @memberof AuthApiauthForgotPasswordPost
     */
    forgotPasswordDto?: ForgotPasswordDto
}

export interface AuthApiAuthInitializePostRequest {
    /**
     * 
     * @type Array&lt;HttpFile&gt;
     * @memberof AuthApiauthInitializePost
     */
    files: Array<HttpFile>
}

export interface AuthApiAuthLoginPostRequest {
    /**
     * The dto.
     * @type LoginDto
     * @memberof AuthApiauthLoginPost
     */
    loginDto?: LoginDto
}

export interface AuthApiAuthRegisterPostRequest {
    /**
     * 
     * @type RegisterDto
     * @memberof AuthApiauthRegisterPost
     */
    registerDto?: RegisterDto
}

export interface AuthApiAuthResetPasswordPostRequest {
    /**
     * The dto.
     * @type ResetPasswordDto
     * @memberof AuthApiauthResetPasswordPost
     */
    resetPasswordDto?: ResetPasswordDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Confirms the email.
     * @param param the request object
     */
    public authConfirmEmailPost(param: AuthApiAuthConfirmEmailPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authConfirmEmailPost(param.confirmMailDto,  options).toPromise();
    }

    /**
     * Frogots the password.
     * @param param the request object
     */
    public authForgotPasswordPost(param: AuthApiAuthForgotPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authForgotPasswordPost(param.forgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authInitializePost(param: AuthApiAuthInitializePostRequest, options?: Configuration): Promise<void> {
        return this.api.authInitializePost(param.files,  options).toPromise();
    }

    /**
     * {    \"username\": \"Dercraker\",    \"password\": \"NMdRx$HqyT8jX6\"  }
     * Logins the.
     * @param param the request object
     */
    public authLoginPost(param: AuthApiAuthLoginPostRequest = {}, options?: Configuration): Promise<TokenDto> {
        return this.api.authLoginPost(param.loginDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authRegisterPost(param: AuthApiAuthRegisterPostRequest = {}, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.authRegisterPost(param.registerDto,  options).toPromise();
    }

    /**
     * Resets the password.
     * @param param the request object
     */
    public authResetPasswordPost(param: AuthApiAuthResetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authResetPasswordPost(param.resetPasswordDto,  options).toPromise();
    }

}

import { ObservableGameApi } from "./ObservableAPI";
import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";

export interface GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameAddGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof GameApigameAddGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
    /**
     * 
     * @type Array&lt;HttpFile&gt;
     * @memberof GameApigameAddGameToLocationGameGameIdLocationLocationIdPost
     */
    files: Array<HttpFile>
}

export interface GameApiGameCreateGamePostRequest {
    /**
     * 
     * @type CreateGameDto
     * @memberof GameApigameCreateGamePost
     */
    createGameDto?: CreateGameDto
}

export interface GameApiGameDeleteGameIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameDeleteGameIdDelete
     */
    gameId: string
}

export interface GameApiGameGameIdPutRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameGameIdPut
     */
    gameId: string
    /**
     * 
     * @type UpdateGameDto
     * @memberof GameApigameGameIdPut
     */
    updateGameDto?: UpdateGameDto
}

export interface GameApiGameGetRequest {
    /**
     * 
     * @type number
     * @memberof GameApigameGet
     */
    limit?: number
}

export interface GameApiGameIdGameIdGetRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameIdGameIdGet
     */
    gameId: string
}

export interface GameApiGameLocationIdLocationIdGetRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameLocationIdLocationIdGet
     */
    locationId: string
}

export interface GameApiGameLocationNameLocationNameGetRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameLocationNameLocationNameGet
     */
    locationName: string
}

export interface GameApiGameNameGameNameGetRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameNameGameNameGet
     */
    gameName: string
}

export interface GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * 
     * @type string
     * @memberof GameApigameRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof GameApigameRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
    /**
     * 
     * @type Array&lt;HttpFile&gt;
     * @memberof GameApigameRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    files: Array<HttpFile>
}

export class ObjectGameApi {
    private api: ObservableGameApi

    public constructor(configuration: Configuration, requestFactory?: GameApiRequestFactory, responseProcessor?: GameApiResponseProcessor) {
        this.api = new ObservableGameApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<void> {
        return this.api.gameAddGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId, param.files,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameCreateGamePost(param: GameApiGameCreateGamePostRequest = {}, options?: Configuration): Promise<Game> {
        return this.api.gameCreateGamePost(param.createGameDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameDeleteGameIdDelete(param: GameApiGameDeleteGameIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.gameDeleteGameIdDelete(param.gameId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameGameIdPut(param: GameApiGameGameIdPutRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameGameIdPut(param.gameId, param.updateGameDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameGet(param: GameApiGameGetRequest = {}, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameGet(param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameIdGameIdGet(param: GameApiGameIdGameIdGetRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameLocationIdLocationIdGet(param: GameApiGameLocationIdLocationIdGetRequest, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameLocationIdLocationIdGet(param.locationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameLocationNameLocationNameGet(param: GameApiGameLocationNameLocationNameGetRequest, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameLocationNameLocationNameGet(param.locationName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameNameGameNameGet(param: GameApiGameNameGameNameGetRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameNameGameNameGet(param.gameName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<void> {
        return this.api.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId, param.files,  options).toPromise();
    }

}

import { ObservableLikeApi } from "./ObservableAPI";
import { LikeApiRequestFactory, LikeApiResponseProcessor} from "../apis/LikeApi";

export interface LikeApiLikeAddLikeToGamePostRequest {
    /**
     * 
     * @type AddLikeGameDto
     * @memberof LikeApilikeAddLikeToGamePost
     */
    addLikeGameDto?: AddLikeGameDto
}

export interface LikeApiLikeAddLikeToLocationPostRequest {
    /**
     * 
     * @type AddLikeLocationDto
     * @memberof LikeApilikeAddLikeToLocationPost
     */
    addLikeLocationDto?: AddLikeLocationDto
}

export interface LikeApiLikeAllLikedGamesGetRequest {
}

export interface LikeApiLikeAllLikedLocationsGetRequest {
}

export interface LikeApiLikeLikedGamesUserIdGetRequest {
    /**
     * 
     * @type string
     * @memberof LikeApilikeLikedGamesUserIdGet
     */
    userId: string
}

export interface LikeApiLikeLikedLocationsUserIdGetRequest {
    /**
     * 
     * @type string
     * @memberof LikeApilikeLikedLocationsUserIdGet
     */
    userId: string
}

export interface LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof LikeApilikeRemoveLikeToGameGameIdUserIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof LikeApilikeRemoveLikeToGameGameIdUserIdPost
     */
    userId: string
    /**
     * 
     * @type Array&lt;HttpFile&gt;
     * @memberof LikeApilikeRemoveLikeToGameGameIdUserIdPost
     */
    files: Array<HttpFile>
}

export interface LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof LikeApilikeRemoveLikeToLocationLocationIdUserIdPost
     */
    locationId: string
    /**
     * 
     * @type string
     * @memberof LikeApilikeRemoveLikeToLocationLocationIdUserIdPost
     */
    userId: string
    /**
     * 
     * @type Array&lt;HttpFile&gt;
     * @memberof LikeApilikeRemoveLikeToLocationLocationIdUserIdPost
     */
    files: Array<HttpFile>
}

export class ObjectLikeApi {
    private api: ObservableLikeApi

    public constructor(configuration: Configuration, requestFactory?: LikeApiRequestFactory, responseProcessor?: LikeApiResponseProcessor) {
        this.api = new ObservableLikeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public likeAddLikeToGamePost(param: LikeApiLikeAddLikeToGamePostRequest = {}, options?: Configuration): Promise<LikedLocationDto> {
        return this.api.likeAddLikeToGamePost(param.addLikeGameDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public likeAddLikeToLocationPost(param: LikeApiLikeAddLikeToLocationPostRequest = {}, options?: Configuration): Promise<LikedLocationDto> {
        return this.api.likeAddLikeToLocationPost(param.addLikeLocationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public likeAllLikedGamesGet(param: LikeApiLikeAllLikedGamesGetRequest = {}, options?: Configuration): Promise<Array<LikedGameDto>> {
        return this.api.likeAllLikedGamesGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public likeAllLikedLocationsGet(param: LikeApiLikeAllLikedLocationsGetRequest = {}, options?: Configuration): Promise<Array<LikedLocationDto>> {
        return this.api.likeAllLikedLocationsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public likeLikedGamesUserIdGet(param: LikeApiLikeLikedGamesUserIdGetRequest, options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        return this.api.likeLikedGamesUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public likeLikedLocationsUserIdGet(param: LikeApiLikeLikedLocationsUserIdGetRequest, options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        return this.api.likeLikedLocationsUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Remove Like from Location
     * @param param the request object
     */
    public likeRemoveLikeToGameGameIdUserIdPost(param: LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest, options?: Configuration): Promise<void | LikedLocationDto> {
        return this.api.likeRemoveLikeToGameGameIdUserIdPost(param.gameId, param.userId, param.files,  options).toPromise();
    }

    /**
     * Remove Like from Location
     * @param param the request object
     */
    public likeRemoveLikeToLocationLocationIdUserIdPost(param: LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest, options?: Configuration): Promise<void | LikedLocationDto> {
        return this.api.likeRemoveLikeToLocationLocationIdUserIdPost(param.locationId, param.userId, param.files,  options).toPromise();
    }

}

import { ObservableLocationApi } from "./ObservableAPI";
import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";

export interface LocationApiLocationCreateLocationPostRequest {
    /**
     * 
     * @type CreateLocationDto
     * @memberof LocationApilocationCreateLocationPost
     */
    createLocationDto?: CreateLocationDto
}

export interface LocationApiLocationDeleteLocationIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationDeleteLocationIdDelete
     */
    locationId: string
}

export interface LocationApiLocationGameIdGameIdGetRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationGameIdGameIdGet
     */
    gameId: string
}

export interface LocationApiLocationGameNameGameNameGetRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationGameNameGameNameGet
     */
    gameName: string
}

export interface LocationApiLocationGetRequest {
    /**
     * 
     * @type number
     * @memberof LocationApilocationGet
     */
    limit?: number
}

export interface LocationApiLocationIdLocationIdGetRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationIdLocationIdGet
     */
    locationId: string
}

export interface LocationApiLocationLocationIdPutRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationLocationIdPut
     */
    locationId: string
    /**
     * 
     * @type UpdateLocationDto
     * @memberof LocationApilocationLocationIdPut
     */
    updateLocationDto?: UpdateLocationDto
}

export interface LocationApiLocationNameLocationNameGetRequest {
    /**
     * 
     * @type string
     * @memberof LocationApilocationNameLocationNameGet
     */
    locationName: string
}

export class ObjectLocationApi {
    private api: ObservableLocationApi

    public constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor) {
        this.api = new ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public locationCreateLocationPost(param: LocationApiLocationCreateLocationPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.locationCreateLocationPost(param.createLocationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationDeleteLocationIdDelete(param: LocationApiLocationDeleteLocationIdDeleteRequest, options?: Configuration): Promise<Location> {
        return this.api.locationDeleteLocationIdDelete(param.locationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationGameIdGameIdGet(param: LocationApiLocationGameIdGameIdGetRequest, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationGameNameGameNameGet(param: LocationApiLocationGameNameGameNameGetRequest, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGameNameGameNameGet(param.gameName,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationGet(param: LocationApiLocationGetRequest = {}, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGet(param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationIdLocationIdGet(param: LocationApiLocationIdLocationIdGetRequest, options?: Configuration): Promise<GetLocationDto> {
        return this.api.locationIdLocationIdGet(param.locationId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationLocationIdPut(param: LocationApiLocationLocationIdPutRequest, options?: Configuration): Promise<GameDto> {
        return this.api.locationLocationIdPut(param.locationId, param.updateLocationDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public locationNameLocationNameGet(param: LocationApiLocationNameLocationNameGetRequest, options?: Configuration): Promise<GetLocationDto> {
        return this.api.locationNameLocationNameGet(param.locationName,  options).toPromise();
    }

}

import { ObservablePictureApi } from "./ObservableAPI";
import { PictureApiRequestFactory, PictureApiResponseProcessor} from "../apis/PictureApi";

export interface PictureApiPictureAddPictureToGameGameIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToGameGameIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToGameGameIdPost
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToGameGameIdPost
     */
    description?: string
    /**
     * 
     * @type HttpFile
     * @memberof PictureApipictureAddPictureToGameGameIdPost
     */
    pictureData?: HttpFile
}

export interface PictureApiPictureAddPictureToLocationLocationIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToLocationLocationIdPost
     */
    locationId: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToLocationLocationIdPost
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToLocationLocationIdPost
     */
    description?: string
    /**
     * 
     * @type HttpFile
     * @memberof PictureApipictureAddPictureToLocationLocationIdPost
     */
    pictureData?: HttpFile
}

export interface PictureApiPictureDeletePicturePictureIdDeleteRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureDeletePicturePictureIdDelete
     */
    pictureId: string
}

export interface PictureApiPictureGetPicturesByGameIdGameIdGetRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureGetPicturesByGameIdGameIdGet
     */
    gameId: string
}

export interface PictureApiPictureGetPicturesByLocationIdLocationIdGetRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureGetPicturesByLocationIdLocationIdGet
     */
    locationId: string
}

export class ObjectPictureApi {
    private api: ObservablePictureApi

    public constructor(configuration: Configuration, requestFactory?: PictureApiRequestFactory, responseProcessor?: PictureApiResponseProcessor) {
        this.api = new ObservablePictureApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public pictureAddPictureToGameGameIdPost(param: PictureApiPictureAddPictureToGameGameIdPostRequest, options?: Configuration): Promise<void> {
        return this.api.pictureAddPictureToGameGameIdPost(param.gameId, param.name, param.description, param.pictureData,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pictureAddPictureToLocationLocationIdPost(param: PictureApiPictureAddPictureToLocationLocationIdPostRequest, options?: Configuration): Promise<void> {
        return this.api.pictureAddPictureToLocationLocationIdPost(param.locationId, param.name, param.description, param.pictureData,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pictureDeletePicturePictureIdDelete(param: PictureApiPictureDeletePicturePictureIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.pictureDeletePicturePictureIdDelete(param.pictureId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pictureGetPicturesByGameIdGameIdGet(param: PictureApiPictureGetPicturesByGameIdGameIdGetRequest, options?: Configuration): Promise<Array<ListPictureDto>> {
        return this.api.pictureGetPicturesByGameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public pictureGetPicturesByLocationIdLocationIdGet(param: PictureApiPictureGetPicturesByLocationIdLocationIdGetRequest, options?: Configuration): Promise<Array<ListPictureDto>> {
        return this.api.pictureGetPicturesByLocationIdLocationIdGet(param.locationId,  options).toPromise();
    }

}
