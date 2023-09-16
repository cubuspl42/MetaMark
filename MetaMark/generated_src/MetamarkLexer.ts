// Generated from ./generated_src/MetamarkLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class MetamarkLexer extends Lexer {
	public static readonly TokenKeyword = 1;
	public static readonly ElementKeyworc = 2;
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"TokenKeyword", "ElementKeyworc", "Identifier", "Dash", "Colon", "Dollar", 
		"Asterisk", "Plus", "QuestionMark", "PlusEquals", "ParenLeft", "ParenRight", 
		"BraceLeft", "BraceRight", "StringLiteral", "StringLiteralContent", "Whitespace",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'%token'", "'%element'", undefined, "'^'", "':'", "'$'", "'*'", 
		"'+'", "'?'", "'+='", "'('", "')'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "TokenKeyword", "ElementKeyworc", "Identifier", "Dash", "Colon", 
		"Dollar", "Asterisk", "Plus", "QuestionMark", "PlusEquals", "ParenLeft", 
		"ParenRight", "BraceLeft", "BraceRight", "StringLiteral", "Whitespace",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MetamarkLexer._LITERAL_NAMES, MetamarkLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public override get vocabulary(): Vocabulary {
		return MetamarkLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MetamarkLexer._ATN, this);
	}

	// @Override
	public override get grammarFileName(): string { return "MetamarkLexer.g4"; }

	// @Override
	public override get ruleNames(): string[] { return MetamarkLexer.ruleNames; }

	// @Override
	public override get serializedATN(): string { return MetamarkLexer._serializedATN; }

	// @Override
	public override get channelNames(): string[] { return MetamarkLexer.channelNames; }

	// @Override
	public override get modeNames(): string[] { return MetamarkLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12a\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x11\x07\x11Y\n\x11\f\x11\x0E\x11\\\v\x11\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x02\x02\x02\x13\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x02#\x02\x12" +
		"\x03\x02\x06\x04\x02C\\c|\x05\x022;C\\c|\x05\x02\f\f\x0F\x0F$$\x04\x02" +
		"\f\f\"\"\x02a\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05,\x03\x02\x02" +
		"\x02\x075\x03\x02\x02\x02\t<\x03\x02\x02\x02\v>\x03\x02\x02\x02\r@\x03" +
		"\x02\x02\x02\x0FB\x03\x02\x02\x02\x11D\x03\x02\x02\x02\x13F\x03\x02\x02" +
		"\x02\x15H\x03\x02\x02\x02\x17K\x03\x02\x02\x02\x19M\x03\x02\x02\x02\x1B" +
		"O\x03\x02\x02\x02\x1DQ\x03\x02\x02\x02\x1FS\x03\x02\x02\x02!Z\x03\x02" +
		"\x02\x02#]\x03\x02\x02\x02%&\x07\'\x02\x02&\'\x07v\x02\x02\'(\x07q\x02" +
		"\x02()\x07m\x02\x02)*\x07g\x02\x02*+\x07p\x02\x02+\x04\x03\x02\x02\x02" +
		",-\x07\'\x02\x02-.\x07g\x02\x02./\x07n\x02\x02/0\x07g\x02\x0201\x07o\x02" +
		"\x0212\x07g\x02\x0223\x07p\x02\x0234\x07v\x02\x024\x06\x03\x02\x02\x02" +
		"59\t\x02\x02\x0268\t\x03\x02\x0276\x03\x02\x02\x028;\x03\x02\x02\x029" +
		"7\x03\x02\x02\x029:\x03\x02\x02\x02:\b\x03\x02\x02\x02;9\x03\x02\x02\x02" +
		"<=\x07`\x02\x02=\n\x03\x02\x02\x02>?\x07<\x02\x02?\f\x03\x02\x02\x02@" +
		"A\x07&\x02\x02A\x0E\x03\x02\x02\x02BC\x07,\x02\x02C\x10\x03\x02\x02\x02" +
		"DE\x07-\x02\x02E\x12\x03\x02\x02\x02FG\x07A\x02\x02G\x14\x03\x02\x02\x02" +
		"HI\x07-\x02\x02IJ\x07?\x02\x02J\x16\x03\x02\x02\x02KL\x07*\x02\x02L\x18" +
		"\x03\x02\x02\x02MN\x07+\x02\x02N\x1A\x03\x02\x02\x02OP\x07}\x02\x02P\x1C" +
		"\x03\x02\x02\x02QR\x07\x7F\x02\x02R\x1E\x03\x02\x02\x02ST\x07$\x02\x02" +
		"TU\x05!\x11\x02UV\x07$\x02\x02V \x03\x02\x02\x02WY\n\x04\x02\x02XW\x03" +
		"\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02[\"" +
		"\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^\t\x05\x02\x02^_\x03\x02\x02\x02" +
		"_`\b\x12\x02\x02`$\x03\x02\x02\x02\x05\x029Z\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MetamarkLexer.__ATN) {
			MetamarkLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MetamarkLexer._serializedATN));
		}

		return MetamarkLexer.__ATN;
	}

}

