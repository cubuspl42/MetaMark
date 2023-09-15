import {
    DefinitionContext,
    Expression_stringLiteralContext,
    MetamarkParser,
    StringLiteralContext,
} from "../generated_src/MetamarkParser";
import { MetamarkLexer } from "../generated_src/MetamarkLexer";
import { ExpressionTerm } from "./ExpressionTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { arrayEquals } from "./utils";
import { ExpressionTermUtils } from "./ExpressionTermUtils";

export abstract class DefinitionTerm {
    static equals(a: DefinitionTerm, b: DefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        return (
            SymbolDefinitionTerm.equals(a, b) ?? RuleDefinitionTerm.equals(a, b)
        );
    }

    static build(ctx: DefinitionContext): DefinitionTerm {
        const kindType = ctx._kind.type;
        const body = ctx._body;

        if (
            kindType === MetamarkLexer.SymbolKeyword &&
            body instanceof Expression_stringLiteralContext
        ) {
            return new SymbolDefinitionTerm(
                ctx._name.text ?? "",
                StringLiteralTerm.build(body.stringLiteral()),
            );
        } else if (kindType === MetamarkLexer.RuleKeyword) {
            return new RuleDefinitionTerm(
                ctx._name.text ?? "",
                ExpressionTermUtils.build(body),
            );
        } else {
            throw new Error(`Unsupported definition kind token: ${ctx._kind}`);
        }
    }

    abstract readonly name: string;
}

export class SymbolDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: SymbolDefinitionTerm,
        b: SymbolDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof SymbolDefinitionTerm)) return undefined;
        if (!(b instanceof SymbolDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return StringLiteralTerm.equals(a.pattern, b.pattern);
    }

    override readonly name: string;
    readonly pattern: StringLiteralTerm;

    constructor(name: string, pattern: StringLiteralTerm) {
        super();
        this.name = name;
        this.pattern = pattern;
    }
}

export class RuleDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: RuleDefinitionTerm,
        b: RuleDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof RuleDefinitionTerm)) return undefined;
        if (!(b instanceof RuleDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return ExpressionTermUtils.equals(a.body, b.body);
    }

    override readonly name: string;
    readonly body: ExpressionTerm;

    constructor(name: string, body: ExpressionTerm) {
        super();
        this.name = name;
        this.body = body;
    }
}
