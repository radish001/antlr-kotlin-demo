package antlr.impl

import antlr.AntlrErrorListener
import antlr.MathLexer
import antlr.MathParser
import antlr.expect.CommonDate
import antlr.expect.CommonNumber
import antlr.data.SimpleMapWrapper
import antlr.json.JsonData
import antlr.json.JsonMapper
import antlr.util.CharUtil
import org.antlr.v4.kotlinruntime.CharStreams
import org.antlr.v4.kotlinruntime.CommonTokenStream
import org.antlr.v4.kotlinruntime.RecognitionException


/**
 * @ClassName AlgorithmEngine.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class AlgorithmEngine {
    /**
     * 使用EXCEL索引
     */
    private var useExcelIndex = true

    /**
     * 最后一个错误
     */
    private var lastError: String? = null

    /**
     * 保存到临时文档
     */
    private var useTempDict = false

    /**
     * 是否忽略大小写
     */
    private var ignoreCase = false

    /**
     * 使用本地时区
     */
    private var useLocalTime = false


    private var context: MathParser.ProgContext? = null


    private var tempdict: SimpleMapWrapper<Operand>? = null


    constructor() {
        this.tempdict = SimpleMapWrapper(this.ignoreCase)
    }

    constructor(ignoreCase: Boolean) {
        this.ignoreCase = ignoreCase
        this.tempdict = SimpleMapWrapper(ignoreCase)
    }


    private fun getDiyParameterInside(parameter: String): Operand? {
        if (tempdict!!.containsKey(parameter)) {
            return tempdict!![parameter]
        }
        val result: Operand = getParameter(parameter)
        if (useTempDict) {
            tempdict!![parameter] = result
        }
        return result
    }

    private fun getParameter(parameter: String): Operand {
        return Operand.error("Parameter [$parameter] is missing.")
    }

    private fun executeDiyFunction(funcName: String, operands: List<Operand?>?): Operand {
        return Operand.error("DiyFunction [$funcName] is missing.")
    }

    fun clearParameters() {
        tempdict!!.clear()
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Operand) {
        tempdict!![key] = obj
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Boolean) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Short) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Int) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Long) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Float) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: Double) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */

    fun addParameter(key: String, obj: CommonNumber) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: String) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: CommonDate) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun addParameter(key: String, obj: List<Operand>) {
        tempdict!![key] = Operand.create(obj)
    }

    /**
     * 添加自定义参数
     */
    @Throws(Exception::class)
    fun addParameterFromJson(json: String) {
        if (json.startsWith("{") && json.endsWith("}")) {
            val jo: JsonData = JsonMapper.toObject(json) as JsonData
            if (jo.isObject()) {
                for (item in jo.getInstanceObject()!!.keys) {
                    val v: JsonData = jo.getInstanceObject()!![item]!!
                    if (v.isString()) tempdict!![item] =
                        Operand.create(v.stringValue()!!) else if (v.isBoolean()) tempdict!![item] =
                        Operand.create(v.booleanValue()) else if (v.isDouble()) tempdict!![item] =
                        Operand.create(v.numberValue()) else if (v.isObject()) tempdict!![item] =
                        Operand.create(v) else if (v.isArray()) tempdict!![item] =
                        Operand.create(v) else if (v.isNull()) tempdict!![item] = Operand.createNull()
                }
                return
            }
        }
        throw Exception("Parameter is not json String.")
    }

    @Throws(RecognitionException::class)
    fun parse(exp: String?): Boolean {
        if (exp == null || exp == "") {
            lastError = "Parameter exp invalid !"
            return false
        }
        val stream = CharStreams.fromString(exp)
        val lexer = MathLexer(stream)
        val tokens = CommonTokenStream(lexer)
        val parser = MathParser(tokens)
        val antlrErrorListener = AntlrErrorListener()
        parser.removeErrorListeners()
        parser.addErrorListener(antlrErrorListener)
        val context: MathParser.ProgContext = parser.prog()
        if (antlrErrorListener.IsError) {
            this.context = null
            lastError = antlrErrorListener.ErrorMsg
            return false
        }
        this.context = context
        return true
    }

    @Throws(Exception::class)
    fun evaluate(): Operand? {
        if (context == null) {
            lastError = "Please use Parse to compile formula !"
            throw Exception("Please use Parse to compile formula !")
        }
        val visitor = MathVisitorImpl()
        visitor.getParameter = label@{ f ->
            try {
                return@label getDiyParameterInside(f)
            } catch (e: Exception) {
            }
            null
        }
        visitor.excelIndex = if (useExcelIndex) 1 else 0
        visitor.diyFunction = { f -> executeDiyFunction(f.name, f.operandList) }
        visitor.useLocalTime = useLocalTime
        return visitor.visit(context!!)
    }

    fun tryEvaluate(exp: String?, defaultValue: CommonNumber): CommonNumber? {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toNumber("It can't be converted to number!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.numberValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }

    fun tryEvaluate(exp: String?, defaultValue: Int): Int {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toNumber("It can't be converted to number!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.intValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }

    fun tryEvaluate(exp: String?, defaultValue: Double): Double {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toNumber("It can't be converted to number!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.doubleValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }

    fun tryEvaluate(exp: String?, defaultValue: Long): Long {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toNumber("It can't be converted to number!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.longValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }

    fun tryEvaluate(exp: String?, defaultValue: String?): String? {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                if (obj?.isError()!!) {
                    return null
                }
                obj = obj.toText("It can't be converted to String!")
                if (obj.isError()) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.textValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }

    fun tryEvaluate(exp: String?, defaultValue: Boolean): Boolean {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toBoolean("It can't be converted to boolean!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.booleanValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }


    fun tryEvaluate(exp: String?, defaultValue: CommonDate): CommonDate? {
        try {
            if (parse(exp)) {
                var obj: Operand? = evaluate()
                obj = obj?.toDate("It can't be converted to CommonDate!")
                if (obj?.isError()!!) {
                    lastError = obj.errorMsg()
                    return defaultValue
                }
                return obj.dateValue()
            }
        } catch (ex: Exception) {
            lastError = ex.message
        }
        return defaultValue
    }


    /**
     * 计算公式
     *
     * @param formula   公式
     * @param splitChar 分隔符
     * @return
     */
    fun evaluateFormula(formula: String?, splitChar: Char): String {
        if (formula == null || formula == "") return ""
        val splitChars: MutableList<Char> = mutableListOf<Char>()
        splitChars.add(splitChar)

        return evaluateFormula(formula, splitChars)
    }

    /**
     * 计算公式
     *
     * @param formula    公式
     * @param splitChars 分隔符
     * @return
     */
    fun evaluateFormula(formula: String?, splitChars: List<Char>): String {
        if (formula == null || formula == "") return ""
        val sp: List<String> = CharUtil.splitFormula(formula, splitChars)
        val stringBuilder: StringBuilder = StringBuilder()
        for (i in sp.indices) {
            val s = sp[i]
            if (s.length == 1 && splitChars.contains(s[0])) {
                stringBuilder.append(s)
            } else {
                // TODO 替换此处
                val d: String? = tryEvaluate(s, "")
                stringBuilder.append(d)
            }
        }
        return stringBuilder.toString()
    }
}