package antlrtest



import antlr.MathLexer
import antlr.MathParser
import antlr.MathVisitor
import antlr.impl.MathVisitorImpl
import org.antlr.v4.kotlinruntime.ANTLRInputStream
import org.antlr.v4.kotlinruntime.CommonTokenStream
import kotlin.test.Test



/**
 * @ClassName EvalTest.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-12
 * Copyright (C) 2022 HOSE
 */

class EvalTest {




    @Test
    fun test(){
        val expr = "1+2"
        val input = ANTLRInputStream(expr)
        val lexer = CalculatorLexer(input)
        var parser = CalculatorParser(CommonTokenStream(lexer))
        val root = parser.prog()
        val vistor: CalculatorBaseVisitor<Int> = CalculatorVistorImp()
        val res: Int? = vistor.visit(root)
        println("结果============="+res)
    }



    @Test
    fun mathTest(){
        val expr = "1+2"
        val input = ANTLRInputStream(expr)
        val lexer = MathLexer(input)
        var parser = MathParser(CommonTokenStream(lexer))
        val root = parser.prog()
        val vistor = MathVisitorImpl()
        val operand = vistor.visit(root)
        println("结果============="+operand?.intValue())
    }



}
