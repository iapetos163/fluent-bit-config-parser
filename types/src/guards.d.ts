import { COMMANDS, type FluentBitSchemaType, type FluentBitSection } from './constants';
export declare const isFluentBit: (config: string) => boolean;
export declare const isValidFluentBitSection: (schema?: FluentBitSection | null | undefined) => schema is FluentBitSection;
export declare const isString: (value?: string | undefined) => value is string;
export declare const isCommandType: (type?: string | undefined) => type is COMMANDS;
export declare const isCustomSectionName: (block: FluentBitSchemaType) => boolean;
export declare const isValidSchema: (node: FluentBitSchemaType) => boolean;
