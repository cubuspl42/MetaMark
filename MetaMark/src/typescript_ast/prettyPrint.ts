import { joinStringNl } from "./utils";

export const indent: string = "    ";

export function indentLines(str: string): string {
    const lines = str.split("\n");

    return joinStringNl(lines.map((line) => `${indent}${line}`));
}

export function indentTailLines(str: string): string {
    const [head, ...tail] = str.split("\n");

    return joinStringNl([head, ...tail.map((line) => `${indent}${line}`)]);
}
