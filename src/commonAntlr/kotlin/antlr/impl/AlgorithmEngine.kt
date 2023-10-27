package antlr.impl

import antlr.AntlrErrorListener
import antlr.MathLexer
import antlr.MathParser
import antlr.collection.MyTreeMap
import antlr.data.MyDate
import antlr.data.MyNumber
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
    var UseExcelIndex = true

    /**
     * 最后一个错误
     */
    var LastError: String? = null

    /**
     * 保存到临时文档
     */
    var UseTempDict = false

    /**
     * 是否忽略大小写
     */
    var IgnoreCase = false

    /**
     * 使用本地时区
     */
    var UseLocalTime = false
    private var _context: MathParser.ProgContext? = null
    private var _tempdict: MyTreeMap<String, Operand>? = null

    /// <summary>
    /// 默认不带缓存
    /// </summary>
    constructor()  {
        IgnoreCase = false
        _tempdict = MyTreeMap<String, Operand>(IgnoreCase)
    }

    /// <summary>
    /// 带缓存关键字大小写参数
    /// </summary>
    /// <param name="ignoreCase"></param>
    constructor(ignoreCase: Boolean) {
        IgnoreCase = ignoreCase
        _tempdict = MyTreeMap<String, Operand>(ignoreCase)

    }

    private fun GetDiyParameterInside(parameter: String): Operand? {
        if (_tempdict!!.containsKey(parameter)) {
            return _tempdict!![parameter]
        }
        val result: Operand = GetParameter(parameter)
        if (UseTempDict) {
            _tempdict!![parameter] = result
        }
        return result
    }

    protected fun GetParameter(parameter: String): Operand {
        return Operand.Error("Parameter [$parameter] is missing.")
    }

    protected fun ExecuteDiyFunction(funcName: String, operands: List<Operand?>?): Operand {
        return Operand.Error("DiyFunction [$funcName] is missing.")
    }

    fun ClearParameters() {
        _tempdict!!.clear()
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Operand) {
        _tempdict!![key] = obj
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Boolean) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Short) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Int) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Long) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Float) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: Double) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */

    fun AddParameter(key: String, obj: MyNumber) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: String?) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: MyDate) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    fun AddParameter(key: String, obj: List<Operand>) {
        _tempdict!![key] = Operand.Create(obj)
    }

    /**
     * 添加自定义参数
     */
    @Throws(Exception::class)
    fun AddParameterFromJson(json: String) {
        if (json.startsWith("{") && json.endsWith("}")) {
            val jo: JsonData = JsonMapper.ToObject(json) as JsonData
            if (jo.IsObject()) {
                for (item in jo.inst_object!!.keys) {
                    val v: JsonData = jo.inst_object!![item]!!
                    if (v.IsString()) _tempdict!![item] =
                        Operand.Create(v.StringValue()) else if (v.IsBoolean()) _tempdict!![item] =
                        Operand.Create(v.BooleanValue()) else if (v.IsDouble()) _tempdict!![item] =
                        Operand.Create(v.NumberValue()) else if (v.IsObject()) _tempdict!![item] =
                        Operand.Create(v) else if (v.IsArray()) _tempdict!![item] =
                        Operand.Create(v) else if (v.IsNull()) _tempdict!![item] = Operand.CreateNull()
                }
                return
            }
        }
        throw Exception("Parameter is not json String.")
    }

    @Throws(RecognitionException::class)
    fun Parse(exp: String?): Boolean {
        if (exp == null || exp == "") {
            LastError = "Parameter exp invalid !"
            return false
        }
        val stream = CharStreams.fromString(exp)
        val lexer = MathLexer(stream)
        val tokens: CommonTokenStream = CommonTokenStream(lexer)
        val parser = MathParser(tokens)
        val antlrErrorListener = AntlrErrorListener()
        parser.removeErrorListeners()
        parser.addErrorListener(antlrErrorListener)
        val context: MathParser.ProgContext = parser.prog()
        if (antlrErrorListener.IsError) {
            _context = null
            LastError = antlrErrorListener.ErrorMsg
            return false
        }
        _context = context
        return true
    }

    @Throws(Exception::class)
    fun Evaluate(): Operand? {
        if (_context == null) {
            LastError = "Please use Parse to compile formula !"
            throw Exception("Please use Parse to compile formula !")
        }
        val visitor = MathVisitorImpl()
        visitor.GetParameter = label@{ f ->
            try {
                return@label GetDiyParameterInside(f)
            } catch (e: Exception) {
            }
            null
        }
        visitor.excelIndex = if (UseExcelIndex) 1 else 0
        visitor.DiyFunction = { f -> ExecuteDiyFunction(f.Name, f.OperandList) }
        visitor.useLocalTime = UseLocalTime
        return visitor.visit(_context!!)
    }

    fun TryEvaluate(exp: String?, defvalue: MyNumber): MyNumber? {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToNumber("It can't be converted to number!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.NumberValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    fun TryEvaluate(exp: String?, defvalue: Int): Int {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToNumber("It can't be converted to number!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.IntValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    fun TryEvaluate(exp: String?, defvalue: Double): Double {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToNumber("It can't be converted to number!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.DoubleValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    fun TryEvaluate(exp: String?, defvalue: Long): Long {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToNumber("It can't be converted to number!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.LongValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    fun TryEvaluate(exp: String?, defvalue: String?): String? {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                if (obj?.IsNull()!!) {
                    return null
                }
                obj = obj.ToText("It can't be converted to String!")
                if (obj.IsError()) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.TextValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    fun TryEvaluate(exp: String?, defvalue: Boolean): Boolean {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToBoolean("It can't be converted to boolean!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.BooleanValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

/*    fun TryEvaluate(exp: String?, defvalue: DateTime): DateTime {
       TODO("处理时间")
    }*/

    fun TryEvaluate(exp: String?, defvalue: MyDate): MyDate? {
        try {
            if (Parse(exp)) {
                var obj: Operand? = Evaluate()
                obj = obj?.ToDate("It can't be converted to MyDate!")
                if (obj?.IsError()!!) {
                    LastError = obj.ErrorMsg()
                    return defvalue
                }
                return obj.DateValue()
            }
        } catch (ex: Exception) {
            LastError = ex.message
        }
        return defvalue
    }

    /**
     * 获取简化公式
     *
     * @param formula 公式
     */
    fun GetSimplifiedFormula(formula: String?): String? {
      /*  try {
            if (Parse(formula)) {
                val visitor = MathSimplifiedFormulaVisitor()
                visitor.GetParameter = label@{ f ->
                    try {
                        return@label GetDiyParameterInside(f)
                    } catch (e: java.lang.Exception) {
                    }
                    null
                }
                visitor.excelIndex = if (UseExcelIndex) 1 else 0
                visitor.DiyFunction = { f -> ExecuteDiyFunction(f.Name, f.OperandList) }
                visitor.useLocalTime = UseLocalTime
                var obj: Operand = visitor.visit(_context)
                obj = obj.ToText("It can't be converted to String!")
                if (obj.IsError()) {
                    LastError = obj.ErrorMsg()
                    return null
                }
                return obj.TextValue()
            }
        } catch (ex: java.lang.Exception) {
            LastError = ex.message
        }
        return null*/
        TODO()
    }

    /**
     * 计算公式
     *
     * @param formula   公式
     * @param splitChar 分隔符
     * @return
     */
    fun EvaluateFormula(formula: String?, splitChar: Char): String {
        if (formula == null || formula == "") return ""
        val splitChars: MutableList<Char> = mutableListOf<Char>()
        splitChars.add(splitChar)
        return EvaluateFormula(formula, splitChars)
    }

    /**
     * 计算公式
     *
     * @param formula    公式
     * @param splitChars 分隔符
     * @return
     */
    fun EvaluateFormula(formula: String?, splitChars: List<Char>): String {
        if (formula == null || formula == "") return ""
        val sp: List<String> = CharUtil.SplitFormula(formula, splitChars)
        val stringBuilder: StringBuilder = StringBuilder()
        for (i in sp.indices) {
            val s = sp[i]
            if (s.length == 1 && splitChars.contains(s[0])) {
                stringBuilder.append(s)
            } else {
                // TODO 替换此处
                val d: String? = TryEvaluate(s, "")
                stringBuilder.append(d)
            }
        }
        return stringBuilder.toString()
    }
}