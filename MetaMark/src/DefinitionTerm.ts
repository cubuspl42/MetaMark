import {
    DefinitionContext,
    Expression_stringLiteralContext,
} from "../generated_src/MetamarkParser";
import { MetamarkLexer } from "../generated_src/MetamarkLexer";
import { ExpressionTerm } from "./ExpressionTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import * as typescript_ast from "./typescript_ast";
import {
    ArrowFunctionConstructorTerm,
    BlockTerm,
    ConstDefinitionTerm,
    TypeReferenceTerm,
} from "./typescript_ast";
import { FunctionArgumentDeclarationTerm } from "./typescript_ast/ArrowFunctionConstructorTerm";
import { StaticScope } from "./StaticScope";
import {
    generateIfNullReturnNullStatement,
    generateReturnReference,
} from "./generationUtils";

abstract class ParseFunctionRepresentation {
    abstract buildExpression(): typescript_ast.ExpressionTerm;
}

export abstract class DefinitionTerm {
    static equals(a: DefinitionTerm, b: DefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        return (
            SymbolDefinitionTerm.equals(a, b) ?? RuleDefinitionTerm.equals(a, b)
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: DefinitionContext,
    ): DefinitionTerm {
        const kindType = ctx._kind.type;
        const body = ctx._body;

        if (
            kindType === MetamarkLexer.SymbolKeyword &&
            body instanceof Expression_stringLiteralContext
        ) {
            return new SymbolDefinitionTerm(
                ctx._name.text ?? "",
                StringLiteralTerm.build(body.stringLiteral()),
            );
        } else if (kindType === MetamarkLexer.RuleKeyword) {
            return new RuleDefinitionTerm(
                ctx._name.text ?? "",
                ExpressionTermUtils.build(staticScope, body),
            );
        } else {
            throw new Error(`Unsupported definition kind token: ${ctx._kind}`);
        }
    }

    abstract readonly name: string;

    abstract get representation(): DefinitionRepresentation;
}

abstract class DefinitionRepresentation {
    private static charStreamName = "charStream";
    private static charStreamTypeName = "CharStream";

    static parseStringCall = new typescript_ast.CallExpressionTerm({
        callee: new typescript_ast.ReferenceExpressionTerm({
            referredName: "parseString",
        }),
        arguments: [
            new typescript_ast.ReferenceExpressionTerm({
                referredName: DefinitionRepresentation.charStreamName,
            }),
        ],
    });

    generateParseFunctionReference() {
        return new typescript_ast.ReferenceExpressionTerm({
            referredName: this.parseFunctionName,
        });
    }

    generateParseFunctionDefinition() {
        return new typescript_ast.ConstDefinitionTerm({
            modifier: "export",
            name: this.parseFunctionName,
            body: new ArrowFunctionConstructorTerm({
                arguments: [
                    new FunctionArgumentDeclarationTerm({
                        name: DefinitionRepresentation.charStreamName,
                        type: new TypeReferenceTerm({
                            referredName:
                                DefinitionRepresentation.charStreamTypeName,
                        }),
                    }),
                ],
                returnType: this.generateNodeTypeReference(),
                body: this.generateParseFunctionBody(),
            }),
        });
    }

    protected abstract get kind(): string;

    protected abstract get name(): string;

    protected abstract generateParseFunctionBody(): BlockTerm;

    private get nodeTypeName() {
        const firstLetter = this.name[0];
        const nameTail = this.name.substring(1);

        return firstLetter.toUpperCase() + nameTail;
    }

    private get parseFunctionName(): string {
        return `parse${this.kind}_${this.name}`;
    }

    private generateNodeTypeReference() {
        return new typescript_ast.TypeReferenceTerm({
            referredName: this.nodeTypeName,
        });
    }
}

class SymbolRepresentation extends DefinitionRepresentation {
    readonly _symbolDefinition: SymbolDefinitionTerm;

    constructor(args: { readonly symbolDefinition: SymbolDefinitionTerm }) {
        super();
        this._symbolDefinition = args.symbolDefinition;
    }

    get kind(): string {
        return "Symbol";
    }

    get name(): string {
        return this._symbolDefinition.name;
    }

    generateParseFunctionBody(): BlockTerm {
        return new BlockTerm({
            innerStatements: [
                new ConstDefinitionTerm({
                    name: "symbol",
                    body: SymbolRepresentation.parseStringCall,
                }),
                generateIfNullReturnNullStatement({
                    comparedReferredName: "symbol",
                }),
                generateReturnReference({
                    returnedReferredName: "symbol",
                }),
            ],
        });
    }
}

abstract class RuleRepresentation extends DefinitionRepresentation {
    abstract get ruleDefinition(): RuleDefinitionTerm;

    override get kind(): string {
        return "Rule";
    }

    override get name(): string {
        return this.ruleDefinition.name;
    }

    override generateParseFunctionBody(): BlockTerm {
        return new BlockTerm({
            innerStatements: [
                new ConstDefinitionTerm({
                    name: "symbol",
                    body: SymbolRepresentation.parseStringCall,
                }),
                generateIfNullReturnNullStatement({
                    comparedReferredName: "symbol",
                }),
                generateReturnReference({
                    returnedReferredName: "symbol",
                }),
            ],
        });
    }
}

export class SymbolDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: SymbolDefinitionTerm,
        b: SymbolDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof SymbolDefinitionTerm)) return undefined;
        if (!(b instanceof SymbolDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return StringLiteralTerm.equals(a.pattern, b.pattern);
    }

    override readonly name: string;
    readonly pattern: StringLiteralTerm;

    constructor(name: string, pattern: StringLiteralTerm) {
        super();
        this.name = name;
        this.pattern = pattern;
    }

    get representation(): DefinitionRepresentation {
        return new SymbolRepresentation({
            symbolDefinition: this,
        });
    }
}

export class RuleDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: RuleDefinitionTerm,
        b: RuleDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof RuleDefinitionTerm)) return undefined;
        if (!(b instanceof RuleDefinitionTerm)) return undefined;
        if (a.name !== b.name) return false;
        return ExpressionTermUtils.equals(a.body, b.body);
    }

    override readonly name: string;
    readonly body: ExpressionTerm;

    constructor(name: string, body: ExpressionTerm) {
        super();
        this.name = name;
        this.body = body;
    }

    get representation(): DefinitionRepresentation {
        throw new Error();
    }
}
