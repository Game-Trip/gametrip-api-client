/**
 * GameTrip.API
 * Fifty Cent API
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LocationDTO {
    'name': string;
    'description': string;
    'latitude': number;
    'longitude': number;

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
        return LocationDTO.attributeTypeMap;
    }

    public constructor() {
    }
}

