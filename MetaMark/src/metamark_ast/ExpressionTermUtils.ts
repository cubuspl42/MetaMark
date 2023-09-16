import { ParenExpressionTerm } from "./ParenExpressionTerm";
import { ReferenceExpressionTerm } from "./ReferenceExpressionTerm";
import { MatchZeroOrMoreExpressionTerm } from "./MatchZeroOrMoreExpressionTerm";
import { MatchOneOrMoreExpressionTerm } from "./MatchOneOrMoreExpressionTerm";
import { MatchZeroOrOneExpressionTerm } from "./MatchZeroOrOneExpressionTerm";
import { ExpressionTerm } from "./ExpressionTerm";
import {
    Expression_matchOneOrMoreExpressionContext,
    Expression_matchZeroOrMoreExpressionContext,
    Expression_matchZeroOrOneExpressionContext,
    Expression_parenExpressionContext,
    Expression_referenceExpressionContext,
    ExpressionContext,
} from "../../generated_src/MetamarkParser";
import { StaticScope } from "./StaticScope";

export class ExpressionTermUtils {
    static equals(a: ExpressionTerm, b: ExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        return (
            ParenExpressionTerm.equals(a, b) ??
            ReferenceExpressionTerm.equals(a, b) ??
            MatchZeroOrMoreExpressionTerm.equals(a, b) ??
            MatchOneOrMoreExpressionTerm.equals(a, b) ??
            MatchZeroOrMoreExpressionTerm.equals(a, b) ??
            MatchZeroOrOneExpressionTerm.equals(a, b)
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: ExpressionContext,
    ): ExpressionTerm {
        if (ctx instanceof Expression_parenExpressionContext) {
            return ParenExpressionTerm.build(
                staticScope,
                ctx.parenExpression(),
            );
        } else if (ctx instanceof Expression_referenceExpressionContext) {
            return ReferenceExpressionTerm.build(
                staticScope,
                ctx.referenceExpression(),
            );
        } else if (ctx instanceof Expression_matchZeroOrMoreExpressionContext) {
            return MatchZeroOrMoreExpressionTerm.build(staticScope, ctx);
        } else if (ctx instanceof Expression_matchOneOrMoreExpressionContext) {
            return MatchOneOrMoreExpressionTerm.build(staticScope, ctx);
        } else if (ctx instanceof Expression_matchZeroOrOneExpressionContext) {
            return MatchZeroOrOneExpressionTerm.build(staticScope, ctx);
        } else {
            throw new Error(`Unsupported expression context: ${ctx}`);
        }
    }

    private constructor() {}
}
