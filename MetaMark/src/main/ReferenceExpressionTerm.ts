import {ExpressionTerm} from "./ExpressionTerm";

export class ReferenceExpressionTerm {
    static equals(a: ReferenceExpressionTerm, b: ReferenceExpressionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ReferenceExpressionTerm)) return undefined;
        if (!(b instanceof ReferenceExpressionTerm)) return undefined;
        return a.referredIdentifier === b.referredIdentifier;
    }

    static build(ctx: any): ReferenceExpressionTerm {
        return new ReferenceExpressionTerm(ctx.referredIdentifier.text);
    }

    readonly referredIdentifier: string;

    constructor(referredIdentifier: string) {
        this.referredIdentifier = referredIdentifier;
    }
}
