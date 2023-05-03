import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { ConfirmMailDto } from '../models/ConfirmMailDto';
import { FrogotPasswordDto } from '../models/FrogotPasswordDto';
import { GameTripUserDTO } from '../models/GameTripUserDTO';
import { LocationDTO } from '../models/LocationDTO';
import { LoginDTO } from '../models/LoginDTO';
import { RegisterDTO } from '../models/RegisterDTO';
import { ResetPasswordDTO } from '../models/ResetPasswordDTO';
import { TestModel } from '../models/TestModel';
import { TokenDTO } from '../models/TokenDTO';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthConfirmEmailPostRequest {
    /**
     * 
     * @type ConfirmMailDto
     * @memberof AuthApiauthConfirmEmailPost
     */
    confirmMailDto?: ConfirmMailDto
}

export interface AuthApiAuthFrogotPasswordPostRequest {
    /**
     * 
     * @type FrogotPasswordDto
     * @memberof AuthApiauthFrogotPasswordPost
     */
    frogotPasswordDto?: FrogotPasswordDto
}

export interface AuthApiAuthInitializePostRequest {
}

export interface AuthApiAuthLoginPostRequest {
    /**
     * 
     * @type LoginDTO
     * @memberof AuthApiauthLoginPost
     */
    loginDTO?: LoginDTO
}

export interface AuthApiAuthRegisterPostRequest {
    /**
     * 
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

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authConfirmEmailPost(param: AuthApiAuthConfirmEmailPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authConfirmEmailPost(param.confirmMailDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authFrogotPasswordPost(param: AuthApiAuthFrogotPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authFrogotPasswordPost(param.frogotPasswordDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authInitializePost(param: AuthApiAuthInitializePostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authInitializePost( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authLoginPost(param: AuthApiAuthLoginPostRequest = {}, options?: Configuration): Promise<TokenDTO> {
        return this.api.authLoginPost(param.loginDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authRegisterPost(param: AuthApiAuthRegisterPostRequest = {}, options?: Configuration): Promise<GameTripUserDTO> {
        return this.api.authRegisterPost(param.registerDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authResetPasswordPost(param: AuthApiAuthResetPasswordPostRequest = {}, options?: Configuration): Promise<void> {
        return this.api.authResetPasswordPost(param.resetPasswordDTO,  options).toPromise();
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
