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

import { GameNameDto } from '../models/GameNameDto';
import { HttpFile } from '../http/http';

export class LikedGameDto {
    'likedGameId'?: string | null;
    'gameId'?: string | null;
    'game'?: GameNameDto;
    'usersIds'?: Array<string> | null;
    'nbVote'?: number | null;
    'maxValue'?: number | null;
    'minValue'?: number | null;
    'averageValue'?: number | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "likedGameId",
            "baseName": "likedGameId",
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
            "type": "GameNameDto",
            "format": ""
        },
        {
            "name": "usersIds",
            "baseName": "usersIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "nbVote",
            "baseName": "nbVote",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "maxValue",
            "baseName": "maxValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "minValue",
            "baseName": "minValue",
            "type": "number",
            "format": "double"
        },
        {
            "name": "averageValue",
            "baseName": "averageValue",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LikedGameDto.attributeTypeMap;
    }

    public constructor() {
    }
}

