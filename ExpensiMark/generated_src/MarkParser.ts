import * as runtime from "./runtime";
import { EntityParser, MarkKind, otherCharKind, Token, TokenKindSet, TokenKindSets } from "./runtime";

const asteriskKind: MarkKind = new class AsteriskKind extends MarkKind {
    override readonly textPattern = "*"
}

const underscoreKind: MarkKind = new class UnderscoreKind extends MarkKind {
    override readonly textPattern = "_"
}

const anyMarkKind: TokenKindSet = new Set([
    asteriskKind,
    underscoreKind,
]);

const anyTokenKind = TokenKindSets.with(
    anyMarkKind,
    otherCharKind,
);

interface EmphasisContext {
    content: Array<Token>;
}

interface Emphasis {
    readonly type: "Emphasis";
    readonly content: string;
}

function todo(): never {
    throw new Error();
}

export const emphasisParser: EntityParser<Emphasis> = runtime.buildElementParser(
    (): EmphasisContext => ({
        content: new Array<Token>(),
    }),
    (context): Emphasis => ({
        type: "Emphasis",
        content: runtime.concatTokens(context.content),
    }),
    runtime.and(
        runtime.discardResult(asteriskKind.parser),
        runtime.oneOrMore(
            runtime.useResult(
                TokenKindSets.buildParser(
                    TokenKindSets.without(anyTokenKind, asteriskKind),
                ),
                (context: EmphasisContext, token) => {
                    context.content.push(token);
                },
            ),
        ),
        // runtime.discardResult(asteriskKind.parser),
    ),
);
