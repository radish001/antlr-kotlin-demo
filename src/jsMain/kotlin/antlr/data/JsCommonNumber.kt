package antlr.data

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class CommonNumber {


    private var value = NpmBigNumber("0")




    actual constructor() {
        this.value = NpmBigNumber("0")
    }

    actual constructor(number: Number) {
        this.value = NpmBigNumber(number)
    }

    actual constructor(str: String) {
        this.value = NpmBigNumber(str)
    }

    actual companion object {
        actual fun zero(): CommonNumber {
            return CommonNumber(0)
        }
    }

    actual fun compareTo(commonNumber: CommonNumber): Int {
        return value.comparedTo(commonNumber.value)
    }

    actual fun toInt(): Int {
         return value.toPrecision(null, null).toInt()
    }

    actual fun toDouble(): Double {
        return value.toPrecision(null, null).toDouble()
    }

    actual fun toLong(): Long {
        return value.toPrecision(null, null).toLong()
    }

    actual fun doubleValue(): Double {
        return value.toPrecision(null, null).toDouble()
    }

    actual fun add(numberValue: CommonNumber): CommonNumber {
        val res = value.plus(numberValue.value).toPrecision(null ,null)
        return CommonNumber(res)
    }

    actual fun subtract(numberValue: CommonNumber): CommonNumber {
        val res = value.minus(numberValue.value).toPrecision(null , null)
        return CommonNumber(res)
    }

    actual fun multiply(commonNumber: CommonNumber): CommonNumber {
        val res = value.multipliedBy(commonNumber.value).toPrecision(null , null)
        return CommonNumber(res)
    }





    actual fun divide(divisor: CommonNumber, rounding: RoundingMode): CommonNumber {
        val res = value.dividedBy(divisor!!.value).toPrecision(null , rounding.value)
        return CommonNumber(res)
    }

    actual fun setScale(scale: Int, rounding: RoundingMode): CommonNumber {
        val res = value.decimalPlaces(scale, rounding.value).toPrecision(null, null)
        return CommonNumber(res)
    }


    actual fun divide(divisor: CommonNumber, scale: Int, rounding: RoundingMode): CommonNumber {
        return this.divide(divisor, rounding).setScale(scale, rounding)
    }


}