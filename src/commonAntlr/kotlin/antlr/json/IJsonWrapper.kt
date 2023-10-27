package antlr.json

import antlr.data.MyNumber

/**
 * @ClassName IJsonWrapper.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
interface IJsonWrapper {


    fun IsArray(): Boolean
    fun IsBoolean(): Boolean
    fun IsDouble(): Boolean
    fun IsObject(): Boolean
    fun IsString(): Boolean
    fun IsNull(): Boolean

    fun SetBoolean(`val`: Boolean)
   // fun SetDouble(`val`: java.math.BigDecimal?)
    fun SetJsonType(type: JsonType?)
    fun SetString(`val`: String?)
    fun SetNull()

    fun Add(`val`: IJsonWrapper?)

    fun Set(key: String?, `val`: IJsonWrapper?)
    fun NumberValue(): MyNumber
}