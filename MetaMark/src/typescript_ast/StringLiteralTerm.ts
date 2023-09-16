import { IExpressionTerm } from "./ExpressionTerm";
import { ITypeExpressionTerm } from "./TypeExpressionTerm";

export class StringLiteralTerm implements IExpressionTerm, ITypeExpressionTerm {
    readonly value: string;

    constructor(args: { value: string }) {
        this.value = args.value;
    }

    toPrettyString(): string {
        return `"${this.value}"`;
    }
}
