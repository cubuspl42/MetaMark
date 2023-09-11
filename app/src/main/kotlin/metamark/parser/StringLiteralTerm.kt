package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class StringLiteralTerm(
    val value: String,
) : ExpressionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.StringLiteralContext): StringLiteralTerm {
            val rawText = ctx.StringLiteral().text

            return StringLiteralTerm(
                value = rawText.drop(1).dropLast(1),
            )
        }
    }
}
