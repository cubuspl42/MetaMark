import * as typescript_ast from "../typescript_ast";
import {
    ArrowFunctionConstructorTerm,
    BlockTerm,
    TypeReferenceTerm,
} from "../typescript_ast";
import { FunctionArgumentDeclarationTerm } from "../typescript_ast/ArrowFunctionConstructorTerm";
import { DefinitionTerm } from "../DefinitionTerm";
import { NodeGenerator } from "./NodeGenerator";

export abstract class ParseFunctionGenerator {
    private static charStreamName = "charStream";
    private static charStreamTypeName = "CharStream";

    static parseStringCall = new typescript_ast.CallExpressionTerm({
        callee: new typescript_ast.ReferenceExpressionTerm({
            referredName: "parseString",
        }),
        arguments: [
            new typescript_ast.ReferenceExpressionTerm({
                referredName: ParseFunctionGenerator.charStreamName,
            }),
        ],
    });

    protected constructor(private kind: string) {}

    protected abstract get definition(): DefinitionTerm;

    generateParseFunctionReference() {
        return new typescript_ast.ReferenceExpressionTerm({
            referredName: this.parseFunctionName,
        });
    }

    generateParseFunctionDefinition() {
        return new typescript_ast.ConstDefinitionTerm({
            modifier: "export",
            name: this.parseFunctionName,
            body: new ArrowFunctionConstructorTerm({
                arguments: [
                    new FunctionArgumentDeclarationTerm({
                        name: ParseFunctionGenerator.charStreamName,
                        type: new TypeReferenceTerm({
                            referredName:
                                ParseFunctionGenerator.charStreamTypeName,
                        }),
                    }),
                ],
                returnType: this.nodeGenerator.generateTypeReference(),
                body: this.generateParseFunctionBody(),
            }),
        });
    }

    protected abstract generateParseFunctionBody(): BlockTerm;

    private get nodeGenerator(): NodeGenerator {
        return this.definition.nodeGenerator;
    }

    private get parseFunctionName(): string {
        return `parse${this.kind}_${this.definition.name}`;
    }
}
