import * as runtime from "./runtime";
import { buildTokenParser, EntityParser, ExpressionParser, oneOrMore, Token } from "./runtime";


interface Asterisk {
    readonly kind: "token";
    readonly type: "Asterisk";
    readonly text: "**";
}

const asterisk: Asterisk = {
    kind: "token",
    type: "Asterisk",
    text: "**",
};

interface Underscore {
    readonly kind: "token";
    readonly type: "Underscore";
    readonly text: "_";
}

const underscore: Underscore = {
    kind: "token",
    type: "Underscore",
    text: "_",
};

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


const anyTokenParser: runtime.EntityParser<Token> = todo();

export const asteriskParser: runtime.EntityParser<Asterisk> = buildTokenParser(asterisk);

export const emphasisParser: EntityParser<Emphasis> = runtime.buildElementParser(
    (): EmphasisContext => ({
        content: new Array<Token>(),
    }),
    (context): Emphasis => ({
        type: "Emphasis",
        content: runtime.concatTokensText(context.content),
    }),
    runtime.and(
        runtime.discardNode(asteriskParser),
        runtime.oneOrMore(
            runtime.useNode(
                anyTokenParser,
                (context: EmphasisContext, entityNode) => {
                    context.content.push(entityNode);
                },
            ),
        ),
        runtime.discardNode(asteriskParser),
    ),
);
