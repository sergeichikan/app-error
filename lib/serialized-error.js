"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_in_array_1 = require("./stack-in-array");
exports.serializedError = (err) => {
    const json = typeof err.toJSON === "function" ? err.toJSON() : undefined;
    const stack = stack_in_array_1.stackInArray(err.stack);
    return {
        name: err.name,
        message: err.message,
        json,
        stack,
    };
};
