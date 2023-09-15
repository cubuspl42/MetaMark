import { StatementTerm } from "./StatementTerm";
import { ReturnStatementTerm } from "./ReturnStatementTerm";
import { ExpressionTerm } from "./ExpressionTerm";

export class BlockTerm {
    static buildReturnBlock(args: {
        readonly returnedExpression: ExpressionTerm;
    }) {
        return new BlockTerm({
            innerStatements: [
                new ReturnStatementTerm({
                    returnedExpression: args.returnedExpression,
                }),
            ],
        });
    }

    readonly innerStatements: ReadonlyArray<StatementTerm>;

    constructor(args: {
        readonly innerStatements: ReadonlyArray<StatementTerm>;
    }) {
        this.innerStatements = args.innerStatements;
    }
}
