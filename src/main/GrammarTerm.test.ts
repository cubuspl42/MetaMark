import {GrammarTerm} from "./GrammarTerm";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const term =  GrammarTerm.parse(`
%rule Ex : "x"
`
        )

        expect(term).toBeInstanceOf(GrammarTerm);
    });
});
