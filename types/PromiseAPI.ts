import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddCommentToLocationDto } from '../models/AddCommentToLocationDto';
import { AddLikeGameDto } from '../models/AddLikeGameDto';
import { AddLikeLocationDto } from '../models/AddLikeLocationDto';
import { Assembly } from '../models/Assembly';
import { CallingConventions } from '../models/CallingConventions';
import { ConfirmMailDto } from '../models/ConfirmMailDto';
import { ConstructorInfo } from '../models/ConstructorInfo';
import { CreateGameDto } from '../models/CreateGameDto';
import { CreateLocationDto } from '../models/CreateLocationDto';
import { CustomAttributeData } from '../models/CustomAttributeData';
import { CustomAttributeNamedArgument } from '../models/CustomAttributeNamedArgument';
import { CustomAttributeTypedArgument } from '../models/CustomAttributeTypedArgument';
import { EventAttributes } from '../models/EventAttributes';
import { EventInfo } from '../models/EventInfo';
import { Exception } from '../models/Exception';
import { FieldAttributes } from '../models/FieldAttributes';
import { FieldInfo } from '../models/FieldInfo';
import { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import { GameDto } from '../models/GameDto';
import { GameNameDto } from '../models/GameNameDto';
import { GameTripUserDto } from '../models/GameTripUserDto';
import { GenericParameterAttributes } from '../models/GenericParameterAttributes';
import { GetLocationDto } from '../models/GetLocationDto';
import { IdentityError } from '../models/IdentityError';
import { LayoutKind } from '../models/LayoutKind';
import { LikedGameDto } from '../models/LikedGameDto';
import { LikedLocationDto } from '../models/LikedLocationDto';
import { ListCommentDto } from '../models/ListCommentDto';
import { ListGameDto } from '../models/ListGameDto';
import { ListLikedGameDto } from '../models/ListLikedGameDto';
import { ListLikedLocationDto } from '../models/ListLikedLocationDto';
import { ListPictureDto } from '../models/ListPictureDto';
import { LocationDto } from '../models/LocationDto';
import { LocationNameDto } from '../models/LocationNameDto';
import { LoginDto } from '../models/LoginDto';
import { MemberInfo } from '../models/MemberInfo';
import { MemberTypes } from '../models/MemberTypes';
import { MessageDto } from '../models/MessageDto';
import { MethodAttributes } from '../models/MethodAttributes';
import { MethodBase } from '../models/MethodBase';
import { MethodImplAttributes } from '../models/MethodImplAttributes';
import { MethodInfo } from '../models/MethodInfo';
import { ModelError } from '../models/ModelError';
import { ModelStateEntry } from '../models/ModelStateEntry';
import { ModelValidationState } from '../models/ModelValidationState';
import { Module } from '../models/Module';
import { ModuleHandle } from '../models/ModuleHandle';
import { ParameterAttributes } from '../models/ParameterAttributes';
import { ParameterInfo } from '../models/ParameterInfo';
import { ProblemDetails } from '../models/ProblemDetails';
import { PropertyAttributes } from '../models/PropertyAttributes';
import { PropertyInfo } from '../models/PropertyInfo';
import { RegisterDto } from '../models/RegisterDto';
import { ResetPasswordDto } from '../models/ResetPasswordDto';
import { RuntimeFieldHandle } from '../models/RuntimeFieldHandle';
import { RuntimeMethodHandle } from '../models/RuntimeMethodHandle';
import { RuntimeTypeHandle } from '../models/RuntimeTypeHandle';
import { SecurityRuleSet } from '../models/SecurityRuleSet';
import { StructLayoutAttribute } from '../models/StructLayoutAttribute';
import { TokenDto } from '../models/TokenDto';
import { Type } from '../models/Type';
import { TypeAttributes } from '../models/TypeAttributes';
import { TypeInfo } from '../models/TypeInfo';
import { UpdateCommentDto } from '../models/UpdateCommentDto';
import { UpdateGameDto } from '../models/UpdateGameDto';
import { UpdateGameTripUserDto } from '../models/UpdateGameTripUserDto';
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
     * Confirms the email of provided user.
     * @param confirmMailDto ConfirmMailDto
     */
    public authConfirmEmailPost(confirmMailDto?: ConfirmMailDto, _options?: Configuration): Promise<void> {
        const result = this.api.authConfirmEmailPost(confirmMailDto, _options);
        return result.toPromise();
    }

    /**
     * Send Forgot Password Mail to user
     * @param forgotPasswordDto ForgotPasswordDto
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
     * Authenticate a user
     * @param loginDto LoginDto
     */
    public authLoginPost(loginDto?: LoginDto, _options?: Configuration): Promise<TokenDto> {
        const result = this.api.authLoginPost(loginDto, _options);
        return result.toPromise();
    }

    /**
     * Register a user
     * @param registerDto RegisterDto
     */
    public authRegisterPost(registerDto?: RegisterDto, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.authRegisterPost(registerDto, _options);
        return result.toPromise();
    }

    /**
     * change the user\'s password
     * @param resetPasswordDto ResetPasswrdDto
     */
    public authResetPasswordPost(resetPasswordDto?: ResetPasswordDto, _options?: Configuration): Promise<void> {
        const result = this.api.authResetPasswordPost(resetPasswordDto, _options);
        return result.toPromise();
    }


}



import { ObservableCommentApi } from './ObservableAPI';

import { CommentApiRequestFactory, CommentApiResponseProcessor} from "../apis/CommentApi";
export class PromiseCommentApi {
    private api: ObservableCommentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentApiRequestFactory,
        responseProcessor?: CommentApiResponseProcessor
    ) {
        this.api = new ObservableCommentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Comment To location
     * @param locationId Id of location where add comment
     * @param addCommentToLocationDto AddCommentToLocationDto
     */
    public commentAddLocationIdPost(locationId: string, addCommentToLocationDto?: AddCommentToLocationDto, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.commentAddLocationIdPost(locationId, addCommentToLocationDto, _options);
        return result.toPromise();
    }

    /**
     * Get Comment By Id
     * @param commentId Id of wanted Comment
     */
    public commentCommentIdGet(commentId: string, _options?: Configuration): Promise<void | Array<ListCommentDto>> {
        const result = this.api.commentCommentIdGet(commentId, _options);
        return result.toPromise();
    }

    /**
     * @param commentId 
     * @param updateCommentDto 
     */
    public commentCommentIdPut(commentId: string, updateCommentDto?: UpdateCommentDto, _options?: Configuration): Promise<void | Array<ListCommentDto>> {
        const result = this.api.commentCommentIdPut(commentId, updateCommentDto, _options);
        return result.toPromise();
    }

    /**
     * Get All Comment By Location
     * @param locationId Id of location related of Comments
     */
    public commentLocationLocationIdGet(locationId: string, _options?: Configuration): Promise<void | Array<ListCommentDto>> {
        const result = this.api.commentLocationLocationIdGet(locationId, _options);
        return result.toPromise();
    }

    /**
     * Remove Comment By Id
     * @param commentId Id of comment to be removed
     */
    public commentRemoveCommentIdDelete(commentId: string, _options?: Configuration): Promise<void> {
        const result = this.api.commentRemoveCommentIdDelete(commentId, _options);
        return result.toPromise();
    }

    /**
     * Get All Comment By User
     * @param userId Id of User related of Comment
     */
    public commentUserUserIdGet(userId: string, _options?: Configuration): Promise<void | Array<ListCommentDto>> {
        const result = this.api.commentUserUserIdGet(userId, _options);
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
     * Add Game to Location by Game Id and Location Id
     * @param gameId Id of added Game
     * @param locationId Id of location to add Game
     * @param files 
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, files, _options);
        return result.toPromise();
    }

    /**
     * Create new Game
     * @param createGameDto CreateGameDto
     */
    public gameCreateGamePost(createGameDto?: CreateGameDto, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.gameCreateGamePost(createGameDto, _options);
        return result.toPromise();
    }

    /**
     * Delete Game by Id
     * @param gameId Id of deleted Game
     */
    public gameDeleteGameIdDelete(gameId: string, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.gameDeleteGameIdDelete(gameId, _options);
        return result.toPromise();
    }

    /**
     * Update Game
     * @param gameId Id of game to update
     * @param updateGameDto UpdateGameDto
     */
    public gameGameIdPut(gameId: string, updateGameDto?: UpdateGameDto, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameGameIdPut(gameId, updateGameDto, _options);
        return result.toPromise();
    }

    /**
     * Get All Games
     * @param limit Set the limit of number items return
     */
    public gameGet(limit?: number, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameGet(limit, _options);
        return result.toPromise();
    }

    /**
     * Get Game by Id
     * @param gameId Id of Game
     */
    public gameIdGameIdGet(gameId: string, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * Get all Games by related location id
     * @param locationId Id of related location
     */
    public gameLocationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameLocationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }

    /**
     * Get all Games by related location name
     * @param locationName Name of related location
     */
    public gameLocationNameLocationNameGet(locationName: string, _options?: Configuration): Promise<Array<ListGameDto>> {
        const result = this.api.gameLocationNameLocationNameGet(locationName, _options);
        return result.toPromise();
    }

    /**
     * Get Game by Name
     * @param gameName Name of Game
     */
    public gameNameGameNameGet(gameName: string, _options?: Configuration): Promise<GameDto> {
        const result = this.api.gameNameGameNameGet(gameName, _options);
        return result.toPromise();
    }

    /**
     * Remove Game from Location by Game Id and Location Id
     * @param gameId Id of removed Game
     * @param locationId Id of location to remove Game
     * @param files 
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Promise<MessageDto> {
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
     * Add like to game
     * @param addLikeGameDto AddLikeGame
     */
    public likeAddLikeToGamePost(addLikeGameDto?: AddLikeGameDto, _options?: Configuration): Promise<LikedGameDto> {
        const result = this.api.likeAddLikeToGamePost(addLikeGameDto, _options);
        return result.toPromise();
    }

    /**
     * Add like to location
     * @param addLikeLocationDto AddLikeLocationDto
     */
    public likeAddLikeToLocationPost(addLikeLocationDto?: AddLikeLocationDto, _options?: Configuration): Promise<LikedLocationDto> {
        const result = this.api.likeAddLikeToLocationPost(addLikeLocationDto, _options);
        return result.toPromise();
    }

    /**
     * Get all liked games
     */
    public likeAllLikedGamesGet(_options?: Configuration): Promise<Array<LikedGameDto>> {
        const result = this.api.likeAllLikedGamesGet(_options);
        return result.toPromise();
    }

    /**
     * Get all liked location
     */
    public likeAllLikedLocationsGet(_options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        const result = this.api.likeAllLikedLocationsGet(_options);
        return result.toPromise();
    }

    /**
     * Get all liked game by user id
     * @param userId Id of user who liked games
     */
    public likeLikedGamesUserIdGet(userId: string, _options?: Configuration): Promise<Array<ListLikedGameDto>> {
        const result = this.api.likeLikedGamesUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get all liked location by user id
     * @param userId Id of user who liked all getted location
     */
    public likeLikedLocationsUserIdGet(userId: string, _options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        const result = this.api.likeLikedLocationsUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Remove Like to game
     * @param gameId Id of game to remove like
     * @param userId Id of user who liked Game
     * @param files 
     */
    public likeRemoveLikeToGameGameIdUserIdPost(gameId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<LikedGameDto> {
        const result = this.api.likeRemoveLikeToGameGameIdUserIdPost(gameId, userId, files, _options);
        return result.toPromise();
    }

    /**
     * Remove like to location
     * @param locationId id of liked location
     * @param userId id of user who liked location
     * @param files 
     */
    public likeRemoveLikeToLocationLocationIdUserIdPost(locationId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<LikedLocationDto> {
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
     * Create new location
     * @param createLocationDto CreateLocationDto
     */
    public locationCreateLocationPost(createLocationDto?: CreateLocationDto, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.locationCreateLocationPost(createLocationDto, _options);
        return result.toPromise();
    }

    /**
     * Delete location by id
     * @param locationId Id of deleted location
     */
    public locationDeleteLocationIdDelete(locationId: string, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.locationDeleteLocationIdDelete(locationId, _options);
        return result.toPromise();
    }

    /**
     * Get all location by game id
     * @param gameId Id of related game
     */
    public locationGameIdGameIdGet(gameId: string, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * Get all location by game name
     * @param gameName Name of related game
     */
    public locationGameNameGameNameGet(gameName: string, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGameNameGameNameGet(gameName, _options);
        return result.toPromise();
    }

    /**
     * Get all locations
     * @param limit Limit of location present in return
     */
    public locationGet(limit?: number, _options?: Configuration): Promise<Array<LocationDto>> {
        const result = this.api.locationGet(limit, _options);
        return result.toPromise();
    }

    /**
     * Get location by id
     * @param locationId Id of wanted location
     */
    public locationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<GetLocationDto> {
        const result = this.api.locationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }

    /**
     * Update location
     * @param locationId Id of location to update
     * @param updateLocationDto UpdateLocationDto
     */
    public locationLocationIdPut(locationId: string, updateLocationDto?: UpdateLocationDto, _options?: Configuration): Promise<LocationDto> {
        const result = this.api.locationLocationIdPut(locationId, updateLocationDto, _options);
        return result.toPromise();
    }

    /**
     * Get location by name
     * @param locationName Name of wanted Location
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
     * Create and Add picture to Game
     * @param gameId Id of game to add picture
     * @param name Name of picture
     * @param description Description of Picture
     * @param pictureData 
     */
    public pictureAddPictureToGameGameIdPost(gameId: string, name?: string, description?: string, pictureData?: HttpFile, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.pictureAddPictureToGameGameIdPost(gameId, name, description, pictureData, _options);
        return result.toPromise();
    }

    /**
     * Create and add picture to location
     * @param locationId Id of location to add picture
     * @param name Picture name
     * @param description Picture description
     * @param pictureData 
     */
    public pictureAddPictureToLocationLocationIdPost(locationId: string, name?: string, description?: string, pictureData?: HttpFile, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.pictureAddPictureToLocationLocationIdPost(locationId, name, description, pictureData, _options);
        return result.toPromise();
    }

    /**
     * Get picture by id
     * @param pictureId Id of deleted Picture
     */
    public pictureDeletePicturePictureIdDelete(pictureId: string, _options?: Configuration): Promise<MessageDto> {
        const result = this.api.pictureDeletePicturePictureIdDelete(pictureId, _options);
        return result.toPromise();
    }

    /**
     * Get all pictures of game
     * @param gameId Id of game
     */
    public pictureGetPicturesByGameIdGameIdGet(gameId: string, _options?: Configuration): Promise<Array<ListPictureDto>> {
        const result = this.api.pictureGetPicturesByGameIdGameIdGet(gameId, _options);
        return result.toPromise();
    }

    /**
     * Get all pictures of location
     * @param locationId Id of location
     */
    public pictureGetPicturesByLocationIdLocationIdGet(locationId: string, _options?: Configuration): Promise<Array<ListPictureDto>> {
        const result = this.api.pictureGetPicturesByLocationIdLocationIdGet(locationId, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get user by Mail
     * @param userMail Mail of user
     */
    public userEmailUserMailGet(userMail: string, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.userEmailUserMailGet(userMail, _options);
        return result.toPromise();
    }

    /**
     * Get user by id
     * @param userId Id of user
     */
    public userIdUserIdGet(userId: string, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.userIdUserIdGet(userId, _options);
        return result.toPromise();
    }

    /**
     * Get user by Name
     * @param userName Name of user
     */
    public userNameUserNameGet(userName: string, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.userNameUserNameGet(userName, _options);
        return result.toPromise();
    }

    /**
     * Delete User By Id
     * @param userId Id of user
     */
    public userUserIdDelete(userId: string, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.userUserIdDelete(userId, _options);
        return result.toPromise();
    }

    /**
     * Update User
     * @param userId Id of user to delete
     * @param updateGameTripUserDto UpdateGameTripUserDto
     */
    public userUserIdPut(userId: string, updateGameTripUserDto?: UpdateGameTripUserDto, _options?: Configuration): Promise<GameTripUserDto> {
        const result = this.api.userUserIdPut(userId, updateGameTripUserDto, _options);
        return result.toPromise();
    }


}



