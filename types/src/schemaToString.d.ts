import { type FluentBitSection, FluentBitToken } from './constants';
export declare function schemaToString(configBlocks: FluentBitSection[], directives: FluentBitToken[], { propIndent }: {
    propIndent?: number | undefined;
}): string;
