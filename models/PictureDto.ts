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

import { LocationNameDto } from '../models/LocationNameDto';
import { HttpFile } from '../http/http';

export class PictureDto {
    'pictureId'?: string;
    'name'?: string | null;
    'description'?: string | null;
    'picture'?: HttpFile | null;
    'locationId'?: string | null;
    'location'?: LocationNameDto;

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
            "name": "picture",
            "baseName": "picture",
            "type": "HttpFile",
            "format": "binary"
        },
        {
            "name": "locationId",
            "baseName": "locationId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "LocationNameDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PictureDto.attributeTypeMap;
    }

    public constructor() {
    }
}

