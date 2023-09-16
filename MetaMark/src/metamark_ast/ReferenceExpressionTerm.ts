import { ExpressionTerm } from "./ExpressionTerm";
import { ReferenceExpressionContext } from "../../generated_src/MetamarkParser";
import { StaticScope } from "./StaticScope";
import { DefinitionTerm } from "./DefinitionTerm";
import * as typescript_ast from "../typescript_ast";

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

    constructor(staticScope: StaticScope, referredIdentifier: string) {
        super();

        this._staticScope = staticScope;
        this.referredName = referredIdentifier;
    }

    get referredDefinition(): DefinitionTerm | null {
        return this._staticScope.getDefinition(this.referredName);
    }

    override generateParseFunctionExpression(): typescript_ast.ExpressionTerm {
        const referredDefinition = this.referredDefinition;

        if (referredDefinition === null) {
            throw new Error(
                "Cannot generate parse function expression for an unresolved reference",
            );
        }

        return referredDefinition.parseFunctionGenerator.generateParseFunctionReference();
    }
}
