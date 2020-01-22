import { stackInArray } from "./stack-in-array";

export const serializedError = ({ name, message, stack, toJson }: Error & {toJson?: unknown}) => ({
    name,
    message,
    toJson: typeof toJson === "function" ? toJson() : toJson,
    stack: stackInArray(stack),
});
