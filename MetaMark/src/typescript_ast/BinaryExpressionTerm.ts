import { ExpressionTerm } from "./ExpressionTerm";
export class BinaryExpressionTerm {
    readonly left: ExpressionTerm;
    readonly operator: string;
    readonly right: ExpressionTerm;

    constructor(args: {
        left: ExpressionTerm;
        operator: string;
        right: ExpressionTerm;
    }) {
        this.left = args.left;
        this.operator = args.operator;
        this.right = args.right;
    }
}
