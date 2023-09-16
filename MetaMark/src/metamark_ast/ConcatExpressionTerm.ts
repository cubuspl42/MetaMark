import { ExpressionTerm } from "./ExpressionTerm";
import { Expression_concatExpressionContext } from "../../generated_src/MetamarkParser";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { StaticScope } from "./StaticScope";
import { arrayEquals } from "../utils";
import * as typescript_ast from "../typescript_ast";

export class ConcatExpressionTerm extends ExpressionTerm {
    static equals(
        a: ConcatExpressionTerm,
        b: ConcatExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ConcatExpressionTerm)) return undefined;
        if (!(b instanceof ConcatExpressionTerm)) return undefined;
        return arrayEquals(a.joinedExpressions, b.joinedExpressions, ExpressionTermUtils.equals);
    }

    static build(
        staticScope: StaticScope,
        ctx: Expression_concatExpressionContext,
    ): ConcatExpressionTerm {
        return new ConcatExpressionTerm(
            ctx.expression().map((it) => ExpressionTermUtils.build(staticScope, it)),
        );
    }

    readonly joinedExpressions: ReadonlyArray<ExpressionTerm>;

    constructor(joinedExpressions: ReadonlyArray<ExpressionTerm>) {
        super();

        this.joinedExpressions = joinedExpressions;
    }

    override generateParseFunctionExpression(): typescript_ast.ExpressionTerm {
        throw new Error();
    }
}
