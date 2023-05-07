import { FluentBitBaseSchema, FluentBitSection } from './constants';
export declare const SECTIONS: {
    output: (options: Record<string, string | boolean | number>) => FluentBitSection;
    filter: (options: Record<string, string | boolean | number>) => FluentBitSection;
    service: (options: Record<string, string | boolean | number>) => FluentBitSection;
    input: (options: Record<string, string | boolean | number>) => FluentBitSection;
    custom: (options: Record<string, string | boolean | number>) => FluentBitSection;
    parser: (options: Record<string, string | boolean | number>) => FluentBitSection;
    multilineParser: (options: Record<string, string | boolean | number>) => FluentBitSection;
    plugins: (options: Record<string, string | boolean | number>) => FluentBitSection;
    upstream: (options: Record<string, string | boolean | number>) => FluentBitSection;
    node: (options: Record<string, string | boolean | number>) => FluentBitSection;
};
export declare class FluentBitGeneratedSchema implements FluentBitBaseSchema {
    readonly schema: FluentBitSection[];
    constructor(sections: FluentBitSection[]);
    toString(indent?: number): string;
}
