export declare const serializedError: ({ name, message, stack, toJson }: Error & {
    toJson?: unknown;
}) => {
    name: string;
    message: string;
    toJson: any;
    stack: string[];
};
