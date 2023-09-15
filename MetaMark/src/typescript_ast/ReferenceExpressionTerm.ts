export class ReferenceExpressionTerm {
    static nullTerm = new ReferenceExpressionTerm({
        referredName: "null",
    });

    readonly referredName: string;

    constructor(args: { readonly referredName: string }) {
        this.referredName = args.referredName;
    }
}
