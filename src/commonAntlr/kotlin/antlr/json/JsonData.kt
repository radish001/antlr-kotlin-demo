package antlr.json

import antlr.data.CommonNumber

/**
 * @ClassName JsonData.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class JsonData: IJsonWrapper{



    var instanceArray: MutableList<JsonData?>? = null
    
    private var instanceBoolean = false
    
    private var instanceCommonNumber: CommonNumber? = null

    private var instanceObject: MutableMap<String, JsonData>? = null
    
    private var instanceString: String? = null
    
    private var type: JsonType? = null

    fun count(): Int {
        return ensureCollection()!!.size
    }

    override fun isArray(): Boolean {
        return type === JsonType.Array
    }

    override fun isBoolean(): Boolean {
        return type === JsonType.Boolean
    }

    override fun isDouble(): Boolean {
        return type === JsonType.Double
    }

    override fun isObject(): Boolean {
        return type === JsonType.Object
    }

    override fun isString(): Boolean {
        return type === JsonType.String
    }

    override fun isNull(): Boolean {
        return type === JsonType.Null
    }

    fun getChild(propName: String): JsonData? {
        ensureDictionary()
        return if (instanceObject!!.containsKey(propName)) {
            instanceObject!![propName]
        } else null
    }

    fun getChild(index: Int): JsonData? {
        ensureCollection()
        return if (type === JsonType.Array) instanceArray?.get(index) else null
    }

   

    override fun setBoolean(bool: Boolean) {
        type = JsonType.Boolean
        instanceBoolean = bool
    }





    override fun setString(str: String?) {
        type = JsonType.String
        instanceString = str
    }

    override fun setNull() {
        type = JsonType.Null
    }

    override fun add(value: IJsonWrapper?) {
        ensureList()!!.add(value as JsonData?)
    }

    override fun set(key: String?, value: IJsonWrapper?) {
        val data = value as JsonData
        ensureDictionary()!![key!!] = data
    }



    private fun ensureCollection(): Collection<*>? {
        return if (type === JsonType.Array) instanceArray else instanceObject as Collection<*>?
    }

    private fun ensureDictionary(): MutableMap<String, JsonData>? {
        if (type === JsonType.Object) return instanceObject
        type = JsonType.Object
        instanceObject = mutableMapOf()
      
        return instanceObject
    }

    private fun ensureList(): MutableList<JsonData?>? {
        if (type === JsonType.Array) return instanceArray
        type = JsonType.Array
        instanceArray = mutableListOf()
        return instanceArray
    }

    override fun setJsonType(type: JsonType?) {
        if (this.type === type) return
        when (type) {
            JsonType.None -> {}
            JsonType.Object -> instanceObject = mutableMapOf()
            JsonType.Array -> instanceArray = mutableListOf()
            JsonType.String -> instanceString = null
            JsonType.Double -> instanceCommonNumber = CommonNumber(0)
            JsonType.Boolean -> instanceBoolean = false
            else -> {}
        }
        this.type = type
    }


    fun booleanValue(): Boolean {
        return instanceBoolean
    }



    fun stringValue(): String? {
        return instanceString
    }


    override fun numberValue(): CommonNumber {
        return this.instanceCommonNumber!!
    }


    fun getInstanceObject(): MutableMap<String, JsonData>? {
        return this.instanceObject
    }


    fun setDouble(value: CommonNumber) {
        type = JsonType.Double
        instanceCommonNumber = value
    }

}