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

import { HttpFile } from '../http/http';

export class ResetPasswordDTO {
    'email': string;
    'password': string;
    'passwordConfirmation': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": "email"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": "password"
        },
        {
            "name": "passwordConfirmation",
            "baseName": "passwordConfirmation",
            "type": "string",
            "format": "password"
        }    ];

    static getAttributeTypeMap() {
        return ResetPasswordDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

