import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Comment } from '../models/Comment';
import { ConfirmMailDto } from '../models/ConfirmMailDto';
import { CreateGameDto } from '../models/CreateGameDto';
import { CreateLocationDto } from '../models/CreateLocationDto';
import { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import { Game } from '../models/Game';
import { GameDto } from '../models/GameDto';
import { GameTripUser } from '../models/GameTripUser';
import { GameTripUserDto } from '../models/GameTripUserDto';
import { GetLocationDto } from '../models/GetLocationDto';
import { LikedGame } from '../models/LikedGame';
import { LikedLocation } from '../models/LikedLocation';
import { ListGameDto } from '../models/ListGameDto';
import { Location } from '../models/Location';
import { LocationDto } from '../models/LocationDto';
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
     */
    public authInitializePost(_options?: Configuration): Promise<void> {
        const result = this.api.authInitializePost(_options);
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
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, _options);
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
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, _options);
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



