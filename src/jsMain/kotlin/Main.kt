import antlrtest.CalculatorBaseVisitor
import antlrtest.CalculatorLexer
import antlrtest.CalculatorParser
import antlrtest.CalculatorVistorImp
import org.antlr.v4.kotlinruntime.ANTLRInputStream
import org.antlr.v4.kotlinruntime.CharStreams
import org.antlr.v4.kotlinruntime.CommonTokenStream

/**
 * @ClassName Main.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-15
 * Copyright (C) 2022 HOSE
 */

fun main(){
    println(greeting("123"))
    showAdd()
}

fun greeting(name: String) = "Hello, $name"


fun showAdd(){
    val expr = "1+2\n"
    println("输入表达式")
    val lexer = CalculatorLexer(ANTLRInputStream(expr))
    println("创建词法分析器")
    val tokenStream = CommonTokenStream(lexer)
    println("创建token输入流")
    val parser = CalculatorParser(tokenStream)
    println("创建语法分析器")
    parser.buildParseTree = true
    println("设置创建语法树解析为true")
    try {
        val root: CalculatorParser.ProgContext = parser.prog()
        println("获取表达式根节点")
        val vistor = CalculatorVistorImp()
        println("创建访问器")

        val res = vistor.visit(root)
        println("获取结果")
        println(res)
    }catch (e :Exception){
        e.printStackTrace()
    }



}