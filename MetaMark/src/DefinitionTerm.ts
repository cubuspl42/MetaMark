import { ParseFunctionGenerator } from "./generation/ParseFunctionGenerator";
import { NodeGenerator } from "./generation/NodeGenerator";


export abstract class DefinitionTerm {
    abstract readonly name: string;

    abstract get parseFunctionGenerator(): ParseFunctionGenerator;

    abstract get nodeGenerator(): NodeGenerator;
}
