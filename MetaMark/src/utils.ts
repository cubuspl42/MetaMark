import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { MetamarkParser } from "../generated_src/MetamarkParser";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MetamarkLexer } from "../generated_src/MetamarkLexer";

export function parseAsContext<C extends ParserRuleContext>(
    rule: (p: MetamarkParser) => C,
    source: string,
) {
    const inputStream = CharStreams.fromString(source);
    const lexer = new MetamarkLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MetamarkParser(tokenStream);

    return rule(parser);
}

export function arrayEquals<A>(
    a: ReadonlyArray<A>,
    b: ReadonlyArray<A>,
    equals: (a: A, b: A) => boolean,
): boolean {
    if (a.length !== b.length) return false;

    for (const ai of a) {
        const i = a.indexOf(ai);
        const bi = b[i];

        if (!equals(ai, bi)) {
            return false;
        }
    }

    return true;
}
