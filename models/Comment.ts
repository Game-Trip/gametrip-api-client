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

import { GameTripUser } from '../models/GameTripUser';
import { Location } from '../models/Location';
import { HttpFile } from '../http/http';

export class Comment {
    'idComment'?: string;
    'text'?: string | null;
    'userId'?: string;
    'user'?: GameTripUser;
    'locationId'?: string;
    'location'?: Location;
    'isValidate'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idComment",
            "baseName": "idComment",
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
            "name": "user",
            "baseName": "user",
            "type": "GameTripUser",
            "format": ""
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
            "type": "Location",
            "format": ""
        },
        {
            "name": "isValidate",
            "baseName": "isValidate",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Comment.attributeTypeMap;
    }

    public constructor() {
    }
}

