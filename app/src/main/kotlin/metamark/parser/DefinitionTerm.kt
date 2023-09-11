package metamark.parser

import metamark.parser.antlr.MetamarkLexer
import metamark.parser.antlr.MetamarkParser
import metamark.parser.antlr.MetamarkParser.Expression_stringLiteralContext

sealed class DefinitionTerm {
    companion object {
        fun build(ctx: MetamarkParser.DefinitionContext): DefinitionTerm {
            val kindToken = ctx.kind

            return when (kindToken.type) {
                MetamarkLexer.SymbolKeyword -> SymbolDefinitionTerm.build(ctx)
                MetamarkLexer.RuleKeyword -> RuleDefinitionTerm.build(ctx)
                else -> throw IllegalArgumentException(kindToken.toString())
            }
        }
    }

    abstract val name: String
}

data class SymbolDefinitionTerm(
    override val name: String,
    val pattern: StringLiteralTerm,
) : DefinitionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.DefinitionContext): DefinitionTerm {
            val body = ctx.body

            return if (body is Expression_stringLiteralContext) {
                SymbolDefinitionTerm(
                    name = ctx.name.text, pattern = StringLiteralTerm.build(body.stringLiteral())
                )
            } else {
                throw IllegalArgumentException(body::class.java.toString())
            }
        }
    }
}

data class RuleDefinitionTerm(
    override val name: String,
    val body: ExpressionTerm,
) : DefinitionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.DefinitionContext): DefinitionTerm {
            return RuleDefinitionTerm(
                name = ctx.name.text,
                body = ExpressionTerm.build(ctx.body),
            )
        }
    }
}
