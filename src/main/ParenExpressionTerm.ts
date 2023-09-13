import {ExpressionTerm} from './ExpressionTerm';
import {ParenExpressionContext} from "../generated_parser/MetamarkParser";

export class ParenExpressionTerm extends ExpressionTerm {
    static build(ctx: ParenExpressionContext): ParenExpressionTerm {
        return new ParenExpressionTerm(ExpressionTerm.build(ctx._innerExpression));
    }

    readonly innerExpression: ExpressionTerm;

    constructor(innerExpression: ExpressionTerm) {
        super();
        this.innerExpression = innerExpression;
    }
}
