import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AddCommentToLocationDto } from '../models/AddCommentToLocationDto';
import { AddLikeGameDto } from '../models/AddLikeGameDto';
import { AddLikeLocationDto } from '../models/AddLikeLocationDto';
import { AddPictureToGameDto } from '../models/AddPictureToGameDto';
import { AddPictureToLocationDto } from '../models/AddPictureToLocationDto';
import { Assembly } from '../models/Assembly';
import { CallingConventions } from '../models/CallingConventions';
import { Comment } from '../models/Comment';
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
import { Game } from '../models/Game';
import { GameDto } from '../models/GameDto';
import { GameNameDto } from '../models/GameNameDto';
import { GameTripUser } from '../models/GameTripUser';
import { GameTripUserDto } from '../models/GameTripUserDto';
import { GameUpdateRequestDto } from '../models/GameUpdateRequestDto';
import { GenericParameterAttributes } from '../models/GenericParameterAttributes';
import { GetLocationDto } from '../models/GetLocationDto';
import { IdentityError } from '../models/IdentityError';
import { LayoutKind } from '../models/LayoutKind';
import { LikedGame } from '../models/LikedGame';
import { LikedGameDto } from '../models/LikedGameDto';
import { LikedLocation } from '../models/LikedLocation';
import { LikedLocationDto } from '../models/LikedLocationDto';
import { ListCommentDto } from '../models/ListCommentDto';
import { ListGameDto } from '../models/ListGameDto';
import { ListLikedGameDto } from '../models/ListLikedGameDto';
import { ListLikedLocationDto } from '../models/ListLikedLocationDto';
import { ListLocationUpdateRequest } from '../models/ListLocationUpdateRequest';
import { ListPictureDto } from '../models/ListPictureDto';
import { Location } from '../models/Location';
import { LocationDto } from '../models/LocationDto';
import { LocationNameDto } from '../models/LocationNameDto';
import { LocationUpdateRequestDto } from '../models/LocationUpdateRequestDto';
import { LocationUpdateRequestNameDto } from '../models/LocationUpdateRequestNameDto';
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
import { NotFound } from '../models/NotFound';
import { ParameterAttributes } from '../models/ParameterAttributes';
import { ParameterInfo } from '../models/ParameterInfo';
import { Picture } from '../models/Picture';
import { PictureDto } from '../models/PictureDto';
import { ProblemDetails } from '../models/ProblemDetails';
import { PropertyAttributes } from '../models/PropertyAttributes';
import { PropertyInfo } from '../models/PropertyInfo';
import { RegisterDto } from '../models/RegisterDto';
import { RequestGameUpdate } from '../models/RequestGameUpdate';
import { RequestLocationUpdate } from '../models/RequestLocationUpdate';
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

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthConfirmEmailPostRequest {
    /**
     * ConfirmMailDto
     * @type ConfirmMailDto
     * @memberof AuthApiauthConfirmEmailPost
     */
    confirmMailDto?: ConfirmMailDto
}

export interface AuthApiAuthForgotPasswordPostRequest {
    /**
     * ForgotPasswordDto
     * @type ForgotPasswordDto
     * @memberof AuthApiauthForgotPasswordPost
     */
    forgotPasswordDto?: ForgotPasswordDto
}

export interface AuthApiAuthInitializePostRequest {
}

export interface AuthApiAuthLoginPostRequest {
    /**
     * LoginDto
     * @type LoginDto
     * @memberof AuthApiauthLoginPost
     */
    loginDto?: LoginDto
}

export interface AuthApiAuthRegisterPostRequest {
    /**
     * RegisterDto
     * @type RegisterDto
     * @memberof AuthApiauthRegisterPost
     */
    registerDto?: RegisterDto
}

export interface AuthApiAuthResetPasswordPostRequest {
    /**
     * ResetPasswrdDto
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
     * Confirms the email of provided user.
     * @param param the request object
     */
    public authConfirmEmailPost(param: AuthApiAuthConfirmEmailPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authConfirmEmailPost(param.confirmMailDto,  options).toPromise();
    }

    /**
     * Send Forgot Password Mail to user
     * @param param the request object
     */
    public authForgotPasswordPost(param: AuthApiAuthForgotPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authForgotPasswordPost(param.forgotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authInitializePost(param: AuthApiAuthInitializePostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authInitializePost( options).toPromise();
    }

    /**
     * Authenticate a user
     * @param param the request object
     */
    public authLoginPost(param: AuthApiAuthLoginPostRequest = {}, options?: Configuration): Promise<TokenDto> {
        return this.api.authLoginPost(param.loginDto,  options).toPromise();
    }

    /**
     * Register a user
     * @param param the request object
     */
    public authRegisterPost(param: AuthApiAuthRegisterPostRequest = {}, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.authRegisterPost(param.registerDto,  options).toPromise();
    }

    /**
     * change the user\'s password
     * @param param the request object
     */
    public authResetPasswordPost(param: AuthApiAuthResetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authResetPasswordPost(param.resetPasswordDto,  options).toPromise();
    }

}

import { ObservableCommentApi } from "./ObservableAPI";
import { CommentApiRequestFactory, CommentApiResponseProcessor} from "../apis/CommentApi";

export interface CommentApiCommentAddLocationIdPostRequest {
    /**
     * Id of location where add comment
     * @type string
     * @memberof CommentApicommentAddLocationIdPost
     */
    locationId: string
    /**
     * Force Validation for this comment
     * @type boolean
     * @memberof CommentApicommentAddLocationIdPost
     */
    froce?: boolean
    /**
     * AddCommentToLocationDto
     * @type AddCommentToLocationDto
     * @memberof CommentApicommentAddLocationIdPost
     */
    addCommentToLocationDto?: AddCommentToLocationDto
}

export interface CommentApiCommentCommentIdGetRequest {
    /**
     * Id of wanted Comment
     * @type string
     * @memberof CommentApicommentCommentIdGet
     */
    commentId: string
}

export interface CommentApiCommentCommentIdPutRequest {
    /**
     * 
     * @type string
     * @memberof CommentApicommentCommentIdPut
     */
    commentId: string
    /**
     * 
     * @type UpdateCommentDto
     * @memberof CommentApicommentCommentIdPut
     */
    updateCommentDto?: UpdateCommentDto
}

export interface CommentApiCommentLocationLocationIdGetRequest {
    /**
     * Id of location related of Comments
     * @type string
     * @memberof CommentApicommentLocationLocationIdGet
     */
    locationId: string
}

export interface CommentApiCommentRemoveCommentIdDeleteRequest {
    /**
     * Id of comment to be removed
     * @type string
     * @memberof CommentApicommentRemoveCommentIdDelete
     */
    commentId: string
}

export interface CommentApiCommentUserUserIdGetRequest {
    /**
     * Id of User related of Comment
     * @type string
     * @memberof CommentApicommentUserUserIdGet
     */
    userId: string
}

export class ObjectCommentApi {
    private api: ObservableCommentApi

    public constructor(configuration: Configuration, requestFactory?: CommentApiRequestFactory, responseProcessor?: CommentApiResponseProcessor) {
        this.api = new ObservableCommentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Comment To location
     * @param param the request object
     */
    public commentAddLocationIdPost(param: CommentApiCommentAddLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.commentAddLocationIdPost(param.locationId, param.froce, param.addCommentToLocationDto,  options).toPromise();
    }

    /**
     * Get Comment By Id
     * @param param the request object
     */
    public commentCommentIdGet(param: CommentApiCommentCommentIdGetRequest, options?: Configuration): Promise<void | Array<ListCommentDto>> {
        return this.api.commentCommentIdGet(param.commentId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public commentCommentIdPut(param: CommentApiCommentCommentIdPutRequest, options?: Configuration): Promise<void | Array<ListCommentDto>> {
        return this.api.commentCommentIdPut(param.commentId, param.updateCommentDto,  options).toPromise();
    }

    /**
     * Get All Comment By Location
     * @param param the request object
     */
    public commentLocationLocationIdGet(param: CommentApiCommentLocationLocationIdGetRequest, options?: Configuration): Promise<void | Array<ListCommentDto>> {
        return this.api.commentLocationLocationIdGet(param.locationId,  options).toPromise();
    }

    /**
     * Remove Comment By Id
     * @param param the request object
     */
    public commentRemoveCommentIdDelete(param: CommentApiCommentRemoveCommentIdDeleteRequest, options?: Configuration): Promise<void> {
        return this.api.commentRemoveCommentIdDelete(param.commentId,  options).toPromise();
    }

    /**
     * Get All Comment By User
     * @param param the request object
     */
    public commentUserUserIdGet(param: CommentApiCommentUserUserIdGetRequest, options?: Configuration): Promise<void | Array<ListCommentDto>> {
        return this.api.commentUserUserIdGet(param.userId,  options).toPromise();
    }

}

import { ObservableGameApi } from "./ObservableAPI";
import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";

export interface GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * Id of added Game
     * @type string
     * @memberof GameApigameAddGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * Id of location to add Game
     * @type string
     * @memberof GameApigameAddGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
}

export interface GameApiGameCreateGamePostRequest {
    /**
     * 
     * @type boolean
     * @memberof GameApigameCreateGamePost
     */
    force?: boolean
    /**
     * CreateGameDto
     * @type CreateGameDto
     * @memberof GameApigameCreateGamePost
     */
    createGameDto?: CreateGameDto
}

export interface GameApiGameDeleteGameIdDeleteRequest {
    /**
     * Id of deleted Game
     * @type string
     * @memberof GameApigameDeleteGameIdDelete
     */
    gameId: string
}

export interface GameApiGameDeleteRequestUpdateRequestUpdateIdDeleteRequest {
    /**
     * Id of request UpdateId Game
     * @type string
     * @memberof GameApigameDeleteRequestUpdateRequestUpdateIdDelete
     */
    requestUpdateId: string
}

export interface GameApiGameGameIdPostRequest {
    /**
     * Id of game to request an update
     * @type string
     * @memberof GameApigameGameIdPost
     */
    gameId: string
    /**
     * GameUpdateRequestDto
     * @type GameUpdateRequestDto
     * @memberof GameApigameGameIdPost
     */
    gameUpdateRequestDto?: GameUpdateRequestDto
}

export interface GameApiGameGameIdPutRequest {
    /**
     * Id of game to update
     * @type string
     * @memberof GameApigameGameIdPut
     */
    gameId: string
    /**
     * If used, this means that the update is performed following validation of a request
     * @type string
     * @memberof GameApigameGameIdPut
     */
    requestUpdateId?: string
    /**
     * UpdateGameDto
     * @type UpdateGameDto
     * @memberof GameApigameGameIdPut
     */
    updateGameDto?: UpdateGameDto
}

export interface GameApiGameGetRequest {
    /**
     * Set the limit of number items return
     * @type number
     * @memberof GameApigameGet
     */
    limit?: number
}

export interface GameApiGameIdGameIdGetRequest {
    /**
     * Id of Game
     * @type string
     * @memberof GameApigameIdGameIdGet
     */
    gameId: string
}

export interface GameApiGameLocationIdLocationIdGetRequest {
    /**
     * Id of related location
     * @type string
     * @memberof GameApigameLocationIdLocationIdGet
     */
    locationId: string
}

export interface GameApiGameLocationNameLocationNameGetRequest {
    /**
     * Name of related location
     * @type string
     * @memberof GameApigameLocationNameLocationNameGet
     */
    locationName: string
}

export interface GameApiGameNameGameNameGetRequest {
    /**
     * Name of Game
     * @type string
     * @memberof GameApigameNameGameNameGet
     */
    gameName: string
}

export interface GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * Id of removed Game
     * @type string
     * @memberof GameApigameRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * Id of location to remove Game
     * @type string
     * @memberof GameApigameRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
}

export interface GameApiGameRequestAddGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * Id of added Game
     * @type string
     * @memberof GameApigameRequestAddGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * Id of location to add Game
     * @type string
     * @memberof GameApigameRequestAddGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
}

export interface GameApiGameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPostRequest {
    /**
     * Id of removed Game
     * @type string
     * @memberof GameApigameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    gameId: string
    /**
     * Id of location to remove Game
     * @type string
     * @memberof GameApigameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost
     */
    locationId: string
}

export interface GameApiGameRequestUpdateGameIdGetRequest {
    /**
     * Id of game wanted
     * @type string
     * @memberof GameApigameRequestUpdateGameIdGet
     */
    gameId: string
}

export class ObjectGameApi {
    private api: ObservableGameApi

    public constructor(configuration: Configuration, requestFactory?: GameApiRequestFactory, responseProcessor?: GameApiResponseProcessor) {
        this.api = new ObservableGameApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add Game to Location by Game Id and Location Id
     * @param param the request object
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameAddGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameAddGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId,  options).toPromise();
    }

    /**
     * Create new Game
     * @param param the request object
     */
    public gameCreateGamePost(param: GameApiGameCreateGamePostRequest = {}, options?: Configuration): Promise<MessageDto> {
        return this.api.gameCreateGamePost(param.force, param.createGameDto,  options).toPromise();
    }

    /**
     * Delete Game by Id
     * @param param the request object
     */
    public gameDeleteGameIdDelete(param: GameApiGameDeleteGameIdDeleteRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameDeleteGameIdDelete(param.gameId,  options).toPromise();
    }

    /**
     * Request Update Game by Id
     * @param param the request object
     */
    public gameDeleteRequestUpdateRequestUpdateIdDelete(param: GameApiGameDeleteRequestUpdateRequestUpdateIdDeleteRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameDeleteRequestUpdateRequestUpdateIdDelete(param.requestUpdateId,  options).toPromise();
    }

    /**
     * Make a request to update a game
     * @param param the request object
     */
    public gameGameIdPost(param: GameApiGameGameIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameGameIdPost(param.gameId, param.gameUpdateRequestDto,  options).toPromise();
    }

    /**
     * Update Game
     * @param param the request object
     */
    public gameGameIdPut(param: GameApiGameGameIdPutRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameGameIdPut(param.gameId, param.requestUpdateId, param.updateGameDto,  options).toPromise();
    }

    /**
     * Get All Games
     * @param param the request object
     */
    public gameGet(param: GameApiGameGetRequest = {}, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameGet(param.limit,  options).toPromise();
    }

    /**
     * Get Game by Id
     * @param param the request object
     */
    public gameIdGameIdGet(param: GameApiGameIdGameIdGetRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * Get all Games by related location id
     * @param param the request object
     */
    public gameLocationIdLocationIdGet(param: GameApiGameLocationIdLocationIdGetRequest, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameLocationIdLocationIdGet(param.locationId,  options).toPromise();
    }

    /**
     * Get all Games by related location name
     * @param param the request object
     */
    public gameLocationNameLocationNameGet(param: GameApiGameLocationNameLocationNameGetRequest, options?: Configuration): Promise<Array<ListGameDto>> {
        return this.api.gameLocationNameLocationNameGet(param.locationName,  options).toPromise();
    }

    /**
     * Get Game by Name
     * @param param the request object
     */
    public gameNameGameNameGet(param: GameApiGameNameGameNameGetRequest, options?: Configuration): Promise<GameDto> {
        return this.api.gameNameGameNameGet(param.gameName,  options).toPromise();
    }

    /**
     * Remove Game from Location by Game Id and Location Id
     * @param param the request object
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameRemoveGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId,  options).toPromise();
    }

    /**
     * Create request to Add Game to Location by Game Id and Location Id
     * @param param the request object
     */
    public gameRequestAddGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameRequestAddGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameRequestAddGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId,  options).toPromise();
    }

    /**
     * Create request to remove Game from Location by Game Id and Location Id
     * @param param the request object
     */
    public gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost(param: GameApiGameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameRequestToRemoveGameToLocationGameGameIdLocationLocationIdPost(param.gameId, param.locationId,  options).toPromise();
    }

    /**
     * Get game with all request update
     * @param param the request object
     */
    public gameRequestUpdateGameIdGet(param: GameApiGameRequestUpdateGameIdGetRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.gameRequestUpdateGameIdGet(param.gameId,  options).toPromise();
    }

}

import { ObservableLikeApi } from "./ObservableAPI";
import { LikeApiRequestFactory, LikeApiResponseProcessor} from "../apis/LikeApi";

export interface LikeApiLikeAddLikeToGamePostRequest {
    /**
     * AddLikeGame
     * @type AddLikeGameDto
     * @memberof LikeApilikeAddLikeToGamePost
     */
    addLikeGameDto?: AddLikeGameDto
}

export interface LikeApiLikeAddLikeToLocationPostRequest {
    /**
     * AddLikeLocationDto
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
     * Id of user who liked games
     * @type string
     * @memberof LikeApilikeLikedGamesUserIdGet
     */
    userId: string
}

export interface LikeApiLikeLikedLocationsUserIdGetRequest {
    /**
     * Id of user who liked all getted location
     * @type string
     * @memberof LikeApilikeLikedLocationsUserIdGet
     */
    userId: string
}

export interface LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest {
    /**
     * Id of game to remove like
     * @type string
     * @memberof LikeApilikeRemoveLikeToGameGameIdUserIdPost
     */
    gameId: string
    /**
     * Id of user who liked Game
     * @type string
     * @memberof LikeApilikeRemoveLikeToGameGameIdUserIdPost
     */
    userId: string
}

export interface LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest {
    /**
     * id of liked location
     * @type string
     * @memberof LikeApilikeRemoveLikeToLocationLocationIdUserIdPost
     */
    locationId: string
    /**
     * id of user who liked location
     * @type string
     * @memberof LikeApilikeRemoveLikeToLocationLocationIdUserIdPost
     */
    userId: string
}

export class ObjectLikeApi {
    private api: ObservableLikeApi

    public constructor(configuration: Configuration, requestFactory?: LikeApiRequestFactory, responseProcessor?: LikeApiResponseProcessor) {
        this.api = new ObservableLikeApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add like to game
     * @param param the request object
     */
    public likeAddLikeToGamePost(param: LikeApiLikeAddLikeToGamePostRequest = {}, options?: Configuration): Promise<LikedGameDto> {
        return this.api.likeAddLikeToGamePost(param.addLikeGameDto,  options).toPromise();
    }

    /**
     * Add like to location
     * @param param the request object
     */
    public likeAddLikeToLocationPost(param: LikeApiLikeAddLikeToLocationPostRequest = {}, options?: Configuration): Promise<LikedLocationDto> {
        return this.api.likeAddLikeToLocationPost(param.addLikeLocationDto,  options).toPromise();
    }

    /**
     * Get all liked games
     * @param param the request object
     */
    public likeAllLikedGamesGet(param: LikeApiLikeAllLikedGamesGetRequest = {}, options?: Configuration): Promise<Array<LikedGameDto>> {
        return this.api.likeAllLikedGamesGet( options).toPromise();
    }

    /**
     * Get all liked location
     * @param param the request object
     */
    public likeAllLikedLocationsGet(param: LikeApiLikeAllLikedLocationsGetRequest = {}, options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        return this.api.likeAllLikedLocationsGet( options).toPromise();
    }

    /**
     * Get all liked game by user id
     * @param param the request object
     */
    public likeLikedGamesUserIdGet(param: LikeApiLikeLikedGamesUserIdGetRequest, options?: Configuration): Promise<Array<ListLikedGameDto>> {
        return this.api.likeLikedGamesUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Get all liked location by user id
     * @param param the request object
     */
    public likeLikedLocationsUserIdGet(param: LikeApiLikeLikedLocationsUserIdGetRequest, options?: Configuration): Promise<Array<ListLikedLocationDto>> {
        return this.api.likeLikedLocationsUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Remove Like to game
     * @param param the request object
     */
    public likeRemoveLikeToGameGameIdUserIdPost(param: LikeApiLikeRemoveLikeToGameGameIdUserIdPostRequest, options?: Configuration): Promise<LikedGameDto> {
        return this.api.likeRemoveLikeToGameGameIdUserIdPost(param.gameId, param.userId,  options).toPromise();
    }

    /**
     * Remove like to location
     * @param param the request object
     */
    public likeRemoveLikeToLocationLocationIdUserIdPost(param: LikeApiLikeRemoveLikeToLocationLocationIdUserIdPostRequest, options?: Configuration): Promise<LikedLocationDto> {
        return this.api.likeRemoveLikeToLocationLocationIdUserIdPost(param.locationId, param.userId,  options).toPromise();
    }

}

import { ObservableLocationApi } from "./ObservableAPI";
import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";

export interface LocationApiLocationCreateLocationPostRequest {
    /**
     * 
     * @type boolean
     * @memberof LocationApilocationCreateLocationPost
     */
    force?: boolean
    /**
     * CreateLocationDto
     * @type CreateLocationDto
     * @memberof LocationApilocationCreateLocationPost
     */
    createLocationDto?: CreateLocationDto
}

export interface LocationApiLocationDeleteLocationIdDeleteRequest {
    /**
     * Id of deleted location
     * @type string
     * @memberof LocationApilocationDeleteLocationIdDelete
     */
    locationId: string
}

export interface LocationApiLocationDeleteRequestUpdateRequestUpdateIdDeleteRequest {
    /**
     * Id of request UpdateId Game
     * @type string
     * @memberof LocationApilocationDeleteRequestUpdateRequestUpdateIdDelete
     */
    requestUpdateId: string
}

export interface LocationApiLocationGameIdGameIdGetRequest {
    /**
     * Id of related game
     * @type string
     * @memberof LocationApilocationGameIdGameIdGet
     */
    gameId: string
}

export interface LocationApiLocationGameNameGameNameGetRequest {
    /**
     * Name of related game
     * @type string
     * @memberof LocationApilocationGameNameGameNameGet
     */
    gameName: string
}

export interface LocationApiLocationGetRequest {
    /**
     * Limit of location present in return
     * @type number
     * @memberof LocationApilocationGet
     */
    limit?: number
}

export interface LocationApiLocationIdLocationIdGetRequest {
    /**
     * Id of wanted location
     * @type string
     * @memberof LocationApilocationIdLocationIdGet
     */
    locationId: string
}

export interface LocationApiLocationLocationIdPostRequest {
    /**
     * Id of location to request an update
     * @type string
     * @memberof LocationApilocationLocationIdPost
     */
    locationId: string
    /**
     * LocationUpdateRequestDto
     * @type LocationUpdateRequestDto
     * @memberof LocationApilocationLocationIdPost
     */
    locationUpdateRequestDto?: LocationUpdateRequestDto
}

export interface LocationApiLocationLocationIdPutRequest {
    /**
     * Id of location to update
     * @type string
     * @memberof LocationApilocationLocationIdPut
     */
    locationId: string
    /**
     * If used, this means that the update is performed following validation of a request
     * @type string
     * @memberof LocationApilocationLocationIdPut
     */
    requestUpdateId?: string
    /**
     * UpdateLocationDto
     * @type UpdateLocationDto
     * @memberof LocationApilocationLocationIdPut
     */
    updateLocationDto?: UpdateLocationDto
}

export interface LocationApiLocationNameLocationNameGetRequest {
    /**
     * Name of wanted Location
     * @type string
     * @memberof LocationApilocationNameLocationNameGet
     */
    locationName: string
}

export interface LocationApiLocationRequestUpdateLocationIdGetRequest {
    /**
     * Id of location
     * @type string
     * @memberof LocationApilocationRequestUpdateLocationIdGet
     */
    locationId: string
}

export class ObjectLocationApi {
    private api: ObservableLocationApi

    public constructor(configuration: Configuration, requestFactory?: LocationApiRequestFactory, responseProcessor?: LocationApiResponseProcessor) {
        this.api = new ObservableLocationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create new location
     * @param param the request object
     */
    public locationCreateLocationPost(param: LocationApiLocationCreateLocationPostRequest = {}, options?: Configuration): Promise<MessageDto> {
        return this.api.locationCreateLocationPost(param.force, param.createLocationDto,  options).toPromise();
    }

    /**
     * Delete location by id
     * @param param the request object
     */
    public locationDeleteLocationIdDelete(param: LocationApiLocationDeleteLocationIdDeleteRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.locationDeleteLocationIdDelete(param.locationId,  options).toPromise();
    }

    /**
     * Request Update Game by Id
     * @param param the request object
     */
    public locationDeleteRequestUpdateRequestUpdateIdDelete(param: LocationApiLocationDeleteRequestUpdateRequestUpdateIdDeleteRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.locationDeleteRequestUpdateRequestUpdateIdDelete(param.requestUpdateId,  options).toPromise();
    }

    /**
     * Get all location by game id
     * @param param the request object
     */
    public locationGameIdGameIdGet(param: LocationApiLocationGameIdGameIdGetRequest, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * Get all location by game name
     * @param param the request object
     */
    public locationGameNameGameNameGet(param: LocationApiLocationGameNameGameNameGetRequest, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGameNameGameNameGet(param.gameName,  options).toPromise();
    }

    /**
     * Get all locations
     * @param param the request object
     */
    public locationGet(param: LocationApiLocationGetRequest = {}, options?: Configuration): Promise<Array<LocationDto>> {
        return this.api.locationGet(param.limit,  options).toPromise();
    }

    /**
     * Get location by id
     * @param param the request object
     */
    public locationIdLocationIdGet(param: LocationApiLocationIdLocationIdGetRequest, options?: Configuration): Promise<GetLocationDto> {
        return this.api.locationIdLocationIdGet(param.locationId,  options).toPromise();
    }

    /**
     * Make a request to update a location
     * @param param the request object
     */
    public locationLocationIdPost(param: LocationApiLocationLocationIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.locationLocationIdPost(param.locationId, param.locationUpdateRequestDto,  options).toPromise();
    }

    /**
     * Update location -> For Admin only
     * @param param the request object
     */
    public locationLocationIdPut(param: LocationApiLocationLocationIdPutRequest, options?: Configuration): Promise<GetLocationDto> {
        return this.api.locationLocationIdPut(param.locationId, param.requestUpdateId, param.updateLocationDto,  options).toPromise();
    }

    /**
     * Get location by name
     * @param param the request object
     */
    public locationNameLocationNameGet(param: LocationApiLocationNameLocationNameGetRequest, options?: Configuration): Promise<GetLocationDto> {
        return this.api.locationNameLocationNameGet(param.locationName,  options).toPromise();
    }

    /**
     * Get location with all request update
     * @param param the request object
     */
    public locationRequestUpdateLocationIdGet(param: LocationApiLocationRequestUpdateLocationIdGetRequest, options?: Configuration): Promise<ListLocationUpdateRequest> {
        return this.api.locationRequestUpdateLocationIdGet(param.locationId,  options).toPromise();
    }

}

import { ObservablePictureApi } from "./ObservableAPI";
import { PictureApiRequestFactory, PictureApiResponseProcessor} from "../apis/PictureApi";

export interface PictureApiPictureAddPictureToGameGameIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToGameGameIdUserIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToGameGameIdUserIdPost
     */
    userId: string
    /**
     * 
     * @type boolean
     * @memberof PictureApipictureAddPictureToGameGameIdUserIdPost
     */
    force?: boolean
    /**
     * 
     * @type AddPictureToGameDto
     * @memberof PictureApipictureAddPictureToGameGameIdUserIdPost
     */
    addPictureToGameDto?: AddPictureToGameDto
}

export interface PictureApiPictureAddPictureToLocationLocationIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToLocationLocationIdUserIdPost
     */
    locationId: string
    /**
     * 
     * @type string
     * @memberof PictureApipictureAddPictureToLocationLocationIdUserIdPost
     */
    userId: string
    /**
     * 
     * @type boolean
     * @memberof PictureApipictureAddPictureToLocationLocationIdUserIdPost
     */
    force?: boolean
    /**
     * 
     * @type AddPictureToLocationDto
     * @memberof PictureApipictureAddPictureToLocationLocationIdUserIdPost
     */
    addPictureToLocationDto?: AddPictureToLocationDto
}

export interface PictureApiPictureDeletePicturePictureIdDeleteRequest {
    /**
     * Id of deleted Picture
     * @type string
     * @memberof PictureApipictureDeletePicturePictureIdDelete
     */
    pictureId: string
}

export interface PictureApiPictureGetPicturesByGameIdGameIdGetRequest {
    /**
     * Id of game
     * @type string
     * @memberof PictureApipictureGetPicturesByGameIdGameIdGet
     */
    gameId: string
}

export interface PictureApiPictureGetPicturesByLocationIdLocationIdGetRequest {
    /**
     * Id of location
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
     * Create and Add picture to Game
     * @param param the request object
     */
    public pictureAddPictureToGameGameIdUserIdPost(param: PictureApiPictureAddPictureToGameGameIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.pictureAddPictureToGameGameIdUserIdPost(param.gameId, param.userId, param.force, param.addPictureToGameDto,  options).toPromise();
    }

    /**
     * Create and add picture to location
     * @param param the request object
     */
    public pictureAddPictureToLocationLocationIdUserIdPost(param: PictureApiPictureAddPictureToLocationLocationIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.pictureAddPictureToLocationLocationIdUserIdPost(param.locationId, param.userId, param.force, param.addPictureToLocationDto,  options).toPromise();
    }

    /**
     * Get picture by id
     * @param param the request object
     */
    public pictureDeletePicturePictureIdDelete(param: PictureApiPictureDeletePicturePictureIdDeleteRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.pictureDeletePicturePictureIdDelete(param.pictureId,  options).toPromise();
    }

    /**
     * Get all pictures of game
     * @param param the request object
     */
    public pictureGetPicturesByGameIdGameIdGet(param: PictureApiPictureGetPicturesByGameIdGameIdGetRequest, options?: Configuration): Promise<Array<ListPictureDto>> {
        return this.api.pictureGetPicturesByGameIdGameIdGet(param.gameId,  options).toPromise();
    }

    /**
     * Get all pictures of location
     * @param param the request object
     */
    public pictureGetPicturesByLocationIdLocationIdGet(param: PictureApiPictureGetPicturesByLocationIdLocationIdGetRequest, options?: Configuration): Promise<Array<ListPictureDto>> {
        return this.api.pictureGetPicturesByLocationIdLocationIdGet(param.locationId,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiSearchSearchGameGetRequest {
    /**
     * 
     * @type string
     * @memberof SearchApisearchSearchGameGet
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof SearchApisearchSearchGameGet
     */
    description?: string
    /**
     * 
     * @type string
     * @memberof SearchApisearchSearchGameGet
     */
    editor?: string
    /**
     * 
     * @type number
     * @memberof SearchApisearchSearchGameGet
     */
    releaseDate?: number
}

export interface SearchApiSearchSearchLocationGetRequest {
    /**
     * 
     * @type string
     * @memberof SearchApisearchSearchLocationGet
     */
    name?: string
    /**
     * 
     * @type string
     * @memberof SearchApisearchSearchLocationGet
     */
    description?: string
    /**
     * 
     * @type number
     * @memberof SearchApisearchSearchLocationGet
     */
    latitude?: number
    /**
     * 
     * @type number
     * @memberof SearchApisearchSearchLocationGet
     */
    longitude?: number
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public searchSearchGameGet(param: SearchApiSearchSearchGameGetRequest = {}, options?: Configuration): Promise<Array<GameNameDto>> {
        return this.api.searchSearchGameGet(param.name, param.description, param.editor, param.releaseDate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public searchSearchLocationGet(param: SearchApiSearchSearchLocationGetRequest = {}, options?: Configuration): Promise<Array<LocationNameDto>> {
        return this.api.searchSearchLocationGet(param.name, param.description, param.latitude, param.longitude,  options).toPromise();
    }

}

import { ObservableStatusApi } from "./ObservableAPI";
import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";

export interface StatusApiStatusGetRequest {
}

export class ObjectStatusApi {
    private api: ObservableStatusApi

    public constructor(configuration: Configuration, requestFactory?: StatusApiRequestFactory, responseProcessor?: StatusApiResponseProcessor) {
        this.api = new ObservableStatusApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Ping API
     * @param param the request object
     */
    public statusGet(param: StatusApiStatusGetRequest = {}, options?: Configuration): Promise<void> {
        return this.api.statusGet( options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiUserEmailUserMailGetRequest {
    /**
     * Mail of user
     * @type string
     * @memberof UserApiuserEmailUserMailGet
     */
    userMail: string
}

export interface UserApiUserIdUserIdGetRequest {
    /**
     * Id of user
     * @type string
     * @memberof UserApiuserIdUserIdGet
     */
    userId: string
}

export interface UserApiUserNameUserNameGetRequest {
    /**
     * Name of user
     * @type string
     * @memberof UserApiuserNameUserNameGet
     */
    userName: string
}

export interface UserApiUserUserIdDeleteRequest {
    /**
     * Id of user
     * @type string
     * @memberof UserApiuserUserIdDelete
     */
    userId: string
}

export interface UserApiUserUserIdPutRequest {
    /**
     * Id of user to delete
     * @type string
     * @memberof UserApiuserUserIdPut
     */
    userId: string
    /**
     * UpdateGameTripUserDto
     * @type UpdateGameTripUserDto
     * @memberof UserApiuserUserIdPut
     */
    updateGameTripUserDto?: UpdateGameTripUserDto
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get user by Mail
     * @param param the request object
     */
    public userEmailUserMailGet(param: UserApiUserEmailUserMailGetRequest, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.userEmailUserMailGet(param.userMail,  options).toPromise();
    }

    /**
     * Get user by id
     * @param param the request object
     */
    public userIdUserIdGet(param: UserApiUserIdUserIdGetRequest, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.userIdUserIdGet(param.userId,  options).toPromise();
    }

    /**
     * Get user by Name
     * @param param the request object
     */
    public userNameUserNameGet(param: UserApiUserNameUserNameGetRequest, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.userNameUserNameGet(param.userName,  options).toPromise();
    }

    /**
     * Delete User By Id
     * @param param the request object
     */
    public userUserIdDelete(param: UserApiUserUserIdDeleteRequest, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.userUserIdDelete(param.userId,  options).toPromise();
    }

    /**
     * Update User
     * @param param the request object
     */
    public userUserIdPut(param: UserApiUserUserIdPutRequest, options?: Configuration): Promise<GameTripUserDto> {
        return this.api.userUserIdPut(param.userId, param.updateGameTripUserDto,  options).toPromise();
    }

}

import { ObservableValidationApi } from "./ObservableAPI";
import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";

export interface ValidationApiValidationSwitchCommentValidateStateCommentIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchCommentValidateStateCommentIdUserIdPost
     */
    commentId: string
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchCommentValidateStateCommentIdUserIdPost
     */
    userId: string
}

export interface ValidationApiValidationSwitchGameValidateStateGameIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchGameValidateStateGameIdUserIdPost
     */
    gameId: string
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchGameValidateStateGameIdUserIdPost
     */
    userId: string
}

export interface ValidationApiValidationSwitchLocationValidateStateLocationIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchLocationValidateStateLocationIdUserIdPost
     */
    locationId: string
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchLocationValidateStateLocationIdUserIdPost
     */
    userId: string
}

export interface ValidationApiValidationSwitchPictureValidateStatePictureIdUserIdPostRequest {
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchPictureValidateStatePictureIdUserIdPost
     */
    pictureId: string
    /**
     * 
     * @type string
     * @memberof ValidationApivalidationSwitchPictureValidateStatePictureIdUserIdPost
     */
    userId: string
}

export class ObjectValidationApi {
    private api: ObservableValidationApi

    public constructor(configuration: Configuration, requestFactory?: ValidationApiRequestFactory, responseProcessor?: ValidationApiResponseProcessor) {
        this.api = new ObservableValidationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public validationSwitchCommentValidateStateCommentIdUserIdPost(param: ValidationApiValidationSwitchCommentValidateStateCommentIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.validationSwitchCommentValidateStateCommentIdUserIdPost(param.commentId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public validationSwitchGameValidateStateGameIdUserIdPost(param: ValidationApiValidationSwitchGameValidateStateGameIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.validationSwitchGameValidateStateGameIdUserIdPost(param.gameId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public validationSwitchLocationValidateStateLocationIdUserIdPost(param: ValidationApiValidationSwitchLocationValidateStateLocationIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.validationSwitchLocationValidateStateLocationIdUserIdPost(param.locationId, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public validationSwitchPictureValidateStatePictureIdUserIdPost(param: ValidationApiValidationSwitchPictureValidateStatePictureIdUserIdPostRequest, options?: Configuration): Promise<MessageDto> {
        return this.api.validationSwitchPictureValidateStatePictureIdUserIdPost(param.pictureId, param.userId,  options).toPromise();
    }

}
