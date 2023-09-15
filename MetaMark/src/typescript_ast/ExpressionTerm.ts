import { ReferenceExpressionTerm } from "./ReferenceExpressionTerm";
import { CallExpressionTerm } from "./CallExpressionTerm";
import { ArrowFunctionConstructorTerm } from "./ArrowFunctionConstructorTerm";
import { ReturnStatementTerm } from "./ReturnStatementTerm";
import { IfStatementTerm } from "./IfStatementTerm";
import { BinaryExpressionTerm } from "./BinaryExpressionTerm";

export type ExpressionTerm =
    | ReferenceExpressionTerm
    | CallExpressionTerm
    | ArrowFunctionConstructorTerm
    | ReturnStatementTerm
    | IfStatementTerm
    | BinaryExpressionTerm;
