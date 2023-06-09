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

export class AddPictureToGameDto {
    'pictureId'?: string | null;
    'name'?: string | null;
    'description'?: string | null;
    'gameId'?: string | null;
    'pictureData'?: string | null;
    'authorId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pictureId",
            "baseName": "pictureId",
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
            "name": "gameId",
            "baseName": "gameId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "pictureData",
            "baseName": "pictureData",
            "type": "string",
            "format": "byte"
        },
        {
            "name": "authorId",
            "baseName": "authorId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return AddPictureToGameDto.attributeTypeMap;
    }

    public constructor() {
    }
}

