import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { LocationDTO } from '../models/LocationDTO';
import { TestModel } from '../models/TestModel';

import { ObservableStartupApi } from "./ObservableAPI";
import { StartupApiRequestFactory, StartupApiResponseProcessor} from "../apis/StartupApi";

export interface StartupApiApiStartupLocationsGetRequest {
}

export interface StartupApiApiStartupPingGetRequest {
}

export class ObjectStartupApi {
    private api: ObservableStartupApi

    public constructor(configuration: Configuration, requestFactory?: StartupApiRequestFactory, responseProcessor?: StartupApiResponseProcessor) {
        this.api = new ObservableStartupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiStartupLocationsGet(param: StartupApiApiStartupLocationsGetRequest = {}, options?: Configuration): Promise<Array<LocationDTO>> {
        return this.api.apiStartupLocationsGet( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiStartupPingGet(param: StartupApiApiStartupPingGetRequest = {}, options?: Configuration): Promise<TestModel> {
        return this.api.apiStartupPingGet( options).toPromise();
    }

}
