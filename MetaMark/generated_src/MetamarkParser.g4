parser grammar MetamarkParser;

options { tokenVocab = MetamarkLexer; }

grammar_ : definition+ ;

definition : kind=(TokenKeyword | ElementKeyworc) name=Identifier Colon body=expression ;

expression
    : parenExpression # expression_parenExpression
    | repeatedExpression=expression Asterisk # expression_matchZeroOrMoreExpression
    | repeatedExpression=expression Plus # expression_matchOneOrMoreExpression
    | optionalExpression=expression QuestionMark # expression_matchZeroOrOneExpression
    | referenceExpression # expression_referenceExpression
    | expression expression+ # expression_concatExpression
    | stringLiteral # expression_stringLiteral
    ;

parenExpression : ParenLeft innerExpression=expression ParenRight ;

referenceExpression : referredIdentifier=Identifier ;

stringLiteral : StringLiteral ;
