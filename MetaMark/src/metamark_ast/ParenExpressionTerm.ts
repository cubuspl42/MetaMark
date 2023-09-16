import { ExpressionTerm } from "./ExpressionTerm";
import { ParenExpressionContext } from "../../generated_src/MetamarkParser";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { StaticScope } from "./StaticScope";
import * as typescript_ast from "../typescript_ast";

export class ParenExpressionTerm extends ExpressionTerm {
    static equals(a: ParenExpressionTerm, b: ParenExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ParenExpressionTerm)) return undefined;
        if (!(b instanceof ParenExpressionTerm)) return undefined;
        return ExpressionTermUtils.equals(a.innerExpression, b.innerExpression);
    }

    static build(
        staticScope: StaticScope,
        ctx: ParenExpressionContext,
    ): ParenExpressionTerm {
        return new ParenExpressionTerm(
            ExpressionTermUtils.build(staticScope, ctx._innerExpression),
        );
    }

    readonly innerExpression: ExpressionTerm;

    constructor(innerExpression: ExpressionTerm) {
        super();
        this.innerExpression = innerExpression;
    }

    override generateParseFunctionExpression(): typescript_ast.ExpressionTerm {
        return this.innerExpression.generateParseFunctionExpression();
    }
}
