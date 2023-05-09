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
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Confirms the email.
     * @param confirmMailDto The dto.
     */
    public authConfirmEmailPost(confirmMailDto?: ConfirmMailDto, _options?: Configuration): Promise<void> {
        const result = this.api.authConfirmEmailPost(confirmMailDto, _options);
        return result.toPromise();
    }

    /**
     * Frogots the password.
     * @param forgotPasswordDto The dto.
     */
    public authForgotPasswordPost(forgotPasswordDto?: ForgotPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authForgotPasswordPost(forgotPasswordDto, _options);
        return result.toPromise();
    }

    /**
     * @param files 
     */
    public authInitializePost(files: Array<HttpFile>, _options?: Configuration): Promise<void> {
        const result = this.api.authInitializePost(files, _options);
        return result.toPromise();
    }

    /**
     * {    \"username\": \"Dercraker\",    \"password\": \"NMdRx$HqyT8jX6\"  }
     * Logins the.
     * @param loginDto The dto.
     */
    public authLoginPost(loginDto?: LoginDto, _options?: Configuration): Promise<TokenDto> {
        const result = this.api.authLoginPost(loginDto, _options);
        return result.toPromise();
    }

    /**
     * @param registerDto 
     */
    public authRegisterPost(registerDto?: RegisterDto, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.authRegisterPost(registerDto, _options);
        return result.toPromise();
    }

    /**
     * Resets the password.
     * @param resetPasswordDto The dto.
     */
    public authResetPasswordPost(resetPasswordDto?: ResetPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authResetPasswordPost(resetPasswordDto, _options);
        return result.toPromise();
    }


}



import { ObservableGameApi } from './ObservableAPI';

import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";
export class PromiseGameApi {
    private api: ObservableGameApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GameApiRequestFactory,
        responseProcessor?: GameApiResponseProcessor
    ) {
        this.api = new ObservableGameApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param gameId 
     * @param locationId 
     * @param files 
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Promise<void> {
        const result = this.api.gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, files, _options);
        return result.toPromise();
    }

    /**
     * @param createGameDto 
     */
    public gameCreateGamePost(createGameDto?: CreateGameDto, _options?: Configuration): Promise<Game> {
        const result = this.api.gameCreateGamePost(createGameDto, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public gameDeleteGameIdDelete(gameId: string, _options?: Configuration): Promise<void> {
        const result = this.api.gameDeleteGameIdDelete(gameId, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     * @param updateGameDto 
     */
    public gameGameIdPut(gameId: string, updateGameDto?: UpdateGameDto, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameGameIdPut(gameId, updateGameDto, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     */
    public gameGet(limit?: number, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameGet(limit, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public gameIdGameIdGet(gameId: string, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     */
    public gameLocationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameLocationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }

    /**
     * @param locationName 
     */
    public gameLocationNameLocationNameGet(locationName: string, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameLocationNameLocationNameGet(locationName, _options);
        return result.toPromise();
    }

    /**
     * @param gameName 
     */
    public gameNameGameNameGet(gameName: string, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameNameGameNameGet(gameName, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     * @param locationId 
     * @param files 
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Promise<void> {
        const result = this.api.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, files, _options);
        return result.toPromise();
    }


}



import { ObservableLikeApi } from './ObservableAPI';

import { LikeApiRequestFactory, LikeApiResponseProcessor} from "../apis/LikeApi";
export class PromiseLikeApi {
    private api: ObservableLikeApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LikeApiRequestFactory,
        responseProcessor?: LikeApiResponseProcessor
    ) {
        this.api = new ObservableLikeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param addLikeGameDto 
     */
    public likeAddLikeToGamePost(addLikeGameDto?: AddLikeGameDto, _options?: Configuration): Promise<LikedLocationDto> {
        const result = this.api.likeAddLikeToGamePost(addLikeGameDto, _options);
        return result.toPromise();
    }

    /**
     * @param addLikeLocationDto 
     */
    public likeAddLikeToLocationPost(addLikeLocationDto?: AddLikeLocationDto, _options?: Configuration): Promise<LikedLocationDto> {
        const result = this.api.likeAddLikeToLocationPost(addLikeLocationDto, _options);
        return result.toPromise();
    }

    /**
     */
    public likeAllLikedGamesGet(_options?: Configuration): Promise<Array<LikedGameDto>> {
        const result = this.api.likeAllLikedGamesGet(_options);
        return result.toPromise();
    }

    /**
     */
    public likeAllLikedLocationsGet(_options?: Configuration): Promise<Array<LikedLocationDto>> {
        const result = this.api.likeAllLikedLocationsGet(_options);
        return result.toPromise();
    }

    /**
     * @param userId 
     */
    public likeLikedGamesUserIdGet(userId: string, _options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        const result = this.api.likeLikedGamesUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     */
    public likeLikedLocationsUserIdGet(userId: string, _options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        const result = this.api.likeLikedLocationsUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Remove Like from Location
     * @param gameId 
     * @param userId 
     * @param files 
     */
    public likeRemoveLikeToGameGameIdUserIdPost(gameId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<void | LikedLocationDto> {
        const result = this.api.likeRemoveLikeToGameGameIdUserIdPost(gameId, userId, files, _options);
        return result.toPromise();
    }

    /**
     * Remove Like from Location
     * @param locationId 
     * @param userId 
     * @param files 
     */
    public likeRemoveLikeToLocationLocationIdUserIdPost(locationId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<void | LikedLocationDto> {
        const result = this.api.likeRemoveLikeToLocationLocationIdUserIdPost(locationId, userId, files, _options);
        return result.toPromise();
    }


}



import { ObservableLocationApi } from './ObservableAPI';

import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";
export class PromiseLocationApi {
    private api: ObservableLocationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationApiRequestFactory,
        responseProcessor?: LocationApiResponseProcessor
    ) {
        this.api = new ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createLocationDto 
     */
    public locationCreateLocationPost(createLocationDto?: CreateLocationDto, _options?: Configuration): Promise<void> {
        const result = this.api.locationCreateLocationPost(createLocationDto, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     */
    public locationDeleteLocationIdDelete(locationId: string, _options?: Configuration): Promise<Location> {
        const result = this.api.locationDeleteLocationIdDelete(locationId, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public locationGameIdGameIdGet(gameId: string, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * @param gameName 
     */
    public locationGameNameGameNameGet(gameName: string, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGameNameGameNameGet(gameName, _options);
        return result.toPromise();
    }

    /**
     * @param limit 
     */
    public locationGet(limit?: number, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGet(limit, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     */
    public locationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<GetLocationDto> {
        const result = this.api.locationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     * @param updateLocationDto 
     */
    public locationLocationIdPut(locationId: string, updateLocationDto?: UpdateLocationDto, _options?: Configuration): Promise<GameDto> {
        const result = this.api.locationLocationIdPut(locationId, updateLocationDto, _options);
        return result.toPromise();
    }

    /**
     * @param locationName 
     */
    public locationNameLocationNameGet(locationName: string, _options?: Configuration): Promise<GetLocationDto> {
        const result = this.api.locationNameLocationNameGet(locationName, _options);
        return result.toPromise();
    }


}



import { ObservablePictureApi } from './ObservableAPI';

import { PictureApiRequestFactory, PictureApiResponseProcessor} from "../apis/PictureApi";
export class PromisePictureApi {
    private api: ObservablePictureApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PictureApiRequestFactory,
        responseProcessor?: PictureApiResponseProcessor
    ) {
        this.api = new ObservablePictureApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param gameId 
     * @param name 
     * @param description 
     * @param pictureData 
     */
    public pictureAddPictureToGameGameIdPost(gameId: string, name?: string, description?: string, pictureData?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.pictureAddPictureToGameGameIdPost(gameId, name, description, pictureData, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     * @param name 
     * @param description 
     * @param pictureData 
     */
    public pictureAddPictureToLocationLocationIdPost(locationId: string, name?: string, description?: string, pictureData?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.pictureAddPictureToLocationLocationIdPost(locationId, name, description, pictureData, _options);
        return result.toPromise();
    }

    /**
     * @param pictureId 
     */
    public pictureDeletePicturePictureIdDelete(pictureId: string, _options?: Configuration): Promise<void> {
        const result = this.api.pictureDeletePicturePictureIdDelete(pictureId, _options);
        return result.toPromise();
    }

    /**
     * @param gameId 
     */
    public pictureGetPicturesByGameIdGameIdGet(gameId: string, _options?: Configuration): Promise<Array<ListPictureDto>> {
        const result = this.api.pictureGetPicturesByGameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * @param locationId 
     */
    public pictureGetPicturesByLocationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<Array<ListPictureDto>> {
        const result = this.api.pictureGetPicturesByLocationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }


}



