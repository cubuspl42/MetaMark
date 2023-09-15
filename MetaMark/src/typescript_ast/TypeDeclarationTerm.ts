import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";
import { TypeExpressionTerm } from "./TypeExpressionTerm";

export class TypeDeclarationTerm implements IDeclarationTerm {
    readonly modifier?: DeclarationModifier;
    readonly name: string;
    readonly body: TypeExpressionTerm;

    constructor(args: {
        readonly modifier?: DeclarationModifier;
        readonly name: string;
        readonly body: TypeExpressionTerm;
    }) {
        this.modifier = args.modifier;
        this.name = args.name;
        this.body = args.body;
    }
}