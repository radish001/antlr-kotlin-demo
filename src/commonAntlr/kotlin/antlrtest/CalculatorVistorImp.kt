package antlrtest


/**
 * @ClassName CalculatorVistorImp.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-12
 * Copyright (C) 2022 HOSE
 */
class CalculatorVistorImp : CalculatorBaseVisitor<Int>() {
    //存储变量的值
    private var variable = HashMap<String, Int>()


    //遇到print节点，计算结果，打印出来
    override fun visitPrint(ctx: CalculatorParser.PrintContext): Int {
        //System.out.println(result);
        return ctx.findExpr()?.accept(this)!!
    }

    //分别获取expr节点的值，并计算乘除结果
    override fun visitMulDiv(ctx: CalculatorParser.MulDivContext): Int {
        val param1: Int? = ctx.findExpr(0)?.accept(this)
        val param2: Int? = ctx.findExpr(1)?.accept(this)
        if (ctx.op?.type === CalculatorParser.Tokens.MUL.id) {
            return param1?.times(param2!!)!!
        }
        if (ctx.op?.type === CalculatorParser.Tokens.DIV.id) {
            return param1?.div(param2!!)!!
        }
        throw RuntimeException("不知道的符号")

    }

    //分别获取expr节点的值，并计算结果
    override fun visitAddSub(ctx: CalculatorParser.AddSubContext): Int {
        val param1: Int? = ctx.findExpr(0)?.accept(this)
        val param2: Int? = ctx.findExpr(1)?.accept(this)
        if (ctx.op?.type === CalculatorParser.Tokens.ADD.id) {
            return param1?.plus(param2!!)!!
        }
        if (ctx.op?.type === CalculatorParser.Tokens.SUB.id) {
           return param1?.minus( param2!!)!!
        }
        throw RuntimeException("不知道的符号")
    }

    //当遇到Id时从变量表获取数据
    override fun visitId(ctx: CalculatorParser.IdContext): Int {
        return variable[ctx.text]!!
    }

    //当遇到Int节点时直接返回数据
    override fun visitInt(ctx: CalculatorParser.IntContext): Int {
        return ctx.text.toInt()
    }

    //当遇到赋值语句时，获取右边expr的值存储到变量表中
    override fun visitAssign(ctx: CalculatorParser.AssignContext): Int {
        val name: String? = ctx.ID()?.text
        val value: Int? = ctx.findExpr()?.accept(this)
        variable[name!!] = value!!
        return super.visitAssign(ctx)!!
    }

    //当遇到括号，返回括号内expr的结果
    override fun visitParenthese(ctx: CalculatorParser.ParentheseContext): Int {
        return ctx.findExpr()?.accept(this)!!
    }
}