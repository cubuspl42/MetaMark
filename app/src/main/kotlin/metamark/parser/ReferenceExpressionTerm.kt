package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class ReferenceExpressionTerm(
    val identifier: String,
): ExpressionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.ReferenceExpressionContext): ReferenceExpressionTerm {
            return ReferenceExpressionTerm(
                identifier = ctx.Identifier().text
            )
        }
    }
}
