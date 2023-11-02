package antlr.data

import org.joda.time.DateTime

import java.math.MathContext
import java.time.LocalDate
import java.time.temporal.ChronoUnit
import java.util.regex.Pattern

/**
 * @ClassName MyDate.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class CommonDate {


    private lateinit var dateTime: DateTime


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


    actual constructor(commonNumber: CommonNumber) {
        val days: Int = commonNumber.toInt()
        if (days > 365) {
            var start = LocalDate.of(1900, 1, 1)
            start = start.plusDays((days - 2).toLong())
            this.year = start.year
            this.month = start.monthValue
            this.day = start.dayOfMonth
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
        var result = CommonNumber(this.second).divide(CommonNumber(60), 7, RoundingMode.ROUND_HALF_EVEN)
        result = result.add(CommonNumber(this.minute)).divide(CommonNumber(60), 7, RoundingMode.ROUND_HALF_EVEN)
        result = result.add(CommonNumber(this.hour)).divide(CommonNumber(24), 7, RoundingMode.ROUND_HALF_EVEN)

        if (this.year != null && this.year > 1900) {
            val start: LocalDate = LocalDate.of(this.year, this.month, this.day)
            val end = LocalDate.of(1900, 1, 1)
            val days = ChronoUnit.DAYS.between(end, start) + 2
            return result.add(CommonNumber(days))
        }
        return if (this.day != null) {
            result.add(CommonNumber(day))
        } else result
    }

    actual companion object {
        actual fun parse(textValue: String): CommonDate? {
            val t: String = textValue.trim { it <= ' ' }
            var m = Pattern
                .compile("^(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d) ([01]?\\d|2[0123]):([012345]?\\d):([012345]?\\d)$")
                .matcher(t)
            if (m.find()) {
                val date  = CommonDate()
                date.year = m.group(1).toInt()
                date.month = m.group(2).toInt()
                date.day= m.group(3).toInt()
                date.hour = m.group(4).toInt()
                date.minute = m.group(5).toInt()
                date.second = m.group(6).toInt()
                return date
            }
            m = Pattern.compile("(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d) ([01]?\\d|2[0123]):([012345]?\\d)")
                .matcher(t)
            if (m.find()) {
                val date = CommonDate()
                date.year = m.group(1).toInt()
                date.month = m.group(2).toInt()
                date.day = m.group(3).toInt()
                date.hour = m.group(4).toInt()
                date.minute = m.group(5).toInt()
                return date
            }
            m = Pattern.compile("(\\d{4})-(1[012]|0?\\d)-(30|31|[012]?\\d)").matcher(t)
            if (m.find()) {
                val date = CommonDate()
                date.year = m.group(1).toInt()
                date.month = m.group(2).toInt()
                date.day = m.group(3).toInt()
                return date
            }
            m = Pattern.compile("^(\\d+) (2[0123]|[01]?\\d):([012345]?\\d):([012345]?\\d)$").matcher(t)
            if (m.find()) {
                val date = CommonDate()
                date.day = m.group(1).toInt()
                date.hour = m.group(2).toInt()
                date.minute = m.group(3).toInt()
                date.second = m.group(4).toInt()
                return date
            }
            m = Pattern.compile("^(2[0123]|[01]?\\d):([012345]?\\d):([012345]?\\d)$").matcher(t)
            if (m.find()) {
                val date = CommonDate()
                date.hour = m.group(1).toInt()
                date.minute = m.group(2).toInt()
                date.second = m.group(3).toInt()
                return date
            }
            m = Pattern.compile("^(2[0123]|[01]?\\d):([012345]?\\d)$").matcher(t)
            if (m.find()) {
                val date = CommonDate()
                date.hour = m.group(1).toInt()
                date.minute = m.group(2).toInt()
                return date
            }
            return null
        }
    }


    actual var year: Int
        get() = this.year
        set(value) {this.year = value}
    actual var month: Int
        get() = this.month
        set(value) {this.month = value}
    actual var day: Int
        get() = this.day
        set(value) {this.day = value}
    actual var hour: Int
        get() = this.hour
        set(value) {this.hour = value}
    actual var minute: Int
        get() = this.minute
        set(value) {this.minute = value}
    actual var second: Int
        get() = this.second
        set(value) {this.second = value}

    actual constructor() {
        this.year = 0
        this.month = 0
        this.day = 0
        this.hour = 0
        this.minute = 0
        this.second = 0
    }


}