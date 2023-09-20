// A single Unicode code point
import { Context } from "vm";

type Char = string;

export abstract class TokenKind {
    abstract get parser(): Parser<Token>;
}

export const otherCharKind = new class OtherCharKind extends TokenKind {
    readonly parser: Parser<Token> = new class OtherCharParser implements Parser<Token> {
        parse(charStream: CharStream): Token | null {
            if (charStream.peek() === null) {
                return null;
            }

            return {
                kind: otherCharKind,
                text: charStream.take(),
            };
        }
    };
};

export abstract class MarkKind extends TokenKind {
    override get parser(): Parser<Token> {
        const self: MarkKind = this;

        return new class MarkParser implements Parser<Token> {
            parse(charStream: CharStream): Token | null {
                for (const expectedChar of self.textPattern) {
                    if (charStream.peek() === null) {
                        return null;
                    }

                    const actualChar = charStream.take();

                    if (actualChar !== expectedChar) {
                        return null;
                    }
                }

                return {
                    kind: self,
                    text: self.textPattern,
                };
            }
        };
    }

    protected abstract get textPattern(): string;
}

export interface Token {
    readonly kind: TokenKind;
    readonly text: string;
}

export type TokenKindSet = ReadonlySet<TokenKind>;

export class TokenKindSets {
    static merge(a: TokenKindSet, b: TokenKindSet): TokenKindSet {
        return new Set([...a, ...b]);
    }

    static with(a: TokenKindSet, b: TokenKind): TokenKindSet {
        return new Set([...a, b]);
    }

    static without(a: TokenKindSet, b: TokenKind): TokenKindSet {
        const result = new Set<TokenKind>(a);
        result.delete(b);
        return result;
    }

    static buildParser(
        tokenSet: TokenKindSet,
    ): Parser<Token> {
        // We assume that ńo tokens share a common prefix
        const tokenParsers = [...tokenSet].map((tokenKind) => tokenKind.parser);

        return new class TokenParser implements Parser<Token>{
            parse(charStream: CharStream): Token | null {
                const initialIndex = charStream.currentIndex();

                for (const tokenParser of tokenParsers) {
                    const matchedToken = tokenParser.parse(charStream);

                    if (matchedToken !== null) {
                        return matchedToken;
                    }

                    charStream.backtrack(initialIndex);
                }

                return null;
            }
        };
    }

    private constructor() {
    }
}

export const concatTokens = (
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
        if (previousIndex < 0 || previousIndex > this._index) {
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
    ...parsers: ReadonlyArray<ExpressionParser<Context>>
): ExpressionParser<Context> {
    return new class AndExpressionParser implements ExpressionParser<Context> {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const matches: Array<ExpressionMatch<Context>> = [];

            for (const parser of parsers) {
                const match = parser.parse(charStream);

                if (match === null) {
                    return null;
                }

                matches.push(match);
            }

            return new class implements ExpressionMatch<Context> {
                affect(context: Context): void {
                    for (const match of matches) {
                        match.affect(context);
                    }
                }
            }
        }
    }
}

export function or<Context extends {}>(
    parser1: ExpressionParser<Context>,
    parser2: ExpressionParser<Context>,
): ExpressionParser<Context> {
    return new class implements ExpressionParser<Context> {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const initialIndex = charStream.currentIndex();

            const match1 = parser1.parse(charStream);

            if (match1 !== null) {
                return match1;
            }

            charStream.backtrack(initialIndex);

            return parser2.parse(charStream);
        }
    }
}

export function oneOrMore<Context extends {}>(
    repeatedParser: ExpressionParser<Context>,
): ExpressionParser<Context> {
    return new class OneOrMoreParser implements ExpressionParser<Context>  {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const initialIndex = charStream.currentIndex();

            const firstMatch = repeatedParser.parse(charStream);

            if (firstMatch === null) {
                charStream.backtrack(initialIndex);

                return null;
            }

            const matches: Array<ExpressionMatch<Context>> = [firstMatch];

            while (true) {
                const previousIndex = charStream.currentIndex();

                const match = repeatedParser.parse(charStream);

                if (match === null) {
                    charStream.backtrack(previousIndex);

                    break;
                }

                matches.push(match);
            }

            return {
                affect(context: Context): void {
                    matches.forEach((match) => {
                        match.affect(context);
                    });
                },
            };
        }
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

export function useResult<Result extends {}, Context extends {}>(
    parser: Parser<Result>,
    store: (context: Context, result: Result) => void,
): ExpressionParser<Context> {
    return {
        parse(charStream: CharStream): ExpressionMatch<Context> | null {
            const result = parser.parse(charStream);

            if (result !== null) {
                return {
                    affect(context: Context): void {
                        store(context, result);
                    },
                };
            } else {
                return null;
            }
        },
    };
}

export function useEntityNode<EntityNode extends {}, Context extends {}>(
    parser: EntityParser<EntityNode>,
    store: (context: Context, entityNode: EntityNode) => void,
): ExpressionParser<Context> {
    return useResult(
        parser,
        (context, entityMatch) => entityMatch.buildNode(),
    );
}

export function discardResult<Result extends {}>(
    parser: Parser<Result>,
): ExpressionParser<never> {
    return new class ResultDiscardingParser {
        parse(charStream: CharStream): ExpressionMatch<never> | null {
            const result = parser.parse(charStream);

            if (result !== null) {
                return new class implements ExpressionMatch<never> {
                    affect(): void {
                    }
                }
            } else {
                return null;
            }
        }
    };
}

// export function buildMarkParser<MarkNode extends AbstractMark>(
//     markNode: MarkNode,
// ): EntityParser<MarkNode> {
//     return {
//         parse(charStream: CharStream): EntityMatch<MarkNode> | null {
//             for (const expectedChar of markNode.text) {
//                 const actualChar = charStream.take();
//
//                 if (actualChar !== expectedChar) {
//                     return null;
//                 }
//             }
//
//             return {
//                 buildNode(): MarkNode {
//                     return markNode;
//                 },
//             };
//         },
//     };
// }

export function buildElementParser<ElementContext extends {}, ElementNode extends {}>(
    createContext: () => ElementContext,
    buildNode: (context: ElementContext) => ElementNode,
    bodyParser: ExpressionParser<ElementContext>,
): EntityParser<ElementNode> {
    return {
        parse(charStream: CharStream): EntityMatch<ElementNode> | null {
            const bodyMatch = bodyParser.parse(charStream);

            if (bodyMatch !== null) {
                return {
                    buildNode(): ElementNode {
                        const context = createContext();

                        bodyMatch.affect(context);

                        return buildNode(context);
                    },
                };
            } else {
                return null;
            }
        },
    };
}
