package antlr.expect

import java.math.BigDecimal

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class CommonNumber {
    private var value : BigDecimal = BigDecimal.valueOf(0)


    actual constructor()

    actual constructor(number: Number) {
        this.value = BigDecimal(number.toLong())
    }

    actual constructor(str: String) {
        this.value = BigDecimal(str)
    }

    actual companion object {
        actual fun zero(): CommonNumber {
            return CommonNumber(0)
        }
    }

    actual fun compareTo(commonNumber: CommonNumber): Int {
        return this.value.compareTo(commonNumber.value)
    }

    actual fun toInt(): Int {
       return this.value.toInt()
    }

    actual fun toDouble(): Double {
        return this.value.toDouble()
    }

    actual fun toLong(): Long {
        return this.value.toLong()
    }

    actual fun doubleValue(): Double {
        return this.value.toDouble()
    }

    actual fun add(numberValue: CommonNumber): CommonNumber {
        return CommonNumber(value.add(numberValue.value))
    }

    actual fun subtract(numberValue: CommonNumber): CommonNumber {
        return CommonNumber(value.subtract(numberValue.value))
    }

    actual fun multiply(commonNumber: CommonNumber): CommonNumber {
        return CommonNumber(value.multiply(commonNumber.value))
    }

    actual fun divide(divisor: CommonNumber, rounding: RoundingMode): CommonNumber {
        return CommonNumber(value.divide(divisor.value, rounding.value))
    }

    actual fun setScale(scale: Int, rounding: RoundingMode): CommonNumber {
        return CommonNumber(this.value.setScale(scale, rounding.value))
    }

    actual fun divide(divisor: CommonNumber, scale: Int, rounding: RoundingMode): CommonNumber {
        return CommonNumber(value.divide(divisor.value, scale, rounding.value))
    }


}