import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { GameTripUserDTO } from '../models/GameTripUserDTO';
import { LocationDTO } from '../models/LocationDTO';
import { LoginDTO } from '../models/LoginDTO';
import { RegisterDTO } from '../models/RegisterDTO';
import { ResetPasswordDTO } from '../models/ResetPasswordDTO';
import { TestModel } from '../models/TestModel';
import { TokenDTO } from '../models/TokenDTO';
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
     * Initialise les table avec les rôles et l'utilisateur Admin
     */
    public authInitializePost(_options?: Configuration): Promise<void> {
        const result = this.api.authInitializePost(_options);
        return result.toPromise();
    }

    /**
     * Permet de login un user dans la DB
     * @param loginDTO Model de login d&#39;un user
     */
    public authLoginPost(loginDTO?: LoginDTO, _options?: Configuration): Promise<TokenDTO> {
        const result = this.api.authLoginPost(loginDTO, _options);
        return result.toPromise();
    }

    /**
     * Permet de register un user dans la DB
     * @param registerDTO Model de l&#39;utilisateur
     */
    public authRegisterPost(registerDTO?: RegisterDTO, _options?: Configuration): Promise<void | GameTripUserDTO> {
        const result = this.api.authRegisterPost(registerDTO, _options);
        return result.toPromise();
    }

    /**
     * @param resetPasswordDTO 
     */
    public authResetPasswordPost(resetPasswordDTO?: ResetPasswordDTO, _options?: Configuration): Promise<void> {
        const result = this.api.authResetPasswordPost(resetPasswordDTO, _options);
        return result.toPromise();
    }

    /**
     * Teste la validiter d'un token
     * @param body token a check
     */
    public authTokenTestPost(body?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authTokenTestPost(body, _options);
        return result.toPromise();
    }


}



import { ObservableStartupApi } from './ObservableAPI';

import { StartupApiRequestFactory, StartupApiResponseProcessor} from "../apis/StartupApi";
export class PromiseStartupApi {
    private api: ObservableStartupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StartupApiRequestFactory,
        responseProcessor?: StartupApiResponseProcessor
    ) {
        this.api = new ObservableStartupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public startupLocationsGet(_options?: Configuration): Promise<Array<LocationDTO>> {
        const result = this.api.startupLocationsGet(_options);
        return result.toPromise();
    }

    /**
     */
    public startupPingGet(_options?: Configuration): Promise<TestModel> {
        const result = this.api.startupPingGet(_options);
        return result.toPromise();
    }


}



