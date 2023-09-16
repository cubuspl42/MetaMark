import { ExpressionTerm } from "./ExpressionTerm";
import { Expression_matchOneOrMoreExpressionContext } from "../../generated_src/MetamarkParser";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { DelegatingExpressionTerm } from "./DelegatingExpressionTerm";
import { StaticScope } from "./StaticScope";

export class MatchOneOrMoreExpressionTerm extends DelegatingExpressionTerm {
    static equals(
        a: MatchOneOrMoreExpressionTerm,
        b: MatchOneOrMoreExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchOneOrMoreExpressionTerm)) return undefined;
        if (!(b instanceof MatchOneOrMoreExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(
            a.repeatedExpression,
            b.repeatedExpression,
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: Expression_matchOneOrMoreExpressionContext,
    ): MatchOneOrMoreExpressionTerm {
        return new MatchOneOrMoreExpressionTerm(
            ExpressionTermUtils.build(staticScope, ctx._repeatedExpression),
        );
    }

    readonly repeatedExpression: ExpressionTerm;

    constructor(repeatedExpression: ExpressionTerm) {
        super("parseOneOrMore", repeatedExpression);

        this.repeatedExpression = repeatedExpression;
    }
}
