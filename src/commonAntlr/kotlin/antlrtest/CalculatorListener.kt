// Generated from java-escape by ANTLR 4.7.1
package antlrtest

import org.antlr.v4.kotlinruntime.tree.ParseTreeListener

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculatorParser}.
 */
interface CalculatorListener : ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	fun enterProg(ctx: CalculatorParser.ProgContext)
	/**
	 * Exit a parse tree produced by {@link CalculatorParser#prog}.
	 * @param ctx the parse tree
	 */
	fun exitProg(ctx: CalculatorParser.ProgContext)
	/**
	 * Enter a parse tree produced by the {@code print}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun enterPrint(ctx: CalculatorParser.PrintContext)
	/**
	 * Exit a parse tree produced by the {@code print}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun exitPrint(ctx: CalculatorParser.PrintContext)
	/**
	 * Enter a parse tree produced by the {@code assign}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun enterAssign(ctx: CalculatorParser.AssignContext)
	/**
	 * Exit a parse tree produced by the {@code assign}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun exitAssign(ctx: CalculatorParser.AssignContext)
	/**
	 * Enter a parse tree produced by the {@code blank}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun enterBlank(ctx: CalculatorParser.BlankContext)
	/**
	 * Exit a parse tree produced by the {@code blank}
	 * labeled alternative in {@link CalculatorParser#stat}.
	 * @param ctx the parse tree
	 */
	fun exitBlank(ctx: CalculatorParser.BlankContext)
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMulDiv(ctx: CalculatorParser.MulDivContext)
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMulDiv(ctx: CalculatorParser.MulDivContext)
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAddSub(ctx: CalculatorParser.AddSubContext)
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAddSub(ctx: CalculatorParser.AddSubContext)
	/**
	 * Enter a parse tree produced by the {@code parenthese}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterParenthese(ctx: CalculatorParser.ParentheseContext)
	/**
	 * Exit a parse tree produced by the {@code parenthese}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitParenthese(ctx: CalculatorParser.ParentheseContext)
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterId(ctx: CalculatorParser.IdContext)
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitId(ctx: CalculatorParser.IdContext)
	/**
	 * Enter a parse tree produced by the {@code int}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterInt(ctx: CalculatorParser.IntContext)
	/**
	 * Exit a parse tree produced by the {@code int}
	 * labeled alternative in {@link CalculatorParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitInt(ctx: CalculatorParser.IntContext)
}