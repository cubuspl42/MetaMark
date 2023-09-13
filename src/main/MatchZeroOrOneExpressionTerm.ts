import {ExpressionTerm} from './ExpressionTerm';
import {Expression_matchZeroOrOneExpressionContext} from "../generated_parser/MetamarkParser";

export class MatchZeroOrOneExpressionTerm extends ExpressionTerm {
    static build(ctx: Expression_matchZeroOrOneExpressionContext): MatchZeroOrOneExpressionTerm {
        return new MatchZeroOrOneExpressionTerm(ExpressionTerm.build(ctx._optionalExpression));
    }

    optionalExpression: ExpressionTerm;

    constructor(optionalExpression: ExpressionTerm) {
        super();
        this.optionalExpression = optionalExpression;
    }
}
