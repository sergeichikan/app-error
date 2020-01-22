"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_in_array_1 = require("./stack-in-array");
exports.serializedError = ({ name, message, stack, toJson }) => ({
    name,
    message,
    toJson: typeof toJson === "function" ? toJson() : toJson,
    stack: stack_in_array_1.stackInArray(stack),
});
//# sourceMappingURL=serialized-error.js.map