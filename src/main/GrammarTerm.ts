import {parseAsContext} from "./utils";
import {Grammar_Context} from "../generated_parser/MetamarkParser";
import {DefinitionTerm} from "./DefinitionTerm";

export class GrammarTerm {
    static parse(source: string) {
        return GrammarTerm.build(
            parseAsContext(
                (parser) => parser.grammar_(),
                source,
            ),
        );
    }

    static build(ctx: Grammar_Context): GrammarTerm {
        return new GrammarTerm(ctx.definition().map(
            (it) => DefinitionTerm.build(it))
        );
    }

    readonly definitions: ReadonlyArray<DefinitionTerm>;

    constructor(definitions: ReadonlyArray<DefinitionTerm>) {
        this.definitions = definitions;
    }
}
