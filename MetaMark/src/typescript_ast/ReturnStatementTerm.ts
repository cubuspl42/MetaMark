import { ExpressionTerm } from "./ExpressionTerm";

export class ReturnStatementTerm {
    readonly returnedExpression: ExpressionTerm;
    constructor(args: { returnedExpression: ExpressionTerm }) {
        this.returnedExpression = args.returnedExpression;
    }
}
