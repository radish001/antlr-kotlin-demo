package antlr.json

import antlr.data.MyNumber

/**
 * @ClassName JsonData.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class JsonData: IJsonWrapper{

    // todo  处理bigdecimal

    var inst_array: MutableList<JsonData?>? = null
    private var inst_boolean = false
   // private var inst_double: java.math.BigDecimal? = null
    var inst_object: MutableMap<String, JsonData>? = null
    private var inst_string: String? = null
    private var type: JsonType? = null
    // private IList<KeyValuePair<string, JsonData>> object_list;

    // private IList<KeyValuePair<string, JsonData>> object_list;
    fun Count(): Int {
        return EnsureCollection()!!.size
    }

    override fun IsArray(): Boolean {
        return type === JsonType.Array
    }

    override fun IsBoolean(): Boolean {
        return type === JsonType.Boolean
    }

    override fun IsDouble(): Boolean {
        return type === JsonType.Double
    }

    override fun IsObject(): Boolean {
        return type === JsonType.Object
    }

    override fun IsString(): Boolean {
        return type === JsonType.String
    }

    override fun IsNull(): Boolean {
        return type === JsonType.Null
    }

    fun GetChild(prop_name: String): JsonData? {
        EnsureDictionary()
        return if (inst_object!!.containsKey(prop_name)) {
            inst_object!![prop_name]
        } else null
    }

    fun GetChild(index: Int): JsonData? {
        EnsureCollection()
        return if (type === JsonType.Array) inst_array?.get(index) else null
    }

    fun JsonData() {}

    override fun SetBoolean(`val`: Boolean) {
        type = JsonType.Boolean
        inst_boolean = `val`
    }



    /*fun SetDouble(`val`: java.math.BigDecimal?) {
        type = JsonType.Double
        inst_double = `val`
    }*/

    override fun SetString(`val`: String?) {
        type = JsonType.String
        inst_string = `val`
    }

    override fun SetNull() {
        type = JsonType.Null
    }

    override fun Add(value: IJsonWrapper?) {
        EnsureList()!!.add(value as JsonData?)
    }

    override fun Set(key: String?, value: IJsonWrapper?) {
        val data = value as JsonData
        EnsureDictionary()!![key!!] = data
        // KeyValuePair<string, JsonData> entry = new KeyValuePair<string,
        // JsonData>((string)key, data);
        // object_list.Add(entry);
    }



    private fun EnsureCollection(): Collection<*>? {
        return if (type === JsonType.Array) inst_array else inst_object as Collection<*>?
    }

    private fun EnsureDictionary(): MutableMap<String, JsonData>? {
        if (type === JsonType.Object) return inst_object
        type = JsonType.Object
        inst_object = mutableMapOf<String, JsonData>()
        // object_list = new List<KeyValuePair<string, JsonData>>();
        return inst_object
    }

    private fun EnsureList(): MutableList<JsonData?>? {
        if (type === JsonType.Array) return inst_array
        type = JsonType.Array
        inst_array = mutableListOf<JsonData?>()
        return inst_array
    }

    override fun SetJsonType(type: JsonType?) {
        if (this.type === type) return
        when (type) {
            JsonType.None -> {}
            JsonType.Object -> inst_object = mutableMapOf<String, JsonData>()
            JsonType.Array -> inst_array = mutableListOf<JsonData?>()
            JsonType.String -> inst_string = null
            // todo  处理bigdecimal
            //JsonType.Double -> inst_double = java.math.BigDecimal(0)
            JsonType.Boolean -> inst_boolean = false
            else -> {}
        }
        this.type = type
    }


    fun BooleanValue(): Boolean {
        return inst_boolean
    }

   /* fun NumberValue(): java.math.BigDecimal? {
        return inst_double
    }*/

    fun StringValue(): String? {
        return inst_string
    }


    override fun NumberValue(): MyNumber {
        TODO("Not yet implemented")
    }

}