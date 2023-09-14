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

    static parse(
        name: string,
        source: string,
    ) {
        return GrammarTerm.build(
            name,
            parseAsContext(
                (parser) => parser.grammar_(),
                source,
            ),
        );
    }

    static build(
        name: string,
        ctx: Grammar_Context,
    ): GrammarTerm {
        return new GrammarTerm(
            name,
            ctx.definition().map((it) => DefinitionTerm.build(it))
        );
    }

    readonly name: string;
    readonly definitions: ReadonlyArray<DefinitionTerm>;

    constructor(
        name: string,
        definitions: ReadonlyArray<DefinitionTerm>,
    ) {
        this.name = name;
        this.definitions = definitions;
    }

    generate(): string {
        return `
export class ${this.name}Parser {
    parse(source: string): string {
        return "${this.name}";
    }
}
`.trim();
    }
}
