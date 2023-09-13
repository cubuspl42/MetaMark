import {parseAsContext} from "./utils";
import {Grammar_Context} from "../generated_parser/MetamarkParser";

export class GrammarTerm {
    static parse(source: string) {
        return new GrammarTerm(
            parseAsContext(
                (parser) => parser.grammar_(),
                source,
            ),
        );
    }

    constructor(ctx: Grammar_Context) {
    }
}
