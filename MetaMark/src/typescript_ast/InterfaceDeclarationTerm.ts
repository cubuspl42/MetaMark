import { DeclarationModifier, IDeclarationTerm } from "./DeclarationTerm";
import { TypeExpressionTerm } from "./TypeExpressionTerm";
import { joinStringNl, joinStringsOf } from "./utils";
import { indent } from "./prettyPrint";

export class PropertySignatureTerm {
    readonly name: string;
    readonly type: TypeExpressionTerm;

    constructor(args: { name: string; type: TypeExpressionTerm }) {
        this.name = args.name;
        this.type = args.type;
    }

    toPrettyString(): string {
        return `${this.name}: ${this.type.toPrettyString()}`;
    }
}

export class InterfaceDeclarationTerm implements IDeclarationTerm {
    readonly modifier: DeclarationModifier | null;
    readonly name: string;
    readonly properties: ReadonlyArray<PropertySignatureTerm>;

    constructor(args: {
        modifier?: DeclarationModifier;
        name: string;
        properties: ReadonlyArray<PropertySignatureTerm>;
    }) {
        this.modifier = args.modifier ?? null;
        this.name = args.name;
        this.properties = args.properties;
    }

    toPrettyString(): string {
        const propertiesString = joinStringsOf(
            this.properties,
            "\n",
            (property) => property.toPrettyString(),
        );

        return joinStringNl([
            `${indent}interface ${this.name} {`,
            propertiesString,
            `}`,
        ]);
    }
}
