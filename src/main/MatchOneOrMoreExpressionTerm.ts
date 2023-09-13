import { ExpressionTerm } from './ExpressionTerm';
import {Expression_matchOneOrMoreExpressionContext} from "../generated_parser/MetamarkParser";

export class MatchOneOrMoreExpressionTerm extends ExpressionTerm {
    static build(ctx: Expression_matchOneOrMoreExpressionContext): MatchOneOrMoreExpressionTerm {
        return new MatchOneOrMoreExpressionTerm(ExpressionTerm.build(ctx._repeatedExpression));
    }

    readonly repeatedExpression: ExpressionTerm;

    constructor(repeatedExpression: ExpressionTerm) {
        super();
        this.repeatedExpression = repeatedExpression;
    }
}
