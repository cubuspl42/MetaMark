import { ExpressionTerm } from "./ExpressionTerm";
import * as typescript_ast from "../typescript_ast";

export class DelegatingExpressionTerm extends ExpressionTerm {
    constructor(
        readonly buildFunctionName: string,
        readonly delegateExpressionTerm: ExpressionTerm,
    ) {
        super();
    }

    override generateParseFunctionExpression(): typescript_ast.ExpressionTerm {
        return new typescript_ast.CallExpressionTerm({
            callee: new typescript_ast.ReferenceExpressionTerm({
                referredName: `build_${this.buildFunctionName}`,
            }),
            arguments: [
                this.delegateExpressionTerm.generateParseFunctionExpression(),
            ],
        });
    }
}
