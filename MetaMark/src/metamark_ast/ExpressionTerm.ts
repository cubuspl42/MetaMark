import * as typescript_ast from "../typescript_ast";

export abstract class ExpressionTerm {
    abstract generateParseFunctionExpression(): typescript_ast.ExpressionTerm;
}
