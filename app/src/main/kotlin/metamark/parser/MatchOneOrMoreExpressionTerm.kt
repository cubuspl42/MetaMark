package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class MatchOneOrMoreExpressionTerm(
    val repeatedExpression: ExpressionTerm,
): ExpressionTerm() {
    companion object {
        fun build(
            ctx: MetamarkParser.Expression_matchOneOrMoreExpressionContext,
        ): MatchOneOrMoreExpressionTerm {
            return MatchOneOrMoreExpressionTerm(
                repeatedExpression = ExpressionTerm.build(ctx.repeatedExpression)
            )
        }
    }
}
