export * from '../models/AddLikeGameDto';
export * from '../models/AddLikeLocationDto';
export * from '../models/Assembly';
export * from '../models/CallingConventions';
export * from '../models/Comment';
export * from '../models/ConfirmMailDto';
export * from '../models/ConstructorInfo';
export * from '../models/CreateGameDto';
export * from '../models/CreateLocationDto';
export * from '../models/CustomAttributeData';
export * from '../models/CustomAttributeNamedArgument';
export * from '../models/CustomAttributeTypedArgument';
export * from '../models/EventAttributes';
export * from '../models/EventInfo';
export * from '../models/Exception';
export * from '../models/FieldAttributes';
export * from '../models/FieldInfo';
export * from '../models/ForgotPasswordDto';
export * from '../models/Game';
export * from '../models/GameDto';
export * from '../models/GameNameDto';
export * from '../models/GameTripUser';
export * from '../models/GameTripUserDto';
export * from '../models/GenericParameterAttributes';
export * from '../models/GetLocationDto';
export * from '../models/IdentityError';
export * from '../models/LayoutKind';
export * from '../models/LikedGame';
export * from '../models/LikedGameDto';
export * from '../models/LikedLocation';
export * from '../models/LikedLocationDto';
export * from '../models/ListGameDto';
export * from '../models/ListLikedGameDto';
export * from '../models/ListLikedLocationDto';
export * from '../models/ListPictureDto';
export * from '../models/Location';
export * from '../models/LocationDto';
export * from '../models/LocationNameDto';
export * from '../models/LoginDto';
export * from '../models/MemberInfo';
export * from '../models/MemberTypes';
export * from '../models/MessageDto';
export * from '../models/MethodAttributes';
export * from '../models/MethodBase';
export * from '../models/MethodImplAttributes';
export * from '../models/MethodInfo';
export * from '../models/ModelError';
export * from '../models/ModelStateEntry';
export * from '../models/ModelValidationState';
export * from '../models/Module';
export * from '../models/ModuleHandle';
export * from '../models/ParameterAttributes';
export * from '../models/ParameterInfo';
export * from '../models/Picture';
export * from '../models/ProblemDetails';
export * from '../models/PropertyAttributes';
export * from '../models/PropertyInfo';
export * from '../models/RegisterDto';
export * from '../models/ResetPasswordDto';
export * from '../models/RuntimeFieldHandle';
export * from '../models/RuntimeMethodHandle';
export * from '../models/RuntimeTypeHandle';
export * from '../models/SecurityRuleSet';
export * from '../models/StructLayoutAttribute';
export * from '../models/TokenDto';
export * from '../models/Type';
export * from '../models/TypeAttributes';
export * from '../models/TypeInfo';
export * from '../models/UpdateGameDto';
export * from '../models/UpdateLocationDto';

import { AddLikeGameDto } from '../models/AddLikeGameDto';
import { AddLikeLocationDto } from '../models/AddLikeLocationDto';
import { Assembly                   } from '../models/Assembly';
import { CallingConventions } from '../models/CallingConventions';
import { Comment } from '../models/Comment';
import { ConfirmMailDto } from '../models/ConfirmMailDto';
import { ConstructorInfo                                 } from '../models/ConstructorInfo';
import { CreateGameDto } from '../models/CreateGameDto';
import { CreateLocationDto } from '../models/CreateLocationDto';
import { CustomAttributeData } from '../models/CustomAttributeData';
import { CustomAttributeNamedArgument } from '../models/CustomAttributeNamedArgument';
import { CustomAttributeTypedArgument } from '../models/CustomAttributeTypedArgument';
import { EventAttributes } from '../models/EventAttributes';
import { EventInfo                } from '../models/EventInfo';
import { Exception } from '../models/Exception';
import { FieldAttributes } from '../models/FieldAttributes';
import { FieldInfo                           } from '../models/FieldInfo';
import { ForgotPasswordDto } from '../models/ForgotPasswordDto';
import { Game } from '../models/Game';
import { GameDto } from '../models/GameDto';
import { GameNameDto } from '../models/GameNameDto';
import { GameTripUser } from '../models/GameTripUser';
import { GameTripUserDto } from '../models/GameTripUserDto';
import { GenericParameterAttributes } from '../models/GenericParameterAttributes';
import { GetLocationDto } from '../models/GetLocationDto';
import { IdentityError } from '../models/IdentityError';
import { LayoutKind } from '../models/LayoutKind';
import { LikedGame } from '../models/LikedGame';
import { LikedGameDto } from '../models/LikedGameDto';
import { LikedLocation } from '../models/LikedLocation';
import { LikedLocationDto } from '../models/LikedLocationDto';
import { ListGameDto } from '../models/ListGameDto';
import { ListLikedGameDto } from '../models/ListLikedGameDto';
import { ListLikedLocationDto } from '../models/ListLikedLocationDto';
import { ListPictureDto } from '../models/ListPictureDto';
import { Location } from '../models/Location';
import { LocationDto } from '../models/LocationDto';
import { LocationNameDto } from '../models/LocationNameDto';
import { LoginDto } from '../models/LoginDto';
import { MemberInfo         } from '../models/MemberInfo';
import { MemberTypes } from '../models/MemberTypes';
import { MessageDto } from '../models/MessageDto';
import { MethodAttributes } from '../models/MethodAttributes';
import { MethodBase                                 } from '../models/MethodBase';
import { MethodImplAttributes } from '../models/MethodImplAttributes';
import { MethodInfo                                    } from '../models/MethodInfo';
import { ModelError } from '../models/ModelError';
import { ModelStateEntry       } from '../models/ModelStateEntry';
import { ModelValidationState } from '../models/ModelValidationState';
import { Module } from '../models/Module';
import { ModuleHandle } from '../models/ModuleHandle';
import { ParameterAttributes } from '../models/ParameterAttributes';
import { ParameterInfo                } from '../models/ParameterInfo';
import { Picture } from '../models/Picture';
import { ProblemDetails } from '../models/ProblemDetails';
import { PropertyAttributes } from '../models/PropertyAttributes';
import { PropertyInfo                } from '../models/PropertyInfo';
import { RegisterDto } from '../models/RegisterDto';
import { ResetPasswordDto } from '../models/ResetPasswordDto';
import { RuntimeFieldHandle } from '../models/RuntimeFieldHandle';
import { RuntimeMethodHandle } from '../models/RuntimeMethodHandle';
import { RuntimeTypeHandle } from '../models/RuntimeTypeHandle';
import { SecurityRuleSet } from '../models/SecurityRuleSet';
import { StructLayoutAttribute   } from '../models/StructLayoutAttribute';
import { TokenDto } from '../models/TokenDto';
import { Type                                                                        } from '../models/Type';
import { TypeAttributes } from '../models/TypeAttributes';
import { TypeInfo                                                                                 } from '../models/TypeInfo';
import { UpdateGameDto } from '../models/UpdateGameDto';
import { UpdateLocationDto } from '../models/UpdateLocationDto';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "CallingConventions",
    "EventAttributes",
    "FieldAttributes",
    "GenericParameterAttributes",
    "LayoutKind",
    "MemberTypes",
    "MethodAttributes",
    "MethodImplAttributes",
    "ModelValidationState",
    "ParameterAttributes",
    "PropertyAttributes",
    "SecurityRuleSet",
    "TypeAttributes",
]);

let typeMap: {[index: string]: any} = {
    "AddLikeGameDto": AddLikeGameDto,
    "AddLikeLocationDto": AddLikeLocationDto,
    "Assembly": Assembly,
    "Comment": Comment,
    "ConfirmMailDto": ConfirmMailDto,
    "ConstructorInfo": ConstructorInfo,
    "CreateGameDto": CreateGameDto,
    "CreateLocationDto": CreateLocationDto,
    "CustomAttributeData": CustomAttributeData,
    "CustomAttributeNamedArgument": CustomAttributeNamedArgument,
    "CustomAttributeTypedArgument": CustomAttributeTypedArgument,
    "EventInfo": EventInfo,
    "Exception": Exception,
    "FieldInfo": FieldInfo,
    "ForgotPasswordDto": ForgotPasswordDto,
    "Game": Game,
    "GameDto": GameDto,
    "GameNameDto": GameNameDto,
    "GameTripUser": GameTripUser,
    "GameTripUserDto": GameTripUserDto,
    "GetLocationDto": GetLocationDto,
    "IdentityError": IdentityError,
    "LikedGame": LikedGame,
    "LikedGameDto": LikedGameDto,
    "LikedLocation": LikedLocation,
    "LikedLocationDto": LikedLocationDto,
    "ListGameDto": ListGameDto,
    "ListLikedGameDto": ListLikedGameDto,
    "ListLikedLocationDto": ListLikedLocationDto,
    "ListPictureDto": ListPictureDto,
    "Location": Location,
    "LocationDto": LocationDto,
    "LocationNameDto": LocationNameDto,
    "LoginDto": LoginDto,
    "MemberInfo": MemberInfo,
    "MessageDto": MessageDto,
    "MethodBase": MethodBase,
    "MethodInfo": MethodInfo,
    "ModelError": ModelError,
    "ModelStateEntry": ModelStateEntry,
    "Module": Module,
    "ModuleHandle": ModuleHandle,
    "ParameterInfo": ParameterInfo,
    "Picture": Picture,
    "ProblemDetails": ProblemDetails,
    "PropertyInfo": PropertyInfo,
    "RegisterDto": RegisterDto,
    "ResetPasswordDto": ResetPasswordDto,
    "RuntimeFieldHandle": RuntimeFieldHandle,
    "RuntimeMethodHandle": RuntimeMethodHandle,
    "RuntimeTypeHandle": RuntimeTypeHandle,
    "StructLayoutAttribute": StructLayoutAttribute,
    "TokenDto": TokenDto,
    "Type": Type,
    "TypeInfo": TypeInfo,
    "UpdateGameDto": UpdateGameDto,
    "UpdateLocationDto": UpdateLocationDto,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
