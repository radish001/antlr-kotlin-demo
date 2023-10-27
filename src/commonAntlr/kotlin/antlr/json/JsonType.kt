package antlr.json

/**
 * @ClassName JsonType.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
enum class JsonType(val value: Int) {
    None(1),
    Object(2),
    Array(3),
    String(4),
    Double(5),
    Boolean(6),
    Null(7)

}