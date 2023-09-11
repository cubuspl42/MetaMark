package metamark

import metamark.parser.MatchOneOrMoreExpressionTerm
import metamark.parser.ReferenceExpressionTerm
import metamark.parser.RootTerm
import metamark.parser.RuleDefinitionTerm
import metamark.parser.StringLiteralTerm
import metamark.parser.SymbolDefinitionTerm
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
                    SymbolDefinitionTerm(
                        name = "Ex",
                        pattern = StringLiteralTerm(
                            value = "x",
                        ),
                    ),
                    RuleDefinitionTerm(
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
