import { DeclarationTerm } from "./DeclarationTerm";
import { IfStatementTerm } from "./IfStatementTerm";
import { BlockTerm } from "./BlockTerm";
import { ReturnStatementTerm } from "./ReturnStatementTerm";

export interface IStatementTerm {
    toPrettyString(): string;
}

export type StatementTerm = IStatementTerm &
    (DeclarationTerm | IfStatementTerm | BlockTerm | ReturnStatementTerm);
