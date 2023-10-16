package antlr

import org.antlr.v4.kotlinruntime.tree.AbstractParseTreeVisitor

/**
 * @ClassName CalculatorBaseVisitor.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-12
 * Copyright (C) 2022 HOSE
 */
open class CalculatorBaseVisitor<T> : AbstractParseTreeVisitor<T?>(), CalculatorVisitor<T?> {
    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitProg(ctx: CalculatorParser.ProgContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitPrint(ctx: CalculatorParser.PrintContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitAssign(ctx: CalculatorParser.AssignContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitBlank(ctx: CalculatorParser.BlankContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitMulDiv(ctx: CalculatorParser.MulDivContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitAddSub(ctx: CalculatorParser.AddSubContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitParenthese(ctx: CalculatorParser.ParentheseContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitId(ctx: CalculatorParser.IdContext): T? {
        return visitChildren(ctx)
    }

    /**
     * {@inheritDoc}
     *
     *
     * The default implementation returns the result of calling
     * [.visitChildren] on `ctx`.
     */
    override fun visitInt(ctx: CalculatorParser.IntContext): T? {
        return visitChildren(ctx)
    }
}