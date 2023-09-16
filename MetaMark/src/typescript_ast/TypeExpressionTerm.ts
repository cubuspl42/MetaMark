import { TypeReferenceTerm } from "./TypeReferenceTerm";
import { UnionTypeTerm } from "./UnionTypeTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { PropertyAccessExpressionTerm } from "./PropertyAccessExpressionTerm";

export interface ITypeExpressionTerm {
    toPrettyString(): string;
}

export type TypeExpressionTerm = ITypeExpressionTerm &
    (
        | TypeReferenceTerm
        | UnionTypeTerm
        | StringLiteralTerm
        | PropertyAccessExpressionTerm
    );
