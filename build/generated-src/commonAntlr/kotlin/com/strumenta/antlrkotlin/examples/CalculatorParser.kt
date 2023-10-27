// Generated from java-escape by ANTLR 4.7.1
package com.strumenta.antlrkotlin.examples;
import com.strumenta.kotlinmultiplatform.asCharArray
import com.strumenta.kotlinmultiplatform.getType
import com.strumenta.kotlinmultiplatform.TypeDeclarator
import org.antlr.v4.kotlinruntime.*
import org.antlr.v4.kotlinruntime.atn.*
import org.antlr.v4.kotlinruntime.atn.ATNDeserializer
import org.antlr.v4.kotlinruntime.atn.ParserATNSimulator
import org.antlr.v4.kotlinruntime.atn.PredictionContextCache
import org.antlr.v4.kotlinruntime.dfa.*
import org.antlr.v4.kotlinruntime.tree.ParseTreeListener
import org.antlr.v4.kotlinruntime.tree.TerminalNode
import org.antlr.v4.kotlinruntime.atn.ATN.Companion.INVALID_ALT_NUMBER
import org.antlr.v4.kotlinruntime.tree.ParseTreeVisitor
import kotlin.reflect.KClass

class CalculatorParser(input: TokenStream) : Parser(input) {

    object solver : TypeDeclarator {
        override val classesByName : List<KClass<*>> = listOf(CalculatorParser.ProgContext::class,
                                                              CalculatorParser.StatContext::class,
                                                              CalculatorParser.ExprContext::class)
    }

	// TODO verify version of runtime is compatible

    override val grammarFileName: String
        get() = "Calculator.g4"

    override val tokenNames: Array<String?>?
        get() = CalculatorParser.Companion.tokenNames
    override val ruleNames: Array<String>?
        get() = CalculatorParser.Companion.ruleNames
    override val atn: ATN
        get() = CalculatorParser.Companion.ATN
    override val vocabulary: Vocabulary
        get() = CalculatorParser.Companion.VOCABULARY

    enum class Tokens(val id: Int) {
        EOF(-1),
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

    enum class Rules(val id: Int) {
        RULE_prog(0),
        RULE_stat(1),
        RULE_expr(2)
    }

	@ThreadLocal
	companion object {
	    protected val decisionToDFA : Array<DFA>
    	protected val sharedContextCache = PredictionContextCache()

        val ruleNames = arrayOf("prog", "stat", "expr")

        private val LITERAL_NAMES: List<String?> = listOf(null, "'='", "'('", 
                                                          "')'", "'*'", 
                                                          "'/'", "'+'", 
                                                          "'-'", null, null, 
                                                          null, "';'")
        private val SYMBOLIC_NAMES: List<String?> = listOf(null, null, null, 
                                                           null, "MUL", 
                                                           "DIV", "ADD", 
                                                           "SUB", "ID", 
                                                           "INT", "NEWLINE", 
                                                           "DELIMITER", 
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

        private const val serializedATN : String = "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\u0003\u000e\u002d\u0004\u0002\u0009\u0002\u0004\u0003\u0009\u0003\u0004\u0004\u0009\u0004\u0003\u0002\u0006\u0002\u000a\u000a\u0002\u000d\u0002\u000e\u0002\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0017\u000a\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0020\u000a\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0028\u000a\u0004\u000c\u0004\u000e\u0004\u002b\u000b\u0004\u0003\u0004\u0002\u0003\u0006\u0005\u0002\u0004\u0006\u0002\u0004\u0003\u0002\u0006\u0007\u0003\u0002\u0008\u0009\u0002\u0030\u0002\u0009\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002\u0002\u0008\u000a\u0005\u0004\u0003\u0002\u0009\u0008\u0003\u0002\u0002\u0002\u000a\u000b\u0003\u0002\u0002\u0002\u000b\u0009\u0003\u0002\u0002\u0002\u000b\u000c\u0003\u0002\u0002\u0002\u000c\u0003\u0003\u0002\u0002\u0002\u000d\u000e\u0005\u0006\u0004\u0002\u000e\u000f\u0007\u000c\u0002\u0002\u000f\u0017\u0003\u0002\u0002\u0002\u0010\u0011\u0007\u000a\u0002\u0002\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0013\u0005\u0006\u0004\u0002\u0013\u0014\u0007\u000c\u0002\u0002\u0014\u0017\u0003\u0002\u0002\u0002\u0015\u0017\u0007\u000c\u0002\u0002\u0016\u000d\u0003\u0002\u0002\u0002\u0016\u0010\u0003\u0002\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0005\u0003\u0002\u0002\u0002\u0018\u0019\u0008\u0004\u0001\u0002\u0019\u0020\u0007\u000b\u0002\u0002\u001a\u0020\u0007\u000a\u0002\u0002\u001b\u001c\u0007\u0004\u0002\u0002\u001c\u001d\u0005\u0006\u0004\u0002\u001d\u001e\u0007\u0005\u0002\u0002\u001e\u0020\u0003\u0002\u0002\u0002\u001f\u0018\u0003\u0002\u0002\u0002\u001f\u001a\u0003\u0002\u0002\u0002\u001f\u001b\u0003\u0002\u0002\u0002\u0020\u0029\u0003\u0002\u0002\u0002\u0021\u0022\u000c\u0007\u0002\u0002\u0022\u0023\u0009\u0002\u0002\u0002\u0023\u0028\u0005\u0006\u0004\u0008\u0024\u0025\u000c\u0006\u0002\u0002\u0025\u0026\u0009\u0003\u0002\u0002\u0026\u0028\u0005\u0006\u0004\u0007\u0027\u0021\u0003\u0002\u0002\u0002\u0027\u0024\u0003\u0002\u0002\u0002\u0028\u002b\u0003\u0002\u0002\u0002\u0029\u0027\u0003\u0002\u0002\u0002\u0029\u002a\u0003\u0002\u0002\u0002\u002a\u0007\u0003\u0002\u0002\u0002\u002b\u0029\u0003\u0002\u0002\u0002\u0007\u000b\u0016\u001f\u0027\u0029"

        val ATN = ATNDeserializer().deserialize(serializedATN.asCharArray())
        init {
        	decisionToDFA = Array<DFA>(ATN.numberOfDecisions, {
        		DFA(ATN.getDecisionState(it)!!, it)
        	})


        }
	}

    private val T__0 = Tokens.T__0.id
    private val T__1 = Tokens.T__1.id
    private val T__2 = Tokens.T__2.id
    private val MUL = Tokens.MUL.id
    private val DIV = Tokens.DIV.id
    private val ADD = Tokens.ADD.id
    private val SUB = Tokens.SUB.id
    private val ID = Tokens.ID.id
    private val INT = Tokens.INT.id
    private val NEWLINE = Tokens.NEWLINE.id
    private val DELIMITER = Tokens.DELIMITER.id
    private val WS = Tokens.WS.id

    /* Named actions */
	init {
		interpreter = ParserATNSimulator(this, ATN, decisionToDFA, sharedContextCache)
	}
	/* Funcs */
	open class ProgContext : ParserRuleContext {
	    override var ruleIndex: Int
	        get() = Rules.RULE_prog.id
	        set(value) { throw RuntimeException() }
		fun findStat() : List<StatContext> = getRuleContexts(solver.getType("StatContext"))
		fun findStat(i: Int) : StatContext? = getRuleContext(solver.getType("StatContext"),i)
		constructor(parent: ParserRuleContext?, invokingState: Int) : super(parent, invokingState){
		}
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterProg(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitProg(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitProg(this)
			else return visitor.visitChildren(this)!!
		}
	}

	fun  prog() : ProgContext {
		var _localctx : ProgContext = ProgContext(context, state)
		enterRule(_localctx, 0, Rules.RULE_prog.id)
		var _la: Int
		try {
			enterOuterAlt(_localctx, 1)
			if (true){
			this.state = 7 
			errorHandler.sync(this)
			_la = _input!!.LA(1)
			do {
				if (true){
				if (true){
				this.state = 6
				stat()
				}
				}
				this.state = 9 
				errorHandler.sync(this)
				_la = _input!!.LA(1)
			} while ( (((_la) and 0x3f.inv()) == 0 && ((1L shl _la) and ((1L shl T__1) or (1L shl ID) or (1L shl INT) or (1L shl NEWLINE))) != 0L) )
			}
		}
		catch (re: RecognitionException) {
			_localctx.exception = re
			errorHandler.reportError(this, re)
			errorHandler.recover(this, re)
		}
		finally {
			exitRule()
		}
		return _localctx
	}

	open class StatContext : ParserRuleContext {
	    override var ruleIndex: Int
	        get() = Rules.RULE_stat.id
	        set(value) { throw RuntimeException() }
		constructor(parent: ParserRuleContext?, invokingState: Int) : super(parent, invokingState){
		}
	 
		constructor() : super() { }
		fun copyFrom(ctx: StatContext) {
			super.copyFrom(ctx)
		}
	}
	open class PrintContext : StatContext {
		fun findExpr() : ExprContext? = getRuleContext(solver.getType("ExprContext"),0)
		fun NEWLINE() : TerminalNode? = getToken(CalculatorParser.Tokens.NEWLINE.id, 0)
		constructor(ctx: StatContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterPrint(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitPrint(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitPrint(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class BlankContext : StatContext {
		fun NEWLINE() : TerminalNode? = getToken(CalculatorParser.Tokens.NEWLINE.id, 0)
		constructor(ctx: StatContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterBlank(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitBlank(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitBlank(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class AssignContext : StatContext {
		fun ID() : TerminalNode? = getToken(CalculatorParser.Tokens.ID.id, 0)
		fun findExpr() : ExprContext? = getRuleContext(solver.getType("ExprContext"),0)
		fun NEWLINE() : TerminalNode? = getToken(CalculatorParser.Tokens.NEWLINE.id, 0)
		constructor(ctx: StatContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterAssign(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitAssign(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitAssign(this)
			else return visitor.visitChildren(this)!!
		}
	}

	fun  stat() : StatContext {
		var _localctx : StatContext = StatContext(context, state)
		enterRule(_localctx, 2, Rules.RULE_stat.id)
		try {
			this.state = 20
			errorHandler.sync(this)
			when ( interpreter!!.adaptivePredict(_input!!,1,context) ) {
			1 -> {_localctx = PrintContext(_localctx)
			enterOuterAlt(_localctx, 1)
			if (true){
			this.state = 11
			expr(0)
			this.state = 12
			match(NEWLINE) as Token
			}}
			2 -> {_localctx = AssignContext(_localctx)
			enterOuterAlt(_localctx, 2)
			if (true){
			this.state = 14
			match(ID) as Token
			this.state = 15
			match(T__0) as Token
			this.state = 16
			expr(0)
			this.state = 17
			match(NEWLINE) as Token
			}}
			3 -> {_localctx = BlankContext(_localctx)
			enterOuterAlt(_localctx, 3)
			if (true){
			this.state = 19
			match(NEWLINE) as Token
			}}
			}
		}
		catch (re: RecognitionException) {
			_localctx.exception = re
			errorHandler.reportError(this, re)
			errorHandler.recover(this, re)
		}
		finally {
			exitRule()
		}
		return _localctx
	}

	open class ExprContext : ParserRuleContext {
	    override var ruleIndex: Int
	        get() = Rules.RULE_expr.id
	        set(value) { throw RuntimeException() }
		constructor(parent: ParserRuleContext?, invokingState: Int) : super(parent, invokingState){
		}
	 
		constructor() : super() { }
		fun copyFrom(ctx: ExprContext) {
			super.copyFrom(ctx)
		}
	}
	open class MulDivContext : ExprContext {
		public var op: Token? = null
		fun findExpr() : List<ExprContext> = getRuleContexts(solver.getType("ExprContext"))
		fun findExpr(i: Int) : ExprContext? = getRuleContext(solver.getType("ExprContext"),i)
		constructor(ctx: ExprContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterMulDiv(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitMulDiv(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitMulDiv(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class AddSubContext : ExprContext {
		public var op: Token? = null
		fun findExpr() : List<ExprContext> = getRuleContexts(solver.getType("ExprContext"))
		fun findExpr(i: Int) : ExprContext? = getRuleContext(solver.getType("ExprContext"),i)
		constructor(ctx: ExprContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterAddSub(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitAddSub(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitAddSub(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class ParentheseContext : ExprContext {
		fun findExpr() : ExprContext? = getRuleContext(solver.getType("ExprContext"),0)
		constructor(ctx: ExprContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterParenthese(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitParenthese(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitParenthese(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class IdContext : ExprContext {
		fun ID() : TerminalNode? = getToken(CalculatorParser.Tokens.ID.id, 0)
		constructor(ctx: ExprContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterId(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitId(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitId(this)
			else return visitor.visitChildren(this)!!
		}
	}
	open class IntContext : ExprContext {
		fun INT() : TerminalNode? = getToken(CalculatorParser.Tokens.INT.id, 0)
		constructor(ctx: ExprContext) { copyFrom(ctx) }
		override fun enterRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).enterInt(this)
		}
		override fun exitRule(listener: ParseTreeListener) {
			if ( listener is CalculatorListener ) (listener as CalculatorListener).exitInt(this)
		}
		override fun <T> accept(visitor : ParseTreeVisitor<out T>) : T {
			if ( visitor is CalculatorVisitor ) return (visitor as CalculatorVisitor<out T>).visitInt(this)
			else return visitor.visitChildren(this)!!
		}
	}

	 fun expr() : ExprContext {
		return expr(0);
	}

	private fun expr(_p: Int) : ExprContext {
		var _parentctx : ParserRuleContext? = context
		var _parentState : Int = state
		var _localctx : ExprContext= ExprContext(context, _parentState)
		var _prevctx : ExprContext= _localctx
		var _startState : Int = 4
		enterRecursionRule(_localctx, 4, Rules.RULE_expr.id, _p)
		var _la: Int
		try {
			var _alt: Int
			enterOuterAlt(_localctx, 1)
			if (true){
			this.state = 29
			errorHandler.sync(this)
			when (_input!!.LA(1)) {
			INT  ->  /*LL1AltBlock*/{if (true){
			_localctx = IntContext(_localctx)
			context = _localctx
			_prevctx = _localctx

			this.state = 23
			match(INT) as Token
			}}
			ID  ->  /*LL1AltBlock*/{if (true){
			_localctx = IdContext(_localctx)
			context = _localctx
			_prevctx = _localctx
			this.state = 24
			match(ID) as Token
			}}
			T__1  ->  /*LL1AltBlock*/{if (true){
			_localctx = ParentheseContext(_localctx)
			context = _localctx
			_prevctx = _localctx
			this.state = 25
			match(T__1) as Token
			this.state = 26
			expr(0)
			this.state = 27
			match(T__2) as Token
			}}
			else -> throw NoViableAltException(this)
			}
			this.context!!.stop = _input!!.LT(-1)
			this.state = 39
			errorHandler.sync(this)
			_alt = interpreter!!.adaptivePredict(_input!!,4,context)
			while ( _alt!=2 && _alt!=INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent()
					    _prevctx = _localctx
					if (true){
					this.state = 37
					errorHandler.sync(this)
					when ( interpreter!!.adaptivePredict(_input!!,3,context) ) {
					1 -> {if (true){
					_localctx = MulDivContext(ExprContext(_parentctx, _parentState))
					pushNewRecursionContext(_localctx, _startState, Rules.RULE_expr.id)
					this.state = 31
					if (!(precpred(context!!, 5))) throw FailedPredicateException(this, "precpred(context!!, 5)")
					this.state = 32
					(_localctx as MulDivContext).op = _input!!.LT(1)
					_la = _input!!.LA(1)
					if ( !(_la==MUL || _la==DIV) ) {
						(_localctx as MulDivContext).op = errorHandler.recoverInline(this) as Token
					}
					else {
						if ( _input!!.LA(1)==Tokens.EOF.id ) isMatchedEOF = true
						errorHandler.reportMatch(this)
						consume()
					}
					this.state = 33
					expr(6)
					}}
					2 -> {if (true){
					_localctx = AddSubContext(ExprContext(_parentctx, _parentState))
					pushNewRecursionContext(_localctx, _startState, Rules.RULE_expr.id)
					this.state = 34
					if (!(precpred(context!!, 4))) throw FailedPredicateException(this, "precpred(context!!, 4)")
					this.state = 35
					(_localctx as AddSubContext).op = _input!!.LT(1)
					_la = _input!!.LA(1)
					if ( !(_la==ADD || _la==SUB) ) {
						(_localctx as AddSubContext).op = errorHandler.recoverInline(this) as Token
					}
					else {
						if ( _input!!.LA(1)==Tokens.EOF.id ) isMatchedEOF = true
						errorHandler.reportMatch(this)
						consume()
					}
					this.state = 36
					expr(5)
					}}
					}
					} 
				}
				this.state = 41
				errorHandler.sync(this)
				_alt = interpreter!!.adaptivePredict(_input!!,4,context)
			}
			}
		}
		catch (re: RecognitionException) {
			_localctx.exception = re
			errorHandler.reportError(this, re)
			errorHandler.recover(this, re)
		}
		finally {
			unrollRecursionContexts(_parentctx)
		}
		return _localctx
	}

	override fun sempred(_localctx: RuleContext?, ruleIndex: Int, predIndex: Int) : Boolean {
		when (ruleIndex) {
		2 -> return expr_sempred(_localctx as ExprContext, predIndex)
		}
		return true
	}
	private fun expr_sempred( _localctx : ExprContext, predIndex: Int) : Boolean {
		when (predIndex) {
		    0 -> return precpred(context!!, 5)
		    1 -> return precpred(context!!, 4)
		}
		return true
	}

}