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

import { Game } from '../models/Game';
import { Location } from '../models/Location';
import { Picture } from '../models/Picture';
import { HttpFile } from '../http/http';

export class RequestGameUpdate {
    'idRequestGameUpdate'?: string;
    'gameId'?: string;
    'game'?: Game;
    'name'?: string | null;
    'description'?: string | null;
    'editor'?: string | null;
    'releaseDate'?: number | null;
    'idLocation'?: string | null;
    'location'?: Location;
    'isAddedLocation'?: boolean | null;
    'idPicture'?: string | null;
    'picture'?: Picture;
    'isAddedPicture'?: boolean | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idRequestGameUpdate",
            "baseName": "idRequestGameUpdate",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "gameId",
            "baseName": "gameId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "game",
            "baseName": "game",
            "type": "Game",
            "format": ""
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
        },
        {
            "name": "idLocation",
            "baseName": "idLocation",
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
            "name": "isAddedLocation",
            "baseName": "isAddedLocation",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "idPicture",
            "baseName": "idPicture",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "Picture",
            "format": ""
        },
        {
            "name": "isAddedPicture",
            "baseName": "isAddedPicture",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RequestGameUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}
