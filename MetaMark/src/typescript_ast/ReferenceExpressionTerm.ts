import { IExpressionTerm } from "./ExpressionTerm";
import { ITypeExpressionTerm } from "./TypeExpressionTerm";

export class ReferenceExpressionTerm implements IExpressionTerm, ITypeExpressionTerm {
    static nullTerm = new ReferenceExpressionTerm({
        referredName: "null",
    });

    readonly referredName: string;

    constructor(args: { readonly referredName: string }) {
        this.referredName = args.referredName;
    }

    toPrettyString(): string {
        return this.referredName;
    }
}
