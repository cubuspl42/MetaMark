import { PropertySignatureTerm } from "./PropertySignatureTerm";

export class InterfaceDeclarationTerm {
    readonly name: string;
    readonly properties: ReadonlyArray<PropertySignatureTerm>;

    constructor(args: {
        name: string;
        properties: ReadonlyArray<PropertySignatureTerm>;
    }) {
        this.name = args.name;
        this.properties = args.properties;
    }
}
