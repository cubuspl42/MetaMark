parser grammar HelloParser;

options { tokenVocab = HelloLexer; }

root : Hello target=Identifier ;
