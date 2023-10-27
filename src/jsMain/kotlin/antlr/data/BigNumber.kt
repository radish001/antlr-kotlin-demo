package antlr.data

/**
 * @ClassName MyNumberNpm.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-27
 * Copyright (C) 2022 HOSE
 */
@JsModule("bignumber.js")
@JsNonModule
external class BigNumber(value: String) {

    constructor(number: Number)



    fun toFixed(): String


    fun plus(bigNumber: BigNumber) : BigNumber


    fun minus(bigNumber: BigNumber): BigNumber


}