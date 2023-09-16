import { ParseFunctionGenerator } from "./ParseFunctionGenerator";
import { BlockTerm, ConstDefinitionTerm } from "../typescript_ast";
import {
    generateIfNullReturnNullStatement,
    generateReturnReference,
} from "../generationUtils";
import { DefinitionTerm } from "../DefinitionTerm";
import { NodeGenerator } from "./NodeGenerator";
import { TokenParseFunctionGenerator } from "./TokenParseFunctionGenerator";
import { ElementDefinitionTerm } from "../ElementDefinitionTerm";

export class ElementParseFunctionGenerator extends ParseFunctionGenerator {
    private readonly _elementDefinition: ElementDefinitionTerm;

    constructor(args: { readonly elementDefinition: ElementDefinitionTerm }) {
        super("Token");
        this._elementDefinition = args.elementDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._elementDefinition;
    }

    override generateParseFunctionBody(): BlockTerm {
        return new BlockTerm({
            innerStatements: [
                new ConstDefinitionTerm({
                    name: "symbol",
                    body: TokenParseFunctionGenerator.parseStringCall,
                }),
                generateIfNullReturnNullStatement({
                    comparedReferredName: "symbol",
                }),
                generateReturnReference({
                    returnedReferredName: "symbol",
                }),
            ],
        });
    }
}
