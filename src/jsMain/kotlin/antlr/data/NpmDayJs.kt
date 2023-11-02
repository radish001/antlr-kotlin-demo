package antlr.data

import kotlin.js.Date

/**
 * @ClassName NpmDayJs.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-11-02
 * Copyright (C) 2022 HOSE
 */
@JsModule("dayjs")
@JsNonModule
external class DayJs {


    fun dayjs(dateTimeText : String): DayJs

    fun dayjs(date: Date): DayJs


    fun add(value: Int, type:String): DayJs


    fun year() : Int

    fun month(): Int

    /**
     * gets day of current month
     */
    fun date(): Int


    fun hour(): Int


    fun minute(): Int


    fun second(): Int


    fun millisecond(): Int


    fun diff(dayjs: DayJs, type: String): Int




}