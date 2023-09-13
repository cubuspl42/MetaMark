export class ReferenceExpressionTerm {
    static build(ctx: any): ReferenceExpressionTerm {
        return new ReferenceExpressionTerm(ctx.referredIdentifier.text);
    }

    readonly referredIdentifier: string;

    constructor(referredIdentifier: string) {
        this.referredIdentifier = referredIdentifier;
    }
}
