import { describe, expect, test } from "@jest/globals";
import { emphasisParser } from "../generated_src/MarkParser";
import { StringCharStream } from "../generated_src/runtime";

describe("GrammarTerm", () => {
    test("It parses", () => {
        const charStream = new StringCharStream("*foo*");
        const result = emphasisParser.parse(charStream);

        expect(result).not.toBeNull();

        const content = result!.buildNode().content;

        expect(content).toEqual("foo*");
    });
});
