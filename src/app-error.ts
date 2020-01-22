import { stackInArray } from "./stack-in-array";

export type Mixin = Record<PropertyKey, unknown>;

export class AppError extends Error {

    private readonly public: Mixin;
    private readonly private: Mixin;

    public constructor(message: string = "", publicMixin: Mixin = {}, privateMixin: Mixin = {}) {
        super(message);
        this.name = AppError.name;
        this.public = publicMixin;
        this.private = privateMixin;
    }

    public toPublic(): Mixin {
        return {
            name: this.name,
            message: this.message,
            ...this.public,
        };
    }

    public toJSON(): Mixin {
        return {
            name: this.name,
            message: this.message,
            public: this.public,
            private: this.private,
            stack: stackInArray(this.stack),
        };
    }
}
