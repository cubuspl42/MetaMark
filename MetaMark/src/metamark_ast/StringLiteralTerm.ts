import { StringLiteralContext } from "../../generated_src/MetamarkParser";

export class StringLiteralTerm {
    static equals(a: StringLiteralTerm, b: StringLiteralTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof StringLiteralTerm)) return undefined;
        if (!(b instanceof StringLiteralTerm)) return undefined;
        return a.value === b.value;
    }

    static build(ctx: StringLiteralContext): StringLiteralTerm {
        const rawText = ctx.StringLiteral().text;
        return new StringLiteralTerm(rawText.substring(1, rawText.length - 1));
    }

    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }
}
