// A single Unicode code point
type Char = string;

export interface CharStream {
    peek(): Char | null;

    take(): Char;
}

export class StringCharStream implements CharStream {
    constructor(private _string: string) {}

    private _index: number = 0;

    peek(): Char | null {
        const i = this._index;
        const str = this._string;

        if (!(i >= 0 && i <= str.length)) {
            throw new Error("Inconsistent state");
        }

        if (i < str.length) {
            return str[i];
        } else {
            return null;
        }
    }

    take(): Char {
        const i = this._index;
        const str = this._string;

        if (!(i >= 0 && i <= str.length)) {
            throw new Error("Inconsistent state");
        }

        if (i === str.length) {
            throw new Error("End of stream reached");
        }

        return str[i];
    }
}

export interface CharGroup {
    parse(charStream: CharStream): Char | null;
}

export type ParseFn<Node> = (charStream: CharStream) => Node | null;

export const alphanumeric: CharGroup = null;

export class ParseError extends Error {
    constructor(message: string) {
        super(message);
    }
}

export function expectChar(charStream: CharStream, expectedChar: Char) {
    const char = charStream.take();

    if (char !== expectedChar) {
        throw new ParseError(`Expected '${expectedChar}', got '${char}'`);
    }
}

export function parseChar(charStream: CharStream): Char | null {
    const char = charStream.peek();

    if (char !== null) {
        return charStream.take();
    } else {
        return null;
    }
}

export function parseString(
    charStream: CharStream,
): string | null {
    const char = charStream.peek();

    if (char !== null) {
        return charStream.take();
    } else {
        return null;
    }
}

export function expectString(charStream: CharStream, str: string) {
    for (const char of str) {
        expectChar(charStream, char);
    }
}

export const build_parseOneOreMore = <Element>(
    parseRepeated: ParseFn<Element>,
): ParseFn<ReadonlyArray<Element>> => (
    charStream: CharStream
): ReadonlyArray<Element> | null => {
    const firstElement = parseRepeated(charStream);

    if (firstElement === null) {
        return null;
    }

    const elements: Array<Element> = [firstElement];

    while (true) {
        const element = parseRepeated(charStream);

        if (element === null) {
            break;
        }

        elements.push(element);
    }

    return elements;
};

export const CharUtils = {
    toString(chars: ReadonlyArray<Char>): string {
        return chars.join("");
    },
};

export const parseZeroOreMore = <Node>(
    charStream: CharStream,
    parseRepeated: ParseFn<Node | null>,
): ReadonlyArray<Node> | null => {
    const elements: Array<Node> = [];

    while (true) {
        const element = parseRepeated(charStream);

        if (element !== null) {
            elements.push(element);
        } else {
            break;
        }
    }

    return elements;
};
