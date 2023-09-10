package metamark.parser

import metamark.parser.antlr.MetamarkParser
import metamark.parser.antlr.MetamarkParser.ExpressionContext
import metamark.parser.antlr.MetamarkParserBaseVisitor

sealed class ExpressionTerm {
    companion object {
        fun build(ctx: ExpressionContext): ExpressionTerm {
            return object : MetamarkParserBaseVisitor<ExpressionTerm>() {
                override fun visitMatchZeroOrMoreExpression(ctx: MetamarkParser.MatchZeroOrMoreExpressionContext?): ExpressionTerm {
                    TODO()
                }

                override fun visitParenExpression(ctx: MetamarkParser.ParenExpressionContext?): ExpressionTerm {
                    TODO()
                }

                override fun visitReference(ctx: MetamarkParser.ReferenceContext?): ExpressionTerm {
                    TODO()
                }

                override fun visitStringLiteral(ctx: MetamarkParser.StringLiteralContext?): ExpressionTerm {
                    TODO()
                }
            }.visit(ctx)
        }
    }
}
