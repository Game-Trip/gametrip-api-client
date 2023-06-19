// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { LocationNameDto } from '../models/LocationNameDto';
import { SearchLocationDto } from '../models/SearchLocationDto';
import { SearchedGameDto } from '../models/SearchedGameDto';

/**
 * no description
 */
export class SearchApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param name 
     * @param description 
     * @param editor 
     * @param releaseDate 
     * @param locations 
     */
    public async searchSearchGameGet(name?: string, description?: string, editor?: string, releaseDate?: number, locations?: Array<SearchLocationDto>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;






        // Path Params
        const localVarPath = '/Search/SearchGame';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("Name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (editor !== undefined) {
            requestContext.setQueryParam("Editor", ObjectSerializer.serialize(editor, "string", ""));
        }

        // Query Params
        if (releaseDate !== undefined) {
            requestContext.setQueryParam("ReleaseDate", ObjectSerializer.serialize(releaseDate, "number", "int64"));
        }

        // Query Params
        if (locations !== undefined) {
            requestContext.setQueryParam("Locations", ObjectSerializer.serialize(locations, "Array<SearchLocationDto>", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param name 
     * @param description 
     * @param latitude 
     * @param longitude 
     */
    public async searchSearchLocationGet(name?: string, description?: string, latitude?: number, longitude?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





        // Path Params
        const localVarPath = '/Search/SearchLocation';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("Name", ObjectSerializer.serialize(name, "string", ""));
        }

        // Query Params
        if (description !== undefined) {
            requestContext.setQueryParam("Description", ObjectSerializer.serialize(description, "string", ""));
        }

        // Query Params
        if (latitude !== undefined) {
            requestContext.setQueryParam("Latitude", ObjectSerializer.serialize(latitude, "number", "double"));
        }

        // Query Params
        if (longitude !== undefined) {
            requestContext.setQueryParam("Longitude", ObjectSerializer.serialize(longitude, "number", "double"));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["Bearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SearchApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSearchGameGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchSearchGameGet(response: ResponseContext): Promise<Array<SearchedGameDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SearchedGameDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SearchedGameDto>", ""
            ) as Array<SearchedGameDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SearchedGameDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SearchedGameDto>", ""
            ) as Array<SearchedGameDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchSearchLocationGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchSearchLocationGet(response: ResponseContext): Promise<Array<LocationNameDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<LocationNameDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LocationNameDto>", ""
            ) as Array<LocationNameDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<LocationNameDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<LocationNameDto>", ""
            ) as Array<LocationNameDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
