/**
 * GameTrip.API
 * GameTrip API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Exception } from '../models/Exception';
import { HttpFile } from '../http/http';

export class ModelError {
    'exception'?: Exception;
    'errorMessage'?: string | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exception",
            "baseName": "exception",
            "type": "Exception",
            "format": ""
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    public constructor() {
    }
}

