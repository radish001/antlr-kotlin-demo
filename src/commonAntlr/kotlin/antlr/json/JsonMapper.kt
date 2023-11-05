package antlr.json

import antlr.expect.CommonNumber

/**
 * @ClassName JsonMapper.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class JsonMapper {
    companion object {

        fun readValue(reader: JsonReader): JsonData?{
            reader.read()
            if (reader.token() === JsonToken.ArrayEnd){
                return null
            }
            val instance = JsonData()

            if (reader.token() === JsonToken.String) {
                instance.setString(reader.getValue() as String)
                return instance
            }

            if (reader.token() === JsonToken.Double) {
                instance.setDouble(reader.getValue() as CommonNumber)
                return instance
            }

            if (reader.token() === JsonToken.Boolean) {
                instance.setBoolean(reader.getValue() as Boolean)
                return instance
            }
            if (reader.token() === JsonToken.Null) {
                instance.setNull()
                return instance
            }


            if (reader.token() === JsonToken.ArrayStart) {
                instance.setJsonType(JsonType.Array)
                while (true) {
                    val item: JsonData? = readValue(reader)
                    if (item == null && reader.token() === JsonToken.ArrayEnd) break
                    instance.add(item as IJsonWrapper)
                }
            } else if (reader.token() === JsonToken.ObjectStart) {
                instance.setJsonType(JsonType.Object)
                while (true) {
                    reader.read()
                    if (reader.token() === JsonToken.ObjectEnd) break
                    instance.set(reader.getValue() as String, readValue(reader) as IJsonWrapper)
                }
            }

            return instance
        }




        fun toObject(json: String): JsonData? {
            val reader = JsonReader(json)
            return readValue(reader)
        }
    }
}