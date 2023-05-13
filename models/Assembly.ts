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

import { CustomAttributeData } from '../models/CustomAttributeData';
import { MethodInfo } from '../models/MethodInfo';
import { Module } from '../models/Module';
import { SecurityRuleSet } from '../models/SecurityRuleSet';
import { Type } from '../models/Type';
import { TypeInfo } from '../models/TypeInfo';
import { HttpFile } from '../http/http';

export class Assembly {
    'definedTypes'?: Array<TypeInfo> | null;
    'exportedTypes'?: Array<Type> | null;
    'codeBase'?: string | null;
    'entryPoint'?: MethodInfo;
    'fullName'?: string | null;
    'imageRuntimeVersion'?: string | null;
    'isDynamic'?: boolean;
    'location'?: string | null;
    'reflectionOnly'?: boolean;
    'isCollectible'?: boolean;
    'isFullyTrusted'?: boolean;
    'customAttributes'?: Array<CustomAttributeData> | null;
    'escapedCodeBase'?: string | null;
    'manifestModule'?: Module;
    'modules'?: Array<Module> | null;
    'globalAssemblyCache'?: boolean;
    'hostContext'?: number;
    'securityRuleSet'?: SecurityRuleSet;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "definedTypes",
            "baseName": "definedTypes",
            "type": "Array<TypeInfo>",
            "format": ""
        },
        {
            "name": "exportedTypes",
            "baseName": "exportedTypes",
            "type": "Array<Type>",
            "format": ""
        },
        {
            "name": "codeBase",
            "baseName": "codeBase",
            "type": "string",
            "format": ""
        },
        {
            "name": "entryPoint",
            "baseName": "entryPoint",
            "type": "MethodInfo",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "imageRuntimeVersion",
            "baseName": "imageRuntimeVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDynamic",
            "baseName": "isDynamic",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "reflectionOnly",
            "baseName": "reflectionOnly",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isCollectible",
            "baseName": "isCollectible",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFullyTrusted",
            "baseName": "isFullyTrusted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customAttributes",
            "baseName": "customAttributes",
            "type": "Array<CustomAttributeData>",
            "format": ""
        },
        {
            "name": "escapedCodeBase",
            "baseName": "escapedCodeBase",
            "type": "string",
            "format": ""
        },
        {
            "name": "manifestModule",
            "baseName": "manifestModule",
            "type": "Module",
            "format": ""
        },
        {
            "name": "modules",
            "baseName": "modules",
            "type": "Array<Module>",
            "format": ""
        },
        {
            "name": "globalAssemblyCache",
            "baseName": "globalAssemblyCache",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hostContext",
            "baseName": "hostContext",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "securityRuleSet",
            "baseName": "securityRuleSet",
            "type": "SecurityRuleSet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Assembly.attributeTypeMap;
    }

    public constructor() {
    }
}


