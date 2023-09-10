parser grammar MetamarkParser;

options { tokenVocab = MetamarkLexer; }

root : definition+ ;

definition : kind=(SymbolKeyword | RuleKeyword) Colon body=expression ;

expression
    : parenExpression
    | matchZeroOrMoreExpression
    | referenceExpression
    | stringLiteral
    ;

parenExpression : ParenLeft expression ParenRight ;

matchZeroOrMoreExpression : expression Asterisk ;

referenceExpression : Identifier ;

stringLiteral : StringLiteral ;
