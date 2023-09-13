import {DefinitionContext, MetamarkParser, StringLiteralContext} from "../generated_parser/MetamarkParser";
import {MetamarkLexer} from "../generated_parser/MetamarkLexer";
import {ExpressionTerm} from "./ExpressionTerm";
import {StringLiteralTerm} from "./StringLiteralTerm";

export abstract class DefinitionTerm {
    static build(ctx: DefinitionContext): DefinitionTerm {
        if (ctx._kind.type === MetamarkLexer.SymbolKeyword) {
            return new SymbolDefinitionTerm(
                ctx._name.text,
                StringLiteralTerm.build(ctx._body as StringLiteralContext),
            );
        } else if (ctx._kind.type === MetamarkLexer.RuleKeyword) {
            return new RuleDefinitionTerm(
                ctx._name.text,
                ExpressionTerm.build(ctx._body),
            );
        } else {
            throw new Error(`Unsupported definition kind token: ${ctx._kind}`);
        }
    }

    abstract readonly name: string;
}

export class SymbolDefinitionTerm extends DefinitionTerm {
    override readonly name: string;
    readonly pattern: StringLiteralTerm;

    constructor(name: string, pattern: StringLiteralTerm) {
        super();
        this.name = name;
        this.pattern = pattern;
    }
}

export class RuleDefinitionTerm extends DefinitionTerm {
    override readonly name: string;
    readonly body: ExpressionTerm;

    constructor(name: string, body: ExpressionTerm) {
        super();
        this.name = name;
        this.body = body;
    }
}
