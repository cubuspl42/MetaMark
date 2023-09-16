import { IExpressionTerm } from "./ExpressionTerm";
import { ITypeExpressionTerm } from "./TypeExpressionTerm";

export class ReferenceExpressionTerm
    implements IExpressionTerm, ITypeExpressionTerm
{
    readonly referredName: string;

    constructor(args: { readonly referredName: string }) {
        this.referredName = args.referredName;
    }

    toPrettyString(): string {
        return this.referredName;
    }
}
