import { TypeExpressionTerm } from "./TypeExpressionTerm";

export class ArrayTypeTerm {
    readonly elementType: TypeExpressionTerm;

    constructor(args: { elementType: TypeExpressionTerm }) {
        this.elementType = args.elementType;
    }
}
