(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'antlr-kotlin-antlr-kotlin-runtime-js-legacy', 'antlt-kotlin-demo-js-legacy', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('antlr-kotlin-antlr-kotlin-runtime-js-legacy'), require('antlt-kotlin-demo-js-legacy'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-js-legacy-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlt-kotlin-demo-js-legacy-test'.");
    }
    if (typeof this['antlr-kotlin-antlr-kotlin-runtime-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-js-legacy-test'. Its dependency 'antlr-kotlin-antlr-kotlin-runtime-js-legacy' was not found. Please, check whether 'antlr-kotlin-antlr-kotlin-runtime-js-legacy' is loaded prior to 'antlt-kotlin-demo-js-legacy-test'.");
    }
    if (typeof this['antlt-kotlin-demo-js-legacy'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-js-legacy-test'. Its dependency 'antlt-kotlin-demo-js-legacy' was not found. Please, check whether 'antlt-kotlin-demo-js-legacy' is loaded prior to 'antlt-kotlin-demo-js-legacy-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'antlt-kotlin-demo-js-legacy-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'antlt-kotlin-demo-js-legacy-test'.");
    }
    root['antlt-kotlin-demo-js-legacy-test'] = factory(typeof this['antlt-kotlin-demo-js-legacy-test'] === 'undefined' ? {} : this['antlt-kotlin-demo-js-legacy-test'], kotlin, this['antlr-kotlin-antlr-kotlin-runtime-js-legacy'], this['antlt-kotlin-demo-js-legacy'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$antlr_kotlin_antlr_kotlin_runtime_js_legacy, $module$antlt_kotlin_demo_js_legacy, $module$kotlin_test) {
  'use strict';
  var ANTLRInputStream_init = $module$antlr_kotlin_antlr_kotlin_runtime_js_legacy.org.antlr.v4.kotlinruntime.ANTLRInputStream_init_61zpoe$;
  var CalculatorLexer = $module$antlt_kotlin_demo_js_legacy.antlrtest.CalculatorLexer;
  var CommonTokenStream = $module$antlr_kotlin_antlr_kotlin_runtime_js_legacy.org.antlr.v4.kotlinruntime.CommonTokenStream;
  var CalculatorParser = $module$antlt_kotlin_demo_js_legacy.antlrtest.CalculatorParser;
  var CalculatorVistorImp = $module$antlt_kotlin_demo_js_legacy.antlrtest.CalculatorVistorImp;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var MathLexer = $module$antlt_kotlin_demo_js_legacy.antlr.MathLexer;
  var MathParser = $module$antlt_kotlin_demo_js_legacy.antlr.MathParser;
  var MathVisitorImpl = $module$antlt_kotlin_demo_js_legacy.antlr.impl.MathVisitorImpl;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  var base64 = $module$antlt_kotlin_demo_js_legacy.org.jetbrains.base64;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var toByte = Kotlin.toByte;
  function EvalTest() {
  }
  EvalTest.prototype.test = function () {
    var expr = '1+2';
    var input = ANTLRInputStream_init(expr);
    var lexer = new CalculatorLexer(input);
    var parser = new CalculatorParser(new CommonTokenStream(lexer));
    var root = parser.prog();
    var vistor = new CalculatorVistorImp();
    var res = vistor.visit_iaqcoz$(root);
    println('\u7ED3\u679C=============' + toString(res));
  };
  EvalTest.prototype.mathTest = function () {
    var expr = '1+2';
    var input = ANTLRInputStream_init(expr);
    var lexer = new MathLexer(input);
    var parser = new MathParser(new CommonTokenStream(lexer));
    var root = parser.prog();
    var vistor = new MathVisitorImpl();
    var operand = vistor.visit_iaqcoz$(root);
    println('\u7ED3\u679C=============' + toString(operand != null ? operand.intValue() : null));
  };
  EvalTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EvalTest',
    interfaces: []
  };
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Kotlin is awesome', 'S290bGluIGlzIGF3ZXNvbWU=');
  };
  Base64Test.prototype.testPaddedStrings = function () {
    this.checkEncodeToString_0('', '');
    this.checkEncodeToString_0('1', 'MQ==');
    this.checkEncodeToString_0('22', 'MjI=');
    this.checkEncodeToString_0('333', 'MzMz');
    this.checkEncodeToString_0('4444', 'NDQ0NA==');
  };
  Base64Test.prototype.testReturnString = function () {
    var encoder = base64.Base64Factory.createEncoder();
    var res = encoder.testCommonString_61zpoe$('123');
    assertEquals('123', res);
  };
  Base64Test.prototype.checkEncodeToString_0 = function (input, expectedOutput) {
    assertEquals(expectedOutput, base64.Base64Factory.createEncoder().encodeToString_fqrh44$(this.asciiToByteArray_0(input)));
  };
  Base64Test.prototype.asciiToByteArray_0 = function ($receiver) {
    var array = new Int8Array($receiver.length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = toByte($receiver.charCodeAt(i) | 0);
    }
    return array;
  };
  Base64Test.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base64Test',
    interfaces: []
  };
  var package$antlrtest = _.antlrtest || (_.antlrtest = {});
  package$antlrtest.EvalTest = EvalTest;
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$base64 = package$jetbrains.base64 || (package$jetbrains.base64 = {});
  package$base64.Base64Test = Base64Test;
  suite('antlrtest', false, function () {
    suite('EvalTest', false, function () {
      test('test', false, function () {
        return (new EvalTest()).test();
      });
      test('mathTest', false, function () {
        return (new EvalTest()).mathTest();
      });
    });
  });
  suite('org.jetbrains.base64', false, function () {
    suite('Base64Test', false, function () {
      test('testEncodeToString', false, function () {
        return (new Base64Test()).testEncodeToString();
      });
      test('testPaddedStrings', false, function () {
        return (new Base64Test()).testPaddedStrings();
      });
      test('testReturnString', false, function () {
        return (new Base64Test()).testReturnString();
      });
    });
  });
  Kotlin.defineModule('antlt-kotlin-demo-js-legacy-test', _);
  return _;
}));

//# sourceMappingURL=antlt-kotlin-demo-js-legacy-test.js.map
