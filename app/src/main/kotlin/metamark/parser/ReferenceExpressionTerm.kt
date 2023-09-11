package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class ReferenceExpressionTerm(
    val referredIdentifier: String,
): ExpressionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.ReferenceExpressionContext): ReferenceExpressionTerm {
            return ReferenceExpressionTerm(
                referredIdentifier = ctx.referredIdentifier.text
            )
        }
    }
}
