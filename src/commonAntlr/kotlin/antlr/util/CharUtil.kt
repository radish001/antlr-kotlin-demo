package antlr.util

/**
 * @ClassName CharUtil.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */
class CharUtil {
    companion object{
        fun standardChar(c: Char): Char {
            if (c.code <= 0) return c
            var o = c
            if (o == '‘') return '\''
            if (o == '’') return '\''
            if (o == '“') return '"'
            if (o == '”') return '"'
            if (o == '〔') return '('
            if (o == '〕') return ')'
            if (o == '＝') return '='
            if (o == '＋') return '+'
            if (o == '－') return '-'
            if (o == '×') return '*'
            if (o == '÷') return '/'
            if (o == '／') return '/'
            if (c.code == 12288) {
                o = 32.toChar()
            } else if (c.code > 65280 && c.code < 65375) {
                o = (c.code - 65248).toChar()
            }
            return o.uppercaseChar()
        }

        fun standardString(s: String): String {
            val sb = StringBuilder()
            for (i in 0 until s.length) {
                val c = s[i]
                sb.append(standardChar(c))
            }
            return sb.toString()
        }

        private fun equalsOnce(left: String, right: String): Boolean {
            if (left.length != right.length) return false
            for (i in 0 until left.length) {
                if (left[i] != right[i]) {
                    val a = standardChar(left[i])
                    val b = standardChar(right[i])
                    if (a != b) return false
                }
            }
            return true
        }

        fun equals(left: String?, right: String?): Boolean {
            return if (left == null) false else right?.let { equalsOnce(left, it) } ?: false
        }

        fun equals(left: String?, arg1: String?, arg2: String?): Boolean {
            if (left == null) return false
            if (arg1 != null && equalsOnce(left, arg1)) return true
            return if (arg2 != null && equalsOnce(left, arg2)) true else false
        }

        fun equals(left: String?, arg1: String?, arg2: String?, arg3: String?): Boolean {
            if (left == null) return false
            if (arg1 != null && equalsOnce(left, arg1)) return true
            if (arg2 != null && equalsOnce(left, arg2)) return true
            return if (arg3 != null && equalsOnce(left, arg3)) true else false
        }

        fun splitFormula(formula: String, splitChars: List<Char?>): List<String> {
            val result: MutableList<String> = mutableListOf<String>()
            var inSquareBrackets = false
            var inBraceBrackets = false
            var inBracketsCount = 0
            var inText = false
            var textChar = 0.toChar()
            var str = StringBuilder()
            var i = 0
            while (i < formula.length) {
                val c = formula[i]
                if (inSquareBrackets) {
                    str.append(c)
                    if (c == ']') inSquareBrackets = false
                } else if (inBraceBrackets) {
                    str.append(c)
                    if (c == '}') inBraceBrackets = false
                } else if (inText) {
                    str.append(c)
                    if (c == '\\') {
                        i++
                        if (i < formula.length) {
                            str.append(formula[i])
                        }
                    } else if (c == textChar) {
                        inText = false
                    }
                } else if (splitChars.contains(c) && inBracketsCount == 0) {
                    result.add(str.toString())
                    result.add(c.toString())
                    str = StringBuilder()
                } else {
                    str.append(c)
                    if (c == '\'' || c == '"' || c == '`') {
                        textChar = c
                        inText = true
                    } else if (c == '[') {
                        inSquareBrackets = true
                    } else if (c == '{') {
                        inBraceBrackets = true
                    } else if (c == '(') {
                        inBracketsCount++
                    } else if (c == ')') {
                        inBracketsCount--
                    }
                }
                i++
            }
            if (str.length > 0) result.add(str.toString())
            return result
        }

        fun splitFormulaForAnd(formula: String): List<String> {
            val result = mutableListOf<String>()
            var inSquareBrackets = false
            var inBraceBrackets = false
            var inBracketsCount = 0
            var inText = false
            var textChar = 0.toChar()
            var str = StringBuilder()
            var i = 0
            while (i < formula.length) {
                val c = formula[i]
                if (inSquareBrackets) {
                    str.append(c)
                    if (c == ']') inSquareBrackets = false
                } else if (inBraceBrackets) {
                    str.append(c)
                    if (c == '}') inBraceBrackets = false
                } else if (inText) {
                    str.append(c)
                    if (c == '\\') {
                        i++
                        if (i < formula.length) {
                            str.append(formula[i])
                        }
                    } else if (c == textChar) {
                        inText = false
                    }
                } else if (c == '&' && inBracketsCount == 0) {
                    if (i + 1 < formula.length && formula[i + 1] == '&') {
                        i++
                        result.add(str.toString())
                        str = StringBuilder()
                    } else {
                        result.add(str.toString())
                    }
                } else if (c == '|' && inBracketsCount == 0) {
                    if (i + 1 < formula.length && formula[i + 1] == '|') {
                        i++
                        result.add(str.toString())
                        str = StringBuilder()
                        str.append(result.joinToString("&&"))
                        str.append("||")
                        result.clear()
                    } else {
                        result.add(str.toString())
                    }
                } else {
                    str.append(c)
                    if (c == '\'' || c == '"' || c == '`') {
                        textChar = c
                        inText = true
                    } else if (c == '[') {
                        inSquareBrackets = true
                    } else if (c == '{') {
                        inBraceBrackets = true
                    } else if (c == '(') {
                        inBracketsCount++
                    } else if (c == ')') {
                        inBracketsCount--
                    }
                }
                i++
            }
            if (str.length > 0) result.add(str.toString())
            return result
        }
    }
}