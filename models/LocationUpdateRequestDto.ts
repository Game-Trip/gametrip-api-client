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

export class LocationUpdateRequestDto {
    'locationId'?: string;
    'name'?: string | null;
    'description'?: string | null;
    'latitude'?: number | null;
    'longitude'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "locationId",
            "baseName": "locationId",
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
            "name": "latitude",
            "baseName": "latitude",
            "type": "number",
            "format": "double"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LocationUpdateRequestDto.attributeTypeMap;
    }

    public constructor() {
    }
}

