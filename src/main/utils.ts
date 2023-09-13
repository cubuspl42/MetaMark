import {ParserRuleContext} from "antlr4ts/ParserRuleContext";
import {MetamarkParser} from "../generated_parser/MetamarkParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {MetamarkLexer} from "../generated_parser/MetamarkLexer";

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
