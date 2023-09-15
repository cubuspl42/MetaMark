export class TypeReferenceTerm {
    readonly referredName: string;
    constructor(args: { readonly referredName: string }) {
        this.referredName = args.referredName;
    }
}
