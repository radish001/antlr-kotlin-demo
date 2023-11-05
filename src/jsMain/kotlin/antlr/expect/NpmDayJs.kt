package antlr.expect




/**
 * @ClassName NpmDayJs.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description 包装dayjs类库，构造方法可使用字符串和kotlin.js.Date
 * @createTime 2023-11-02
 * Copyright (C) 2022 HOSE
 */
@JsModule("dayjs")
@JsNonModule
@JsName("dayjs")
external class DayJs (any: Any? = definedExternally){

    /**
     * 增加指定的时间 type为 year、month、day、hour......
     */
    fun add(value: Int, type:String): DayJs

    /**
     * 获取年
     */
    fun year() : Int

    /**
     * 获取月，从0开始
     */
    fun month(): Int

    /**
     * 获取天
     */
    fun date(): Int

    /**
     * 获取小时
     */
    fun hour(): Int

    /**
     * 获取分钟
     */
    fun minute(): Int

    /**
     * 获取秒
     */
    fun second(): Int

    /**
     * 获取毫秒
     */
    fun millisecond(): Int

    /**
     * 两个时间间的差，type为以什么单位返回，year、month、day、hour......
     */
    fun diff(dayjs: DayJs, type: String): Int




}