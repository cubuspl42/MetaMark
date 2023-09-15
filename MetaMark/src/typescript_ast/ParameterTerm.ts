export class ParameterTerm {
    readonly name: string;
    readonly type: string; // For simplicity, we use string to represent type here
    constructor(args: { name: string; type: string }) {
        this.name = args.name;
        this.type = args.type;
    }
}
