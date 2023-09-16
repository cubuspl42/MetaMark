import { TypeExpressionTerm } from "./TypeExpressionTerm";
import { BlockTerm } from "./BlockTerm";
import { IExpressionTerm } from "./ExpressionTerm";
import { joinStringsOf } from "./utils";

export class FunctionArgumentDeclarationTerm {
    readonly name: string;
    readonly type: TypeExpressionTerm;

    constructor(args: { name: string; type: TypeExpressionTerm }) {
        this.name = args.name;
        this.type = args.type;
    }

    toPrettyString(): string {
        return `${this.name}: ${this.type.toPrettyString()}`;
    }
}

export class ArrowFunctionConstructorTerm implements IExpressionTerm {
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

    toPrettyString(): string {
        const argumentsString = joinStringsOf(
            this.arguments,
            ", ",
            (argument) => argument.toPrettyString(),
        );

        const returnTypeString = this.returnType.toPrettyString();
        const bodyString = this.body.toPrettyString();

        return `(${argumentsString}): ${returnTypeString} => ${bodyString}`;
    }
}
