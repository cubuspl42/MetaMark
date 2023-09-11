package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class MatchZeroOrMoreExpressionTerm(
    val expression: ExpressionTerm,
): ExpressionTerm() {
    companion object {
        fun build(
            ctx: MetamarkParser.Expression_matchZeroOrMoreExpressionContext,
        ): MatchZeroOrMoreExpressionTerm {
            return MatchZeroOrMoreExpressionTerm(
                expression = ExpressionTerm.build(ctx.repeatedExpression)
            )
        }
    }
}
