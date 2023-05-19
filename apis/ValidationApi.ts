// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { MessageDto } from '../models/MessageDto';

/**
 * no description
 */
export class ValidationApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param commentId 
     * @param userId 
     * @param files 
     */
    public async validationSwitchCommentValidateStateCommentIdUserIdPost(commentId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchCommentValidateStateCommentIdUserIdPost", "commentId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchCommentValidateStateCommentIdUserIdPost", "userId");
        }


        // verify required parameter 'files' is not null or undefined
        if (files === null || files === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchCommentValidateStateCommentIdUserIdPost", "files");
        }


        // Path Params
        const localVarPath = '/Validation/SwitchCommentValidateState/{commentId}/{userId}'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (files) {
            // TODO: replace .append with .set
            localVarFormParams.append('files', files.join(COLLECTION_FORMATS["csv"]));
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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
     * @param gameId 
     * @param userId 
     * @param files 
     */
    public async validationSwitchGameValidateStateGameIdUserIdPost(gameId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'gameId' is not null or undefined
        if (gameId === null || gameId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchGameValidateStateGameIdUserIdPost", "gameId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchGameValidateStateGameIdUserIdPost", "userId");
        }


        // verify required parameter 'files' is not null or undefined
        if (files === null || files === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchGameValidateStateGameIdUserIdPost", "files");
        }


        // Path Params
        const localVarPath = '/Validation/SwitchGameValidateState/{gameId}/{userId}'
            .replace('{' + 'gameId' + '}', encodeURIComponent(String(gameId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (files) {
            // TODO: replace .append with .set
            localVarFormParams.append('files', files.join(COLLECTION_FORMATS["csv"]));
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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
     * @param locationId 
     * @param userId 
     * @param files 
     */
    public async validationSwitchLocationValidateStateLocationIdUserIdPost(locationId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchLocationValidateStateLocationIdUserIdPost", "locationId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchLocationValidateStateLocationIdUserIdPost", "userId");
        }


        // verify required parameter 'files' is not null or undefined
        if (files === null || files === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchLocationValidateStateLocationIdUserIdPost", "files");
        }


        // Path Params
        const localVarPath = '/Validation/SwitchLocationValidateState/{locationId}/{userId}'
            .replace('{' + 'locationId' + '}', encodeURIComponent(String(locationId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (files) {
            // TODO: replace .append with .set
            localVarFormParams.append('files', files.join(COLLECTION_FORMATS["csv"]));
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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
     * @param pictureId 
     * @param userId 
     * @param files 
     */
    public async validationSwitchPictureValidateStatePictureIdUserIdPost(pictureId: string, userId: string, files: Array<HttpFile>, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'pictureId' is not null or undefined
        if (pictureId === null || pictureId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchPictureValidateStatePictureIdUserIdPost", "pictureId");
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchPictureValidateStatePictureIdUserIdPost", "userId");
        }


        // verify required parameter 'files' is not null or undefined
        if (files === null || files === undefined) {
            throw new RequiredError("ValidationApi", "validationSwitchPictureValidateStatePictureIdUserIdPost", "files");
        }


        // Path Params
        const localVarPath = '/Validation/SwitchPictureValidateState/{pictureId}/{userId}'
            .replace('{' + 'pictureId' + '}', encodeURIComponent(String(pictureId)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (files) {
            // TODO: replace .append with .set
            localVarFormParams.append('files', files.join(COLLECTION_FORMATS["csv"]));
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
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

export class ValidationApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validationSwitchCommentValidateStateCommentIdUserIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validationSwitchCommentValidateStateCommentIdUserIdPost(response: ResponseContext): Promise<MessageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validationSwitchGameValidateStateGameIdUserIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validationSwitchGameValidateStateGameIdUserIdPost(response: ResponseContext): Promise<MessageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validationSwitchLocationValidateStateLocationIdUserIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validationSwitchLocationValidateStateLocationIdUserIdPost(response: ResponseContext): Promise<MessageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validationSwitchPictureValidateStatePictureIdUserIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validationSwitchPictureValidateStatePictureIdUserIdPost(response: ResponseContext): Promise<MessageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
