import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";
import { ExpressionTerm } from "./ExpressionTerm";
import { indentTailLines } from "./prettyPrint";

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

    toPrettyString(): string {
        const modifier = this.modifier;
        const modifierPrefix = modifier !== null ? `${modifier} ` : "";
        const bodyString = indentTailLines(this.body.toPrettyString());

        return `${modifierPrefix}const ${this.name} = ${bodyString}`;
    }
}
