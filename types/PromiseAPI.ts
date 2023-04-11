import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { LocationDTO } from '../models/LocationDTO';
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
    public apiStartupLocationsGet(_options?: Configuration): Promise<Array<LocationDTO>> {
        const result = this.api.apiStartupLocationsGet(_options);
        return result.toPromise();
    }

    /**
     */
    public apiStartupPingGet(_options?: Configuration): Promise<TestModel> {
        const result = this.api.apiStartupPingGet(_options);
        return result.toPromise();
    }


}



