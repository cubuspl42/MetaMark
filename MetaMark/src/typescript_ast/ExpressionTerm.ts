import { ReferenceExpressionTerm } from "./ReferenceExpressionTerm";
import { CallExpressionTerm } from "./CallExpressionTerm";
import { ArrowFunctionConstructorTerm } from "./ArrowFunctionConstructorTerm";
import { BinaryExpressionTerm } from "./BinaryExpressionTerm";

export interface IExpressionTerm {
    toPrettyString(): string;
}

export type ExpressionTerm = IExpressionTerm &
    (
        | ReferenceExpressionTerm
        | CallExpressionTerm
        | ArrowFunctionConstructorTerm
        | BinaryExpressionTerm
    );
