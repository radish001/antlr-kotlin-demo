package antlr.data

/**
 * @ClassName MyDate.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
expect class MyDate {

    constructor(myNumber: MyNumber)


    fun ADD(dateValue: MyDate): MyDate


    fun ADD(number : MyNumber): MyDate


    fun SUB(dateValue: MyDate): MyDate



    fun SUB(number : MyNumber): MyDate


    fun ToNumber() :MyNumber

    companion object {
        fun parse(textValue: String): MyDate
    }
}