// A single Unicode code point
type Char = string;

export interface Token {
    kind: "token";
    type: string;
    text: string;
}

export const concatTokensText = (
    tokens: ReadonlyArray<Token>,
): string => {
    return tokens.map((it) => it.text).join("");
};

export interface CharStream {
    peek(): Char | null;

    take(): Char;

    currentIndex(): number;

    backtrack(previousIndex: number): void;
}

export class StringCharStream implements CharStream {
    constructor(private _string: string, initialIndex: number = 0) {
        this._index = initialIndex;
    }

    private _index: number;

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

        const char = str[i];

        this._index = i + 1;

        return char;
    }


    currentIndex(): number {
        return this._index;
    }

    backtrack(previousIndex: number): void {
        if (previousIndex < 0 || previousIndex >= this._index) {
            throw new Error("Invalid index state");
        }

        this._index = previousIndex;
    }
}

export interface Parser<Result extends {}> {
    parse(
        charStream: CharStream,
    ): Result | null;
}

export interface ExpressionMatch<Context extends {}> {
    affect(context: Context): void,
}

export interface ExpressionParser<Context extends {}> extends Parser<ExpressionMatch<Context>> {
    parse(
        charStream: CharStream,
    ): ExpressionMatch<Context> | null;
}

export function and<Context extends {}>(
    ...parser1: ReadonlyArray<ExpressionParser<Context>>
): ExpressionParser<Context> {
    throw new Error();
}

export function or<Context extends {}>(
    parser1: ExpressionParser<Context>,
    parser2: ExpressionParser<Context>,
): ExpressionParser<Context> {
    throw new Error();
}

export function oneOrMore<Context extends {}>(
    repeatedParser: ExpressionParser<Context>,
): ExpressionParser<Context> {
    return {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const firstMatch = repeatedParser.parse(charStream);

            if (firstMatch === null) {
                return null;
            }

            const matches: Array<ExpressionMatch<Context>> = [firstMatch];

            while (true) {
                const result = repeatedParser.parse(charStream);

                if (result === null) {
                    break;
                }

                matches.push(result);
            }

            return {
                affect(context: Context): void {
                    matches.forEach((match) => {
                        match.affect(context);
                    });
                },
            };
        },
    };
}

export interface EntityMatch<EntityNode extends {}> {
    buildNode(): EntityNode;
}

export interface EntityParser<EntityNode extends {}> extends Parser<EntityMatch<EntityNode>> {
    parse(
        charStream: CharStream,
    ): EntityMatch<EntityNode> | null;
}

export function useNode<EntityNode extends {}, Context extends {}>(
    parser: EntityParser<EntityNode>,
    store: (context: Context, entityNode: EntityNode) => void,
): ExpressionParser<Context> {
    return {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const result = parser.parse(charStream);

            if (result !== null) {
                return {
                    affect(context: Context): void {
                        const node = result.buildNode();

                        store(context, node);
                    },
                };
            } else {
                return null;
            }
        },
    };
}

export function discardNode<EntityNode extends {}>(
    parser: EntityParser<EntityNode>,
): ExpressionParser<never> {
    return {
        parse(charStream: CharStream): ExpressionMatch<never> | null {
            const result = parser.parse(charStream);

            if (result !== null) {
                return {
                    affect(): void {
                    },
                };
            } else {
                return null;
            }
        },
    };
}

export function buildTokenParser<TokenNode extends Token>(
    tokenNode: TokenNode,
): EntityParser<TokenNode> {
    return {
        parse(charStream: CharStream): EntityMatch<TokenNode> | null {
            for (const expectedChar of tokenNode.text) {
                const actualChar = charStream.take();

                if (actualChar !== expectedChar) {
                    return null;
                }
            }

            return {
                buildNode(): TokenNode {
                    return tokenNode;
                },
            };
        },
    };
}

export function buildElementParser<ElementContext extends {}, ElementNode extends {}>(
    createContext: () => ElementContext,
    buildNode: (context: ElementContext) => ElementNode,
    bodyParser: ExpressionParser<ElementContext>,
): EntityParser<ElementNode> {
    return {
        parse(charStream: CharStream): EntityMatch<ElementNode> | null {
            const bodyResult = bodyParser.parse(charStream);

            if (bodyResult !== null) {
                return {
                    buildNode(): ElementNode {
                        const context = createContext();

                        bodyResult.affect(context);

                        return buildNode(context);
                    },
                };
            } else {
                return null;
            }
        },
    };
}
