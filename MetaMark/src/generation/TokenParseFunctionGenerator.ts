import { ParseFunctionGenerator } from "./ParseFunctionGenerator";
import { BlockTerm, ConstDefinitionTerm } from "../typescript_ast";
import {
    generateIfNullReturnNullStatement,
    generateReturnReference,
} from "../generationUtils";
import { DefinitionTerm } from "../metamark_ast/DefinitionTerm";
import { NodeGenerator } from "./NodeGenerator";
import { MarkDefinitionTerm } from "../metamark_ast/MarkDefinitionTerm";

export class TokenParseFunctionGenerator extends ParseFunctionGenerator {
    readonly _markDefinition: MarkDefinitionTerm;

    constructor(args: { readonly markDefinition: MarkDefinitionTerm }) {
        super("Token");
        this._markDefinition = args.markDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._markDefinition;
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
