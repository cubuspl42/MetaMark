import { DefinitionTerm } from "../DefinitionTerm";
import * as typescript_ast from "../typescript_ast";

export abstract class NodeGenerator {
    protected abstract get definition(): DefinitionTerm;

    private get typeName() {
        const name = this.definition.name;

        const firstLetter = name[0];
        const nameTail = name.substring(1);

        return firstLetter.toUpperCase() + nameTail;
    }

    generateTypeReference(): typescript_ast.TypeReferenceTerm {
        return new typescript_ast.TypeReferenceTerm({
            referredName: this.typeName,
        });
    }

    generateInterfaceDeclaration() {
        return new typescript_ast.InterfaceDeclarationTerm({
            modifier: "export",
            name: this.typeName,
            properties: [
                new typescript_ast.PropertySignatureTerm({
                    name: "type",
                    type: new typescript_ast.StringLiteralTerm({
                        value: this.definition.name,
                    }),
                }),
                ...this.generateExtraInterfaceProperties(),
            ],
        });
    }

    abstract generateExtraInterfaceProperties(): ReadonlyArray<typescript_ast.PropertySignatureTerm>;
}
