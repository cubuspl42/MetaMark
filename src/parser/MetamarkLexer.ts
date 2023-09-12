// Generated from ./src/parser/MetamarkLexer.g4 by ANTLR 4.9.0-SNAPSHOT


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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"RuleKeyword", "SymbolKeyword", "Identifier", "Dash", "Colon", "Dollar", 
		"Asterisk", "Plus", "QuestionMark", "PlusEquals", "ParenLeft", "ParenRight", 
		"BraceLeft", "BraceRight", "StringLiteral", "StringLiteralContent", "Whitespace",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MetamarkLexer._LITERAL_NAMES, MetamarkLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MetamarkLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(MetamarkLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "MetamarkLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return MetamarkLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return MetamarkLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return MetamarkLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return MetamarkLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x12_\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x07\x046\n\x04" +
		"\f\x04\x0E\x049\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x07\x11W\n\x11\f\x11\x0E\x11Z\v\x11\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x02\x02\x02\x13\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02" +
		"\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02" +
		"\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x02#\x02\x12\x03\x02\x06" +
		"\x04\x02C\\c|\x05\x022;C\\c|\x05\x02\f\f\x0F\x0F$$\x04\x02\f\f\"\"\x02" +
		"_\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x03%\x03\x02\x02\x02\x05+\x03\x02\x02\x02\x073\x03" +
		"\x02\x02\x02\t:\x03\x02\x02\x02\v<\x03\x02\x02\x02\r>\x03\x02\x02\x02" +
		"\x0F@\x03\x02\x02\x02\x11B\x03\x02\x02\x02\x13D\x03\x02\x02\x02\x15F\x03" +
		"\x02\x02\x02\x17I\x03\x02\x02\x02\x19K\x03\x02\x02\x02\x1BM\x03\x02\x02" +
		"\x02\x1DO\x03\x02\x02\x02\x1FQ\x03\x02\x02\x02!X\x03\x02\x02\x02#[\x03" +
		"\x02\x02\x02%&\x07\'\x02\x02&\'\x07t\x02\x02\'(\x07w\x02\x02()\x07n\x02" +
		"\x02)*\x07g\x02\x02*\x04\x03\x02\x02\x02+,\x07\'\x02\x02,-\x07u\x02\x02" +
		"-.\x07{\x02\x02./\x07o\x02\x02/0\x07d\x02\x0201\x07q\x02\x0212\x07n\x02" +
		"\x022\x06\x03\x02\x02\x0237\t\x02\x02\x0246\t\x03\x02\x0254\x03\x02\x02" +
		"\x0269\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x028\b\x03\x02" +
		"\x02\x0297\x03\x02\x02\x02:;\x07`\x02\x02;\n\x03\x02\x02\x02<=\x07<\x02" +
		"\x02=\f\x03\x02\x02\x02>?\x07&\x02\x02?\x0E\x03\x02\x02\x02@A\x07,\x02" +
		"\x02A\x10\x03\x02\x02\x02BC\x07-\x02\x02C\x12\x03\x02\x02\x02DE\x07A\x02" +
		"\x02E\x14\x03\x02\x02\x02FG\x07-\x02\x02GH\x07?\x02\x02H\x16\x03\x02\x02" +
		"\x02IJ\x07*\x02\x02J\x18\x03\x02\x02\x02KL\x07+\x02\x02L\x1A\x03\x02\x02" +
		"\x02MN\x07}\x02\x02N\x1C\x03\x02\x02\x02OP\x07\x7F\x02\x02P\x1E\x03\x02" +
		"\x02\x02QR\x07$\x02\x02RS\x05!\x11\x02ST\x07$\x02\x02T \x03\x02\x02\x02" +
		"UW\n\x04\x02\x02VU\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"XY\x03\x02\x02\x02Y\"\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\t\x05\x02\x02" +
		"\\]\x03\x02\x02\x02]^\b\x12\x02\x02^$\x03\x02\x02\x02\x05\x027X\x03\b" +
		"\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MetamarkLexer.__ATN) {
			MetamarkLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MetamarkLexer._serializedATN));
		}

		return MetamarkLexer.__ATN;
	}

}

