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

import { Assembly } from '../models/Assembly';
import { CustomAttributeData } from '../models/CustomAttributeData';
import { ModuleHandle } from '../models/ModuleHandle';
import { HttpFile } from '../http/http';

export class Module {
    'assembly'?: Assembly;
    'fullyQualifiedName'?: string | null;
    'name'?: string | null;
    'mdStreamVersion'?: number;
    'moduleVersionId'?: string;
    'scopeName'?: string | null;
    'moduleHandle'?: ModuleHandle;
    'customAttributes'?: Array<CustomAttributeData> | null;
    'metadataToken'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assembly",
            "baseName": "assembly",
            "type": "Assembly",
            "format": ""
        },
        {
            "name": "fullyQualifiedName",
            "baseName": "fullyQualifiedName",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "mdStreamVersion",
            "baseName": "mdStreamVersion",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "moduleVersionId",
            "baseName": "moduleVersionId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "scopeName",
            "baseName": "scopeName",
            "type": "string",
            "format": ""
        },
        {
            "name": "moduleHandle",
            "baseName": "moduleHandle",
            "type": "ModuleHandle",
            "format": ""
        },
        {
            "name": "customAttributes",
            "baseName": "customAttributes",
            "type": "Array<CustomAttributeData>",
            "format": ""
        },
        {
            "name": "metadataToken",
            "baseName": "metadataToken",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Module.attributeTypeMap;
    }

    public constructor() {
    }
}

