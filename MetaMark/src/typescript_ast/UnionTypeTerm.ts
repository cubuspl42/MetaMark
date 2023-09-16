import { ITypeExpressionTerm, TypeExpressionTerm } from "./TypeExpressionTerm";
import { joinStringsOf } from "./utils";

export class UnionTypeTerm implements ITypeExpressionTerm {
    readonly types: ReadonlyArray<TypeExpressionTerm>;

    constructor(args: { types: ReadonlyArray<TypeExpressionTerm> }) {
        this.types = args.types;
    }

    toPrettyString(): string {
        return joinStringsOf(this.types, " | ", (type) =>
            type.toPrettyString(),
        );
    }
}
