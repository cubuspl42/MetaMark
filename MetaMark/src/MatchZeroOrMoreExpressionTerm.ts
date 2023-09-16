import { ExpressionTerm } from "./ExpressionTerm";
import { Expression_matchZeroOrMoreExpressionContext } from "../generated_src/MetamarkParser";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { DelegatingExpressionTerm } from "./DelegatingExpressionTerm";
import { StaticScope } from "./StaticScope";

export class MatchZeroOrMoreExpressionTerm extends DelegatingExpressionTerm {
    static equals(
        a: MatchZeroOrMoreExpressionTerm,
        b: MatchZeroOrMoreExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchZeroOrMoreExpressionTerm)) return undefined;
        if (!(b instanceof MatchZeroOrMoreExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(
            a.repeatedExpression,
            b.repeatedExpression,
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: Expression_matchZeroOrMoreExpressionContext,
    ): MatchZeroOrMoreExpressionTerm {
        return new MatchZeroOrMoreExpressionTerm(
            ExpressionTermUtils.build(staticScope, ctx._repeatedExpression),
        );
    }

    readonly repeatedExpression: ExpressionTerm;

    constructor(repeatedExpression: ExpressionTerm) {
        super("parseZeroOrMore", repeatedExpression);

        this.repeatedExpression = repeatedExpression;
    }
}
