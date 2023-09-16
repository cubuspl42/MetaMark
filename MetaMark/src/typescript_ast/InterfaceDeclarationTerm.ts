import { PropertySignatureTerm } from "./PropertySignatureTerm";
import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";

export class InterfaceDeclarationTerm implements IDeclarationTerm {
    readonly modifier: DeclarationModifier | null;
    readonly name: string;
    readonly properties: ReadonlyArray<PropertySignatureTerm>;

    constructor(args: {
        modifier?: DeclarationModifier
        name: string;
        properties: ReadonlyArray<PropertySignatureTerm>;
    }) {
        this.modifier = args.modifier ?? null;
        this.name = args.name;
        this.properties = args.properties;
    }
}
