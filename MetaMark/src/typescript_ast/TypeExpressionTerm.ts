import { TypeReferenceTerm } from "./TypeReferenceTerm";
import { UnionTypeTerm } from "./UnionTypeTerm";

export type TypeExpressionTerm = TypeReferenceTerm | UnionTypeTerm;
