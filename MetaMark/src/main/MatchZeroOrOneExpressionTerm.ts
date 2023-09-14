import {ExpressionTerm} from './ExpressionTerm';
import {Expression_matchZeroOrOneExpressionContext} from "../generated_parser/MetamarkParser";
import {ExpressionTermUtils} from "./ExpressionTermUtils";

export class MatchZeroOrOneExpressionTerm extends ExpressionTerm {
    static equals(a: MatchZeroOrOneExpressionTerm, b: MatchZeroOrOneExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchZeroOrOneExpressionTerm)) return undefined;
        if (!(b instanceof MatchZeroOrOneExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(a.optionalExpression, b.optionalExpression);
    }

    static build(ctx: Expression_matchZeroOrOneExpressionContext): MatchZeroOrOneExpressionTerm {
        return new MatchZeroOrOneExpressionTerm(
            ExpressionTermUtils.build(ctx._optionalExpression),
        );
    }

    optionalExpression: ExpressionTerm;

    constructor(optionalExpression: ExpressionTerm) {
        super();
        this.optionalExpression = optionalExpression;
    }
}
