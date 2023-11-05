package antlr.expect

/**
 * @ClassName MyNumber.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
expect class CommonNumber {

    constructor()

    constructor(number : Number)


    constructor(str : String)



  companion object{
       fun zero(): CommonNumber
  }





    fun compareTo(commonNumber: CommonNumber) : Int

    fun toInt(): Int

    fun toDouble(): Double

    fun toLong(): Long

    fun doubleValue(): Double
    fun add(numberValue: CommonNumber): CommonNumber

    fun subtract(numberValue: CommonNumber): CommonNumber
    fun multiply(commonNumber: CommonNumber): CommonNumber
    fun divide(divisor: CommonNumber, rounding: RoundingMode): CommonNumber


    fun divide(divisor: CommonNumber, scale: Int, rounding: RoundingMode): CommonNumber


    fun setScale(scale: Int, rounding: RoundingMode): CommonNumber
}