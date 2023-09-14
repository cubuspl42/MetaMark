import {GrammarTerm} from "./GrammarTerm";
import {describe, test, expect} from "@jest/globals";
import {SymbolDefinitionTerm} from "./DefinitionTerm";
import {StringLiteralTerm} from "./StringLiteralTerm";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const term =  GrammarTerm.parse(`
%symbol Ex : "x"
`
        );

        expect(term).toEqual(
            new GrammarTerm([
                new SymbolDefinitionTerm(
                    "Ex",
                    new StringLiteralTerm("x"),
                ),
            ]),
        );
    });
});
