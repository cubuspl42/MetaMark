import { GrammarTerm } from "./GrammarTerm";
import { describe, test, expect } from "@jest/globals";
import { TokenDefinitionTerm } from "./DefinitionTerm";
import { StringLiteralTerm } from "./StringLiteralTerm";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const term = GrammarTerm.parse(
            "MyLang",
            `
%token Ex : "x"
`,
        );

        expect(term).toEqual(
            new GrammarTerm("MyLang", [
                new TokenDefinitionTerm("Ex", new StringLiteralTerm("x")),
            ]),
        );
    });
});
