import { StringLiteralTerm } from "./StringLiteralTerm";
import { ParseFunctionGenerator } from "../generation/ParseFunctionGenerator";
import { TokenParseFunctionGenerator } from "../generation/TokenParseFunctionGenerator";
import { NodeGenerator } from "../generation/NodeGenerator";
import { DefinitionTerm } from "./DefinitionTerm";
import { TokenNodeGenerator } from "../generation/TokenNodeGenerator";

export class MarkDefinitionTerm extends DefinitionTerm {
    static equals(a: MarkDefinitionTerm, b: MarkDefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof MarkDefinitionTerm)) return undefined;
        if (!(b instanceof MarkDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return StringLiteralTerm.equals(a.pattern, b.pattern);
    }

    override readonly name: string;
    readonly pattern: StringLiteralTerm;

    constructor(name: string, pattern: StringLiteralTerm) {
        super();
        this.name = name;
        this.pattern = pattern;
    }

    override get nodeGenerator(): NodeGenerator {
        return new TokenNodeGenerator({
            markDefinition: this,
        });
    }

    override get parseFunctionGenerator(): ParseFunctionGenerator {
        return new TokenParseFunctionGenerator({
            markDefinition: this,
        });
    }
}
