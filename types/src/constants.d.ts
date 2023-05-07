import type { Token } from 'moo';
export declare enum COMMANDS {
    OUTPUT = "OUTPUT",
    INPUT = "INPUT",
    FILTER = "FILTER",
    SERVICE = "SERVICE",
    CUSTOM = "CUSTOM",
    PARSER = "PARSER",
    MULTILINE_PARSER = "MULTILINE_PARSER",
    PLUGINS = "PLUGINS",
    UPSTREAM = "UPSTREAM",
    NODE = "NODE"
}
export declare enum TOKEN_TYPES_DIRECTIVES {
    SET = "SET",
    INCLUDE = "INCLUDE"
}
export declare enum TOKEN_TYPES {
    PROPERTIES = "PROPERTIES",
    CLOSE_BLOCK = "CLOSE_BLOCK",
    OPEN_BLOCK = "OPEN_BLOCK",
    COMMAND = "COMMAND",
    SPACE = "SPACE",
    COMMENT = "COMMENT",
    DIRECTIVES = "DIRECTIVES"
}
export declare type FluentBitSection = {
    id: string;
    name?: string;
    command: keyof typeof COMMANDS;
    optional?: Record<string, string>;
};
export interface FluentBitSchemaType extends FluentBitSection {
    __filePath: string;
}
export interface FluentBitBaseSchema {
    readonly schema: FluentBitSection[];
    toString(indent?: number): string;
}
export declare type FluentBitToken = Token & {
    filePath: string;
};
export declare const FLUENTBIT_REGEX: RegExp;
/** It will match @includes files as a valid Fluent Bit configuration.
 *  [Follow this link for an example](https://regex101.com/r/zrSRR2/1)
 */
export declare const FLUENTBIT_INCLUDE_REGEX: RegExp;
export declare const EXCLUDED_TAGS: Set<string>;
export declare const NO_STYLES_IN_TABLE: {
    border: Required<import("table").BorderUserConfig>;
    columnDefault: {
        paddingLeft: number;
        paddingRight: number;
    };
    drawHorizontalLine: () => boolean;
};
export declare enum CUSTOM_SECTIONS_NAMES {
    FLUENTBIT_METRICS = "fluentbit_metrics",
    CALYPTIA = "calyptia"
}
