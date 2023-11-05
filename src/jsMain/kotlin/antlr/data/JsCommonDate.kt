package antlr.data

import kotlin.js.Date

/**
 * @ClassName MyDate.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class CommonDate {



    actual var year: Int = 0
    actual var month: Int = 0
    actual var day: Int = 0
    actual var hour: Int = 0
    actual var minute: Int = 0
    actual var second: Int = 0

    actual constructor(
        year: Int,
        month: Int,
        day: Int,
        hour: Int,
        minute: Int,
        second: Int,
    ) {
        this.year = year
        this.month = month
        this.day = day
        this.hour = hour
        this.minute = minute
        this.second = second
    }

    actual constructor()


    actual constructor(commonNumber: CommonNumber) {
        val days: Int = commonNumber.toInt()
        if (days > 365) {
            var dayjs = DayJs("1900-01-01")
            var start = dayjs.add((days - 2), "day")
            this.year = start.year()
            this.month = start.month() + 1
            this.day = start.date()
        } else {
            this.day = days
        }
        val d = commonNumber.subtract(CommonNumber(days))
        this.hour = d.multiply(CommonNumber(24)).toInt()
        this.minute = d.multiply(CommonNumber(24)).subtract(CommonNumber(hour)).multiply(CommonNumber(60)).toInt()

        this.second = d.multiply(CommonNumber(24)).subtract(CommonNumber(hour)).multiply(CommonNumber(60))
            .subtract(CommonNumber(minute))
            .multiply(CommonNumber(60)).toInt()
        if (this.second == 60) {
            this.second = 0
            this.minute += 1
            if (this.minute == 60) {
                this.minute = 0
                this.hour += 1
            }
        }
    }



    actual fun add(dateValue: CommonDate): CommonDate {
        return CommonDate(this.toNumber().add(dateValue.toNumber()))
    }

    actual fun add(number: CommonNumber): CommonDate {
        return CommonDate(this.toNumber().add(number))
    }

    actual fun sub(dateValue: CommonDate): CommonDate {
        return CommonDate(this.toNumber().subtract(dateValue.toNumber()))
    }

    actual fun sub(number: CommonNumber): CommonDate {
        return CommonDate(this.toNumber().subtract(number))
    }

    actual fun toNumber(): CommonNumber {
        var result = CommonNumber(this.second).divide(CommonNumber(60),7, RoundingMode.ROUND_HALF_EVEN)
        result = result.add(CommonNumber(this.minute)).divide(CommonNumber(60), 7, RoundingMode.ROUND_HALF_EVEN)
        result = result.add(CommonNumber(this.hour)).divide(CommonNumber(24), 7, RoundingMode.ROUND_HALF_EVEN)
        if (this.year != null && this.year > 1900) {
            val start = DayJs(Date(year = this.year, month = this.month - 1, day = this.day))
            val end = DayJs("1900-01-01")
            val days = start.diff(end, "day") + 2
            return result.add(CommonNumber(days))
        }
        return if (this.day != null) {
            result.add(CommonNumber(day))
        } else result
    }

    actual companion object {
        actual fun parse(textValue: String): CommonDate? {
            val t: String = textValue.trim { it <= ' ' }
            var m = Regex(pattern = "^(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d) ([01]?\\d|2[0123]):([012345]?\\d):([012345]?\\d)$")
            var mr = m.find(t)
            if (mr != null) {
                val date  = CommonDate()
                date.year = mr.groups[1]!!.value.toInt()
                date.month = mr.groups[2]!!.value.toInt()
                date.day= mr.groups[3]!!.value.toInt()
                date.hour = mr.groups[4]!!.value.toInt()
                date.minute =  mr.groups[5]!!.value.toInt()
                date.second = mr.groups[6]!!.value.toInt()
                return date
            }
            m = Regex("(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d) ([01]?\\d|2[0123]):([012345]?\\d)")
            mr = m.find(t)
            if (mr != null) {
                val date = CommonDate()
                date.year = mr.groups[1]!!.value.toInt()
                date.month = mr.groups[2]!!.value.toInt()
                date.day = mr.groups[3]!!.value.toInt()
                date.hour = mr.groups[4]!!.value.toInt()
                date.minute = mr.groups[5]!!.value.toInt()
                return date
            }
            m = Regex("(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d)")
            mr = m.find(t)
            if (mr != null) {
                val date = CommonDate()
                date.year = mr.groups[1]!!.value.toInt()
                date.month = mr.groups[2]!!.value.toInt()
                date.day = mr.groups[3]!!.value.toInt()
                return date
            }
            m = Regex("^(\\d+) (2[0123]|[01]?\\d):([012345]?\\d):([012345]?\\d)$")
            mr = m.find(t)
            if (mr != null) {
                val date = CommonDate()
                date.day = mr.groups[1]!!.value.toInt()
                date.hour = mr.groups[2]!!.value.toInt()
                date.minute = mr.groups[3]!!.value.toInt()
                date.second = mr.groups[4]!!.value.toInt()
                return date
            }
            m = Regex("^(2[0123]|[01]?\\d):([012345]?\\d):([012345]?\\d)$")
            mr = m.find(t)
            if (mr  != null) {
                val date = CommonDate()
                date.hour = mr.groups[1]!!.value.toInt()
                date.minute = mr.groups[2]!!.value.toInt()
                date.second = mr.groups[3]!!.value.toInt()
                return date
            }
            m = Regex("^(2[0123]|[01]?\\d):([012345]?\\d)$")
            mr = m.find(t)
            if (mr  != null) {
                val date = CommonDate()
                date.hour = mr.groups[1]!!.value.toInt()
                date.minute = mr.groups[2]!!.value.toInt()
                return date
            }
            return null
        }
    }






}