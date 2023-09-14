import {ExpressionTerm} from './ExpressionTerm';
import {Expression_matchOneOrMoreExpressionContext} from "../generated_parser/MetamarkParser";
import {ExpressionTermUtils} from "./ExpressionTermUtils";

export class MatchOneOrMoreExpressionTerm extends ExpressionTerm {
    static equals(a: MatchOneOrMoreExpressionTerm, b: MatchOneOrMoreExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MatchOneOrMoreExpressionTerm)) return undefined;
        if (!(b instanceof MatchOneOrMoreExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(a.repeatedExpression, b.repeatedExpression);
    }

    static build(ctx: Expression_matchOneOrMoreExpressionContext): MatchOneOrMoreExpressionTerm {
        return new MatchOneOrMoreExpressionTerm(
            ExpressionTermUtils.build(ctx._repeatedExpression),
        );
    }

    readonly repeatedExpression: ExpressionTerm;

    constructor(repeatedExpression: ExpressionTerm) {
        super();
        this.repeatedExpression = repeatedExpression;
    }
}