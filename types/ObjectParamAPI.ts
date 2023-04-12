import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { GameTripUserDTO } from '../models/GameTripUserDTO';
import { LocationDTO } from '../models/LocationDTO';
import { LoginDTO } from '../models/LoginDTO';
import { RegisterDTO } from '../models/RegisterDTO';
import { ResetPasswordDTO } from '../models/ResetPasswordDTO';
import { TestModel } from '../models/TestModel';
import { TokenDTO } from '../models/TokenDTO';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthInitializePostRequest {
}

export interface AuthApiAuthLoginPostRequest {
    /**
     * Model de login d&#39;un user
     * @type LoginDTO
     * @memberof AuthApiauthLoginPost
     */
    loginDTO?: LoginDTO
}

export interface AuthApiAuthRegisterPostRequest {
    /**
     * Model de l&#39;utilisateur
     * @type RegisterDTO
     * @memberof AuthApiauthRegisterPost
     */
    registerDTO?: RegisterDTO
}

export interface AuthApiAuthResetPasswordPostRequest {
    /**
     * 
     * @type ResetPasswordDTO
     * @memberof AuthApiauthResetPasswordPost
     */
    resetPasswordDTO?: ResetPasswordDTO
}

export interface AuthApiAuthTokenTestPostRequest {
    /**
     * token a check
     * @type string
     * @memberof AuthApiauthTokenTestPost
     */
    body?: string
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Initialise les table avec les rôles et l'utilisateur Admin
     * @param param the request object
     */
    public authInitializePost(param: AuthApiAuthInitializePostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authInitializePost( options).toPromise();
    }

    /**
     * Permet de login un user dans la DB
     * @param param the request object
     */
    public authLoginPost(param: AuthApiAuthLoginPostRequest = {}, options?: Configuration): Promise<TokenDTO> {
        return this.api.authLoginPost(param.loginDTO,  options).toPromise();
    }

    /**
     * Permet de register un user dans la DB
     * @param param the request object
     */
    public authRegisterPost(param: AuthApiAuthRegisterPostRequest = {}, options?: Configuration): Promise<void | GameTripUserDTO> {
        return this.api.authRegisterPost(param.registerDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authResetPasswordPost(param: AuthApiAuthResetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authResetPasswordPost(param.resetPasswordDTO,  options).toPromise();
    }

    /**
     * Teste la validiter d'un token
     * @param param the request object
     */
    public authTokenTestPost(param: AuthApiAuthTokenTestPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authTokenTestPost(param.body,  options).toPromise();
    }

}

import { ObservableStartupApi } from "./ObservableAPI";
import { StartupApiRequestFactory, StartupApiResponseProcessor} from "../apis/StartupApi";

export interface StartupApiStartupLocationsGetRequest {
}

export interface StartupApiStartupPingGetRequest {
}

export class ObjectStartupApi {
    private api: ObservableStartupApi

    public constructor(configuration: Configuration, requestFactory?: StartupApiRequestFactory, responseProcessor?: StartupApiResponseProcessor) {
        this.api = new ObservableStartupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public startupLocationsGet(param: StartupApiStartupLocationsGetRequest = {}, options?: Configuration): Promise<Array<LocationDTO>> {
        return this.api.startupLocationsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public startupPingGet(param: StartupApiStartupPingGetRequest = {}, options?: Configuration): Promise<TestModel> {
        return this.api.startupPingGet( options).toPromise();
    }

}
