declare type ExtendedError = Error & {
    toJSON?: unknown;
};
export declare const serializedError: (err: ExtendedError) => {
    name: string;
    message: string;
    json: unknown;
    stack: string[];
};
export {};
