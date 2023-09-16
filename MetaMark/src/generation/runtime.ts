import { PropertyAccessExpressionTerm } from "../typescript_ast/PropertyAccessExpressionTerm";
import { ExpressionTerm, ReferenceExpressionTerm, TypeExpressionTerm } from "../typescript_ast";

export const runtimeAliasName = "runtime";
export const charStreamTypeName = "CharStream";
export const parseStringName = "parseString";

export function generateRuntimeReference(elementName: string): PropertyAccessExpressionTerm {
    return new PropertyAccessExpressionTerm({
        subject: new ReferenceExpressionTerm({
            referredName: runtimeAliasName,
        }),
        propertyName: elementName,
    });
}

export const charStreamTypeReference: TypeExpressionTerm =
    generateRuntimeReference(charStreamTypeName);

export const parseStringReference: ExpressionTerm =
    generateRuntimeReference(parseStringName);
