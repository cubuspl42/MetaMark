lexer grammar MetamarkLexer;

TokenKeyword : '%token' ;
ElementKeyworc : '%element' ;

Identifier : [a-zA-Z] [a-zA-Z0-9]* ;

Dash : '^' ;
Colon : ':' ;
Dollar : '$' ;
Asterisk : '*' ;
Plus : '+' ;
QuestionMark : '?' ;
PlusEquals : '+=' ;

ParenLeft : '(' ;
ParenRight : ')' ;
BraceLeft : '{' ;
BraceRight : '}' ;

StringLiteral : '"' StringLiteralContent '"' ;
fragment StringLiteralContent : (~["\r\n])* ;

Whitespace : (' ' | '\n') -> skip ;
