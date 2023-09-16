import { DeclarationTerm } from "./DeclarationTerm";
import { joinStringsOf } from "./utils";

export class ModuleTerm {
    readonly declarations: ReadonlyArray<DeclarationTerm>;

    constructor(args: {
        readonly declarations: ReadonlyArray<DeclarationTerm>;
    }) {
        this.declarations = args.declarations;
    }

    toPrettyString(): string {
        return joinStringsOf(this.declarations, "\n\n", (declaration) =>
            declaration.toPrettyString(),
        );
    }
}
