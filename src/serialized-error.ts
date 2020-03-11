import { stackInArray } from "./stack-in-array";

type ExtendedError = Error & {
    toJSON?: unknown;
};

export const serializedError = (err: ExtendedError) => {
    const json: unknown = typeof err.toJSON === "function" ? err.toJSON() : undefined;
    const stack = stackInArray(err.stack);
    return {
        name: err.name,
        message: err.message,
        json,
        stack,
    };
};
