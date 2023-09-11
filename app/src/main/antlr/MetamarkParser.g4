parser grammar MetamarkParser;

options { tokenVocab = MetamarkLexer; }

root : definition+ ;

definition : kind=(SymbolKeyword | RuleKeyword) name=Identifier Colon body=expression ;

expression
    : parenExpression # expression_parenExpression
    | repeatedExpression=expression Asterisk # expression_matchZeroOrMoreExpression
    | repeatedExpression=expression Plus # expression_matchOneOrMoreExpression // TODO
    | optionalExpression=expression QuestionMark # expression_matchZeroOrOneExpression // TODO
    | referenceExpression # expression_referenceExpression
    | stringLiteral # expression_stringLiteral
    ;

parenExpression : ParenLeft wrappedExpression=expression ParenRight ;

referenceExpression : referredIdentifier=Identifier ;

stringLiteral : StringLiteral ;
