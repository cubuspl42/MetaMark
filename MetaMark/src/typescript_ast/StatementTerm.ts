import { DeclarationTerm } from "./DeclarationTerm";
import { IfStatementTerm } from "./IfStatementTerm";
import { BlockTerm } from "./BlockTerm";
import { ReturnStatementTerm } from "./ReturnStatementTerm";

export type StatementTerm =
    | DeclarationTerm
    | IfStatementTerm
    | BlockTerm
    | ReturnStatementTerm;
