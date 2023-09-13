import {ExpressionTerm} from './ExpressionTerm';
import {Expression_matchZeroOrMoreExpressionContext} from "../generated_parser/MetamarkParser";

export class MatchZeroOrMoreExpressionTerm extends ExpressionTerm {
    static build(ctx: Expression_matchZeroOrMoreExpressionContext): MatchZeroOrMoreExpressionTerm {
        return new MatchZeroOrMoreExpressionTerm(ExpressionTerm.build(ctx._repeatedExpression));
    }

    readonly expression: ExpressionTerm;

    constructor(expression: ExpressionTerm) {
        super();
        this.expression = expression;
    }
}
