(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './antlr-kotlin-antlr-kotlin-runtime-js-ir.js', './antlt-kotlin-demo.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-kotlin-test-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./antlr-kotlin-antlr-kotlin-runtime-js-ir.js'), require('./antlt-kotlin-demo.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'));
  else {
    if (typeof this['antlr-kotlin-antlr-kotlin-runtime-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-test'. Its dependency 'antlr-kotlin-antlr-kotlin-runtime-js-ir' was not found. Please, check whether 'antlr-kotlin-antlr-kotlin-runtime-js-ir' is loaded prior to 'antlt-kotlin-demo-test'.");
    }
    if (typeof this['antlt-kotlin-demo'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-test'. Its dependency 'antlt-kotlin-demo' was not found. Please, check whether 'antlt-kotlin-demo' is loaded prior to 'antlt-kotlin-demo-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'antlt-kotlin-demo-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'antlt-kotlin-demo-test'.");
    }
    root['antlt-kotlin-demo-test'] = factory(typeof this['antlt-kotlin-demo-test'] === 'undefined' ? {} : this['antlt-kotlin-demo-test'], this['antlr-kotlin-antlr-kotlin-runtime-js-ir'], this['antlt-kotlin-demo'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-kotlin-test-js-ir']);
  }
}(this, function (_, kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime, kotlin_me_goal_antlt_kotlin_demo, kotlin_kotlin, kotlin_kotlin_test) {
  'use strict';
  //region block: imports
  var ANTLRInputStream_init_$Create$ = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.h;
  var CalculatorLexer = kotlin_me_goal_antlt_kotlin_demo.$_$.b;
  var CommonTokenStream = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.w;
  var CalculatorParser = kotlin_me_goal_antlt_kotlin_demo.$_$.c;
  var println = kotlin_kotlin.$_$.c3;
  var CalculatorVistorImp = kotlin_me_goal_antlt_kotlin_demo.$_$.d;
  var CharStreams_getInstance = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.m;
  var ParseTreeWalker = kotlin_com_strumenta_antlr_kotlin_antlr_kotlin_runtime.$_$.v;
  var CalculatorBaseListenerImpl = kotlin_me_goal_antlt_kotlin_demo.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.y4;
  var classMeta = kotlin_kotlin.$_$.i3;
  var suite = kotlin_kotlin_test.$_$.b;
  var test = kotlin_kotlin_test.$_$.c;
  var Unit_getInstance = kotlin_kotlin.$_$.n1;
  var Base64Factory_getInstance = kotlin_me_goal_antlt_kotlin_demo.$_$.e;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var charSequenceGet = kotlin_kotlin.$_$.g3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j1;
  var toByte = kotlin_kotlin.$_$.x3;
  //endregion
  //region block: pre-declaration
  //endregion
  function EvalTest() {
  }
  EvalTest.prototype.test_w6j16n_k$ = function () {
    var expr = '1+2';
    var inputStream = ANTLRInputStream_init_$Create$(expr);
    var lexer = new CalculatorLexer(inputStream);
    var tokenStream = new CommonTokenStream(lexer);
    var parser = new CalculatorParser(tokenStream);
    parser.buildParseTree_1 = true;
    println('\u8BBE\u7F6E\u4E3Atrue');
    var root = parser.prog_21xsq_k$();
    println('\u83B7\u53D6root');
    var vistor = new CalculatorVistorImp();
    var res = vistor.visit_276if_k$(root);
    println('\u7ED3\u679C=============' + res);
  };
  EvalTest.prototype.test1_tc2nhu_k$ = function () {
    var expr = '1+2';
    var tmp = CharStreams_getInstance();
    var charStream = tmp.fromString$default_ibgbyx_k$(expr, null, 2, null);
    var lexer = new CalculatorLexer(charStream);
    var tokens = new CommonTokenStream(lexer);
    var parser = new CalculatorParser(tokens);
    var parseTree = parser.prog_21xsq_k$();
    var walker = new ParseTreeWalker();
    walker.walk_g0y9jc_k$(new CalculatorBaseListenerImpl(), parseTree);
  };
  EvalTest.prototype.testLexer_em0q4p_k$ = function () {
    var expr = '1+2\n';
    var lexer = new CalculatorLexer(ANTLRInputStream_init_$Create$(expr));
    var token;
    $l$1: do {
      $l$0: do {
        token = lexer.nextToken_jykgjq_k$();
        println('TOKEN ' + token);
      }
       while (false);
      var tmp0_safe_receiver = token;
    }
     while (!((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_type_wovaf7_k$()) === -1));
  };
  EvalTest.prototype.testParser_gfid4w_k$ = function () {
    var expr = '1+2\n';
    var input = ANTLRInputStream_init_$Create$(expr);
    var lexer = new CalculatorLexer(input);
    var parser = new CalculatorParser(new CommonTokenStream(lexer));
    var root = parser.prog_21xsq_k$();
    println('Parsed: ' + getKClassFromExpression(root));
    println('Parsed: ' + root.get_childCount_1t393w_k$());
    println('Parsed: ' + getKClassFromExpression(ensureNotNull(root.children_1).get_fkrdnv_k$(0)));
  };
  EvalTest.$metadata$ = classMeta('EvalTest');
  function test_fun_izoufj() {
    suite('EvalTest', false, test_fun$EvalTest_test_fun_jzcya8);
  }
  function test_fun$EvalTest_test_fun_jzcya8() {
    test('test', false, test_fun$EvalTest_test_fun$test_test_fun_3g1o51);
    test('test1', false, test_fun$EvalTest_test_fun$test1_test_fun_jdlvpi);
    test('testLexer', false, test_fun$EvalTest_test_fun$testLexer_test_fun_44q6c5);
    test('testParser', false, test_fun$EvalTest_test_fun$testParser_test_fun_a8f6i4);
    return Unit_getInstance();
  }
  function test_fun$EvalTest_test_fun$test_test_fun_3g1o51() {
    var tmp = new EvalTest();
    tmp.test_w6j16n_k$();
    return Unit_getInstance();
  }
  function test_fun$EvalTest_test_fun$test1_test_fun_jdlvpi() {
    var tmp = new EvalTest();
    tmp.test1_tc2nhu_k$();
    return Unit_getInstance();
  }
  function test_fun$EvalTest_test_fun$testLexer_test_fun_44q6c5() {
    var tmp = new EvalTest();
    tmp.testLexer_em0q4p_k$();
    return Unit_getInstance();
  }
  function test_fun$EvalTest_test_fun$testParser_test_fun_a8f6i4() {
    var tmp = new EvalTest();
    tmp.testParser_gfid4w_k$();
    return Unit_getInstance();
  }
  function checkEncodeToString($this, input, expectedOutput) {
    var tmp = Base64Factory_getInstance().createEncoder_akj7gg_k$().encodeToString_4mbq1r_k$(asciiToByteArray(input, $this));
    assertEquals$default(expectedOutput, tmp, null, 4, null);
  }
  function asciiToByteArray(_this__u8e3s4, $this) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = new Int8Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      // Inline function 'org.jetbrains.base64.Base64Test.asciiToByteArray.<anonymous>' call
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      var tmp0__get_code__88qj9g = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp$ret$0 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      tmp$ret$1 = toByte(tmp$ret$0);
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString_1331x9_k$ = function () {
    checkEncodeToString(this, 'Kotlin is awesome', 'S290bGluIGlzIGF3ZXNvbWU=');
  };
  Base64Test.prototype.testPaddedStrings_g6pafj_k$ = function () {
    checkEncodeToString(this, '', '');
    checkEncodeToString(this, '1', 'MQ==');
    checkEncodeToString(this, '22', 'MjI=');
    checkEncodeToString(this, '333', 'MzMz');
    checkEncodeToString(this, '4444', 'NDQ0NA==');
  };
  Base64Test.prototype.testReturnString_u4h70i_k$ = function () {
    var encoder = Base64Factory_getInstance().createEncoder_akj7gg_k$();
    var res = encoder.testCommonString_5ks4p9_k$('123');
    assertEquals$default('123', res, null, 4, null);
  };
  Base64Test.$metadata$ = classMeta('Base64Test');
  function test_fun_izoufj_0() {
    suite('Base64Test', false, test_fun$Base64Test_test_fun_l9hxgj);
  }
  function test_fun$Base64Test_test_fun_l9hxgj() {
    test('testEncodeToString', false, test_fun$Base64Test_test_fun$testEncodeToString_test_fun_mskhe2);
    test('testPaddedStrings', false, test_fun$Base64Test_test_fun$testPaddedStrings_test_fun_40e4rs);
    test('testReturnString', false, test_fun$Base64Test_test_fun$testReturnString_test_fun_fctsd3);
    return Unit_getInstance();
  }
  function test_fun$Base64Test_test_fun$testEncodeToString_test_fun_mskhe2() {
    var tmp = new Base64Test();
    tmp.testEncodeToString_1331x9_k$();
    return Unit_getInstance();
  }
  function test_fun$Base64Test_test_fun$testPaddedStrings_test_fun_40e4rs() {
    var tmp = new Base64Test();
    tmp.testPaddedStrings_g6pafj_k$();
    return Unit_getInstance();
  }
  function test_fun$Base64Test_test_fun$testReturnString_test_fun_fctsd3() {
    var tmp = new Base64Test();
    tmp.testReturnString_u4h70i_k$();
    return Unit_getInstance();
  }
  //region block: tests
  (function () {
    suite('antlr', false, function () {
      test_fun_izoufj();
    });
    suite('org.jetbrains.base64', false, function () {
      test_fun_izoufj_0();
    });
  }());
  //endregion
  return _;
}));

//# sourceMappingURL=antlt-kotlin-demo-test.js.map
