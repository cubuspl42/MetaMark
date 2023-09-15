import { ExpressionRepresentation, ExpressionTerm } from "./ExpressionTerm";
import { ReferenceExpressionContext } from "../generated_src/MetamarkParser";
import { StaticScope } from "./StaticScope";
import { name } from "ts-loader";
import { DefinitionTerm } from "./DefinitionTerm";

export class ReferenceExpressionTerm extends ExpressionTerm {
    static equals(
        a: ReferenceExpressionTerm,
        b: ReferenceExpressionTerm,
    ): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ReferenceExpressionTerm)) return undefined;
        if (!(b instanceof ReferenceExpressionTerm)) return undefined;
        return a.referredName === b.referredName;
    }

    static build(
        staticScope: StaticScope,
        ctx: ReferenceExpressionContext,
    ): ReferenceExpressionTerm {
        return new ReferenceExpressionTerm(
            staticScope,
            ctx._referredIdentifier.text ?? "",
        );
    }

    private readonly _staticScope: StaticScope;

    readonly referredName: string;

    constructor(
        staticScope: StaticScope,
        referredIdentifier: string,
    ) {
        super();

        this._staticScope = staticScope;
        this.referredName = referredIdentifier;
    }

    get referredDefinition(): DefinitionTerm | null {
        return this._staticScope.getDefinition(this.referredName)
    }

    get representation(): ExpressionRepresentation {
        throw new Error();
    }
}
