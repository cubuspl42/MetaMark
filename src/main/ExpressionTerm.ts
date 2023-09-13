import {ParenExpressionTerm} from './ParenExpressionTerm';
import {ReferenceExpressionTerm} from './ReferenceExpressionTerm';
import {MatchZeroOrMoreExpressionTerm} from './MatchZeroOrMoreExpressionTerm';
import {MatchOneOrMoreExpressionTerm} from './MatchOneOrMoreExpressionTerm';
import {MatchZeroOrOneExpressionTerm} from './MatchZeroOrOneExpressionTerm';
import {
    Expression_matchOneOrMoreExpressionContext,
    Expression_matchZeroOrMoreExpressionContext,
    Expression_matchZeroOrOneExpressionContext,
    Expression_parenExpressionContext,
    Expression_referenceExpressionContext,
    ExpressionContext
} from "../generated_parser/MetamarkParser";

export abstract class ExpressionTerm {
    static build(ctx: ExpressionContext): ExpressionTerm {
        if (ctx instanceof Expression_parenExpressionContext) {
            return ParenExpressionTerm.build(ctx.parenExpression());
        } else if (ctx instanceof Expression_referenceExpressionContext) {
            return ReferenceExpressionTerm.build(ctx.referenceExpression());
        } else if (ctx instanceof Expression_matchZeroOrMoreExpressionContext) {
            return MatchZeroOrMoreExpressionTerm.build(ctx);
        } else if (ctx instanceof Expression_matchOneOrMoreExpressionContext) {
            return MatchOneOrMoreExpressionTerm.build(ctx);
        } else if (ctx instanceof Expression_matchZeroOrOneExpressionContext) {
            return MatchZeroOrOneExpressionTerm.build(ctx);
        } else {
            throw new Error(`Unsupported expression rule: ${ctx}`)
        }
    }
}
