import { ExpressionTerm, IExpressionTerm } from "./ExpressionTerm";
import { ITypeExpressionTerm, TypeExpressionTerm } from "./TypeExpressionTerm";

export class PropertyAccessExpressionTerm
    implements IExpressionTerm, ITypeExpressionTerm
{
    readonly subject: ExpressionTerm | TypeExpressionTerm;
    readonly readPropertyName: string;

    constructor(args: {
        readonly subject: ExpressionTerm | TypeExpressionTerm;
        readonly propertyName: string;
    }) {
        this.subject = args.subject;
        this.readPropertyName = args.propertyName;
    }

    toPrettyString(): string {
        return `${this.subject.toPrettyString()}.${this.readPropertyName}`;
    }
}
