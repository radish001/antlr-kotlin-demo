package antlrtest



import antlr.MathLexer
import antlr.MathParser
import antlr.MathVisitor
import antlr.impl.MathVisitorImpl
import org.antlr.v4.kotlinruntime.ANTLRInputStream
import org.antlr.v4.kotlinruntime.CommonTokenStream
import kotlin.test.Asserter
import kotlin.test.Test
import kotlin.test.asserter


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
    fun mathTest(){
        val expr = "1+2"
        val input = ANTLRInputStream(expr)
        val lexer = MathLexer(input)
        var parser = MathParser(CommonTokenStream(lexer))
        val root = parser.prog()
        val vistor = MathVisitorImpl()
        val operand = vistor.visit(root)
        asserter.assertEquals(null,3, operand!!.intValue())
    }



    @Test
    fun dateTest(){
        val expr = "'2016-1-1'+1"
        val input = ANTLRInputStream(expr)
        val lexer = MathLexer(input)
        var parser = MathParser(CommonTokenStream(lexer))
        val root = parser.prog()
        val vistor = MathVisitorImpl()
        val operand = vistor.visit(root)


        asserter.assertEquals(null,2016, operand!!.dateValue()!!.year)
        asserter.assertEquals(null,1, operand!!.dateValue()!!.month)
        asserter.assertEquals(null,2, operand!!.dateValue()!!.day)
        asserter.assertEquals(null,0, operand!!.dateValue()!!.hour)
        asserter.assertEquals(null,0, operand!!.dateValue()!!.minute)
        asserter.assertEquals(null,0, operand!!.dateValue()!!.second)



    }







}
