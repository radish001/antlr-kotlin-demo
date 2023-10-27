package antlr.impl

import antlr.data.MyDate
import antlr.data.MyNumber
import antlr.json.JsonData
import antlr.json.JsonMapper

/**
 * @ClassName Operand.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
abstract class Operand {
   // val True: Operand = OperandBoolean(true)
   // val False: Operand = OperandBoolean(false)
   // val One: Operand = Create(1)
   // val Zero: Operand = Create(0)



    companion object {
        fun Create(obj: Boolean): Operand {
            return OperandBoolean(obj)
        }

        fun Create(obj: Short): Operand {
            return OperandNumber(MyNumber())
        }

        fun Create(obj: Int): Operand {
            return OperandNumber(MyNumber())
        }

        fun Create(obj: Long): Operand {
            return OperandNumber(MyNumber())
        }

        fun Create(obj: Float): Operand {
            return OperandNumber(MyNumber())
        }

        fun Create(obj: Double): Operand {
            return OperandNumber(MyNumber())
        }
        // todo 处理bigdecimal
        fun Create(obj: MyNumber): Operand {
            return OperandNumber(obj)
        }

        fun Create(obj: String?): Operand {
            return obj?.let { OperandString(it) } ?: CreateNull()
        }

        // todo 处理json
        /* fun CreateJson(txt: String): Operand {
             if (txt.startsWith("{") && txt.endsWith("}") || txt.startsWith("[") && txt.endsWith("]")) {
                 try {
                     val json: JsonData = JsonMapper.ToObject(txt) as JsonData
                     return Create(json)
                 } catch (e: java.lang.Exception) {
                 }
             }
             return Error("string to json is error!")
         }*/

        fun Create(obj: MyDate): Operand {
            return OperandDate(obj)
        }

        // todo 处理日期
        /*fun Create(obj: DateTime?): Operand {
            return OperandDate(MyDate(obj))
        }*/

        // todo 处理日期
        /*fun Create(obj: java.util.Date?):Operand {
            return OperandDate(MyDate(obj))
        }*/

        fun Create(obj: JsonData): Operand {
            return OperandJson(obj)
        }

        fun Create(obj: List<Operand>):Operand {
            return OperandArray(obj)
        }

        fun Error(msg: String?): Operand {
            return OperandError(msg)
        }

        fun CreateNull(): Operand {
            return OperandNull()
        }
    }

    open fun IsNull(): Boolean {
        return false
    }

    open fun IsError(): Boolean {
        return false
    }

    open fun ErrorMsg(): String? {
        return null
    }

    open fun Type(): OperandType {
        return OperandType.ERROR
    }

    open fun NumberValue(): MyNumber? {
        return null
    }

    open fun DoubleValue(): Double {
        return 0.0
    }

    open fun IntValue(): Int {
        return 0
    }

    open fun LongValue(): Long {
        return 0
    }

    open fun Value(): Any? {
        return null
    }

    open fun TextValue(): String? {
        return null
    }

    open fun BooleanValue(): Boolean {
        return false
    }

    open fun ArrayValue(): List<Operand>? {
        return null
    }

    open fun JsonValue(): JsonData? {
        return null
    }

    open fun DateValue(): MyDate? {
        return null
    }



    open fun ToNumber(errorMessage: String?): Operand {
        return Error(errorMessage)
    }

    open fun ToBoolean(errorMessage: String?): Operand {
        return Error(errorMessage)
    }

    open fun ToText(errorMessage: String?): Operand {
        return Error(errorMessage)
    }

    open fun ToDate(errorMessage: String?): Operand {
        return Error(errorMessage)
    }

    open fun ToJson(errorMessage: String?): Operand {
        return Error(errorMessage)
    }

    open fun ToArray(errorMessage: String?):Operand {
        return Error(errorMessage)
    }


    internal abstract class OperandT<T>(protected var value: T) : Operand() {

        override fun Value(): T {
            return value
        }
    }


    internal class OperandArray(obj: List<Operand>) : OperandT<List<Operand>?>(obj) {
        override fun Type(): OperandType {
            return OperandType.ARRARY
        }

        override fun ArrayValue(): List<Operand>? {
            return value
        }

        override fun ToArray(errorMessage: String?): Operand {
            return this
        }
    }


    internal class OperandBoolean(obj: Boolean) : OperandT<Boolean?>(obj) {
        override fun Type(): OperandType {
            return OperandType.BOOLEAN
        }

        override fun BooleanValue(): Boolean {
            return value!!
        }

        override fun ToNumber(errorMessage: String?): Operand {
            return if (BooleanValue()) Create(1) else Create(0)
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            return this
        }

        override fun ToText(errorMessage: String?): Operand {
            return Create(if (BooleanValue()) "TRUE" else "FALSE")
        }

        override fun ToArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to array error!"
            }
            return Error(errorMessage)
        }

        override fun ToJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to json error!"
            }
            return Error(errorMessage)
        }

        override fun ToDate(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to date error!"
            }
            return Error(errorMessage)
        }
    }


    internal class OperandDate(obj: MyDate) : OperandT<MyDate?>(obj) {
        override fun Type(): OperandType {
            return OperandType.DATE
        }

        override fun DateValue(): MyDate? {
            return value
        }

        override fun ToNumber(errorMessage: String?): Operand {
            return Create(DateValue()?.ToNumber()!!)
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            return if (DateValue()?.ToNumber()!!.compareTo(MyNumber.zero()) !== 0) Create(true) else Create(false)
        }

        override fun ToText(errorMessage: String?): Operand {
            return Create(DateValue().toString())
        }

        override fun ToDate(errorMessage: String?): Operand {
            return this
        }

        override fun ToArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert date to array error!"
            }
            return Error(errorMessage)
        }

        override fun ToJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert date to json error!"
            }
            return Error(errorMessage)
        }
    }


    internal class OperandError(private val _errorMsg: String?) : Operand() {
        override fun Type(): OperandType {
            return OperandType.ERROR
        }

        override fun IsError(): Boolean {
            return true
        }

        override fun ErrorMsg(): String? {
            return _errorMsg
        }

        override fun ToNumber(errorMessage: String?): Operand {
            return this
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            return this
        }

        override fun ToText(errorMessage: String?): Operand {
            return this
        }

        override fun ToArray(errorMessage: String?): Operand {
            return this
        }

        override fun ToJson(errorMessage: String?):Operand {
            return this
        }

        override fun ToDate(errorMessage: String?): Operand {
            return this
        }
    }


    internal class OperandJson(obj: JsonData) : OperandT<JsonData?>(obj) {
        override fun Type(): OperandType {
            return OperandType.JSON
        }

        override fun JsonValue(): JsonData? {
            return value
        }

        override fun ToJson(errorMessage: String?): Operand {
            return this
        }

        override fun ToArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (JsonValue()?.IsArray()!!) {
                val list: MutableList<Operand> = mutableListOf()
                for (v in JsonValue()!!.inst_array!!) {
                    if (v!!.IsString()) list.add(Create(v.StringValue())) else if (v.IsBoolean()) list.add(Create(v.BooleanValue())) else if (v.IsDouble()) list.add(
                        Create(v.NumberValue())
                    ) else if (v.IsNull()) list.add(CreateNull()) else list.add(Create(v))
                }
                return Create(list)
            }
            if (errorMessage == null) {
                errorMessage = "Convert json to array error!"
            }
            return Error(errorMessage)
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to bool error!"
            }
            return Error(errorMessage)
        }

        override fun ToDate(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to date error!"
            }
            return Error(errorMessage)
        }

        override fun ToNumber(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to number error!"
            }
            return Error(errorMessage)
        }

        override fun ToText(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to string error!"
            }
            return Error(errorMessage)
        }
    }


    internal class OperandNull : Operand() {
        override fun Type(): OperandType {
            return OperandType.NULL
        }

        override fun IsNull(): Boolean {
            return true
        }
    }


    internal class OperandNumber(obj: MyNumber) : OperandT<MyNumber>(obj) {
        override fun Type(): OperandType {
            return OperandType.NUMBER
        }

        override fun IntValue(): Int {
            return value.toInt()
        }

        override fun NumberValue(): MyNumber{
            return value
        }

        override fun DoubleValue(): Double {
            return value.toDouble()
        }

        override fun LongValue(): Long {
            return value.toLong()
        }

        override fun ToNumber(errorMessage: String?): Operand {
            return this
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            return if (NumberValue().compareTo(MyNumber.zero()) != 0) Create(true) else Create(false)
        }

        override fun ToText(errorMessage: String?): Operand {
            var str = (NumberValue().toDouble() as Double).toString()
            if (str.contains(".")) {
                // todo 处理正则
                // str = java.util.regex.Pattern.compile("(\\.)?0+$").matcher(str).replaceAll("")
            }
            return Create(str)
        }

        override fun ToDate(errorMessage: String?): Operand {
            return Create(MyDate(NumberValue()))
        }

        override fun ToArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to array error!"
            }
            return Error(errorMessage)
        }

        override fun ToJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to json error!"
            }
            return Error(errorMessage)
        }
    }






    internal class OperandString(obj: String) : OperandT<String>(obj) {
        override fun Type(): OperandType {
            return OperandType.TEXT
        }

        override fun TextValue(): String {
            return value
        }

        override fun ToNumber(errorMessage: String?): Operand {
            try {
                val d = MyNumber(TextValue())
                return Create(d)
            } catch (e: Exception) {
            }
            return errorMessage?.let { Error(it) } ?: Error("Convert string to number error!")
        }

        override fun ToText(errorMessage: String?): Operand {
            return this
        }

        override fun ToBoolean(errorMessage: String?): Operand {
            if (TextValue().lowercase() == "true" || TextValue().lowercase() == "yes") {
                return Create(true)
            }
            if (TextValue().lowercase() == "false" || TextValue().lowercase() == "no") {
                return Create(false)
            }
            if (TextValue() == "1" || TextValue() == "是" || TextValue() == "有") {
                return Create(true)
            }
            return if (TextValue() == "0" || TextValue() == "否" || TextValue() == "不是" || TextValue() == "无" || TextValue() == "没有") {
                Create(false)
            } else errorMessage?.let { Error(it) } ?: Error("Convert string to bool error!")
        }

        override fun ToDate(errorMessage: String?): Operand {
            val date = MyDate.parse(TextValue())
            return if (date != null) {
                Create(date)
            } else errorMessage?.let { Error(it) } ?: Error("Convert string to date error!")
        }

        override fun ToJson(errorMessage: String?): Operand {
            val txt = TextValue()
            if (txt.startsWith("{") && txt.endsWith("}") || txt.startsWith("[") && txt.endsWith("]")) {
                try {
                    val json: JsonData = JsonMapper.ToObject(txt)
                    return Create(json)
                } catch (e: Exception) {
                    e.stackTraceToString()
                }
            }
            return errorMessage?.let { Error(it) } ?: Error("Convert string to json error!")
        }

        override fun ToArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert string to array error!"
            }
            return Error(errorMessage)
        }
    }

}