package antlr.json

import antlr.string.CommonStringReader

/**
 * @ClassName Lexer.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class Lexer {


    private var fsmReturnTable: IntArray = intArrayOf()
    private var fsmHandlerTable: MutableList<(FsmContext) -> Boolean>? = null
    private var allowComments = false
    private var allowSingleQuotedStrings = false
    private var endOfInput = false
    private var fsmContext: FsmContext? = null
    private var inputBuffer = 0
    private var inputChar = 0
    private var reader: CommonStringReader? = null
    private var state = 0
    private var stringBuffer: StringBuilder? = null
    private var stringValue: String? = null
    private var token = 0
    private var unichar = 0


    fun endOfInput(): Boolean {
        return endOfInput
    }

    fun token(): Int {
        return token
    }

    fun stringValue(): String {
        return stringValue!!
    }

    init {
        populateFsmTables();
    }

    constructor(reader: CommonStringReader) {
        this.allowComments = true
        this.allowSingleQuotedStrings = true
        this.inputBuffer = 0
        this.stringBuffer = StringBuilder(128)
        this.state = 1
        this.endOfInput = false
        this.reader = reader
        this.fsmContext = FsmContext(null, null, null, null)
        this.fsmContext!!.lexer = this
    }

    private fun hexValue(digit: Int): Int {
        return when (digit) {
            'a'.code, 'A'.code -> 10
            'b'.code, 'B'.code -> 11
            'c'.code, 'C'.code -> 12
            'd'.code, 'D'.code -> 13
            'e'.code, 'E'.code -> 14
            'f'.code, 'F'.code -> 15
            else -> digit - '0'.code
        }
    }

    private fun populateFsmTables() {
        // See section A.1. of the manual for details of the finite state machine.
        fsmHandlerTable = mutableListOf() //
        val state1 = { ctx: FsmContext -> state1(ctx) }
        fsmHandlerTable!!.add(state1)
        val state2 = { ctx: FsmContext -> state2(ctx) }
        fsmHandlerTable!!.add(state2)
        val state3 = { ctx: FsmContext -> state3(ctx) }
        fsmHandlerTable!!.add(state3)
        val state4 = { ctx: FsmContext -> state4(ctx) }
        fsmHandlerTable!!.add(state4)
        val state5 = { ctx: FsmContext -> state5(ctx) }
        fsmHandlerTable!!.add(state5)
        val state6 = { ctx: FsmContext -> state6(ctx) }
        fsmHandlerTable!!.add(state6)
        val state7 = { ctx: FsmContext -> state7(ctx) }
        fsmHandlerTable!!.add(state7)
        val state8 = { ctx: FsmContext -> state8(ctx) }
        fsmHandlerTable!!.add(state8)
        val state9 = { ctx: FsmContext -> state9(ctx) }
        fsmHandlerTable!!.add(state9)
        val state10 = { ctx: FsmContext -> state10(ctx) }
        fsmHandlerTable!!.add(state10)
        val state11 = { ctx: FsmContext -> state11(ctx) }
        fsmHandlerTable!!.add(state11)
        val state12 = { ctx: FsmContext -> state12(ctx) }
        fsmHandlerTable!!.add(state12)
        val state13 = { ctx: FsmContext -> state13(ctx) }
        fsmHandlerTable!!.add(state13)
        val state14 = { ctx: FsmContext -> state14(ctx) }
        fsmHandlerTable!!.add(state14)
        val state15 = { ctx: FsmContext -> state15(ctx) }
        fsmHandlerTable!!.add(state15)
        val state16 = { ctx: FsmContext -> state16(ctx) }
        fsmHandlerTable!!.add(state16)
        val state17 = { ctx: FsmContext -> state17(ctx) }
        fsmHandlerTable!!.add(state17)
        val state18 = { ctx: FsmContext -> state18(ctx) }
        fsmHandlerTable!!.add(state18)
        val state19 = { ctx: FsmContext -> state19(ctx) }
        fsmHandlerTable!!.add(state19)
        val state20 = { ctx: FsmContext -> state20(ctx) }
        fsmHandlerTable!!.add(state20)
        val state21 = { ctx: FsmContext -> state21(ctx) }
        fsmHandlerTable!!.add(state21)
        val state22 = { ctx: FsmContext -> state22(ctx) }
        fsmHandlerTable!!.add(state22)
        val state23 = { ctx: FsmContext -> state23(ctx) }
        fsmHandlerTable!!.add(state23)
        val state24 = { ctx: FsmContext -> state24(ctx) }
        fsmHandlerTable!!.add(state24)
        val state25 = { ctx: FsmContext -> state25(ctx) }
        fsmHandlerTable!!.add(state25)
        val state26 = { ctx: FsmContext -> state26(ctx) }
        fsmHandlerTable!!.add(state26)
        val state27 = { ctx: FsmContext -> state27(ctx) }
        fsmHandlerTable!!.add(state27)
        val state28 = { ctx: FsmContext -> state28(ctx) }
        fsmHandlerTable!!.add(state28)
        fsmReturnTable = intArrayOf(
            ParserToken.Char.value, 0,
            ParserToken.Number.value,
            ParserToken.Number.value, 0,
            ParserToken.Number.value, 0,
            ParserToken.Number.value, 0,
            0,
            ParserToken.True.value, 0, 0, 0,
            ParserToken.False.value, 0, 0,
            ParserToken.Null.value, ParserToken.CharSeq.value, ParserToken.Char.value, 0, 0,
            ParserToken.CharSeq.value, ParserToken.Char.value, 0, 0, 0, 0
        )
    }

    private fun processEscChar(escChar: Int): Char {
        return when (escChar) {
            '"'.code, '\''.code, '\\'.code, '/'.code -> escChar.toChar() // Convert.ToChar(esc_char);
            'n'.code -> '\n'
            't'.code -> '\t'
            'r'.code -> '\r'
            'b'.code -> '\b'
            'f'.code -> '\u000c'
            else -> '?'
        }
    }

    private fun state1(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() === ' ' || ctx.lexer!!.inputChar.toChar() >= '\t' && ctx.lexer!!.inputChar.toChar() <= '\r') continue
            if (ctx.lexer!!.inputChar.toChar() >= '1' && ctx.lexer!!.inputChar.toChar() <= '9') {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputBuffer as Char)
                ctx.nextState = 3
                return true
            }
            return when (ctx.lexer!!.inputChar) {
                '"'.code -> {
                    ctx.nextState = 19
                    ctx.res = true
                    true
                }

                ','.code, ':'.code, '['.code, ']'.code, '{'.code, '}'.code -> {
                    ctx.nextState = 1
                    ctx.res = true
                    true
                }

                '-'.code -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar as Char)
                    ctx.nextState = 2
                    true
                }

                '0'.code -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar as Char)
                    ctx.nextState = 4
                    true
                }

                'f'.code -> {
                    ctx.nextState = 12
                    true
                }

                'n'.code -> {
                    ctx.nextState = 16
                    true
                }

                't'.code -> {
                    ctx.nextState = 9
                    true
                }

                '\''.code -> {
                    if (!ctx.lexer!!.allowSingleQuotedStrings) return false
                    ctx.lexer!!.inputChar = '"'.code
                    ctx.nextState = 23
                    ctx.res = true
                    true
                }

                '/'.code -> {
                    if (!ctx.lexer!!.allowComments) return false
                    ctx.nextState = 25
                    true
                }

                else -> false
            }
        }
        return true
    }

    private fun state2(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        if (ctx.lexer!!.inputChar.toChar() >= '1' && ctx.lexer!!.inputChar.toChar() <= '9') {
            ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
            ctx.nextState = 3
            return true
        }
        return when (ctx.lexer!!.inputChar) {
            '0'.code -> {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                ctx.nextState = 4
                true
            }

            else -> false
        }
    }

    private fun state3(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9') {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                continue
            }
            if (ctx.lexer!!.inputChar.toChar() === ' ' || ctx.lexer!!.inputChar.toChar() >= '\t' && ctx.lexer!!.inputChar.toChar() <= '\r') {
                ctx.res = true
                ctx.nextState = 1
                return true
            }
            return when (ctx.lexer!!.inputChar.toChar()) {
                ',', ']', '}' -> {
                    ctx.lexer!!.ungetChar()
                    ctx.res = true
                    ctx.nextState = 1
                    true
                }

                '.' -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                    ctx.nextState = 5
                    true
                }

                'e', 'E' -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                    ctx.nextState = 7
                    true
                }

                else -> false
            }
        }
        return true
    }

    private fun state4(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        if (ctx.lexer!!.inputChar.toChar() === ' ' || ctx.lexer!!.inputChar.toChar() >= '\t' && ctx.lexer!!.inputChar.toChar() <= '\r') {
            ctx.res = true
            ctx.nextState = 1
            return true
        }
        return when (ctx.lexer!!.inputChar.toChar()) {
            ',', ']', '}' -> {
                ctx.lexer!!.ungetChar()
                ctx.res = true
                ctx.nextState = 1
                true
            }

            '.' -> {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                ctx.nextState = 5
                true
            }

            'e', 'E' -> {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                ctx.nextState = 7
                true
            }

            else -> false
        }
    }

    private fun state5(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9') {
            ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
            ctx.nextState = 6
            return true
        }
        return false
    }

    private fun state6(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9') {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                continue
            }
            if (ctx.lexer!!.inputChar.toChar() === ' ' || ctx.lexer!!.inputChar.toChar() >= '\t' && ctx.lexer!!.inputChar.toChar() <= '\r') {
                ctx.res = true
                ctx.nextState = 1
                return true
            }
            return when (ctx.lexer!!.inputChar.toChar()) {
                ',', ']', '}' -> {
                    ctx.lexer!!.ungetChar()
                    ctx.res = true
                    ctx.nextState = 1
                    true
                }

                'e', 'E' -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                    ctx.nextState = 7
                    true
                }

                else -> false
            }
        }
        return true
    }

    private fun state7(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9') {
            ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
            ctx.nextState = 8
            return true
        }
        return when (ctx.lexer!!.inputChar.toChar()) {
            '+', '-' -> {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                ctx.nextState = 8
                true
            }

            else -> false
        }
    }

    private fun state8(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9') {
                ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                continue
            }
            if (ctx.lexer!!.inputChar.toChar() === ' ' || ctx.lexer!!.inputChar.toChar() >= '\t' && ctx.lexer!!.inputChar.toChar() <= '\r') {
                ctx.res = true
                ctx.nextState = 1
                return true
            }
            return when (ctx.lexer!!.inputChar.toChar()) {
                ',', ']', '}' -> {
                    ctx.lexer!!.ungetChar()
                    ctx.res = true
                    ctx.nextState = 1
                    true
                }

                else -> false
            }
        }
        return true
    }

    private fun state9(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'r' -> {
                ctx.nextState = 10
                true
            }

            else -> false
        }
    }

    private fun state10(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'u' -> {
                ctx.nextState = 11
                true
            }

            else -> false
        }
    }

    private fun state11(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'e' -> {
                ctx.res = true
                ctx.nextState = 1
                true
            }

            else -> false
        }
    }

    private fun state12(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'a' -> {
                ctx.nextState = 13
                true
            }

            else -> false
        }
    }

    private fun state13(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'l' -> {
                ctx.nextState = 14
                true
            }

            else -> false
        }
    }

    private fun state14(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            's' -> {
                ctx.nextState = 15
                true
            }

            else -> false
        }
    }

    private fun state15(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'e' -> {
                ctx.res = true
                ctx.nextState = 1
                true
            }

            else -> false
        }
    }

    private fun state16(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'u' -> {
                ctx.nextState = 17
                true
            }

            else -> false
        }
    }

    private fun state17(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'l' -> {
                ctx.nextState = 18
                true
            }

            else -> false
        }
    }

    private fun state18(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'l' -> {
                ctx.res = true
                ctx.nextState = 1
                true
            }

            else -> false
        }
    }

    private fun state19(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            return when (ctx.lexer!!.inputChar.toChar()) {
                '"' -> {
                    ctx.lexer!!.ungetChar()
                    ctx.res = true
                    ctx.nextState = 20
                    true
                }

                '\\' -> {
                    ctx.stateStack = 19
                    ctx.nextState = 21
                    true
                }

                else -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                    continue
                }
            }
        }
        return true
    }

    private fun state20(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            '"' -> {
                ctx.res = true
                ctx.nextState = 1
                true
            }

            else -> false
        }
    }

    private fun state21(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            'u' -> {
                ctx.nextState = 22
                true
            }

            '"', '\'', '/', '\\', 'b', 'f', 'n', 'r', 't' -> {
                ctx.lexer!!.stringBuffer!!.append(processEscChar(ctx.lexer!!.inputChar))
                ctx.nextState = ctx.stateStack
                true
            }

            else -> false
        }
    }

    private fun state22(ctx: FsmContext): Boolean {
        var counter = 0
        var mult = 4096
        ctx.lexer!!.unichar = 0
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() >= '0' && ctx.lexer!!.inputChar.toChar() <= '9' || ctx.lexer!!.inputChar.toChar() >= 'A' && ctx.lexer!!.inputChar.toChar() <= 'F' || ctx.lexer!!.inputChar.toChar() >= 'a' && ctx.lexer!!.inputChar.toChar() <= 'f') {
                ctx.lexer!!.unichar += hexValue(ctx.lexer!!.inputChar) * mult
                counter++
                mult /= 16
                if (counter == 4) {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.unichar.toChar())
                    ctx.nextState = ctx.stateStack
                    return true
                }
                continue
            }
            return false
        }
        return true
    }

    private fun state23(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            return when (ctx.lexer!!.inputChar.toChar()) {
                '\'' -> {
                    ctx.lexer!!.ungetChar()
                    ctx.res = true
                    ctx.nextState = 24
                    true
                }

                '\\' -> {
                    ctx.stateStack = 23
                    ctx.nextState = 21
                    true
                }

                else -> {
                    ctx.lexer!!.stringBuffer!!.append(ctx.lexer!!.inputChar.toChar())
                    continue
                }
            }
        }
        return true
    }

    private fun state24(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            '\'' -> {
                ctx.lexer!!.inputChar = '"'.code
                ctx.res = true
                ctx.nextState = 1
                true
            }

            else -> false
        }
    }

    private fun state25(ctx: FsmContext): Boolean {
        ctx.lexer!!.getChar()
        return when (ctx.lexer!!.inputChar.toChar()) {
            '*' -> {
                ctx.nextState = 27
                true
            }

            '/' -> {
                ctx.nextState = 26
                true
            }

            else -> false
        }
    }

    private fun state26(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() === '\n') {
                ctx.nextState = 1
                return true
            }
        }
        return true
    }

    private fun state27(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() === '*') {
                ctx.nextState = 28
                return true
            }
        }
        return true
    }

    private fun state28(ctx: FsmContext): Boolean {
        while (ctx.lexer!!.getChar()) {
            if (ctx.lexer!!.inputChar.toChar() === '*') continue
            if (ctx.lexer!!.inputChar.toChar() === '/') {
                ctx.nextState = 1
                return true
            }
            ctx.nextState = 27
            return true
        }
        return true
    }

    private fun getChar(): Boolean {
        try {
            if (nextChar().also { inputChar = it } != -1) return true
        } catch (e: Exception) {
        }
        endOfInput = true
        return false
    }

    @Throws(Exception::class)
    private fun nextChar(): Int {
        if (inputBuffer != 0) {
            val tmp: Int = inputBuffer
            inputBuffer = 0
            return tmp
        }
        return reader!!.read()
    }

    @Throws(Exception::class)
    fun nextToken(): Boolean {
        var handler: (FsmContext) -> Boolean
        fsmContext!!.res = false
        while (true) {
            handler = fsmHandlerTable!![state - 1] // [state - 1];
            if (!handler.invoke(fsmContext!!)) throw Exception(inputChar.toString())
            if (endOfInput) return false
            if (fsmContext!!.res!!) {
                stringValue = stringBuffer!!.toString()
                stringBuffer!!.deleteRange(0, stringBuffer!!.length)
                // stringBuffer!!.Remove(0, stringBuffer!!.length());
                token = fsmReturnTable.get(state - 1)
                if (token == ParserToken.Char.value) token = inputChar
                state = fsmContext!!.nextState!!
                return true
            }
            state = fsmContext!!.nextState!!
        }
    }

    private fun ungetChar() {
        inputBuffer = inputChar
    }


}

