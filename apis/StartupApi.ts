// TODO: better import syntax?
import {
	BaseAPIRequestFactory,
	RequiredError,
	COLLECTION_FORMATS,
} from './baseapi';
import { Configuration } from '../configuration';
import {
	RequestContext,
	HttpMethod,
	ResponseContext,
	HttpFile,
} from '../http/http';
import { ObjectSerializer } from '../models/ObjectSerializer';
import { ApiException } from './exception';
import { canConsumeForm, isCodeInRange } from '../util';
import { SecurityAuthentication } from '../auth/auth';

import { LocationDto } from '../models/LocationDto';
import { TestModel } from '../models/TestModel';

/**
 * no description
 */
export class StartupApiRequestFactory extends BaseAPIRequestFactory {
	/**
	 */
	public async startupLocationsGet(
		_options?: Configuration,
	): Promise<RequestContext> {
		let _config = _options || this.configuration;

		// Path Params
		const localVarPath = '/Startup/locations';

		// Make Request Context
		const requestContext = _config.baseServer.makeRequestContext(
			localVarPath,
			HttpMethod.GET,
		);
		requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

		let authMethod: SecurityAuthentication | undefined;
		// Apply auth methods
		authMethod = _config.authMethods['Bearer'];
		if (authMethod?.applySecurityAuthentication) {
			await authMethod?.applySecurityAuthentication(requestContext);
		}

		const defaultAuth: SecurityAuthentication | undefined =
			_options?.authMethods?.default ||
			this.configuration?.authMethods?.default;
		if (defaultAuth?.applySecurityAuthentication) {
			await defaultAuth?.applySecurityAuthentication(requestContext);
		}

		return requestContext;
	}

	/**
	 */
	public async startupPingGet(
		_options?: Configuration,
	): Promise<RequestContext> {
		let _config = _options || this.configuration;

		// Path Params
		const localVarPath = '/Startup/ping';

		// Make Request Context
		const requestContext = _config.baseServer.makeRequestContext(
			localVarPath,
			HttpMethod.GET,
		);
		requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');

		let authMethod: SecurityAuthentication | undefined;
		// Apply auth methods
		authMethod = _config.authMethods['Bearer'];
		if (authMethod?.applySecurityAuthentication) {
			await authMethod?.applySecurityAuthentication(requestContext);
		}

		const defaultAuth: SecurityAuthentication | undefined =
			_options?.authMethods?.default ||
			this.configuration?.authMethods?.default;
		if (defaultAuth?.applySecurityAuthentication) {
			await defaultAuth?.applySecurityAuthentication(requestContext);
		}

		return requestContext;
	}
}

export class StartupApiResponseProcessor {
	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content
	 * to the expected objects
	 *
	 * @params response Response returned by the server for a request to startupLocationsGet
	 * @throws ApiException if the response code was not in [200, 299]
	 */
	public async startupLocationsGet(
		response: ResponseContext,
	): Promise<Array<LocationDto>> {
		const contentType = ObjectSerializer.normalizeMediaType(
			response.headers['content-type'],
		);
		if (isCodeInRange('200', response.httpStatusCode)) {
			const body: Array<LocationDto> = ObjectSerializer.deserialize(
				ObjectSerializer.parse(await response.body.text(), contentType),
				'Array<LocationDto>',
				'',
			) as Array<LocationDto>;
			return body;
		}

		// Work around for missing responses in specification, e.g. for petstore.yaml
		if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
			const body: Array<LocationDto> = ObjectSerializer.deserialize(
				ObjectSerializer.parse(await response.body.text(), contentType),
				'Array<LocationDto>',
				'',
			) as Array<LocationDto>;
			return body;
		}

		throw new ApiException<string | Blob | undefined>(
			response.httpStatusCode,
			'Unknown API Status Code!',
			await response.getBodyAsAny(),
			response.headers,
		);
	}

	/**
	 * Unwraps the actual response sent by the server from the response context and deserializes the response content
	 * to the expected objects
	 *
	 * @params response Response returned by the server for a request to startupPingGet
	 * @throws ApiException if the response code was not in [200, 299]
	 */
	public async startupPingGet(response: ResponseContext): Promise<TestModel> {
		const contentType = ObjectSerializer.normalizeMediaType(
			response.headers['content-type'],
		);
		if (isCodeInRange('200', response.httpStatusCode)) {
			const body: TestModel = ObjectSerializer.deserialize(
				ObjectSerializer.parse(await response.body.text(), contentType),
				'TestModel',
				'',
			) as TestModel;
			return body;
		}

		// Work around for missing responses in specification, e.g. for petstore.yaml
		if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
			const body: TestModel = ObjectSerializer.deserialize(
				ObjectSerializer.parse(await response.body.text(), contentType),
				'TestModel',
				'',
			) as TestModel;
			return body;
		}

		throw new ApiException<string | Blob | undefined>(
			response.httpStatusCode,
			'Unknown API Status Code!',
			await response.getBodyAsAny(),
			response.headers,
		);
	}
}
