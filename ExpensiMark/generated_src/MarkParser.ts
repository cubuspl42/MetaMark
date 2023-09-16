import * as runtime from "./runtime";

interface Asterisk {
    type: "Asterisk";
}

interface Emphasis {
    type: "Emphasis";
}

export const parseToken_Asterisk = (charStream: runtime.CharStream): Asterisk | null => {
    const symbol = runtime.parseString(charStream);

    if (symbol !== null) {
        return null;
    }

    return symbol;
};

export const parseToken_Emphasis = (charStream: runtime.CharStream): Emphasis | null => {
    return {
        type: "Emphasis",
    }
};
