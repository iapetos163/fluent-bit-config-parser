import { FluentBitBaseSchema, FluentBitSection, FluentBitToken, type FluentBitSchemaType } from './constants';
import { TokenIndex } from './TokenIndex';
export declare function normalizeField(field: string): string;
declare type TokenizeProps = {
    config: string;
    filePath: string;
    directives: FluentBitToken[];
    pathMemo?: Set<string>;
    options?: TokenizeOptions;
};
declare type TokenizeOptions = {
    ignoreFullPaths: boolean;
};
export declare function tokenize({ config, filePath, directives, pathMemo, options, }: TokenizeProps): FluentBitToken[];
export declare function tokensToAST(tokens: FluentBitToken[], tokenIndex: TokenIndex): FluentBitSchemaType[];
export declare class FluentBitSchema implements FluentBitBaseSchema {
    private _filePath;
    private _source;
    private _tokens;
    private _tokenIndex;
    private _directives;
    constructor(source: string, filePath: string, tokenizeOptions?: TokenizeOptions);
    static isFluentBitConfiguration(source: string): boolean;
    get AST(): FluentBitSchemaType[];
    get filePath(): string;
    get source(): string;
    get directives(): FluentBitToken[];
    get schema(): FluentBitSection[];
    getTokensBySectionId(sectionId: string): FluentBitToken[] | undefined;
    toString(indent?: number): string;
}
export {};
