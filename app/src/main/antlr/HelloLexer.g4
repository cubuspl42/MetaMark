lexer grammar HelloLexer;

Hello : 'Hello' ;
Identifier : [a-zA-Z] [a-zA-Z0-9]* ;

Whitespace : (' ' | '\n') -> skip ;
