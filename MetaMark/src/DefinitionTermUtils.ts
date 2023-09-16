import {
    DefinitionContext,
    Expression_stringLiteralContext,
} from "../generated_src/MetamarkParser";
import { MetamarkLexer } from "../generated_src/MetamarkLexer";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { StaticScope } from "./StaticScope";
import { ElementDefinitionTerm } from "./ElementDefinitionTerm";
import { TokenDefinitionTerm } from "./TokenDefinitionTerm";
import { DefinitionTerm } from "./DefinitionTerm";

export abstract class DefinitionTermUtils {
    static equals(a: DefinitionTerm, b: DefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        return (
            TokenDefinitionTerm.equals(a, b) ??
            ElementDefinitionTerm.equals(a, b)
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: DefinitionContext,
    ): DefinitionTerm {
        const kindType = ctx._kind.type;
        const body = ctx._body;

        if (
            kindType === MetamarkLexer.TokenKeyword &&
            body instanceof Expression_stringLiteralContext
        ) {
            return new TokenDefinitionTerm(
                ctx._name.text ?? "",
                StringLiteralTerm.build(body.stringLiteral()),
            );
        } else if (kindType === MetamarkLexer.ElementKeyworc) {
            return new ElementDefinitionTerm(
                ctx._name.text ?? "",
                ExpressionTermUtils.build(staticScope, body),
            );
        } else {
            throw new Error(`Unsupported definition kind token: ${ctx._kind}`);
        }
    }

    private constructor() {}
}
