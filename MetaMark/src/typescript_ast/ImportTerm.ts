import { StringLiteralTerm } from "./StringLiteralTerm";

export class ImportTerm {
    readonly moduleName: StringLiteralTerm;
    readonly namedImports: ReadonlyArray<string>;
    constructor(args: {
        moduleName: StringLiteralTerm;
        namedImports: string[];
    }) {
        this.moduleName = args.moduleName;
        this.namedImports = args.namedImports;
    }
}
