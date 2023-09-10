lexer grammar MetamarkLexer;

RuleKeyword : '%rule' ;
SymbolKeyword : '%symbol' ;

Identifier : [a-zA-Z] [a-zA-Z0-9]* ;

Dash : '^' ;
Colon : ':' ;
Dollar : '$' ;
Asterisk : '*' ;
PlusEquals : '+=' ;

ParenLeft : '(' ;
ParenRight : ')' ;
BraceLeft : '{' ;
BraceRight : '}' ;

StringLiteral : '"' StringLiteralContent '"' ;
fragment StringLiteralContent : (~["\r\n])* ;

Whitespace : (' ' | '\n') -> skip ;
