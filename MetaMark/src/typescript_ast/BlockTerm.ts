import { StatementTerm } from "./StatementTerm";
import { ReturnStatementTerm } from "./ReturnStatementTerm";
import { ExpressionTerm } from "./ExpressionTerm";

export class BlockTerm {
    readonly innerStatements: ReadonlyArray<StatementTerm>;

    constructor(args: {
        readonly innerStatements: ReadonlyArray<StatementTerm>;
    }) {
        this.innerStatements = args.innerStatements;
    }
}
