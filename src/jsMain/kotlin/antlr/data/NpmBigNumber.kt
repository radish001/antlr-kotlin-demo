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
external class NpmBigNumber(value: String) {

    constructor(number: Number)



    fun toPrecision(precision:Int?, roundingMode : Int?): String


    fun plus(npmBigNumber: NpmBigNumber) : NpmBigNumber


    fun minus(npmBigNumber: NpmBigNumber): NpmBigNumber


    fun dividedBy(npmBigNumber: NpmBigNumber) : NpmBigNumber



    /**
     * 获取指定小数位的数字
     * @param decimalPlaces 小数位数
     * @param roundingMode 舍入模式
     */
    fun decimalPlaces(decimalPlaces: Int, roundingMode : Int): NpmBigNumber




    fun comparedTo(npmBigNumber: NpmBigNumber) : Int
}