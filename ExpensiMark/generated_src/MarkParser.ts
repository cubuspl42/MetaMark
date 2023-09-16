interface Asterisk {
    type: "Asterisk";
}

interface Emphasis {
    type: "Emphasis";
}

export const parseToken_Asterisk = (charStream: CharStream): Asterisk => {
    const symbol = parseString(charStream);

    if (symbol !== null) {
        return null;
    }

    return symbol;
};

export const parseToken_Emphasis = (charStream: CharStream): Emphasis => {
    return parseToken_Asterisk(charStream);
};