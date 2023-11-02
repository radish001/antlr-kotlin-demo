package antlr.data

/**
 * @ClassName MyDate.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
expect class CommonDate {

    var year: Int
    var month: Int
    var day: Int
    var hour: Int
    var minute: Int
    var second: Int



    constructor()


    constructor(commonNumber: CommonNumber)


    constructor(year: Int, month: Int, day: Int, hour: Int, minute: Int,  second: Int)



    fun add(dateValue: CommonDate): CommonDate


    fun add(number: CommonNumber): CommonDate


    fun sub(dateValue: CommonDate): CommonDate


    fun sub(number: CommonNumber): CommonDate


    fun toNumber(): CommonNumber




    companion object {
        fun parse(textValue: String): CommonDate?
    }
}