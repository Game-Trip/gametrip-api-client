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

import { ListLikedGameDto } from '../models/ListLikedGameDto';
import { ListPictureDto } from '../models/ListPictureDto';
import { LocationNameDto } from '../models/LocationNameDto';
import { HttpFile } from '../http/http';

export class GameDto {
    'name'?: string | null;
    'description'?: string | null;
    'editor'?: string | null;
    'releaseDate'?: number | null;
    'authorId'?: string;
    'isValidate'?: boolean;
    'locations'?: Array<LocationNameDto> | null;
    'pictures'?: Array<ListPictureDto> | null;
    'likedGames'?: Array<ListLikedGameDto> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<LocationNameDto>",
            "format": ""
        },
        {
            "name": "pictures",
            "baseName": "pictures",
            "type": "Array<ListPictureDto>",
            "format": ""
        },
        {
            "name": "likedGames",
            "baseName": "likedGames",
            "type": "Array<ListLikedGameDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameDto.attributeTypeMap;
    }

    public constructor() {
    }
}

