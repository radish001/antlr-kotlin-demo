
package org.jetbrains.base64

import kotlin.test.Test
import kotlin.test.assertEquals


/**
 * @ClassName Base64Test.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-09-27
 * Copyright (C) 2022 HOSE
 */

class Base64Test {
    @Test
    fun testEncodeToString() {
        checkEncodeToString("Kotlin is awesome", "S290bGluIGlzIGF3ZXNvbWU=")
    }

    @Test
    fun testPaddedStrings() {
        checkEncodeToString("", "")
        checkEncodeToString("1", "MQ==")
        checkEncodeToString("22", "MjI=")
        checkEncodeToString("333", "MzMz")
        checkEncodeToString("4444", "NDQ0NA==")
    }


    @Test
    fun testReturnString(){
        val encoder = Base64Factory.createEncoder()
       val res = encoder.testCommonString("123")
        assertEquals("123", res)
    }








    private fun checkEncodeToString(input: String, expectedOutput: String) {
        assertEquals(expectedOutput, Base64Factory.createEncoder().encodeToString(input.asciiToByteArray()))
    }

    private fun String.asciiToByteArray() = ByteArray(length) {
        get(it).code.toByte()
    }
}
