import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { LocationDTO } from '../models/LocationDTO';
import { TestModel } from '../models/TestModel';

import { StartupApiRequestFactory, StartupApiResponseProcessor} from "../apis/StartupApi";
export class ObservableStartupApi {
    private requestFactory: StartupApiRequestFactory;
    private responseProcessor: StartupApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StartupApiRequestFactory,
        responseProcessor?: StartupApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StartupApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StartupApiResponseProcessor();
    }

    /**
     */
    public apiStartupLocationsGet(_options?: Configuration): Observable<Array<LocationDTO>> {
        const requestContextPromise = this.requestFactory.apiStartupLocationsGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiStartupLocationsGet(rsp)));
            }));
    }

    /**
     */
    public apiStartupPingGet(_options?: Configuration): Observable<TestModel> {
        const requestContextPromise = this.requestFactory.apiStartupPingGet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.apiStartupPingGet(rsp)));
            }));
    }

}
