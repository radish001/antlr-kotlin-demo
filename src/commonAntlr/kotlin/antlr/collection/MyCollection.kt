package antlr.collection

/**
 * @ClassName MyCollection.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */

expect class MyTreeMap<K,V>(IgnoreCase: Boolean) : Map<K,V>{

    override var entries: Set<Map.Entry<K, V>>
    override var keys: Set<K>
    override var size: Int
    override var values: Collection<V>
    var ignoreCase : Boolean


    /*operator fun set(parameter: K, value: V)


    fun clear()

    constructor()

    constructor(ignoreCase : Boolean)*/
    override fun containsKey(key: K): Boolean

    override fun containsValue(value: V): Boolean

    override fun get(key: K): V?

    override fun isEmpty(): Boolean

    operator fun set(parameter: K, value: V)

    fun clear()


}