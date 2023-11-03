package antlr.data

/**
 * @ClassName SimpleMap.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description 简单包装一个map，key为String， 可设置为大小写敏感
 * @createTime 2023-11-03
 * Copyright (C) 2022 HOSE
 */
class SimpleMapWrapper<V>(private val ignoreCase: Boolean): MutableMap<String,V>  {


    private val map : MutableMap<String, V> = mutableMapOf()


    override val entries: MutableSet<MutableMap.MutableEntry<String, V>>
        get() = this.map.entries
    override val keys: MutableSet<String>
        get() = this.map.keys
    override val size: Int
        get() = this.map.size
    override val values: MutableCollection<V>
        get() = this.map.values

    override fun clear() {
        this.map.clear()
    }

    override fun isEmpty(): Boolean {
        return this.map.isEmpty()
    }

    override fun remove(key: String): V? {
        return this.map.remove(decideKey(key))

    }

    override fun putAll(from: Map<out String, V>) {
        from.entries.forEach { entity -> this.map[decideKey(entity.key)] = entity.value }
    }

    override fun put(key: String, value: V): V? {
        this.map[decideKey(key)] = value
        return value
    }

    override fun get(key: String): V? {
        return this.map[decideKey(key)]
    }

    override fun containsValue(value: V): Boolean {
       return this.map.containsValue(value)
    }

    override fun containsKey(key: String): Boolean {
        return this.map.containsKey(decideKey(key))
    }


    /**
     * 判断key是否大小写敏感，如果大小写敏感同意转为大写处理
     */
    private fun decideKey(key: String): String{
        if(ignoreCase){
            return key.uppercase()
        }else{
            return key
        }
    }

}