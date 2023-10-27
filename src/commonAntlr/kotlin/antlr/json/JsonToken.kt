package antlr.json

/**
 * @ClassName JsonToken.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
enum class JsonToken(val value: Int) {
    None(1),
    ObjectStart(2),
    PropertyName(3),
    ObjectEnd(4),
    ArrayStart(5),
    ArrayEnd(6),
    Double(7),
    String(8),
    Boolean(9),
    Null(10)
}