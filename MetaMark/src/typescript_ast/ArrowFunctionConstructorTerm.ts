import { TypeExpressionTerm } from "./TypeExpressionTerm";
import { BlockTerm } from "./BlockTerm";

export class FunctionArgumentDeclarationTerm {
    readonly name: string;
    readonly type: TypeExpressionTerm;

    constructor(args: { name: string; type: TypeExpressionTerm }) {
        this.name = args.name;
        this.type = args.type;
    }
}

export class ArrowFunctionConstructorTerm {
    readonly arguments: ReadonlyArray<FunctionArgumentDeclarationTerm>;
    readonly returnType: TypeExpressionTerm;
    readonly body: BlockTerm;

    constructor(args: {
        readonly arguments: ReadonlyArray<FunctionArgumentDeclarationTerm>;
        readonly returnType: TypeExpressionTerm;
        readonly body: BlockTerm;
    }) {
        this.arguments = args.arguments;
        this.returnType = args.returnType;
        this.body = args.body;
    }
}
