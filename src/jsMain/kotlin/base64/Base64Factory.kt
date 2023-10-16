package org.jetbrains.base64

import antlr.CalculatorBaseVisitor
import antlr.CalculatorLexer
import antlr.CalculatorParser
import antlr.CalculatorVistorImp
import org.antlr.v4.kotlinruntime.CharStreams
import org.antlr.v4.kotlinruntime.CommonTokenStream

actual object Base64Factory {
    actual fun createEncoder(): Base64Encoder = JsBase64Encoder

    fun sayHello(name: String){
        return
    }
}



object JsBase64Encoder : Base64Encoder {
    override fun encode(src: ByteArray): ByteArray {
        val binString = src.decodeToString()
        return Base64.encode(binString).encodeToByteArray()
    }
}