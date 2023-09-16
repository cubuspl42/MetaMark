import { ExpressionTerm, IExpressionTerm } from "./ExpressionTerm";
import { joinStringsOf } from "./utils";

export class CallExpressionTerm implements IExpressionTerm {
    readonly callee: ExpressionTerm;
    readonly arguments: ReadonlyArray<ExpressionTerm>;

    constructor(args: {
        readonly callee: ExpressionTerm;
        readonly arguments: ReadonlyArray<ExpressionTerm>;
    }) {
        this.callee = args.callee;
        this.arguments = args.arguments;
    }

    toPrettyString(): string {
        const calleeString = this.callee.toPrettyString();
        const argumentsString = joinStringsOf(
            this.arguments,
            ", ",
            (argument) => argument.toPrettyString(),
        );

        return `${calleeString}(${argumentsString})`;
    }
}
