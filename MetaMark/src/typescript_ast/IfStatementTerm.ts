import { ExpressionTerm } from "./ExpressionTerm";
import { BlockTerm } from "./BlockTerm";

export class IfStatementTerm {
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
}
