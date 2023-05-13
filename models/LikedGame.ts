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
import { GameTripUser } from '../models/GameTripUser';
import { HttpFile } from '../http/http';

export class LikedGame {
    'idLikedGame'?: string;
    'gameId'?: string;
    'game'?: Game;
    'userId'?: string;
    'user'?: GameTripUser;
    'vote'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idLikedGame",
            "baseName": "idLikedGame",
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
            "name": "vote",
            "baseName": "vote",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return LikedGame.attributeTypeMap;
    }

    public constructor() {
    }
}
