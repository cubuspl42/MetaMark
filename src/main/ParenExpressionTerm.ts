import {ExpressionTerm} from './ExpressionTerm';
import {ParenExpressionContext} from "../generated_parser/MetamarkParser";
import {ExpressionTermUtils} from "./ExpressionTermUtils";

export class ParenExpressionTerm extends ExpressionTerm {
    static equals(a: ParenExpressionTerm, b: ParenExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ParenExpressionTerm)) return undefined;
        if (!(b instanceof ParenExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(a.innerExpression, b.innerExpression);
    }

    static build(ctx: ParenExpressionContext): ParenExpressionTerm {
        return new ParenExpressionTerm(
            ExpressionTermUtils.build(ctx._innerExpression),
        );
    }

    readonly innerExpression: ExpressionTerm;

    constructor(innerExpression: ExpressionTerm) {
        super();
        this.innerExpression = innerExpression;
    }
}
