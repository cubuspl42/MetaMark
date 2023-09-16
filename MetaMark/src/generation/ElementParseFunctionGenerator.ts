import { ParseFunctionGenerator } from "./ParseFunctionGenerator";
import { BlockTerm, ReturnStatementTerm } from "../typescript_ast";
import { DefinitionTerm } from "../DefinitionTerm";
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
        const body = this._elementDefinition.body;

        return new BlockTerm({
            innerStatements: [
                new ReturnStatementTerm({
                    returnedExpression: ParseFunctionGenerator.generateParseCall({
                        callee: body.generateParseFunctionExpression(),
                    }),
                }),
            ],
        });
    }
}
