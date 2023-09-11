package metamark

import metamark.parser.DefinitionKind
import metamark.parser.DefinitionTerm
import metamark.parser.MatchOneOrMoreExpressionTerm
import metamark.parser.ReferenceExpressionTerm
import metamark.parser.RootTerm
import metamark.parser.StringLiteralTerm
import kotlin.test.Test
import kotlin.test.assertEquals

class TermTests {
    @Test
    fun testRoot() {
        val term = RootTerm.parse(
            source = """
                %symbol Ex : "x"
                
                %rule root : Ex+
            """.trimIndent(),
        )

        assertEquals(
            expected = RootTerm(
                definitions = listOf(
                    DefinitionTerm(
                        kind = DefinitionKind.Symbol,
                        name = "Ex",
                        body = StringLiteralTerm(
                            value = "x",
                        ),
                    ),
                    DefinitionTerm(
                        kind = DefinitionKind.Rule,
                        name = "root",
                        body = MatchOneOrMoreExpressionTerm(
                            repeatedExpression = ReferenceExpressionTerm(
                                referredIdentifier = "Ex",
                            ),
                        ),
                    ),
                ),
            ),
            actual = term,
        )
    }
}
