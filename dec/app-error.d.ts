declare type Mixin = Record<PropertyKey, unknown>;
export declare class AppError extends Error {
    private readonly public;
    private readonly private;
    constructor(message?: string, publicMixin?: Mixin, privateMixin?: Mixin);
    toPublic(): Mixin;
    toJSON(): Mixin;
}
export {};
