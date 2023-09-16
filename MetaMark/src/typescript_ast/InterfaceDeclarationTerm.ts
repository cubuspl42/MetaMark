import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";
import { TypeExpressionTerm } from "./TypeExpressionTerm";

export class PropertySignatureTerm {
    readonly name: string;
    readonly type: TypeExpressionTerm;

    constructor(args: { name: string; type: TypeExpressionTerm }) {
        this.name = args.name;
        this.type = args.type;
    }
}

export class InterfaceDeclarationTerm implements IDeclarationTerm {
    readonly modifier: DeclarationModifier | null;
    readonly name: string;
    readonly properties: ReadonlyArray<PropertySignatureTerm>;

    constructor(args: {
        modifier?: DeclarationModifier;
        name: string;
        properties: ReadonlyArray<PropertySignatureTerm>;
    }) {
        this.modifier = args.modifier ?? null;
        this.name = args.name;
        this.properties = args.properties;
    }
}
