import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { TestModel } from '../models/TestModel';
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
    public apiStartupPingGet(_options?: Configuration): Promise<TestModel> {
        const result = this.api.apiStartupPingGet(_options);
        return result.toPromise();
    }


}



