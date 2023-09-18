import { NodeGenerator } from "./NodeGenerator";
import { DefinitionTerm } from "../metamark_ast/DefinitionTerm";
import { PropertySignatureTerm } from "../typescript_ast";
import { MarkDefinitionTerm } from "../metamark_ast/MarkDefinitionTerm";

export class TokenNodeGenerator extends NodeGenerator {
    readonly _markDefinition: MarkDefinitionTerm;

    constructor(args: { readonly markDefinition: MarkDefinitionTerm }) {
        super();
        this._markDefinition = args.markDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._markDefinition;
    }

    override generateExtraInterfaceProperties(): ReadonlyArray<PropertySignatureTerm> {
        return [];
    }
}
