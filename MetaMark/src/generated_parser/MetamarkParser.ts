// Generated from ./src/generated_parser/MetamarkParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MetamarkParserVisitor } from "./MetamarkParserVisitor";


export class MetamarkParser extends Parser {
	public static readonly RuleKeyword = 1;
	public static readonly SymbolKeyword = 2;
	public static readonly Identifier = 3;
	public static readonly Dash = 4;
	public static readonly Colon = 5;
	public static readonly Dollar = 6;
	public static readonly Asterisk = 7;
	public static readonly Plus = 8;
	public static readonly QuestionMark = 9;
	public static readonly PlusEquals = 10;
	public static readonly ParenLeft = 11;
	public static readonly ParenRight = 12;
	public static readonly BraceLeft = 13;
	public static readonly BraceRight = 14;
	public static readonly StringLiteral = 15;
	public static readonly Whitespace = 16;
	public static readonly RULE_grammar_ = 0;
	public static readonly RULE_definition = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_parenExpression = 3;
	public static readonly RULE_referenceExpression = 4;
	public static readonly RULE_stringLiteral = 5;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"grammar_", "definition", "expression", "parenExpression", "referenceExpression", 
		"stringLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'%rule'", "'%symbol'", undefined, "'^'", "':'", "'$'", "'*'", 
		"'+'", "'?'", "'+='", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "RuleKeyword", "SymbolKeyword", "Identifier", "Dash", "Colon", 
		"Dollar", "Asterisk", "Plus", "QuestionMark", "PlusEquals", "ParenLeft", 
		"ParenRight", "BraceLeft", "BraceRight", "StringLiteral", "Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MetamarkParser._LITERAL_NAMES, MetamarkParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MetamarkParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public override get grammarFileName(): string { return "MetamarkParser.g4"; }

	// @Override
	public override get ruleNames(): string[] { return MetamarkParser.ruleNames; }

	// @Override
	public override get serializedATN(): string { return MetamarkParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MetamarkParser._ATN, this);
	}
	// @RuleVersion(0)
	public grammar_(): Grammar_Context {
		let _localctx: Grammar_Context = new Grammar_Context(this._ctx, this.state);
		this.enterRule(_localctx, 0, MetamarkParser.RULE_grammar_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 12;
				this.definition();
				}
				}
				this.state = 15;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === MetamarkParser.RuleKeyword || _la === MetamarkParser.SymbolKeyword);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MetamarkParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			_localctx._kind = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === MetamarkParser.RuleKeyword || _la === MetamarkParser.SymbolKeyword)) {
				_localctx._kind = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 18;
			_localctx._name = this.match(MetamarkParser.Identifier);
			this.state = 19;
			this.match(MetamarkParser.Colon);
			this.state = 20;
			_localctx._body = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, MetamarkParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MetamarkParser.ParenLeft:
				{
				_localctx = new Expression_parenExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 23;
				this.parenExpression();
				}
				break;
			case MetamarkParser.Identifier:
				{
				_localctx = new Expression_referenceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 24;
				this.referenceExpression();
				}
				break;
			case MetamarkParser.StringLiteral:
				{
				_localctx = new Expression_stringLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 25;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 36;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 34;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
					case 1:
						{
						_localctx = new Expression_matchZeroOrMoreExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as Expression_matchZeroOrMoreExpressionContext)._repeatedExpression = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MetamarkParser.RULE_expression);
						this.state = 28;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 29;
						this.match(MetamarkParser.Asterisk);
						}
						break;
					case 2:
						{
						_localctx = new Expression_matchOneOrMoreExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as Expression_matchOneOrMoreExpressionContext)._repeatedExpression = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MetamarkParser.RULE_expression);
						this.state = 30;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 31;
						this.match(MetamarkParser.Plus);
						}
						break;
					case 3:
						{
						_localctx = new Expression_matchZeroOrOneExpressionContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as Expression_matchZeroOrOneExpressionContext)._optionalExpression = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, MetamarkParser.RULE_expression);
						this.state = 32;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 33;
						this.match(MetamarkParser.QuestionMark);
						}
						break;
					}
					}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parenExpression(): ParenExpressionContext {
		let _localctx: ParenExpressionContext = new ParenExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MetamarkParser.RULE_parenExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 39;
			this.match(MetamarkParser.ParenLeft);
			this.state = 40;
			_localctx._innerExpression = this.expression(0);
			this.state = 41;
			this.match(MetamarkParser.ParenRight);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public referenceExpression(): ReferenceExpressionContext {
		let _localctx: ReferenceExpressionContext = new ReferenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MetamarkParser.RULE_referenceExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			_localctx._referredIdentifier = this.match(MetamarkParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MetamarkParser.RULE_stringLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(MetamarkParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x122\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x03\x02\x06\x02\x10\n\x02\r\x02\x0E\x02\x11\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\x1D\n\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04%\n\x04\f\x04" +
		"\x0E\x04(\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\x07\x02\x02\x03\x06\b\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x02\x03\x03\x02\x03\x04\x021\x02\x0F\x03\x02\x02\x02\x04\x13\x03" +
		"\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b)\x03\x02\x02\x02\n-\x03\x02\x02" +
		"\x02\f/\x03\x02\x02\x02\x0E\x10\x05\x04\x03\x02\x0F\x0E\x03\x02\x02\x02" +
		"\x10\x11\x03\x02\x02\x02\x11\x0F\x03\x02\x02\x02\x11\x12\x03\x02\x02\x02" +
		"\x12\x03\x03\x02\x02\x02\x13\x14\t\x02\x02\x02\x14\x15\x07\x05\x02\x02" +
		"\x15\x16\x07\x07\x02\x02\x16\x17\x05\x06\x04\x02\x17\x05\x03\x02\x02\x02" +
		"\x18\x19\b\x04\x01\x02\x19\x1D\x05\b\x05\x02\x1A\x1D\x05\n\x06\x02\x1B" +
		"\x1D\x05\f\x07\x02\x1C\x18\x03\x02\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C" +
		"\x1B\x03\x02\x02\x02\x1D&\x03\x02\x02\x02\x1E\x1F\f\x07\x02\x02\x1F%\x07" +
		"\t\x02\x02 !\f\x06\x02\x02!%\x07\n\x02\x02\"#\f\x05\x02\x02#%\x07\v\x02" +
		"\x02$\x1E\x03\x02\x02\x02$ \x03\x02\x02\x02$\"\x03\x02\x02\x02%(\x03\x02" +
		"\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'\x07\x03\x02\x02\x02(&" +
		"\x03\x02\x02\x02)*\x07\r\x02\x02*+\x05\x06\x04\x02+,\x07\x0E\x02\x02," +
		"\t\x03\x02\x02\x02-.\x07\x05\x02\x02.\v\x03\x02\x02\x02/0\x07\x11\x02" +
		"\x020\r\x03\x02\x02\x02\x06\x11\x1C$&";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MetamarkParser.__ATN) {
			MetamarkParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MetamarkParser._serializedATN));
		}

		return MetamarkParser.__ATN;
	}

}

export class Grammar_Context extends ParserRuleContext {
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_grammar_; }
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitGrammar_) {
			return visitor.visitGrammar_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	public _kind!: Token;
	public _name!: Token;
	public _body!: ExpressionContext;
	public Colon(): TerminalNode { return this.getToken(MetamarkParser.Colon, 0); }
	public Identifier(): TerminalNode { return this.getToken(MetamarkParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SymbolKeyword(): TerminalNode | undefined { return this.tryGetToken(MetamarkParser.SymbolKeyword, 0); }
	public RuleKeyword(): TerminalNode | undefined { return this.tryGetToken(MetamarkParser.RuleKeyword, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_definition; }
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class Expression_parenExpressionContext extends ExpressionContext {
	public parenExpression(): ParenExpressionContext {
		return this.getRuleContext(0, ParenExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_parenExpression) {
			return visitor.visitExpression_parenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_matchZeroOrMoreExpressionContext extends ExpressionContext {
	public _repeatedExpression!: ExpressionContext;
	public Asterisk(): TerminalNode { return this.getToken(MetamarkParser.Asterisk, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_matchZeroOrMoreExpression) {
			return visitor.visitExpression_matchZeroOrMoreExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_matchOneOrMoreExpressionContext extends ExpressionContext {
	public _repeatedExpression!: ExpressionContext;
	public Plus(): TerminalNode { return this.getToken(MetamarkParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_matchOneOrMoreExpression) {
			return visitor.visitExpression_matchOneOrMoreExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_matchZeroOrOneExpressionContext extends ExpressionContext {
	public _optionalExpression!: ExpressionContext;
	public QuestionMark(): TerminalNode { return this.getToken(MetamarkParser.QuestionMark, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_matchZeroOrOneExpression) {
			return visitor.visitExpression_matchZeroOrOneExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_referenceExpressionContext extends ExpressionContext {
	public referenceExpression(): ReferenceExpressionContext {
		return this.getRuleContext(0, ReferenceExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_referenceExpression) {
			return visitor.visitExpression_referenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_stringLiteralContext extends ExpressionContext {
	public stringLiteral(): StringLiteralContext {
		return this.getRuleContext(0, StringLiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitExpression_stringLiteral) {
			return visitor.visitExpression_stringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParenExpressionContext extends ParserRuleContext {
	public _innerExpression!: ExpressionContext;
	public ParenLeft(): TerminalNode { return this.getToken(MetamarkParser.ParenLeft, 0); }
	public ParenRight(): TerminalNode { return this.getToken(MetamarkParser.ParenRight, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_parenExpression; }
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitParenExpression) {
			return visitor.visitParenExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReferenceExpressionContext extends ParserRuleContext {
	public _referredIdentifier!: Token;
	public Identifier(): TerminalNode { return this.getToken(MetamarkParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_referenceExpression; }
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitReferenceExpression) {
			return visitor.visitReferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public StringLiteral(): TerminalNode { return this.getToken(MetamarkParser.StringLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public override get ruleIndex(): number { return MetamarkParser.RULE_stringLiteral; }
	// @Override
	public accept<Result>(visitor: MetamarkParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


