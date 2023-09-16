import { ExpressionTerm } from "./ExpressionTerm";
import { Expression_matchZeroOrOneExpressionContext } from "../generated_src/MetamarkParser";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { DelegatingExpressionTerm } from "./DelegatingExpressionTerm";
import { StaticScope } from "./StaticScope";

export class MatchZeroOrOneExpressionTerm extends DelegatingExpressionTerm {
    static equals(
        a: MatchZeroOrOneExpressionTerm,
        b: MatchZeroOrOneExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchZeroOrOneExpressionTerm)) return undefined;
        if (!(b instanceof MatchZeroOrOneExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(
            a.optionalExpression,
            b.optionalExpression,
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: Expression_matchZeroOrOneExpressionContext,
    ): MatchZeroOrOneExpressionTerm {
        return new MatchZeroOrOneExpressionTerm(
            ExpressionTermUtils.build(staticScope, ctx._optionalExpression),
        );
    }

    optionalExpression: ExpressionTerm;

    constructor(optionalExpression: ExpressionTerm) {
        super("parseZeroOrOne", optionalExpression);

        this.optionalExpression = optionalExpression;
    }
}
