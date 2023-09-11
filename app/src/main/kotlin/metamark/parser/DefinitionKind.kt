package metamark.parser

import metamark.parser.antlr.MetamarkLexer
import org.antlr.v4.runtime.Token

enum class DefinitionKind {
    Symbol, Rule;

    companion object {
        fun build(token: Token): DefinitionKind = when (token.type) {
            MetamarkLexer.SymbolKeyword -> DefinitionKind.Symbol
            MetamarkLexer.RuleKeyword -> DefinitionKind.Rule
            else -> throw IllegalArgumentException(token.toString())
        }
    }
}
