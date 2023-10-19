(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'base-64', './kotlin-kotlin-stdlib-js-ir.js', './antlr-kotlin-antlr-kotlin-runtime-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('base-64'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./antlr-kotlin-antlr-kotlin-runtime-js-ir.js'));
  else {
    if (typeof Base64 === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo'. Its dependency 'base-64' was not found. Please, check whether 'base-64' is loaded prior to 'antlt-kotlin-demo'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'antlt-kotlin-demo'.");
    }
    if (typeof this['antlr-kotlin-antlr-kotlin-runtime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo'. Its dependency 'antlr-kotlin-antlr-kotlin-runtime-js-ir' was not found. Please, check whether 'antlr-kotlin-antlr-kotlin-runtime-js-ir' is loaded prior to 'antlt-kotlin-demo'.");
    }
    root['antlt-kotlin-demo'] = factory(typeof this['antlt-kotlin-demo'] === 'undefined' ? {} : this['antlt-kotlin-demo'], Base64, this['kotlin-kotlin-stdlib-js-ir'], this['antlr-kotlin-antlr-kotlin-runtime-js-ir']);
  }
}(this, function (_, Base64, kotlin_kotlin, kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var classMeta = kotlin_kotlin.$_$.i3;
  var ParseTreeProperty = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.t;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var ensureNotNull = kotlin_kotlin.$_$.y4;
  var println = kotlin_kotlin.$_$.c3;
  var AbstractParseTreeVisitor = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.r;
  var THROW_ISE = kotlin_kotlin.$_$.x4;
  var Unit_getInstance = kotlin_kotlin.$_$.n1;
  var PredictionContextCache = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.p;
  var listOf = kotlin_kotlin.$_$.i2;
  var copyToArray = kotlin_kotlin.$_$.c2;
  var VocabularyImpl_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.k3;
  var ATNDeserializer_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.d;
  var asCharArray = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.b;
  var DFA = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.q;
  var objectMeta = kotlin_kotlin.$_$.w3;
  var Enum = kotlin_kotlin.$_$.r4;
  var Lexer = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.x;
  var Lexer_init_$Init$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.w4;
  var isArray = kotlin_kotlin.$_$.o3;
  var LexerATNSimulator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.n;
  var KProperty1 = kotlin_kotlin.$_$.b4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l3;
  var ParseTreeListener = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.s;
  var interfaceMeta = kotlin_kotlin.$_$.n3;
  var ParserRuleContext_init_$Init$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.k;
  var ParserRuleContext_init_$Init$_0 = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.j;
  var getKClass = kotlin_kotlin.$_$.b;
  var TypeDeclarator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.a;
  var ParserRuleContext = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.y;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var getType = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.c;
  var isInterface = kotlin_kotlin.$_$.p3;
  var NoViableAltException_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.f;
  var Token = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.b1;
  var Companion_getInstance = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.l;
  var FailedPredicateException_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.e;
  var RecognitionException = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.a1;
  var Parser = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.z;
  var ParserATNSimulator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.o;
  var Long = kotlin_kotlin.$_$.s4;
  var ParseTreeVisitor = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.u;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.e1;
  var toInt = kotlin_kotlin.$_$.k4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var numberToChar = kotlin_kotlin.$_$.u3;
  var decodeToString = kotlin_kotlin.$_$.g4;
  var encodeToByteArray = kotlin_kotlin.$_$.h4;
  //endregion
  //region block: pre-declaration
  CalculatorBaseListenerImpl.prototype = Object.create(CalculatorBaseListener.prototype);
  CalculatorBaseListenerImpl.prototype.constructor = CalculatorBaseListenerImpl;
  CalculatorBaseVisitor.prototype = Object.create(AbstractParseTreeVisitor.prototype);
  CalculatorBaseVisitor.prototype.constructor = CalculatorBaseVisitor;
  Tokens.prototype = Object.create(Enum.prototype);
  Tokens.prototype.constructor = Tokens;
  Channels.prototype = Object.create(Enum.prototype);
  Channels.prototype.constructor = Channels;
  Modes.prototype = Object.create(Enum.prototype);
  Modes.prototype.constructor = Modes;
  Rules.prototype = Object.create(Enum.prototype);
  Rules.prototype.constructor = Rules;
  CalculatorLexer.prototype = Object.create(Lexer.prototype);
  CalculatorLexer.prototype.constructor = CalculatorLexer;
  Tokens_0.prototype = Object.create(Enum.prototype);
  Tokens_0.prototype.constructor = Tokens_0;
  Rules_0.prototype = Object.create(Enum.prototype);
  Rules_0.prototype.constructor = Rules_0;
  ProgContext.prototype = Object.create(ParserRuleContext.prototype);
  ProgContext.prototype.constructor = ProgContext;
  StatContext.prototype = Object.create(ParserRuleContext.prototype);
  StatContext.prototype.constructor = StatContext;
  PrintContext.prototype = Object.create(StatContext.prototype);
  PrintContext.prototype.constructor = PrintContext;
  BlankContext.prototype = Object.create(StatContext.prototype);
  BlankContext.prototype.constructor = BlankContext;
  AssignContext.prototype = Object.create(StatContext.prototype);
  AssignContext.prototype.constructor = AssignContext;
  ExprContext.prototype = Object.create(ParserRuleContext.prototype);
  ExprContext.prototype.constructor = ExprContext;
  MulDivContext.prototype = Object.create(ExprContext.prototype);
  MulDivContext.prototype.constructor = MulDivContext;
  AddSubContext.prototype = Object.create(ExprContext.prototype);
  AddSubContext.prototype.constructor = AddSubContext;
  ParentheseContext.prototype = Object.create(ExprContext.prototype);
  ParentheseContext.prototype.constructor = ParentheseContext;
  IdContext.prototype = Object.create(ExprContext.prototype);
  IdContext.prototype.constructor = IdContext;
  IntContext.prototype = Object.create(ExprContext.prototype);
  IntContext.prototype.constructor = IntContext;
  CalculatorParser.prototype = Object.create(Parser.prototype);
  CalculatorParser.prototype.constructor = CalculatorParser;
  CalculatorVistorImp.prototype = Object.create(CalculatorBaseVisitor.prototype);
  CalculatorVistorImp.prototype.constructor = CalculatorVistorImp;
  function encodeToString(src) {
    var encoded = this.encode_ub6m3x_k$(src);
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    var tmp0_buildString = encoded.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$(tmp0_buildString);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.base64.Base64Encoder.encodeToString.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var indexedObject = encoded;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.base64.Base64Encoder.encodeToString.<anonymous>.<anonymous>' call
      tmp0_apply.append_t8oh9e_k$(numberToChar(element));
    }
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return tmp$ret$1;
  }
  function testCommonString(value) {
    return value;
  }
  //endregion
  function CalculatorBaseListener() {
  }
  CalculatorBaseListener.prototype.enterProg_xx5gk6_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitProg_794ld0_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterPrint_mn305g_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitPrint_r1pq9q_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterAssign_e4hz7u_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitAssign_d5m33w_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterBlank_p1ehhu_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitBlank_tg17m4_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterMulDiv_5lqp4m_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitMulDiv_wvurgc_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterAddSub_qh2xyu_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitAddSub_h9x1ok_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterParenthese_6hls52_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitParenthese_mmg2nw_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterId_8qq4cq_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitId_5ov9ks_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterInt_e26szs_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitInt_56rd32_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.enterEveryRule_qb430n_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.exitEveryRule_1zne9f_k$ = function (ctx) {
  };
  CalculatorBaseListener.prototype.visitTerminal_j27dif_k$ = function (node) {
  };
  CalculatorBaseListener.prototype.visitErrorNode_7q1wqt_k$ = function (node) {
  };
  CalculatorBaseListener.$metadata$ = classMeta('CalculatorBaseListener', [CalculatorListener]);
  function CalculatorBaseListenerImpl() {
    CalculatorBaseListener.call(this);
    this.ctxs_1 = new ParseTreeProperty();
    this.map_1 = HashMap_init_$Create$();
  }
  CalculatorBaseListenerImpl.prototype.get_ctxs_wokc51_k$ = function () {
    return this.ctxs_1;
  };
  CalculatorBaseListenerImpl.prototype.get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  CalculatorBaseListenerImpl.prototype.enterAddSub_qh2xyu_k$ = function (ctx) {
    var left = this.ctxs_1.get_ygppjo_k$(ensureNotNull(ctx.findExpr_28ilfx_k$(0)));
    var right = this.ctxs_1.get_ygppjo_k$(ensureNotNull(ctx.findExpr_28ilfx_k$(1)));
    var tmp0_safe_receiver = ctx.op_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_type_wovaf7_k$()) === Tokens_ADD_getInstance_0().id_1) {
      this.ctxs_1.put_6s7jo3_k$(ctx, left + right | 0);
    } else {
      this.ctxs_1.put_6s7jo3_k$(ctx, left - right | 0);
    }
  };
  CalculatorBaseListenerImpl.prototype.enterPrint_mn305g_k$ = function (ctx) {
    var value = this.ctxs_1.get_ygppjo_k$(ensureNotNull(ctx.findExpr_b8mw8i_k$()));
    var tmp = ctx.findExpr_b8mw8i_k$();
    if (tmp instanceof PrintContext) {
      println('\u7ED3\u679C\uFF1A' + value);
    }
  };
  CalculatorBaseListenerImpl.$metadata$ = classMeta('CalculatorBaseListenerImpl', undefined, undefined, undefined, undefined, CalculatorBaseListener.prototype);
  function CalculatorBaseVisitor() {
    AbstractParseTreeVisitor.call(this);
  }
  CalculatorBaseVisitor.prototype.visitProg_t2dyu2_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitPrint_97nidc_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitAssign_737p8m_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitBlank_drhv0u_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitMulDiv_8a9qka_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitAddSub_aosz2e_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitParenthese_slvire_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitId_tbvyx2_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.prototype.visitInt_ew8u0s_k$ = function (ctx) {
    return ensureNotNull(ensureNotNull(this).visitChildren_mqo9kp_k$(ctx));
  };
  CalculatorBaseVisitor.$metadata$ = classMeta('CalculatorBaseVisitor', [CalculatorVisitor], undefined, undefined, undefined, AbstractParseTreeVisitor.prototype);
  function _get_LITERAL_NAMES__i6pfaf($this) {
    return $this.LITERAL_NAMES_1;
  }
  function _get_SYMBOLIC_NAMES__jh2jgw($this) {
    return $this.SYMBOLIC_NAMES_1;
  }
  function _get_serializedATN__dshj2e($this) {
    return $this.serializedATN_1;
  }
  var Tokens_T__0_instance;
  var Tokens_T__1_instance;
  var Tokens_T__2_instance;
  var Tokens_MUL_instance;
  var Tokens_DIV_instance;
  var Tokens_ADD_instance;
  var Tokens_SUB_instance;
  var Tokens_ID_instance;
  var Tokens_INT_instance;
  var Tokens_NEWLINE_instance;
  var Tokens_DELIMITER_instance;
  var Tokens_WS_instance;
  function values() {
    return [Tokens_T__0_getInstance(), Tokens_T__1_getInstance(), Tokens_T__2_getInstance(), Tokens_MUL_getInstance(), Tokens_DIV_getInstance(), Tokens_ADD_getInstance(), Tokens_SUB_getInstance(), Tokens_ID_getInstance(), Tokens_INT_getInstance(), Tokens_NEWLINE_getInstance(), Tokens_DELIMITER_getInstance(), Tokens_WS_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'T__0':
        return Tokens_T__0_getInstance();
      case 'T__1':
        return Tokens_T__1_getInstance();
      case 'T__2':
        return Tokens_T__2_getInstance();
      case 'MUL':
        return Tokens_MUL_getInstance();
      case 'DIV':
        return Tokens_DIV_getInstance();
      case 'ADD':
        return Tokens_ADD_getInstance();
      case 'SUB':
        return Tokens_SUB_getInstance();
      case 'ID':
        return Tokens_ID_getInstance();
      case 'INT':
        return Tokens_INT_getInstance();
      case 'NEWLINE':
        return Tokens_NEWLINE_getInstance();
      case 'DELIMITER':
        return Tokens_DELIMITER_getInstance();
      case 'WS':
        return Tokens_WS_getInstance();
      default:
        Tokens_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Tokens_entriesInitialized;
  function Tokens_initEntries() {
    if (Tokens_entriesInitialized)
      return Unit_getInstance();
    Tokens_entriesInitialized = true;
    Tokens_T__0_instance = new Tokens('T__0', 0, 1);
    Tokens_T__1_instance = new Tokens('T__1', 1, 2);
    Tokens_T__2_instance = new Tokens('T__2', 2, 3);
    Tokens_MUL_instance = new Tokens('MUL', 3, 4);
    Tokens_DIV_instance = new Tokens('DIV', 4, 5);
    Tokens_ADD_instance = new Tokens('ADD', 5, 6);
    Tokens_SUB_instance = new Tokens('SUB', 6, 7);
    Tokens_ID_instance = new Tokens('ID', 7, 8);
    Tokens_INT_instance = new Tokens('INT', 8, 9);
    Tokens_NEWLINE_instance = new Tokens('NEWLINE', 9, 10);
    Tokens_DELIMITER_instance = new Tokens('DELIMITER', 10, 11);
    Tokens_WS_instance = new Tokens('WS', 11, 12);
  }
  var Channels_DEFAULT_TOKEN_CHANNEL_instance;
  var Channels_HIDDEN_instance;
  function values_0() {
    return [Channels_DEFAULT_TOKEN_CHANNEL_getInstance(), Channels_HIDDEN_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'DEFAULT_TOKEN_CHANNEL':
        return Channels_DEFAULT_TOKEN_CHANNEL_getInstance();
      case 'HIDDEN':
        return Channels_HIDDEN_getInstance();
      default:
        Channels_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Channels_entriesInitialized;
  function Channels_initEntries() {
    if (Channels_entriesInitialized)
      return Unit_getInstance();
    Channels_entriesInitialized = true;
    Channels_DEFAULT_TOKEN_CHANNEL_instance = new Channels('DEFAULT_TOKEN_CHANNEL', 0, 0);
    Channels_HIDDEN_instance = new Channels('HIDDEN', 1, 1);
  }
  var Modes_DEFAULT_MODE_instance;
  function values_1() {
    return [Modes_DEFAULT_MODE_getInstance()];
  }
  function valueOf_1(value) {
    if ('DEFAULT_MODE' === value)
      return Modes_DEFAULT_MODE_getInstance();
    else {
      Modes_initEntries();
      THROW_ISE();
    }
  }
  var Modes_entriesInitialized;
  function Modes_initEntries() {
    if (Modes_entriesInitialized)
      return Unit_getInstance();
    Modes_entriesInitialized = true;
    Modes_DEFAULT_MODE_instance = new Modes('DEFAULT_MODE', 0, 0);
  }
  var Rules_T__0_instance;
  var Rules_T__1_instance;
  var Rules_T__2_instance;
  var Rules_MUL_instance;
  var Rules_DIV_instance;
  var Rules_ADD_instance;
  var Rules_SUB_instance;
  var Rules_ID_instance;
  var Rules_INT_instance;
  var Rules_NEWLINE_instance;
  var Rules_DELIMITER_instance;
  var Rules_WS_instance;
  function values_2() {
    return [Rules_T__0_getInstance(), Rules_T__1_getInstance(), Rules_T__2_getInstance(), Rules_MUL_getInstance(), Rules_DIV_getInstance(), Rules_ADD_getInstance(), Rules_SUB_getInstance(), Rules_ID_getInstance(), Rules_INT_getInstance(), Rules_NEWLINE_getInstance(), Rules_DELIMITER_getInstance(), Rules_WS_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'T__0':
        return Rules_T__0_getInstance();
      case 'T__1':
        return Rules_T__1_getInstance();
      case 'T__2':
        return Rules_T__2_getInstance();
      case 'MUL':
        return Rules_MUL_getInstance();
      case 'DIV':
        return Rules_DIV_getInstance();
      case 'ADD':
        return Rules_ADD_getInstance();
      case 'SUB':
        return Rules_SUB_getInstance();
      case 'ID':
        return Rules_ID_getInstance();
      case 'INT':
        return Rules_INT_getInstance();
      case 'NEWLINE':
        return Rules_NEWLINE_getInstance();
      case 'DELIMITER':
        return Rules_DELIMITER_getInstance();
      case 'WS':
        return Rules_WS_getInstance();
      default:
        Rules_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Rules_entriesInitialized;
  function Rules_initEntries() {
    if (Rules_entriesInitialized)
      return Unit_getInstance();
    Rules_entriesInitialized = true;
    Rules_T__0_instance = new Rules('T__0', 0);
    Rules_T__1_instance = new Rules('T__1', 1);
    Rules_T__2_instance = new Rules('T__2', 2);
    Rules_MUL_instance = new Rules('MUL', 3);
    Rules_DIV_instance = new Rules('DIV', 4);
    Rules_ADD_instance = new Rules('ADD', 5);
    Rules_SUB_instance = new Rules('SUB', 6);
    Rules_ID_instance = new Rules('ID', 7);
    Rules_INT_instance = new Rules('INT', 8);
    Rules_NEWLINE_instance = new Rules('NEWLINE', 9);
    Rules_DELIMITER_instance = new Rules('DELIMITER', 10);
    Rules_WS_instance = new Rules('WS', 11);
  }
  function Companion() {
    Companion_instance = this;
    this.sharedContextCache_1 = new PredictionContextCache();
    this.LITERAL_NAMES_1 = listOf([null, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", null, null, null, "';'"]);
    this.SYMBOLIC_NAMES_1 = listOf([null, null, null, null, 'MUL', 'DIV', 'ADD', 'SUB', 'ID', 'INT', 'NEWLINE', 'DELIMITER', 'WS']);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.LITERAL_NAMES_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp1_toTypedArray = this.SYMBOLIC_NAMES_1;
    tmp$ret$1 = copyToArray(tmp1_toTypedArray);
    var tmp_1 = tmp$ret$1;
    tmp.VOCABULARY_1 = VocabularyImpl_init_$Create$(tmp_0, tmp_1, null, 4, null);
    var tmp_2 = this;
    var tmp_3 = 0;
    var tmp_4 = this.SYMBOLIC_NAMES_1.get_size_woubt6_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(tmp_4), null);
    var tmp_5 = tmp$ret$2;
    while (tmp_3 < tmp_4) {
      var tmp_6 = tmp_3;
      var tmp$ret$3;
      // Inline function 'antlr.Companion.tokenNames.<anonymous>' call
      var el = Companion_getInstance_0().VOCABULARY_1.getLiteralName_1erz7_k$(tmp_6);
      if (el == null) {
        el = Companion_getInstance_0().VOCABULARY_1.getSymbolicName_yk4gge_k$(tmp_6);
      }
      if (el == null) {
        el = '<INVALID>';
      }
      tmp$ret$3 = el;
      tmp_5[tmp_6] = tmp$ret$3;
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.tokenNames_1 = tmp_5;
    this.serializedATN_1 = '\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x02\x0EA\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04\r\t\r\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t+\n\t\r\t\x0E\t,\x03\n\x06\n0\n\n\r\n\x0E\n1\x03\x0B\x05\x0B5\n\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\r\x06\r<\n\r\r\r\x0E\r=\x03\r\x03\r\x02\x02\x0E\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x03\x02\x05\x04\x02C\\c|\x03\x022;\x04\x02\x0B\x0B""\x02D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\x0B#\x03\x02\x02\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11*\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x154\x03\x02\x02\x02\x178\x03\x02\x02\x02\x19;\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07+\x02\x02 \b\x03\x02\x02\x02!"\x07,\x02\x02"\n\x03\x02\x02\x02#$\x071\x02\x02$\f\x03\x02\x02\x02%&\x07-\x02\x02&\x0E\x03\x02\x02\x02\'(\x07/\x02\x02(\x10\x03\x02\x02\x02)+\t\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x12\x03\x02\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x14\x03\x02\x02\x0235\x07\x0F\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\f\x02\x027\x16\x03\x02\x02\x0289\x07=\x02\x029\x18\x03\x02\x02\x02:<\t\x04\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\b\r\x02\x02@\x1A\x03\x02\x02\x02\x07\x02,14=\x03\b\x02\x02';
    var tmp_7 = this;
    tmp_7.ATN_1 = ATNDeserializer_init_$Create$(null, 1, null).deserialize_c68pee_k$(asCharArray('\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x02\x0EA\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04\r\t\r\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t+\n\t\r\t\x0E\t,\x03\n\x06\n0\n\n\r\n\x0E\n1\x03\x0B\x05\x0B5\n\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\r\x06\r<\n\r\r\r\x0E\r=\x03\r\x03\r\x02\x02\x0E\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x03\x02\x05\x04\x02C\\c|\x03\x022;\x04\x02\x0B\x0B""\x02D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\x0B#\x03\x02\x02\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11*\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x154\x03\x02\x02\x02\x178\x03\x02\x02\x02\x19;\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07+\x02\x02 \b\x03\x02\x02\x02!"\x07,\x02\x02"\n\x03\x02\x02\x02#$\x071\x02\x02$\f\x03\x02\x02\x02%&\x07-\x02\x02&\x0E\x03\x02\x02\x02\'(\x07/\x02\x02(\x10\x03\x02\x02\x02)+\t\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x12\x03\x02\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x14\x03\x02\x02\x0235\x07\x0F\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\f\x02\x027\x16\x03\x02\x02\x0289\x07=\x02\x029\x18\x03\x02\x02\x02:<\t\x04\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\b\r\x02\x02@\x1A\x03\x02\x02\x02\x07\x02,14=\x03\b\x02\x02'));
    var tmp_8 = this;
    var tmp_9 = 0;
    var tmp_10 = this.ATN_1.get_numberOfDecisions_u9sgni_k$();
    var tmp$ret$4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$4 = fillArrayVal(Array(tmp_10), null);
    var tmp_11 = tmp$ret$4;
    while (tmp_9 < tmp_10) {
      var tmp_12 = tmp_9;
      var tmp$ret$5;
      // Inline function 'antlr.Companion.<anonymous>' call
      tmp$ret$5 = new DFA(ensureNotNull(Companion_getInstance_0().ATN_1.getDecisionState_m2smv2_k$(tmp_12)), tmp_12);
      tmp_11[tmp_12] = tmp$ret$5;
      tmp_9 = tmp_9 + 1 | 0;
    }
    tmp_8.decisionToDFA_1 = tmp_11;
  }
  Companion.prototype.get_decisionToDFA_9qhkht_k$ = function () {
    return this.decisionToDFA_1;
  };
  Companion.prototype.get_sharedContextCache_zbguan_k$ = function () {
    return this.sharedContextCache_1;
  };
  Companion.prototype.get_VOCABULARY_rhqfm9_k$ = function () {
    return this.VOCABULARY_1;
  };
  Companion.prototype.get_tokenNames_iriaw8_k$ = function () {
    return this.tokenNames_1;
  };
  Companion.prototype.get_ATN_18jxta_k$ = function () {
    return this.ATN_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Tokens(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Tokens.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Tokens.$metadata$ = classMeta('Tokens', undefined, undefined, undefined, undefined, Enum.prototype);
  function Channels(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Channels.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Channels.$metadata$ = classMeta('Channels', undefined, undefined, undefined, undefined, Enum.prototype);
  function Modes(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Modes.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Modes.$metadata$ = classMeta('Modes', undefined, undefined, undefined, undefined, Enum.prototype);
  function Rules(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Rules.$metadata$ = classMeta('Rules', undefined, undefined, undefined, undefined, Enum.prototype);
  function Tokens_T__0_getInstance() {
    Tokens_initEntries();
    return Tokens_T__0_instance;
  }
  function Tokens_T__1_getInstance() {
    Tokens_initEntries();
    return Tokens_T__1_instance;
  }
  function Tokens_T__2_getInstance() {
    Tokens_initEntries();
    return Tokens_T__2_instance;
  }
  function Tokens_MUL_getInstance() {
    Tokens_initEntries();
    return Tokens_MUL_instance;
  }
  function Tokens_DIV_getInstance() {
    Tokens_initEntries();
    return Tokens_DIV_instance;
  }
  function Tokens_ADD_getInstance() {
    Tokens_initEntries();
    return Tokens_ADD_instance;
  }
  function Tokens_SUB_getInstance() {
    Tokens_initEntries();
    return Tokens_SUB_instance;
  }
  function Tokens_ID_getInstance() {
    Tokens_initEntries();
    return Tokens_ID_instance;
  }
  function Tokens_INT_getInstance() {
    Tokens_initEntries();
    return Tokens_INT_instance;
  }
  function Tokens_NEWLINE_getInstance() {
    Tokens_initEntries();
    return Tokens_NEWLINE_instance;
  }
  function Tokens_DELIMITER_getInstance() {
    Tokens_initEntries();
    return Tokens_DELIMITER_instance;
  }
  function Tokens_WS_getInstance() {
    Tokens_initEntries();
    return Tokens_WS_instance;
  }
  function Channels_DEFAULT_TOKEN_CHANNEL_getInstance() {
    Channels_initEntries();
    return Channels_DEFAULT_TOKEN_CHANNEL_instance;
  }
  function Channels_HIDDEN_getInstance() {
    Channels_initEntries();
    return Channels_HIDDEN_instance;
  }
  function Modes_DEFAULT_MODE_getInstance() {
    Modes_initEntries();
    return Modes_DEFAULT_MODE_instance;
  }
  function Rules_T__0_getInstance() {
    Rules_initEntries();
    return Rules_T__0_instance;
  }
  function Rules_T__1_getInstance() {
    Rules_initEntries();
    return Rules_T__1_instance;
  }
  function Rules_T__2_getInstance() {
    Rules_initEntries();
    return Rules_T__2_instance;
  }
  function Rules_MUL_getInstance() {
    Rules_initEntries();
    return Rules_MUL_instance;
  }
  function Rules_DIV_getInstance() {
    Rules_initEntries();
    return Rules_DIV_instance;
  }
  function Rules_ADD_getInstance() {
    Rules_initEntries();
    return Rules_ADD_instance;
  }
  function Rules_SUB_getInstance() {
    Rules_initEntries();
    return Rules_SUB_instance;
  }
  function Rules_ID_getInstance() {
    Rules_initEntries();
    return Rules_ID_instance;
  }
  function Rules_INT_getInstance() {
    Rules_initEntries();
    return Rules_INT_instance;
  }
  function Rules_NEWLINE_getInstance() {
    Rules_initEntries();
    return Rules_NEWLINE_instance;
  }
  function Rules_DELIMITER_getInstance() {
    Rules_initEntries();
    return Rules_DELIMITER_instance;
  }
  function Rules_WS_getInstance() {
    Rules_initEntries();
    return Rules_WS_instance;
  }
  function CalculatorLexer(input) {
    Companion_getInstance_0();
    Lexer_init_$Init$(input, this);
    this.input_1 = input;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = values_0();
    var tmp1_map = name$factory();
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      tmp0_mapTo.add_1j60pz_k$(tmp1_map(item));
    }
    tmp$ret$0 = tmp0_mapTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_toTypedArray = tmp$ret$1;
    tmp$ret$2 = copyToArray(tmp2_toTypedArray);
    tmp.channelNames_1 = tmp$ret$2;
    var tmp_0 = this;
    var tmp_1 = Companion_getInstance_0().ATN_1;
    var tmp_2 = Companion_getInstance_0().decisionToDFA_1;
    tmp_0.interpreter_1 = new LexerATNSimulator(this, tmp_1, isArray(tmp_2) ? tmp_2 : THROW_CCE(), Companion_getInstance_0().sharedContextCache_1);
  }
  CalculatorLexer.prototype.get_input_it4gip_k$ = function () {
    return this.input_1;
  };
  CalculatorLexer.prototype.get_ruleNames_qcosu5_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = values_2();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(tmp0_map.length);
    var indexedObject = tmp0_map;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'antlr.CalculatorLexer.<get-ruleNames>.<anonymous>' call
      tmp$ret$0 = item.name_1;
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  CalculatorLexer.prototype.get_grammarFileName_gb65ff_k$ = function () {
    return 'Calculator.g4';
  };
  CalculatorLexer.prototype.get_atn_18j9am_k$ = function () {
    return Companion_getInstance_0().ATN_1;
  };
  CalculatorLexer.prototype.get_vocabulary_zijn9t_k$ = function () {
    return Companion_getInstance_0().VOCABULARY_1;
  };
  CalculatorLexer.prototype.get_channelNames_2xl2ry_k$ = function () {
    return this.channelNames_1;
  };
  CalculatorLexer.$metadata$ = classMeta('CalculatorLexer', undefined, undefined, undefined, undefined, Lexer.prototype);
  function name$factory() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.name_1;
    }, null);
  }
  function CalculatorListener() {
  }
  CalculatorListener.$metadata$ = interfaceMeta('CalculatorListener', [ParseTreeListener]);
  var Tokens_EOF_instance;
  var Tokens_T__0_instance_0;
  var Tokens_T__1_instance_0;
  var Tokens_T__2_instance_0;
  var Tokens_MUL_instance_0;
  var Tokens_DIV_instance_0;
  var Tokens_ADD_instance_0;
  var Tokens_SUB_instance_0;
  var Tokens_ID_instance_0;
  var Tokens_INT_instance_0;
  var Tokens_NEWLINE_instance_0;
  var Tokens_DELIMITER_instance_0;
  var Tokens_WS_instance_0;
  function values_3() {
    return [Tokens_EOF_getInstance(), Tokens_T__0_getInstance_0(), Tokens_T__1_getInstance_0(), Tokens_T__2_getInstance_0(), Tokens_MUL_getInstance_0(), Tokens_DIV_getInstance_0(), Tokens_ADD_getInstance_0(), Tokens_SUB_getInstance_0(), Tokens_ID_getInstance_0(), Tokens_INT_getInstance_0(), Tokens_NEWLINE_getInstance_0(), Tokens_DELIMITER_getInstance_0(), Tokens_WS_getInstance_0()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'EOF':
        return Tokens_EOF_getInstance();
      case 'T__0':
        return Tokens_T__0_getInstance_0();
      case 'T__1':
        return Tokens_T__1_getInstance_0();
      case 'T__2':
        return Tokens_T__2_getInstance_0();
      case 'MUL':
        return Tokens_MUL_getInstance_0();
      case 'DIV':
        return Tokens_DIV_getInstance_0();
      case 'ADD':
        return Tokens_ADD_getInstance_0();
      case 'SUB':
        return Tokens_SUB_getInstance_0();
      case 'ID':
        return Tokens_ID_getInstance_0();
      case 'INT':
        return Tokens_INT_getInstance_0();
      case 'NEWLINE':
        return Tokens_NEWLINE_getInstance_0();
      case 'DELIMITER':
        return Tokens_DELIMITER_getInstance_0();
      case 'WS':
        return Tokens_WS_getInstance_0();
      default:
        Tokens_initEntries_0();
        THROW_ISE();
        break;
    }
  }
  var Tokens_entriesInitialized_0;
  function Tokens_initEntries_0() {
    if (Tokens_entriesInitialized_0)
      return Unit_getInstance();
    Tokens_entriesInitialized_0 = true;
    Tokens_EOF_instance = new Tokens_0('EOF', 0, -1);
    Tokens_T__0_instance_0 = new Tokens_0('T__0', 1, 1);
    Tokens_T__1_instance_0 = new Tokens_0('T__1', 2, 2);
    Tokens_T__2_instance_0 = new Tokens_0('T__2', 3, 3);
    Tokens_MUL_instance_0 = new Tokens_0('MUL', 4, 4);
    Tokens_DIV_instance_0 = new Tokens_0('DIV', 5, 5);
    Tokens_ADD_instance_0 = new Tokens_0('ADD', 6, 6);
    Tokens_SUB_instance_0 = new Tokens_0('SUB', 7, 7);
    Tokens_ID_instance_0 = new Tokens_0('ID', 8, 8);
    Tokens_INT_instance_0 = new Tokens_0('INT', 9, 9);
    Tokens_NEWLINE_instance_0 = new Tokens_0('NEWLINE', 10, 10);
    Tokens_DELIMITER_instance_0 = new Tokens_0('DELIMITER', 11, 11);
    Tokens_WS_instance_0 = new Tokens_0('WS', 12, 12);
  }
  var Rules_RULE_prog_instance;
  var Rules_RULE_stat_instance;
  var Rules_RULE_expr_instance;
  function values_4() {
    return [Rules_RULE_prog_getInstance(), Rules_RULE_stat_getInstance(), Rules_RULE_expr_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'RULE_prog':
        return Rules_RULE_prog_getInstance();
      case 'RULE_stat':
        return Rules_RULE_stat_getInstance();
      case 'RULE_expr':
        return Rules_RULE_expr_getInstance();
      default:
        Rules_initEntries_0();
        THROW_ISE();
        break;
    }
  }
  var Rules_entriesInitialized_0;
  function Rules_initEntries_0() {
    if (Rules_entriesInitialized_0)
      return Unit_getInstance();
    Rules_entriesInitialized_0 = true;
    Rules_RULE_prog_instance = new Rules_0('RULE_prog', 0, 0);
    Rules_RULE_stat_instance = new Rules_0('RULE_stat', 1, 1);
    Rules_RULE_expr_instance = new Rules_0('RULE_expr', 2, 2);
  }
  function _get_LITERAL_NAMES__i6pfaf_0($this) {
    return $this.LITERAL_NAMES_1;
  }
  function _get_SYMBOLIC_NAMES__jh2jgw_0($this) {
    return $this.SYMBOLIC_NAMES_1;
  }
  function _get_serializedATN__dshj2e_0($this) {
    return $this.serializedATN_1;
  }
  function ProgContext_init_$Init$(parent, invokingState, $this) {
    ParserRuleContext_init_$Init$(parent, invokingState, $this);
    ProgContext.call($this);
    return $this;
  }
  function ProgContext_init_$Create$(parent, invokingState) {
    return ProgContext_init_$Init$(parent, invokingState, Object.create(ProgContext.prototype));
  }
  function StatContext_init_$Init$(parent, invokingState, $this) {
    ParserRuleContext_init_$Init$(parent, invokingState, $this);
    StatContext.call($this);
    return $this;
  }
  function StatContext_init_$Create$(parent, invokingState) {
    return StatContext_init_$Init$(parent, invokingState, Object.create(StatContext.prototype));
  }
  function StatContext_init_$Init$_0($this) {
    ParserRuleContext_init_$Init$_0($this);
    StatContext.call($this);
    return $this;
  }
  function StatContext_init_$Create$_0() {
    return StatContext_init_$Init$_0(Object.create(StatContext.prototype));
  }
  function PrintContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    PrintContext.call($this);
    $this.copyFrom_4rxfd5_k$(ctx);
    return $this;
  }
  function PrintContext_init_$Create$(ctx) {
    return PrintContext_init_$Init$(ctx, Object.create(PrintContext.prototype));
  }
  function BlankContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    BlankContext.call($this);
    $this.copyFrom_4rxfd5_k$(ctx);
    return $this;
  }
  function BlankContext_init_$Create$(ctx) {
    return BlankContext_init_$Init$(ctx, Object.create(BlankContext.prototype));
  }
  function AssignContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    AssignContext.call($this);
    $this.copyFrom_4rxfd5_k$(ctx);
    return $this;
  }
  function AssignContext_init_$Create$(ctx) {
    return AssignContext_init_$Init$(ctx, Object.create(AssignContext.prototype));
  }
  function ExprContext_init_$Init$(parent, invokingState, $this) {
    ParserRuleContext_init_$Init$(parent, invokingState, $this);
    ExprContext.call($this);
    return $this;
  }
  function ExprContext_init_$Create$(parent, invokingState) {
    return ExprContext_init_$Init$(parent, invokingState, Object.create(ExprContext.prototype));
  }
  function ExprContext_init_$Init$_0($this) {
    ParserRuleContext_init_$Init$_0($this);
    ExprContext.call($this);
    return $this;
  }
  function ExprContext_init_$Create$_0() {
    return ExprContext_init_$Init$_0(Object.create(ExprContext.prototype));
  }
  function MulDivContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    MulDivContext.call($this);
    $this.copyFrom_ilbfso_k$(ctx);
    return $this;
  }
  function MulDivContext_init_$Create$(ctx) {
    return MulDivContext_init_$Init$(ctx, Object.create(MulDivContext.prototype));
  }
  function AddSubContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    AddSubContext.call($this);
    $this.copyFrom_ilbfso_k$(ctx);
    return $this;
  }
  function AddSubContext_init_$Create$(ctx) {
    return AddSubContext_init_$Init$(ctx, Object.create(AddSubContext.prototype));
  }
  function ParentheseContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    ParentheseContext.call($this);
    $this.copyFrom_ilbfso_k$(ctx);
    return $this;
  }
  function ParentheseContext_init_$Create$(ctx) {
    return ParentheseContext_init_$Init$(ctx, Object.create(ParentheseContext.prototype));
  }
  function IdContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    IdContext.call($this);
    $this.copyFrom_ilbfso_k$(ctx);
    return $this;
  }
  function IdContext_init_$Create$(ctx) {
    return IdContext_init_$Init$(ctx, Object.create(IdContext.prototype));
  }
  function IntContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    IntContext.call($this);
    $this.copyFrom_ilbfso_k$(ctx);
    return $this;
  }
  function IntContext_init_$Create$(ctx) {
    return IntContext_init_$Init$(ctx, Object.create(IntContext.prototype));
  }
  function solver() {
    solver_instance = this;
    this.classesByName_1 = listOf([getKClass(ProgContext), getKClass(StatContext), getKClass(ExprContext)]);
  }
  solver.prototype.get_classesByName_v5vx27_k$ = function () {
    return this.classesByName_1;
  };
  solver.$metadata$ = objectMeta('solver', [TypeDeclarator]);
  var solver_instance;
  function solver_getInstance() {
    if (solver_instance == null)
      new solver();
    return solver_instance;
  }
  function Tokens_0(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Tokens_0.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Tokens_0.$metadata$ = classMeta('Tokens', undefined, undefined, undefined, undefined, Enum.prototype);
  function Rules_0(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.id_1 = id;
  }
  Rules_0.prototype.get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  Rules_0.$metadata$ = classMeta('Rules', undefined, undefined, undefined, undefined, Enum.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.sharedContextCache_1 = new PredictionContextCache();
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = ['prog', 'stat', 'expr'];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp.ruleNames_1 = tmp$ret$2;
    this.LITERAL_NAMES_1 = listOf([null, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", null, null, null, "';'"]);
    this.SYMBOLIC_NAMES_1 = listOf([null, null, null, null, 'MUL', 'DIV', 'ADD', 'SUB', 'ID', 'INT', 'NEWLINE', 'DELIMITER', 'WS']);
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.LITERAL_NAMES_1;
    tmp$ret$3 = copyToArray(tmp0_toTypedArray);
    var tmp_1 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp1_toTypedArray = this.SYMBOLIC_NAMES_1;
    tmp$ret$4 = copyToArray(tmp1_toTypedArray);
    var tmp_2 = tmp$ret$4;
    tmp_0.VOCABULARY_1 = VocabularyImpl_init_$Create$(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = this;
    var tmp_4 = 0;
    var tmp_5 = this.SYMBOLIC_NAMES_1.get_size_woubt6_k$();
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$5 = fillArrayVal(Array(tmp_5), null);
    var tmp_6 = tmp$ret$5;
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      var tmp$ret$6;
      // Inline function 'antlr.Companion.tokenNames.<anonymous>' call
      var el = Companion_getInstance_1().VOCABULARY_1.getLiteralName_1erz7_k$(tmp_7);
      if (el == null) {
        el = Companion_getInstance_1().VOCABULARY_1.getSymbolicName_yk4gge_k$(tmp_7);
      }
      if (el == null) {
        el = '<INVALID>';
      }
      tmp$ret$6 = el;
      tmp_6[tmp_7] = tmp$ret$6;
      tmp_4 = tmp_4 + 1 | 0;
    }
    tmp_3.tokenNames_1 = tmp_6;
    this.serializedATN_1 = "\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x03\x0E-\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02\x0B\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04(\n\x04\f\x04\x0E\x04+\x0B\x04\x03\x04\x02\x03\x06\x05\x02\x04\x06\x02\x04\x03\x02\x06\x07\x03\x02\b\t\x020\x02\t\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\x0B\x03\x02\x02\x02\x0B\t\x03\x02\x02\x02\x0B\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04\x01\x02\x19 \x07\x0B\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x07\x05\x02\x02\x1E \x03\x02\x02\x02\x1F\x18\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07'!\x03\x02\x02\x02'$\x03\x02\x02\x02(+\x03\x02\x02\x02)'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+)\x03\x02\x02\x02\x07\x0B\x16\x1F')";
    var tmp_8 = this;
    tmp_8.ATN_1 = ATNDeserializer_init_$Create$(null, 1, null).deserialize_c68pee_k$(asCharArray("\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x03\x0E-\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02\x0B\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04(\n\x04\f\x04\x0E\x04+\x0B\x04\x03\x04\x02\x03\x06\x05\x02\x04\x06\x02\x04\x03\x02\x06\x07\x03\x02\b\t\x020\x02\t\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\x0B\x03\x02\x02\x02\x0B\t\x03\x02\x02\x02\x0B\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04\x01\x02\x19 \x07\x0B\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x07\x05\x02\x02\x1E \x03\x02\x02\x02\x1F\x18\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07'!\x03\x02\x02\x02'$\x03\x02\x02\x02(+\x03\x02\x02\x02)'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+)\x03\x02\x02\x02\x07\x0B\x16\x1F')"));
    var tmp_9 = this;
    var tmp_10 = 0;
    var tmp_11 = this.ATN_1.get_numberOfDecisions_u9sgni_k$();
    var tmp$ret$7;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$7 = fillArrayVal(Array(tmp_11), null);
    var tmp_12 = tmp$ret$7;
    while (tmp_10 < tmp_11) {
      var tmp_13 = tmp_10;
      var tmp$ret$8;
      // Inline function 'antlr.Companion.<anonymous>' call
      tmp$ret$8 = new DFA(ensureNotNull(Companion_getInstance_1().ATN_1.getDecisionState_m2smv2_k$(tmp_13)), tmp_13);
      tmp_12[tmp_13] = tmp$ret$8;
      tmp_10 = tmp_10 + 1 | 0;
    }
    tmp_9.decisionToDFA_1 = tmp_12;
  }
  Companion_0.prototype.get_decisionToDFA_9qhkht_k$ = function () {
    return this.decisionToDFA_1;
  };
  Companion_0.prototype.get_sharedContextCache_zbguan_k$ = function () {
    return this.sharedContextCache_1;
  };
  Companion_0.prototype.get_ruleNames_qcosu5_k$ = function () {
    return this.ruleNames_1;
  };
  Companion_0.prototype.get_VOCABULARY_rhqfm9_k$ = function () {
    return this.VOCABULARY_1;
  };
  Companion_0.prototype.get_tokenNames_iriaw8_k$ = function () {
    return this.tokenNames_1;
  };
  Companion_0.prototype.get_ATN_18jxta_k$ = function () {
    return this.ATN_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function _get_T__0__cwfvpr($this) {
    return $this.T__0__1;
  }
  function _get_T__1__cwfvqm($this) {
    return $this.T__1__1;
  }
  function _get_T__2__cwfvrh($this) {
    return $this.T__2__1;
  }
  function _get_MUL__e5ryp9($this) {
    return $this.MUL_1;
  }
  function _get_DIV__e5lz5s($this) {
    return $this.DIV_1;
  }
  function _get_ADD__e5jy28($this) {
    return $this.ADD_1;
  }
  function _get_SUB__e5vsdt($this) {
    return $this.SUB_1;
  }
  function _get_ID__ndbemo($this) {
    return $this.ID_1;
  }
  function _get_INT__e5p9r6($this) {
    return $this.INT_1;
  }
  function _get_NEWLINE__1lixp($this) {
    return $this.NEWLINE_1;
  }
  function _get_DELIMITER__plje($this) {
    return $this.DELIMITER_1;
  }
  function _get_WS__ndbpdb($this) {
    return $this.WS_1;
  }
  ProgContext.prototype.set_ruleIndex_rdde2x_k$ = function (value) {
    throw RuntimeException_init_$Create$();
  };
  ProgContext.prototype.get_ruleIndex_qf7nn7_k$ = function () {
    return Rules_RULE_prog_getInstance().id_1;
  };
  ProgContext.prototype.findStat_b8e1qr_k$ = function () {
    return this.getRuleContexts_tryqxi_k$(getType(solver_getInstance(), 'StatContext'));
  };
  ProgContext.prototype.findStat_v4kkl0_k$ = function (i) {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'StatContext'), i);
  };
  ProgContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterProg_xx5gk6_k$(this);
    }
  };
  ProgContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitProg_794ld0_k$(this);
    }
  };
  ProgContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitProg_t2dyu2_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function ProgContext() {
  }
  ProgContext.$metadata$ = classMeta('ProgContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  StatContext.prototype.set_ruleIndex_rdde2x_k$ = function (value) {
    throw RuntimeException_init_$Create$();
  };
  StatContext.prototype.get_ruleIndex_qf7nn7_k$ = function () {
    return Rules_RULE_stat_getInstance().id_1;
  };
  StatContext.prototype.copyFrom_4rxfd5_k$ = function (ctx) {
    ParserRuleContext.prototype.copyFrom_qn07yf_k$.call(this, ctx);
  };
  function StatContext() {
  }
  StatContext.$metadata$ = classMeta('StatContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  PrintContext.prototype.findExpr_b8mw8i_k$ = function () {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  PrintContext.prototype.NEWLINE_smmob0_k$ = function () {
    return this.getToken_851db1_k$(Tokens_NEWLINE_getInstance_0().id_1, 0);
  };
  PrintContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterPrint_mn305g_k$(this);
    }
  };
  PrintContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitPrint_r1pq9q_k$(this);
    }
  };
  PrintContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitPrint_97nidc_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function PrintContext() {
  }
  PrintContext.$metadata$ = classMeta('PrintContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  BlankContext.prototype.NEWLINE_smmob0_k$ = function () {
    return this.getToken_851db1_k$(Tokens_NEWLINE_getInstance_0().id_1, 0);
  };
  BlankContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterBlank_p1ehhu_k$(this);
    }
  };
  BlankContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitBlank_tg17m4_k$(this);
    }
  };
  BlankContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitBlank_drhv0u_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function BlankContext() {
  }
  BlankContext.$metadata$ = classMeta('BlankContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  AssignContext.prototype.ID_1sr_k$ = function () {
    return this.getToken_851db1_k$(Tokens_ID_getInstance_0().id_1, 0);
  };
  AssignContext.prototype.findExpr_b8mw8i_k$ = function () {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  AssignContext.prototype.NEWLINE_smmob0_k$ = function () {
    return this.getToken_851db1_k$(Tokens_NEWLINE_getInstance_0().id_1, 0);
  };
  AssignContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterAssign_e4hz7u_k$(this);
    }
  };
  AssignContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitAssign_d5m33w_k$(this);
    }
  };
  AssignContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitAssign_737p8m_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function AssignContext() {
  }
  AssignContext.$metadata$ = classMeta('AssignContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  ExprContext.prototype.set_ruleIndex_rdde2x_k$ = function (value) {
    throw RuntimeException_init_$Create$();
  };
  ExprContext.prototype.get_ruleIndex_qf7nn7_k$ = function () {
    return Rules_RULE_expr_getInstance().id_1;
  };
  ExprContext.prototype.copyFrom_ilbfso_k$ = function (ctx) {
    ParserRuleContext.prototype.copyFrom_qn07yf_k$.call(this, ctx);
  };
  function ExprContext() {
  }
  ExprContext.$metadata$ = classMeta('ExprContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  function IMulDivContext() {
  }
  IMulDivContext.$metadata$ = interfaceMeta('IMulDivContext');
  MulDivContext.prototype.set_op_s6kj74_k$ = function (_set____db54di) {
    this.op_1 = _set____db54di;
  };
  MulDivContext.prototype.get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  MulDivContext.prototype.findExpr_b8mw8i_k$ = function () {
    return this.getRuleContexts_tryqxi_k$(getType(solver_getInstance(), 'ExprContext'));
  };
  MulDivContext.prototype.findExpr_28ilfx_k$ = function (i) {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'ExprContext'), i);
  };
  MulDivContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterMulDiv_5lqp4m_k$(this);
    }
  };
  MulDivContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitMulDiv_wvurgc_k$(this);
    }
  };
  MulDivContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitMulDiv_8a9qka_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function MulDivContext() {
    this.op_1 = null;
  }
  MulDivContext.$metadata$ = classMeta('MulDivContext', [IMulDivContext], undefined, undefined, undefined, ExprContext.prototype);
  AddSubContext.prototype.set_op_s6kj74_k$ = function (_set____db54di) {
    this.op_1 = _set____db54di;
  };
  AddSubContext.prototype.get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  AddSubContext.prototype.findExpr_b8mw8i_k$ = function () {
    return this.getRuleContexts_tryqxi_k$(getType(solver_getInstance(), 'ExprContext'));
  };
  AddSubContext.prototype.findExpr_28ilfx_k$ = function (i) {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'ExprContext'), i);
  };
  AddSubContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterAddSub_qh2xyu_k$(this);
    }
  };
  AddSubContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitAddSub_h9x1ok_k$(this);
    }
  };
  AddSubContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitAddSub_aosz2e_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function AddSubContext() {
    this.op_1 = null;
  }
  AddSubContext.$metadata$ = classMeta('AddSubContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  ParentheseContext.prototype.findExpr_b8mw8i_k$ = function () {
    return this.getRuleContext_ytpucw_k$(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  ParentheseContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterParenthese_6hls52_k$(this);
    }
  };
  ParentheseContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitParenthese_mmg2nw_k$(this);
    }
  };
  ParentheseContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitParenthese_slvire_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function ParentheseContext() {
  }
  ParentheseContext.$metadata$ = classMeta('ParentheseContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  IdContext.prototype.ID_1sr_k$ = function () {
    return this.getToken_851db1_k$(Tokens_ID_getInstance_0().id_1, 0);
  };
  IdContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterId_8qq4cq_k$(this);
    }
  };
  IdContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitId_5ov9ks_k$(this);
    }
  };
  IdContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitId_tbvyx2_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function IdContext() {
  }
  IdContext.$metadata$ = classMeta('IdContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  IntContext.prototype.INT_1k27_k$ = function () {
    return this.getToken_851db1_k$(Tokens_INT_getInstance_0().id_1, 0);
  };
  IntContext.prototype.enterRule_nsg4az_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).enterInt_e26szs_k$(this);
    }
  };
  IntContext.prototype.exitRule_ixwge3_k$ = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).exitInt_56rd32_k$(this);
    }
  };
  IntContext.prototype.accept_4ufyhw_k$ = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).visitInt_ew8u0s_k$(this);
    } else {
      return ensureNotNull(visitor.visitChildren_mqo9kp_k$(this));
    }
  };
  function IntContext() {
  }
  IntContext.$metadata$ = classMeta('IntContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  function expr($this, _p) {
    var _parentctx = $this.context_1;
    var _parentState = $this.state_1;
    var _localctx = ExprContext_init_$Create$($this.context_1, _parentState);
    var _prevctx = _localctx;
    var _startState = 4;
    $this.enterRecursionRule_swkmkf_k$(_localctx, 4, Rules_RULE_expr_getInstance().id_1, _p);
    var _la;
    try {
      var _alt;
      $this.enterOuterAlt_9lkdc1_k$(_localctx, 1);
      {
        $this.state_1 = 29;
        $this.errorHandler_1.sync_ns01dy_k$($this);
        var tmp0_subject = ensureNotNull($this._input_1).LA_y7f82c_k$(1);
        if (tmp0_subject === $this.INT_1) {
          {
            _localctx = IntContext_init_$Create$(_localctx);
            $this.context_1 = _localctx;
            _prevctx = _localctx;
            $this.state_1 = 23;
            var tmp = $this.match_vjr6ck_k$($this.INT_1);
            if (isInterface(tmp, Token))
              tmp;
            else
              THROW_CCE();
          }
        } else if (tmp0_subject === $this.ID_1) {
          {
            _localctx = IdContext_init_$Create$(_localctx);
            $this.context_1 = _localctx;
            _prevctx = _localctx;
            $this.state_1 = 24;
            var tmp_0 = $this.match_vjr6ck_k$($this.ID_1);
            if (isInterface(tmp_0, Token))
              tmp_0;
            else
              THROW_CCE();
          }
        } else if (tmp0_subject === $this.T__1__1) {
          {
            _localctx = ParentheseContext_init_$Create$(_localctx);
            $this.context_1 = _localctx;
            _prevctx = _localctx;
            $this.state_1 = 25;
            var tmp_1 = $this.match_vjr6ck_k$($this.T__1__1);
            if (isInterface(tmp_1, Token))
              tmp_1;
            else
              THROW_CCE();
            $this.state_1 = 26;
            expr($this, 0);
            $this.state_1 = 27;
            var tmp_2 = $this.match_vjr6ck_k$($this.T__2__1);
            if (isInterface(tmp_2, Token))
              tmp_2;
            else
              THROW_CCE();
          }
        } else {
          throw NoViableAltException_init_$Create$($this, null, null, null, null, null, 62, null);
        }
        ensureNotNull($this.context_1).stop_1 = ensureNotNull($this._input_1).LT_6crwc9_k$(-1);
        $this.state_1 = 39;
        $this.errorHandler_1.sync_ns01dy_k$($this);
        _alt = ensureNotNull($this.interpreter_1).adaptivePredict_qwnokw_k$(ensureNotNull($this._input_1), 4, $this.context_1);
        while (!(_alt === 2) ? !(_alt === Companion_getInstance().INVALID_ALT_NUMBER_1) : false) {
          if (_alt === 1) {
            if (!($this._parseListeners_1 == null)) {
              $this.triggerExitRuleEvent_m80f55_k$();
            }
            _prevctx = _localctx;
            {
              $this.state_1 = 37;
              $this.errorHandler_1.sync_ns01dy_k$($this);
              var tmp1_subject = ensureNotNull($this.interpreter_1).adaptivePredict_qwnokw_k$(ensureNotNull($this._input_1), 3, $this.context_1);
              if (tmp1_subject === 1) {
                {
                  _localctx = MulDivContext_init_$Create$(ExprContext_init_$Create$(_parentctx, _parentState));
                  $this.pushNewRecursionContext_r5dsj7_k$(_localctx, _startState, Rules_RULE_expr_getInstance().id_1);
                  $this.state_1 = 31;
                  if (!$this.precpred_ctb818_k$(ensureNotNull($this.context_1), 5)) {
                    throw FailedPredicateException_init_$Create$($this, 'precpred(context!!, 5)', null, 4, null);
                  }
                  $this.state_1 = 32;
                  (_localctx instanceof MulDivContext ? _localctx : THROW_CCE()).set_op_s6kj74_k$(ensureNotNull($this._input_1).LT_6crwc9_k$(1));
                  _la = ensureNotNull($this._input_1).LA_y7f82c_k$(1);
                  if (!(_la === $this.MUL_1 ? true : _la === $this.DIV_1)) {
                    var tmp_3 = _localctx instanceof MulDivContext ? _localctx : THROW_CCE();
                    var tmp_4 = $this.errorHandler_1.recoverInline_4nx07t_k$($this);
                    tmp_3.set_op_s6kj74_k$(isInterface(tmp_4, Token) ? tmp_4 : THROW_CCE());
                  } else {
                    if (ensureNotNull($this._input_1).LA_y7f82c_k$(1) === Tokens_EOF_getInstance().id_1)
                      $this.isMatchedEOF_1 = true;
                    $this.errorHandler_1.reportMatch_qlge1w_k$($this);
                    $this.consume_fqiakc_k$();
                  }
                  $this.state_1 = 33;
                  expr($this, 6);
                }
              } else if (tmp1_subject === 2) {
                {
                  _localctx = AddSubContext_init_$Create$(ExprContext_init_$Create$(_parentctx, _parentState));
                  $this.pushNewRecursionContext_r5dsj7_k$(_localctx, _startState, Rules_RULE_expr_getInstance().id_1);
                  $this.state_1 = 34;
                  if (!$this.precpred_ctb818_k$(ensureNotNull($this.context_1), 4)) {
                    throw FailedPredicateException_init_$Create$($this, 'precpred(context!!, 4)', null, 4, null);
                  }
                  $this.state_1 = 35;
                  (_localctx instanceof AddSubContext ? _localctx : THROW_CCE()).op_1 = ensureNotNull($this._input_1).LT_6crwc9_k$(1);
                  _la = ensureNotNull($this._input_1).LA_y7f82c_k$(1);
                  if (!(_la === $this.ADD_1 ? true : _la === $this.SUB_1)) {
                    var tmp_5 = _localctx instanceof AddSubContext ? _localctx : THROW_CCE();
                    var tmp_6 = $this.errorHandler_1.recoverInline_4nx07t_k$($this);
                    tmp_5.op_1 = isInterface(tmp_6, Token) ? tmp_6 : THROW_CCE();
                  } else {
                    if (ensureNotNull($this._input_1).LA_y7f82c_k$(1) === Tokens_EOF_getInstance().id_1)
                      $this.isMatchedEOF_1 = true;
                    $this.errorHandler_1.reportMatch_qlge1w_k$($this);
                    $this.consume_fqiakc_k$();
                  }
                  $this.state_1 = 36;
                  expr($this, 5);
                }
              }
            }
          }
          $this.state_1 = 41;
          $this.errorHandler_1.sync_ns01dy_k$($this);
          _alt = ensureNotNull($this.interpreter_1).adaptivePredict_qwnokw_k$(ensureNotNull($this._input_1), 4, $this.context_1);
        }
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.exception_1 = $p;
        $this.errorHandler_1.reportError_dgnagc_k$($this, $p);
        $this.errorHandler_1.recover_tphv24_k$($this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      $this.unrollRecursionContexts_qpzf9j_k$(_parentctx);
    }
    return _localctx;
  }
  function expr_sempred($this, _localctx, predIndex) {
    var tmp0_subject = predIndex;
    if (tmp0_subject === 0)
      return $this.precpred_ctb818_k$(ensureNotNull($this.context_1), 5);
    else if (tmp0_subject === 1)
      return $this.precpred_ctb818_k$(ensureNotNull($this.context_1), 4);
    return true;
  }
  function Tokens_EOF_getInstance() {
    Tokens_initEntries_0();
    return Tokens_EOF_instance;
  }
  function Tokens_T__0_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_T__0_instance_0;
  }
  function Tokens_T__1_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_T__1_instance_0;
  }
  function Tokens_T__2_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_T__2_instance_0;
  }
  function Tokens_MUL_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_MUL_instance_0;
  }
  function Tokens_DIV_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_DIV_instance_0;
  }
  function Tokens_ADD_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_ADD_instance_0;
  }
  function Tokens_SUB_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_SUB_instance_0;
  }
  function Tokens_ID_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_ID_instance_0;
  }
  function Tokens_INT_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_INT_instance_0;
  }
  function Tokens_NEWLINE_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_NEWLINE_instance_0;
  }
  function Tokens_DELIMITER_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_DELIMITER_instance_0;
  }
  function Tokens_WS_getInstance_0() {
    Tokens_initEntries_0();
    return Tokens_WS_instance_0;
  }
  function Rules_RULE_prog_getInstance() {
    Rules_initEntries_0();
    return Rules_RULE_prog_instance;
  }
  function Rules_RULE_stat_getInstance() {
    Rules_initEntries_0();
    return Rules_RULE_stat_instance;
  }
  function Rules_RULE_expr_getInstance() {
    Rules_initEntries_0();
    return Rules_RULE_expr_instance;
  }
  function CalculatorParser(input) {
    Companion_getInstance_1();
    Parser.call(this, input);
    this.T__0__1 = Tokens_T__0_getInstance_0().id_1;
    this.T__1__1 = Tokens_T__1_getInstance_0().id_1;
    this.T__2__1 = Tokens_T__2_getInstance_0().id_1;
    this.MUL_1 = Tokens_MUL_getInstance_0().id_1;
    this.DIV_1 = Tokens_DIV_getInstance_0().id_1;
    this.ADD_1 = Tokens_ADD_getInstance_0().id_1;
    this.SUB_1 = Tokens_SUB_getInstance_0().id_1;
    this.ID_1 = Tokens_ID_getInstance_0().id_1;
    this.INT_1 = Tokens_INT_getInstance_0().id_1;
    this.NEWLINE_1 = Tokens_NEWLINE_getInstance_0().id_1;
    this.DELIMITER_1 = Tokens_DELIMITER_getInstance_0().id_1;
    this.WS_1 = Tokens_WS_getInstance_0().id_1;
    this.interpreter_1 = new ParserATNSimulator(this, Companion_getInstance_1().ATN_1, Companion_getInstance_1().decisionToDFA_1, Companion_getInstance_1().sharedContextCache_1);
  }
  CalculatorParser.prototype.get_grammarFileName_gb65ff_k$ = function () {
    return 'Calculator.g4';
  };
  CalculatorParser.prototype.get_tokenNames_iriaw8_k$ = function () {
    return Companion_getInstance_1().tokenNames_1;
  };
  CalculatorParser.prototype.get_ruleNames_qcosu5_k$ = function () {
    return Companion_getInstance_1().ruleNames_1;
  };
  CalculatorParser.prototype.get_atn_18j9am_k$ = function () {
    return Companion_getInstance_1().ATN_1;
  };
  CalculatorParser.prototype.get_vocabulary_zijn9t_k$ = function () {
    return Companion_getInstance_1().VOCABULARY_1;
  };
  CalculatorParser.prototype.prog_21xsq_k$ = function () {
    var _localctx = ProgContext_init_$Create$(this.context_1, this.state_1);
    this.enterRule_khu8i_k$(_localctx, 0, Rules_RULE_prog_getInstance().id_1);
    var _la;
    try {
      this.enterOuterAlt_9lkdc1_k$(_localctx, 1);
      {
        this.state_1 = 7;
        this.errorHandler_1.sync_ns01dy_k$(this);
        _la = ensureNotNull(this._input_1).LA_y7f82c_k$(1);
        do {
          {
            {
              this.state_1 = 6;
              this.stat_23vx0_k$();
            }
          }
          this.state_1 = 9;
          this.errorHandler_1.sync_ns01dy_k$(this);
          _la = ensureNotNull(this._input_1).LA_y7f82c_k$(1);
        }
         while ((_la & -64) === 0 ? !(new Long(1, 0)).shl_po5ip6_k$(_la).and_jhajnj_k$((new Long(1, 0)).shl_po5ip6_k$(this.T__1__1).or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(this.ID_1)).or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(this.INT_1)).or_s401rn_k$((new Long(1, 0)).shl_po5ip6_k$(this.NEWLINE_1))).equals(new Long(0, 0)) : false);
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.exception_1 = $p;
        this.errorHandler_1.reportError_dgnagc_k$(this, $p);
        this.errorHandler_1.recover_tphv24_k$(this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      this.exitRule_qudul3_k$();
    }
    return _localctx;
  };
  CalculatorParser.prototype.stat_23vx0_k$ = function () {
    var _localctx = StatContext_init_$Create$(this.context_1, this.state_1);
    this.enterRule_khu8i_k$(_localctx, 2, Rules_RULE_stat_getInstance().id_1);
    try {
      this.state_1 = 20;
      this.errorHandler_1.sync_ns01dy_k$(this);
      var tmp0_subject = ensureNotNull(this.interpreter_1).adaptivePredict_qwnokw_k$(ensureNotNull(this._input_1), 1, this.context_1);
      switch (tmp0_subject) {
        case 1:
          _localctx = PrintContext_init_$Create$(_localctx);
          this.enterOuterAlt_9lkdc1_k$(_localctx, 1);
          {
            this.state_1 = 11;
            expr(this, 0);
            this.state_1 = 12;
            var tmp = this.match_vjr6ck_k$(this.NEWLINE_1);
            if (isInterface(tmp, Token))
              tmp;
            else
              THROW_CCE();
          }

          break;
        case 2:
          _localctx = AssignContext_init_$Create$(_localctx);
          this.enterOuterAlt_9lkdc1_k$(_localctx, 2);
          {
            this.state_1 = 14;
            var tmp_0 = this.match_vjr6ck_k$(this.ID_1);
            if (isInterface(tmp_0, Token))
              tmp_0;
            else
              THROW_CCE();
            this.state_1 = 15;
            var tmp_1 = this.match_vjr6ck_k$(this.T__0__1);
            if (isInterface(tmp_1, Token))
              tmp_1;
            else
              THROW_CCE();
            this.state_1 = 16;
            expr(this, 0);
            this.state_1 = 17;
            var tmp_2 = this.match_vjr6ck_k$(this.NEWLINE_1);
            if (isInterface(tmp_2, Token))
              tmp_2;
            else
              THROW_CCE();
          }

          break;
        case 3:
          _localctx = BlankContext_init_$Create$(_localctx);
          this.enterOuterAlt_9lkdc1_k$(_localctx, 3);
          {
            this.state_1 = 19;
            var tmp_3 = this.match_vjr6ck_k$(this.NEWLINE_1);
            if (isInterface(tmp_3, Token))
              tmp_3;
            else
              THROW_CCE();
          }

          break;
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.exception_1 = $p;
        this.errorHandler_1.reportError_dgnagc_k$(this, $p);
        this.errorHandler_1.recover_tphv24_k$(this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      this.exitRule_qudul3_k$();
    }
    return _localctx;
  };
  CalculatorParser.prototype.expr_1v1f9_k$ = function () {
    return expr(this, 0);
  };
  CalculatorParser.prototype.sempred_b5qocl_k$ = function (_localctx, ruleIndex, predIndex) {
    var tmp0_subject = ruleIndex;
    if (tmp0_subject === 2) {
      return expr_sempred(this, _localctx instanceof ExprContext ? _localctx : THROW_CCE(), predIndex);
    }
    return true;
  };
  CalculatorParser.$metadata$ = classMeta('CalculatorParser', undefined, undefined, undefined, undefined, Parser.prototype);
  function CalculatorVisitor() {
  }
  CalculatorVisitor.$metadata$ = interfaceMeta('CalculatorVisitor', [ParseTreeVisitor]);
  function _set_variable__z32o11($this, _set____db54di) {
    $this.variable_1 = _set____db54di;
  }
  function _get_variable__n552hb($this) {
    return $this.variable_1;
  }
  function CalculatorVistorImp() {
    CalculatorBaseVisitor.call(this);
    this.variable_1 = HashMap_init_$Create$();
  }
  CalculatorVistorImp.prototype.visitPrint_97nidc_k$ = function (ctx) {
    var tmp0_safe_receiver = ctx.findExpr_b8mw8i_k$();
    return ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.accept_4ufyhw_k$(this));
  };
  CalculatorVistorImp.prototype.visitMulDiv_8a9qka_k$ = function (ctx) {
    var tmp0_safe_receiver = ctx.findExpr_28ilfx_k$(0);
    var param1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.accept_4ufyhw_k$(this);
    var tmp1_safe_receiver = ctx.findExpr_28ilfx_k$(1);
    var param2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.accept_4ufyhw_k$(this);
    var tmp2_safe_receiver = ctx.get_op_kntnrq_k$();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_type_wovaf7_k$()) === Tokens_MUL_getInstance_0().id_1) {
      var tmp3_safe_receiver = param1;
      return ensureNotNull(tmp3_safe_receiver == null ? null : imul(tmp3_safe_receiver, ensureNotNull(param2)));
    }
    var tmp4_safe_receiver = ctx.get_op_kntnrq_k$();
    if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_type_wovaf7_k$()) === Tokens_DIV_getInstance_0().id_1) {
      var tmp5_safe_receiver = param1;
      return ensureNotNull(tmp5_safe_receiver == null ? null : tmp5_safe_receiver / ensureNotNull(param2) | 0);
    }
    throw RuntimeException_init_$Create$_0('\u4E0D\u77E5\u9053\u7684\u7B26\u53F7');
  };
  CalculatorVistorImp.prototype.visitAddSub_aosz2e_k$ = function (ctx) {
    var tmp0_safe_receiver = ctx.findExpr_28ilfx_k$(0);
    var param1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.accept_4ufyhw_k$(this);
    var tmp1_safe_receiver = ctx.findExpr_28ilfx_k$(1);
    var param2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.accept_4ufyhw_k$(this);
    var tmp2_safe_receiver = ctx.op_1;
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_type_wovaf7_k$()) === Tokens_ADD_getInstance_0().id_1) {
      var tmp3_safe_receiver = param1;
      return ensureNotNull(tmp3_safe_receiver == null ? null : tmp3_safe_receiver + ensureNotNull(param2) | 0);
    }
    var tmp4_safe_receiver = ctx.op_1;
    if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.get_type_wovaf7_k$()) === Tokens_SUB_getInstance_0().id_1) {
      var tmp5_safe_receiver = param1;
      return ensureNotNull(tmp5_safe_receiver == null ? null : tmp5_safe_receiver - ensureNotNull(param2) | 0);
    }
    throw RuntimeException_init_$Create$_0('\u4E0D\u77E5\u9053\u7684\u7B26\u53F7');
  };
  CalculatorVistorImp.prototype.visitId_tbvyx2_k$ = function (ctx) {
    return ensureNotNull(this.variable_1.get_1mhr4y_k$(ctx.get_text_wouvsm_k$()));
  };
  CalculatorVistorImp.prototype.visitInt_ew8u0s_k$ = function (ctx) {
    return toInt(ctx.get_text_wouvsm_k$());
  };
  CalculatorVistorImp.prototype.visitAssign_737p8m_k$ = function (ctx) {
    var tmp0_safe_receiver = ctx.ID_1sr_k$();
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_text_wouvsm_k$();
    var tmp1_safe_receiver = ctx.findExpr_b8mw8i_k$();
    var value = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.accept_4ufyhw_k$(this);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.variable_1;
    var tmp1_set = ensureNotNull(name);
    var tmp2_set = ensureNotNull(value);
    tmp0_set.put_3mhbri_k$(tmp1_set, tmp2_set);
    return ensureNotNull(CalculatorBaseVisitor.prototype.visitAssign_737p8m_k$.call(this, ctx));
  };
  CalculatorVistorImp.prototype.visitParenthese_slvire_k$ = function (ctx) {
    var tmp0_safe_receiver = ctx.findExpr_b8mw8i_k$();
    return ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.accept_4ufyhw_k$(this));
  };
  CalculatorVistorImp.$metadata$ = classMeta('CalculatorVistorImp', undefined, undefined, undefined, undefined, CalculatorBaseVisitor.prototype);
  function Base64Encoder() {
  }
  Base64Encoder.$metadata$ = interfaceMeta('Base64Encoder');
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder_akj7gg_k$ = function () {
    return JsBase64Encoder_getInstance();
  };
  Base64Factory.prototype.sayHello_qxya0b_k$ = function (name) {
    return Unit_getInstance();
  };
  Base64Factory.$metadata$ = objectMeta('Base64Factory');
  var Base64Factory_instance;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance == null)
      new Base64Factory();
    return Base64Factory_instance;
  }
  function JsBase64Encoder() {
    JsBase64Encoder_instance = this;
  }
  JsBase64Encoder.prototype.encode_ub6m3x_k$ = function (src) {
    var binString = decodeToString(src);
    return encodeToByteArray(Base64.encode(binString));
  };
  JsBase64Encoder.$metadata$ = objectMeta('JsBase64Encoder', [Base64Encoder]);
  var JsBase64Encoder_instance;
  function JsBase64Encoder_getInstance() {
    if (JsBase64Encoder_instance == null)
      new JsBase64Encoder();
    return JsBase64Encoder_instance;
  }
  //region block: post-declaration
  JsBase64Encoder.prototype.encodeToString_4mbq1r_k$ = encodeToString;
  JsBase64Encoder.prototype.testCommonString_5ks4p9_k$ = testCommonString;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CalculatorBaseListenerImpl;
  _.$_$.b = CalculatorLexer;
  _.$_$.c = CalculatorParser;
  _.$_$.d = CalculatorVistorImp;
  _.$_$.e = Base64Factory_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=antlt-kotlin-demo.js.map
