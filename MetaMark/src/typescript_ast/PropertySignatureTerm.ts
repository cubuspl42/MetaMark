import {TypeExpressionTerm} from "./TypeExpressionTerm";

export class PropertySignatureTerm {
    readonly name: string;
    readonly type: TypeExpressionTerm;

    constructor(args: {
        name: string,
        type: TypeExpressionTerm,
    }) {
        this.name = args.name;
        this.type = args.type;
    }
}
