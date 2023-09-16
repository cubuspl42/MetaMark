import { GrammarTerm } from "./GrammarTerm";
import { describe, test, expect } from "@jest/globals";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { TokenDefinitionTerm } from "./TokenDefinitionTerm";

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
