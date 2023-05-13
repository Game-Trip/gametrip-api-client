// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddCommentToLocationDto } from '../models/AddCommentToLocationDto';
import { ListCommentDto } from '../models/ListCommentDto';
import { MessageDto } from '../models/MessageDto';
import { UpdateCommentDto } from '../models/UpdateCommentDto';

/**
 * no description
 */
export class CommentApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add Comment To location
     * @param locationId Id of location where add comment
     * @param addCommentToLocationDto AddCommentToLocationDto
     */
    public async commentAddLocationIdPost(locationId: string, addCommentToLocationDto?: AddCommentToLocationDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError("CommentApi", "commentAddLocationIdPost", "locationId");
        }



        // Path Params
        const localVarPath = '/Comment/Add/{locationId}'
            .replace('{' + 'locationId' + '}', encodeURIComponent(String(locationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addCommentToLocationDto, "AddCommentToLocationDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Get Comment By Id
     * @param commentId Id of wanted Comment
     */
    public async commentCommentIdGet(commentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new RequiredError("CommentApi", "commentCommentIdGet", "commentId");
        }


        // Path Params
        const localVarPath = '/Comment/{commentId}'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * @param commentId 
     * @param updateCommentDto 
     */
    public async commentCommentIdPut(commentId: string, updateCommentDto?: UpdateCommentDto, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new RequiredError("CommentApi", "commentCommentIdPut", "commentId");
        }



        // Path Params
        const localVarPath = '/Comment/{commentId}'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(updateCommentDto, "UpdateCommentDto", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * Get All Comment By Location
     * @param locationId Id of location related of Comments
     */
    public async commentLocationLocationIdGet(locationId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'locationId' is not null or undefined
        if (locationId === null || locationId === undefined) {
            throw new RequiredError("CommentApi", "commentLocationLocationIdGet", "locationId");
        }


        // Path Params
        const localVarPath = '/Comment/Location/{locationId}'
            .replace('{' + 'locationId' + '}', encodeURIComponent(String(locationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Remove Comment By Id
     * @param commentId Id of comment to be removed
     */
    public async commentRemoveCommentIdDelete(commentId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'commentId' is not null or undefined
        if (commentId === null || commentId === undefined) {
            throw new RequiredError("CommentApi", "commentRemoveCommentIdDelete", "commentId");
        }


        // Path Params
        const localVarPath = '/Comment/Remove/{commentId}'
            .replace('{' + 'commentId' + '}', encodeURIComponent(String(commentId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Get All Comment By User
     * @param userId Id of User related of Comment
     */
    public async commentUserUserIdGet(userId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError("CommentApi", "commentUserUserIdGet", "userId");
        }


        // Path Params
        const localVarPath = '/Comment/User/{userId}'
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class CommentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentAddLocationIdPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentAddLocationIdPost(response: ResponseContext): Promise<MessageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
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
     * @params response Response returned by the server for a request to commentCommentIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentCommentIdGet(response: ResponseContext): Promise<void | Array<ListCommentDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListCommentDto>", ""
            ) as Array<ListCommentDto>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Array<ListCommentDto>", ""
            ) as void | Array<ListCommentDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentCommentIdPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentCommentIdPut(response: ResponseContext): Promise<void | Array<ListCommentDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListCommentDto>", ""
            ) as Array<ListCommentDto>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Array<ListCommentDto>", ""
            ) as void | Array<ListCommentDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentLocationLocationIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentLocationLocationIdGet(response: ResponseContext): Promise<void | Array<ListCommentDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListCommentDto>", ""
            ) as Array<ListCommentDto>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Array<ListCommentDto>", ""
            ) as void | Array<ListCommentDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentRemoveCommentIdDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentRemoveCommentIdDelete(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to commentUserUserIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async commentUserUserIdGet(response: ResponseContext): Promise<void | Array<ListCommentDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<ListCommentDto>", ""
            ) as Array<ListCommentDto>;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: MessageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MessageDto", ""
            ) as MessageDto;
            throw new ApiException<MessageDto>(response.httpStatusCode, "Not Found", body, response.headers);
        }
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void | Array<ListCommentDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | Array<ListCommentDto>", ""
            ) as void | Array<ListCommentDto>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
