import { arrayEquals, parseAsContext } from "./utils";
import { Grammar_Context } from "../generated_src/MetamarkParser";
import { DefinitionTerm } from "./DefinitionTerm";
import { BlockStaticScope, LoopedStaticScope } from "./StaticScope";
import { ImportAllTerm, ModuleTerm, StringLiteralTerm } from "./typescript_ast";
import { DefinitionTermUtils } from "./DefinitionTermUtils";

export class GrammarTerm {
    static equals(a: GrammarTerm, b: GrammarTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof GrammarTerm)) return undefined;
        if (!(b instanceof GrammarTerm)) return undefined;
        return arrayEquals(
            a.definitions,
            b.definitions,
            DefinitionTermUtils.equals,
        );
    }

    static parse(name: string, source: string) {
        return GrammarTerm.build(
            name,
            parseAsContext((parser) => parser.grammar_(), source),
        );
    }

    static build(name: string, ctx: Grammar_Context): GrammarTerm {
        const definitions = LoopedStaticScope.looped((loopedScope) => {
            const definitions = ctx
                .definition()
                .map((it) => DefinitionTermUtils.build(loopedScope, it));

            const blockScope = new BlockStaticScope(definitions);

            return [definitions, blockScope];
        });

        return new GrammarTerm(name, definitions);
    }

    readonly name: string;
    readonly definitions: ReadonlyArray<DefinitionTerm>;

    constructor(name: string, definitions: ReadonlyArray<DefinitionTerm>) {
        this.name = name;
        this.definitions = definitions;
    }

    generateModule(): ModuleTerm {
        return new ModuleTerm({
            imports: [
                new ImportAllTerm({
                    aliasName: "runtime",
                    modulePath: new StringLiteralTerm({
                        value: "./runtime",
                    }),
                }),
            ],
            declarations: [
                ...this.definitions.map((definition) =>
                    definition.nodeGenerator.generateInterfaceDeclaration(),
                ),
                ...this.definitions.map((definition) =>
                    definition.parseFunctionGenerator.generateParseFunctionDefinition(),
                ),
            ],
        });
    }
}
