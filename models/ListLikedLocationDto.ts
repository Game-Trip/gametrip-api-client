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

export class ListLikedLocationDto {
    'likedLocationId'?: string | null;
    'locationId'?: string | null;
    'location'?: LocationNameDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "likedLocationId",
            "baseName": "likedLocationId",
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
            "name": "location",
            "baseName": "location",
            "type": "LocationNameDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListLikedLocationDto.attributeTypeMap;
    }

    public constructor() {
    }
}

