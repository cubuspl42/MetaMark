import * as typescript_ast from "../typescript_ast";
import { ArrowFunctionConstructorTerm, BlockTerm, ExpressionTerm, ReferenceExpressionTerm } from "../typescript_ast";
import { FunctionArgumentDeclarationTerm } from "../typescript_ast/ArrowFunctionConstructorTerm";
import { DefinitionTerm } from "../DefinitionTerm";
import { NodeGenerator } from "./NodeGenerator";

import { charStreamTypeReference, parseStringReference } from "./runtime";

export abstract class ParseFunctionGenerator {
    private static readonly charStreamArgumentName = "charStream";

    private static readonly charStreamArgumentReference = new typescript_ast.ReferenceExpressionTerm({
        referredName: this.charStreamArgumentName,
    });

    static generateParseCall(args: { readonly callee: ExpressionTerm }) {
        return new typescript_ast.CallExpressionTerm({
            callee: args.callee,
            arguments: [
                new ReferenceExpressionTerm({
                    referredName: "charStream",
                }),
            ],
        });
    }

    static parseStringCall = this.generateParseCall({ callee: parseStringReference });

    protected constructor(private kind: string) {
    }

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
                        name: ParseFunctionGenerator.charStreamArgumentName,
                        type: charStreamTypeReference,
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
