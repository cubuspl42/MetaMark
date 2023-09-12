// Generated from ./src/parser/MetamarkParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Expression_parenExpressionContext } from "./MetamarkParser";
import { Expression_matchZeroOrMoreExpressionContext } from "./MetamarkParser";
import { Expression_matchOneOrMoreExpressionContext } from "./MetamarkParser";
import { Expression_matchZeroOrOneExpressionContext } from "./MetamarkParser";
import { Expression_referenceExpressionContext } from "./MetamarkParser";
import { Expression_stringLiteralContext } from "./MetamarkParser";
import { Grammar_Context } from "./MetamarkParser";
import { DefinitionContext } from "./MetamarkParser";
import { ExpressionContext } from "./MetamarkParser";
import { ParenExpressionContext } from "./MetamarkParser";
import { ReferenceExpressionContext } from "./MetamarkParser";
import { StringLiteralContext } from "./MetamarkParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MetamarkParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MetamarkParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expression_parenExpression`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_parenExpression?: (ctx: Expression_parenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expression_matchZeroOrMoreExpression`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_matchZeroOrMoreExpression?: (ctx: Expression_matchZeroOrMoreExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expression_matchOneOrMoreExpression`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_matchOneOrMoreExpression?: (ctx: Expression_matchOneOrMoreExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expression_matchZeroOrOneExpression`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_matchZeroOrOneExpression?: (ctx: Expression_matchZeroOrOneExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expression_referenceExpression`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_referenceExpression?: (ctx: Expression_referenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expression_stringLiteral`
	 * labeled alternative in `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_stringLiteral?: (ctx: Expression_stringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.grammar_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrammar_?: (ctx: Grammar_Context) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.parenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpression?: (ctx: ParenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.referenceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceExpression?: (ctx: ReferenceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `MetamarkParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;
}

