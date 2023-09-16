import { joinStringNl } from "./utils";

export const indent: string = "    ";

export function indentTailLines(str: string): string {
    const [head, ...tail] = str.split("\n");

    return joinStringNl([head, ...tail.map((line) => `${indent}${line}`)]);
}
