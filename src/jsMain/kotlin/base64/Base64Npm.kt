package org.jetbrains.base64

/**
 * @ClassName Base64Npm.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-09-27
 * Copyright (C) 2022 HOSE
 */
@JsModule("base-64")
@JsNonModule
external object Base64 {
    fun encode(s: String): String
}



