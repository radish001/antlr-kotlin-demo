package antlr.collection

import java.lang.String
import java.util.*
import kotlin.collections.HashMap

/**
 * @ClassName MyCollection.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */
/**
 * @ClassName MyCollection.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */

actual class CommonTreeMap<V> : Map<kotlin.String, V> {



    private  var treeMap : MutableMap<kotlin.String, V>

    actual constructor(ignoreCase: Boolean) {
        if(ignoreCase){
            this.treeMap = mutableMapOf<kotlin.String, V>().toSortedMap(kotlin.String.CASE_INSENSITIVE_ORDER)
        }else{
            this.treeMap = mutableMapOf<kotlin.String, V>().toSortedMap()
        }

    }

    actual override var entries: Set<Map.Entry<kotlin.String, V>>
        get() = treeMap.entries
        set(value) {}
    actual override var keys: Set<kotlin.String>
        get() = treeMap.keys
        set(value) {}
    actual override var size: Int
        get() = treeMap.size
        set(value) {}
    actual override var values: Collection<V>
        get() = treeMap.values
        set(value) {}

    actual override fun isEmpty(): Boolean {
        return treeMap.isEmpty()
    }

    actual override fun get(key: kotlin.String): V? {
        return treeMap[key]
    }

    actual override fun containsValue(value: V): Boolean {
        return treeMap.containsValue(value)
    }

    actual override fun containsKey(key: kotlin.String): Boolean {
        return treeMap.containsKey(key)
    }


    actual operator fun set(key: kotlin.String, value: V) {
        treeMap[key] = value
    }

    actual fun clear() {
        treeMap.clear()
    }


}