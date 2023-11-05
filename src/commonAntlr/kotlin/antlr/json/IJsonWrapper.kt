package antlr.json

import antlr.expect.CommonNumber

/**
 * @ClassName IJsonWrapper.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
interface IJsonWrapper {

    fun isArray(): Boolean
    fun isBoolean(): Boolean
    fun isDouble(): Boolean
    fun isObject(): Boolean
    fun isString(): Boolean
    fun isNull(): Boolean

    fun setBoolean(boolean: Boolean)
   // fun SetDouble(`val`: java.math.BigDecimal?)
    fun setJsonType(type: JsonType?)
    fun setString(`val`: String?)
    fun setNull()

    fun add(json: IJsonWrapper?)

    fun set(key: String?, json: IJsonWrapper?)
    fun numberValue(): CommonNumber
}