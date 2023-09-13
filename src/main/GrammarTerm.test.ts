import {GrammarTerm} from "./GrammarTerm";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const term =  GrammarTerm.parse(`
%symbol Ex : "x"
`
        )

        expect(term).toBeInstanceOf(GrammarTerm);
    });
});
