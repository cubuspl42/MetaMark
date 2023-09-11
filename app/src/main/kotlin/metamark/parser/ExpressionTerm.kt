package metamark.parser

import metamark.parser.antlr.MetamarkParser.ExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_matchZeroOrMoreExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_matchOneOrMoreExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_matchZeroOrOneExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_parenExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_referenceExpressionContext
import metamark.parser.antlr.MetamarkParser.Expression_stringLiteralContext
import metamark.parser.antlr.MetamarkParserBaseVisitor

sealed class ExpressionTerm {
    companion object {
        fun build(
            ctx: ExpressionContext,
        ): ExpressionTerm = object : MetamarkParserBaseVisitor<ExpressionTerm>() {
            override fun visitExpression_parenExpression(
                ctx: Expression_parenExpressionContext,
            ): ExpressionTerm {
                return ParenExpressionTerm.build(ctx.parenExpression())
            }

            override fun visitExpression_referenceExpression(
                ctx: Expression_referenceExpressionContext,
            ): ExpressionTerm {
                return ReferenceExpressionTerm.build(ctx.referenceExpression())
            }

            override fun visitExpression_matchZeroOrMoreExpression(
                ctx: Expression_matchZeroOrMoreExpressionContext,
            ): ExpressionTerm {
                return MatchZeroOrMoreExpressionTerm.build(ctx)
            }

            override fun visitExpression_matchOneOrMoreExpression(
                ctx: Expression_matchOneOrMoreExpressionContext,
            ): ExpressionTerm {
                return MatchOneOrMoreExpressionTerm.build(ctx)
            }

            override fun visitExpression_matchZeroOrOneExpression(
                ctx: Expression_matchZeroOrOneExpressionContext,
            ): ExpressionTerm {
                return MatchZeroOrOneExpressionTerm.build(ctx)
            }
        }.visit(ctx)
    }
}
