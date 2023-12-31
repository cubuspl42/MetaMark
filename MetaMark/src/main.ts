#!/usr/bin/env node
import minimist from "minimist";
import * as fs from "fs";
import { GrammarTerm } from "./metamark_ast/GrammarTerm";
import * as path from "path";
import runtimeSourceString from "../runtime/runtime.ts.txt";

const outputFileName = "MarkParser.ts";

function main() {
    const args = minimist(process.argv.slice(2));
    const outputPath = args["o"];
    const grammarPaths = args._;

    if (typeof outputPath !== "string") {
        console.error("Please provide proper output path");
    }

    if (grammarPaths.length !== 1) {
        console.error("Please provide proper grammar path");
    }

    const grammarPath = grammarPaths[0];

    const grammarBaseName = path.parse(grammarPath).name;
    const grammarSource = fs.readFileSync(grammarPath, "utf-8");

    const grammar = GrammarTerm.parse(grammarBaseName, grammarSource);

    const module = grammar.generateModule();

    const moduleString = module.toPrettyString();

    fs.writeFileSync(
        path.join(outputPath, outputFileName),
        moduleString,
        "utf-8",
    );

    fs.writeFileSync(
        path.join(outputPath, "runtime.ts"),
        runtimeSourceString,
        "utf-8",
    );
}

main();
