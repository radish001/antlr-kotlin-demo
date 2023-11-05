package antlr.util


/**
 * @ClassName StringUtil.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */
class CommonStringReader  {
    private var str: String? = null
    private var length: Int = 0
    private var next: Int = 0
    private val mark: Int = 0

    constructor(str:String){
        this.str = str;
        this.length = str.length
    }



    @Throws(Exception::class)
    private fun ensureOpen() {
        if (str == null) throw Exception("Stream closed")
    }


    @Throws(Exception::class)
    fun read(): Int {
        ensureOpen()
        return if (next >= length) -1 else str!![next++].code
    }


     fun close() {
        str = null
    }


}