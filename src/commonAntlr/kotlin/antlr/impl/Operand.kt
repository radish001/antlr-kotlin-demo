package antlr.impl

import antlr.data.CommonDate
import antlr.data.CommonNumber
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

    companion object {
        /**
         * 静态创建方法
         */
        fun create(bool: Boolean): Operand {
            return OperandBoolean(bool)
        }

        fun create(short: Short): Operand {
            return OperandNumber(CommonNumber(short))
        }

        fun create(int: Int): Operand {
            return OperandNumber(CommonNumber(int))
        }

        fun create(long: Long): Operand {
            return OperandNumber(CommonNumber(long))
        }

        fun create(float: Float): Operand {
            return OperandNumber(CommonNumber(float))
        }

        fun create(double: Double): Operand {
            return OperandNumber(CommonNumber(double))
        }


        fun create(commonNumber: CommonNumber): Operand {
            return OperandNumber(commonNumber)
        }

        fun create(str: String): Operand {
            return OperandString(str)
        }


        fun createJson(txt: String): Operand {
            if (txt.startsWith("{") && txt.endsWith("}") || txt.startsWith("[") && txt.endsWith("]")) {
                try {
                    val json: JsonData = JsonMapper.toObject(txt) as JsonData
                    return create(json)
                } catch (e: Exception) {
                    return error("string to json is error!")
                }
            }
            return error("string to json is error!")
        }

        fun create(obj: CommonDate): Operand {
            return OperandDate(obj)
        }


        fun create(json: JsonData): Operand {
            return OperandJson(json)
        }

        fun create(list: List<Operand>): Operand {
            return OperandArray(list)
        }

        fun error(msg: String?): Operand {
            return OperandError(msg!!)
        }

        fun createNull(): Operand {
            return OperandNull()
        }
    }


    open fun isNull(): Boolean {
        return false
    }

    open fun isError(): Boolean {
        return false
    }

    open fun errorMsg(): String? {
        return null
    }

    open fun type(): OperandType {
        return OperandType.ERROR
    }

    open fun numberValue(): CommonNumber? {
        return null
    }

    open fun doubleValue(): Double {
        return 0.0
    }

    open fun intValue(): Int {
        return 0
    }

    open fun longValue(): Long {
        return 0L
    }

    open fun getOperandValue(): Any? {
        return null
    }

    open fun textValue(): String? {
        return null
    }

    open fun booleanValue(): Boolean {
        return false
    }

    open fun arrayValue(): List<Operand>? {
        return null
    }

    open fun jsonValue(): JsonData? {
        return null
    }

    open fun dateValue(): CommonDate? {
        return null
    }


    open fun toNumber(errorMessage: String?): Operand {
        return error(errorMessage)
    }

    open fun toBoolean(errorMessage: String?): Operand {
        return error(errorMessage)
    }

    open fun toText(errorMessage: String?): Operand {
        return error(errorMessage)
    }

    open fun toDate(errorMessage: String?): Operand {
        return error(errorMessage)
    }

    open fun toJson(errorMessage: String?): Operand {
        return error(errorMessage)
    }

    open fun toArray(errorMessage: String?): Operand {
        return error(errorMessage)
    }


    internal abstract class OperandT<T>(protected var value: T) : Operand() {
        override fun getOperandValue(): T {
            return value
        }
    }


    internal class OperandArray(obj: List<Operand>) : OperandT<List<Operand>>(obj) {
        override fun type(): OperandType {
            return OperandType.ARRAY
        }

        override fun arrayValue(): List<Operand>? {
            return value
        }

        override fun toArray(errorMessage: String?): Operand {
            return this
        }
    }


    internal class OperandBoolean(obj: Boolean) : OperandT<Boolean>(obj) {
        override fun type(): OperandType {
            return OperandType.BOOLEAN
        }

        override fun booleanValue(): Boolean {
            return value
        }

        override fun toNumber(errorMessage: String?): Operand {
            return if (booleanValue()) create(1) else create(0)
        }

        override fun toBoolean(errorMessage: String?): Operand {
            return this
        }

        override fun toText(errorMessage: String?): Operand {
            return create(if (booleanValue()) "TRUE" else "FALSE")
        }

        override fun toArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to array error!"
            }
            return error(errorMessage)
        }

        override fun toJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to json error!"
            }
            return error(errorMessage)
        }

        override fun toDate(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert bool to date error!"
            }
            return error(errorMessage)
        }
    }


    internal class OperandDate(obj: CommonDate) : OperandT<CommonDate?>(obj) {
        override fun type(): OperandType {
            return OperandType.DATE
        }

        override fun dateValue(): CommonDate? {
            return value
        }

        override fun toNumber(errorMessage: String?): Operand {
            return create(dateValue()?.toNumber()!!)
        }

        override fun toBoolean(errorMessage: String?): Operand {
            return if (dateValue()?.toNumber()!!.compareTo(CommonNumber.zero()) !== 0) create(true) else create(false)
        }

        override fun toText(errorMessage: String?): Operand {
            return create(dateValue().toString())
        }

        override fun toDate(errorMessage: String?): Operand {
            return this
        }

        override fun toArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert date to array error!"
            }
            return error(errorMessage)
        }

        override fun toJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert date to json error!"
            }
            return error(errorMessage)
        }
    }


    internal class OperandError(msg: String) : OperandT<String>(msg) {
        override fun type(): OperandType {
            return OperandType.ERROR
        }

        override fun isError(): Boolean {
            return true
        }

        override fun errorMsg(): String? {
            return value
        }

        override fun toNumber(errorMessage: String?): Operand {
            return this
        }

        override fun toBoolean(errorMessage: String?): Operand {
            return this
        }

        override fun toText(errorMessage: String?): Operand {
            return this
        }

        override fun toArray(errorMessage: String?): Operand {
            return this
        }

        override fun toJson(errorMessage: String?): Operand {
            return this
        }

        override fun toDate(errorMessage: String?): Operand {
            return this
        }
    }


    internal class OperandJson(obj: JsonData) : OperandT<JsonData>(obj) {
        override fun type(): OperandType {
            return OperandType.JSON
        }

        override fun jsonValue(): JsonData? {
            return value
        }

        override fun toJson(errorMessage: String?): Operand {
            return this
        }

        override fun toArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (jsonValue()?.isArray()!!) {
                val list: MutableList<Operand> = mutableListOf()
                for (v in jsonValue()!!.instanceArray!!) {
                    if (v!!.isString()) list.add(create(v.stringValue()!!)) else if (v.isBoolean()) list.add(create(v.booleanValue())) else if (v.isDouble()) list.add(
                        create(v.numberValue())
                    ) else if (v.isNull()) list.add(createNull()) else list.add(create(v))
                }
                return create(list)
            }
            if (errorMessage == null) {
                errorMessage = "Convert json to array error!"
            }
            return error(errorMessage)
        }

        override fun toBoolean(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to bool error!"
            }
            return error(errorMessage)
        }

        override fun toDate(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to date error!"
            }
            return error(errorMessage)
        }

        override fun toNumber(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert json to number error!"
            }
            return error(errorMessage)
        }

        override fun toText(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to string error!"
            }
            return error(errorMessage)
        }
    }


    internal class OperandNull : Operand() {
        override fun type(): OperandType {
            return OperandType.NULL
        }

        override fun isNull(): Boolean {
            return true
        }
    }


    internal class OperandNumber(obj: CommonNumber) : OperandT<CommonNumber>(obj) {
        override fun type(): OperandType {
            return OperandType.NUMBER
        }

        override fun intValue(): Int {
            return value.toInt()
        }

        override fun numberValue(): CommonNumber {
            return value
        }

        override fun doubleValue(): Double {
            return value.toDouble()
        }

        override fun longValue(): Long {
            return value.toLong()
        }

        override fun toNumber(errorMessage: String?): Operand {
            return this
        }

        override fun toBoolean(errorMessage: String?): Operand {
            return if (numberValue().compareTo(CommonNumber.zero()) != 0) create(true) else create(false)
        }

        override fun toText(errorMessage: String?): Operand {
            var str = (numberValue().toDouble() as Double).toString()
            if (str.contains(".")) {
                //  todo 待测试
                str = str.replace(Regex(pattern = "(\\.)?0+$"), "")
            }
            return create(str)
        }

        override fun toDate(errorMessage: String?): Operand {
            return create(CommonDate(numberValue()))
        }

        override fun toArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to array error!"
            }
            return error(errorMessage)
        }

        override fun toJson(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert number to json error!"
            }
            return error(errorMessage)
        }
    }


    internal class OperandString(obj: String) : OperandT<String>(obj) {
        override fun type(): OperandType {
            return OperandType.TEXT
        }

        override fun textValue(): String {
            return value
        }

        override fun toNumber(errorMessage: String?): Operand {
            try {
                val d = CommonNumber(textValue())
                return create(d)
            } catch (e: Exception) {
                return errorMessage?.let { error(it) } ?: error("Convert string to number error!")
            }
            return errorMessage?.let { error(it) } ?: error("Convert string to number error!")
        }

        override fun toText(errorMessage: String?): Operand {
            return this
        }

        override fun toBoolean(errorMessage: String?): Operand {
            if (textValue().lowercase() == "true" || textValue().lowercase() == "yes") {
                return create(true)
            }
            if (textValue().lowercase() == "false" || textValue().lowercase() == "no") {
                return create(false)
            }
            if (textValue() == "1" || textValue() == "是" || textValue() == "有") {
                return create(true)
            }
            return if (textValue() == "0" || textValue() == "否" || textValue() == "不是" || textValue() == "无" || textValue() == "没有") {
                create(false)
            } else errorMessage?.let { error(it) } ?: error("Convert string to bool error!")
        }

        override fun toDate(errorMessage: String?): Operand {
            val date = CommonDate.parse(textValue())
            return if (date != null) {
                create(date)
            } else errorMessage?.let { error(it) } ?: error("Convert string to date error!")
        }

        override fun toJson(errorMessage: String?): Operand {
            val txt = textValue()
            if (txt.startsWith("{") && txt.endsWith("}") || txt.startsWith("[") && txt.endsWith("]")) {
                try {
                    val json: JsonData = JsonMapper.toObject(txt)!!
                    return create(json)
                } catch (e: Exception) {
                    return errorMessage?.let { error(it) } ?: error("Convert string to json error!")
                }
            }
            return errorMessage?.let { error(it) } ?: error("Convert string to json error!")
        }

        override fun toArray(errorMessage: String?): Operand {
            var errorMessage = errorMessage
            if (errorMessage == null) {
                errorMessage = "Convert string to array error!"
            }
            return error(errorMessage)
        }
    }

}