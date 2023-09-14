import {ExpressionTerm} from './ExpressionTerm';
import {Expression_matchZeroOrMoreExpressionContext} from "../generated_parser/MetamarkParser";
import {ExpressionTermUtils} from "./ExpressionTermUtils";

export class MatchZeroOrMoreExpressionTerm extends ExpressionTerm {
    static equals(a: MatchZeroOrMoreExpressionTerm, b: MatchZeroOrMoreExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchZeroOrMoreExpressionTerm)) return undefined;
        if (!(b instanceof MatchZeroOrMoreExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(a.repeatedExpression, b.repeatedExpression);
    }

    static build(ctx: Expression_matchZeroOrMoreExpressionContext): MatchZeroOrMoreExpressionTerm {
        return new MatchZeroOrMoreExpressionTerm(
            ExpressionTermUtils.build(ctx._repeatedExpression),
        );
    }

    readonly repeatedExpression: ExpressionTerm;

    constructor(expression: ExpressionTerm) {
        super();
        this.repeatedExpression = expression;
    }
}
