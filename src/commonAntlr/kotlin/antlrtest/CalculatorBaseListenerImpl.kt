// Generated from java-escape by ANTLR 4.7.1
package antlrtest

import org.antlr.v4.kotlinruntime.ParserRuleContext
import org.antlr.v4.kotlinruntime.tree.ErrorNode
import org.antlr.v4.kotlinruntime.tree.ParseTreeProperty
import org.antlr.v4.kotlinruntime.tree.TerminalNode

/**
 * This class provides an empty implementation of {@link CalculatorListener},
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
open class CalculatorBaseListenerImpl : CalculatorBaseListener() {

	// 记录每个ctx对应的属性，这里的属性是double类型的数值，可以用于实现表达式的计算
	val  ctxs = ParseTreeProperty<Int>();
	// 存储变量名和对应的值，若存储ctx会导致变量的值在后续表达式中无法获取
	val map =  HashMap<String, Int>()


	override fun enterAddSub(ctx: CalculatorParser.AddSubContext) {
			// 获取左右expr对应的ctx的属性，并将乘除运算的结果作为AddSubContext的属性
			val left = ctxs.get(ctx.findExpr(0)!!);
			val  right = ctxs.get(ctx.findExpr(1)!!);
			if (ctx.op?.type == CalculatorParser.Tokens.ADD.id) {
				ctxs.put(ctx, left + right);
			} else {
				ctxs.put(ctx, left - right);
			}
	}

	override fun enterPrint(ctx: CalculatorParser.PrintContext) {
		// 获取expr的属性并打印，保留4位小数
		val  value = ctxs.get(ctx.findExpr()!!);
		// 常量，直接打印值，无需打印表达式
		if (ctx.findExpr() is CalculatorParser.PrintContext) {
			println("结果：" + value)
		}

	}
}