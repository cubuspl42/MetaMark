import {StringLiteralContext} from "../generated_parser/MetamarkParser";

export class StringLiteralTerm {
    static build(ctx: StringLiteralContext): StringLiteralTerm {
        const rawText = ctx.StringLiteral().text;
        return new StringLiteralTerm(rawText.substring(1, rawText.length - 1));
    }

    readonly value: string;

    constructor(value: string) {
        this.value = value;
    }
}
