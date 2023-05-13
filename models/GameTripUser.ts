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

import { Comment } from '../models/Comment';
import { LikedGame } from '../models/LikedGame';
import { LikedLocation } from '../models/LikedLocation';
import { HttpFile } from '../http/http';

export class GameTripUser {
    'id'?: string;
    'userName'?: string | null;
    'normalizedUserName'?: string | null;
    'email'?: string | null;
    'normalizedEmail'?: string | null;
    'emailConfirmed'?: boolean;
    'passwordHash'?: string | null;
    'securityStamp'?: string | null;
    'concurrencyStamp'?: string | null;
    'phoneNumber'?: string | null;
    'phoneNumberConfirmed'?: boolean;
    'twoFactorEnabled'?: boolean;
    'lockoutEnd'?: Date | null;
    'lockoutEnabled'?: boolean;
    'accessFailedCount'?: number;
    'comments'?: Array<Comment> | null;
    'likedGames'?: Array<LikedGame> | null;
    'likedLocations'?: Array<LikedLocation> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalizedUserName",
            "baseName": "normalizedUserName",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "normalizedEmail",
            "baseName": "normalizedEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "emailConfirmed",
            "baseName": "emailConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "passwordHash",
            "baseName": "passwordHash",
            "type": "string",
            "format": ""
        },
        {
            "name": "securityStamp",
            "baseName": "securityStamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "concurrencyStamp",
            "baseName": "concurrencyStamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumberConfirmed",
            "baseName": "phoneNumberConfirmed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "twoFactorEnabled",
            "baseName": "twoFactorEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "lockoutEnd",
            "baseName": "lockoutEnd",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "lockoutEnabled",
            "baseName": "lockoutEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accessFailedCount",
            "baseName": "accessFailedCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "Array<Comment>",
            "format": ""
        },
        {
            "name": "likedGames",
            "baseName": "likedGames",
            "type": "Array<LikedGame>",
            "format": ""
        },
        {
            "name": "likedLocations",
            "baseName": "likedLocations",
            "type": "Array<LikedLocation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GameTripUser.attributeTypeMap;
    }

    public constructor() {
    }
}
