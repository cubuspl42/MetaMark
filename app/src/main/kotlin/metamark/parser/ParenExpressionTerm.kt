package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class ParenExpressionTerm(
    val expression: ExpressionTerm,
): ExpressionTerm() {
    companion object {
        fun build(ctx: MetamarkParser.ParenExpressionContext): ParenExpressionTerm {
            return ParenExpressionTerm(
                expression = ExpressionTerm.build(ctx.wrappedExpression)
            )
        }
    }
}
