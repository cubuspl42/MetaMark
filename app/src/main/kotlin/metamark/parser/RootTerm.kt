package metamark.parser

import metamark.parser.antlr.MetamarkLexer
import metamark.parser.antlr.MetamarkParser
import metamark.parser.antlr.MetamarkParser.RootContext
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream

data class RootTerm(
    val definitions: List<DefinitionTerm>,
) {
    companion object {
        fun parse(
            source: String,
        ): RootTerm {
            val sourceName = "__root__"

            val lexer = MetamarkLexer(CharStreams.fromString(source, sourceName))
            val tokenStream = CommonTokenStream(lexer)
            val parser = MetamarkParser(tokenStream)

            return RootTerm.build(parser.root())
        }

        fun build(ctx: RootContext): RootTerm = RootTerm(
            definitions = ctx.definition().map {
                DefinitionTerm.build(ctx)
            }
        )
    }
}
