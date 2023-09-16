import { TypeReferenceTerm } from "./TypeReferenceTerm";
import { UnionTypeTerm } from "./UnionTypeTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";

export type TypeExpressionTerm = TypeReferenceTerm | UnionTypeTerm | StringLiteralTerm;
