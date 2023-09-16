import { ParseFunctionGenerator } from "./ParseFunctionGenerator";
import { BlockTerm, ConstDefinitionTerm } from "../typescript_ast";
import {
    generateIfNullReturnNullStatement,
    generateReturnReference,
} from "../generationUtils";
import { DefinitionTerm } from "../metamark_ast/DefinitionTerm";
import { NodeGenerator } from "./NodeGenerator";
import { TokenDefinitionTerm } from "../metamark_ast/TokenDefinitionTerm";

export class TokenParseFunctionGenerator extends ParseFunctionGenerator {
    readonly _tokenDefinition: TokenDefinitionTerm;

    constructor(args: { readonly tokenDefinition: TokenDefinitionTerm }) {
        super("Token");
        this._tokenDefinition = args.tokenDefinition;
    }

    override get definition(): DefinitionTerm {
        return this._tokenDefinition;
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
