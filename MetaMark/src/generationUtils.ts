import * as typescript_ast from "./typescript_ast";
import {
    BlockTerm,
    ExpressionTerm,
    ReturnStatementTerm,
} from "./typescript_ast";

export const nullExpression = typescript_ast.ReferenceExpressionTerm.nullTerm;

export const returnNullBlock = generateReturnBlock({
    returnedExpression: nullExpression,
});

export function generateReturnBlock(args: {
    readonly returnedExpression: ExpressionTerm;
}) {
    return new BlockTerm({
        innerStatements: [
            new ReturnStatementTerm({
                returnedExpression: args.returnedExpression,
            }),
        ],
    });
}

export function generateIfNullReturnNullStatement(args: {
    readonly comparedReferredName: string;
}) {
    return new typescript_ast.IfStatementTerm({
        condition: new typescript_ast.BinaryExpressionTerm({
            left: new typescript_ast.ReferenceExpressionTerm({
                referredName: args.comparedReferredName,
            }),
            operator: "!==",
            right: nullExpression,
        }),
        thenBlock: returnNullBlock,
    });
}

export function generateReturnReference(args: {
    readonly returnedReferredName: string;
}) {
    return new typescript_ast.ReturnStatementTerm({
        returnedExpression: new typescript_ast.ReferenceExpressionTerm({
            referredName: args.returnedReferredName,
        }),
    });
}
