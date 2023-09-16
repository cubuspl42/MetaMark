import { ExpressionTerm } from "./ExpressionTerm";
import { IStatementTerm } from "./StatementTerm";

export class ReturnStatementTerm implements IStatementTerm {
    readonly returnedExpression: ExpressionTerm;
    constructor(args: { returnedExpression: ExpressionTerm }) {
        this.returnedExpression = args.returnedExpression;
    }

    toPrettyString(): string {
        return `return ${this.returnedExpression.toPrettyString()}`;
    }
}
