import { GrammarTerm } from "./GrammarTerm";
import { describe, test, expect } from "@jest/globals";
import { StringLiteralTerm } from "./StringLiteralTerm";
import { MarkDefinitionTerm } from "./MarkDefinitionTerm";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const term = GrammarTerm.parse(
            "MyLang",
            `
%mark Ex : "x"
`,
        );

        expect(term).toEqual(
            new GrammarTerm("MyLang", [
                new MarkDefinitionTerm("Ex", new StringLiteralTerm("x")),
            ]),
        );
    });

    test("It generates a TypeScript module", () => {
        const term = GrammarTerm.parse(
            "MyLang",
            `
%mark Asterisk : "*"

%element Emphasis : Asterisk+
`,
        );

        const module = term.generateModule();

        const moduleString = module.toPrettyString();
    });
});
