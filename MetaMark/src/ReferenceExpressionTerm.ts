import { ExpressionTerm } from "./ExpressionTerm";
import { ReferenceExpressionContext } from "../generated_src/MetamarkParser";

export class ReferenceExpressionTerm {
    static equals(
        a: ReferenceExpressionTerm,
        b: ReferenceExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ReferenceExpressionTerm)) return undefined;
        if (!(b instanceof ReferenceExpressionTerm)) return undefined;
        return a.referredIdentifier === b.referredIdentifier;
    }

    static build(ctx: ReferenceExpressionContext): ReferenceExpressionTerm {
        return new ReferenceExpressionTerm(ctx._referredIdentifier.text ?? "");
    }

    readonly referredIdentifier: string;

    constructor(referredIdentifier: string) {
        this.referredIdentifier = referredIdentifier;
    }
}
