package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class MatchZeroOrOneExpressionTerm(
    val optionalExpression: ExpressionTerm,
): ExpressionTerm() {
    companion object {
        fun build(
            ctx: MetamarkParser.Expression_matchZeroOrOneExpressionContext,
        ): MatchZeroOrOneExpressionTerm {
            return MatchZeroOrOneExpressionTerm(
                optionalExpression = ExpressionTerm.build(ctx.optionalExpression)
            )
        }
    }
}
