package antlr.data

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
expect class MyNumber {

    constructor()

    constructor(number : Number)


    constructor(str : String)



  companion object{
       fun zero(): MyNumber
  }





    fun compareTo(myNumber: MyNumber) : Int

    fun toInt(): Int

    fun toDouble(): Double

    fun toLong(): Long

    fun doubleValue(): Double
    fun add(numberValue: MyNumber?): MyNumber

    fun subtract(numberValue: MyNumber?): MyNumber
    fun multiply(myNumber: MyNumber): MyNumber
    fun divide(bigDecimal: Any, decimaL32: Any): Any
}