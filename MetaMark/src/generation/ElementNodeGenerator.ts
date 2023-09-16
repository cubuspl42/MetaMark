import { NodeGenerator } from "./NodeGenerator";
import { DefinitionTerm } from "../DefinitionTerm";
import { PropertySignatureTerm } from "../typescript_ast";
import { ElementDefinitionTerm } from "../ElementDefinitionTerm";

export class ElementNodeGenerator extends NodeGenerator {
    readonly _elementDefinition: ElementDefinitionTerm;

    constructor(args: { readonly elementDefinition: ElementDefinitionTerm }) {
        super();
        this._elementDefinition = args.elementDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._elementDefinition;
    }

    override generateExtraInterfaceProperties(): ReadonlyArray<PropertySignatureTerm> {
        return []; // TODO
    }
}
