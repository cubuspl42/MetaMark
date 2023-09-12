package metamark.parser

import metamark.parser.antlr.MetamarkLexer
import metamark.parser.antlr.MetamarkParser
import metamark.parser.antlr.MetamarkParser.Grammar_Context
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream

data class GrammarTerm(
    val definitions: List<DefinitionTerm>,
) {
    companion object {
        fun parse(
            source: String,
        ): GrammarTerm {
            val sourceName = "__grammar__"

            val lexer = MetamarkLexer(CharStreams.fromString(source, sourceName))
            val tokenStream = CommonTokenStream(lexer)
            val parser = MetamarkParser(tokenStream)

            return GrammarTerm.build(parser.grammar_())
        }

        private fun build(ctx: Grammar_Context): GrammarTerm = GrammarTerm(
            definitions = ctx.definition().map {
                DefinitionTerm.build(it)
            },
        )
    }
}
