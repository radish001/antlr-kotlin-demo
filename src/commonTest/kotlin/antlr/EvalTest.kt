package antlr



import org.antlr.v4.kotlinruntime.*
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
        val inputStream : CharStream = ANTLRInputStream(expr)
        val lexer: CalculatorLexer = CalculatorLexer(inputStream)
        val tokenStream : CommonTokenStream = CommonTokenStream(lexer)
        val parser: CalculatorParser = CalculatorParser(tokenStream)
        parser.buildParseTree = true
        val root: CalculatorParser.ProgContext = parser.prog()
        val vistor: CalculatorBaseVisitor<Int> = CalculatorVistorImp()
        val res: Int? = vistor.visit(root)
        println(res)
    }







    @Test
    fun testLexer(){
        val expr = "1+2\n"
        val lexer = CalculatorLexer(ANTLRInputStream(expr))
        var token: Token?
        do {
            token = lexer.nextToken()
            println("TOKEN $token")
        } while (token?.type != -1)
    }


   @Test
    fun testParser(){
        val expr = "1+2\n"
        val input = ANTLRInputStream(expr)
        val lexer = CalculatorLexer(input)
        val parser = CalculatorParser(CommonTokenStream(lexer))

       val root = parser.prog()
       println("Parsed: ${root::class}")
       println("Parsed: ${root.childCount}")
       println("Parsed: ${root.children!![0]::class}")

    }

}
