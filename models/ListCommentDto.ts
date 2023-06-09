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

export class ListCommentDto {
    'commentId'?: string;
    'text'?: string | null;
    'userId'?: string;
    'locationId'?: string;
    'isValidate'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "commentId",
            "baseName": "commentId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "locationId",
            "baseName": "locationId",
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
        return ListCommentDto.attributeTypeMap;
    }

    public constructor() {
    }
}

