"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_in_array_1 = require("./stack-in-array");
class AppError extends Error {
    constructor(message = "", publicMixin = {}, privateMixin = {}) {
        super(message);
        this.name = AppError.name;
        this.public = publicMixin;
        this.private = privateMixin;
    }
    toPublic() {
        return {
            name: this.name,
            message: this.message,
            ...this.public,
        };
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            public: this.public,
            private: this.private,
            stack: stack_in_array_1.stackInArray(this.stack),
        };
    }
}
exports.AppError = AppError;
