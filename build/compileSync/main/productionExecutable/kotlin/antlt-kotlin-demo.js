(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './antlr-kotlin-antlr-kotlin-runtime-js-ir.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./antlr-kotlin-antlr-kotlin-runtime-js-ir.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['antlr-kotlin-antlr-kotlin-runtime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo'. Its dependency 'antlr-kotlin-antlr-kotlin-runtime-js-ir' was not found. Please, check whether 'antlr-kotlin-antlr-kotlin-runtime-js-ir' is loaded prior to 'antlt-kotlin-demo'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'antlt-kotlin-demo'.");
    }
    root['antlt-kotlin-demo'] = factory(typeof this['antlt-kotlin-demo'] === 'undefined' ? {} : this['antlt-kotlin-demo'], this['antlr-kotlin-antlr-kotlin-runtime-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var AbstractParseTreeVisitor = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.t3;
  var classMeta = kotlin_kotlin.$_$.p2;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var PredictionContextCache = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.o;
  var listOf = kotlin_kotlin.$_$.a2;
  var copyToArray = kotlin_kotlin.$_$.v1;
  var VocabularyImpl_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.r2;
  var ATNDeserializer_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.d;
  var asCharArray = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.b;
  var DFA = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.p;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var Enum = kotlin_kotlin.$_$.m3;
  var Lexer = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.u;
  var Lexer_init_$Init$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var THROW_CCE = kotlin_kotlin.$_$.s3;
  var isArray = kotlin_kotlin.$_$.v2;
  var LexerATNSimulator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.m;
  var KProperty1 = kotlin_kotlin.$_$.f3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s2;
  var ParseTreeListener = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.r;
  var interfaceMeta = kotlin_kotlin.$_$.u2;
  var ParserRuleContext_init_$Init$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.k;
  var ParserRuleContext_init_$Init$_0 = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.j;
  var getKClass = kotlin_kotlin.$_$.b;
  var TypeDeclarator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.a;
  var ParserRuleContext = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.v;
  var isInterface = kotlin_kotlin.$_$.w2;
  var getType = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.c;
  var NoViableAltException_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.f;
  var Token = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.y;
  var Companion_getInstance = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.l;
  var FailedPredicateException_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.e;
  var RecognitionException = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.x;
  var Parser = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.w;
  var ParserATNSimulator = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.n;
  var Long = kotlin_kotlin.$_$.o3;
  var ParseTreeVisitor = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.s;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.a1;
  var toInt = kotlin_kotlin.$_$.h3;
  var println = kotlin_kotlin.$_$.l2;
  var ANTLRInputStream_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.h;
  var CommonTokenStream = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.t;
  var printStackTrace = kotlin_kotlin.$_$.u3;
  var Exception = kotlin_kotlin.$_$.n3;
  //endregion
  //region block: pre-declaration
  CalculatorBaseVisitor.prototype = Object.create(AbstractParseTreeVisitor.prototype);
  CalculatorBaseVisitor.prototype.constructor = CalculatorBaseVisitor;
  Channels.prototype = Object.create(Enum.prototype);
  Channels.prototype.constructor = Channels;
  Rules.prototype = Object.create(Enum.prototype);
  Rules.prototype.constructor = Rules;
  CalculatorLexer.prototype = Object.create(Lexer.prototype);
  CalculatorLexer.prototype.constructor = CalculatorLexer;
  Tokens.prototype = Object.create(Enum.prototype);
  Tokens.prototype.constructor = Tokens;
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
  //endregion
  function CalculatorBaseVisitor() {
    AbstractParseTreeVisitor.call(this);
  }
  CalculatorBaseVisitor.prototype.b1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.c1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.d1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.e1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.f1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.g1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.h1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.i1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.prototype.j1a = function (ctx) {
    return ensureNotNull(ensureNotNull(this).pp(ctx));
  };
  CalculatorBaseVisitor.$metadata$ = classMeta('CalculatorBaseVisitor', [CalculatorVisitor], undefined, undefined, undefined, AbstractParseTreeVisitor.prototype);
  var Channels_DEFAULT_TOKEN_CHANNEL_instance;
  var Channels_HIDDEN_instance;
  function values() {
    return [Channels_DEFAULT_TOKEN_CHANNEL_getInstance(), Channels_HIDDEN_getInstance()];
  }
  var Channels_entriesInitialized;
  function Channels_initEntries() {
    if (Channels_entriesInitialized)
      return Unit_getInstance();
    Channels_entriesInitialized = true;
    Channels_DEFAULT_TOKEN_CHANNEL_instance = new Channels('DEFAULT_TOKEN_CHANNEL', 0, 0);
    Channels_HIDDEN_instance = new Channels('HIDDEN', 1, 1);
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
  function values_0() {
    return [Rules_T__0_getInstance(), Rules_T__1_getInstance(), Rules_T__2_getInstance(), Rules_MUL_getInstance(), Rules_DIV_getInstance(), Rules_ADD_getInstance(), Rules_SUB_getInstance(), Rules_ID_getInstance(), Rules_INT_getInstance(), Rules_NEWLINE_getInstance(), Rules_DELIMITER_getInstance(), Rules_WS_getInstance()];
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
    this.l1a_1 = new PredictionContextCache();
    this.m1a_1 = listOf([null, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", null, null, null, "';'"]);
    this.n1a_1 = listOf([null, null, null, null, 'MUL', 'DIV', 'ADD', 'SUB', 'ID', 'INT', 'NEWLINE', 'DELIMITER', 'WS']);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.m1a_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    var tmp_0 = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp1_toTypedArray = this.n1a_1;
    tmp$ret$1 = copyToArray(tmp1_toTypedArray);
    var tmp_1 = tmp$ret$1;
    tmp.o1a_1 = VocabularyImpl_init_$Create$(tmp_0, tmp_1, null, 4, null);
    var tmp_2 = this;
    var tmp_3 = 0;
    var tmp_4 = this.n1a_1.h();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$2 = fillArrayVal(Array(tmp_4), null);
    var tmp_5 = tmp$ret$2;
    while (tmp_3 < tmp_4) {
      var tmp_6 = tmp_3;
      var tmp$ret$3;
      // Inline function 'antlr.Companion.tokenNames.<anonymous>' call
      var el = Companion_getInstance_0().o1a_1.wp(tmp_6);
      if (el == null) {
        el = Companion_getInstance_0().o1a_1.xp(tmp_6);
      }
      if (el == null) {
        el = '<INVALID>';
      }
      tmp$ret$3 = el;
      tmp_5[tmp_6] = tmp$ret$3;
      tmp_3 = tmp_3 + 1 | 0;
    }
    tmp_2.p1a_1 = tmp_5;
    this.q1a_1 = '\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x02\x0EA\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04\r\t\r\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t+\n\t\r\t\x0E\t,\x03\n\x06\n0\n\n\r\n\x0E\n1\x03\x0B\x05\x0B5\n\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\r\x06\r<\n\r\r\r\x0E\r=\x03\r\x03\r\x02\x02\x0E\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x03\x02\x05\x04\x02C\\c|\x03\x022;\x04\x02\x0B\x0B""\x02D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\x0B#\x03\x02\x02\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11*\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x154\x03\x02\x02\x02\x178\x03\x02\x02\x02\x19;\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07+\x02\x02 \b\x03\x02\x02\x02!"\x07,\x02\x02"\n\x03\x02\x02\x02#$\x071\x02\x02$\f\x03\x02\x02\x02%&\x07-\x02\x02&\x0E\x03\x02\x02\x02\'(\x07/\x02\x02(\x10\x03\x02\x02\x02)+\t\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x12\x03\x02\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x14\x03\x02\x02\x0235\x07\x0F\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\f\x02\x027\x16\x03\x02\x02\x0289\x07=\x02\x029\x18\x03\x02\x02\x02:<\t\x04\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\b\r\x02\x02@\x1A\x03\x02\x02\x02\x07\x02,14=\x03\b\x02\x02';
    var tmp_7 = this;
    tmp_7.r1a_1 = ATNDeserializer_init_$Create$(null, 1, null).eu(asCharArray('\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x02\x0EA\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\x0B\t\x0B\x04\f\t\f\x04\r\t\r\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x06\t+\n\t\r\t\x0E\t,\x03\n\x06\n0\n\n\r\n\x0E\n1\x03\x0B\x05\x0B5\n\x0B\x03\x0B\x03\x0B\x03\f\x03\f\x03\r\x06\r<\n\r\r\r\x0E\r=\x03\r\x03\r\x02\x02\x0E\x03\x03\x05\x04\x07\x05\t\x06\x0B\x07\r\b\x0F\t\x11\n\x13\x0B\x15\f\x17\r\x19\x0E\x03\x02\x05\x04\x02C\\c|\x03\x022;\x04\x02\x0B\x0B""\x02D\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x0B\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x03\x1B\x03\x02\x02\x02\x05\x1D\x03\x02\x02\x02\x07\x1F\x03\x02\x02\x02\t!\x03\x02\x02\x02\x0B#\x03\x02\x02\x02\r%\x03\x02\x02\x02\x0F\'\x03\x02\x02\x02\x11*\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x154\x03\x02\x02\x02\x178\x03\x02\x02\x02\x19;\x03\x02\x02\x02\x1B\x1C\x07?\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E\x07*\x02\x02\x1E\x06\x03\x02\x02\x02\x1F \x07+\x02\x02 \b\x03\x02\x02\x02!"\x07,\x02\x02"\n\x03\x02\x02\x02#$\x071\x02\x02$\f\x03\x02\x02\x02%&\x07-\x02\x02&\x0E\x03\x02\x02\x02\'(\x07/\x02\x02(\x10\x03\x02\x02\x02)+\t\x02\x02\x02*)\x03\x02\x02\x02+,\x03\x02\x02\x02,*\x03\x02\x02\x02,-\x03\x02\x02\x02-\x12\x03\x02\x02\x02.0\t\x03\x02\x02/.\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03\x02\x02\x022\x14\x03\x02\x02\x0235\x07\x0F\x02\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03\x02\x02\x0267\x07\f\x02\x027\x16\x03\x02\x02\x0289\x07=\x02\x029\x18\x03\x02\x02\x02:<\t\x04\x02\x02;:\x03\x02\x02\x02<=\x03\x02\x02\x02=;\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?@\b\r\x02\x02@\x1A\x03\x02\x02\x02\x07\x02,14=\x03\b\x02\x02'));
    var tmp_8 = this;
    var tmp_9 = 0;
    var tmp_10 = this.r1a_1.zp();
    var tmp$ret$4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$4 = fillArrayVal(Array(tmp_10), null);
    var tmp_11 = tmp$ret$4;
    while (tmp_9 < tmp_10) {
      var tmp_12 = tmp_9;
      var tmp$ret$5;
      // Inline function 'antlr.Companion.<anonymous>' call
      tmp$ret$5 = new DFA(ensureNotNull(Companion_getInstance_0().r1a_1.nq(tmp_12)), tmp_12);
      tmp_11[tmp_12] = tmp$ret$5;
      tmp_9 = tmp_9 + 1 | 0;
    }
    tmp_8.k1a_1 = tmp_11;
  }
  Companion.prototype.s1a = function () {
    return this.o1a_1;
  };
  Companion.prototype.t1a = function () {
    return this.r1a_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Channels(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.w1a_1 = id;
  }
  Channels.$metadata$ = classMeta('Channels', undefined, undefined, undefined, undefined, Enum.prototype);
  function Rules(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Rules.$metadata$ = classMeta('Rules', undefined, undefined, undefined, undefined, Enum.prototype);
  function Channels_DEFAULT_TOKEN_CHANNEL_getInstance() {
    Channels_initEntries();
    return Channels_DEFAULT_TOKEN_CHANNEL_instance;
  }
  function Channels_HIDDEN_getInstance() {
    Channels_initEntries();
    return Channels_HIDDEN_instance;
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
    this.n1b_1 = input;
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = values();
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
      tmp0_mapTo.a(tmp1_map(item));
    }
    tmp$ret$0 = tmp0_mapTo;
    tmp$ret$1 = tmp$ret$0;
    var tmp2_toTypedArray = tmp$ret$1;
    tmp$ret$2 = copyToArray(tmp2_toTypedArray);
    tmp.o1b_1 = tmp$ret$2;
    var tmp_0 = this;
    var tmp_1 = Companion_getInstance_0().r1a_1;
    var tmp_2 = Companion_getInstance_0().k1a_1;
    tmp_0.if_1 = new LexerATNSimulator(this, tmp_1, isArray(tmp_2) ? tmp_2 : THROW_CCE(), Companion_getInstance_0().l1a_1);
  }
  CalculatorLexer.prototype.gj = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp0_map = values_0();
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
      tmp$ret$0 = item.ua_1;
      tmp0_mapTo.a(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    var tmp1_toTypedArray = tmp$ret$2;
    tmp$ret$3 = copyToArray(tmp1_toTypedArray);
    return tmp$ret$3;
  };
  CalculatorLexer.prototype.sh = function () {
    return Companion_getInstance_0().r1a_1;
  };
  CalculatorLexer.prototype.lf = function () {
    return Companion_getInstance_0().o1a_1;
  };
  CalculatorLexer.$metadata$ = classMeta('CalculatorLexer', undefined, undefined, undefined, undefined, Lexer.prototype);
  function name$factory() {
    return getPropertyCallableRef('name', 1, KProperty1, function (receiver) {
      return receiver.ua_1;
    }, null);
  }
  function CalculatorListener() {
  }
  CalculatorListener.$metadata$ = interfaceMeta('CalculatorListener', [ParseTreeListener]);
  var Tokens_EOF_instance;
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
  var Tokens_entriesInitialized;
  function Tokens_initEntries() {
    if (Tokens_entriesInitialized)
      return Unit_getInstance();
    Tokens_entriesInitialized = true;
    Tokens_EOF_instance = new Tokens('EOF', 0, -1);
    Tokens_T__0_instance = new Tokens('T__0', 1, 1);
    Tokens_T__1_instance = new Tokens('T__1', 2, 2);
    Tokens_T__2_instance = new Tokens('T__2', 3, 3);
    Tokens_MUL_instance = new Tokens('MUL', 4, 4);
    Tokens_DIV_instance = new Tokens('DIV', 5, 5);
    Tokens_ADD_instance = new Tokens('ADD', 6, 6);
    Tokens_SUB_instance = new Tokens('SUB', 7, 7);
    Tokens_ID_instance = new Tokens('ID', 8, 8);
    Tokens_INT_instance = new Tokens('INT', 9, 9);
    Tokens_NEWLINE_instance = new Tokens('NEWLINE', 10, 10);
    Tokens_DELIMITER_instance = new Tokens('DELIMITER', 11, 11);
    Tokens_WS_instance = new Tokens('WS', 12, 12);
  }
  var Rules_RULE_prog_instance;
  var Rules_RULE_stat_instance;
  var Rules_RULE_expr_instance;
  var Rules_entriesInitialized_0;
  function Rules_initEntries_0() {
    if (Rules_entriesInitialized_0)
      return Unit_getInstance();
    Rules_entriesInitialized_0 = true;
    Rules_RULE_prog_instance = new Rules_0('RULE_prog', 0, 0);
    Rules_RULE_stat_instance = new Rules_0('RULE_stat', 1, 1);
    Rules_RULE_expr_instance = new Rules_0('RULE_expr', 2, 2);
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
  function PrintContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    PrintContext.call($this);
    $this.o1c(ctx);
    return $this;
  }
  function PrintContext_init_$Create$(ctx) {
    return PrintContext_init_$Init$(ctx, Object.create(PrintContext.prototype));
  }
  function BlankContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    BlankContext.call($this);
    $this.o1c(ctx);
    return $this;
  }
  function BlankContext_init_$Create$(ctx) {
    return BlankContext_init_$Init$(ctx, Object.create(BlankContext.prototype));
  }
  function AssignContext_init_$Init$(ctx, $this) {
    StatContext_init_$Init$_0($this);
    AssignContext.call($this);
    $this.o1c(ctx);
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
  function MulDivContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    MulDivContext.call($this);
    $this.w1c(ctx);
    return $this;
  }
  function MulDivContext_init_$Create$(ctx) {
    return MulDivContext_init_$Init$(ctx, Object.create(MulDivContext.prototype));
  }
  function AddSubContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    AddSubContext.call($this);
    $this.w1c(ctx);
    return $this;
  }
  function AddSubContext_init_$Create$(ctx) {
    return AddSubContext_init_$Init$(ctx, Object.create(AddSubContext.prototype));
  }
  function ParentheseContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    ParentheseContext.call($this);
    $this.w1c(ctx);
    return $this;
  }
  function ParentheseContext_init_$Create$(ctx) {
    return ParentheseContext_init_$Init$(ctx, Object.create(ParentheseContext.prototype));
  }
  function IdContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    IdContext.call($this);
    $this.w1c(ctx);
    return $this;
  }
  function IdContext_init_$Create$(ctx) {
    return IdContext_init_$Init$(ctx, Object.create(IdContext.prototype));
  }
  function IntContext_init_$Init$(ctx, $this) {
    ExprContext_init_$Init$_0($this);
    IntContext.call($this);
    $this.w1c(ctx);
    return $this;
  }
  function IntContext_init_$Create$(ctx) {
    return IntContext_init_$Init$(ctx, Object.create(IntContext.prototype));
  }
  function solver() {
    solver_instance = this;
    this.x1c_1 = listOf([getKClass(ProgContext), getKClass(StatContext), getKClass(ExprContext)]);
  }
  solver.prototype.wb = function () {
    return this.x1c_1;
  };
  solver.$metadata$ = objectMeta('solver', [TypeDeclarator]);
  var solver_instance;
  function solver_getInstance() {
    if (solver_instance == null)
      new solver();
    return solver_instance;
  }
  function Tokens(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.a1d_1 = id;
  }
  Tokens.$metadata$ = classMeta('Tokens', undefined, undefined, undefined, undefined, Enum.prototype);
  function Rules_0(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.d1d_1 = id;
  }
  Rules_0.$metadata$ = classMeta('Rules', undefined, undefined, undefined, undefined, Enum.prototype);
  function Companion_0() {
    Companion_instance_0 = this;
    this.f1d_1 = new PredictionContextCache();
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
    tmp.g1d_1 = tmp$ret$2;
    this.h1d_1 = listOf([null, "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", null, null, null, "';'"]);
    this.i1d_1 = listOf([null, null, null, null, 'MUL', 'DIV', 'ADD', 'SUB', 'ID', 'INT', 'NEWLINE', 'DELIMITER', 'WS']);
    var tmp_0 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = this.h1d_1;
    tmp$ret$3 = copyToArray(tmp0_toTypedArray);
    var tmp_1 = tmp$ret$3;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp1_toTypedArray = this.i1d_1;
    tmp$ret$4 = copyToArray(tmp1_toTypedArray);
    var tmp_2 = tmp$ret$4;
    tmp_0.j1d_1 = VocabularyImpl_init_$Create$(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = this;
    var tmp_4 = 0;
    var tmp_5 = this.i1d_1.h();
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$5 = fillArrayVal(Array(tmp_5), null);
    var tmp_6 = tmp$ret$5;
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      var tmp$ret$6;
      // Inline function 'antlr.Companion.tokenNames.<anonymous>' call
      var el = Companion_getInstance_1().j1d_1.wp(tmp_7);
      if (el == null) {
        el = Companion_getInstance_1().j1d_1.xp(tmp_7);
      }
      if (el == null) {
        el = '<INVALID>';
      }
      tmp$ret$6 = el;
      tmp_6[tmp_7] = tmp$ret$6;
      tmp_4 = tmp_4 + 1 | 0;
    }
    tmp_3.k1d_1 = tmp_6;
    this.l1d_1 = "\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x03\x0E-\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02\x0B\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04(\n\x04\f\x04\x0E\x04+\x0B\x04\x03\x04\x02\x03\x06\x05\x02\x04\x06\x02\x04\x03\x02\x06\x07\x03\x02\b\t\x020\x02\t\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\x0B\x03\x02\x02\x02\x0B\t\x03\x02\x02\x02\x0B\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04\x01\x02\x19 \x07\x0B\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x07\x05\x02\x02\x1E \x03\x02\x02\x02\x1F\x18\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07'!\x03\x02\x02\x02'$\x03\x02\x02\x02(+\x03\x02\x02\x02)'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+)\x03\x02\x02\x02\x07\x0B\x16\x1F')";
    var tmp_8 = this;
    tmp_8.m1d_1 = ATNDeserializer_init_$Create$(null, 1, null).eu(asCharArray("\x03\u608B\uA72A\u8133\uB9ED\u417C\u3BE7\u7786\u5964\x03\x0E-\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x06\x02\n\n\x02\r\x02\x0E\x02\x0B\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x17\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04 \n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04(\n\x04\f\x04\x0E\x04+\x0B\x04\x03\x04\x02\x03\x06\x05\x02\x04\x06\x02\x04\x03\x02\x06\x07\x03\x02\b\t\x020\x02\t\x03\x02\x02\x02\x04\x16\x03\x02\x02\x02\x06\x1F\x03\x02\x02\x02\b\n\x05\x04\x03\x02\t\b\x03\x02\x02\x02\n\x0B\x03\x02\x02\x02\x0B\t\x03\x02\x02\x02\x0B\f\x03\x02\x02\x02\f\x03\x03\x02\x02\x02\r\x0E\x05\x06\x04\x02\x0E\x0F\x07\f\x02\x02\x0F\x17\x03\x02\x02\x02\x10\x11\x07\n\x02\x02\x11\x12\x07\x03\x02\x02\x12\x13\x05\x06\x04\x02\x13\x14\x07\f\x02\x02\x14\x17\x03\x02\x02\x02\x15\x17\x07\f\x02\x02\x16\r\x03\x02\x02\x02\x16\x10\x03\x02\x02\x02\x16\x15\x03\x02\x02\x02\x17\x05\x03\x02\x02\x02\x18\x19\b\x04\x01\x02\x19 \x07\x0B\x02\x02\x1A \x07\n\x02\x02\x1B\x1C\x07\x04\x02\x02\x1C\x1D\x05\x06\x04\x02\x1D\x1E\x07\x05\x02\x02\x1E \x03\x02\x02\x02\x1F\x18\x03\x02\x02\x02\x1F\x1A\x03\x02\x02\x02\x1F\x1B\x03\x02\x02\x02 )\x03\x02\x02\x02!\"\f\x07\x02\x02\"#\t\x02\x02\x02#(\x05\x06\x04\b$%\f\x06\x02\x02%&\t\x03\x02\x02&(\x05\x06\x04\x07'!\x03\x02\x02\x02'$\x03\x02\x02\x02(+\x03\x02\x02\x02)'\x03\x02\x02\x02)*\x03\x02\x02\x02*\x07\x03\x02\x02\x02+)\x03\x02\x02\x02\x07\x0B\x16\x1F')"));
    var tmp_9 = this;
    var tmp_10 = 0;
    var tmp_11 = this.m1d_1.zp();
    var tmp$ret$7;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$7 = fillArrayVal(Array(tmp_11), null);
    var tmp_12 = tmp$ret$7;
    while (tmp_10 < tmp_11) {
      var tmp_13 = tmp_10;
      var tmp$ret$8;
      // Inline function 'antlr.Companion.<anonymous>' call
      tmp$ret$8 = new DFA(ensureNotNull(Companion_getInstance_1().m1d_1.nq(tmp_13)), tmp_13);
      tmp_12[tmp_13] = tmp$ret$8;
      tmp_10 = tmp_10 + 1 | 0;
    }
    tmp_9.e1d_1 = tmp_12;
  }
  Companion_0.prototype.s1a = function () {
    return this.j1d_1;
  };
  Companion_0.prototype.t1a = function () {
    return this.m1d_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  ProgContext.prototype.kj = function () {
    return Rules_RULE_prog_getInstance().d1d_1;
  };
  ProgContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).p1b(this);
    }
  };
  ProgContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).q1b(this);
    }
  };
  ProgContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).b1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function ProgContext() {
  }
  ProgContext.$metadata$ = classMeta('ProgContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  StatContext.prototype.kj = function () {
    return Rules_RULE_stat_getInstance().d1d_1;
  };
  StatContext.prototype.o1c = function (ctx) {
    ParserRuleContext.prototype.cp.call(this, ctx);
  };
  function StatContext() {
  }
  StatContext.$metadata$ = classMeta('StatContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  PrintContext.prototype.b1e = function () {
    return this.jp(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  PrintContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).r1b(this);
    }
  };
  PrintContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).s1b(this);
    }
  };
  PrintContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).c1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function PrintContext() {
  }
  PrintContext.$metadata$ = classMeta('PrintContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  BlankContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).v1b(this);
    }
  };
  BlankContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).w1b(this);
    }
  };
  BlankContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).e1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function BlankContext() {
  }
  BlankContext.$metadata$ = classMeta('BlankContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  AssignContext.prototype.q1e = function () {
    return this.hp(Tokens_ID_getInstance().a1d_1, 0);
  };
  AssignContext.prototype.b1e = function () {
    return this.jp(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  AssignContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).t1b(this);
    }
  };
  AssignContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).u1b(this);
    }
  };
  AssignContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).d1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function AssignContext() {
  }
  AssignContext.$metadata$ = classMeta('AssignContext', undefined, undefined, undefined, undefined, StatContext.prototype);
  ExprContext.prototype.kj = function () {
    return Rules_RULE_expr_getInstance().d1d_1;
  };
  ExprContext.prototype.w1c = function (ctx) {
    ParserRuleContext.prototype.cp.call(this, ctx);
  };
  function ExprContext() {
  }
  ExprContext.$metadata$ = classMeta('ExprContext', undefined, undefined, undefined, undefined, ParserRuleContext.prototype);
  function IMulDivContext() {
  }
  IMulDivContext.$metadata$ = interfaceMeta('IMulDivContext');
  MulDivContext.prototype.z1e = function (_set____db54di) {
    this.y1e_1 = _set____db54di;
  };
  MulDivContext.prototype.a1f = function () {
    return this.y1e_1;
  };
  MulDivContext.prototype.b1f = function (i) {
    return this.jp(getType(solver_getInstance(), 'ExprContext'), i);
  };
  MulDivContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).x1b(this);
    }
  };
  MulDivContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).y1b(this);
    }
  };
  MulDivContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).f1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function MulDivContext() {
    this.y1e_1 = null;
  }
  MulDivContext.$metadata$ = classMeta('MulDivContext', [IMulDivContext], undefined, undefined, undefined, ExprContext.prototype);
  AddSubContext.prototype.b1f = function (i) {
    return this.jp(getType(solver_getInstance(), 'ExprContext'), i);
  };
  AddSubContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).z1b(this);
    }
  };
  AddSubContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).a1c(this);
    }
  };
  AddSubContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).g1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function AddSubContext() {
    this.j1f_1 = null;
  }
  AddSubContext.$metadata$ = classMeta('AddSubContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  ParentheseContext.prototype.b1e = function () {
    return this.jp(getType(solver_getInstance(), 'ExprContext'), 0);
  };
  ParentheseContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).b1c(this);
    }
  };
  ParentheseContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).c1c(this);
    }
  };
  ParentheseContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).h1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function ParentheseContext() {
  }
  ParentheseContext.$metadata$ = classMeta('ParentheseContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  IdContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).d1c(this);
    }
  };
  IdContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).e1c(this);
    }
  };
  IdContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).i1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function IdContext() {
  }
  IdContext.$metadata$ = classMeta('IdContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  IntContext.prototype.fo = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).f1c(this);
    }
  };
  IntContext.prototype.ho = function (listener) {
    if (isInterface(listener, CalculatorListener)) {
      (isInterface(listener, CalculatorListener) ? listener : THROW_CCE()).g1c(this);
    }
  };
  IntContext.prototype.kp = function (visitor) {
    if (isInterface(visitor, CalculatorVisitor)) {
      return (isInterface(visitor, CalculatorVisitor) ? visitor : THROW_CCE()).j1a(this);
    } else {
      return ensureNotNull(visitor.pp(this));
    }
  };
  function IntContext() {
  }
  IntContext.$metadata$ = classMeta('IntContext', undefined, undefined, undefined, undefined, ExprContext.prototype);
  function expr($this, _p) {
    var _parentctx = $this.pg_1;
    var _parentState = $this.jf_1;
    var _localctx = ExprContext_init_$Create$($this.pg_1, _parentState);
    var _prevctx = _localctx;
    var _startState = 4;
    $this.xo(_localctx, 4, Rules_RULE_expr_getInstance().d1d_1, _p);
    var _la;
    try {
      var _alt;
      $this.uo(_localctx, 1);
      {
        $this.jf_1 = 29;
        $this.mg_1.dc($this);
        var tmp0_subject = ensureNotNull($this.ng_1).oc(1);
        if (tmp0_subject === $this.z1g_1) {
          {
            _localctx = IntContext_init_$Create$(_localctx);
            $this.pg_1 = _localctx;
            _prevctx = _localctx;
            $this.jf_1 = 23;
            var tmp = $this.tn($this.z1g_1);
            if (isInterface(tmp, Token))
              tmp;
            else
              THROW_CCE();
          }
        } else if (tmp0_subject === $this.y1g_1) {
          {
            _localctx = IdContext_init_$Create$(_localctx);
            $this.pg_1 = _localctx;
            _prevctx = _localctx;
            $this.jf_1 = 24;
            var tmp_0 = $this.tn($this.y1g_1);
            if (isInterface(tmp_0, Token))
              tmp_0;
            else
              THROW_CCE();
          }
        } else if (tmp0_subject === $this.s1g_1) {
          {
            _localctx = ParentheseContext_init_$Create$(_localctx);
            $this.pg_1 = _localctx;
            _prevctx = _localctx;
            $this.jf_1 = 25;
            var tmp_1 = $this.tn($this.s1g_1);
            if (isInterface(tmp_1, Token))
              tmp_1;
            else
              THROW_CCE();
            $this.jf_1 = 26;
            expr($this, 0);
            $this.jf_1 = 27;
            var tmp_2 = $this.tn($this.t1g_1);
            if (isInterface(tmp_2, Token))
              tmp_2;
            else
              THROW_CCE();
          }
        } else {
          throw NoViableAltException_init_$Create$($this, null, null, null, null, null, 62, null);
        }
        ensureNotNull($this.pg_1).ao_1 = ensureNotNull($this.ng_1).sd(-1);
        $this.jf_1 = 39;
        $this.mg_1.dc($this);
        _alt = ensureNotNull($this.if_1).s12(ensureNotNull($this.ng_1), 4, $this.pg_1);
        while (!(_alt === 2) ? !(_alt === Companion_getInstance().yp_1) : false) {
          if (_alt === 1) {
            if (!($this.rg_1 == null)) {
              $this.go();
            }
            _prevctx = _localctx;
            {
              $this.jf_1 = 37;
              $this.mg_1.dc($this);
              var tmp1_subject = ensureNotNull($this.if_1).s12(ensureNotNull($this.ng_1), 3, $this.pg_1);
              if (tmp1_subject === 1) {
                {
                  _localctx = MulDivContext_init_$Create$(ExprContext_init_$Create$(_parentctx, _parentState));
                  $this.yo(_localctx, _startState, Rules_RULE_expr_getInstance().d1d_1);
                  $this.jf_1 = 31;
                  if (!$this.cn(ensureNotNull($this.pg_1), 5)) {
                    throw FailedPredicateException_init_$Create$($this, 'precpred(context!!, 5)', null, 4, null);
                  }
                  $this.jf_1 = 32;
                  (_localctx instanceof MulDivContext ? _localctx : THROW_CCE()).z1e(ensureNotNull($this.ng_1).sd(1));
                  _la = ensureNotNull($this.ng_1).oc(1);
                  if (!(_la === $this.u1g_1 ? true : _la === $this.v1g_1)) {
                    var tmp_3 = _localctx instanceof MulDivContext ? _localctx : THROW_CCE();
                    var tmp_4 = $this.mg_1.bc($this);
                    tmp_3.z1e(isInterface(tmp_4, Token) ? tmp_4 : THROW_CCE());
                  } else {
                    if (ensureNotNull($this.ng_1).oc(1) === Tokens_EOF_getInstance().a1d_1)
                      $this.tg_1 = true;
                    $this.mg_1.fc($this);
                    $this.yg();
                  }
                  $this.jf_1 = 33;
                  expr($this, 6);
                }
              } else if (tmp1_subject === 2) {
                {
                  _localctx = AddSubContext_init_$Create$(ExprContext_init_$Create$(_parentctx, _parentState));
                  $this.yo(_localctx, _startState, Rules_RULE_expr_getInstance().d1d_1);
                  $this.jf_1 = 34;
                  if (!$this.cn(ensureNotNull($this.pg_1), 4)) {
                    throw FailedPredicateException_init_$Create$($this, 'precpred(context!!, 4)', null, 4, null);
                  }
                  $this.jf_1 = 35;
                  (_localctx instanceof AddSubContext ? _localctx : THROW_CCE()).j1f_1 = ensureNotNull($this.ng_1).sd(1);
                  _la = ensureNotNull($this.ng_1).oc(1);
                  if (!(_la === $this.w1g_1 ? true : _la === $this.x1g_1)) {
                    var tmp_5 = _localctx instanceof AddSubContext ? _localctx : THROW_CCE();
                    var tmp_6 = $this.mg_1.bc($this);
                    tmp_5.j1f_1 = isInterface(tmp_6, Token) ? tmp_6 : THROW_CCE();
                  } else {
                    if (ensureNotNull($this.ng_1).oc(1) === Tokens_EOF_getInstance().a1d_1)
                      $this.tg_1 = true;
                    $this.mg_1.fc($this);
                    $this.yg();
                  }
                  $this.jf_1 = 36;
                  expr($this, 5);
                }
              }
            }
          }
          $this.jf_1 = 41;
          $this.mg_1.dc($this);
          _alt = ensureNotNull($this.if_1).s12(ensureNotNull($this.ng_1), 4, $this.pg_1);
        }
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.bo_1 = $p;
        $this.mg_1.gc($this, $p);
        $this.mg_1.cc($this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      $this.ap(_parentctx);
    }
    return _localctx;
  }
  function expr_sempred($this, _localctx, predIndex) {
    var tmp0_subject = predIndex;
    if (tmp0_subject === 0)
      return $this.cn(ensureNotNull($this.pg_1), 5);
    else if (tmp0_subject === 1)
      return $this.cn(ensureNotNull($this.pg_1), 4);
    return true;
  }
  function Tokens_EOF_getInstance() {
    Tokens_initEntries();
    return Tokens_EOF_instance;
  }
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
    this.r1g_1 = Tokens_T__0_getInstance().a1d_1;
    this.s1g_1 = Tokens_T__1_getInstance().a1d_1;
    this.t1g_1 = Tokens_T__2_getInstance().a1d_1;
    this.u1g_1 = Tokens_MUL_getInstance().a1d_1;
    this.v1g_1 = Tokens_DIV_getInstance().a1d_1;
    this.w1g_1 = Tokens_ADD_getInstance().a1d_1;
    this.x1g_1 = Tokens_SUB_getInstance().a1d_1;
    this.y1g_1 = Tokens_ID_getInstance().a1d_1;
    this.z1g_1 = Tokens_INT_getInstance().a1d_1;
    this.a1h_1 = Tokens_NEWLINE_getInstance().a1d_1;
    this.b1h_1 = Tokens_DELIMITER_getInstance().a1d_1;
    this.c1h_1 = Tokens_WS_getInstance().a1d_1;
    this.if_1 = new ParserATNSimulator(this, Companion_getInstance_1().m1d_1, Companion_getInstance_1().e1d_1, Companion_getInstance_1().f1d_1);
  }
  CalculatorParser.prototype.gj = function () {
    return Companion_getInstance_1().g1d_1;
  };
  CalculatorParser.prototype.sh = function () {
    return Companion_getInstance_1().m1d_1;
  };
  CalculatorParser.prototype.lf = function () {
    return Companion_getInstance_1().j1d_1;
  };
  CalculatorParser.prototype.d1h = function () {
    var _localctx = ProgContext_init_$Create$(this.pg_1, this.jf_1);
    this.so(_localctx, 0, Rules_RULE_prog_getInstance().d1d_1);
    var _la;
    try {
      this.uo(_localctx, 1);
      {
        this.jf_1 = 7;
        this.mg_1.dc(this);
        _la = ensureNotNull(this.ng_1).oc(1);
        do {
          {
            {
              this.jf_1 = 6;
              this.e1h();
            }
          }
          this.jf_1 = 9;
          this.mg_1.dc(this);
          _la = ensureNotNull(this.ng_1).oc(1);
        }
         while ((_la & -64) === 0 ? !(new Long(1, 0)).kb(_la).mb((new Long(1, 0)).kb(this.s1g_1).nb((new Long(1, 0)).kb(this.y1g_1)).nb((new Long(1, 0)).kb(this.z1g_1)).nb((new Long(1, 0)).kb(this.a1h_1))).equals(new Long(0, 0)) : false);
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.bo_1 = $p;
        this.mg_1.gc(this, $p);
        this.mg_1.cc(this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      this.to();
    }
    return _localctx;
  };
  CalculatorParser.prototype.e1h = function () {
    var _localctx = StatContext_init_$Create$(this.pg_1, this.jf_1);
    this.so(_localctx, 2, Rules_RULE_stat_getInstance().d1d_1);
    try {
      this.jf_1 = 20;
      this.mg_1.dc(this);
      var tmp0_subject = ensureNotNull(this.if_1).s12(ensureNotNull(this.ng_1), 1, this.pg_1);
      switch (tmp0_subject) {
        case 1:
          _localctx = PrintContext_init_$Create$(_localctx);
          this.uo(_localctx, 1);
          {
            this.jf_1 = 11;
            expr(this, 0);
            this.jf_1 = 12;
            var tmp = this.tn(this.a1h_1);
            if (isInterface(tmp, Token))
              tmp;
            else
              THROW_CCE();
          }

          break;
        case 2:
          _localctx = AssignContext_init_$Create$(_localctx);
          this.uo(_localctx, 2);
          {
            this.jf_1 = 14;
            var tmp_0 = this.tn(this.y1g_1);
            if (isInterface(tmp_0, Token))
              tmp_0;
            else
              THROW_CCE();
            this.jf_1 = 15;
            var tmp_1 = this.tn(this.r1g_1);
            if (isInterface(tmp_1, Token))
              tmp_1;
            else
              THROW_CCE();
            this.jf_1 = 16;
            expr(this, 0);
            this.jf_1 = 17;
            var tmp_2 = this.tn(this.a1h_1);
            if (isInterface(tmp_2, Token))
              tmp_2;
            else
              THROW_CCE();
          }

          break;
        case 3:
          _localctx = BlankContext_init_$Create$(_localctx);
          this.uo(_localctx, 3);
          {
            this.jf_1 = 19;
            var tmp_3 = this.tn(this.a1h_1);
            if (isInterface(tmp_3, Token))
              tmp_3;
            else
              THROW_CCE();
          }

          break;
      }
    } catch ($p) {
      if ($p instanceof RecognitionException) {
        _localctx.bo_1 = $p;
        this.mg_1.gc(this, $p);
        this.mg_1.cc(this, $p);
      } else {
        throw $p;
      }
    }
    finally {
      this.to();
    }
    return _localctx;
  };
  CalculatorParser.prototype.bn = function (_localctx, ruleIndex, predIndex) {
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
  function CalculatorVistorImp() {
    CalculatorBaseVisitor.call(this);
    this.f1h_1 = HashMap_init_$Create$();
  }
  CalculatorVistorImp.prototype.c1a = function (ctx) {
    var tmp0_safe_receiver = ctx.b1e();
    return ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kp(this));
  };
  CalculatorVistorImp.prototype.f1a = function (ctx) {
    var tmp0_safe_receiver = ctx.b1f(0);
    var param1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kp(this);
    var tmp1_safe_receiver = ctx.b1f(1);
    var param2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kp(this);
    var tmp2_safe_receiver = ctx.a1f();
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.kd()) === Tokens_MUL_getInstance().a1d_1) {
      var tmp3_safe_receiver = param1;
      return ensureNotNull(tmp3_safe_receiver == null ? null : imul(tmp3_safe_receiver, ensureNotNull(param2)));
    }
    var tmp4_safe_receiver = ctx.a1f();
    if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.kd()) === Tokens_DIV_getInstance().a1d_1) {
      var tmp5_safe_receiver = param1;
      return ensureNotNull(tmp5_safe_receiver == null ? null : tmp5_safe_receiver / ensureNotNull(param2) | 0);
    }
    throw RuntimeException_init_$Create$('\u4E0D\u77E5\u9053\u7684\u7B26\u53F7');
  };
  CalculatorVistorImp.prototype.g1a = function (ctx) {
    var tmp0_safe_receiver = ctx.b1f(0);
    var param1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kp(this);
    var tmp1_safe_receiver = ctx.b1f(1);
    var param2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kp(this);
    var tmp2_safe_receiver = ctx.j1f_1;
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.kd()) === Tokens_ADD_getInstance().a1d_1) {
      var tmp3_safe_receiver = param1;
      return ensureNotNull(tmp3_safe_receiver == null ? null : tmp3_safe_receiver + ensureNotNull(param2) | 0);
    }
    var tmp4_safe_receiver = ctx.j1f_1;
    if ((tmp4_safe_receiver == null ? null : tmp4_safe_receiver.kd()) === Tokens_SUB_getInstance().a1d_1) {
      var tmp5_safe_receiver = param1;
      return ensureNotNull(tmp5_safe_receiver == null ? null : tmp5_safe_receiver - ensureNotNull(param2) | 0);
    }
    throw RuntimeException_init_$Create$('\u4E0D\u77E5\u9053\u7684\u7B26\u53F7');
  };
  CalculatorVistorImp.prototype.i1a = function (ctx) {
    return ensureNotNull(this.f1h_1.p1(ctx.zd()));
  };
  CalculatorVistorImp.prototype.j1a = function (ctx) {
    return toInt(ctx.zd());
  };
  CalculatorVistorImp.prototype.d1a = function (ctx) {
    var tmp0_safe_receiver = ctx.q1e();
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zd();
    var tmp1_safe_receiver = ctx.b1e();
    var value = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kp(this);
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.f1h_1;
    var tmp1_set = ensureNotNull(name);
    var tmp2_set = ensureNotNull(value);
    tmp0_set.a2(tmp1_set, tmp2_set);
    return ensureNotNull(CalculatorBaseVisitor.prototype.d1a.call(this, ctx));
  };
  CalculatorVistorImp.prototype.h1a = function (ctx) {
    var tmp0_safe_receiver = ctx.b1e();
    return ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kp(this));
  };
  CalculatorVistorImp.$metadata$ = classMeta('CalculatorVistorImp', undefined, undefined, undefined, undefined, CalculatorBaseVisitor.prototype);
  function main() {
    println(greeting('123'));
    showAdd();
  }
  function greeting(name) {
    return 'Hello, ' + name;
  }
  function showAdd() {
    var expr = '1+2\n';
    println('\u8F93\u5165\u8868\u8FBE\u5F0F');
    var lexer = new CalculatorLexer(ANTLRInputStream_init_$Create$(expr));
    println('\u521B\u5EFA\u8BCD\u6CD5\u5206\u6790\u5668');
    var tokenStream = new CommonTokenStream(lexer);
    println('\u521B\u5EFAtoken\u8F93\u5165\u6D41');
    var parser = new CalculatorParser(tokenStream);
    println('\u521B\u5EFA\u8BED\u6CD5\u5206\u6790\u5668');
    parser.qg_1 = true;
    println('\u8BBE\u7F6E\u521B\u5EFA\u8BED\u6CD5\u6811\u89E3\u6790\u4E3Atrue');
    try {
      var root = parser.d1h();
      println('\u83B7\u53D6\u8868\u8FBE\u5F0F\u6839\u8282\u70B9');
      var vistor = new CalculatorVistorImp();
      println('\u521B\u5EFA\u8BBF\u95EE\u5668');
      var res = vistor.e19(root);
      println('\u83B7\u53D6\u7ED3\u679C');
      println(res);
    } catch ($p) {
      if ($p instanceof Exception) {
        printStackTrace($p);
      } else {
        throw $p;
      }
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=antlt-kotlin-demo.js.map
