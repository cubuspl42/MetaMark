package metamark.parser

import metamark.parser.antlr.HelloLexer
import metamark.parser.antlr.HelloParser
import metamark.parser.antlr.HelloParser.RootContext
import org.antlr.v4.runtime.CharStreams
import org.antlr.v4.runtime.CommonTokenStream

data class RootTerm(
    val target: String
) {
    companion object {
        fun parse(
            source: String,
        ): RootTerm {
            val sourceName = "__root__"

            val lexer = HelloLexer(CharStreams.fromString(source, sourceName))
            val tokenStream = CommonTokenStream(lexer)
            val parser = HelloParser(tokenStream)

            return build(parser.root())
        }

        fun build(ctx: RootContext): RootTerm {
            return RootTerm(
                target = ctx.target.text,
            )
        }
    }
}
