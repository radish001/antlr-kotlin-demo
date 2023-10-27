package antlr.collection

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

actual class MyTreeMap<K, V> : Map<K, V> {
    actual override var entries: Set<Map.Entry<K, V>>
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var keys: Set<K>
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var size: Int
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var values: Collection<V>
        get() = TODO("Not yet implemented")
        set(value) {}
    actual var ignoreCase: Boolean
        get() = TODO("Not yet implemented")
        set(value) {}

    actual constructor(IgnoreCase: Boolean) {
        TODO("Not yet implemented")
    }

    actual override fun containsKey(key: K): Boolean {
        TODO("Not yet implemented")
    }

    actual override fun containsValue(value: V): Boolean {
        TODO("Not yet implemented")
    }

    actual override fun get(key: K): V? {
        TODO("Not yet implemented")
    }

    actual override fun isEmpty(): Boolean {
        TODO("Not yet implemented")
    }

    actual operator fun set(parameter: K, value: V) {
    }

    actual fun clear() {
    }


}