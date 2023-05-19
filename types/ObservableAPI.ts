import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * Confirms the email of provided user.
     * @param confirmMailDto ConfirmMailDto
     */
    public authConfirmEmailPost(confirmMailDto?: ConfirmMailDto, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authConfirmEmailPost(confirmMailDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authConfirmEmailPost(rsp)));
            }));
    }

    /**
     * Send Forgot Password Mail to user
     * @param forgotPasswordDto ForgotPasswordDto
     */
    public authForgotPasswordPost(forgotPasswordDto?: ForgotPasswordDto, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authForgotPasswordPost(forgotPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authForgotPasswordPost(rsp)));
            }));
    }

    /**
     * @param files 
     */
    public authInitializePost(files: Array<HttpFile>, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authInitializePost(files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authInitializePost(rsp)));
            }));
    }

    /**
     * {    \"username\": \"Dercraker\",    \"password\": \"NMdRx$HqyT8jX6\"  }
     * Authenticate a user
     * @param loginDto LoginDto
     */
    public authLoginPost(loginDto?: LoginDto, _options?: Configuration): Observable<TokenDto> {
        const requestContextPromise = this.requestFactory.authLoginPost(loginDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authLoginPost(rsp)));
            }));
    }

    /**
     * Register a user
     * @param registerDto RegisterDto
     */
    public authRegisterPost(registerDto?: RegisterDto, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.authRegisterPost(registerDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authRegisterPost(rsp)));
            }));
    }

    /**
     * change the user\'s password
     * @param resetPasswordDto ResetPasswrdDto
     */
    public authResetPasswordPost(resetPasswordDto?: ResetPasswordDto, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authResetPasswordPost(resetPasswordDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authResetPasswordPost(rsp)));
            }));
    }

}

import { CommentApiRequestFactory, CommentApiResponseProcessor} from "../apis/CommentApi";
export class ObservableCommentApi {
    private requestFactory: CommentApiRequestFactory;
    private responseProcessor: CommentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommentApiRequestFactory,
        responseProcessor?: CommentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommentApiResponseProcessor();
    }

    /**
     * Add Comment To location
     * @param locationId Id of location where add comment
     * @param froce Force Validation for this comment
     * @param addCommentToLocationDto AddCommentToLocationDto
     */
    public commentAddLocationIdPost(locationId: string, froce?: boolean, addCommentToLocationDto?: AddCommentToLocationDto, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.commentAddLocationIdPost(locationId, froce, addCommentToLocationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentAddLocationIdPost(rsp)));
            }));
    }

    /**
     * Get Comment By Id
     * @param commentId Id of wanted Comment
     */
    public commentCommentIdGet(commentId: string, _options?: Configuration): Observable<void | Array<ListCommentDto>> {
        const requestContextPromise = this.requestFactory.commentCommentIdGet(commentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentCommentIdGet(rsp)));
            }));
    }

    /**
     * @param commentId 
     * @param updateCommentDto 
     */
    public commentCommentIdPut(commentId: string, updateCommentDto?: UpdateCommentDto, _options?: Configuration): Observable<void | Array<ListCommentDto>> {
        const requestContextPromise = this.requestFactory.commentCommentIdPut(commentId, updateCommentDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentCommentIdPut(rsp)));
            }));
    }

    /**
     * Get All Comment By Location
     * @param locationId Id of location related of Comments
     */
    public commentLocationLocationIdGet(locationId: string, _options?: Configuration): Observable<void | Array<ListCommentDto>> {
        const requestContextPromise = this.requestFactory.commentLocationLocationIdGet(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentLocationLocationIdGet(rsp)));
            }));
    }

    /**
     * Remove Comment By Id
     * @param commentId Id of comment to be removed
     */
    public commentRemoveCommentIdDelete(commentId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.commentRemoveCommentIdDelete(commentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentRemoveCommentIdDelete(rsp)));
            }));
    }

    /**
     * Get All Comment By User
     * @param userId Id of User related of Comment
     */
    public commentUserUserIdGet(userId: string, _options?: Configuration): Observable<void | Array<ListCommentDto>> {
        const requestContextPromise = this.requestFactory.commentUserUserIdGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.commentUserUserIdGet(rsp)));
            }));
    }

}

import { GameApiRequestFactory, GameApiResponseProcessor} from "../apis/GameApi";
export class ObservableGameApi {
    private requestFactory: GameApiRequestFactory;
    private responseProcessor: GameApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GameApiRequestFactory,
        responseProcessor?: GameApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GameApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GameApiResponseProcessor();
    }

    /**
     * Add Game to Location by Game Id and Location Id
     * @param gameId Id of added Game
     * @param locationId Id of location to add Game
     * @param files 
     */
    public gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.gameAddGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameAddGameToLocationGameGameIdLocationLocationIdPost(rsp)));
            }));
    }

    /**
     * Create new Game
     * @param force 
     * @param createGameDto CreateGameDto
     */
    public gameCreateGamePost(force?: boolean, createGameDto?: CreateGameDto, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.gameCreateGamePost(force, createGameDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameCreateGamePost(rsp)));
            }));
    }

    /**
     * Delete Game by Id
     * @param gameId Id of deleted Game
     */
    public gameDeleteGameIdDelete(gameId: string, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.gameDeleteGameIdDelete(gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameDeleteGameIdDelete(rsp)));
            }));
    }

    /**
     * Update Game
     * @param gameId Id of game to update
     * @param updateGameDto UpdateGameDto
     */
    public gameGameIdPut(gameId: string, updateGameDto?: UpdateGameDto, _options?: Configuration): Observable<GameDto> {
        const requestContextPromise = this.requestFactory.gameGameIdPut(gameId, updateGameDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameGameIdPut(rsp)));
            }));
    }

    /**
     * Get All Games
     * @param limit Set the limit of number items return
     */
    public gameGet(limit?: number, _options?: Configuration): Observable<Array<ListGameDto>> {
        const requestContextPromise = this.requestFactory.gameGet(limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameGet(rsp)));
            }));
    }

    /**
     * Get Game by Id
     * @param gameId Id of Game
     */
    public gameIdGameIdGet(gameId: string, _options?: Configuration): Observable<GameDto> {
        const requestContextPromise = this.requestFactory.gameIdGameIdGet(gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameIdGameIdGet(rsp)));
            }));
    }

    /**
     * Get all Games by related location id
     * @param locationId Id of related location
     */
    public gameLocationIdLocationIdGet(locationId: string, _options?: Configuration): Observable<Array<ListGameDto>> {
        const requestContextPromise = this.requestFactory.gameLocationIdLocationIdGet(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameLocationIdLocationIdGet(rsp)));
            }));
    }

    /**
     * Get all Games by related location name
     * @param locationName Name of related location
     */
    public gameLocationNameLocationNameGet(locationName: string, _options?: Configuration): Observable<Array<ListGameDto>> {
        const requestContextPromise = this.requestFactory.gameLocationNameLocationNameGet(locationName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameLocationNameLocationNameGet(rsp)));
            }));
    }

    /**
     * Get Game by Name
     * @param gameName Name of Game
     */
    public gameNameGameNameGet(gameName: string, _options?: Configuration): Observable<GameDto> {
        const requestContextPromise = this.requestFactory.gameNameGameNameGet(gameName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameNameGameNameGet(rsp)));
            }));
    }

    /**
     * Remove Game from Location by Game Id and Location Id
     * @param gameId Id of removed Game
     * @param locationId Id of location to remove Game
     * @param files 
     */
    public gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId: string, locationId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(gameId, locationId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.gameRemoveGameToLocationGameGameIdLocationLocationIdPost(rsp)));
            }));
    }

}

import { LikeApiRequestFactory, LikeApiResponseProcessor} from "../apis/LikeApi";
export class ObservableLikeApi {
    private requestFactory: LikeApiRequestFactory;
    private responseProcessor: LikeApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LikeApiRequestFactory,
        responseProcessor?: LikeApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LikeApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LikeApiResponseProcessor();
    }

    /**
     * Add like to game
     * @param addLikeGameDto AddLikeGame
     */
    public likeAddLikeToGamePost(addLikeGameDto?: AddLikeGameDto, _options?: Configuration): Observable<LikedGameDto> {
        const requestContextPromise = this.requestFactory.likeAddLikeToGamePost(addLikeGameDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeAddLikeToGamePost(rsp)));
            }));
    }

    /**
     * Add like to location
     * @param addLikeLocationDto AddLikeLocationDto
     */
    public likeAddLikeToLocationPost(addLikeLocationDto?: AddLikeLocationDto, _options?: Configuration): Observable<LikedLocationDto> {
        const requestContextPromise = this.requestFactory.likeAddLikeToLocationPost(addLikeLocationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeAddLikeToLocationPost(rsp)));
            }));
    }

    /**
     * Get all liked games
     */
    public likeAllLikedGamesGet(_options?: Configuration): Observable<Array<LikedGameDto>> {
        const requestContextPromise = this.requestFactory.likeAllLikedGamesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeAllLikedGamesGet(rsp)));
            }));
    }

    /**
     * Get all liked location
     */
    public likeAllLikedLocationsGet(_options?: Configuration): Observable<Array<ListLikedLocationDto>> {
        const requestContextPromise = this.requestFactory.likeAllLikedLocationsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeAllLikedLocationsGet(rsp)));
            }));
    }

    /**
     * Get all liked game by user id
     * @param userId Id of user who liked games
     */
    public likeLikedGamesUserIdGet(userId: string, _options?: Configuration): Observable<Array<ListLikedGameDto>> {
        const requestContextPromise = this.requestFactory.likeLikedGamesUserIdGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeLikedGamesUserIdGet(rsp)));
            }));
    }

    /**
     * Get all liked location by user id
     * @param userId Id of user who liked all getted location
     */
    public likeLikedLocationsUserIdGet(userId: string, _options?: Configuration): Observable<Array<ListLikedLocationDto>> {
        const requestContextPromise = this.requestFactory.likeLikedLocationsUserIdGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeLikedLocationsUserIdGet(rsp)));
            }));
    }

    /**
     * Remove Like to game
     * @param gameId Id of game to remove like
     * @param userId Id of user who liked Game
     * @param files 
     */
    public likeRemoveLikeToGameGameIdUserIdPost(gameId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<LikedGameDto> {
        const requestContextPromise = this.requestFactory.likeRemoveLikeToGameGameIdUserIdPost(gameId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeRemoveLikeToGameGameIdUserIdPost(rsp)));
            }));
    }

    /**
     * Remove like to location
     * @param locationId id of liked location
     * @param userId id of user who liked location
     * @param files 
     */
    public likeRemoveLikeToLocationLocationIdUserIdPost(locationId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<LikedLocationDto> {
        const requestContextPromise = this.requestFactory.likeRemoveLikeToLocationLocationIdUserIdPost(locationId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.likeRemoveLikeToLocationLocationIdUserIdPost(rsp)));
            }));
    }

}

import { LocationApiRequestFactory, LocationApiResponseProcessor} from "../apis/LocationApi";
export class ObservableLocationApi {
    private requestFactory: LocationApiRequestFactory;
    private responseProcessor: LocationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LocationApiRequestFactory,
        responseProcessor?: LocationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LocationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LocationApiResponseProcessor();
    }

    /**
     * Create new location
     * @param force 
     * @param createLocationDto CreateLocationDto
     */
    public locationCreateLocationPost(force?: boolean, createLocationDto?: CreateLocationDto, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.locationCreateLocationPost(force, createLocationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationCreateLocationPost(rsp)));
            }));
    }

    /**
     * Delete location by id
     * @param locationId Id of deleted location
     */
    public locationDeleteLocationIdDelete(locationId: string, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.locationDeleteLocationIdDelete(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationDeleteLocationIdDelete(rsp)));
            }));
    }

    /**
     * Get all location by game id
     * @param gameId Id of related game
     */
    public locationGameIdGameIdGet(gameId: string, _options?: Configuration): Observable<Array<LocationDto>> {
        const requestContextPromise = this.requestFactory.locationGameIdGameIdGet(gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationGameIdGameIdGet(rsp)));
            }));
    }

    /**
     * Get all location by game name
     * @param gameName Name of related game
     */
    public locationGameNameGameNameGet(gameName: string, _options?: Configuration): Observable<Array<LocationDto>> {
        const requestContextPromise = this.requestFactory.locationGameNameGameNameGet(gameName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationGameNameGameNameGet(rsp)));
            }));
    }

    /**
     * Get all locations
     * @param limit Limit of location present in return
     */
    public locationGet(limit?: number, _options?: Configuration): Observable<Array<LocationDto>> {
        const requestContextPromise = this.requestFactory.locationGet(limit, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationGet(rsp)));
            }));
    }

    /**
     * Get location by id
     * @param locationId Id of wanted location
     */
    public locationIdLocationIdGet(locationId: string, _options?: Configuration): Observable<GetLocationDto> {
        const requestContextPromise = this.requestFactory.locationIdLocationIdGet(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationIdLocationIdGet(rsp)));
            }));
    }

    /**
     * Update location
     * @param locationId Id of location to update
     * @param updateLocationDto UpdateLocationDto
     */
    public locationLocationIdPut(locationId: string, updateLocationDto?: UpdateLocationDto, _options?: Configuration): Observable<LocationDto> {
        const requestContextPromise = this.requestFactory.locationLocationIdPut(locationId, updateLocationDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationLocationIdPut(rsp)));
            }));
    }

    /**
     * Get location by name
     * @param locationName Name of wanted Location
     */
    public locationNameLocationNameGet(locationName: string, _options?: Configuration): Observable<GetLocationDto> {
        const requestContextPromise = this.requestFactory.locationNameLocationNameGet(locationName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.locationNameLocationNameGet(rsp)));
            }));
    }

}

import { PictureApiRequestFactory, PictureApiResponseProcessor} from "../apis/PictureApi";
export class ObservablePictureApi {
    private requestFactory: PictureApiRequestFactory;
    private responseProcessor: PictureApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PictureApiRequestFactory,
        responseProcessor?: PictureApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PictureApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PictureApiResponseProcessor();
    }

    /**
     * Create and Add picture to Game
     * @param gameId Id of game to add picture
     * @param userId 
     * @param name Name of picture
     * @param description Description of Picture
     * @param force 
     * @param pictureData 
     */
    public pictureAddPictureToGameGameIdUserIdPost(gameId: string, userId: string, name?: string, description?: string, force?: boolean, pictureData?: HttpFile, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.pictureAddPictureToGameGameIdUserIdPost(gameId, userId, name, description, force, pictureData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pictureAddPictureToGameGameIdUserIdPost(rsp)));
            }));
    }

    /**
     * Create and add picture to location
     * @param locationId Id of location to add picture
     * @param userId 
     * @param name Picture name
     * @param description Picture description
     * @param force 
     * @param pictureData 
     */
    public pictureAddPictureToLocationLocationIdUserIdPost(locationId: string, userId: string, name?: string, description?: string, force?: boolean, pictureData?: HttpFile, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.pictureAddPictureToLocationLocationIdUserIdPost(locationId, userId, name, description, force, pictureData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pictureAddPictureToLocationLocationIdUserIdPost(rsp)));
            }));
    }

    /**
     * Get picture by id
     * @param pictureId Id of deleted Picture
     */
    public pictureDeletePicturePictureIdDelete(pictureId: string, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.pictureDeletePicturePictureIdDelete(pictureId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pictureDeletePicturePictureIdDelete(rsp)));
            }));
    }

    /**
     * Get all pictures of game
     * @param gameId Id of game
     */
    public pictureGetPicturesByGameIdGameIdGet(gameId: string, _options?: Configuration): Observable<Array<ListPictureDto>> {
        const requestContextPromise = this.requestFactory.pictureGetPicturesByGameIdGameIdGet(gameId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pictureGetPicturesByGameIdGameIdGet(rsp)));
            }));
    }

    /**
     * Get all pictures of location
     * @param locationId Id of location
     */
    public pictureGetPicturesByLocationIdLocationIdGet(locationId: string, _options?: Configuration): Observable<Array<ListPictureDto>> {
        const requestContextPromise = this.requestFactory.pictureGetPicturesByLocationIdLocationIdGet(locationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pictureGetPicturesByLocationIdLocationIdGet(rsp)));
            }));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * @param name 
     * @param description 
     * @param editor 
     * @param releaseDate 
     */
    public searchSearchGameGet(name?: string, description?: string, editor?: string, releaseDate?: number, _options?: Configuration): Observable<Array<GameNameDto>> {
        const requestContextPromise = this.requestFactory.searchSearchGameGet(name, description, editor, releaseDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchSearchGameGet(rsp)));
            }));
    }

    /**
     * @param name 
     * @param description 
     * @param latitude 
     * @param longitude 
     */
    public searchSearchLocationGet(name?: string, description?: string, latitude?: number, longitude?: number, _options?: Configuration): Observable<Array<LocationNameDto>> {
        const requestContextPromise = this.requestFactory.searchSearchLocationGet(name, description, latitude, longitude, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchSearchLocationGet(rsp)));
            }));
    }

}

import { StatusApiRequestFactory, StatusApiResponseProcessor} from "../apis/StatusApi";
export class ObservableStatusApi {
    private requestFactory: StatusApiRequestFactory;
    private responseProcessor: StatusApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StatusApiRequestFactory,
        responseProcessor?: StatusApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StatusApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StatusApiResponseProcessor();
    }

    /**
     * Ping API
     */
    public statusGet(_options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.statusGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.statusGet(rsp)));
            }));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Get user by Mail
     * @param userMail Mail of user
     */
    public userEmailUserMailGet(userMail: string, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.userEmailUserMailGet(userMail, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userEmailUserMailGet(rsp)));
            }));
    }

    /**
     * Get user by id
     * @param userId Id of user
     */
    public userIdUserIdGet(userId: string, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.userIdUserIdGet(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userIdUserIdGet(rsp)));
            }));
    }

    /**
     * Get user by Name
     * @param userName Name of user
     */
    public userNameUserNameGet(userName: string, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.userNameUserNameGet(userName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userNameUserNameGet(rsp)));
            }));
    }

    /**
     * Delete User By Id
     * @param userId Id of user
     */
    public userUserIdDelete(userId: string, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.userUserIdDelete(userId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userUserIdDelete(rsp)));
            }));
    }

    /**
     * Update User
     * @param userId Id of user to delete
     * @param updateGameTripUserDto UpdateGameTripUserDto
     */
    public userUserIdPut(userId: string, updateGameTripUserDto?: UpdateGameTripUserDto, _options?: Configuration): Observable<GameTripUserDto> {
        const requestContextPromise = this.requestFactory.userUserIdPut(userId, updateGameTripUserDto, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.userUserIdPut(rsp)));
            }));
    }

}

import { ValidationApiRequestFactory, ValidationApiResponseProcessor} from "../apis/ValidationApi";
export class ObservableValidationApi {
    private requestFactory: ValidationApiRequestFactory;
    private responseProcessor: ValidationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ValidationApiRequestFactory,
        responseProcessor?: ValidationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ValidationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ValidationApiResponseProcessor();
    }

    /**
     * @param commentId 
     * @param userId 
     * @param files 
     */
    public validationSwitchCommentValidateStateCommentIdUserIdPost(commentId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.validationSwitchCommentValidateStateCommentIdUserIdPost(commentId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validationSwitchCommentValidateStateCommentIdUserIdPost(rsp)));
            }));
    }

    /**
     * @param gameId 
     * @param userId 
     * @param files 
     */
    public validationSwitchGameValidateStateGameIdUserIdPost(gameId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.validationSwitchGameValidateStateGameIdUserIdPost(gameId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validationSwitchGameValidateStateGameIdUserIdPost(rsp)));
            }));
    }

    /**
     * @param locationId 
     * @param userId 
     * @param files 
     */
    public validationSwitchLocationValidateStateLocationIdUserIdPost(locationId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.validationSwitchLocationValidateStateLocationIdUserIdPost(locationId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validationSwitchLocationValidateStateLocationIdUserIdPost(rsp)));
            }));
    }

    /**
     * @param pictureId 
     * @param userId 
     * @param files 
     */
    public validationSwitchPictureValidateStatePictureIdUserIdPost(pictureId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Observable<MessageDto> {
        const requestContextPromise = this.requestFactory.validationSwitchPictureValidateStatePictureIdUserIdPost(pictureId, userId, files, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validationSwitchPictureValidateStatePictureIdUserIdPost(rsp)));
            }));
    }

}
