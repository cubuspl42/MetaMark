import { ITypeExpressionTerm } from "./TypeExpressionTerm";

export class TypeReferenceTerm implements ITypeExpressionTerm {
    readonly referredName: string;

    constructor(args: { readonly referredName: string }) {
        this.referredName = args.referredName;
    }

    toPrettyString(): string {
        return this.referredName;
    }
}
