package antlr.json

import antlr.data.MyNumber
import antlr.string.MyStringUtil


/**
 * @ClassName JsonReader.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
class JsonReader {
    private var parse_table: Map<Int, MutableMap<Int, IntArray>>? = PopulateParseTable();

    private var automaton_stack: ArrayDeque<Int>? = null
    private var current_input = 0
    private var current_symbol = 0
    private var end_of_json = false
    private var end_of_input = false
    private var lexer: Lexer? = null
    private var parser_in_string = false
    private var parser_return = false
    private var read_started = false
    private var token_value: Any? = null
    private var token: JsonToken? = null

    fun Token(): JsonToken? {
        return token
    }

    fun Value(): Any? {
        return token_value
    }


    fun JsonReader(json_text: String?) {
        val reader = MyStringUtil(json_text)
        parser_in_string = false
        parser_return = false
        read_started = false
        automaton_stack = ArrayDeque<Int>()
        automaton_stack!!.addLast(ParserToken.End.value as Int)
        automaton_stack!!.addLast(ParserToken.Text.value as Int)
        lexer = Lexer(reader)
        end_of_input = false
        end_of_json = false
    }

    private fun PopulateParseTable(): Map<Int, MutableMap<Int, IntArray>> {
        // See section A.2. of the manual for details
        val parse_table: MutableMap<Int, MutableMap<Int, IntArray>> = mutableMapOf<Int, MutableMap<Int, IntArray>>()
        TableAddRow(parse_table, ParserToken.Array)
        TableAddCol(parse_table, ParserToken.Array, '['.code, intArrayOf('['.code, ParserToken.ArrayPrime.value as Int))
        TableAddRow(parse_table, ParserToken.ArrayPrime)
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            '"'.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            '['.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(parse_table, ParserToken.ArrayPrime, ']'.code, intArrayOf(']'.code))
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            '{'.code,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            ParserToken.Number.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            ParserToken.True.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            ParserToken.False.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddCol(
            parse_table,
            ParserToken.ArrayPrime,
            ParserToken.Null.value as Int,
            intArrayOf(ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int, ']'.code)
        )
        TableAddRow(parse_table, ParserToken.Object)
        TableAddCol(
            parse_table,
            ParserToken.Object,
            '{'.code,
            intArrayOf('{'.code, ParserToken.ObjectPrime.value as Int)
        )
        TableAddRow(parse_table, ParserToken.ObjectPrime)
        TableAddCol(
            parse_table,
            ParserToken.ObjectPrime,
            '"'.code,
            intArrayOf(ParserToken.Pair.value as Int, ParserToken.PairRest.value as Int, '}'.code)
        )
        TableAddCol(parse_table, ParserToken.ObjectPrime, '}'.code, intArrayOf('}'.code))
        TableAddRow(parse_table, ParserToken.Pair)
        TableAddCol(
            parse_table,
            ParserToken.Pair,
            '"'.code,
            intArrayOf(ParserToken.String.value as Int, ':'.code, ParserToken.Value.value as Int)
        )
        TableAddRow(parse_table, ParserToken.PairRest)
        TableAddCol(
            parse_table,
            ParserToken.PairRest,
            ','.code,
            intArrayOf(','.code, ParserToken.Pair.value as Int, ParserToken.PairRest.value as Int)
        )
        TableAddCol(parse_table, ParserToken.PairRest, '}'.code, intArrayOf(ParserToken.Epsilon.value as Int))
        TableAddRow(parse_table, ParserToken.String)
        TableAddCol(
            parse_table,
            ParserToken.String,
            '"'.code,
            intArrayOf('"'.code, ParserToken.CharSeq.value as Int, '"'.code)
        )
        TableAddRow(parse_table, ParserToken.Text)
        TableAddCol(parse_table, ParserToken.Text, '['.code, intArrayOf(ParserToken.Array.value as Int))
        TableAddCol(parse_table, ParserToken.Text, '{'.code, intArrayOf(ParserToken.Object.value as Int))
        TableAddRow(parse_table, ParserToken.Value)
        TableAddCol(parse_table, ParserToken.Value, '"'.code, intArrayOf(ParserToken.String.value as Int))
        TableAddCol(parse_table, ParserToken.Value, '['.code, intArrayOf(ParserToken.Array.value as Int))
        TableAddCol(parse_table, ParserToken.Value, '{'.code, intArrayOf(ParserToken.Object.value as Int))
        TableAddCol(
            parse_table,
            ParserToken.Value,
            ParserToken.Number.value as Int,
            intArrayOf(ParserToken.Number.value as Int)
        )
        TableAddCol(
            parse_table,
            ParserToken.Value,
            ParserToken.True.value as Int,
            intArrayOf(ParserToken.True.value as Int)
        )
        TableAddCol(
            parse_table,
            ParserToken.Value,
            ParserToken.False.value as Int,
            intArrayOf(ParserToken.False.value as Int)
        )
        TableAddCol(
            parse_table,
            ParserToken.Value,
            ParserToken.Null.value as Int,
            intArrayOf(ParserToken.Null.value as Int)
        )
        TableAddRow(parse_table, ParserToken.ValueRest)
        TableAddCol(
            parse_table,
            ParserToken.ValueRest,
            ','.code,
            intArrayOf(','.code, ParserToken.Value.value as Int, ParserToken.ValueRest.value as Int)
        )
        TableAddCol(parse_table, ParserToken.ValueRest, ']'.code, intArrayOf(ParserToken.Epsilon.value as Int))
        return parse_table
    }

    private fun TableAddCol(
        parse_table: Map<Int, MutableMap<Int, IntArray>>, row: ParserToken, col: Int,
        symbols: IntArray,
    ) {
        parse_table[row.value]!![col] = symbols
    }

    private fun TableAddRow(parse_table: MutableMap<Int, MutableMap<Int, IntArray>>, rule: ParserToken) {
        parse_table[rule.value] = mutableMapOf<Int, IntArray>()
    }

    private fun ProcessNumber(number: String) {
        try {
            val n_double = MyNumber(number)
            token_value = n_double
            return
        } catch (e: Exception) {
        }
        //        Double n_double=Double.valueOf(number);
//        if (n_double.isNaN()==false) {
//            token_value = n_double.doubleValue();
//            return;
//        }
        // if (number.indexOf('.') != -1 || number.indexOf('e') != -1 || number.indexOf('E') != -1) {
        //     Double n_double=Double.valueOf(number);
        //     if (n_double.isNaN()==false) {
        //         token_value = n_double.doubleValue();
        //         return;
        //     }
        // }
        // if (int.TryParse(number, NumberStyles.Integer, CultureInfo.InvariantCulture, out int n_int32)) {
        //     token_value = (double)n_int32;
        //     return;
        // }
        // if (long.TryParse(number, NumberStyles.Integer, CultureInfo.InvariantCulture, out long n_int64)) {
        //     token_value = (double)n_int64;
        //     return;
        // }

        // Shouldn't happen, but just in case, return something
        token_value =  MyNumber(0)
    }

    private fun ProcessSymbol() {
        if (current_symbol == '['.code) {
            token = JsonToken.ArrayStart
            parser_return = true
        } else if (current_symbol == ']'.code) {
            token = JsonToken.ArrayEnd
            parser_return = true
        } else if (current_symbol == '{'.code) {
            token = JsonToken.ObjectStart
            parser_return = true
        } else if (current_symbol == '}'.code) {
            token = JsonToken.ObjectEnd
            parser_return = true
        } else if (current_symbol == '"'.code) {
            if (parser_in_string) {
                parser_in_string = false
                parser_return = true
            } else {
                if (token === JsonToken.None) token = JsonToken.String
                parser_in_string = true
            }
        } else if (current_symbol == ParserToken.CharSeq.value as Int) {
            token_value = lexer?.StringValue()
        } else if (current_symbol == ParserToken.False.value as Int) {
            token = JsonToken.Boolean
            token_value = false
            parser_return = true
        } else if (current_symbol == ParserToken.Null.value as Int) {
            token = JsonToken.Null
            parser_return = true
        } else if (current_symbol == ParserToken.Number.value as Int) {
            ProcessNumber(lexer?.StringValue()!!)
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
            parser_return = true
        } else if (current_symbol == ParserToken.Pair.value as Int) {
            token = JsonToken.PropertyName
        } else if (current_symbol == ParserToken.True.value as Int) {
            token = JsonToken.Boolean
            token_value = true
            parser_return = true
        }
    }

    @Throws(Exception::class)
    private fun ReadToken(): Boolean {
        if (end_of_input) return false
        lexer?.NextToken()
        if (lexer?.EndOfInput()!!) {
            Close()
            return false
        }
        current_input = lexer?.Token()!!
        return true
    }

    fun Close() {
        if (end_of_input) return
        end_of_input = true
        end_of_json = true
    }

    @Throws(Exception::class)
    fun Read(): Boolean {
        if (end_of_input) return false
        if (end_of_json) {
            end_of_json = false
            automaton_stack?.clear()
            automaton_stack?.addLast(ParserToken.End.value as Int)
            automaton_stack?.addLast(ParserToken.Text.value as Int)
        }
        parser_in_string = false
        parser_return = false
        token = JsonToken.None
        token_value = null
        if (!read_started) {
            read_started = true
            if (!ReadToken()) return false
        }
        var entry_symbols: IntArray?
        while (true) {
            if (parser_return) {

                if (automaton_stack?.last() == ParserToken.End.value as Int) end_of_json = true
                return true
            }
            current_symbol = automaton_stack?.removeLast()!!
            ProcessSymbol()
            if (current_symbol == current_input) {
                if (!ReadToken()) {
                    if (automaton_stack?.last() != ParserToken.End.value as Int) {
                        throw Exception("Input doesn't evaluate to proper JSON text")
                    }
                    return if (parser_return) true else false
                }
                continue
            }
            entry_symbols = try {
                parse_table!![current_symbol]!![current_input]
            } catch (e: Exception) {
                throw Exception(ParserToken.values().get(current_input).value.toString(), e)
            }
            if (entry_symbols!![0] == ParserToken.Epsilon.value as Int) continue
            for (i in entry_symbols.indices.reversed()) automaton_stack?.addLast(entry_symbols[i])
        }
    }
}