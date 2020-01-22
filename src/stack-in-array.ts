export const stackInArray = (stack: string = ""): string[] => {
    return stack
        .split("\n")
        .map((line: string): string => line.trim());
};