package antlr.json

import antlr.expect.CommonNumber
import antlr.util.CommonStringReader


/**
 * @ClassName JsonReader.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class JsonReader {
    private var parseTable: Map<Int, MutableMap<Int, IntArray>>? = populateParseTable();

    private var automatonStack: ArrayDeque<Int>? = null
    private var currentInput = 0
    private var currentSymbol = 0
    private var endOfJson = false
    private var endOfInput = false
    private var lexer: Lexer? = null
    private var parserInString = false
    private var parserReturn = false
    private var readStarted = false
    private var tokenValue: Any? = null
    private var token: JsonToken? = null

    fun token(): JsonToken? {
        return token
    }

    fun getValue(): Any? {
        return tokenValue
    }

    constructor(jsonText: String){
        val reader = CommonStringReader(jsonText)
        parserInString = false
        parserReturn = false
        readStarted = false
        automatonStack = ArrayDeque()
        automatonStack!!.addLast(ParserToken.End.value)
        automatonStack!!.addLast(ParserToken.Text.value)
        lexer = Lexer(reader)
        endOfInput = false
        endOfJson = false
    }



    private fun populateParseTable(): Map<Int, MutableMap<Int, IntArray>> {
        // See section A.2. of the manual for details
        val parseTable: MutableMap<Int, MutableMap<Int, IntArray>> = mutableMapOf()
        tableAddRow(parseTable, ParserToken.Array)
        tableAddCol(parseTable, ParserToken.Array, '['.code, intArrayOf('['.code, ParserToken.ArrayPrime.value as Int))
        tableAddRow(parseTable, ParserToken.ArrayPrime)
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            '"'.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            '['.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(parseTable, ParserToken.ArrayPrime, ']'.code, intArrayOf(']'.code))
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            '{'.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            ParserToken.Number.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            ParserToken.True.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            ParserToken.False.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddCol(
            parseTable,
            ParserToken.ArrayPrime,
            ParserToken.Null.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        tableAddRow(parseTable, ParserToken.Object)
        tableAddCol(
            parseTable,
            ParserToken.Object,
            '{'.code,
            intArrayOf('{'.code, ParserToken.ObjectPrime.value as Int)
        )
        tableAddRow(parseTable, ParserToken.ObjectPrime)
        tableAddCol(
            parseTable,
            ParserToken.ObjectPrime,
            '"'.code,
            intArrayOf(ParserToken.Pair.value as Int, ParserToken.PairRest.value as Int, '}'.code)
        )
        tableAddCol(parseTable, ParserToken.ObjectPrime, '}'.code, intArrayOf('}'.code))
        tableAddRow(parseTable, ParserToken.Pair)
        tableAddCol(
            parseTable,
            ParserToken.Pair,
            '"'.code,
            intArrayOf(ParserToken.String.value as Int, ':'.code, ParserToken.Value.value as Int)
        )
        tableAddRow(parseTable, ParserToken.PairRest)
        tableAddCol(
            parseTable,
            ParserToken.PairRest,
            ','.code,
            intArrayOf(','.code, ParserToken.Pair.value as Int, ParserToken.PairRest.value as Int)
        )
        tableAddCol(parseTable, ParserToken.PairRest, '}'.code, intArrayOf(ParserToken.Epsilon.value as Int))
        tableAddRow(parseTable, ParserToken.String)
        tableAddCol(
            parseTable,
            ParserToken.String,
            '"'.code,
            intArrayOf('"'.code, ParserToken.CharSeq.value as Int, '"'.code)
        )
        tableAddRow(parseTable, ParserToken.Text)
        tableAddCol(parseTable, ParserToken.Text, '['.code, intArrayOf(ParserToken.Array.value as Int))
        tableAddCol(parseTable, ParserToken.Text, '{'.code, intArrayOf(ParserToken.Object.value as Int))
        tableAddRow(parseTable, ParserToken.Value)
        tableAddCol(parseTable, ParserToken.Value, '"'.code, intArrayOf(ParserToken.String.value as Int))
        tableAddCol(parseTable, ParserToken.Value, '['.code, intArrayOf(ParserToken.Array.value as Int))
        tableAddCol(parseTable, ParserToken.Value, '{'.code, intArrayOf(ParserToken.Object.value as Int))
        tableAddCol(
            parseTable,
            ParserToken.Value,
            ParserToken.Number.value as Int,
            intArrayOf(ParserToken.Number.value as Int)
        )
        tableAddCol(
            parseTable,
            ParserToken.Value,
            ParserToken.True.value as Int,
            intArrayOf(ParserToken.True.value as Int)
        )
        tableAddCol(
            parseTable,
            ParserToken.Value,
            ParserToken.False.value as Int,
            intArrayOf(ParserToken.False.value as Int)
        )
        tableAddCol(
            parseTable,
            ParserToken.Value,
            ParserToken.Null.value as Int,
            intArrayOf(ParserToken.Null.value as Int)
        )
        tableAddRow(parseTable, ParserToken.ValueRest)
        tableAddCol(
            parseTable,
            ParserToken.ValueRest,
            ','.code,
            intArrayOf(','.code, ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int)
        )
        tableAddCol(parseTable, ParserToken.ValueRest, ']'.code, intArrayOf(ParserToken.Epsilon.value as Int))
        return parseTable
    }

    private fun tableAddCol(
        parseTable: Map<Int, MutableMap<Int, IntArray>>, row: ParserToken, col: Int,
        symbols: IntArray,
    ) {
        parseTable[row.value]!![col] = symbols
    }

    private fun tableAddRow(parseTable: MutableMap<Int, MutableMap<Int, IntArray>>, rule: ParserToken) {
        parseTable[rule.value] = mutableMapOf()
    }

    private fun processNumber(number: String) {
        try {
            val nDouble = CommonNumber(number)
            tokenValue = nDouble
            return
        } catch (e: Exception) {
        }
        tokenValue =  CommonNumber(0)
    }

    private fun processSymbol() {
        if (currentSymbol == '['.code) {
            token = JsonToken.ArrayStart
            parserReturn = true
        } else if (currentSymbol == ']'.code) {
            token = JsonToken.ArrayEnd
            parserReturn = true
        } else if (currentSymbol == '{'.code) {
            token = JsonToken.ObjectStart
            parserReturn = true
        } else if (currentSymbol == '}'.code) {
            token = JsonToken.ObjectEnd
            parserReturn = true
        } else if (currentSymbol == '"'.code) {
            if (parserInString) {
                parserInString = false
                parserReturn = true
            } else {
                if (token === JsonToken.None) token = JsonToken.String
                parserInString = true
            }
        } else if (currentSymbol == ParserToken.CharSeq.value as Int) {
            tokenValue = lexer?.stringValue()
        } else if (currentSymbol == ParserToken.False.value as Int) {
            token = JsonToken.Boolean
            tokenValue = false
            parserReturn = true
        } else if (currentSymbol == ParserToken.Null.value as Int) {
            token = JsonToken.Null
            parserReturn = true
        } else if (currentSymbol == ParserToken.Number.value as Int) {
            processNumber(lexer?.stringValue()!!)
            token = JsonToken.Double
            // if (double.TryParse(lexer.StringValue, NumberStyles.Any,
            // CultureInfo.InvariantCulture, out double n_double))
            // {
            // token_value = n_double;
            // }
            // else
            // {
            // token_value = 0;
            // }
            parserReturn = true
        } else if (currentSymbol == ParserToken.Pair.value as Int) {
            token = JsonToken.PropertyName
        } else if (currentSymbol == ParserToken.True.value as Int) {
            token = JsonToken.Boolean
            tokenValue = true
            parserReturn = true
        }
    }

    @Throws(Exception::class)
    private fun readToken(): Boolean {
        if (endOfInput) return false
        lexer?.nextToken()
        if (lexer?.endOfInput()!!) {
            close()
            return false
        }
        currentInput = lexer?.token()!!
        return true
    }

    fun close() {
        if (endOfInput) return
        endOfInput = true
        endOfJson = true
    }

    @Throws(Exception::class)
    fun read(): Boolean {
        if (endOfInput) return false
        if (endOfJson) {
            endOfJson = false
            automatonStack?.clear()
            automatonStack?.addLast(ParserToken.End.value as Int)
            automatonStack?.addLast(ParserToken.Text.value as Int)
        }
        parserInString = false
        parserReturn = false
        token = JsonToken.None
        tokenValue = null
        if (!readStarted) {
            readStarted = true
            if (!readToken()) return false
        }
        var entrySymbols: IntArray?
        while (true) {
            if (parserReturn) {

                if (automatonStack?.last() == ParserToken.End.value as Int) endOfJson = true
                return true
            }
            currentSymbol = automatonStack?.removeLast()!!
            processSymbol()
            if (currentSymbol == currentInput) {
                if (!readToken()) {
                    if (automatonStack?.last() != ParserToken.End.value as Int) {
                        throw Exception("Input doesn't evaluate to proper JSON text")
                    }
                    return if (parserReturn) true else false
                }
                continue
            }
            entrySymbols = try {
                parseTable!![currentSymbol]!![currentInput]
            } catch (e: Exception) {
                throw Exception(ParserToken.values().get(currentInput).value.toString(), e)
            }
            if (entrySymbols!![0] == ParserToken.Epsilon.value as Int) continue
            for (i in entrySymbols.indices.reversed()) automatonStack?.addLast(entrySymbols[i])
        }
    }
}