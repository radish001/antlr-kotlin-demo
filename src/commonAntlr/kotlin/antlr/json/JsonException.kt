package antlr.json

/**
 * @ClassName JsonException.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-11-02
 * Copyright (C) 2022 HOSE
 */
class JsonException : Exception {
    /**
     *
     */
    private val serialVersionUID = 1L

    constructor(token: ParserToken?, innerException: Exception?) {

    }

    constructor(c: Int) {

    }

    constructor(message: String?) {

    }
}