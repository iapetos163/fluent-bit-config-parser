import type { FluentBitToken } from './constants';
export declare class TokenIndex {
    private map;
    constructor();
    clear(): void;
    get(tokenId: string): FluentBitToken[] | undefined;
    set(tokenId: string, value: FluentBitToken): this;
}
