import { IExpressionTerm } from "./ExpressionTerm";

export class ReferenceExpressionTerm implements IExpressionTerm {
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
