import { DeclarationTerm } from "./DeclarationTerm";

export class ModuleTerm {
    readonly declarations: ReadonlyArray<DeclarationTerm>;

    constructor(args: {
        readonly declarations: ReadonlyArray<DeclarationTerm>;
    }) {
        this.declarations = args.declarations;
    }
}
