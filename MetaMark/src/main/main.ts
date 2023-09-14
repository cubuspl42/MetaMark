import minimist from 'minimist';
import * as fs from "fs";
import {GrammarTerm} from "./GrammarTerm";
import * as path from "path";

const outputFileName = 'MarkParser.js';

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

    const grammarSource = fs.readFileSync(grammarPath, 'utf-8');

    const grammar = GrammarTerm.parse(grammarSource);

    const generatedSource = `
const MarkParser {
    parse(source: string): string {
        return "foo";
    }
}
`;

    fs.writeFileSync(
        path.join(outputPath, outputFileName),
        generatedSource,
        'utf-8',
    );
}

main();
