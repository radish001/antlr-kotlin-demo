package antlr.data

import java.math.BigDecimal

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class MyNumber {
    var value : BigDecimal = BigDecimal.valueOf(0)


    actual constructor() {
        TODO("Not yet implemented")
    }

    actual constructor(number: Number) {
        this.value = BigDecimal(number.toLong())
    }

    actual constructor(str: String) {
        this.value = BigDecimal(str)
    }

    actual companion object {
        actual fun zero(): MyNumber {
            TODO("Not yet implemented")
        }
    }

    actual fun compareTo(myNumber: MyNumber): Int {
        TODO("Not yet implemented")
    }

    actual fun toInt(): Int {
       return this.value.toInt()
    }

    actual fun toDouble(): Double {
        TODO("Not yet implemented")
    }

    actual fun toLong(): Long {
        TODO("Not yet implemented")
    }

    actual fun doubleValue(): Double {
        TODO("Not yet implemented")
    }

    actual fun add(numberValue: MyNumber?): MyNumber {
        return MyNumber( value.add(numberValue?.value))
    }

    actual fun subtract(numberValue: MyNumber?): MyNumber {
        TODO("Not yet implemented")
    }

    actual fun multiply(myNumber: MyNumber): MyNumber {
        TODO("Not yet implemented")
    }

    actual fun divide(bigDecimal: Any, decimaL32: Any): Any {
        TODO("Not yet implemented")
    }


}