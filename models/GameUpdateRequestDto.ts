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

export class GameUpdateRequestDto {
    'gameId'?: string;
    'name'?: string | null;
    'description'?: string | null;
    'editor'?: string | null;
    'releaseDate'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "gameId",
            "baseName": "gameId",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "editor",
            "baseName": "editor",
            "type": "string",
            "format": ""
        },
        {
            "name": "releaseDate",
            "baseName": "releaseDate",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return GameUpdateRequestDto.attributeTypeMap;
    }

    public constructor() {
    }
}
