package metamark.parser

import metamark.parser.antlr.MetamarkParser

data class DefinitionTerm(
    val kind: DefinitionKind,
    val name: String,
    val body: ExpressionTerm,
) {
    companion object {
        fun build(ctx: MetamarkParser.DefinitionContext): DefinitionTerm {
            return DefinitionTerm(
                kind = DefinitionKind.build(ctx.kind),
                name = ctx.name.text,
                body = ExpressionTerm.build(ctx.body),
            )
        }
    }
}
