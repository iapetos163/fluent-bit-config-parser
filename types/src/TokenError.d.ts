export declare class TokenError extends Error {
    line: number;
    col: number;
    message: string;
    filePath: string;
    constructor(message: string, filePath: string, line: number, col: number);
    get formattedError(): string;
}
