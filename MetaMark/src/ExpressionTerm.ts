import * as typescript_ast from "./typescript_ast";

export abstract class ExpressionRepresentation {
    abstract generateParseFunctionExpression(): typescript_ast.ExpressionTerm;
}

export abstract class ExpressionTerm {
    abstract get representation(): ExpressionRepresentation;
}
