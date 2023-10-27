// Generated from java-escape by ANTLR 4.7.1
package antlrtest

import com.strumenta.kotlinmultiplatform.asCharArray
import org.antlr.v4.kotlinruntime.CharStream
import org.antlr.v4.kotlinruntime.Lexer
import org.antlr.v4.kotlinruntime.ThreadLocal
import org.antlr.v4.kotlinruntime.Vocabulary
import org.antlr.v4.kotlinruntime.VocabularyImpl
import org.antlr.v4.kotlinruntime.atn.ATN
import org.antlr.v4.kotlinruntime.atn.ATNDeserializer
import org.antlr.v4.kotlinruntime.atn.LexerATNSimulator
import org.antlr.v4.kotlinruntime.atn.PredictionContextCache
import org.antlr.v4.kotlinruntime.dfa.DFA

class CalculatorLexer(val input: CharStream) : Lexer(input) {
	// TODO Verify the runtime version is correct

    override val ruleNames: Array<String>?
        get() = Rules.values().map { it.name }.toTypedArray()

    override val grammarFileName: String
        get() = "Calculator.g4"

    override val atn: ATN
		get() = ATN

    override val vocabulary: Vocabulary
        get() = VOCABULARY

	@ThreadLocal
	companion object {
		val decisionToDFA : Array<DFA>
		val sharedContextCache = PredictionContextCache()

		private val LITERAL_NAMES: List<String?> = listOf(null, "'='", "'('", 
		                                                  "')'", "'*'", "'/'", 
		                                                  "'+'", "'-'", null, 
		                                                  null, null, "';'")
		private val SYMBOLIC_NAMES: List<String?> = listOf(null, null, null, null, 
		                                                   "MUL", "DIV", "ADD", 
		                                                   "SUB", "ID", "INT", 
		                                                   "NEWLINE", "DELIMITER", 
		                                                   "WS")

		val VOCABULARY = VocabularyImpl(LITERAL_NAMES.toTypedArray(), SYMBOLIC_NAMES.toTypedArray())

        val tokenNames: Array<String?> = Array<String?>(SYMBOLIC_NAMES.size) {
            var el = VOCABULARY.getLiteralName(it)
            if (el == null) {
                el = VOCABULARY.getSymbolicName(it)
            }

            if (el == null) {
                el = "<INVALID>"
            }
            el
        }

		private const val serializedATN : String = "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\u0002\u000e\u0041\u0008\u0001\u0004\u0002\u0009\u0002\u0004\u0003\u0009\u0003\u0004\u0004\u0009\u0004\u0004\u0005\u0009\u0005\u0004\u0006\u0009\u0006\u0004\u0007\u0009\u0007\u0004\u0008\u0009\u0008\u0004\u0009\u0009\u0009\u0004\u000a\u0009\u000a\u0004\u000b\u0009\u000b\u0004\u000c\u0009\u000c\u0004\u000d\u0009\u000d\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0008\u0003\u0008\u0003\u0009\u0006\u0009\u002b\u000a\u0009\u000d\u0009\u000e\u0009\u002c\u0003\u000a\u0006\u000a\u0030\u000a\u000a\u000d\u000a\u000e\u000a\u0031\u0003\u000b\u0005\u000b\u0035\u000a\u000b\u0003\u000b\u0003\u000b\u0003\u000c\u0003\u000c\u0003\u000d\u0006\u000d\u003c\u000a\u000d\u000d\u000d\u000e\u000d\u003d\u0003\u000d\u0003\u000d\u0002\u0002\u000e\u0003\u0003\u0005\u0004\u0007\u0005\u0009\u0006\u000b\u0007\u000d\u0008\u000f\u0009\u0011\u000a\u0013\u000b\u0015\u000c\u0017\u000d\u0019\u000e\u0003\u0002\u0005\u0004\u0002\u0043\u005c\u0063\u007c\u0003\u0002\u0032\u003b\u0004\u0002\u000b\u000b\u0022\u0022\u0002\u0044\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\u0009\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\u000d\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b\u0003\u0002\u0002\u0002\u0005\u001d\u0003\u0002\u0002\u0002\u0007\u001f\u0003\u0002\u0002\u0002\u0009\u0021\u0003\u0002\u0002\u0002\u000b\u0023\u0003\u0002\u0002\u0002\u000d\u0025\u0003\u0002\u0002\u0002\u000f\u0027\u0003\u0002\u0002\u0002\u0011\u002a\u0003\u0002\u0002\u0002\u0013\u002f\u0003\u0002\u0002\u0002\u0015\u0034\u0003\u0002\u0002\u0002\u0017\u0038\u0003\u0002\u0002\u0002\u0019\u003b\u0003\u0002\u0002\u0002\u001b\u001c\u0007\u003f\u0002\u0002\u001c\u0004\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u002a\u0002\u0002\u001e\u0006\u0003\u0002\u0002\u0002\u001f\u0020\u0007\u002b\u0002\u0002\u0020\u0008\u0003\u0002\u0002\u0002\u0021\u0022\u0007\u002c\u0002\u0002\u0022\u000a\u0003\u0002\u0002\u0002\u0023\u0024\u0007\u0031\u0002\u0002\u0024\u000c\u0003\u0002\u0002\u0002\u0025\u0026\u0007\u002d\u0002\u0002\u0026\u000e\u0003\u0002\u0002\u0002\u0027\u0028\u0007\u002f\u0002\u0002\u0028\u0010\u0003\u0002\u0002\u0002\u0029\u002b\u0009\u0002\u0002\u0002\u002a\u0029\u0003\u0002\u0002\u0002\u002b\u002c\u0003\u0002\u0002\u0002\u002c\u002a\u0003\u0002\u0002\u0002\u002c\u002d\u0003\u0002\u0002\u0002\u002d\u0012\u0003\u0002\u0002\u0002\u002e\u0030\u0009\u0003\u0002\u0002\u002f\u002e\u0003\u0002\u0002\u0002\u0030\u0031\u0003\u0002\u0002\u0002\u0031\u002f\u0003\u0002\u0002\u0002\u0031\u0032\u0003\u0002\u0002\u0002\u0032\u0014\u0003\u0002\u0002\u0002\u0033\u0035\u0007\u000f\u0002\u0002\u0034\u0033\u0003\u0002\u0002\u0002\u0034\u0035\u0003\u0002\u0002\u0002\u0035\u0036\u0003\u0002\u0002\u0002\u0036\u0037\u0007\u000c\u0002\u0002\u0037\u0016\u0003\u0002\u0002\u0002\u0038\u0039\u0007\u003d\u0002\u0002\u0039\u0018\u0003\u0002\u0002\u0002\u003a\u003c\u0009\u0004\u0002\u0002\u003b\u003a\u0003\u0002\u0002\u0002\u003c\u003d\u0003\u0002\u0002\u0002\u003d\u003b\u0003\u0002\u0002\u0002\u003d\u003e\u0003\u0002\u0002\u0002\u003e\u003f\u0003\u0002\u0002\u0002\u003f\u0040\u0008\u000d\u0002\u0002\u0040\u001a\u0003\u0002\u0002\u0002\u0007\u0002\u002c\u0031\u0034\u003d\u0003\u0008\u0002\u0002"

		val ATN = ATNDeserializer().deserialize(serializedATN.asCharArray())
		init {
			decisionToDFA = Array<DFA>(ATN.numberOfDecisions, {
				DFA(ATN.getDecisionState(it)!!, it)
			})


		}
	}

    enum class Tokens(val id: Int) {
	    T__0(1),
	    T__1(2),
	    T__2(3),
	    MUL(4),
	    DIV(5),
	    ADD(6),
	    SUB(7),
	    ID(8),
	    INT(9),
	    NEWLINE(10),
	    DELIMITER(11),
	    WS(12)
    }

	enum class Channels(val id: Int) {
		DEFAULT_TOKEN_CHANNEL(0),
		HIDDEN(1),
	}

	override val channelNames = Channels.values().map(Channels::name).toTypedArray()

	enum class Modes(val id: Int) {
		DEFAULT_MODE(0),
	}

	enum class Rules {
	    T__0,
	    T__1,
	    T__2,
	    MUL,
	    DIV,
	    ADD,
	    SUB,
	    ID,
	    INT,
	    NEWLINE,
	    DELIMITER,
	    WS
	}


	init {
		this.interpreter = LexerATNSimulator(this, ATN, decisionToDFA as Array<DFA?>, sharedContextCache)
	}

}