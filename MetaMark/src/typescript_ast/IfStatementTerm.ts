import { ExpressionTerm } from "./ExpressionTerm";
import { BlockTerm } from "./BlockTerm";
import { IStatementTerm } from "./StatementTerm";
import { indentLines, indentTailLines } from "./prettyPrint";
import { joinStringNl } from "./utils";

export class IfStatementTerm implements IStatementTerm {
    readonly condition: ExpressionTerm;
    readonly thenBlock: BlockTerm;
    readonly elseBlock?: BlockTerm;

    constructor(args: {
        condition: ExpressionTerm;
        thenBlock: BlockTerm;
        elseBlock?: BlockTerm;
    }) {
        this.condition = args.condition;
        this.thenBlock = args.thenBlock;
        this.elseBlock = args.elseBlock;
    }

    toPrettyString(): string {
        const elseBlock = this.elseBlock;

        const thenString = indentTailLines(this.thenBlock.toPrettyString());
        const elseString =
            elseBlock !== undefined
                ? ` else ${elseBlock.toPrettyString()}`
                : "";

        return joinStringNl([
            `if (${this.condition.toPrettyString()}) ${thenString}${elseString}`,
        ]);
    }
}
