import {arrayEquals, parseAsContext} from "./utils";
import {Grammar_Context} from "../generated_src/MetamarkParser";
import {DefinitionTerm} from "./DefinitionTerm";

export class GrammarTerm {
    static equals(a: GrammarTerm, b: GrammarTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof GrammarTerm)) return undefined;
        if (!(b instanceof GrammarTerm)) return undefined;
        return arrayEquals(a.definitions, b.definitions, DefinitionTerm.equals);
    }

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
