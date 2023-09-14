#!/usr/bin/env node
import minimist from 'minimist';
import * as fs from "fs";
import {GrammarTerm} from "./GrammarTerm";
import * as path from "path";

const outputFileName = 'MarkParser.ts';

function main() {
    const args = minimist(process.argv.slice(2));
    const outputPath = args['o'];
    const grammarPaths = args._;

    if (typeof outputPath !== 'string') {
        console.error('Please provide proper output path');
    }

    if (grammarPaths.length !== 1) {
        console.error('Please provide proper grammar path');
    }

    const grammarPath = grammarPaths[0]

    const grammarBaseName = path.parse(grammarPath).name;
    const grammarSource = fs.readFileSync(grammarPath, 'utf-8');

    const grammar = GrammarTerm.parse(
        grammarBaseName,
        grammarSource,
    );

    fs.writeFileSync(
        path.join(outputPath, outputFileName),
        grammar.generate(),
        'utf-8',
    );
}

main();
