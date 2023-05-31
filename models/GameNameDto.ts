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

export class GameNameDto {
    'id'?: string | null;
    'name'?: string | null;
    'authorId'?: string;
    'isValidate'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorId",
            "baseName": "authorId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "isValidate",
            "baseName": "isValidate",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameNameDto.attributeTypeMap;
    }

    public constructor() {
    }
}

