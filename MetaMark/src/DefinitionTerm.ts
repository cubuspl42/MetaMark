import { DefinitionContext, Expression_stringLiteralContext } from "../generated_src/MetamarkParser";
import { MetamarkLexer } from "../generated_src/MetamarkLexer";
import { ExpressionTerm } from "./ExpressionTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { ExpressionTermUtils } from "./ExpressionTermUtils";
import * as typescript_ast from "./typescript_ast";
import { ArrowFunctionConstructorTerm, BlockTerm, ConstDefinitionTerm, TypeReferenceTerm } from "./typescript_ast";
import { FunctionArgumentDeclarationTerm } from "./typescript_ast/ArrowFunctionConstructorTerm";
import { StaticScope } from "./StaticScope";
import { generateIfNullReturnNullStatement, generateReturnReference } from "./generationUtils";

abstract class ParseFunctionRepresentation {
    abstract buildExpression(): typescript_ast.ExpressionTerm;
}

export abstract class DefinitionTerm {
    static equals(a: DefinitionTerm, b: DefinitionTerm): boolean;
    static equals(a: unknown, b: unknown): boolean | undefined;

    static equals(a: unknown, b: unknown): boolean | undefined {
        return (
            TokenDefinitionTerm.equals(a, b) ?? ElementDefinitionTerm.equals(a, b)
        );
    }

    static build(
        staticScope: StaticScope,
        ctx: DefinitionContext,
    ): DefinitionTerm {
        const kindType = ctx._kind.type;
        const body = ctx._body;

        if (
            kindType === MetamarkLexer.TokenKeyword &&
            body instanceof Expression_stringLiteralContext
        ) {
            return new TokenDefinitionTerm(
                ctx._name.text ?? "",
                StringLiteralTerm.build(body.stringLiteral()),
            );
        } else if (kindType === MetamarkLexer.ElementKeyworc) {
            return new ElementDefinitionTerm(
                ctx._name.text ?? "",
                ExpressionTermUtils.build(staticScope, body),
            );
        } else {
            throw new Error(`Unsupported definition kind token: ${ctx._kind}`);
        }
    }

    abstract readonly name: string;

    abstract get ruleRepresentation(): RuleRepresentation;

    abstract get nodeRepresentation(): NodeRepresentation;
}

abstract class NodeRepresentation {
    protected abstract get definitionTerm(): DefinitionTerm;

    private get typeName() {
        const name = this.definitionTerm.name;

        const firstLetter = name[0];
        const nameTail = name.substring(1);

        return firstLetter.toUpperCase() + nameTail;
    }

    generateTypeReference(): typescript_ast.TypeReferenceTerm {
        return new typescript_ast.TypeReferenceTerm({
            referredName: this.typeName,
        });
    }

    generateInterfaceDeclaration() {
        return new typescript_ast.InterfaceDeclarationTerm({
            modifier: "export",
            name: this.typeName,
            properties: [
                new typescript_ast.PropertySignatureTerm({
                    name: "type",
                    type: new typescript_ast.StringLiteralTerm({
                        value: this.definitionTerm.name,
                    }),
                }),
            ],
        });
    }
}

abstract class RuleRepresentation {
    private static charStreamName = "charStream";
    private static charStreamTypeName = "CharStream";

    static parseStringCall = new typescript_ast.CallExpressionTerm({
        callee: new typescript_ast.ReferenceExpressionTerm({
            referredName: "parseString",
        }),
        arguments: [
            new typescript_ast.ReferenceExpressionTerm({
                referredName: RuleRepresentation.charStreamName,
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
                        name: RuleRepresentation.charStreamName,
                        type: new TypeReferenceTerm({
                            referredName:
                            RuleRepresentation.charStreamTypeName,
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

class TokenRuleRepresentation extends RuleRepresentation {
    readonly _tokenDefinition: TokenDefinitionTerm;

    constructor(args: {
        readonly tokenDefinition: TokenDefinitionTerm
    }) {
        super();
        this._tokenDefinition = args.tokenDefinition;
    }

    get kind(): string {
        return "Symbol";
    }

    get name(): string {
        return this._tokenDefinition.name;
    }

    generateParseFunctionBody(): BlockTerm {
        return new BlockTerm({
            innerStatements: [
                new ConstDefinitionTerm({
                    name: "symbol",
                    body: TokenRuleRepresentation.parseStringCall,
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

abstract class ElementRuleRepresentation extends RuleRepresentation {
    abstract get elementDefinition(): ElementDefinitionTerm;

    override get kind(): string {
        return "Rule";
    }

    override get name(): string {
        return this.elementDefinition.name;
    }

    override generateParseFunctionBody(): BlockTerm {
        return new BlockTerm({
            innerStatements: [
                new ConstDefinitionTerm({
                    name: "symbol",
                    body: TokenRuleRepresentation.parseStringCall,
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

export class TokenDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: TokenDefinitionTerm,
        b: TokenDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof TokenDefinitionTerm)) return undefined;
        if (!(b instanceof TokenDefinitionTerm)) return undefined;
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

    get ruleRepresentation(): RuleRepresentation {
        return new TokenRuleRepresentation({
            tokenDefinition: this,
        });
    }


    override get nodeRepresentation(): NodeRepresentation {
        const self = this;

        return new class extends NodeRepresentation {
            protected get definitionTerm(): DefinitionTerm {
                return self;
            }
        };
    }
}

export class ElementDefinitionTerm extends DefinitionTerm {
    static override equals(
        a: ElementDefinitionTerm,
        b: ElementDefinitionTerm,
    ): boolean;
    static override equals(a: unknown, b: unknown): boolean | undefined;

    static override equals(a: unknown, b: unknown): boolean | undefined {
        if (!(a instanceof ElementDefinitionTerm)) return undefined;
        if (!(b instanceof ElementDefinitionTerm)) return undefined;
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

    override get nodeRepresentation(): NodeRepresentation {
        throw new Error();
    }

    get ruleRepresentation(): RuleRepresentation {
        throw new Error();
    }
}
