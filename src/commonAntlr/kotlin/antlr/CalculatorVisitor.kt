package antlr

import org.antlr.v4.kotlinruntime.tree.ParseTreeVisitor

/**
 * @ClassName CalculatorVisitor.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-12
 * Copyright (C) 2022 HOSE
 */
open interface CalculatorVisitor<T> : ParseTreeVisitor<T> {
    /**
     * Visit a parse tree produced by [CalculatorParser.prog].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitProg(ctx: CalculatorParser.ProgContext): T

    /**
     * Visit a parse tree produced by the `print`
     * labeled alternative in [CalculatorParser.stat].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitPrint(ctx: CalculatorParser.PrintContext): T

    /**
     * Visit a parse tree produced by the `assign`
     * labeled alternative in [CalculatorParser.stat].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitAssign(ctx: CalculatorParser.AssignContext): T

    /**
     * Visit a parse tree produced by the `blank`
     * labeled alternative in [CalculatorParser.stat].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitBlank(ctx: CalculatorParser.BlankContext): T

    /**
     * Visit a parse tree produced by the `MulDiv`
     * labeled alternative in [CalculatorParser.expr].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitMulDiv(ctx: CalculatorParser.MulDivContext): T

    /**
     * Visit a parse tree produced by the `AddSub`
     * labeled alternative in [CalculatorParser.expr].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitAddSub(ctx: CalculatorParser.AddSubContext): T

    /**
     * Visit a parse tree produced by the `parenthese`
     * labeled alternative in [CalculatorParser.expr].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitParenthese(ctx: CalculatorParser.ParentheseContext): T

    /**
     * Visit a parse tree produced by the `id`
     * labeled alternative in [CalculatorParser.expr].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitId(ctx: CalculatorParser.IdContext): T

    /**
     * Visit a parse tree produced by the `int`
     * labeled alternative in [CalculatorParser.expr].
     * @param ctx the parse tree
     * @return the visitor result
     */
    fun visitInt(ctx: CalculatorParser.IntContext): T
}