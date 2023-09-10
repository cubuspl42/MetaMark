package metamark.parser

import metamark.parser.antlr.MetamarkParser
import org.antlr.v4.runtime.Token

enum class DefinitionKind {
    Symbol, Rule;

    companion object {
        fun build(token: Token): DefinitionKind = when (token.text) {
            "%symbol" -> DefinitionKind.Symbol
            "%rule" -> DefinitionKind.Rule
        }
    }
}

data class DefinitionTerm(
    val kind: DefinitionKind,
    val body: ExpressionTerm,
) {
    companion object {
        fun build(ctx: MetamarkParser.DefinitionContext): DefinitionTerm {
            return DefinitionTerm(
                body = ExpressionTerm.build(ctx.body),
            )
        }
    }
}
