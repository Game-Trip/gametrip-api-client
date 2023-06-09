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

import { ConstructorInfo } from '../models/ConstructorInfo';
import { CustomAttributeNamedArgument } from '../models/CustomAttributeNamedArgument';
import { CustomAttributeTypedArgument } from '../models/CustomAttributeTypedArgument';
import { Type } from '../models/Type';
import { HttpFile } from '../http/http';

export class CustomAttributeData {
    'attributeType'?: Type;
    '_constructor'?: ConstructorInfo;
    'constructorArguments'?: Array<CustomAttributeTypedArgument> | null;
    'namedArguments'?: Array<CustomAttributeNamedArgument> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributeType",
            "baseName": "attributeType",
            "type": "Type",
            "format": ""
        },
        {
            "name": "_constructor",
            "baseName": "constructor",
            "type": "ConstructorInfo",
            "format": ""
        },
        {
            "name": "constructorArguments",
            "baseName": "constructorArguments",
            "type": "Array<CustomAttributeTypedArgument>",
            "format": ""
        },
        {
            "name": "namedArguments",
            "baseName": "namedArguments",
            "type": "Array<CustomAttributeNamedArgument>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeData.attributeTypeMap;
    }

    public constructor() {
    }
}

