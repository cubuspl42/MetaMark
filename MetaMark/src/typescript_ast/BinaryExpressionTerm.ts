import { ExpressionTerm, IExpressionTerm } from "./ExpressionTerm";

export class BinaryExpressionTerm implements IExpressionTerm {
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

    toPrettyString(): string {
        const leftString = this.left.toPrettyString();
        const rightString = this.right.toPrettyString();

        return `${leftString} ${this.operator} ${rightString}`;
    }
}
