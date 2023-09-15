import { TypeExpressionTerm } from "./TypeExpressionTerm";

export class UnionTypeTerm {
    readonly types: ReadonlyArray<TypeExpressionTerm>;

    constructor(args: { types: ReadonlyArray<TypeExpressionTerm> }) {
        this.types = args.types;
    }
}
