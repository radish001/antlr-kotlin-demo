package antlr.data

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class MyNumber {


    var value = BigNumber("0")




    actual constructor() {
        this.value = BigNumber("0")
    }

    actual constructor(number: Number) {
        this.value = BigNumber(number)
    }

    actual constructor(str: String) {
        this.value = BigNumber(str)
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
         return value.toFixed().toInt()
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
        val res = value.plus(numberValue!!.value).toFixed()
        return MyNumber(res)
    }

    actual fun subtract(numberValue: MyNumber?): MyNumber {
        val res = value.minus(numberValue!!.value).toFixed()
        return MyNumber(res)
    }

    actual fun multiply(myNumber: MyNumber): MyNumber {
        TODO("Not yet implemented")
    }

    actual fun divide(bigDecimal: Any, decimaL32: Any): Any {
        TODO("Not yet implemented")
    }


}