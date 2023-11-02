package antlr.collection

/**
 * @ClassName MyCollection.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */


actual class CommonTreeMap<V> : Map<String, V> {
    actual override var entries: Set<Map.Entry<String, V>>
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var keys: Set<String>
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var size: Int
        get() = TODO("Not yet implemented")
        set(value) {}
    actual override var values: Collection<V>
        get() = TODO("Not yet implemented")
        set(value) {}

    actual override fun isEmpty(): Boolean {
        TODO("Not yet implemented")
    }

    actual override fun get(key: String): V? {
        TODO("Not yet implemented")
    }

    actual override fun containsValue(value: V): Boolean {
        TODO("Not yet implemented")
    }

    actual override fun containsKey(key: String): Boolean {
        TODO("Not yet implemented")
    }

    actual operator fun set(key: String, value: V) {
    }

    actual fun clear() {
    }

    actual constructor(ignoreCase: Boolean) {
        TODO("Not yet implemented")
    }


}