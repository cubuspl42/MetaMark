import { ExpressionTermUtils } from "./ExpressionTermUtils";
import { ExpressionTerm } from "./ExpressionTerm";
import { NodeGenerator } from "../generation/NodeGenerator";
import { ParseFunctionGenerator } from "../generation/ParseFunctionGenerator";
import { ElementParseFunctionGenerator } from "../generation/ElementParseFunctionGenerator";
import { DefinitionTerm } from "./DefinitionTerm";
import { ElementNodeGenerator } from "../generation/ElementNodeGenerator";

export class ElementDefinitionTerm extends DefinitionTerm {
    static equals(a: ElementDefinitionTerm, b: ElementDefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ElementDefinitionTerm)) return undefined;
        if (!(b instanceof ElementDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return ExpressionTermUtils.equals(a.body, b.body);
    }

    override readonly name: string;
    readonly body: ExpressionTerm;

    constructor(name: string, body: ExpressionTerm) {
        super();
        this.name = name;
        this.body = body;
    }

    override get nodeGenerator(): NodeGenerator {
        return new ElementNodeGenerator({
            elementDefinition: this,
        });
    }

    override get parseFunctionGenerator(): ParseFunctionGenerator {
        return new ElementParseFunctionGenerator({
            elementDefinition: this,
        });
    }
}
