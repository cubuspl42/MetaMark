package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class StringLiteralExpressionTerm(
    val stringLiteral: String,
): ExpressionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.StringLiteralContext): StringLiteralExpressionTerm {
            return StringLiteralExpressionTerm(
                stringLiteral = ctx.StringLiteral().text
            )
        }
    }
}
