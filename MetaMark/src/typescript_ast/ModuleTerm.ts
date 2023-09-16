import { DeclarationTerm } from "./DeclarationTerm";
import { joinStrings, joinStringsOf } from "./utils";
import { ImportTerm } from "./ImportTerm";

export class ModuleTerm {
    readonly imports: ReadonlyArray<ImportTerm>;
    readonly declarations: ReadonlyArray<DeclarationTerm>;

    constructor(args: {
        readonly imports: ReadonlyArray<ImportTerm>;
        readonly declarations: ReadonlyArray<DeclarationTerm>;
    }) {
        this.imports = args.imports;
        this.declarations = args.declarations;
    }

    toPrettyString(): string {
        const importsString = joinStringsOf(this.imports, "\n", (import_) =>
            import_.toPrettyString(),
        );

        const declarationsString = joinStringsOf(
            this.declarations,
            "\n\n",
            (declaration) => declaration.toPrettyString(),
        );

        return joinStrings([importsString, declarationsString], "\n\n");
    }
}
