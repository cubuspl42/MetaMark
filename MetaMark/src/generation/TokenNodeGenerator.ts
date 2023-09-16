import { NodeGenerator } from "./NodeGenerator";
import { DefinitionTerm } from "../DefinitionTerm";
import { PropertySignatureTerm } from "../typescript_ast";
import { TokenDefinitionTerm } from "../TokenDefinitionTerm";

export class TokenNodeGenerator extends NodeGenerator {
    readonly _tokenDefinition: TokenDefinitionTerm;

    constructor(args: { readonly tokenDefinition: TokenDefinitionTerm }) {
        super();
        this._tokenDefinition = args.tokenDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._tokenDefinition;
    }

    override generateExtraInterfaceProperties(): ReadonlyArray<PropertySignatureTerm> {
        return [];
    }
}
