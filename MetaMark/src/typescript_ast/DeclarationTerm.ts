import { TypeDeclarationTerm } from "./TypeDeclarationTerm";
import { ConstDefinitionTerm } from "./ConstDefinitionTerm";
import { InterfaceDeclarationTerm } from "./InterfaceDeclarationTerm";

export type DeclarationModifier = "export";

export interface IDeclarationTerm {
    readonly modifier: DeclarationModifier | null;
    readonly name: string;

    toPrettyString(): string;
}

export type DeclarationTerm =
    | ConstDefinitionTerm
    | InterfaceDeclarationTerm
    | TypeDeclarationTerm;
