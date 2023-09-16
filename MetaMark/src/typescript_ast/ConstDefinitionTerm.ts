import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";
import { ExpressionTerm } from "./ExpressionTerm";

export class ConstDefinitionTerm implements IDeclarationTerm {
    readonly modifier: DeclarationModifier | null;
    readonly name: string;
    readonly body: ExpressionTerm;

    constructor(args: {
        readonly modifier?: DeclarationModifier;
        readonly name: string;
        readonly body: ExpressionTerm;
    }) {
        this.modifier = args.modifier ?? null;
        this.name = args.name;
        this.body = args.body;
    }
}
