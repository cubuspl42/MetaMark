import { IStatementTerm, StatementTerm } from "./StatementTerm";
import { joinStringNl, joinStrings } from "./utils";
import { indent } from "./prettyPrint";

export class BlockTerm implements IStatementTerm {
    readonly innerStatements: ReadonlyArray<StatementTerm>;

    constructor(args: {
        readonly innerStatements: ReadonlyArray<StatementTerm>;
    }) {
        this.innerStatements = args.innerStatements;
    }

    toPrettyString(): string {
        const innerStatementsString = joinStrings(
            this.innerStatements.map(
                (statement) => `${indent}${statement.toPrettyString()};`,
            ),
            "\n\n",
        );

        return joinStringNl(["{", innerStatementsString, "}"]);
    }
}
