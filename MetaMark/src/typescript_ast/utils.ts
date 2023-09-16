export function joinStringsOf<E>(
    elements: ReadonlyArray<E>,
    separator: string,
    extract: (e: E) => string,
): string {
    return joinStrings(elements.map(extract), separator);
}

export function joinStrings(
    strings: ReadonlyArray<string>,
    separator: string,
): string {
    return strings.join(separator);
}

export function joinStringNl(lines: ReadonlyArray<string>): string {
    return joinStrings(lines, "\n");
}
