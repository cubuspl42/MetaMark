import { ExpressionTerm } from "./ExpressionTerm";

export class CallExpressionTerm {
    readonly callee: ExpressionTerm;
    readonly arguments: ReadonlyArray<ExpressionTerm>;

    constructor(args: {
        readonly callee: ExpressionTerm;
        readonly arguments: ReadonlyArray<ExpressionTerm>;
    }) {
        this.callee = args.callee;
        this.arguments = args.arguments;
    }
}
