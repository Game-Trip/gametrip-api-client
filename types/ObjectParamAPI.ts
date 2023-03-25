import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'


import { ObservableStartupApi } from "./ObservableAPI";
import { StartupApiRequestFactory, StartupApiResponseProcessor} from "../apis/StartupApi";

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
    public apiStartupPingGet(param: StartupApiApiStartupPingGetRequest = {}, options?: Configuration): Promise<string> {
        return this.api.apiStartupPingGet( options).toPromise();
    }

}