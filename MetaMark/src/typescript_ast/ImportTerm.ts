import { StringLiteralTerm } from "./StringLiteralTerm";

export type ImportTerm = ImportAllTerm;

export class ImportAllTerm {
    readonly aliasName: string;
    readonly modulePath: StringLiteralTerm;

    constructor(args: { aliasName: string; modulePath: StringLiteralTerm }) {
        this.aliasName = args.aliasName;
        this.modulePath = args.modulePath;
    }

    toPrettyString(): string {
        return `import * as ${
            this.aliasName
        } from ${this.modulePath.toPrettyString()};`;
    }
}
