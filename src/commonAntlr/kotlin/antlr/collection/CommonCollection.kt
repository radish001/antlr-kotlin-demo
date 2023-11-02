package antlr.collection

/**
 * @ClassName MyCollection.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */

expect class CommonTreeMap<V> : Map<String,V>{


    constructor(ignoreCase : Boolean)


    override var entries: Set<Map.Entry<String, V>>


    override var keys: Set<String>


    override var size: Int


    override var values: Collection<V>





    override fun containsKey(key: String): Boolean

    override fun containsValue(value: V): Boolean

    override fun get(key: String): V?

    override fun isEmpty(): Boolean

    operator fun set(key: String, value: V)

    fun clear()




}