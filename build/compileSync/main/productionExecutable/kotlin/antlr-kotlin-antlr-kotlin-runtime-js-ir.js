(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'antlr-kotlin-antlr-kotlin-runtime-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'antlr-kotlin-antlr-kotlin-runtime-js-ir'.");
    }
    root['antlr-kotlin-antlr-kotlin-runtime-js-ir'] = factory(typeof this['antlr-kotlin-antlr-kotlin-runtime-js-ir'] === 'undefined' ? {} : this['antlr-kotlin-antlr-kotlin-runtime-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var println = kotlin_kotlin.$_$.l2;
  var toString = kotlin_kotlin.$_$.e3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.r;
  var charSequenceLength = kotlin_kotlin.$_$.o2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var charSequenceGet = kotlin_kotlin.$_$.n2;
  var Char = kotlin_kotlin.$_$.j3;
  var toCharArray = kotlin_kotlin.$_$.e2;
  var contentEquals = kotlin_kotlin.$_$.p1;
  var contentEquals_0 = kotlin_kotlin.$_$.q1;
  var interfaceMeta = kotlin_kotlin.$_$.u2;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.t;
  var ensureNotNull = kotlin_kotlin.$_$.t3;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.e1;
  var copyOfRange = kotlin_kotlin.$_$.r1;
  var classMeta = kotlin_kotlin.$_$.p2;
  var NullPointerException_init_$Create$ = kotlin_kotlin.$_$.x;
  var THROW_CCE = kotlin_kotlin.$_$.s3;
  var isInterface = kotlin_kotlin.$_$.w2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.v;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.p;
  var Pair = kotlin_kotlin.$_$.q3;
  var replace$default = kotlin_kotlin.$_$.g;
  var captureStack = kotlin_kotlin.$_$.m2;
  var NotImplementedError_init_$Create$ = kotlin_kotlin.$_$.i;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z;
  var numberToChar = kotlin_kotlin.$_$.a3;
  var toString_0 = kotlin_kotlin.$_$.f1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var RuntimeException = kotlin_kotlin.$_$.r3;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y;
  var List = kotlin_kotlin.$_$.j1;
  var listOf = kotlin_kotlin.$_$.a2;
  var fillArrayVal = kotlin_kotlin.$_$.r2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var equals = kotlin_kotlin.$_$.q2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var NotImplementedError = kotlin_kotlin.$_$.p3;
  var hashCode = kotlin_kotlin.$_$.t2;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var Set = kotlin_kotlin.$_$.m1;
  var Enum = kotlin_kotlin.$_$.m3;
  var toLong = kotlin_kotlin.$_$.d3;
  var Long = kotlin_kotlin.$_$.o3;
  var copyOf = kotlin_kotlin.$_$.s1;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var Companion_getInstance = kotlin_kotlin.$_$.h1;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.s;
  var copyToArray = kotlin_kotlin.$_$.v1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.g1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.n;
  var copyOf_0 = kotlin_kotlin.$_$.t1;
  var get_lastIndex = kotlin_kotlin.$_$.z1;
  var filterNotNull = kotlin_kotlin.$_$.x1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var joinToString$default_0 = kotlin_kotlin.$_$.e;
  var copyOf_1 = kotlin_kotlin.$_$.u1;
  var emptyList = kotlin_kotlin.$_$.w1;
  var Comparable = kotlin_kotlin.$_$.k3;
  var toList = kotlin_kotlin.$_$.g2;
  var joinToString$default_1 = kotlin_kotlin.$_$.d;
  var Comparator = kotlin_kotlin.$_$.l3;
  var compareValues = kotlin_kotlin.$_$.k2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.l;
  var sortWith = kotlin_kotlin.$_$.d2;
  var StringBuilder = kotlin_kotlin.$_$.g3;
  var numberToInt = kotlin_kotlin.$_$.b3;
  var isArray = kotlin_kotlin.$_$.v2;
  var isObject = kotlin_kotlin.$_$.x2;
  var MutableSet = kotlin_kotlin.$_$.l1;
  var toString_1 = kotlin_kotlin.$_$.v3;
  var filterNotNull_0 = kotlin_kotlin.$_$.y1;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o1;
  var addAll = kotlin_kotlin.$_$.n1;
  var toMutableSet = kotlin_kotlin.$_$.i2;
  var toMutableList = kotlin_kotlin.$_$.h2;
  var MutableMap = kotlin_kotlin.$_$.k1;
  var toTypedArray = kotlin_kotlin.$_$.j2;
  var toIntArray = kotlin_kotlin.$_$.f2;
  var IndexOutOfBoundsException_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var joinToString$default_2 = kotlin_kotlin.$_$.c;
  var RuntimeException_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var minOrNull = kotlin_kotlin.$_$.c2;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.w;
  var maxOrNull = kotlin_kotlin.$_$.b2;
  var split$default = kotlin_kotlin.$_$.h;
  var toLong_0 = kotlin_kotlin.$_$.i3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var get_js = kotlin_kotlin.$_$.y2;
  var get_kotlin = kotlin_kotlin.$_$.z2;
  //endregion
  //region block: pre-declaration
  CommonTokenStream.prototype = Object.create(BufferedTokenStream.prototype);
  CommonTokenStream.prototype.constructor = CommonTokenStream;
  RecognitionException.prototype = Object.create(RuntimeException.prototype);
  RecognitionException.prototype.constructor = RecognitionException;
  FailedPredicateException.prototype = Object.create(RecognitionException.prototype);
  FailedPredicateException.prototype.constructor = FailedPredicateException;
  InputMismatchException.prototype = Object.create(RecognitionException.prototype);
  InputMismatchException.prototype.constructor = InputMismatchException;
  Lexer.prototype = Object.create(Recognizer.prototype);
  Lexer.prototype.constructor = Lexer;
  LexerNoViableAltException.prototype = Object.create(RecognitionException.prototype);
  LexerNoViableAltException.prototype.constructor = LexerNoViableAltException;
  NoViableAltException.prototype = Object.create(RecognitionException.prototype);
  NoViableAltException.prototype.constructor = NoViableAltException;
  Parser.prototype = Object.create(Recognizer.prototype);
  Parser.prototype.constructor = Parser;
  ParserRuleContext.prototype = Object.create(RuleContext.prototype);
  ParserRuleContext.prototype.constructor = ParserRuleContext;
  AbstractConfigHashSet.prototype = Object.create(Array2DHashSet.prototype);
  AbstractConfigHashSet.prototype.constructor = AbstractConfigHashSet;
  ConfigHashSet.prototype = Object.create(AbstractConfigHashSet.prototype);
  ConfigHashSet.prototype.constructor = ConfigHashSet;
  ConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  ConfigEqualityComparator.prototype.constructor = ConfigEqualityComparator;
  UnicodeDeserializingMode.prototype = Object.create(Enum.prototype);
  UnicodeDeserializingMode.prototype.constructor = UnicodeDeserializingMode;
  ATNType.prototype = Object.create(Enum.prototype);
  ATNType.prototype.constructor = ATNType;
  AbstractPredicateTransition.prototype = Object.create(Transition.prototype);
  AbstractPredicateTransition.prototype.constructor = AbstractPredicateTransition;
  ActionTransition.prototype = Object.create(Transition.prototype);
  ActionTransition.prototype.constructor = ActionTransition;
  ArrayPredictionContext.prototype = Object.create(PredictionContext.prototype);
  ArrayPredictionContext.prototype.constructor = ArrayPredictionContext;
  AtomTransition.prototype = Object.create(Transition.prototype);
  AtomTransition.prototype.constructor = AtomTransition;
  DecisionState.prototype = Object.create(ATNState.prototype);
  DecisionState.prototype.constructor = DecisionState;
  BlockStartState.prototype = Object.create(DecisionState.prototype);
  BlockStartState.prototype.constructor = BlockStartState;
  BasicBlockStartState.prototype = Object.create(BlockStartState.prototype);
  BasicBlockStartState.prototype.constructor = BasicBlockStartState;
  BasicState.prototype = Object.create(ATNState.prototype);
  BasicState.prototype.constructor = BasicState;
  BlockEndState.prototype = Object.create(ATNState.prototype);
  BlockEndState.prototype.constructor = BlockEndState;
  SingletonPredictionContext.prototype = Object.create(PredictionContext.prototype);
  SingletonPredictionContext.prototype.constructor = SingletonPredictionContext;
  EmptyPredictionContext.prototype = Object.create(SingletonPredictionContext.prototype);
  EmptyPredictionContext.prototype.constructor = EmptyPredictionContext;
  EpsilonTransition.prototype = Object.create(Transition.prototype);
  EpsilonTransition.prototype.constructor = EpsilonTransition;
  LexerATNConfig.prototype = Object.create(ATNConfig.prototype);
  LexerATNConfig.prototype.constructor = LexerATNConfig;
  LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  LexerATNSimulator.prototype.constructor = LexerATNSimulator;
  LexerActionType.prototype = Object.create(Enum.prototype);
  LexerActionType.prototype.constructor = LexerActionType;
  LoopEndState.prototype = Object.create(ATNState.prototype);
  LoopEndState.prototype.constructor = LoopEndState;
  SetTransition.prototype = Object.create(Transition.prototype);
  SetTransition.prototype.constructor = SetTransition;
  NotSetTransition.prototype = Object.create(SetTransition.prototype);
  NotSetTransition.prototype.constructor = NotSetTransition;
  LexerConfigHashSet.prototype = Object.create(AbstractConfigHashSet.prototype);
  LexerConfigHashSet.prototype.constructor = LexerConfigHashSet;
  OrderedATNConfigSet.prototype = Object.create(ATNConfigSet.prototype);
  OrderedATNConfigSet.prototype.constructor = OrderedATNConfigSet;
  ParserATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  ParserATNSimulator.prototype.constructor = ParserATNSimulator;
  PlusBlockStartState.prototype = Object.create(BlockStartState.prototype);
  PlusBlockStartState.prototype.constructor = PlusBlockStartState;
  PlusLoopbackState.prototype = Object.create(DecisionState.prototype);
  PlusLoopbackState.prototype.constructor = PlusLoopbackState;
  PrecedencePredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
  PrecedencePredicateTransition.prototype.constructor = PrecedencePredicateTransition;
  PredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
  PredicateTransition.prototype.constructor = PredicateTransition;
  AltAndContextMap.prototype = Object.create(FlexibleHashMap.prototype);
  AltAndContextMap.prototype.constructor = AltAndContextMap;
  AltAndContextConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  AltAndContextConfigEqualityComparator.prototype.constructor = AltAndContextConfigEqualityComparator;
  PredictionMode.prototype = Object.create(Enum.prototype);
  PredictionMode.prototype.constructor = PredictionMode;
  RangeTransition.prototype = Object.create(Transition.prototype);
  RangeTransition.prototype.constructor = RangeTransition;
  RuleStartState.prototype = Object.create(ATNState.prototype);
  RuleStartState.prototype.constructor = RuleStartState;
  RuleStopState.prototype = Object.create(ATNState.prototype);
  RuleStopState.prototype.constructor = RuleStopState;
  RuleTransition.prototype = Object.create(Transition.prototype);
  RuleTransition.prototype.constructor = RuleTransition;
  Predicate.prototype = Object.create(SemanticContext.prototype);
  Predicate.prototype.constructor = Predicate;
  PrecedencePredicate.prototype = Object.create(SemanticContext.prototype);
  PrecedencePredicate.prototype.constructor = PrecedencePredicate;
  Operator.prototype = Object.create(SemanticContext.prototype);
  Operator.prototype.constructor = Operator;
  AND.prototype = Object.create(Operator.prototype);
  AND.prototype.constructor = AND;
  OR.prototype = Object.create(Operator.prototype);
  OR.prototype.constructor = OR;
  StarBlockStartState.prototype = Object.create(BlockStartState.prototype);
  StarBlockStartState.prototype.constructor = StarBlockStartState;
  StarLoopEntryState.prototype = Object.create(DecisionState.prototype);
  StarLoopEntryState.prototype.constructor = StarLoopEntryState;
  StarLoopbackState.prototype = Object.create(ATNState.prototype);
  StarLoopbackState.prototype.constructor = StarLoopbackState;
  TokensStartState.prototype = Object.create(DecisionState.prototype);
  TokensStartState.prototype.constructor = TokensStartState;
  WildcardTransition.prototype = Object.create(Transition.prototype);
  WildcardTransition.prototype.constructor = WildcardTransition;
  LexerDFASerializer.prototype = Object.create(DFASerializer.prototype);
  LexerDFASerializer.prototype.constructor = LexerDFASerializer;
  IntegerStack.prototype = Object.create(IntegerList.prototype);
  IntegerStack.prototype.constructor = IntegerStack;
  ObjectEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  ObjectEqualityComparator.prototype.constructor = ObjectEqualityComparator;
  ErrorNodeImpl.prototype = Object.create(TerminalNodeImpl.prototype);
  ErrorNodeImpl.prototype.constructor = ErrorNodeImpl;
  Variant.prototype = Object.create(Enum.prototype);
  Variant.prototype.constructor = Variant;
  //endregion
  function Math_0() {
    Math_instance = this;
  }
  Math_0.prototype.rb = function (a, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.min' call
    tmp$ret$0 = Math.min(a, b);
    return tmp$ret$0;
  };
  Math_0.prototype.sb = function (a, b) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    tmp$ret$0 = Math.max(a, b);
    return tmp$ret$0;
  };
  Math_0.prototype.tb = function (d) {
    var tmp$ret$0;
    // Inline function 'kotlin.math.floor' call
    tmp$ret$0 = Math.floor(d);
    return tmp$ret$0;
  };
  Math_0.$metadata$ = objectMeta('Math');
  var Math_instance;
  function Math_getInstance() {
    if (Math_instance == null)
      new Math_0();
    return Math_instance;
  }
  function outMessage(message) {
    println(message);
  }
  function assert(condition) {
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!condition) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function asCharArray(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'kotlin.text.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.text.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(charSequenceLength(_this__u8e3s4));
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'com.strumenta.kotlinmultiplatform.asCharArray.<anonymous>' call
      tmp$ret$0 = item;
      tmp0_mapTo.a(new Char(tmp$ret$0));
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return toCharArray(tmp$ret$2);
  }
  function Arrays() {
    Arrays_instance = this;
  }
  Arrays.prototype.ub = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals(a, b) : false;
  };
  Arrays.prototype.vb = function (a, b) {
    return (a == null ? b == null : false) ? true : (!(a == null) ? !(b == null) : false) ? contentEquals_0(a, b) : false;
  };
  Arrays.$metadata$ = objectMeta('Arrays');
  var Arrays_instance;
  function Arrays_getInstance() {
    if (Arrays_instance == null)
      new Arrays();
    return Arrays_instance;
  }
  function TypeDeclarator() {
  }
  TypeDeclarator.$metadata$ = interfaceMeta('TypeDeclarator');
  function convertToString(_this__u8e3s4) {
    return joinToString$default(_this__u8e3s4, '', null, null, 0, null, null, 62, null);
  }
  function ANTLRErrorListener() {
  }
  ANTLRErrorListener.$metadata$ = interfaceMeta('ANTLRErrorListener');
  function ANTLRErrorStrategy() {
  }
  ANTLRErrorStrategy.$metadata$ = interfaceMeta('ANTLRErrorStrategy');
  function ANTLRInputStream_init_$Init$(input, $this) {
    ANTLRInputStream.call($this);
    $this.hc_1 = asCharArray(input);
    $this.ic_1 = input.length;
    return $this;
  }
  function ANTLRInputStream_init_$Create$(input) {
    return ANTLRInputStream_init_$Init$(input, Object.create(ANTLRInputStream.prototype));
  }
  function Companion() {
    Companion_instance = this;
    this.lc_1 = 1024;
    this.mc_1 = 1024;
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  ANTLRInputStream.prototype.nc = function () {
    if (this.jc_1 >= this.ic_1) {
      assert(this.oc(1) === Companion_getInstance_4().pc_1);
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    if (this.jc_1 < this.ic_1) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.jc_1;
      tmp0_this.jc_1 = tmp1 + 1 | 0;
    }
  };
  ANTLRInputStream.prototype.oc = function (i) {
    var i_0 = i;
    if (i_0 === 0) {
      return 0;
    }
    if (i_0 < 0) {
      var tmp0 = i_0;
      i_0 = tmp0 + 1 | 0;
      if (((this.jc_1 + i_0 | 0) - 1 | 0) < 0) {
        return Companion_getInstance_4().pc_1;
      }
    }
    var tmp;
    if (((this.jc_1 + i_0 | 0) - 1 | 0) >= this.ic_1) {
      tmp = Companion_getInstance_4().pc_1;
    } else {
      tmp = Char__toInt_impl_vasixd(ensureNotNull(new Char(ensureNotNull(this.hc_1)[(this.jc_1 + i_0 | 0) - 1 | 0])).i_1);
    }
    return tmp;
  };
  ANTLRInputStream.prototype.rc = function () {
    return this.jc_1;
  };
  ANTLRInputStream.prototype.sc = function () {
    return this.ic_1;
  };
  ANTLRInputStream.prototype.tc = function () {
    return -1;
  };
  ANTLRInputStream.prototype.uc = function (marker) {
  };
  ANTLRInputStream.prototype.vc = function (index) {
    var index_0 = index;
    if (index_0 <= this.jc_1) {
      this.jc_1 = index_0;
      return Unit_getInstance();
    }
    index_0 = Math_getInstance().rb(index_0, this.ic_1);
    while (this.jc_1 < index_0) {
      this.nc();
    }
  };
  ANTLRInputStream.prototype.wc = function (interval) {
    var start = interval.xc_1;
    var stop = interval.yc_1;
    if (stop >= this.ic_1)
      stop = this.ic_1 - 1 | 0;
    var count = (stop - start | 0) + 1 | 0;
    return start >= this.ic_1 ? '' : convertToString(copyOfRange(ensureNotNull(this.hc_1), start, start + count | 0));
  };
  function ANTLRInputStream() {
    Companion_getInstance_0();
    this.hc_1 = null;
    this.ic_1 = 0;
    this.jc_1 = 0;
    this.kc_1 = null;
  }
  ANTLRInputStream.$metadata$ = classMeta('ANTLRInputStream', [CharStream]);
  function BufferedTokenStream(tokenSource) {
    this.zc_1 = tokenSource;
    this.ad_1 = ArrayList_init_$Create$(100);
    this.bd_1 = -1;
    this.cd_1 = false;
    if (this.dd() == null) {
      throw NullPointerException_init_$Create$('tokenSource cannot be null');
    }
  }
  BufferedTokenStream.prototype.dd = function () {
    return this.zc_1;
  };
  BufferedTokenStream.prototype.rc = function () {
    return this.bd_1;
  };
  BufferedTokenStream.prototype.tc = function () {
    return 0;
  };
  BufferedTokenStream.prototype.uc = function (marker) {
  };
  BufferedTokenStream.prototype.vc = function (index) {
    this.ed();
    this.bd_1 = this.fd(index);
  };
  BufferedTokenStream.prototype.sc = function () {
    return this.ad_1.h();
  };
  BufferedTokenStream.prototype.nc = function () {
    var skipEofCheck;
    if (this.bd_1 >= 0) {
      if (this.cd_1) {
        skipEofCheck = this.bd_1 < (this.ad_1.h() - 1 | 0);
      } else {
        skipEofCheck = this.bd_1 < this.ad_1.h();
      }
    } else {
      skipEofCheck = false;
    }
    if (!skipEofCheck ? this.oc(1) === Companion_getInstance_4().pc_1 : false) {
      throw IllegalStateException_init_$Create$('cannot consume EOF');
    }
    if (this.gd(this.bd_1 + 1 | 0)) {
      this.bd_1 = this.fd(this.bd_1 + 1 | 0);
    }
  };
  BufferedTokenStream.prototype.gd = function (i) {
    assert(i >= 0);
    var n = (i - this.ad_1.h() | 0) + 1 | 0;
    if (n > 0) {
      var fetched = this.hd(n);
      return fetched >= n;
    }
    return true;
  };
  BufferedTokenStream.prototype.hd = function (n) {
    if (this.cd_1) {
      return 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.dd().id();
        if (isInterface(t, WritableToken)) {
          (isInterface(t, WritableToken) ? t : THROW_CCE()).jd(this.ad_1.h());
        }
        this.ad_1.a(t);
        if (t.kd() === Companion_getInstance_7().od_1) {
          this.cd_1 = true;
          return i + 1 | 0;
        }
      }
       while (inductionVariable < n);
    return n;
  };
  BufferedTokenStream.prototype.j = function (i) {
    if (i < 0 ? true : i >= this.ad_1.h()) {
      throw IndexOutOfBoundsException_init_$Create$('token index ' + i + ' out of range 0..' + (this.ad_1.h() - 1 | 0));
    }
    return this.ad_1.j(i);
  };
  BufferedTokenStream.prototype.oc = function (i) {
    return ensureNotNull(this.sd(i)).kd();
  };
  BufferedTokenStream.prototype.td = function (k) {
    return (this.bd_1 - k | 0) < 0 ? null : this.ad_1.j(this.bd_1 - k | 0);
  };
  BufferedTokenStream.prototype.sd = function (k) {
    this.ed();
    if (k === 0)
      return null;
    if (k < 0)
      return this.td(-k | 0);
    var i = (this.bd_1 + k | 0) - 1 | 0;
    this.gd(i);
    var tmp;
    if (i >= this.ad_1.h()) {
      tmp = this.ad_1.j(this.ad_1.h() - 1 | 0);
    } else {
      tmp = this.ad_1.j(i);
    }
    return tmp;
  };
  BufferedTokenStream.prototype.fd = function (i) {
    return i;
  };
  BufferedTokenStream.prototype.ed = function () {
    if (this.bd_1 === -1) {
      this.ud();
    }
  };
  BufferedTokenStream.prototype.ud = function () {
    this.gd(0);
    this.bd_1 = this.fd(0);
  };
  BufferedTokenStream.prototype.vd = function (i, channel) {
    var i_0 = i;
    this.gd(i_0);
    if (i_0 >= this.sc()) {
      return this.sc() - 1 | 0;
    }
    var token = this.ad_1.j(i_0);
    while (!(token.wd() === channel)) {
      if (token.kd() === Companion_getInstance_7().od_1) {
        return i_0;
      }
      var tmp0 = i_0;
      i_0 = tmp0 + 1 | 0;
      this.gd(i_0);
      token = this.ad_1.j(i_0);
    }
    return i_0;
  };
  BufferedTokenStream.prototype.xd = function (i, channel) {
    var i_0 = i;
    this.gd(i_0);
    if (i_0 >= this.sc()) {
      return this.sc() - 1 | 0;
    }
    while (i_0 >= 0) {
      var token = this.ad_1.j(i_0);
      if (token.kd() === Companion_getInstance_7().od_1 ? true : token.wd() === channel) {
        return i_0;
      }
      var tmp0 = i_0;
      i_0 = tmp0 - 1 | 0;
    }
    return i_0;
  };
  BufferedTokenStream.prototype.wc = function (interval) {
    var start = interval.xc_1;
    var stop = interval.yc_1;
    if (start < 0 ? true : stop < 0)
      return '';
    this.yd();
    if (stop >= this.ad_1.h())
      stop = this.ad_1.h() - 1 | 0;
    var buf = StringBuilder_init_$Create$();
    var inductionVariable = start;
    var last = stop;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var t = this.ad_1.j(i);
        if (t.kd() === Companion_getInstance_7().od_1)
          break $l$loop;
        buf.x9(t.zd());
      }
       while (!(i === last));
    return buf.toString();
  };
  BufferedTokenStream.prototype.yd = function () {
    this.ed();
    var blockSize = 1000;
    while (true) {
      var fetched = this.hd(blockSize);
      if (fetched < blockSize) {
        return Unit_getInstance();
      }
    }
  };
  BufferedTokenStream.$metadata$ = classMeta('BufferedTokenStream', [TokenStream]);
  function Companion_0() {
    Companion_instance_0 = this;
    this.ae_1 = Companion_getInstance_4().pc_1;
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function CharStream() {
  }
  CharStream.$metadata$ = interfaceMeta('CharStream', [IntStream]);
  function CommonToken_init_$Init$(source, type, channel, start, stop, $this) {
    CommonToken.call($this);
    $this.fe_1 = source;
    $this.ke(type);
    $this.le(channel);
    $this.me(start);
    $this.ne(stop);
    if (!(source.p3_1 == null)) {
      $this.pe(ensureNotNull(source.p3_1).oe());
      $this.re(ensureNotNull(source.p3_1).qe());
    }
    return $this;
  }
  function CommonToken_init_$Create$(source, type, channel, start, stop) {
    return CommonToken_init_$Init$(source, type, channel, start, stop, Object.create(CommonToken.prototype));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.se_1 = new Pair(null, null);
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  CommonToken.prototype.ke = function (_set____db54di) {
    this.be_1 = _set____db54di;
  };
  CommonToken.prototype.kd = function () {
    return this.be_1;
  };
  CommonToken.prototype.pe = function (_set____db54di) {
    this.ce_1 = _set____db54di;
  };
  CommonToken.prototype.oe = function () {
    return this.ce_1;
  };
  CommonToken.prototype.re = function (_set____db54di) {
    this.de_1 = _set____db54di;
  };
  CommonToken.prototype.qe = function () {
    return this.de_1;
  };
  CommonToken.prototype.le = function (_set____db54di) {
    this.ee_1 = _set____db54di;
  };
  CommonToken.prototype.wd = function () {
    return this.ee_1;
  };
  CommonToken.prototype.jd = function (_set____db54di) {
    this.ge_1 = _set____db54di;
  };
  CommonToken.prototype.te = function () {
    return this.ge_1;
  };
  CommonToken.prototype.me = function (_set____db54di) {
    this.he_1 = _set____db54di;
  };
  CommonToken.prototype.ue = function () {
    return this.he_1;
  };
  CommonToken.prototype.ne = function (_set____db54di) {
    this.ie_1 = _set____db54di;
  };
  CommonToken.prototype.ve = function () {
    return this.ie_1;
  };
  CommonToken.prototype.dd = function () {
    return this.fe_1.p3_1;
  };
  CommonToken.prototype.we = function () {
    return this.fe_1.q3_1;
  };
  CommonToken.prototype.xe = function (_set____db54di) {
    this.je_1 = _set____db54di;
  };
  CommonToken.prototype.zd = function () {
    if (!(this.je_1 == null)) {
      return this.je_1;
    }
    var tmp0_elvis_lhs = this.we();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var input = tmp;
    var n = input.sc();
    var tmp_0;
    if (this.ue() < n ? this.ve() < n : false) {
      tmp_0 = input.wc(Companion_getInstance_32().ff(this.ue(), this.ve()));
    } else {
      tmp_0 = '<EOF>';
    }
    return tmp_0;
  };
  CommonToken.prototype.toString = function () {
    return this.gf(null);
  };
  CommonToken.prototype.gf = function (r) {
    var channelStr = '';
    if (this.wd() > 0) {
      channelStr = ',channel=' + this.wd();
    }
    var txt = this.zd();
    if (!(txt == null)) {
      var tmp = txt;
      txt = replace$default(tmp, '\n', '\\n', false, 4, null);
      var tmp_0 = txt;
      txt = replace$default(tmp_0, '\r', '\\r', false, 4, null);
      var tmp_1 = txt;
      txt = replace$default(tmp_1, '\t', '\\t', false, 4, null);
    } else {
      txt = '<no text>';
    }
    var typeString = this.kd().toString();
    if (!(r == null)) {
      typeString = ensureNotNull(r).lf().mf(this.kd());
    }
    return '[@' + this.te() + ',' + this.ue() + ':' + this.ve() + "='" + txt + "',<" + typeString + '>' + channelStr + ',' + this.oe() + ':' + this.qe() + ']';
  };
  function CommonToken() {
    Companion_getInstance_2();
    this.be_1 = 0;
    this.ce_1 = 0;
    this.de_1 = -1;
    this.ee_1 = Companion_getInstance_7().pd_1;
    this.ge_1 = -1;
    this.he_1 = 0;
    this.ie_1 = 0;
    this.je_1 = null;
  }
  CommonToken.$metadata$ = classMeta('CommonToken', [WritableToken]);
  function CommonTokenFactory_init_$Init$(copyText, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      copyText = false;
    CommonTokenFactory.call($this, copyText);
    return $this;
  }
  function CommonTokenFactory_init_$Create$(copyText, $mask0, $marker) {
    return CommonTokenFactory_init_$Init$(copyText, $mask0, $marker, Object.create(CommonTokenFactory.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.nf_1 = CommonTokenFactory_init_$Create$(false, 1, null);
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function CommonTokenFactory(copyText) {
    Companion_getInstance_3();
    this.of_1 = copyText;
  }
  CommonTokenFactory.prototype.pf = function (source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken_init_$Create$(source, type, channel, start, stop);
    t.pe(line);
    t.re(charPositionInLine);
    if (!(text == null)) {
      t.xe(text);
    } else if (this.of_1 ? !(source.q3_1 == null) : false) {
      t.xe(ensureNotNull(source.q3_1).wc(Companion_getInstance_32().ff(start, stop)));
    }
    return t;
  };
  CommonTokenFactory.$metadata$ = classMeta('CommonTokenFactory', [TokenFactory]);
  function CommonTokenStream(tokenSource) {
    BufferedTokenStream.call(this, tokenSource);
    this.uf_1 = Companion_getInstance_7().pd_1;
  }
  CommonTokenStream.prototype.fd = function (i) {
    return this.vd(i, this.uf_1);
  };
  CommonTokenStream.prototype.td = function (k) {
    if (k === 0 ? true : (this.bd_1 - k | 0) < 0)
      return null;
    var i = this.bd_1;
    var n = 1;
    while (n <= k ? i > 0 : false) {
      i = this.xd(i - 1 | 0, this.uf_1);
      var tmp0 = n;
      n = tmp0 + 1 | 0;
    }
    return i < 0 ? null : this.ad_1.j(i);
  };
  CommonTokenStream.prototype.sd = function (k) {
    this.ed();
    if (k === 0)
      return null;
    if (k < 0)
      return this.td(-k | 0);
    var i = this.bd_1;
    var n = 1;
    while (n < k) {
      if (this.gd(i + 1 | 0)) {
        i = this.vd(i + 1 | 0, this.uf_1);
      }
      var tmp0 = n;
      n = tmp0 + 1 | 0;
    }
    return this.ad_1.j(i);
  };
  CommonTokenStream.$metadata$ = classMeta('CommonTokenStream', undefined, undefined, undefined, undefined, BufferedTokenStream.prototype);
  function DefaultErrorStrategy() {
    this.vf_1 = false;
    this.wf_1 = -1;
    this.xf_1 = null;
    this.yf_1 = null;
    this.zf_1 = 0;
  }
  DefaultErrorStrategy.prototype.ag = function (recognizer) {
    this.vf_1 = true;
  };
  DefaultErrorStrategy.prototype.ec = function (recognizer) {
    return this.vf_1;
  };
  DefaultErrorStrategy.prototype.bg = function (recognizer) {
    this.vf_1 = false;
    this.xf_1 = null;
    this.wf_1 = -1;
  };
  DefaultErrorStrategy.prototype.fc = function (recognizer) {
    this.bg(recognizer);
  };
  DefaultErrorStrategy.prototype.gc = function (recognizer, e) {
    if (this.ec(recognizer)) {
      return Unit_getInstance();
    }
    this.ag(recognizer);
    if (e instanceof NoViableAltException) {
      this.xg(recognizer, e instanceof NoViableAltException ? e : THROW_CCE());
    } else {
      if (e instanceof InputMismatchException) {
        this.wg(recognizer, e instanceof InputMismatchException ? e : THROW_CCE());
      } else {
        if (e instanceof FailedPredicateException) {
          this.vg(recognizer, e instanceof FailedPredicateException ? e : THROW_CCE());
        } else {
          errMessage('unknown recognition error type: ' + e);
          recognizer.ug(ensureNotNull(e.gg_1), ensureNotNull(e.t3()), e);
        }
      }
    }
  };
  DefaultErrorStrategy.prototype.cc = function (recognizer, e) {
    if ((this.wf_1 === ensureNotNull(recognizer.ch()).rc() ? !(this.xf_1 == null) : false) ? ensureNotNull(this.xf_1).bh(recognizer.jf_1) : false) {
      recognizer.yg();
    }
    this.wf_1 = ensureNotNull(recognizer.ch()).rc();
    if (this.xf_1 == null)
      this.xf_1 = IntervalSet_init_$Create$_0(new Int32Array([]));
    ensureNotNull(this.xf_1).dh(recognizer.jf_1);
    var followSet = this.eh(recognizer);
    this.fh(recognizer, followSet);
  };
  DefaultErrorStrategy.prototype.dc = function (recognizer) {
    var s = ensureNotNull(recognizer.if_1).qh_1.ih_1.j(recognizer.jf_1);
    if (this.ec(recognizer)) {
      return Unit_getInstance();
    }
    var tokens = recognizer.ch();
    var la = ensureNotNull(tokens).oc(1);
    var nextTokens = recognizer.sh().th(ensureNotNull(s));
    if (ensureNotNull(nextTokens).bh(la)) {
      this.yf_1 = null;
      var tmp = this;
      Companion_getInstance_15();
      tmp.zf_1 = -1;
      return Unit_getInstance();
    }
    if (nextTokens.bh(Companion_getInstance_7().md_1)) {
      if (this.yf_1 == null) {
        this.yf_1 = recognizer.pg_1;
        this.zf_1 = recognizer.jf_1;
      }
      return Unit_getInstance();
    }
    var tmp0_subject = s.ai();
    if (((tmp0_subject === Companion_getInstance_15().ii_1 ? true : tmp0_subject === Companion_getInstance_15().ki_1) ? true : tmp0_subject === Companion_getInstance_15().ji_1) ? true : tmp0_subject === Companion_getInstance_15().pi_1) {
      if (!(this.ui(recognizer) == null)) {
        return Unit_getInstance();
      }
      throw InputMismatchException_init_$Create$(recognizer);
    } else if (tmp0_subject === Companion_getInstance_15().qi_1 ? true : tmp0_subject === Companion_getInstance_15().oi_1) {
      this.bi(recognizer);
      var expecting = recognizer.ci();
      var whatFollowsLoopIterationOrRule = expecting.di(this.eh(recognizer));
      this.fh(recognizer, whatFollowsLoopIterationOrRule);
    } else {
    }
  };
  DefaultErrorStrategy.prototype.xg = function (recognizer, e) {
    var tokens = recognizer.ch();
    var input;
    if (!(tokens == null)) {
      if (ensureNotNull(e.bj_1).kd() === Companion_getInstance_7().od_1)
        input = '<EOF>';
      else
        input = ensureNotNull(e.bj_1.zd());
    } else {
      input = '<unknown input>';
    }
    var msg = 'no viable alternative at input ' + this.dj(input);
    recognizer.ug(ensureNotNull(e.gg_1), msg, e);
  };
  DefaultErrorStrategy.prototype.wg = function (recognizer, e) {
    var msg = 'mismatched input ' + this.ej(e.gg_1) + ' expecting ' + ensureNotNull(e.ci()).fj(recognizer.lf());
    recognizer.ug(ensureNotNull(e.gg_1), msg, e);
  };
  DefaultErrorStrategy.prototype.vg = function (recognizer, e) {
    var ruleName = ensureNotNull(recognizer.gj())[ensureNotNull(recognizer.pg_1).kj()];
    var msg = 'rule ' + ruleName + ' ' + e.t3();
    recognizer.ug(ensureNotNull(e.gg_1), msg, e);
  };
  DefaultErrorStrategy.prototype.bi = function (recognizer) {
    if (this.ec(recognizer)) {
      return Unit_getInstance();
    }
    this.ag(recognizer);
    var t = recognizer.lj();
    var tokenName = this.ej(t);
    var expecting = this.mj(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.fj(recognizer.lf());
    recognizer.ug(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.nj = function (recognizer) {
    if (this.ec(recognizer)) {
      return Unit_getInstance();
    }
    this.ag(recognizer);
    var t = recognizer.lj();
    var expecting = this.mj(recognizer);
    var msg = 'missing ' + expecting.fj(recognizer.lf()) + ' at ' + this.ej(t);
    recognizer.ug(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.bc = function (recognizer) {
    var matchedSymbol = this.ui(recognizer);
    if (!(matchedSymbol == null)) {
      recognizer.yg();
      return matchedSymbol;
    }
    if (this.pj(recognizer)) {
      return this.oj(recognizer);
    }
    var tmp;
    if (this.yf_1 == null) {
      tmp = InputMismatchException_init_$Create$(recognizer);
    } else {
      tmp = InputMismatchException_init_$Create$_0(recognizer, this.zf_1, ensureNotNull(this.yf_1));
    }
    var e = tmp;
    throw e;
  };
  DefaultErrorStrategy.prototype.pj = function (recognizer) {
    var currentSymbolType = ensureNotNull(recognizer.ch()).oc(1);
    var currentState = ensureNotNull(recognizer.if_1).qh_1.ih_1.j(recognizer.jf_1);
    var next = ensureNotNull(currentState).rj(0).qj_1;
    var atn = ensureNotNull(recognizer.if_1).qh_1;
    var expectingAtLL2 = atn.sj(ensureNotNull(next), recognizer.pg_1);
    if (expectingAtLL2.bh(currentSymbolType)) {
      this.nj(recognizer);
      return true;
    }
    return false;
  };
  DefaultErrorStrategy.prototype.ui = function (recognizer) {
    var nextTokenType = ensureNotNull(recognizer.ch()).oc(2);
    var expecting = this.mj(recognizer);
    if (expecting.bh(nextTokenType)) {
      this.bi(recognizer);
      recognizer.yg();
      var matchedSymbol = recognizer.lj();
      this.fc(recognizer);
      return matchedSymbol;
    }
    return null;
  };
  DefaultErrorStrategy.prototype.oj = function (recognizer) {
    var currentSymbol = recognizer.lj();
    var expecting = this.mj(recognizer);
    var expectedTokenType = Companion_getInstance_7().ld_1;
    if (!expecting.uj()) {
      expectedTokenType = expecting.tj();
    }
    var tokenText;
    if (expectedTokenType === Companion_getInstance_7().od_1)
      tokenText = '<missing EOF>';
    else
      tokenText = '<missing ' + recognizer.lf().mf(expectedTokenType) + '>';
    var current = currentSymbol;
    var tmp = recognizer.ch();
    var lookback = ((!(tmp == null) ? isInterface(tmp, TokenStream) : false) ? tmp : THROW_CCE()).sd(-1);
    if (ensureNotNull(current).kd() === Companion_getInstance_7().od_1 ? !(lookback == null) : false) {
      current = lookback;
    }
    return recognizer.vj().pf(new Pair(current.dd(), ensureNotNull(current.dd()).ch()), expectedTokenType, tokenText, Companion_getInstance_7().pd_1, -1, -1, current.oe(), current.qe());
  };
  DefaultErrorStrategy.prototype.mj = function (recognizer) {
    return recognizer.ci();
  };
  DefaultErrorStrategy.prototype.ej = function (t) {
    if (t == null)
      return '<no token>';
    var s = this.wj(t);
    if (s == null) {
      if (this.xj(t) === Companion_getInstance_7().od_1) {
        s = '<EOF>';
      } else {
        s = '<' + this.xj(t) + '>';
      }
    }
    return this.dj(s);
  };
  DefaultErrorStrategy.prototype.wj = function (symbol) {
    return ensureNotNull(symbol.zd());
  };
  DefaultErrorStrategy.prototype.xj = function (symbol) {
    return symbol.kd();
  };
  DefaultErrorStrategy.prototype.dj = function (s) {
    var s_0 = s;
    var tmp = s_0;
    s_0 = replace$default(tmp, '\n', '\\n', false, 4, null);
    var tmp_0 = s_0;
    s_0 = replace$default(tmp_0, '\r', '\\r', false, 4, null);
    var tmp_1 = s_0;
    s_0 = replace$default(tmp_1, '\t', '\\t', false, 4, null);
    return "'" + s_0 + "'";
  };
  DefaultErrorStrategy.prototype.eh = function (recognizer) {
    var atn = ensureNotNull(recognizer.if_1).qh_1;
    var ctx = recognizer.pg_1;
    var recoverSet = IntervalSet_init_$Create$_0(new Int32Array([]));
    while (!(ctx == null) ? ensureNotNull(ctx).ij_1 >= 0 : false) {
      var invokingState = atn.ih_1.j(ensureNotNull(ctx).ij_1);
      var tmp = ensureNotNull(invokingState).rj(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      var follow = atn.th(rt.bk_1);
      recoverSet.ck(follow);
      ctx = ensureNotNull(ctx).dk();
    }
    recoverSet.ek(Companion_getInstance_7().md_1);
    return recoverSet;
  };
  DefaultErrorStrategy.prototype.fh = function (recognizer, set) {
    var ttype = ensureNotNull(recognizer.ch()).oc(1);
    while (!(ttype === Companion_getInstance_7().od_1) ? !set.bh(ttype) : false) {
      recognizer.yg();
      ttype = ensureNotNull(recognizer.ch()).oc(1);
    }
  };
  DefaultErrorStrategy.$metadata$ = classMeta('DefaultErrorStrategy', [ANTLRErrorStrategy]);
  function FailedPredicateException_init_$Init$(recognizer, predicate, message, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      predicate = null;
    if (!(($mask0 & 4) === 0))
      message = null;
    FailedPredicateException.call($this, recognizer, predicate, message);
    return $this;
  }
  function FailedPredicateException_init_$Create$(recognizer, predicate, message, $mask0, $marker) {
    var tmp = FailedPredicateException_init_$Init$(recognizer, predicate, message, $mask0, $marker, Object.create(FailedPredicateException.prototype));
    captureStack(tmp, FailedPredicateException_init_$Create$);
    return tmp;
  }
  function FailedPredicateException(recognizer, predicate, message) {
    RecognitionException.call(this, recognizer, ensureNotNull(recognizer.ch()), ensureNotNull(recognizer.pg_1), formatMessage(predicate, message));
    this.lk_1 = predicate;
    this.mk_1 = -1;
    this.nk_1 = -1;
    var s = ensureNotNull(recognizer.if_1).qh_1.ih_1.j(recognizer.jf_1);
    var tmp = ensureNotNull(s).rj(0);
    var trans = tmp instanceof AbstractPredicateTransition ? tmp : THROW_CCE();
    if (trans instanceof PredicateTransition) {
      var tmp_0 = this;
      tmp_0.mk_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE()).pk_1;
      var tmp_1 = this;
      tmp_1.nk_1 = (trans instanceof PredicateTransition ? trans : THROW_CCE()).qk_1;
    } else {
      this.mk_1 = 0;
      this.nk_1 = 0;
    }
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  }
  FailedPredicateException.$metadata$ = classMeta('FailedPredicateException', undefined, undefined, undefined, undefined, RecognitionException.prototype);
  function formatMessage(predicate, message) {
    var tmp0_elvis_lhs = message;
    return tmp0_elvis_lhs == null ? 'failed predicate: {' + predicate + '}?' : tmp0_elvis_lhs;
  }
  function InputMismatchException_init_$Init$(recognizer, $this) {
    var tmp = ensureNotNull(recognizer.ch());
    var tmp_0 = ensureNotNull(recognizer.pg_1);
    RecognitionException_init_$Init$(recognizer, tmp, tmp_0, null, 8, null, $this);
    InputMismatchException.call($this);
    $this.gg_1 = recognizer.lj();
    return $this;
  }
  function InputMismatchException_init_$Create$(recognizer) {
    var tmp = InputMismatchException_init_$Init$(recognizer, Object.create(InputMismatchException.prototype));
    captureStack(tmp, InputMismatchException_init_$Create$);
    return tmp;
  }
  function InputMismatchException_init_$Init$_0(recognizer, state, ctx, $this) {
    var tmp = ensureNotNull(recognizer.ch());
    RecognitionException_init_$Init$(recognizer, tmp, ctx, null, 8, null, $this);
    InputMismatchException.call($this);
    $this.hg_1 = state;
    $this.gg_1 = recognizer.lj();
    return $this;
  }
  function InputMismatchException_init_$Create$_0(recognizer, state, ctx) {
    var tmp = InputMismatchException_init_$Init$_0(recognizer, state, ctx, Object.create(InputMismatchException.prototype));
    captureStack(tmp, InputMismatchException_init_$Create$_0);
    return tmp;
  }
  function InputMismatchException() {
    captureStack(this, InputMismatchException);
  }
  InputMismatchException.$metadata$ = classMeta('InputMismatchException', undefined, undefined, undefined, undefined, RecognitionException.prototype);
  function Companion_3() {
    Companion_instance_3 = this;
    this.pc_1 = -1;
    this.qc_1 = '<unknown>';
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IntStream() {
  }
  IntStream.$metadata$ = interfaceMeta('IntStream');
  function Lexer_init_$Init$(input, $this) {
    Recognizer.call($this);
    Lexer.call($this);
    $this.kf_1 = input;
    $this.wk_1 = new Pair($this, input);
    return $this;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.il_1 = 0;
    this.jl_1 = -2;
    this.kl_1 = -3;
    this.ll_1 = Companion_getInstance_7().pd_1;
    this.ml_1 = Companion_getInstance_7().qd_1;
    this.nl_1 = 0;
    this.ol_1 = 1114111;
  }
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  Lexer.prototype.ch = function () {
    var tmp = this.kf_1;
    return (tmp == null ? true : isInterface(tmp, CharStream)) ? tmp : THROW_CCE();
  };
  Lexer.prototype.vj = function () {
    return this.xk_1;
  };
  Lexer.prototype.oe = function () {
    return ensureNotNull(this.if_1).ul_1;
  };
  Lexer.prototype.qe = function () {
    return ensureNotNull(this.if_1).vl_1;
  };
  Lexer.prototype.yl = function () {
    return ensureNotNull(this.kf_1).rc();
  };
  Lexer.prototype.id = function () {
    if (this.kf_1 == null) {
      throw IllegalStateException_init_$Create$('nextToken requires a non-null input stream.');
    }
    var tokenStartMarker = ensureNotNull(this.kf_1).tc();
    try {
      outer: while (true) {
        if (this.cl_1) {
          this.zl();
          return ensureNotNull(this.yk_1);
        }
        this.yk_1 = null;
        this.dl_1 = Companion_getInstance_7().pd_1;
        this.zk_1 = ensureNotNull(this.kf_1).rc();
        this.bl_1 = ensureNotNull(this.if_1).vl_1;
        this.al_1 = ensureNotNull(this.if_1).ul_1;
        this.hl_1 = null;
        do {
          this.el_1 = Companion_getInstance_7().ld_1;
          var ttype;
          try {
            ttype = ensureNotNull(this.if_1).am(ensureNotNull(this.ch()), this.gl_1);
          } catch ($p) {
            if ($p instanceof LexerNoViableAltException) {
              this.bm($p);
              this.cm($p);
              ttype = Companion_getInstance_5().kl_1;
            } else {
              throw $p;
            }
          }
          if (ensureNotNull(this.kf_1).oc(1) === Companion_getInstance_4().pc_1) {
            this.cl_1 = true;
          }
          if (this.el_1 === Companion_getInstance_7().ld_1)
            this.el_1 = ttype;
          if (this.el_1 === Companion_getInstance_5().kl_1) {
            continue outer;
          }
        }
         while (this.el_1 === Companion_getInstance_5().jl_1);
        if (this.yk_1 == null) {
          this.dm();
        }
        return ensureNotNull(this.yk_1);
      }
    }finally {
      ensureNotNull(this.kf_1).uc(tokenStartMarker);
    }
  };
  Lexer.prototype.em = function () {
    this.el_1 = Companion_getInstance_5().kl_1;
  };
  Lexer.prototype.fm = function () {
    this.el_1 = Companion_getInstance_5().jl_1;
  };
  Lexer.prototype.gm = function (m) {
    this.gl_1 = m;
  };
  Lexer.prototype.hm = function (m) {
    if (Companion_getInstance_17().im_1) {
      println('pushMode ' + m);
    }
    this.fl_1.om(this.gl_1);
    this.gm(m);
  };
  Lexer.prototype.pm = function () {
    if (this.fl_1.sm())
      throw RuntimeException_init_$Create$();
    if (Companion_getInstance_17().im_1) {
      outMessage('popMode back to ' + this.fl_1.tm());
    }
    this.gm(this.fl_1.um());
    return this.gl_1;
  };
  Lexer.prototype.vm = function (token) {
    this.yk_1 = token;
  };
  Lexer.prototype.dm = function () {
    var t = this.vj().pf(ensureNotNull(this.wk_1), this.el_1, this.hl_1, this.dl_1, this.zk_1, this.yl() - 1 | 0, this.al_1, this.bl_1);
    this.vm(t);
    return t;
  };
  Lexer.prototype.zl = function () {
    var cpos = this.qe();
    var line = this.oe();
    var eof = this.vj().pf(ensureNotNull(this.wk_1), Companion_getInstance_7().od_1, null, Companion_getInstance_7().pd_1, ensureNotNull(this.kf_1).rc(), ensureNotNull(this.kf_1).rc() - 1 | 0, line, cpos);
    this.vm(eof);
    return eof;
  };
  Lexer.prototype.cm = function (e) {
    if (!(ensureNotNull(this.kf_1).oc(1) === Companion_getInstance_4().pc_1)) {
      ensureNotNull(this.if_1).wm(ensureNotNull(this.ch()));
    }
  };
  Lexer.prototype.bm = function (e) {
    var text = ensureNotNull(this.ch()).wc(Companion_getInstance_32().ff(this.zk_1, ensureNotNull(this.kf_1).rc()));
    var msg = "token recognition error at: '" + this.xm(text) + "'";
    var listener = this.ym();
    listener.xb(this, null, this.al_1, this.bl_1, msg, e);
  };
  Lexer.prototype.xm = function (s) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      buf.x9(this.zm(Char__toInt_impl_vasixd(c)));
    }
    return buf.toString();
  };
  Lexer.prototype.zm = function (c) {
    var s = toString_0(numberToChar(c));
    var tmp0_subject = c;
    if (tmp0_subject === Companion_getInstance_7().od_1)
      s = '<EOF>';
    else if (tmp0_subject === 10)
      s = '\\n';
    else if (tmp0_subject === 9)
      s = '\\t';
    else if (tmp0_subject === 13)
      s = '\\r';
    return s;
  };
  function Lexer() {
    Companion_getInstance_5();
    this.wk_1 = null;
    this.xk_1 = Companion_getInstance_3().nf_1;
    this.yk_1 = null;
    this.zk_1 = -1;
    this.al_1 = 0;
    this.bl_1 = 0;
    this.cl_1 = false;
    this.dl_1 = 0;
    this.el_1 = 0;
    this.fl_1 = IntegerStack_init_$Create$();
    this.gl_1 = Companion_getInstance_5().il_1;
    this.hl_1 = null;
  }
  Lexer.$metadata$ = classMeta('Lexer', [TokenSource], undefined, undefined, undefined, Recognizer.prototype);
  function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
    RecognitionException_init_$Init$(lexer, input, null, null, 8, null, this);
    this.kn_1 = startIndex;
    this.ln_1 = deadEndConfigs;
    captureStack(this, LexerNoViableAltException);
  }
  LexerNoViableAltException.prototype.we = function () {
    var tmp = RecognitionException.prototype.we.call(this);
    return isInterface(tmp, CharStream) ? tmp : THROW_CCE();
  };
  LexerNoViableAltException.prototype.toString = function () {
    var symbol = '';
    if (this.kn_1 >= 0 ? this.kn_1 < this.we().sc() : false) {
      symbol = this.we().wc(Companion_getInstance_32().ff(this.kn_1, this.kn_1));
      symbol = Utils_getInstance().mn(symbol, false);
    }
    return "LexerNoViableAltException('" + symbol + "')";
  };
  LexerNoViableAltException.$metadata$ = classMeta('LexerNoViableAltException', undefined, undefined, undefined, undefined, RecognitionException.prototype);
  function NoViableAltException_init_$Init$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp = recognizer.ch();
      input = (tmp == null ? true : isInterface(tmp, TokenStream)) ? tmp : THROW_CCE();
    }
    if (!(($mask0 & 4) === 0))
      startToken = recognizer.lj();
    if (!(($mask0 & 8) === 0))
      offendingToken = recognizer.lj();
    if (!(($mask0 & 16) === 0))
      deadEndConfigs = null;
    if (!(($mask0 & 32) === 0))
      ctx = recognizer.pg_1;
    NoViableAltException.call($this, recognizer, input, startToken, offendingToken, deadEndConfigs, ctx);
    return $this;
  }
  function NoViableAltException_init_$Create$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker) {
    var tmp = NoViableAltException_init_$Init$(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx, $mask0, $marker, Object.create(NoViableAltException.prototype));
    captureStack(tmp, NoViableAltException_init_$Create$);
    return tmp;
  }
  function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    var tmp = ensureNotNull(input);
    var tmp_0 = ensureNotNull(ctx);
    RecognitionException_init_$Init$(recognizer, tmp, tmp_0, null, 8, null, this);
    this.bj_1 = startToken;
    this.cj_1 = deadEndConfigs;
    this.gg_1 = offendingToken;
    captureStack(this, NoViableAltException);
  }
  NoViableAltException.$metadata$ = classMeta('NoViableAltException', undefined, undefined, undefined, undefined, RecognitionException.prototype);
  function Parser(input) {
    Recognizer.call(this);
    this.mg_1 = new DefaultErrorStrategy();
    this.ng_1 = input;
    this.og_1 = IntegerStack_init_$Create$();
    this.pg_1 = null;
    this.qg_1 = true;
    this.rg_1 = ArrayList_init_$Create$_0();
    this.sg_1 = 0;
    this.tg_1 = false;
    this.nn(input);
  }
  Parser.prototype.nn = function (newValue) {
    this.kf_1 = newValue;
  };
  Parser.prototype.ch = function () {
    return this.kf_1;
  };
  Parser.prototype.vj = function () {
    return ensureNotNull(ensureNotNull(this.ng_1).dd()).vj();
  };
  Parser.prototype.on = function () {
    return this.ng_1;
  };
  Parser.prototype.lj = function () {
    return ensureNotNull(this.ng_1).sd(1);
  };
  Parser.prototype.pn = function () {
    var tmp;
    if (this.og_1.sm()) {
      tmp = -1;
    } else {
      tmp = this.og_1.tm();
    }
    return tmp;
  };
  Parser.prototype.ci = function () {
    return this.sh().qn(this.jf_1, this.pg_1);
  };
  Parser.prototype.rn = function () {
    return this.sn(this.pg_1);
  };
  Parser.prototype.tn = function (ttype) {
    var t = this.lj();
    if (ensureNotNull(t).kd() === ttype) {
      if (ttype === Companion_getInstance_7().od_1) {
        this.tg_1 = true;
      }
      this.mg_1.fc(this);
      this.yg();
    } else {
      t = this.mg_1.bc(this);
      if (this.qg_1 ? t.te() === -1 : false) {
        ensureNotNull(this.pg_1).co(this.un(this.pg_1, t));
      }
    }
    return t;
  };
  Parser.prototype.do = function () {
    var tmp0_iterator = this.rg_1.e();
    while (tmp0_iterator.f()) {
      var listener = tmp0_iterator.g();
      listener.eo(ensureNotNull(this.pg_1));
      ensureNotNull(this.pg_1).fo(listener);
    }
  };
  Parser.prototype.go = function () {
    var inductionVariable = this.rg_1.h() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var listener = this.rg_1.j(i);
        ensureNotNull(this.pg_1).ho(listener);
        listener.io(ensureNotNull(this.pg_1));
      }
       while (0 <= inductionVariable);
  };
  Parser.prototype.ug = function (offendingToken, msg, e) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.sg_1;
    tmp0_this.sg_1 = tmp1 + 1 | 0;
    var line = -1;
    var charPositionInLine = -1;
    line = offendingToken.oe();
    charPositionInLine = offendingToken.qe();
    var listener = this.ym();
    listener.xb(this, offendingToken, line, charPositionInLine, msg, e);
  };
  Parser.prototype.yg = function () {
    var o = this.lj();
    // Inline function 'kotlin.require' call
    var tmp0_require = !(o == null);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'org.antlr.v4.kotlinruntime.Parser.consume.<anonymous>' call
      tmp$ret$0 = 'current token must not be null when consuming';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (!(ensureNotNull(o).kd() === Companion_getInstance_6().jo_1)) {
      ensureNotNull(this.kf_1).nc();
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.isNotEmpty' call
    var tmp1_isNotEmpty = this.rg_1;
    tmp$ret$1 = !tmp1_isNotEmpty.d();
    var hasListener = tmp$ret$1;
    if (this.qg_1 ? true : hasListener) {
      if (this.mg_1.ec(this)) {
        var node = ensureNotNull(this.pg_1).co(this.un(this.pg_1, o));
        var tmp0_iterator = this.rg_1.e();
        while (tmp0_iterator.f()) {
          var listener = tmp0_iterator.g();
          listener.po(node);
        }
      } else {
        var node_0 = ensureNotNull(this.pg_1).no(this.mo(this.pg_1, o));
        var tmp1_iterator = this.rg_1.e();
        while (tmp1_iterator.f()) {
          var listener_0 = tmp1_iterator.g();
          listener_0.oo(node_0);
        }
      }
    }
    return o;
  };
  Parser.prototype.mo = function (parent, t) {
    return new TerminalNodeImpl(t);
  };
  Parser.prototype.un = function (parent, t) {
    return new ErrorNodeImpl(t);
  };
  Parser.prototype.qo = function () {
    var tmp = ensureNotNull(this.pg_1).dk();
    var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
    if (!(parent == null)) {
      parent.ro(ensureNotNull(this.pg_1));
    }
  };
  Parser.prototype.so = function (localctx, state, ruleIndex) {
    this.jf_1 = state;
    this.pg_1 = localctx;
    ensureNotNull(this.pg_1).zn_1 = ensureNotNull(this.ng_1).sd(1);
    if (this.qg_1) {
      this.qo();
    }
    this.do();
  };
  Parser.prototype.to = function () {
    if (this.tg_1) {
      ensureNotNull(this.pg_1).ao_1 = ensureNotNull(this.ng_1).sd(1);
    } else {
      ensureNotNull(this.pg_1).ao_1 = ensureNotNull(this.ng_1).sd(-1);
    }
    this.go();
    this.jf_1 = ensureNotNull(this.pg_1).ij_1;
    var tmp = this;
    var tmp_0 = ensureNotNull(this.pg_1).dk();
    tmp.pg_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
  };
  Parser.prototype.uo = function (localctx, altNum) {
    localctx.vo(altNum);
    if (this.qg_1 ? !(this.pg_1 === localctx) : false) {
      var tmp = ensureNotNull(this.pg_1).dk();
      var parent = (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
      if (!(parent == null)) {
        parent.wo();
        parent.ro(localctx);
      }
    }
    this.pg_1 = localctx;
  };
  Parser.prototype.xo = function (localctx, state, ruleIndex, precedence) {
    this.jf_1 = state;
    this.og_1.om(precedence);
    this.pg_1 = localctx;
    ensureNotNull(this.pg_1).zn_1 = ensureNotNull(this.ng_1).sd(1);
    this.do();
  };
  Parser.prototype.yo = function (localctx, state, ruleIndex) {
    var previous = this.pg_1;
    ensureNotNull(previous).zo(localctx);
    ensureNotNull(previous).ij_1 = state;
    ensureNotNull(previous).ao_1 = ensureNotNull(this.ng_1).sd(-1);
    this.pg_1 = localctx;
    ensureNotNull(this.pg_1).zn_1 = ensureNotNull(previous).zn_1;
    if (this.qg_1) {
      ensureNotNull(this.pg_1).ro(previous);
    }
    this.do();
  };
  Parser.prototype.ap = function (_parentctx) {
    this.og_1.um();
    ensureNotNull(this.pg_1).ao_1 = ensureNotNull(this.ng_1).sd(-1);
    var retctx = this.pg_1;
    while (!(this.pg_1 === _parentctx)) {
      this.go();
      var tmp = this;
      var tmp_0 = ensureNotNull(this.pg_1).dk();
      tmp.pg_1 = (tmp_0 == null ? true : tmp_0 instanceof ParserRuleContext) ? tmp_0 : THROW_CCE();
    }
    ensureNotNull(retctx).zo(_parentctx);
    if (this.qg_1 ? !(_parentctx == null) : false) {
      _parentctx.ro(retctx);
    }
  };
  Parser.prototype.cn = function (localctx, precedence) {
    return precedence >= this.og_1.tm();
  };
  Parser.prototype.sn = function (p) {
    var p_0 = p;
    var ruleNames = this.gj();
    var stack = ArrayList_init_$Create$_0();
    while (!(p_0 == null)) {
      var ruleIndex = ensureNotNull(p_0).kj();
      if (ruleIndex < 0) {
        stack.a('n/a');
      } else {
        stack.a(ensureNotNull(ruleNames)[ruleIndex]);
      }
      p_0 = ensureNotNull(p_0).dk();
    }
    return stack;
  };
  Parser.$metadata$ = classMeta('Parser', undefined, undefined, undefined, undefined, Recognizer.prototype);
  function ParserRuleContext_init_$Init$($this) {
    RuleContext_init_$Init$($this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_$Create$() {
    return ParserRuleContext_init_$Init$(Object.create(ParserRuleContext.prototype));
  }
  function ParserRuleContext_init_$Init$_0(parent, invokingStateNumber, $this) {
    RuleContext_init_$Init$_0(parent, invokingStateNumber, $this);
    ParserRuleContext.call($this);
    return $this;
  }
  ParserRuleContext.prototype.zo = function (value) {
    this.hj_1 = value;
  };
  ParserRuleContext.prototype.bp = function () {
    return !(this.yn_1 == null) ? ensureNotNull(this.yn_1).h() : 0;
  };
  ParserRuleContext.prototype.cp = function (ctx) {
    this.hj_1 = ctx.hj_1;
    this.ij_1 = ctx.ij_1;
    this.zn_1 = ctx.zn_1;
    this.ao_1 = ctx.ao_1;
    if (!(ctx.yn_1 == null)) {
      this.yn_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator = ensureNotNull(ctx.yn_1).e();
      while (tmp0_iterator.f()) {
        var child = tmp0_iterator.g();
        if (isInterface(child, ErrorNode)) {
          this.no(isInterface(child, ErrorNode) ? child : THROW_CCE());
        }
      }
    }
  };
  ParserRuleContext.prototype.fo = function (listener) {
  };
  ParserRuleContext.prototype.ho = function (listener) {
  };
  ParserRuleContext.prototype.dp = function (t) {
    if (this.yn_1 == null)
      this.yn_1 = ArrayList_init_$Create$_0();
    ensureNotNull(this.yn_1).a(t);
    return t;
  };
  ParserRuleContext.prototype.ro = function (ruleInvocation) {
    return this.dp(ruleInvocation);
  };
  ParserRuleContext.prototype.no = function (t) {
    t.ep(this);
    return this.dp(t);
  };
  ParserRuleContext.prototype.co = function (errorNode) {
    errorNode.ep(this);
    return this.dp(errorNode);
  };
  ParserRuleContext.prototype.wo = function () {
    if (!(this.yn_1 == null)) {
      ensureNotNull(this.yn_1).p4(ensureNotNull(this.yn_1).h() - 1 | 0);
    }
  };
  ParserRuleContext.prototype.fp = function (i) {
    return ((!(this.yn_1 == null) ? i >= 0 : false) ? i < ensureNotNull(this.yn_1).h() : false) ? ensureNotNull(this.yn_1).j(i) : null;
  };
  ParserRuleContext.prototype.gp = function (ctxType, i) {
    if ((this.yn_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.yn_1).h()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.yn_1).e();
    while (tmp0_iterator.f()) {
      var o = tmp0_iterator.g();
      if (isInstance(ctxType, o)) {
        var tmp1 = j;
        j = tmp1 + 1 | 0;
        if (j === i) {
          return isInterface(o, ParseTree) ? o : THROW_CCE();
        }
      }
    }
    return null;
  };
  ParserRuleContext.prototype.hp = function (ttype, i) {
    if ((this.yn_1 == null ? true : i < 0) ? true : i >= ensureNotNull(this.yn_1).h()) {
      return null;
    }
    var j = -1;
    var tmp0_iterator = ensureNotNull(this.yn_1).e();
    while (tmp0_iterator.f()) {
      var o = tmp0_iterator.g();
      if (isInterface(o, TerminalNode)) {
        var tnode = isInterface(o, TerminalNode) ? o : THROW_CCE();
        var symbol = tnode.ip();
        if (ensureNotNull(symbol).kd() === ttype) {
          var tmp1 = j;
          j = tmp1 + 1 | 0;
          if (j === i) {
            return tnode;
          }
        }
      }
    }
    return null;
  };
  ParserRuleContext.prototype.jp = function (ctxType, i) {
    var tmp = this.gp(ctxType, i);
    return (tmp == null ? true : tmp instanceof ParserRuleContext) ? tmp : THROW_CCE();
  };
  function ParserRuleContext() {
    this.yn_1 = null;
    this.zn_1 = null;
    this.ao_1 = null;
    this.bo_1 = null;
  }
  ParserRuleContext.$metadata$ = classMeta('ParserRuleContext', undefined, undefined, undefined, undefined, RuleContext.prototype);
  function ProxyErrorListener(delegates) {
    this.op_1 = delegates;
    if (this.op_1 == null) {
      throw NullPointerException_init_$Create$('delegates');
    }
  }
  ProxyErrorListener.prototype.xb = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var tmp0_iterator = ensureNotNull(this.op_1).e();
    while (tmp0_iterator.f()) {
      var listener = tmp0_iterator.g();
      listener.xb(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  };
  ProxyErrorListener.prototype.yb = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.op_1).e();
    while (tmp0_iterator.f()) {
      var listener = tmp0_iterator.g();
      listener.yb(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  ProxyErrorListener.prototype.zb = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var tmp0_iterator = ensureNotNull(this.op_1).e();
    while (tmp0_iterator.f()) {
      var listener = tmp0_iterator.g();
      listener.zb(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  ProxyErrorListener.prototype.ac = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var tmp0_iterator = ensureNotNull(this.op_1).e();
    while (tmp0_iterator.f()) {
      var listener = tmp0_iterator.g();
      listener.ac(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  ProxyErrorListener.$metadata$ = classMeta('ProxyErrorListener', [ANTLRErrorListener]);
  function RecognitionException_init_$Init$(recognizer, inputStream, ctx, message, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      message = null;
    RecognitionException.call($this, recognizer, inputStream, ctx, message);
    return $this;
  }
  function RecognitionException(recognizer, inputStream, ctx, message) {
    RuntimeException_init_$Init$(this);
    this.cg_1 = recognizer;
    this.dg_1 = inputStream;
    this.eg_1 = ctx;
    this.fg_1 = message;
    this.gg_1 = null;
    this.hg_1 = -1;
    if (!(this.cg_1 == null))
      this.hg_1 = ensureNotNull(this.cg_1).jf_1;
    captureStack(this, RecognitionException);
  }
  RecognitionException.prototype.we = function () {
    return this.dg_1;
  };
  RecognitionException.prototype.t3 = function () {
    return this.fg_1;
  };
  RecognitionException.prototype.ci = function () {
    var tmp;
    if (!(this.cg_1 == null)) {
      tmp = ensureNotNull(this.cg_1).sh().qn(this.hg_1, this.eg_1);
    } else {
      tmp = null;
    }
    return tmp;
  };
  RecognitionException.$metadata$ = classMeta('RecognitionException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  Object.defineProperty(RecognitionException.prototype, 'message', {
    configurable: true,
    get: function () {
      return this.t3();
    }
  });
  function Companion_5() {
    Companion_instance_5 = this;
    this.jo_1 = -1;
    this.ko_1 = WeakHashMap_init_$Create$();
    this.lo_1 = WeakHashMap_init_$Create$();
  }
  Companion_5.$metadata$ = objectMeta('Companion');
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Recognizer() {
    Companion_getInstance_6();
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$_0();
    tmp.hf_1 = tmp$ret$0;
    this.if_1 = null;
    this.jf_1 = -1;
    this.kf_1 = null;
  }
  Recognizer.prototype.an = function () {
    return this.hf_1;
  };
  Recognizer.prototype.ym = function () {
    return new ProxyErrorListener(this.an());
  };
  Recognizer.prototype.bn = function (_localctx, ruleIndex, actionIndex) {
    return true;
  };
  Recognizer.prototype.cn = function (localctx, precedence) {
    return true;
  };
  Recognizer.prototype.dn = function (_localctx, ruleIndex, actionIndex) {
  };
  Recognizer.$metadata$ = classMeta('Recognizer');
  function get_EMPTY_RULECTX() {
    init_properties_RuleContext_kt_ji02bl();
    return EMPTY_RULECTX;
  }
  var EMPTY_RULECTX;
  function RuleContext_init_$Init$($this) {
    RuleContext.call($this);
    $this.hj_1 = null;
    return $this;
  }
  function RuleContext_init_$Init$_0(parent, invokingState, $this) {
    RuleContext.call($this);
    $this.hj_1 = parent;
    $this.ij_1 = invokingState;
    return $this;
  }
  RuleContext.prototype.dk = function () {
    return this.hj_1;
  };
  RuleContext.prototype.sm = function () {
    return this.ij_1 === -1;
  };
  RuleContext.prototype.zd = function () {
    if (this.bp() === 0) {
      return '';
    }
    var builder = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = this.bp();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        builder.x9(ensureNotNull(this.fp(i)).zd());
      }
       while (inductionVariable < last);
    return builder.toString();
  };
  RuleContext.prototype.kj = function () {
    return this.jj_1;
  };
  RuleContext.prototype.vo = function (altNumber) {
  };
  RuleContext.prototype.bp = function () {
    return 0;
  };
  RuleContext.prototype.fp = function (i) {
    return null;
  };
  RuleContext.prototype.kp = function (visitor) {
    return ensureNotNull(visitor.pp(this));
  };
  RuleContext.prototype.toString = function () {
    var tmp = (null == null ? true : isInterface(null, List)) ? null : THROW_CCE();
    return this.np(tmp, (null == null ? true : null instanceof RuleContext) ? null : THROW_CCE());
  };
  RuleContext.prototype.lp = function (recog, stop) {
    var tmp0_safe_receiver = recog;
    var ruleNames = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj();
    var ruleNamesList = !(ruleNames == null) ? listOf(ruleNames.slice()) : null;
    return this.np(ruleNamesList, stop);
  };
  RuleContext.prototype.mp = function (recog, stop, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      stop = get_EMPTY_RULECTX();
    return this.lp(recog, stop);
  };
  RuleContext.prototype.np = function (ruleNames, stop) {
    var buf = StringBuilder_init_$Create$();
    var p = this;
    buf.x9('[');
    while (!(p == null) ? !(p === stop) : false) {
      if (ruleNames == null) {
        if (!p.sm()) {
          buf.v9(p.ij_1);
        }
      } else {
        var ruleIndex = p.kj();
        var ruleName = (ruleIndex >= 0 ? ruleIndex < ruleNames.h() : false) ? ruleNames.j(ruleIndex) : ruleIndex.toString();
        buf.x9(ruleName);
      }
      if (!(p.hj_1 == null) ? !(ruleNames == null) ? true : !ensureNotNull(p.hj_1).sm() : false) {
        buf.x9(' ');
      }
      p = p.hj_1;
    }
    buf.x9(']');
    return buf.toString();
  };
  function RuleContext() {
    this.ij_1 = -1;
    this.jj_1 = -1;
  }
  RuleContext.$metadata$ = classMeta('RuleContext', [RuleNode]);
  var properties_initialized_RuleContext_kt_naglpf;
  function init_properties_RuleContext_kt_ji02bl() {
    if (properties_initialized_RuleContext_kt_naglpf) {
    } else {
      properties_initialized_RuleContext_kt_naglpf = true;
      EMPTY_RULECTX = ParserRuleContext_init_$Create$();
    }
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.ld_1 = 0;
    this.md_1 = -2;
    this.nd_1 = 1;
    this.od_1 = Companion_getInstance_4().pc_1;
    this.pd_1 = 0;
    this.qd_1 = 1;
    this.rd_1 = 2;
  }
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Token() {
  }
  Token.$metadata$ = interfaceMeta('Token');
  function TokenFactory() {
  }
  TokenFactory.$metadata$ = interfaceMeta('TokenFactory');
  function TokenSource() {
  }
  TokenSource.$metadata$ = interfaceMeta('TokenSource');
  function TokenStream() {
  }
  TokenStream.$metadata$ = interfaceMeta('TokenStream', [IntStream]);
  function Vocabulary() {
  }
  Vocabulary.$metadata$ = interfaceMeta('Vocabulary');
  function VocabularyImpl_init_$Init$(literalNames, symbolicNames, displayNames, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      displayNames = null;
    VocabularyImpl.call($this, literalNames, symbolicNames, displayNames);
    return $this;
  }
  function VocabularyImpl_init_$Create$(literalNames, symbolicNames, displayNames, $mask0, $marker) {
    return VocabularyImpl_init_$Init$(literalNames, symbolicNames, displayNames, $mask0, $marker, Object.create(VocabularyImpl.prototype));
  }
  function Companion_7() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(0), null);
    tmp.qp_1 = tmp$ret$0;
    this.rp_1 = new VocabularyImpl(this.qp_1, this.qp_1, this.qp_1);
  }
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function VocabularyImpl(literalNames, symbolicNames, displayNames) {
    Companion_getInstance_8();
    var tmp = this;
    var tmp0_elvis_lhs = literalNames;
    tmp.sp_1 = tmp0_elvis_lhs == null ? Companion_getInstance_8().qp_1 : tmp0_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs = symbolicNames;
    tmp_0.tp_1 = tmp1_elvis_lhs == null ? Companion_getInstance_8().qp_1 : tmp1_elvis_lhs;
    var tmp_1 = this;
    var tmp2_elvis_lhs = displayNames;
    tmp_1.up_1 = tmp2_elvis_lhs == null ? Companion_getInstance_8().qp_1 : tmp2_elvis_lhs;
    this.vp_1 = Math_getInstance().sb(this.up_1.length, Math_getInstance().sb(this.sp_1.length, this.tp_1.length)) - 1 | 0;
  }
  VocabularyImpl.prototype.wp = function (tokenType) {
    var tmp;
    if (tokenType >= 0 ? tokenType < this.sp_1.length : false) {
      tmp = this.sp_1[tokenType];
    } else {
      tmp = null;
    }
    return tmp;
  };
  VocabularyImpl.prototype.xp = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.tp_1.length : false) {
      return this.tp_1[tokenType];
    }
    var tmp;
    if (tokenType === Companion_getInstance_7().od_1) {
      tmp = 'EOF';
    } else {
      tmp = null;
    }
    return tmp;
  };
  VocabularyImpl.prototype.mf = function (tokenType) {
    if (tokenType >= 0 ? tokenType < this.up_1.length : false) {
      var displayName = this.up_1[tokenType];
      if (!(displayName == null)) {
        return displayName;
      }
    }
    var literalName = this.wp(tokenType);
    if (!(literalName == null)) {
      return literalName;
    }
    var symbolicName = this.xp(tokenType);
    var tmp0_elvis_lhs = symbolicName;
    return tmp0_elvis_lhs == null ? tokenType.toString() : tmp0_elvis_lhs;
  };
  VocabularyImpl.$metadata$ = classMeta('VocabularyImpl', [Vocabulary]);
  function WritableToken() {
  }
  WritableToken.$metadata$ = interfaceMeta('WritableToken', [Token]);
  function Companion_8() {
    Companion_instance_8 = this;
    this.yp_1 = 0;
  }
  Companion_8.$metadata$ = objectMeta('Companion');
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function ATN(grammarType, maxTokenType) {
    Companion_getInstance_9();
    this.gh_1 = grammarType;
    this.hh_1 = maxTokenType;
    this.ih_1 = ArrayList_init_$Create$_0();
    this.jh_1 = ArrayList_init_$Create$_0();
    this.kh_1 = null;
    this.lh_1 = null;
    this.mh_1 = LinkedHashMap_init_$Create$();
    this.nh_1 = null;
    this.oh_1 = null;
    this.ph_1 = ArrayList_init_$Create$_0();
  }
  ATN.prototype.zp = function () {
    return this.jh_1.h();
  };
  ATN.prototype.sj = function (s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.bq(s, ctx);
  };
  ATN.prototype.th = function (s) {
    if (!(s.zh_1 == null))
      return s.zh_1;
    s.zh_1 = this.sj(s, null);
    ensureNotNull(s.zh_1).cq(true);
    return s.zh_1;
  };
  ATN.prototype.dq = function (state) {
    if (!(state == null)) {
      ensureNotNull(state).uh_1 = this;
      ensureNotNull(state).vh_1 = this.ih_1.h();
    }
    this.ih_1.a(state);
  };
  ATN.prototype.eq = function (s) {
    this.jh_1.a(s);
    s.lq_1 = this.jh_1.h() - 1 | 0;
    return s.lq_1;
  };
  ATN.prototype.nq = function (decision) {
    var tmp;
    if (!this.jh_1.d()) {
      tmp = this.jh_1.j(decision);
    } else {
      tmp = null;
    }
    return tmp;
  };
  ATN.prototype.qn = function (stateNumber, context) {
    if (stateNumber < 0 ? true : stateNumber >= this.ih_1.h()) {
      throw IllegalArgumentException_init_$Create$('Invalid state number.');
    }
    var ctx = context;
    var s = this.ih_1.j(stateNumber);
    var following = this.th(ensureNotNull(s));
    if (!ensureNotNull(following).bh(Companion_getInstance_7().md_1)) {
      return following;
    }
    var expected = IntervalSet_init_$Create$_0(new Int32Array([]));
    expected.ck(following);
    expected.ek(Companion_getInstance_7().md_1);
    while ((!(ctx == null) ? ensureNotNull(ctx).ij_1 >= 0 : false) ? ensureNotNull(following).bh(Companion_getInstance_7().md_1) : false) {
      var invokingState = this.ih_1.j(ensureNotNull(ctx).ij_1);
      var tmp = ensureNotNull(invokingState).rj(0);
      var rt = tmp instanceof RuleTransition ? tmp : THROW_CCE();
      following = this.th(rt.bk_1);
      expected.ck(following);
      expected.ek(Companion_getInstance_7().md_1);
      ctx = ensureNotNull(ctx).dk();
    }
    if (ensureNotNull(following).bh(Companion_getInstance_7().md_1)) {
      expected.dh(Companion_getInstance_7().od_1);
    }
    return expected;
  };
  ATN.$metadata$ = classMeta('ATN');
  function ATNConfig_init_$Init$(state, alt, context, semanticContext, $this) {
    ATNConfig.call($this);
    $this.oq_1 = state;
    $this.pq_1 = alt;
    $this.qq_1 = context;
    $this.sq_1 = semanticContext;
    return $this;
  }
  function ATNConfig_init_$Create$(state, alt, context, semanticContext) {
    return ATNConfig_init_$Init$(state, alt, context, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_0(state, alt, context, semanticContext, $mask0, $marker, $this) {
    if (!(($mask0 & 8) === 0))
      semanticContext = Companion_getInstance_26().tq_1;
    ATNConfig_init_$Init$(state, alt, context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_0(state, alt, context, semanticContext, $mask0, $marker) {
    return ATNConfig_init_$Init$_0(state, alt, context, semanticContext, $mask0, $marker, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_1(c, state, semanticContext, $this) {
    ATNConfig_init_$Init$_3(c, state, c.qq_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_1(c, state, semanticContext) {
    return ATNConfig_init_$Init$_1(c, state, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_2(c, semanticContext, $this) {
    ATNConfig_init_$Init$_3(c, c.oq_1, c.qq_1, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_2(c, semanticContext) {
    return ATNConfig_init_$Init$_2(c, semanticContext, Object.create(ATNConfig.prototype));
  }
  function ATNConfig_init_$Init$_3(c, state, context, semanticContext, $this) {
    ATNConfig.call($this);
    $this.oq_1 = state;
    $this.pq_1 = c.pq_1;
    $this.qq_1 = context;
    $this.sq_1 = semanticContext;
    $this.rq_1 = c.rq_1;
    return $this;
  }
  function ATNConfig_init_$Init$_4(c, state, context, semanticContext, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      context = c.qq_1;
    if (!(($mask0 & 8) === 0))
      semanticContext = c.sq_1;
    ATNConfig_init_$Init$_3(c, state, context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_$Create$_3(c, state, context, semanticContext, $mask0, $marker) {
    return ATNConfig_init_$Init$_4(c, state, context, semanticContext, $mask0, $marker, Object.create(ATNConfig.prototype));
  }
  function Companion_9() {
    Companion_instance_9 = this;
    this.uq_1 = 1073741824;
  }
  Companion_9.$metadata$ = objectMeta('Companion');
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  ATNConfig.prototype.vq = function () {
    return this.rq_1 & ~Companion_getInstance_10().uq_1;
  };
  ATNConfig.prototype.wq = function (value) {
    var tmp;
    if (value) {
      this.rq_1 = this.rq_1 | 1073741824;
      tmp = Unit_getInstance();
    } else {
      this.rq_1 = this.rq_1 & ~Companion_getInstance_10().uq_1;
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  ATNConfig.prototype.xq = function () {
    return !((this.rq_1 & Companion_getInstance_10().uq_1) === 0);
  };
  ATNConfig.prototype.equals = function (o) {
    var tmp;
    if (!(o instanceof ATNConfig)) {
      tmp = false;
    } else {
      tmp = this.yq((o == null ? true : o instanceof ATNConfig) ? o : THROW_CCE());
    }
    return tmp;
  };
  ATNConfig.prototype.yq = function (other) {
    if (this === other) {
      return true;
    } else if (other == null) {
      return false;
    }
    return (((this.oq_1.vh_1 === other.oq_1.vh_1 ? this.pq_1 === other.pq_1 : false) ? this.qq_1 === other.qq_1 ? true : !(this.qq_1 == null) ? equals(this.qq_1, other.qq_1) : false : false) ? equals(this.sq_1, other.sq_1) : false) ? this.xq() === other.xq() : false;
  };
  ATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().ar(7);
    hashCode = MurmurHash_getInstance().br(hashCode, this.oq_1.vh_1);
    hashCode = MurmurHash_getInstance().br(hashCode, this.pq_1);
    hashCode = MurmurHash_getInstance().cr(hashCode, this.qq_1);
    hashCode = MurmurHash_getInstance().cr(hashCode, this.sq_1);
    hashCode = MurmurHash_getInstance().dr(hashCode, 4);
    return hashCode;
  };
  ATNConfig.prototype.toString = function () {
    return this.er(null, true);
  };
  ATNConfig.prototype.er = function (recog, showAlt) {
    var buf = StringBuilder_init_$Create$();
    buf.c(_Char___init__impl__6a9atx(40));
    buf.v9(this.oq_1);
    if (showAlt) {
      buf.x9(',');
      buf.v9(this.pq_1);
    }
    if (!(this.qq_1 == null)) {
      buf.x9(',[');
      buf.x9(toString(ensureNotNull(this.qq_1)));
      buf.x9(']');
    }
    if (!(this.sq_1 == null) ? !(this.sq_1 === Companion_getInstance_26().tq_1) : false) {
      buf.x9(',');
      buf.v9(this.sq_1);
    }
    if (this.vq() > 0) {
      buf.x9(',up=').v9(this.vq());
    }
    buf.c(_Char___init__impl__6a9atx(41));
    return buf.toString();
  };
  function ATNConfig() {
    Companion_getInstance_10();
    this.qq_1 = null;
    this.rq_1 = 0;
  }
  ATNConfig.$metadata$ = classMeta('ATNConfig');
  function Companion_10() {
    Companion_instance_10 = this;
    this.fr_1 = new ConfigEqualityComparator();
  }
  Companion_10.$metadata$ = objectMeta('Companion');
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function AbstractConfigHashSet_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      initialCapacity = 16;
    if (!(($mask0 & 4) === 0))
      initialBucketCapacity = 2;
    AbstractConfigHashSet.call($this, comparator, initialCapacity, initialBucketCapacity);
    return $this;
  }
  function ATNConfigSet_init_$Init$(fullCtx, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      fullCtx = true;
    ATNConfigSet.call($this, fullCtx);
    return $this;
  }
  function ATNConfigSet_init_$Create$(fullCtx, $mask0, $marker) {
    return ATNConfigSet_init_$Init$(fullCtx, $mask0, $marker, Object.create(ATNConfigSet.prototype));
  }
  function ConfigHashSet() {
    var tmp = Companion_getInstance_11().fr_1;
    AbstractConfigHashSet_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  ConfigHashSet.prototype.mr = function (elements) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented');
  };
  ConfigHashSet.prototype.u = function (elements) {
    return this.mr(elements);
  };
  ConfigHashSet.prototype.y1 = function (elements) {
    return this.mr(elements);
  };
  ConfigHashSet.$metadata$ = classMeta('ConfigHashSet', undefined, undefined, undefined, undefined, AbstractConfigHashSet.prototype);
  function ConfigEqualityComparator() {
    Companion_getInstance_11();
    AbstractEqualityComparator.call(this);
  }
  ConfigEqualityComparator.prototype.hs = function (o) {
    var hashCode_0 = 7;
    hashCode_0 = imul(31, hashCode_0) + o.oq_1.vh_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + o.pq_1 | 0;
    hashCode_0 = imul(31, hashCode_0) + hashCode(ensureNotNull(o.sq_1)) | 0;
    return hashCode_0;
  };
  ConfigEqualityComparator.prototype.is = function (obj) {
    return this.hs(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  ConfigEqualityComparator.prototype.js = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : (ensureNotNull(a).oq_1.vh_1 === ensureNotNull(b).oq_1.vh_1 ? ensureNotNull(a).pq_1 === ensureNotNull(b).pq_1 : false) ? equals(ensureNotNull(a).sq_1, ensureNotNull(b).sq_1) : false;
  };
  ConfigEqualityComparator.prototype.ks = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.js(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  ConfigEqualityComparator.$metadata$ = classMeta('ConfigEqualityComparator', undefined, undefined, undefined, undefined, AbstractEqualityComparator.prototype);
  function AbstractConfigHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Array2DHashSet.call(this, comparator, initialCapacity, initialBucketCapacity);
  }
  AbstractConfigHashSet.prototype.tr = function (capacity) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    return tmp$ret$0;
  };
  AbstractConfigHashSet.prototype.ur = function (capacity) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    return tmp$ret$0;
  };
  AbstractConfigHashSet.$metadata$ = classMeta('AbstractConfigHashSet', undefined, undefined, undefined, undefined, Array2DHashSet.prototype);
  function ATNConfigSet(fullCtx) {
    this.ls_1 = fullCtx;
    this.ms_1 = null;
    this.ns_1 = ArrayList_init_$Create$(7);
    this.os_1 = 0;
    this.ps_1 = null;
    this.qs_1 = false;
    this.rs_1 = false;
    this.ss_1 = -1;
    this.ts_1 = false;
    this.ms_1 = new ConfigHashSet();
  }
  ATNConfigSet.prototype.us = function () {
    var alts = BitSet_init_$Create$();
    var tmp0_iterator = this.ns_1.e();
    while (tmp0_iterator.f()) {
      var config = tmp0_iterator.g();
      alts.ws(config.pq_1);
    }
    return alts;
  };
  ATNConfigSet.prototype.cq = function (value) {
    this.ts_1 = value;
    this.ms_1 = null;
  };
  ATNConfigSet.prototype.xs = function (config) {
    return this.ys(config, null);
  };
  ATNConfigSet.prototype.ys = function (config, mergeCache) {
    if (this.ts_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (!(config.sq_1 === Companion_getInstance_26().tq_1)) {
      this.qs_1 = true;
    }
    if (config.vq() > 0) {
      this.rs_1 = true;
    }
    var existing = ensureNotNull(this.ms_1).bs(config);
    if (existing === config) {
      this.ss_1 = -1;
      this.ns_1.a(config);
      return true;
    }
    var rootIsWildcard = !this.ls_1;
    var merged = Companion_getInstance_23().ct(existing.qq_1, config.qq_1, rootIsWildcard, mergeCache);
    existing.rq_1 = Math_getInstance().sb(existing.rq_1, config.rq_1);
    if (config.xq()) {
      existing.wq(true);
    }
    existing.qq_1 = merged;
    return true;
  };
  ATNConfigSet.prototype.dt = function () {
    return this.ns_1;
  };
  ATNConfigSet.prototype.et = function (interpreter) {
    if (this.ts_1)
      throw IllegalStateException_init_$Create$('This set is readonly');
    if (ensureNotNull(this.ms_1).d())
      return Unit_getInstance();
    var tmp0_iterator = this.ns_1.e();
    while (tmp0_iterator.f()) {
      var config = tmp0_iterator.g();
      config.qq_1 = interpreter.ft(ensureNotNull(config.qq_1));
    }
  };
  ATNConfigSet.prototype.equals = function (o) {
    if (o === this) {
      return true;
    } else {
      if (!(o instanceof ATNConfigSet)) {
        return false;
      }
    }
    var other = (o == null ? true : o instanceof ATNConfigSet) ? o : THROW_CCE();
    return (((((!(this.ns_1 == null) ? this.ns_1.equals(ensureNotNull(other).ns_1) : false) ? this.ls_1 === other.ls_1 : false) ? this.os_1 === other.os_1 : false) ? this.ps_1 === other.ps_1 : false) ? this.qs_1 === other.qs_1 : false) ? this.rs_1 === other.rs_1 : false;
  };
  ATNConfigSet.prototype.hashCode = function () {
    if (this.ts_1) {
      if (this.ss_1 === -1) {
        this.ss_1 = this.ns_1.hashCode();
      }
      return this.ss_1;
    }
    return this.ns_1.hashCode();
  };
  ATNConfigSet.prototype.h = function () {
    return this.ns_1.h();
  };
  ATNConfigSet.prototype.d = function () {
    return this.ns_1.d();
  };
  ATNConfigSet.prototype.e = function () {
    return this.ns_1.e();
  };
  ATNConfigSet.prototype.toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.x9(toString(this.dt()));
    if (this.qs_1) {
      buf.x9(',hasSemanticContext=').w9(this.qs_1);
    }
    if (!(this.os_1 === Companion_getInstance_9().yp_1)) {
      buf.x9(',uniqueAlt=').v9(this.os_1);
    }
    if (!(this.ps_1 == null)) {
      buf.x9(',conflictingAlts=').v9(this.ps_1);
    }
    if (this.rs_1) {
      buf.x9(',dipsIntoOuterContext');
    }
    return buf.toString();
  };
  ATNConfigSet.prototype.mr = function (elements) {
    throw UnsupportedOperationException_init_$Create$();
  };
  ATNConfigSet.prototype.u = function (elements) {
    return this.mr(elements);
  };
  ATNConfigSet.$metadata$ = classMeta('ATNConfigSet', [Set]);
  function ATNDeserializationOptions_init_$Init$($this) {
    ATNDeserializationOptions.call($this);
    $this.ht_1 = true;
    $this.it_1 = false;
    return $this;
  }
  function ATNDeserializationOptions_init_$Create$() {
    return ATNDeserializationOptions_init_$Init$(Object.create(ATNDeserializationOptions.prototype));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.jt_1 = ATNDeserializationOptions_init_$Create$();
    this.jt_1.kt();
  }
  Companion_11.$metadata$ = objectMeta('Companion');
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  ATNDeserializationOptions.prototype.lt = function () {
    return this.ht_1;
  };
  ATNDeserializationOptions.prototype.mt = function () {
    return this.it_1;
  };
  ATNDeserializationOptions.prototype.kt = function () {
    this.gt_1 = true;
  };
  function ATNDeserializationOptions() {
    Companion_getInstance_12();
    this.gt_1 = false;
    this.ht_1 = false;
    this.it_1 = false;
  }
  ATNDeserializationOptions.$metadata$ = classMeta('ATNDeserializationOptions');
  var UnicodeDeserializingMode_UNICODE_BMP_instance;
  var UnicodeDeserializingMode_UNICODE_SMP_instance;
  var UnicodeDeserializingMode_entriesInitialized;
  function UnicodeDeserializingMode_initEntries() {
    if (UnicodeDeserializingMode_entriesInitialized)
      return Unit_getInstance();
    UnicodeDeserializingMode_entriesInitialized = true;
    UnicodeDeserializingMode_UNICODE_BMP_instance = new UnicodeDeserializingMode('UNICODE_BMP', 0);
    UnicodeDeserializingMode_UNICODE_SMP_instance = new UnicodeDeserializingMode('UNICODE_SMP', 1);
  }
  function ATNDeserializer$Companion$getUnicodeDeserializer$1() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$1.prototype.nt = function (data, p) {
    return Char__toInt_impl_vasixd(data[p]);
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$1.prototype.sc = function () {
    return 1;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$1.$metadata$ = classMeta(undefined, [UnicodeDeserializer]);
  function ATNDeserializer$Companion$getUnicodeDeserializer$2() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$2.prototype.nt = function (data, p) {
    return Companion_getInstance_13().vt(data, p);
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$2.prototype.sc = function () {
    return 2;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$2.$metadata$ = classMeta(undefined, [UnicodeDeserializer]);
  function ATNDeserializer_init_$Init$(deserializationOptions, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      deserializationOptions = Companion_getInstance_12().jt_1;
    ATNDeserializer.call($this, deserializationOptions);
    return $this;
  }
  function ATNDeserializer_init_$Create$(deserializationOptions, $mask0, $marker) {
    return ATNDeserializer_init_$Init$(deserializationOptions, $mask0, $marker, Object.create(ATNDeserializer.prototype));
  }
  function UnicodeDeserializer() {
  }
  UnicodeDeserializer.$metadata$ = interfaceMeta('UnicodeDeserializer');
  function UnicodeDeserializingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  UnicodeDeserializingMode.$metadata$ = classMeta('UnicodeDeserializingMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function deserializeSets($this, data, p, sets, unicodeDeserializer) {
    var p_0 = p;
    var tmp = Companion_getInstance_13();
    var tmp0 = p_0;
    p_0 = tmp0 + 1 | 0;
    var nsets = tmp.wt(data[tmp0]);
    var inductionVariable = 0;
    if (inductionVariable < nsets)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var nintervals = Companion_getInstance_13().wt(data[p_0]);
        var tmp2 = p_0;
        p_0 = tmp2 + 1 | 0;
        var set = IntervalSet_init_$Create$_0(new Int32Array([]));
        sets.a(set);
        var tmp_0 = Companion_getInstance_13();
        var tmp3 = p_0;
        p_0 = tmp3 + 1 | 0;
        var containsEof = !(tmp_0.wt(data[tmp3]) === 0);
        if (containsEof) {
          set.dh(-1);
        }
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < nintervals)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var a = unicodeDeserializer.nt(data, p_0);
            p_0 = p_0 + unicodeDeserializer.sc() | 0;
            var b = unicodeDeserializer.nt(data, p_0);
            p_0 = p_0 + unicodeDeserializer.sc() | 0;
            set.xt(a, b);
          }
           while (inductionVariable_0 < nintervals);
      }
       while (inductionVariable < nsets);
    return p_0;
  }
  function Companion_12() {
    Companion_instance_12 = this;
    this.ot_1 = 3;
    this.pt_1 = Companion_getInstance_35().yt('33761B2D-78BB-4A43-8B0B-4F5BEE8AACF3');
    this.qt_1 = Companion_getInstance_35().yt('1DA0C57D-6C06-438A-9B27-10BCB3CE0F61');
    this.rt_1 = Companion_getInstance_35().yt('AADB8D7E-AEEF-4415-AD2B-8204D6CF042E');
    this.st_1 = Companion_getInstance_35().yt('59627784-3BE5-417A-B9EB-8131A7286089');
    this.tt_1 = ArrayList_init_$Create$_0();
    this.tt_1.a(this.pt_1);
    this.tt_1.a(this.qt_1);
    this.tt_1.a(this.rt_1);
    this.tt_1.a(this.st_1);
    this.ut_1 = this.st_1;
  }
  Companion_12.prototype.zt = function (mode) {
    var tmp;
    if (mode.equals(UnicodeDeserializingMode_UNICODE_BMP_getInstance())) {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$1();
    } else {
      tmp = new ATNDeserializer$Companion$getUnicodeDeserializer$2();
    }
    return tmp;
  };
  Companion_12.prototype.au = function (feature, actualUuid) {
    var featureIndex = this.tt_1.y4(feature);
    var tmp;
    if (featureIndex < 0) {
      tmp = false;
    } else {
      tmp = this.tt_1.y4(actualUuid) >= featureIndex;
    }
    return tmp;
  };
  Companion_12.prototype.wt = function (c) {
    return Char__toInt_impl_vasixd(c);
  };
  Companion_12.prototype.vt = function (data, offset) {
    return Char__toInt_impl_vasixd(data[offset]) | Char__toInt_impl_vasixd(data[offset + 1 | 0]) << 16;
  };
  Companion_12.prototype.bu = function (data, offset) {
    var lowOrder = toLong(this.vt(data, offset)).mb(new Long(-1, 0));
    return lowOrder.nb(toLong(this.vt(data, offset + 2 | 0)).kb(32));
  };
  Companion_12.prototype.cu = function (data, offset) {
    var leastSigBits = this.bu(data, offset);
    var mostSigBits = this.bu(data, offset + 4 | 0);
    return UUID_init_$Create$(mostSigBits, leastSigBits);
  };
  Companion_12.$metadata$ = objectMeta('Companion');
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function UnicodeDeserializingMode_UNICODE_BMP_getInstance() {
    UnicodeDeserializingMode_initEntries();
    return UnicodeDeserializingMode_UNICODE_BMP_instance;
  }
  function UnicodeDeserializingMode_UNICODE_SMP_getInstance() {
    UnicodeDeserializingMode_initEntries();
    return UnicodeDeserializingMode_UNICODE_SMP_instance;
  }
  function ATNDeserializer(deserializationOptions) {
    Companion_getInstance_13();
    var deserializationOptions_0 = deserializationOptions;
    if (deserializationOptions_0 == null) {
      deserializationOptions_0 = Companion_getInstance_12().jt_1;
    }
    this.du_1 = deserializationOptions_0;
  }
  ATNDeserializer.prototype.eu = function (data) {
    var data_0 = data;
    data_0 = copyOf(data_0);
    var inductionVariable = 1;
    var last = data_0.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        data_0[i] = numberToChar(Char__toInt_impl_vasixd(data_0[i]) - 2 | 0);
      }
       while (inductionVariable < last);
    var p = 0;
    var tmp = Companion_getInstance_13();
    var tmp_0 = data_0;
    var tmp1 = p;
    p = tmp1 + 1 | 0;
    var version = tmp.wt(tmp_0[tmp1]);
    if (!(version === Companion_getInstance_13().ot_1)) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected ' + Companion_getInstance_13().ot_1 + ').';
      throw UnsupportedOperationException_init_$Create$_0(reason);
    }
    var uuid = Companion_getInstance_13().cu(data_0, p);
    p = p + 8 | 0;
    if (!Companion_getInstance_13().tt_1.t(uuid)) {
      var reason_0 = 'Could not deserialize ATN with UUID ' + uuid + ' (expected ' + Companion_getInstance_13().ut_1 + ' or a legacy UUID).';
      throw UnsupportedOperationException_init_$Create$_0(reason_0);
    }
    var supportsPrecedencePredicates = Companion_getInstance_13().au(Companion_getInstance_13().qt_1, uuid);
    var supportsLexerActions = Companion_getInstance_13().au(Companion_getInstance_13().rt_1, uuid);
    var tmp_1 = values();
    var tmp_2 = Companion_getInstance_13();
    var tmp_3 = data_0;
    var tmp2 = p;
    p = tmp2 + 1 | 0;
    var grammarType = tmp_1[tmp_2.wt(tmp_3[tmp2])];
    var tmp_4 = Companion_getInstance_13();
    var tmp_5 = data_0;
    var tmp3 = p;
    p = tmp3 + 1 | 0;
    var maxTokenType = tmp_4.wt(tmp_5[tmp3]);
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList_init_$Create$_0();
    var endStateNumbers = ArrayList_init_$Create$_0();
    var tmp_6 = Companion_getInstance_13();
    var tmp_7 = data_0;
    var tmp4 = p;
    p = tmp4 + 1 | 0;
    var nstates = tmp_6.wt(tmp_7[tmp4]);
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < nstates)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp_8 = Companion_getInstance_13();
        var tmp_9 = data_0;
        var tmp6 = p;
        p = tmp6 + 1 | 0;
        var stype = tmp_8.wt(tmp_9[tmp6]);
        if (stype === Companion_getInstance_15().fi_1) {
          atn.dq(null);
          continue $l$loop;
        }
        var tmp_10 = Companion_getInstance_13();
        var tmp_11 = data_0;
        var tmp7 = p;
        p = tmp7 + 1 | 0;
        var ruleIndex = tmp_10.wt(tmp_11[tmp7]);
        if (ruleIndex === Char__toInt_impl_vasixd(maxValue(Companion_getInstance()))) {
          ruleIndex = -1;
        }
        var s = this.fu(stype, ruleIndex);
        if (stype === Companion_getInstance_15().ri_1) {
          var tmp_12 = Companion_getInstance_13();
          var tmp_13 = data_0;
          var tmp8 = p;
          p = tmp8 + 1 | 0;
          var loopBackStateNumber = tmp_12.wt(tmp_13[tmp8]);
          loopBackStateNumbers.a(new Pair(s instanceof LoopEndState ? s : THROW_CCE(), loopBackStateNumber));
        } else {
          if (s instanceof BlockStartState) {
            var tmp_14 = Companion_getInstance_13();
            var tmp_15 = data_0;
            var tmp9 = p;
            p = tmp9 + 1 | 0;
            var endStateNumber = tmp_14.wt(tmp_15[tmp9]);
            endStateNumbers.a(new Pair(s, endStateNumber));
          }
        }
        atn.dq(s);
      }
       while (inductionVariable_0 < nstates);
    var tmp10_iterator = loopBackStateNumbers.e();
    while (tmp10_iterator.f()) {
      var pair = tmp10_iterator.g();
      pair.p3_1.mu_1 = atn.ih_1.j(pair.q3_1);
    }
    var tmp11_iterator = endStateNumbers.e();
    while (tmp11_iterator.f()) {
      var pair_0 = tmp11_iterator.g();
      var tmp_16 = pair_0.p3_1;
      var tmp_17 = atn.ih_1.j(pair_0.q3_1);
      tmp_16.vu_1 = tmp_17 instanceof BlockEndState ? tmp_17 : THROW_CCE();
    }
    var tmp_18 = Companion_getInstance_13();
    var tmp_19 = data_0;
    var tmp12 = p;
    p = tmp12 + 1 | 0;
    var numNonGreedyStates = tmp_18.wt(tmp_19[tmp12]);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < numNonGreedyStates)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp_20 = Companion_getInstance_13();
        var tmp_21 = data_0;
        var tmp14 = p;
        p = tmp14 + 1 | 0;
        var stateNumber = tmp_20.wt(tmp_21[tmp14]);
        var tmp_22 = atn.ih_1.j(stateNumber);
        (tmp_22 instanceof DecisionState ? tmp_22 : THROW_CCE()).mq_1 = true;
      }
       while (inductionVariable_1 < numNonGreedyStates);
    if (supportsPrecedencePredicates) {
      var tmp_23 = Companion_getInstance_13();
      var tmp_24 = data_0;
      var tmp15 = p;
      p = tmp15 + 1 | 0;
      var numPrecedenceStates = tmp_23.wt(tmp_24[tmp15]);
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < numPrecedenceStates)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var tmp_25 = Companion_getInstance_13();
          var tmp_26 = data_0;
          var tmp17 = p;
          p = tmp17 + 1 | 0;
          var stateNumber_0 = tmp_25.wt(tmp_26[tmp17]);
          var tmp_27 = atn.ih_1.j(stateNumber_0);
          (tmp_27 instanceof RuleStartState ? tmp_27 : THROW_CCE()).dv_1 = true;
        }
         while (inductionVariable_2 < numPrecedenceStates);
    }
    var tmp_28 = Companion_getInstance_13();
    var tmp_29 = data_0;
    var tmp18 = p;
    p = tmp18 + 1 | 0;
    var nrules = tmp_28.wt(tmp_29[tmp18]);
    if (atn.gh_1.equals(ATNType_LEXER_getInstance())) {
      atn.nh_1 = new Int32Array(nrules);
    }
    var tmp_30 = atn;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(nrules), null);
    tmp_30.kh_1 = tmp$ret$0;
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < nrules)
      do {
        var i_3 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var tmp_31 = Companion_getInstance_13();
        var tmp_32 = data_0;
        var tmp20 = p;
        p = tmp20 + 1 | 0;
        var s_0 = tmp_31.wt(tmp_32[tmp20]);
        var tmp_33 = atn.ih_1.j(s_0);
        var startState = tmp_33 instanceof RuleStartState ? tmp_33 : THROW_CCE();
        ensureNotNull(atn.kh_1)[i_3] = startState;
        if (atn.gh_1.equals(ATNType_LEXER_getInstance())) {
          var tmp_34 = Companion_getInstance_13();
          var tmp_35 = data_0;
          var tmp21 = p;
          p = tmp21 + 1 | 0;
          var tokenType = tmp_34.wt(tmp_35[tmp21]);
          if (tokenType === 65535) {
            tokenType = Companion_getInstance_7().od_1;
          }
          ensureNotNull(atn.nh_1)[i_3] = tokenType;
          if (!Companion_getInstance_13().au(Companion_getInstance_13().rt_1, uuid)) {
            var tmp_36 = Companion_getInstance_13();
            var tmp_37 = data_0;
            var tmp22 = p;
            p = tmp22 + 1 | 0;
            var actionIndexIgnored = tmp_36.wt(tmp_37[tmp22]);
          }
        }
      }
       while (inductionVariable_3 < nrules);
    var tmp_38 = atn;
    var tmp$ret$1;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$1 = fillArrayVal(Array(nrules), null);
    tmp_38.lh_1 = tmp$ret$1;
    var tmp23_iterator = atn.ih_1.e();
    $l$loop_0: while (tmp23_iterator.f()) {
      var state = tmp23_iterator.g();
      if (!(state instanceof RuleStopState)) {
        continue $l$loop_0;
      }
      var stopState = state;
      ensureNotNull(atn.lh_1)[state.wh_1] = stopState;
      ensureNotNull(ensureNotNull(atn.kh_1)[state.wh_1]).cv_1 = stopState;
    }
    var tmp_39 = Companion_getInstance_13();
    var tmp_40 = data_0;
    var tmp24 = p;
    p = tmp24 + 1 | 0;
    var nmodes = tmp_39.wt(tmp_40[tmp24]);
    var inductionVariable_4 = 0;
    if (inductionVariable_4 < nmodes)
      do {
        var i_4 = inductionVariable_4;
        inductionVariable_4 = inductionVariable_4 + 1 | 0;
        var tmp_41 = Companion_getInstance_13();
        var tmp_42 = data_0;
        var tmp26 = p;
        p = tmp26 + 1 | 0;
        var s_1 = tmp_41.wt(tmp_42[tmp26]);
        var tmp_43 = atn.ih_1.j(s_1);
        atn.ph_1.a(tmp_43 instanceof TokensStartState ? tmp_43 : THROW_CCE());
      }
       while (inductionVariable_4 < nmodes);
    var sets = ArrayList_init_$Create$_0();
    p = deserializeSets(this, data_0, p, sets, Companion_getInstance_13().zt(UnicodeDeserializingMode_UNICODE_BMP_getInstance()));
    if (Companion_getInstance_13().au(Companion_getInstance_13().st_1, uuid)) {
      p = deserializeSets(this, data_0, p, sets, Companion_getInstance_13().zt(UnicodeDeserializingMode_UNICODE_SMP_getInstance()));
    }
    var tmp_44 = Companion_getInstance_13();
    var tmp_45 = data_0;
    var tmp27 = p;
    p = tmp27 + 1 | 0;
    var nedges = tmp_44.wt(tmp_45[tmp27]);
    var inductionVariable_5 = 0;
    if (inductionVariable_5 < nedges)
      do {
        var i_5 = inductionVariable_5;
        inductionVariable_5 = inductionVariable_5 + 1 | 0;
        var src = Companion_getInstance_13().wt(data_0[p]);
        var trg = Companion_getInstance_13().wt(data_0[p + 1 | 0]);
        var ttype = Companion_getInstance_13().wt(data_0[p + 2 | 0]);
        var arg1 = Companion_getInstance_13().wt(data_0[p + 3 | 0]);
        var arg2 = Companion_getInstance_13().wt(data_0[p + 4 | 0]);
        var arg3 = Companion_getInstance_13().wt(data_0[p + 5 | 0]);
        var trans = this.ev(atn, ttype, src, trg, arg1, arg2, arg3, sets);
        var srcState = atn.ih_1.j(src);
        ensureNotNull(srcState).fv(trans);
        p = p + 6 | 0;
      }
       while (inductionVariable_5 < nedges);
    var tmp29_iterator = atn.ih_1.e();
    while (tmp29_iterator.f()) {
      var state_0 = tmp29_iterator.g();
      var inductionVariable_6 = 0;
      var last_0 = ensureNotNull(state_0).gv();
      if (inductionVariable_6 < last_0)
        $l$loop_1: do {
          var i_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var tmp_46 = ensureNotNull(state_0).rj(i_6);
          var tmp31_elvis_lhs = tmp_46 instanceof RuleTransition ? tmp_46 : null;
          var tmp_47;
          if (tmp31_elvis_lhs == null) {
            continue $l$loop_1;
          } else {
            tmp_47 = tmp31_elvis_lhs;
          }
          var t = tmp_47;
          var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
          var outermostPrecedenceReturn = -1;
          if (ensureNotNull(ensureNotNull(atn.kh_1)[ensureNotNull(ruleTransition.qj_1).wh_1]).dv_1) {
            if (ruleTransition.ak_1 === 0) {
              outermostPrecedenceReturn = ensureNotNull(ruleTransition.qj_1).wh_1;
            }
          }
          var returnTransition = new EpsilonTransition(ruleTransition.bk_1, outermostPrecedenceReturn);
          ensureNotNull(ensureNotNull(atn.lh_1)[ensureNotNull(ensureNotNull(ruleTransition).qj_1).wh_1]).fv(returnTransition);
        }
         while (inductionVariable_6 < last_0);
    }
    var tmp32_iterator = atn.ih_1.e();
    while (tmp32_iterator.f()) {
      var state_1 = tmp32_iterator.g();
      if (state_1 instanceof BlockStartState) {
        if ((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).vu_1 == null) {
          throw IllegalStateException_init_$Create$_0();
        }
        if (!(ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).vu_1).nv_1 == null)) {
          throw IllegalStateException_init_$Create$_0();
        }
        var tmp_48 = ensureNotNull((state_1 instanceof BlockStartState ? state_1 : THROW_CCE()).vu_1);
        tmp_48.nv_1 = state_1 instanceof BlockStartState ? state_1 : THROW_CCE();
      }
      if (state_1 instanceof PlusLoopbackState) {
        var loopbackState = state_1 instanceof PlusLoopbackState ? state_1 : THROW_CCE();
        var inductionVariable_7 = 0;
        var last_1 = loopbackState.gv();
        if (inductionVariable_7 < last_1)
          do {
            var i_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var target = loopbackState.rj(i_7).qj_1;
            if (target instanceof PlusBlockStartState) {
              (target instanceof PlusBlockStartState ? target : THROW_CCE()).hw_1 = loopbackState;
            }
          }
           while (inductionVariable_7 < last_1);
      } else {
        if (state_1 instanceof StarLoopbackState) {
          var loopbackState_0 = state_1 instanceof StarLoopbackState ? state_1 : THROW_CCE();
          var inductionVariable_8 = 0;
          var last_2 = loopbackState_0.gv();
          if (inductionVariable_8 < last_2)
            do {
              var i_8 = inductionVariable_8;
              inductionVariable_8 = inductionVariable_8 + 1 | 0;
              var target_0 = loopbackState_0.rj(i_8).qj_1;
              if (target_0 instanceof StarLoopEntryState) {
                (target_0 instanceof StarLoopEntryState ? target_0 : THROW_CCE()).wv_1 = loopbackState_0;
              }
            }
             while (inductionVariable_8 < last_2);
        }
      }
    }
    var tmp_49 = Companion_getInstance_13();
    var tmp_50 = data_0;
    var tmp35 = p;
    p = tmp35 + 1 | 0;
    var ndecisions = tmp_49.wt(tmp_50[tmp35]);
    var inductionVariable_9 = 1;
    if (inductionVariable_9 <= ndecisions)
      do {
        var i_9 = inductionVariable_9;
        inductionVariable_9 = inductionVariable_9 + 1 | 0;
        var tmp_51 = Companion_getInstance_13();
        var tmp_52 = data_0;
        var tmp37 = p;
        p = tmp37 + 1 | 0;
        var s_2 = tmp_51.wt(tmp_52[tmp37]);
        var tmp_53 = atn.ih_1.j(s_2);
        var decState = tmp_53 instanceof DecisionState ? tmp_53 : THROW_CCE();
        atn.jh_1.a(decState);
        decState.lq_1 = i_9 - 1 | 0;
      }
       while (!(i_9 === ndecisions));
    if (atn.gh_1.equals(ATNType_LEXER_getInstance())) {
      if (supportsLexerActions) {
        var tmp_54 = atn;
        var tmp$ret$2;
        // Inline function 'kotlin.arrayOfNulls' call
        var tmp_55 = Companion_getInstance_13();
        var tmp_56 = data_0;
        var tmp38 = p;
        p = tmp38 + 1 | 0;
        var tmp0_arrayOfNulls = tmp_55.wt(tmp_56[tmp38]);
        tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
        tmp_54.oh_1 = tmp$ret$2;
        var inductionVariable_10 = 0;
        var last_3 = ensureNotNull(atn.oh_1).length - 1 | 0;
        if (inductionVariable_10 <= last_3)
          do {
            var i_10 = inductionVariable_10;
            inductionVariable_10 = inductionVariable_10 + 1 | 0;
            var tmp_57 = values_0();
            var tmp_58 = Companion_getInstance_13();
            var tmp_59 = data_0;
            var tmp40 = p;
            p = tmp40 + 1 | 0;
            var actionType = tmp_57[tmp_58.wt(tmp_59[tmp40])];
            var tmp_60 = Companion_getInstance_13();
            var tmp_61 = data_0;
            var tmp41 = p;
            p = tmp41 + 1 | 0;
            var data1 = tmp_60.wt(tmp_61[tmp41]);
            if (data1 === 65535) {
              data1 = -1;
            }
            var tmp_62 = Companion_getInstance_13();
            var tmp_63 = data_0;
            var tmp42 = p;
            p = tmp42 + 1 | 0;
            var data2 = tmp_62.wt(tmp_63[tmp42]);
            if (data2 === 65535) {
              data2 = -1;
            }
            var lexerAction = this.nw(actionType, data1, data2);
            ensureNotNull(atn.oh_1)[i_10] = lexerAction;
          }
           while (inductionVariable_10 <= last_3);
      } else {
        var legacyLexerActions = ArrayList_init_$Create$_0();
        var tmp43_iterator = atn.ih_1.e();
        while (tmp43_iterator.f()) {
          var state_2 = tmp43_iterator.g();
          var inductionVariable_11 = 0;
          var last_4 = ensureNotNull(state_2).gv();
          if (inductionVariable_11 < last_4)
            $l$loop_2: do {
              var i_11 = inductionVariable_11;
              inductionVariable_11 = inductionVariable_11 + 1 | 0;
              var tmp_64 = ensureNotNull(state_2).rj(i_11);
              var tmp45_elvis_lhs = tmp_64 instanceof ActionTransition ? tmp_64 : null;
              var tmp_65;
              if (tmp45_elvis_lhs == null) {
                continue $l$loop_2;
              } else {
                tmp_65 = tmp45_elvis_lhs;
              }
              var transition = tmp_65;
              var ruleIndex_0 = (transition instanceof ActionTransition ? transition : THROW_CCE()).jw_1;
              var actionIndex = (transition instanceof ActionTransition ? transition : THROW_CCE()).kw_1;
              var lexerAction_0 = new LexerCustomAction(ruleIndex_0, actionIndex);
              state_2.mw(i_11, new ActionTransition(ensureNotNull(transition.qj_1), ruleIndex_0, legacyLexerActions.h(), false));
              legacyLexerActions.a(lexerAction_0);
            }
             while (inductionVariable_11 < last_4);
        }
        var tmp_66 = atn;
        var tmp$ret$3;
        // Inline function 'kotlin.collections.toTypedArray' call
        tmp$ret$3 = copyToArray(legacyLexerActions);
        tmp_66.oh_1 = tmp$ret$3;
      }
    }
    this.ow(atn);
    if (this.du_1.lt()) {
      this.pw(atn);
    }
    if (this.du_1.mt() ? atn.gh_1.equals(ATNType_PARSER_getInstance()) : false) {
      atn.nh_1 = new Int32Array(ensureNotNull(atn.kh_1).length);
      var inductionVariable_12 = 0;
      var last_5 = ensureNotNull(atn.kh_1).length - 1 | 0;
      if (inductionVariable_12 <= last_5)
        do {
          var i_12 = inductionVariable_12;
          inductionVariable_12 = inductionVariable_12 + 1 | 0;
          ensureNotNull(atn.nh_1)[i_12] = (atn.hh_1 + i_12 | 0) + 1 | 0;
        }
         while (inductionVariable_12 <= last_5);
      var inductionVariable_13 = 0;
      var last_6 = ensureNotNull(atn.kh_1).length - 1 | 0;
      if (inductionVariable_13 <= last_6)
        do {
          var i_13 = inductionVariable_13;
          inductionVariable_13 = inductionVariable_13 + 1 | 0;
          var bypassStart = new BasicBlockStartState();
          bypassStart.wh_1 = i_13;
          atn.dq(bypassStart);
          var bypassStop = new BlockEndState();
          bypassStop.wh_1 = i_13;
          atn.dq(bypassStop);
          bypassStart.vu_1 = bypassStop;
          atn.eq(bypassStart);
          bypassStop.nv_1 = bypassStart;
          var endState;
          var excludeTransition = null;
          if (ensureNotNull(ensureNotNull(atn.kh_1)[i_13]).dv_1) {
            endState = null;
            var tmp48_iterator = atn.ih_1.e();
            $l$loop_6: while (tmp48_iterator.f()) {
              var state_3 = tmp48_iterator.g();
              if (!(ensureNotNull(state_3).wh_1 === i_13)) {
                continue $l$loop_6;
              }
              if (!(state_3 instanceof StarLoopEntryState)) {
                continue $l$loop_6;
              }
              var tmp_67 = state_3.rj(state_3.gv() - 1 | 0).qj_1;
              var tmp49_elvis_lhs = tmp_67 instanceof LoopEndState ? tmp_67 : null;
              var tmp_68;
              if (tmp49_elvis_lhs == null) {
                continue $l$loop_6;
              } else {
                tmp_68 = tmp49_elvis_lhs;
              }
              var maybeLoopEndState = tmp_68;
              var tmp_69;
              if (maybeLoopEndState.xh_1) {
                var tmp_70 = maybeLoopEndState.rj(0).qj_1;
                tmp_69 = tmp_70 instanceof RuleStopState;
              } else {
                tmp_69 = false;
              }
              if (tmp_69) {
                endState = state_3;
                break $l$loop_6;
              }
            }
            if (endState == null) {
              throw UnsupportedOperationException_init_$Create$_0("Couldn't identify final state of the precedence rule prefix section.");
            }
            excludeTransition = ensureNotNull((endState instanceof StarLoopEntryState ? endState : THROW_CCE()).wv_1).rj(0);
          } else {
            endState = ensureNotNull(atn.lh_1)[i_13];
          }
          var tmp50_iterator = atn.ih_1.e();
          while (tmp50_iterator.f()) {
            var state_4 = tmp50_iterator.g();
            var tmp51_iterator = ensureNotNull(state_4).yh_1.e();
            $l$loop_7: while (tmp51_iterator.f()) {
              var transition_0 = tmp51_iterator.g();
              if (transition_0 === excludeTransition) {
                continue $l$loop_7;
              }
              if (transition_0.qj_1 === endState) {
                transition_0.qj_1 = bypassStop;
              }
            }
          }
          while (ensureNotNull(ensureNotNull(atn.kh_1)[i_13]).gv() > 0) {
            var transition_1 = ensureNotNull(ensureNotNull(atn.kh_1)[i_13]).qw(ensureNotNull(ensureNotNull(atn.kh_1)[i_13]).gv() - 1 | 0);
            bypassStart.fv(transition_1);
          }
          var tmp_71 = ensureNotNull(ensureNotNull(atn.kh_1)[i_13]);
          tmp_71.fv(EpsilonTransition_init_$Create$(bypassStart, 0, 2, null));
          var tmp_72 = ensureNotNull(endState);
          bypassStop.fv(EpsilonTransition_init_$Create$(tmp_72, 0, 2, null));
          var matchState = new BasicState();
          atn.dq(matchState);
          matchState.fv(new AtomTransition(bypassStop, ensureNotNull(atn.nh_1)[i_13]));
          bypassStart.fv(EpsilonTransition_init_$Create$(matchState, 0, 2, null));
        }
         while (inductionVariable_13 <= last_6);
      if (this.du_1.lt()) {
        this.pw(atn);
      }
    }
    return atn;
  };
  ATNDeserializer.prototype.ow = function (atn) {
    var tmp0_iterator = atn.ih_1.e();
    $l$loop: while (tmp0_iterator.f()) {
      var state = tmp0_iterator.g();
      if (!(state instanceof StarLoopEntryState)) {
        continue $l$loop;
      }
      if (ensureNotNull(ensureNotNull(atn.kh_1)[state.wh_1]).dv_1) {
        var maybeLoopEndState = state.rj(state.gv() - 1 | 0).qj_1;
        if (maybeLoopEndState instanceof LoopEndState) {
          var tmp;
          if (maybeLoopEndState.xh_1) {
            var tmp_0 = maybeLoopEndState.rj(0).qj_1;
            tmp = tmp_0 instanceof RuleStopState;
          } else {
            tmp = false;
          }
          if (tmp) {
            (state instanceof StarLoopEntryState ? state : THROW_CCE()).xv_1 = true;
          }
        }
      }
    }
  };
  ATNDeserializer.prototype.pw = function (atn) {
    var tmp0_iterator = atn.ih_1.e();
    $l$loop: while (tmp0_iterator.f()) {
      var state = tmp0_iterator.g();
      if (state == null) {
        continue $l$loop;
      }
      var tmp = ensureNotNull(state).rw() ? true : ensureNotNull(state).gv() <= 1;
      this.sw(tmp, null, 2, null);
      if (state instanceof PlusBlockStartState) {
        var tmp_0 = !((state instanceof PlusBlockStartState ? state : THROW_CCE()).hw_1 == null);
        this.sw(tmp_0, null, 2, null);
      }
      if (state instanceof StarLoopEntryState) {
        var starLoopEntryState = state instanceof StarLoopEntryState ? state : THROW_CCE();
        var tmp_1 = !(ensureNotNull(starLoopEntryState).wv_1 == null);
        this.sw(tmp_1, null, 2, null);
        var tmp_2 = ensureNotNull(starLoopEntryState).gv() === 2;
        this.sw(tmp_2, null, 2, null);
        var tmp_3 = ensureNotNull(starLoopEntryState).rj(0).qj_1;
        if (tmp_3 instanceof StarBlockStartState) {
          var tmp_4 = ensureNotNull(starLoopEntryState).rj(1).qj_1;
          var tmp_5 = tmp_4 instanceof LoopEndState;
          this.sw(tmp_5, null, 2, null);
          var tmp_6 = !ensureNotNull(starLoopEntryState).mq_1;
          this.sw(tmp_6, null, 2, null);
        } else {
          var tmp_7 = ensureNotNull(starLoopEntryState).rj(0).qj_1;
          if (tmp_7 instanceof LoopEndState) {
            var tmp_8 = ensureNotNull(starLoopEntryState).rj(1).qj_1;
            var tmp_9 = tmp_8 instanceof StarBlockStartState;
            this.sw(tmp_9, null, 2, null);
            var tmp_10 = ensureNotNull(starLoopEntryState).mq_1;
            this.sw(tmp_10, null, 2, null);
          } else {
            throw IllegalStateException_init_$Create$_0();
          }
        }
      }
      if (state instanceof StarLoopbackState) {
        var tmp_11 = ensureNotNull(state).gv() === 1;
        this.sw(tmp_11, null, 2, null);
        var tmp_12 = ensureNotNull(state).rj(0).qj_1;
        var tmp_13 = tmp_12 instanceof StarLoopEntryState;
        this.sw(tmp_13, null, 2, null);
      }
      if (state instanceof LoopEndState) {
        var tmp_14 = !((state instanceof LoopEndState ? state : THROW_CCE()).mu_1 == null);
        this.sw(tmp_14, null, 2, null);
      }
      if (state instanceof RuleStartState) {
        var tmp_15 = !((state instanceof RuleStartState ? state : THROW_CCE()).cv_1 == null);
        this.sw(tmp_15, null, 2, null);
      }
      if (state instanceof BlockStartState) {
        var tmp_16 = !((state instanceof BlockStartState ? state : THROW_CCE()).vu_1 == null);
        this.sw(tmp_16, null, 2, null);
      }
      if (state instanceof BlockEndState) {
        var tmp_17 = !((state instanceof BlockEndState ? state : THROW_CCE()).nv_1 == null);
        this.sw(tmp_17, null, 2, null);
      }
      if (state instanceof DecisionState) {
        var decisionState = state instanceof DecisionState ? state : THROW_CCE();
        var tmp_18 = ensureNotNull(decisionState).gv() <= 1 ? true : ensureNotNull(decisionState).lq_1 >= 0;
        this.sw(tmp_18, null, 2, null);
      } else {
        var tmp_19;
        if (ensureNotNull(state).gv() <= 1) {
          tmp_19 = true;
        } else {
          tmp_19 = state instanceof RuleStopState;
        }
        var tmp_20 = tmp_19;
        this.sw(tmp_20, null, 2, null);
      }
    }
  };
  ATNDeserializer.prototype.tw = function (condition, message) {
    if (!condition) {
      throw IllegalStateException_init_$Create$(ensureNotNull(message));
    }
  };
  ATNDeserializer.prototype.sw = function (condition, message, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      message = null;
    return this.tw(condition, message);
  };
  ATNDeserializer.prototype.ev = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    var target = ensureNotNull(atn.ih_1.j(trg));
    var tmp0_subject = type;
    if (tmp0_subject === Companion_getInstance_28().uw_1) {
      return EpsilonTransition_init_$Create$(target, 0, 2, null);
    } else if (tmp0_subject === Companion_getInstance_28().vw_1) {
      var tmp;
      if (!(arg3 === 0)) {
        tmp = new RangeTransition(target, Companion_getInstance_7().od_1, arg2);
      } else {
        tmp = new RangeTransition(target, arg1, arg2);
      }
      return tmp;
    } else if (tmp0_subject === Companion_getInstance_28().ww_1) {
      var tmp_0 = atn.ih_1.j(arg1);
      return new RuleTransition(tmp_0 instanceof RuleStartState ? tmp_0 : THROW_CCE(), arg2, arg3, target);
    } else if (tmp0_subject === Companion_getInstance_28().xw_1) {
      return new PredicateTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (tmp0_subject === Companion_getInstance_28().dx_1)
      return new PrecedencePredicateTransition(target, arg1);
    else if (tmp0_subject === Companion_getInstance_28().yw_1) {
      var tmp_1;
      if (!(arg3 === 0)) {
        tmp_1 = new AtomTransition(target, Companion_getInstance_7().od_1);
      } else {
        tmp_1 = new AtomTransition(target, arg1);
      }
      return tmp_1;
    } else if (tmp0_subject === Companion_getInstance_28().zw_1) {
      return new ActionTransition(target, arg1, arg2, !(arg3 === 0));
    } else if (tmp0_subject === Companion_getInstance_28().ax_1)
      return new SetTransition(target, sets.j(arg1));
    else if (tmp0_subject === Companion_getInstance_28().bx_1)
      return new NotSetTransition(target, sets.j(arg1));
    else if (tmp0_subject === Companion_getInstance_28().cx_1)
      return new WildcardTransition(target);
    throw IllegalArgumentException_init_$Create$('The specified transition type is not valid.');
  };
  ATNDeserializer.prototype.fu = function (type, ruleIndex) {
    var s;
    var tmp0_subject = type;
    if (tmp0_subject === Companion_getInstance_15().fi_1)
      return null;
    else if (tmp0_subject === Companion_getInstance_15().gi_1)
      s = new BasicState();
    else if (tmp0_subject === Companion_getInstance_15().hi_1)
      s = new RuleStartState();
    else if (tmp0_subject === Companion_getInstance_15().ii_1)
      s = new BasicBlockStartState();
    else if (tmp0_subject === Companion_getInstance_15().ji_1)
      s = new PlusBlockStartState();
    else if (tmp0_subject === Companion_getInstance_15().ki_1)
      s = new StarBlockStartState();
    else if (tmp0_subject === Companion_getInstance_15().li_1)
      s = new TokensStartState();
    else if (tmp0_subject === Companion_getInstance_15().mi_1)
      s = new RuleStopState();
    else if (tmp0_subject === Companion_getInstance_15().ni_1)
      s = new BlockEndState();
    else if (tmp0_subject === Companion_getInstance_15().oi_1)
      s = new StarLoopbackState();
    else if (tmp0_subject === Companion_getInstance_15().pi_1)
      s = new StarLoopEntryState();
    else if (tmp0_subject === Companion_getInstance_15().qi_1)
      s = new PlusLoopbackState();
    else if (tmp0_subject === Companion_getInstance_15().ri_1)
      s = new LoopEndState();
    else {
      var message = 'The specified state type ' + type + ' is not valid.';
      throw IllegalArgumentException_init_$Create$(message);
    }
    s.wh_1 = ruleIndex;
    return s;
  };
  ATNDeserializer.prototype.nw = function (type, data1, data2) {
    var tmp0_subject = type;
    var tmp0 = tmp0_subject.va_1;
    switch (tmp0) {
      case 0:
        return new LexerChannelAction(data1);
      case 1:
        return new LexerCustomAction(data1, data2);
      case 2:
        return new LexerModeAction(data1);
      case 3:
        return Companion_getInstance_19().fx_1;
      case 4:
        return Companion_getInstance_20().gx_1;
      case 5:
        return new LexerPushModeAction(data1);
      case 6:
        return Companion_getInstance_21().hx_1;
      case 7:
        return new LexerTypeAction(data1);
      default:
        var message = 'The specified lexer action type ' + type + ' is not valid.';
        throw IllegalArgumentException_init_$Create$(message);
    }
  };
  ATNDeserializer.$metadata$ = classMeta('ATNDeserializer');
  function Companion_13() {
    Companion_instance_13 = this;
    this.ix_1 = Companion_getInstance_13().ot_1;
    this.jx_1 = Companion_getInstance_13().ut_1;
    var tmp = this;
    tmp.kx_1 = DFAState_init_$Create$(ATNConfigSet_init_$Create$(false, 1, null));
    this.kx_1.lx_1 = IntCompanionObject_getInstance().o_1;
  }
  Companion_13.$metadata$ = objectMeta('Companion');
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function ATNSimulator(atn, sharedContextCache) {
    Companion_getInstance_14();
    this.qh_1 = atn;
    this.rh_1 = sharedContextCache;
  }
  ATNSimulator.prototype.ft = function (context) {
    if (this.rh_1 == null)
      return context;
    var tmp$ret$0;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    var tmp0_synchronized = this.rh_1;
    var visited = new IdentityHashMap();
    return Companion_getInstance_23().tx(context, this.rh_1, visited);
  };
  ATNSimulator.$metadata$ = classMeta('ATNSimulator');
  function Companion_14() {
    Companion_instance_14 = this;
    this.ei_1 = 4;
    this.fi_1 = 0;
    this.gi_1 = 1;
    this.hi_1 = 2;
    this.ii_1 = 3;
    this.ji_1 = 4;
    this.ki_1 = 5;
    this.li_1 = 6;
    this.mi_1 = 7;
    this.ni_1 = 8;
    this.oi_1 = 9;
    this.pi_1 = 10;
    this.qi_1 = 11;
    this.ri_1 = 12;
    this.si_1 = listOf(['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END']);
    this.ti_1 = -1;
  }
  Companion_14.$metadata$ = objectMeta('Companion');
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function ATNState() {
    Companion_getInstance_15();
    this.uh_1 = null;
    var tmp = this;
    Companion_getInstance_15();
    tmp.vh_1 = -1;
    this.wh_1 = 0;
    this.xh_1 = false;
    this.yh_1 = ArrayList_init_$Create$(Companion_getInstance_15().ei_1);
    this.zh_1 = null;
  }
  ATNState.prototype.gv = function () {
    return this.yh_1.h();
  };
  ATNState.prototype.hashCode = function () {
    return this.vh_1;
  };
  ATNState.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ATNState) {
      tmp = this.vh_1 === other.vh_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  ATNState.prototype.toString = function () {
    return this.vh_1.toString();
  };
  ATNState.prototype.fv = function (e) {
    this.ux(this.yh_1.h(), e);
  };
  ATNState.prototype.ux = function (index, e) {
    if (this.yh_1.d()) {
      this.xh_1 = e.vx();
    } else if (!(this.xh_1 === e.vx())) {
      errMessage('ATN state ' + this.vh_1 + ' has both epsilon and non-epsilon transitions.\n');
      this.xh_1 = false;
    }
    var alreadyPresent = false;
    var tmp0_iterator = this.yh_1.e();
    $l$loop_0: while (tmp0_iterator.f()) {
      var t = tmp0_iterator.g();
      if (ensureNotNull(t.qj_1).vh_1 === ensureNotNull(e.qj_1).vh_1) {
        if ((!(t.wx() == null) ? !(e.wx() == null) : false) ? ensureNotNull(t.wx()).equals(e.wx()) : false) {
          alreadyPresent = true;
          break $l$loop_0;
        } else if (t.vx() ? e.vx() : false) {
          alreadyPresent = true;
          break $l$loop_0;
        }
      }
    }
    if (!alreadyPresent) {
      this.yh_1.w4(index, e);
    }
  };
  ATNState.prototype.rj = function (i) {
    return this.yh_1.j(i);
  };
  ATNState.prototype.mw = function (i, e) {
    this.yh_1.j4(i, e);
  };
  ATNState.prototype.qw = function (index) {
    return this.yh_1.p4(index);
  };
  ATNState.prototype.rw = function () {
    return this.xh_1;
  };
  ATNState.$metadata$ = classMeta('ATNState');
  var ATNType_LEXER_instance;
  var ATNType_PARSER_instance;
  function values() {
    return [ATNType_LEXER_getInstance(), ATNType_PARSER_getInstance()];
  }
  var ATNType_entriesInitialized;
  function ATNType_initEntries() {
    if (ATNType_entriesInitialized)
      return Unit_getInstance();
    ATNType_entriesInitialized = true;
    ATNType_LEXER_instance = new ATNType('LEXER', 0);
    ATNType_PARSER_instance = new ATNType('PARSER', 1);
  }
  function ATNType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  ATNType.$metadata$ = classMeta('ATNType', undefined, undefined, undefined, undefined, Enum.prototype);
  function ATNType_LEXER_getInstance() {
    ATNType_initEntries();
    return ATNType_LEXER_instance;
  }
  function ATNType_PARSER_getInstance() {
    ATNType_initEntries();
    return ATNType_PARSER_instance;
  }
  function AbstractPredicateTransition(target) {
    Transition.call(this, target);
  }
  AbstractPredicateTransition.$metadata$ = classMeta('AbstractPredicateTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
    Transition.call(this, target);
    this.jw_1 = ruleIndex;
    this.kw_1 = actionIndex;
    this.lw_1 = isCtxDependent;
  }
  ActionTransition.prototype.xx = function () {
    return Companion_getInstance_28().zw_1;
  };
  ActionTransition.prototype.vx = function () {
    return true;
  };
  ActionTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  ActionTransition.prototype.toString = function () {
    return 'action_' + this.jw_1 + ':' + this.kw_1;
  };
  ActionTransition.$metadata$ = classMeta('ActionTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function ArrayPredictionContext_init_$Init$(a, $this) {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [a.ay_1];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp = tmp$ret$2;
    var tmp$ret$3;
    // Inline function 'kotlin.intArrayOf' call
    var tmp1_intArrayOf = new Int32Array([a.by_1]);
    tmp$ret$3 = tmp1_intArrayOf;
    ArrayPredictionContext.call($this, tmp, tmp$ret$3);
    return $this;
  }
  function ArrayPredictionContext_init_$Create$(a) {
    return ArrayPredictionContext_init_$Init$(a, Object.create(ArrayPredictionContext.prototype));
  }
  function ArrayPredictionContext(parents, returnStates) {
    PredictionContext.call(this, Companion_getInstance_23().cy(ensureNotNull(parents), ensureNotNull(returnStates)));
    this.ey_1 = parents;
    this.fy_1 = returnStates;
  }
  ArrayPredictionContext.prototype.sc = function () {
    return ensureNotNull(this.fy_1).length;
  };
  ArrayPredictionContext.prototype.gy = function (index) {
    return ensureNotNull(ensureNotNull(this.ey_1)[index]);
  };
  ArrayPredictionContext.prototype.hy = function (index) {
    return ensureNotNull(this.fy_1)[index];
  };
  ArrayPredictionContext.prototype.equals = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof ArrayPredictionContext)) {
        return false;
      }
    }
    if (!(this.hashCode() === hashCode(other))) {
      return false;
    }
    return Arrays_getInstance().vb(this.fy_1, other.fy_1) ? Arrays_getInstance().ub(this.ey_1, other.ey_1) : false;
  };
  ArrayPredictionContext.$metadata$ = classMeta('ArrayPredictionContext', undefined, undefined, undefined, undefined, PredictionContext.prototype);
  function AtomTransition(target, label) {
    Transition.call(this, target);
    this.ly_1 = label;
  }
  AtomTransition.prototype.xx = function () {
    return Companion_getInstance_28().yw_1;
  };
  AtomTransition.prototype.wx = function () {
    return Companion_getInstance_33().oy(this.ly_1);
  };
  AtomTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.ly_1 === symbol;
  };
  AtomTransition.prototype.toString = function () {
    return this.ly_1.toString();
  };
  AtomTransition.$metadata$ = classMeta('AtomTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function BasicBlockStartState() {
    BlockStartState.call(this);
  }
  BasicBlockStartState.prototype.ai = function () {
    return Companion_getInstance_15().ii_1;
  };
  BasicBlockStartState.$metadata$ = classMeta('BasicBlockStartState', undefined, undefined, undefined, undefined, BlockStartState.prototype);
  function BasicState() {
    ATNState.call(this);
  }
  BasicState.prototype.ai = function () {
    return Companion_getInstance_15().gi_1;
  };
  BasicState.$metadata$ = classMeta('BasicState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function BlockEndState() {
    ATNState.call(this);
    this.nv_1 = null;
  }
  BlockEndState.prototype.ai = function () {
    return Companion_getInstance_15().ni_1;
  };
  BlockEndState.$metadata$ = classMeta('BlockEndState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function BlockStartState() {
    DecisionState.call(this);
    this.vu_1 = null;
  }
  BlockStartState.$metadata$ = classMeta('BlockStartState', undefined, undefined, undefined, undefined, DecisionState.prototype);
  function DecisionState() {
    ATNState.call(this);
    this.lq_1 = -1;
    this.mq_1 = false;
  }
  DecisionState.$metadata$ = classMeta('DecisionState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function EmptyPredictionContext() {
    SingletonPredictionContext.call(this, null, Companion_getInstance_23().at_1);
  }
  EmptyPredictionContext.prototype.sm = function () {
    return true;
  };
  EmptyPredictionContext.prototype.sc = function () {
    return 1;
  };
  EmptyPredictionContext.prototype.gy = function (index) {
    return null;
  };
  EmptyPredictionContext.prototype.hy = function (index) {
    return Companion_getInstance_23().at_1;
  };
  EmptyPredictionContext.prototype.equals = function (o) {
    return this === o;
  };
  EmptyPredictionContext.prototype.toString = function () {
    return '$';
  };
  EmptyPredictionContext.$metadata$ = classMeta('EmptyPredictionContext', undefined, undefined, undefined, undefined, SingletonPredictionContext.prototype);
  function EpsilonTransition_init_$Init$(target, outermostPrecedenceReturn, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      outermostPrecedenceReturn = -1;
    EpsilonTransition.call($this, target, outermostPrecedenceReturn);
    return $this;
  }
  function EpsilonTransition_init_$Create$(target, outermostPrecedenceReturn, $mask0, $marker) {
    return EpsilonTransition_init_$Init$(target, outermostPrecedenceReturn, $mask0, $marker, Object.create(EpsilonTransition.prototype));
  }
  function EpsilonTransition(target, outermostPrecedenceReturn) {
    Transition.call(this, target);
    this.iz_1 = outermostPrecedenceReturn;
  }
  EpsilonTransition.prototype.xx = function () {
    return Companion_getInstance_28().uw_1;
  };
  EpsilonTransition.prototype.vx = function () {
    return true;
  };
  EpsilonTransition.prototype.jz = function () {
    return this.iz_1;
  };
  EpsilonTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  EpsilonTransition.prototype.toString = function () {
    return 'epsilon';
  };
  EpsilonTransition.$metadata$ = classMeta('EpsilonTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function Companion_15() {
    Companion_instance_15 = this;
    this.kz_1 = Companion_getInstance_7().ld_1;
  }
  Companion_15.$metadata$ = objectMeta('Companion');
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function LL1Analyzer(atn) {
    Companion_getInstance_16();
    this.aq_1 = atn;
  }
  LL1Analyzer.prototype.bq = function (s, ctx) {
    return this.lz(s, null, ctx);
  };
  LL1Analyzer.prototype.lz = function (s, stopState, ctx) {
    var r = IntervalSet_init_$Create$_0(new Int32Array([]));
    var seeThruPreds = true;
    var lookContext = !(ctx == null) ? Companion_getInstance_23().mz(ensureNotNull(s.uh_1), ctx) : null;
    this.nz(s, stopState, lookContext, r, HashSet_init_$Create$(), BitSet_init_$Create$(), seeThruPreds, true);
    return r;
  };
  LL1Analyzer.prototype.nz = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var c = ATNConfig_init_$Create$_0(s, 0, ctx, null, 8, null);
    if (!lookBusy.a(c))
      return Unit_getInstance();
    if (s === stopState) {
      if (ctx == null) {
        look.dh(Companion_getInstance_7().md_1);
        return Unit_getInstance();
      } else if (ensureNotNull(ctx).sm() ? addEOF : false) {
        look.dh(Companion_getInstance_7().od_1);
        return Unit_getInstance();
      }
    }
    if (s instanceof RuleStopState) {
      if (ctx == null) {
        look.dh(Companion_getInstance_7().md_1);
        return Unit_getInstance();
      } else if (ensureNotNull(ctx).sm() ? addEOF : false) {
        look.dh(Companion_getInstance_7().od_1);
        return Unit_getInstance();
      }
      if (!(ctx === Companion_getInstance_23().zs_1)) {
        var removed = calledRuleStack.j(s.wh_1);
        try {
          calledRuleStack.oz(s.wh_1);
          var inductionVariable = 0;
          var last = ensureNotNull(ctx).sc();
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var returnState = this.aq_1.ih_1.j(ensureNotNull(ctx).hy(i));
              this.nz(ensureNotNull(returnState), stopState, ensureNotNull(ctx).gy(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            }
             while (inductionVariable < last);
        }finally {
          if (removed) {
            calledRuleStack.ws(s.wh_1);
          }
        }
        return Unit_getInstance();
      }
    }
    var n = s.gv();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < n)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = s.rj(i_0);
        if (t instanceof RuleTransition) {
          if (calledRuleStack.j(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).qj_1).wh_1)) {
            continue $l$loop;
          }
          var tmp = Companion_getInstance_27();
          var newContext = tmp.qz(ctx, (t instanceof RuleTransition ? t : THROW_CCE()).bk_1.vh_1);
          try {
            calledRuleStack.ws(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).qj_1).wh_1);
            this.nz(ensureNotNull(t.qj_1), stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }finally {
            calledRuleStack.oz(ensureNotNull((t instanceof RuleTransition ? t : THROW_CCE()).qj_1).wh_1);
          }
        } else {
          if (t instanceof AbstractPredicateTransition) {
            if (seeThruPreds) {
              this.nz(ensureNotNull(t.qj_1), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              look.dh(Companion_getInstance_16().kz_1);
            }
          } else {
            if (t.vx()) {
              this.nz(ensureNotNull(t.qj_1), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
            } else {
              if (t instanceof WildcardTransition) {
                look.ck(Companion_getInstance_33().ff(Companion_getInstance_7().nd_1, this.aq_1.hh_1));
              } else {
                var set = t.wx();
                if (!(set == null)) {
                  if (t instanceof NotSetTransition) {
                    set = ensureNotNull(set).pz(Companion_getInstance_33().ff(Companion_getInstance_7().nd_1, this.aq_1.hh_1));
                  }
                  look.ck(set);
                }
              }
            }
          }
        }
      }
       while (inductionVariable_0 < n);
  };
  LL1Analyzer.$metadata$ = classMeta('LL1Analyzer');
  function LexerATNConfig_init_$Init$(state, alt, context, $this) {
    ATNConfig_init_$Init$(state, alt, context, Companion_getInstance_26().tq_1, $this);
    LexerATNConfig.call($this);
    $this.xz_1 = false;
    $this.wz_1 = null;
    return $this;
  }
  function LexerATNConfig_init_$Create$(state, alt, context) {
    return LexerATNConfig_init_$Init$(state, alt, context, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_0(c, state, $this) {
    ATNConfig_init_$Init$_3(c, state, c.qq_1, c.sq_1, $this);
    LexerATNConfig.call($this);
    $this.wz_1 = c.wz_1;
    $this.xz_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_0(c, state) {
    return LexerATNConfig_init_$Init$_0(c, state, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_1(c, state, lexerActionExecutor, $this) {
    ATNConfig_init_$Init$_3(c, state, c.qq_1, c.sq_1, $this);
    LexerATNConfig.call($this);
    $this.wz_1 = lexerActionExecutor;
    $this.xz_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_1(c, state, lexerActionExecutor) {
    return LexerATNConfig_init_$Init$_1(c, state, lexerActionExecutor, Object.create(LexerATNConfig.prototype));
  }
  function LexerATNConfig_init_$Init$_2(c, state, context, $this) {
    ATNConfig_init_$Init$_3(c, state, context, c.sq_1, $this);
    LexerATNConfig.call($this);
    $this.wz_1 = c.wz_1;
    $this.xz_1 = checkNonGreedyDecision($this, c, state);
    return $this;
  }
  function LexerATNConfig_init_$Create$_2(c, state, context) {
    return LexerATNConfig_init_$Init$_2(c, state, context, Object.create(LexerATNConfig.prototype));
  }
  function checkNonGreedyDecision($this, source, target) {
    var tmp;
    if (source.xz_1) {
      tmp = true;
    } else {
      var tmp_0;
      if (target instanceof DecisionState) {
        tmp_0 = (target instanceof DecisionState ? target : THROW_CCE()).mq_1;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  LexerATNConfig.prototype.yz = function () {
    return this.xz_1;
  };
  LexerATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().ar(7);
    hashCode = MurmurHash_getInstance().br(hashCode, this.oq_1.vh_1);
    hashCode = MurmurHash_getInstance().br(hashCode, this.pq_1);
    hashCode = MurmurHash_getInstance().cr(hashCode, this.qq_1);
    hashCode = MurmurHash_getInstance().cr(hashCode, this.sq_1);
    hashCode = MurmurHash_getInstance().br(hashCode, this.xz_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().cr(hashCode, this.wz_1);
    hashCode = MurmurHash_getInstance().dr(hashCode, 6);
    return hashCode;
  };
  LexerATNConfig.prototype.yq = function (other) {
    if (this === other) {
      return true;
    } else {
      if (!(other instanceof LexerATNConfig)) {
        return false;
      }
    }
    var lexerOther = (other == null ? true : other instanceof LexerATNConfig) ? other : THROW_CCE();
    if (!(this.xz_1 === ensureNotNull(lexerOther).xz_1)) {
      return false;
    }
    var tmp;
    if (!Companion_getInstance_34().zz_1.ks(this.wz_1, lexerOther.wz_1)) {
      tmp = false;
    } else {
      tmp = ATNConfig.prototype.yq.call(this, other);
    }
    return tmp;
  };
  function LexerATNConfig() {
  }
  LexerATNConfig.$metadata$ = classMeta('LexerATNConfig', undefined, undefined, undefined, undefined, ATNConfig.prototype);
  function SimState() {
    this.a10_1 = -1;
    this.b10_1 = 0;
    this.c10_1 = -1;
    this.d10_1 = null;
  }
  SimState.prototype.e10 = function () {
    this.a10_1 = -1;
    this.b10_1 = 0;
    this.c10_1 = -1;
    this.d10_1 = null;
  };
  SimState.$metadata$ = classMeta('SimState');
  function Companion_16() {
    Companion_instance_16 = this;
    this.im_1 = false;
    this.jm_1 = false;
    this.km_1 = 0;
    this.lm_1 = 127;
  }
  Companion_16.$metadata$ = objectMeta('Companion');
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    Companion_getInstance_17();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.rl_1 = recog;
    this.sl_1 = decisionToDFA;
    this.tl_1 = -1;
    this.ul_1 = 1;
    this.vl_1 = 0;
    this.wl_1 = Companion_getInstance_5().il_1;
    this.xl_1 = new SimState();
  }
  LexerATNSimulator.prototype.am = function (input, mode) {
    this.wl_1 = mode;
    var mark = input.tc();
    try {
      this.tl_1 = input.rc();
      this.xl_1.e10();
      var dfa = this.sl_1[mode];
      var tmp;
      if (ensureNotNull(dfa).i10_1 == null) {
        tmp = this.l10(input);
      } else {
        var tmp_0 = ensureNotNull(dfa).i10_1;
        tmp = this.k10(input, tmp_0 instanceof DFAState ? tmp_0 : THROW_CCE());
      }
      return tmp;
    }finally {
      input.uc(mark);
    }
  };
  LexerATNSimulator.prototype.l10 = function (input) {
    var startState = this.qh_1.ph_1.j(this.wl_1);
    if (Companion_getInstance_17().im_1) {
      outMessage('matchATN mode ' + this.wl_1 + ' start: ' + startState + '\n');
    }
    var old_mode = this.wl_1;
    var s0_closure = this.m10(input, startState);
    var suppressEdge = s0_closure.qs_1;
    s0_closure.qs_1 = false;
    var next = this.n10(s0_closure);
    if (!suppressEdge) {
      ensureNotNull(this.sl_1[this.wl_1]).i10_1 = next;
    }
    var predict = this.k10(input, next);
    if (Companion_getInstance_17().im_1) {
      outMessage('DFA after matchATN: ' + ensureNotNull(this.sl_1[old_mode]).o10() + '\n');
    }
    return predict;
  };
  LexerATNSimulator.prototype.k10 = function (input, ds0) {
    if (Companion_getInstance_17().im_1) {
      outMessage('start state closure=' + ds0.mx_1 + '\n');
    }
    if (ds0.ox_1) {
      this.p10(this.xl_1, input, ds0);
    }
    var t = input.oc(1);
    var s = ds0;
    $l$loop_0: while (true) {
      if (Companion_getInstance_17().im_1) {
        outMessage('execATN loop starting closure: ' + ensureNotNull(s).mx_1 + '\n');
      }
      var target = this.q10(s, t);
      if (target == null) {
        target = this.r10(input, s, t);
      }
      if (target === Companion_getInstance_14().kx_1) {
        break $l$loop_0;
      }
      if (!(t === Companion_getInstance_4().pc_1)) {
        this.wm(input);
      }
      if (ensureNotNull(target).ox_1) {
        this.p10(this.xl_1, input, target);
        if (t === Companion_getInstance_4().pc_1) {
          break $l$loop_0;
        }
      }
      t = input.oc(1);
      s = target;
    }
    return this.s10(this.xl_1, input, ensureNotNull(ensureNotNull(s).mx_1), t);
  };
  LexerATNSimulator.prototype.q10 = function (s, t) {
    if ((ensureNotNull(s).nx_1 == null ? true : t < Companion_getInstance_17().km_1) ? true : t > Companion_getInstance_17().lm_1) {
      return null;
    }
    var target = ensureNotNull(ensureNotNull(s).nx_1)[t - Companion_getInstance_17().km_1 | 0];
    if (Companion_getInstance_17().im_1 ? !(target == null) : false) {
      outMessage('reuse state ' + ensureNotNull(s).lx_1 + ' edge to ' + ensureNotNull(target).lx_1);
    }
    return target;
  };
  LexerATNSimulator.prototype.r10 = function (input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.t10(input, ensureNotNull(ensureNotNull(s).mx_1), reach, t);
    if (reach.d()) {
      if (!reach.qs_1) {
        this.u10(s, t, Companion_getInstance_14().kx_1);
      }
      return Companion_getInstance_14().kx_1;
    }
    return this.v10(s, t, reach);
  };
  LexerATNSimulator.prototype.s10 = function (prevAccept, input, reach, t) {
    if (!(prevAccept.d10_1 == null)) {
      var lexerActionExecutor = ensureNotNull(prevAccept.d10_1).qx_1;
      this.w10(input, lexerActionExecutor, this.tl_1, prevAccept.a10_1, prevAccept.b10_1, prevAccept.c10_1);
      return ensureNotNull(prevAccept.d10_1).px_1;
    } else {
      if (t === Companion_getInstance_4().pc_1 ? input.rc() === this.tl_1 : false) {
        return Companion_getInstance_7().od_1;
      }
      var tmp = this.rl_1;
      throw new LexerNoViableAltException(tmp instanceof Lexer ? tmp : THROW_CCE(), input, this.tl_1, reach);
    }
  };
  LexerATNSimulator.prototype.t10 = function (input, closure, reach, t) {
    var skipAlt = Companion_getInstance_9().yp_1;
    var tmp0_iterator = closure.e();
    $l$loop: while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var currentAltReachedAcceptState = c.pq_1 === skipAlt;
      var tmp;
      if (currentAltReachedAcceptState) {
        tmp = (c instanceof LexerATNConfig ? c : THROW_CCE()).yz();
      } else {
        tmp = false;
      }
      if (tmp) {
        continue $l$loop;
      }
      if (Companion_getInstance_17().im_1) {
        outMessage('testing ' + this.x10(t) + ' at ' + c.er(this.rl_1, true) + '\n');
      }
      var n = c.oq_1.gv();
      var inductionVariable = 0;
      if (inductionVariable < n)
        $l$loop_0: do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.oq_1.rj(ti);
          var target = this.y10(trans, t);
          if (!(target == null)) {
            var lexerActionExecutor = (c instanceof LexerATNConfig ? c : THROW_CCE()).wz_1;
            if (!(lexerActionExecutor == null)) {
              lexerActionExecutor = ensureNotNull(lexerActionExecutor).b11(input.rc() - this.tl_1 | 0);
            }
            var treatEofAsEpsilon = t === Companion_getInstance_1().ae_1;
            if (this.c11(input, LexerATNConfig_init_$Create$_1(c instanceof LexerATNConfig ? c : THROW_CCE(), target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
              skipAlt = c.pq_1;
              break $l$loop_0;
            }
          }
        }
         while (inductionVariable < n);
    }
  };
  LexerATNSimulator.prototype.w10 = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (Companion_getInstance_17().im_1) {
      outMessage('ACTION ' + lexerActionExecutor + '\n');
    }
    input.vc(index);
    this.ul_1 = line;
    this.vl_1 = charPos;
    if (!(lexerActionExecutor == null) ? !(this.rl_1 == null) : false) {
      ensureNotNull(lexerActionExecutor).d11(this.rl_1, input, startIndex);
    }
  };
  LexerATNSimulator.prototype.y10 = function (trans, t) {
    var tmp;
    if (trans.yx(t, Companion_getInstance_5().nl_1, Companion_getInstance_5().ol_1)) {
      tmp = trans.qj_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  LexerATNSimulator.prototype.m10 = function (input, p) {
    var initialContext = Companion_getInstance_23().zs_1;
    var configs = new OrderedATNConfigSet();
    var inductionVariable = 0;
    var last = p.gv();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.rj(i).qj_1;
        var c = LexerATNConfig_init_$Create$(ensureNotNull(target), i + 1 | 0, initialContext);
        this.c11(input, c, configs, false, false, false);
      }
       while (inductionVariable < last);
    return configs;
  };
  LexerATNSimulator.prototype.c11 = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var currentAltReachedAcceptState_0 = currentAltReachedAcceptState;
    if (Companion_getInstance_17().im_1) {
      println('closure(' + config.er(this.rl_1, true) + ')');
    }
    var tmp = config.oq_1;
    if (tmp instanceof RuleStopState) {
      if (Companion_getInstance_17().im_1) {
        if (!(this.rl_1 == null)) {
          outMessage('closure at ' + ensureNotNull(ensureNotNull(this.rl_1).gj())[config.oq_1.wh_1] + ' rule stop ' + config + '\n');
        } else {
          outMessage('closure at rule stop ' + config + '\n');
        }
      }
      if (config.qq_1 == null ? true : ensureNotNull(config.qq_1).jy()) {
        if (config.qq_1 == null ? true : ensureNotNull(config.qq_1).sm()) {
          configs.xs(config);
          return true;
        } else {
          configs.xs(LexerATNConfig_init_$Create$_2(config, config.oq_1, Companion_getInstance_23().zs_1));
          currentAltReachedAcceptState_0 = true;
        }
      }
      if (!(config.qq_1 == null) ? !ensureNotNull(config.qq_1).sm() : false) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.qq_1).sc();
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (!(ensureNotNull(config.qq_1).hy(i) === Companion_getInstance_23().at_1)) {
              var newContext = ensureNotNull(config.qq_1).gy(i);
              var returnState = this.qh_1.ih_1.j(ensureNotNull(config.qq_1).hy(i));
              var c = LexerATNConfig_init_$Create$_2(config, ensureNotNull(returnState), ensureNotNull(newContext));
              currentAltReachedAcceptState_0 = this.c11(input, c, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
            }
          }
           while (inductionVariable < last);
      }
      return currentAltReachedAcceptState_0;
    }
    if (!config.oq_1.rw()) {
      if (!currentAltReachedAcceptState_0 ? true : !config.yz()) {
        configs.xs(config);
      }
    }
    var p = config.oq_1;
    var inductionVariable_0 = 0;
    var last_0 = p.gv();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var t = p.rj(i_0);
        var c_0 = this.e11(input, config, t, configs, speculative, treatEofAsEpsilon);
        if (!(c_0 == null)) {
          currentAltReachedAcceptState_0 = this.c11(input, c_0, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
        }
      }
       while (inductionVariable_0 < last_0);
    return currentAltReachedAcceptState_0;
  };
  LexerATNSimulator.prototype.e11 = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
    var c = null;
    var tmp0_subject = t.xx();
    if (tmp0_subject === Companion_getInstance_28().ww_1) {
      var ruleTransition = t instanceof RuleTransition ? t : THROW_CCE();
      var newContext = Companion_getInstance_27().qz(config.qq_1, ruleTransition.bk_1.vh_1);
      c = LexerATNConfig_init_$Create$_2(config, ensureNotNull(t.qj_1), newContext);
    } else if (tmp0_subject === Companion_getInstance_28().dx_1)
      throw UnsupportedOperationException_init_$Create$_0('Precedence predicates are not supported in lexers.');
    else if (tmp0_subject === Companion_getInstance_28().xw_1) {
      var pt = t instanceof PredicateTransition ? t : THROW_CCE();
      if (Companion_getInstance_17().im_1) {
        println('EVAL rule ' + pt.pk_1 + ':' + pt.qk_1);
      }
      configs.qs_1 = true;
      if (this.g11(input, pt.pk_1, pt.qk_1, speculative)) {
        c = LexerATNConfig_init_$Create$_0(config, ensureNotNull(t.qj_1));
      }
    } else if (tmp0_subject === Companion_getInstance_28().zw_1)
      if (config.qq_1 == null ? true : ensureNotNull(config.qq_1).jy()) {
        var tmp = Companion_getInstance_18();
        var tmp_0 = ensureNotNull(this.qh_1.oh_1);
        var lexerActionExecutor = tmp.f11(config.wz_1, ensureNotNull(tmp_0[(t instanceof ActionTransition ? t : THROW_CCE()).kw_1]));
        c = LexerATNConfig_init_$Create$_1(config, ensureNotNull(t.qj_1), lexerActionExecutor);
      } else {
        c = LexerATNConfig_init_$Create$_0(config, ensureNotNull(t.qj_1));
      }
     else if (tmp0_subject === Companion_getInstance_28().uw_1)
      c = LexerATNConfig_init_$Create$_0(config, ensureNotNull(t.qj_1));
    else if ((tmp0_subject === Companion_getInstance_28().yw_1 ? true : tmp0_subject === Companion_getInstance_28().vw_1) ? true : tmp0_subject === Companion_getInstance_28().ax_1)
      if (treatEofAsEpsilon) {
        if (t.yx(Companion_getInstance_1().ae_1, Companion_getInstance_5().nl_1, Companion_getInstance_5().ol_1)) {
          c = LexerATNConfig_init_$Create$_0(config, ensureNotNull(t.qj_1));
        }
      }
    return c;
  };
  LexerATNSimulator.prototype.g11 = function (input, ruleIndex, predIndex, speculative) {
    if (this.rl_1 == null) {
      return true;
    }
    if (!speculative) {
      return ensureNotNull(this.rl_1).bn(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.vl_1;
    var savedLine = this.ul_1;
    var index = input.rc();
    var marker = input.tc();
    try {
      this.wm(input);
      return ensureNotNull(this.rl_1).bn(null, ruleIndex, predIndex);
    }finally {
      this.vl_1 = savedCharPositionInLine;
      this.ul_1 = savedLine;
      input.vc(index);
      input.uc(marker);
    }
  };
  LexerATNSimulator.prototype.p10 = function (settings, input, dfaState) {
    settings.a10_1 = input.rc();
    settings.b10_1 = this.ul_1;
    settings.c10_1 = this.vl_1;
    settings.d10_1 = dfaState;
  };
  LexerATNSimulator.prototype.v10 = function (from, t, q) {
    var suppressEdge = q.qs_1;
    q.qs_1 = false;
    var to = this.n10(q);
    if (suppressEdge) {
      return to;
    }
    this.u10(from, t, to);
    return to;
  };
  LexerATNSimulator.prototype.u10 = function (p, t, q) {
    if (t < Companion_getInstance_17().km_1 ? true : t > Companion_getInstance_17().lm_1) {
      return Unit_getInstance();
    }
    if (Companion_getInstance_17().im_1) {
      println('EDGE ' + p + ' -> ' + q + ' upon ' + new Char(numberToChar(t)));
    }
    var tmp$ret$1;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    var tmp0_synchronized = ensureNotNull(p);
    if (ensureNotNull(p).nx_1 == null) {
      var tmp = ensureNotNull(p);
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = (Companion_getInstance_17().lm_1 - Companion_getInstance_17().km_1 | 0) + 1 | 0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp.nx_1 = tmp$ret$0;
    }
    ensureNotNull(ensureNotNull(p).nx_1)[t - Companion_getInstance_17().km_1 | 0] = q;
    tmp$ret$1 = Unit_getInstance();
  };
  LexerATNSimulator.prototype.n10 = function (configs) {
    assert(!configs.qs_1);
    var proposed = DFAState_init_$Create$(configs);
    var firstConfigWithRuleStopState = null;
    var tmp0_iterator = configs.e();
    $l$loop: while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var tmp = c.oq_1;
      if (tmp instanceof RuleStopState) {
        firstConfigWithRuleStopState = c;
        break $l$loop;
      }
    }
    if (!(firstConfigWithRuleStopState == null)) {
      proposed.ox_1 = true;
      var tmp_0 = proposed;
      tmp_0.qx_1 = (firstConfigWithRuleStopState instanceof LexerATNConfig ? firstConfigWithRuleStopState : THROW_CCE()).wz_1;
      proposed.px_1 = ensureNotNull(this.qh_1.nh_1)[ensureNotNull(firstConfigWithRuleStopState).oq_1.wh_1];
    }
    var dfa = this.sl_1[this.wl_1];
    var tmp$ret$0;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    var tmp0_synchronized = ensureNotNull(dfa).h10_1;
    var existing = dfa.h10_1.p1(proposed);
    if (!(existing == null))
      return existing;
    proposed.lx_1 = ensureNotNull(ensureNotNull(dfa).h10_1).h();
    configs.cq(true);
    proposed.mx_1 = configs;
    dfa.h10_1.a2(proposed, proposed);
    return proposed;
  };
  LexerATNSimulator.prototype.wm = function (input) {
    var curChar = input.oc(1);
    if (equals(new Char(numberToChar(curChar)), new Char(_Char___init__impl__6a9atx(10)))) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.ul_1;
      tmp0_this.ul_1 = tmp1 + 1 | 0;
      this.vl_1 = 0;
    } else {
      var tmp2_this = this;
      var tmp3 = tmp2_this.vl_1;
      tmp2_this.vl_1 = tmp3 + 1 | 0;
    }
    input.nc();
  };
  LexerATNSimulator.prototype.x10 = function (t) {
    return t === -1 ? 'EOF' : "'" + new Char(numberToChar(t)) + "'";
  };
  LexerATNSimulator.$metadata$ = classMeta('LexerATNSimulator', undefined, undefined, undefined, undefined, ATNSimulator.prototype);
  function LexerAction() {
  }
  LexerAction.$metadata$ = interfaceMeta('LexerAction');
  function Companion_17() {
    Companion_instance_17 = this;
  }
  Companion_17.prototype.f11 = function (lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [lexerAction];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      return new LexerActionExecutor(tmp$ret$2);
    }
    var lexerActions = copyOf_0(lexerActionExecutor.z10_1, lexerActionExecutor.z10_1.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = filterNotNull(lexerActions);
    tmp$ret$3 = copyToArray(tmp0_toTypedArray);
    return new LexerActionExecutor(tmp$ret$3);
  };
  Companion_17.$metadata$ = objectMeta('Companion');
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function LexerActionExecutor(lexerActions) {
    Companion_getInstance_18();
    this.z10_1 = lexerActions;
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    var indexedObject = this.z10_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var lexerAction = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().cr(hash, lexerAction);
    }
    this.a11_1 = MurmurHash_getInstance().dr(hash, this.z10_1.length);
  }
  LexerActionExecutor.prototype.b11 = function (offset) {
    var updatedLexerActions = null;
    var inductionVariable = 0;
    var last = this.z10_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        if (this.z10_1[i].h11()) {
          var tmp_0 = this.z10_1[i];
          tmp = !(tmp_0 instanceof LexerIndexedCustomAction);
        } else {
          tmp = false;
        }
        if (tmp) {
          if (updatedLexerActions == null) {
            var tmp$ret$1;
            // Inline function 'kotlin.collections.copyOf' call
            var tmp0_copyOf = this.z10_1;
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = tmp0_copyOf;
            tmp$ret$1 = tmp$ret$0.slice();
            updatedLexerActions = tmp$ret$1;
          }
          updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.z10_1[i]);
        }
      }
       while (inductionVariable <= last);
    var tmp_1;
    if (updatedLexerActions == null) {
      tmp_1 = this;
    } else {
      tmp_1 = new LexerActionExecutor(updatedLexerActions);
    }
    return tmp_1;
  };
  LexerActionExecutor.prototype.d11 = function (lexer, input, startIndex) {
    var requiresSeek = false;
    var stopIndex = input.rc();
    try {
      var indexedObject = this.z10_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var lexerAction = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var mutableLexerAction = lexerAction;
        if (mutableLexerAction instanceof LexerIndexedCustomAction) {
          var offset = mutableLexerAction.k11_1;
          input.vc(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.l11_1;
          requiresSeek = !((startIndex + offset | 0) === stopIndex);
        } else {
          if (mutableLexerAction.h11()) {
            input.vc(stopIndex);
            requiresSeek = false;
          }
        }
        mutableLexerAction.i11(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.vc(stopIndex);
      }
    }
  };
  LexerActionExecutor.prototype.hashCode = function () {
    return this.a11_1;
  };
  LexerActionExecutor.prototype.equals = function (other) {
    if (other === this) {
      return true;
    } else {
      if (!(other instanceof LexerActionExecutor)) {
        return false;
      }
    }
    var other1 = (other == null ? true : other instanceof LexerActionExecutor) ? other : THROW_CCE();
    return this.a11_1 === ensureNotNull(other1).a11_1 ? contentEquals(this.z10_1, other1.z10_1) : false;
  };
  LexerActionExecutor.$metadata$ = classMeta('LexerActionExecutor');
  var LexerActionType_CHANNEL_instance;
  var LexerActionType_CUSTOM_instance;
  var LexerActionType_MODE_instance;
  var LexerActionType_MORE_instance;
  var LexerActionType_POP_MODE_instance;
  var LexerActionType_PUSH_MODE_instance;
  var LexerActionType_SKIP_instance;
  var LexerActionType_TYPE_instance;
  function values_0() {
    return [LexerActionType_CHANNEL_getInstance(), LexerActionType_CUSTOM_getInstance(), LexerActionType_MODE_getInstance(), LexerActionType_MORE_getInstance(), LexerActionType_POP_MODE_getInstance(), LexerActionType_PUSH_MODE_getInstance(), LexerActionType_SKIP_getInstance(), LexerActionType_TYPE_getInstance()];
  }
  var LexerActionType_entriesInitialized;
  function LexerActionType_initEntries() {
    if (LexerActionType_entriesInitialized)
      return Unit_getInstance();
    LexerActionType_entriesInitialized = true;
    LexerActionType_CHANNEL_instance = new LexerActionType('CHANNEL', 0);
    LexerActionType_CUSTOM_instance = new LexerActionType('CUSTOM', 1);
    LexerActionType_MODE_instance = new LexerActionType('MODE', 2);
    LexerActionType_MORE_instance = new LexerActionType('MORE', 3);
    LexerActionType_POP_MODE_instance = new LexerActionType('POP_MODE', 4);
    LexerActionType_PUSH_MODE_instance = new LexerActionType('PUSH_MODE', 5);
    LexerActionType_SKIP_instance = new LexerActionType('SKIP', 6);
    LexerActionType_TYPE_instance = new LexerActionType('TYPE', 7);
  }
  function LexerActionType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  LexerActionType.$metadata$ = classMeta('LexerActionType', undefined, undefined, undefined, undefined, Enum.prototype);
  function LexerActionType_CHANNEL_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_CHANNEL_instance;
  }
  function LexerActionType_CUSTOM_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_CUSTOM_instance;
  }
  function LexerActionType_MODE_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_MODE_instance;
  }
  function LexerActionType_MORE_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_MORE_instance;
  }
  function LexerActionType_POP_MODE_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_POP_MODE_instance;
  }
  function LexerActionType_PUSH_MODE_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_PUSH_MODE_instance;
  }
  function LexerActionType_SKIP_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_SKIP_instance;
  }
  function LexerActionType_TYPE_getInstance() {
    LexerActionType_initEntries();
    return LexerActionType_TYPE_instance;
  }
  function LexerChannelAction(channel) {
    this.m11_1 = channel;
  }
  LexerChannelAction.prototype.n11 = function () {
    return LexerActionType_CHANNEL_getInstance();
  };
  LexerChannelAction.prototype.h11 = function () {
    return false;
  };
  LexerChannelAction.prototype.i11 = function (lexer) {
    lexer.dl_1 = this.m11_1;
  };
  LexerChannelAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    hash = MurmurHash_getInstance().br(hash, this.m11_1);
    return MurmurHash_getInstance().dr(hash, 2);
  };
  LexerChannelAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerChannelAction)) {
        return false;
      }
    }
    return this.m11_1 === obj.m11_1;
  };
  LexerChannelAction.prototype.toString = function () {
    return 'channel(' + this.m11_1 + ')';
  };
  LexerChannelAction.$metadata$ = classMeta('LexerChannelAction', [LexerAction]);
  function LexerCustomAction(ruleIndex, actionIndex) {
    this.o11_1 = ruleIndex;
    this.p11_1 = actionIndex;
  }
  LexerCustomAction.prototype.n11 = function () {
    return LexerActionType_CUSTOM_getInstance();
  };
  LexerCustomAction.prototype.h11 = function () {
    return true;
  };
  LexerCustomAction.prototype.i11 = function (lexer) {
    lexer.dn(null, this.o11_1, this.p11_1);
  };
  LexerCustomAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    hash = MurmurHash_getInstance().br(hash, this.o11_1);
    hash = MurmurHash_getInstance().br(hash, this.p11_1);
    return MurmurHash_getInstance().dr(hash, 3);
  };
  LexerCustomAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerCustomAction)) {
        return false;
      }
    }
    var other = (obj == null ? true : obj instanceof LexerCustomAction) ? obj : THROW_CCE();
    return this.o11_1 === ensureNotNull(other).o11_1 ? this.p11_1 === other.p11_1 : false;
  };
  LexerCustomAction.$metadata$ = classMeta('LexerCustomAction', [LexerAction]);
  function LexerIndexedCustomAction(offset, action) {
    this.k11_1 = offset;
    this.l11_1 = action;
  }
  LexerIndexedCustomAction.prototype.h11 = function () {
    return true;
  };
  LexerIndexedCustomAction.prototype.i11 = function (lexer) {
    this.l11_1.i11(lexer);
  };
  LexerIndexedCustomAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.k11_1);
    hash = MurmurHash_getInstance().cr(hash, this.l11_1);
    return MurmurHash_getInstance().dr(hash, 2);
  };
  LexerIndexedCustomAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerIndexedCustomAction)) {
        return false;
      }
    }
    var other = (obj == null ? true : obj instanceof LexerIndexedCustomAction) ? obj : THROW_CCE();
    return this.k11_1 === ensureNotNull(other).k11_1 ? equals(this.l11_1, other.l11_1) : false;
  };
  LexerIndexedCustomAction.$metadata$ = classMeta('LexerIndexedCustomAction', [LexerAction]);
  function LexerModeAction(mode) {
    this.q11_1 = mode;
  }
  LexerModeAction.prototype.n11 = function () {
    return LexerActionType_MODE_getInstance();
  };
  LexerModeAction.prototype.h11 = function () {
    return false;
  };
  LexerModeAction.prototype.i11 = function (lexer) {
    lexer.gm(this.q11_1);
  };
  LexerModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    hash = MurmurHash_getInstance().br(hash, this.q11_1);
    return MurmurHash_getInstance().dr(hash, 2);
  };
  LexerModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerModeAction)) {
        return false;
      }
    }
    return this.q11_1 === obj.q11_1;
  };
  LexerModeAction.prototype.toString = function () {
    return 'mode(' + this.q11_1 + ')';
  };
  LexerModeAction.$metadata$ = classMeta('LexerModeAction', [LexerAction]);
  function Companion_18() {
    Companion_instance_18 = this;
    this.fx_1 = new LexerMoreAction();
  }
  Companion_18.$metadata$ = objectMeta('Companion');
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function LexerMoreAction() {
    Companion_getInstance_19();
  }
  LexerMoreAction.prototype.n11 = function () {
    return LexerActionType_MORE_getInstance();
  };
  LexerMoreAction.prototype.h11 = function () {
    return false;
  };
  LexerMoreAction.prototype.i11 = function (lexer) {
    lexer.fm();
  };
  LexerMoreAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    return MurmurHash_getInstance().dr(hash, 1);
  };
  LexerMoreAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerMoreAction.prototype.toString = function () {
    return 'more';
  };
  LexerMoreAction.$metadata$ = classMeta('LexerMoreAction', [LexerAction]);
  function Companion_19() {
    Companion_instance_19 = this;
    this.gx_1 = new LexerPopModeAction();
  }
  Companion_19.$metadata$ = objectMeta('Companion');
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function LexerPopModeAction() {
    Companion_getInstance_20();
  }
  LexerPopModeAction.prototype.n11 = function () {
    return LexerActionType_POP_MODE_getInstance();
  };
  LexerPopModeAction.prototype.h11 = function () {
    return false;
  };
  LexerPopModeAction.prototype.i11 = function (lexer) {
    lexer.pm();
  };
  LexerPopModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    return MurmurHash_getInstance().dr(hash, 1);
  };
  LexerPopModeAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerPopModeAction.prototype.toString = function () {
    return 'popMode';
  };
  LexerPopModeAction.$metadata$ = classMeta('LexerPopModeAction', [LexerAction]);
  function LexerPushModeAction(mode) {
    this.r11_1 = mode;
  }
  LexerPushModeAction.prototype.n11 = function () {
    return LexerActionType_PUSH_MODE_getInstance();
  };
  LexerPushModeAction.prototype.h11 = function () {
    return false;
  };
  LexerPushModeAction.prototype.i11 = function (lexer) {
    lexer.hm(this.r11_1);
  };
  LexerPushModeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    hash = MurmurHash_getInstance().br(hash, this.r11_1);
    return MurmurHash_getInstance().dr(hash, 2);
  };
  LexerPushModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerPushModeAction)) {
        return false;
      }
    }
    return this.r11_1 === obj.r11_1;
  };
  LexerPushModeAction.prototype.toString = function () {
    return 'pushMode(' + this.r11_1 + ')';
  };
  LexerPushModeAction.$metadata$ = classMeta('LexerPushModeAction', [LexerAction]);
  function Companion_20() {
    Companion_instance_20 = this;
    this.hx_1 = new LexerSkipAction();
  }
  Companion_20.$metadata$ = objectMeta('Companion');
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function LexerSkipAction() {
    Companion_getInstance_21();
  }
  LexerSkipAction.prototype.n11 = function () {
    return LexerActionType_SKIP_getInstance();
  };
  LexerSkipAction.prototype.h11 = function () {
    return false;
  };
  LexerSkipAction.prototype.i11 = function (lexer) {
    lexer.em();
  };
  LexerSkipAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    return MurmurHash_getInstance().dr(hash, 1);
  };
  LexerSkipAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerSkipAction.prototype.toString = function () {
    return 'skip';
  };
  LexerSkipAction.$metadata$ = classMeta('LexerSkipAction', [LexerAction]);
  function LexerTypeAction(type) {
    this.s11_1 = type;
  }
  LexerTypeAction.prototype.n11 = function () {
    return LexerActionType_TYPE_getInstance();
  };
  LexerTypeAction.prototype.h11 = function () {
    return false;
  };
  LexerTypeAction.prototype.i11 = function (lexer) {
    lexer.el_1 = this.s11_1;
  };
  LexerTypeAction.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    hash = MurmurHash_getInstance().br(hash, this.n11().va_1);
    hash = MurmurHash_getInstance().br(hash, this.s11_1);
    return MurmurHash_getInstance().dr(hash, 2);
  };
  LexerTypeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else {
      if (!(obj instanceof LexerTypeAction)) {
        return false;
      }
    }
    return this.s11_1 === obj.s11_1;
  };
  LexerTypeAction.prototype.toString = function () {
    return 'type(' + this.s11_1 + ')';
  };
  LexerTypeAction.$metadata$ = classMeta('LexerTypeAction', [LexerAction]);
  function LoopEndState() {
    ATNState.call(this);
    this.mu_1 = null;
  }
  LoopEndState.prototype.ai = function () {
    return Companion_getInstance_15().ri_1;
  };
  LoopEndState.$metadata$ = classMeta('LoopEndState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function NotSetTransition(target, set) {
    SetTransition.call(this, target, set);
  }
  NotSetTransition.prototype.xx = function () {
    return Companion_getInstance_28().bx_1;
  };
  NotSetTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return (minVocabSymbol <= symbol ? symbol <= maxVocabSymbol : false) ? !SetTransition.prototype.yx.call(this, symbol, minVocabSymbol, maxVocabSymbol) : false;
  };
  NotSetTransition.prototype.toString = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.text.plus' call
    var tmp0_plus = SetTransition.prototype.toString.call(this);
    tmp$ret$0 = '~' + tmp0_plus;
    return tmp$ret$0;
  };
  NotSetTransition.$metadata$ = classMeta('NotSetTransition', undefined, undefined, undefined, undefined, SetTransition.prototype);
  function LexerConfigHashSet() {
    var tmp = Companion_getInstance_34().zz_1;
    AbstractConfigHashSet_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  LexerConfigHashSet.prototype.mr = function (elements) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented');
  };
  LexerConfigHashSet.prototype.u = function (elements) {
    return this.mr(elements);
  };
  LexerConfigHashSet.prototype.y1 = function (elements) {
    return this.mr(elements);
  };
  LexerConfigHashSet.$metadata$ = classMeta('LexerConfigHashSet', undefined, undefined, undefined, undefined, AbstractConfigHashSet.prototype);
  function OrderedATNConfigSet() {
    ATNConfigSet_init_$Init$(false, 1, null, this);
    this.ms_1 = new LexerConfigHashSet();
  }
  OrderedATNConfigSet.$metadata$ = classMeta('OrderedATNConfigSet', undefined, undefined, undefined, undefined, ATNConfigSet.prototype);
  function Companion_21() {
    Companion_instance_21 = this;
    this.d12_1 = false;
    this.e12_1 = false;
    this.f12_1 = false;
    this.g12_1 = false;
  }
  Companion_21.prototype.h12 = function (configs) {
    var alt = Companion_getInstance_9().yp_1;
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      if (alt === Companion_getInstance_9().yp_1) {
        alt = c.pq_1;
      } else if (!(c.pq_1 === alt)) {
        return Companion_getInstance_9().yp_1;
      }
    }
    return alt;
  };
  Companion_21.$metadata$ = objectMeta('Companion');
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ParserATNSimulator(parser, atn, decisionToDFA, sharedContextCache) {
    Companion_getInstance_22();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.k12_1 = parser;
    this.l12_1 = decisionToDFA;
    this.m12_1 = PredictionMode_LL_getInstance();
    this.n12_1 = null;
    this.o12_1 = null;
    this.p12_1 = 0;
    this.q12_1 = null;
    this.r12_1 = null;
  }
  ParserATNSimulator.prototype.s12 = function (input, decision, outerContext) {
    var outerContext_0 = outerContext;
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().e12_1) {
      println('adaptivePredict decision ' + decision + ' exec LA(1)==' + this.t12(input) + ' line ' + ensureNotNull(input.sd(1)).oe() + ':' + ensureNotNull(input.sd(1)).qe());
    }
    this.o12_1 = input;
    this.p12_1 = input.rc();
    this.q12_1 = outerContext_0;
    var dfa = this.l12_1[decision];
    this.r12_1 = dfa;
    var m = input.tc();
    var index = this.p12_1;
    try {
      var s0;
      if (dfa.v12()) {
        s0 = dfa.u12(ensureNotNull(this.k12_1).pn());
      } else {
        s0 = dfa.i10_1;
      }
      if (s0 == null) {
        if (outerContext_0 == null)
          outerContext_0 = get_EMPTY_RULECTX();
        if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().e12_1) {
          var tmp = 'predictATN decision ' + dfa.g10_1 + ' exec LA(1)==' + this.t12(input) + ', outerContext=';
          var tmp_0 = ensureNotNull(outerContext_0);
          outMessage(tmp + tmp_0.mp(this.k12_1, null, 2, null));
        }
        var fullCtx = false;
        var s0_closure = this.w12(dfa.f10_1, get_EMPTY_RULECTX(), fullCtx);
        if (dfa.v12()) {
          ensureNotNull(dfa.i10_1).mx_1 = s0_closure;
          s0_closure = this.y12(s0_closure);
          s0 = this.x12(dfa, DFAState_init_$Create$(s0_closure));
          dfa.z12(ensureNotNull(this.k12_1).pn(), s0);
        } else {
          s0 = this.x12(dfa, DFAState_init_$Create$(s0_closure));
          dfa.i10_1 = s0;
        }
      }
      var alt = this.a13(dfa, s0, input, index, ensureNotNull(outerContext_0));
      if (Companion_getInstance_22().d12_1) {
        outMessage('DFA after predictATN: ' + dfa.fj(ensureNotNull(this.k12_1).lf()));
      }
      return alt;
    }finally {
      this.n12_1 = null;
      this.r12_1 = null;
      input.vc(index);
      input.uc(m);
    }
  };
  ParserATNSimulator.prototype.a13 = function (dfa, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().e12_1) {
      outMessage('execATN decision ' + dfa.g10_1 + ' exec LA(1)==' + this.t12(input) + ' line ' + ensureNotNull(input.sd(1)).oe() + ':' + ensureNotNull(input.sd(1)).qe());
    }
    var previousD = s0;
    if (Companion_getInstance_22().d12_1) {
      println('s0 = ' + s0);
    }
    var t = input.oc(1);
    while (true) {
      var D = this.b13(previousD, t);
      if (D == null) {
        D = this.c13(dfa, previousD, t);
      }
      if (D === Companion_getInstance_14().kx_1) {
        var e = this.d13(input, outerContext, ensureNotNull(previousD.mx_1), startIndex);
        input.vc(startIndex);
        var alt = this.e13(ensureNotNull(previousD.mx_1), outerContext);
        if (!(alt === Companion_getInstance_9().yp_1)) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).rx_1 ? !this.m12_1.equals(PredictionMode_SLL_getInstance()) : false) {
        var conflictingAlts = ensureNotNull(ensureNotNull(D).mx_1).ps_1;
        if (!(ensureNotNull(D).sx_1 == null)) {
          if (Companion_getInstance_22().d12_1) {
            println('DFA state has preds in DFA sim LL failover');
          }
          var conflictIndex = input.rc();
          if (!(conflictIndex === startIndex)) {
            input.vc(startIndex);
          }
          conflictingAlts = this.f13(ensureNotNull(ensureNotNull(D).sx_1), outerContext, true);
          if (conflictingAlts.h13() === 1) {
            if (Companion_getInstance_22().d12_1) {
              println('Full LL avoided');
            }
            return conflictingAlts.g13(0);
          }
          if (!(conflictIndex === startIndex)) {
            input.vc(conflictIndex);
          }
        }
        if (Companion_getInstance_22().f12_1) {
          println('ctx sensitive state ' + outerContext + ' in ' + D);
        }
        var fullCtx = true;
        var s0_closure = this.w12(dfa.f10_1, outerContext, fullCtx);
        this.i13(dfa, ensureNotNull(conflictingAlts), ensureNotNull(ensureNotNull(D).mx_1), startIndex, input.rc());
        return this.j13(dfa, D, s0_closure, input, startIndex, outerContext);
      }
      if (ensureNotNull(D).ox_1) {
        if (ensureNotNull(D).sx_1 == null) {
          return ensureNotNull(D).px_1;
        }
        var stopIndex = input.rc();
        input.vc(startIndex);
        var alts = this.f13(ensureNotNull(ensureNotNull(D).sx_1), outerContext, true);
        var tmp0_subject = alts.h13();
        switch (tmp0_subject) {
          case 0:
            throw this.d13(input, outerContext, ensureNotNull(ensureNotNull(D).mx_1), startIndex);
          case 1:
            return alts.g13(0);
          default:
            this.k13(dfa, D, startIndex, stopIndex, false, alts, ensureNotNull(ensureNotNull(D).mx_1));
            return alts.g13(0);
        }
      }
      previousD = D;
      if (!(t === Companion_getInstance_4().pc_1)) {
        input.nc();
        t = input.oc(1);
      }
    }
  };
  ParserATNSimulator.prototype.b13 = function (previousD, t) {
    var edges = previousD.nx_1;
    var tmp;
    if ((edges == null ? true : (t + 1 | 0) < 0) ? true : (t + 1 | 0) >= ensureNotNull(edges).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(edges)[t + 1 | 0];
    }
    return tmp;
  };
  ParserATNSimulator.prototype.c13 = function (dfa, previousD, t) {
    var reach = this.l13(ensureNotNull(previousD.mx_1), t, false);
    if (reach == null) {
      this.m13(dfa, previousD, t, Companion_getInstance_14().kx_1);
      return Companion_getInstance_14().kx_1;
    }
    var D = DFAState_init_$Create$(reach);
    var predictedAlt = Companion_getInstance_22().h12(ensureNotNull(reach));
    if (Companion_getInstance_22().d12_1) {
      var altSubSets = Companion_getInstance_25().n13(ensureNotNull(reach));
      println('SLL altSubSets=' + altSubSets + ', configs=' + reach + ', predict=' + predictedAlt + ', allSubsetsConflict=' + Companion_getInstance_25().o13(altSubSets) + ', conflictingAlts=' + this.p13(reach));
    }
    if (!(predictedAlt === Companion_getInstance_9().yp_1)) {
      ensureNotNull(D).ox_1 = true;
      ensureNotNull(ensureNotNull(D).mx_1).os_1 = predictedAlt;
      ensureNotNull(D).px_1 = predictedAlt;
    } else if (Companion_getInstance_25().q13(this.m12_1, reach)) {
      ensureNotNull(ensureNotNull(D).mx_1).ps_1 = this.p13(reach);
      ensureNotNull(D).rx_1 = true;
      ensureNotNull(D).ox_1 = true;
      ensureNotNull(D).px_1 = ensureNotNull(ensureNotNull(ensureNotNull(D).mx_1).ps_1).g13(0);
    }
    if (ensureNotNull(D).ox_1 ? ensureNotNull(ensureNotNull(D).mx_1).qs_1 : false) {
      this.r13(D, this.qh_1.nq(dfa.g10_1));
      if (!(ensureNotNull(D).sx_1 == null)) {
        ensureNotNull(D).px_1 = Companion_getInstance_9().yp_1;
      }
    }
    D = this.m13(dfa, previousD, t, D);
    return D;
  };
  ParserATNSimulator.prototype.r13 = function (dfaState, decisionState) {
    var nalts = ensureNotNull(decisionState).gv();
    var altsToCollectPredsFrom = this.s13(ensureNotNull(dfaState.mx_1));
    var altToPred = this.t13(altsToCollectPredsFrom, ensureNotNull(dfaState.mx_1), nalts);
    if (!(altToPred == null)) {
      dfaState.sx_1 = this.u13(altsToCollectPredsFrom, altToPred);
      dfaState.px_1 = Companion_getInstance_9().yp_1;
    } else {
      dfaState.px_1 = altsToCollectPredsFrom.g13(0);
    }
  };
  ParserATNSimulator.prototype.j13 = function (dfa, D, s0, input, startIndex, outerContext) {
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().e12_1) {
      println('execATNWithFullContext ' + s0);
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach = null;
    var previous = s0;
    input.vc(startIndex);
    var t = input.oc(1);
    var predictedAlt;
    $l$loop_1: while (true) {
      reach = this.l13(previous, t, fullCtx);
      if (reach == null) {
        var e = this.d13(input, outerContext, previous, startIndex);
        input.vc(startIndex);
        var alt = this.e13(previous, outerContext);
        if (!(alt === Companion_getInstance_9().yp_1)) {
          return alt;
        }
        throw e;
      }
      var altSubSets = Companion_getInstance_25().n13(ensureNotNull(reach));
      if (Companion_getInstance_22().d12_1) {
        println('LL altSubSets=' + altSubSets + ', predict=' + Companion_getInstance_25().v13(altSubSets) + ', resolvesToJustOneViableAlt=' + Companion_getInstance_25().w13(altSubSets));
      }
      ensureNotNull(reach).os_1 = Companion_getInstance_22().h12(ensureNotNull(reach));
      if (!(ensureNotNull(reach).os_1 === Companion_getInstance_9().yp_1)) {
        predictedAlt = ensureNotNull(reach).os_1;
        break $l$loop_1;
      }
      if (!this.m12_1.equals(PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance())) {
        predictedAlt = Companion_getInstance_25().w13(altSubSets);
        if (!(predictedAlt === Companion_getInstance_9().yp_1)) {
          break $l$loop_1;
        }
      } else {
        if (Companion_getInstance_25().o13(altSubSets) ? Companion_getInstance_25().y13(altSubSets) : false) {
          foundExactAmbig = true;
          predictedAlt = Companion_getInstance_25().x13(altSubSets);
          break $l$loop_1;
        }
      }
      previous = reach;
      if (!(t === Companion_getInstance_4().pc_1)) {
        input.nc();
        t = input.oc(1);
      }
    }
    if (!(ensureNotNull(reach).os_1 === Companion_getInstance_9().yp_1)) {
      this.z13(dfa, predictedAlt, reach, startIndex, input.rc());
      return predictedAlt;
    }
    this.k13(dfa, D, startIndex, input.rc(), foundExactAmbig, ensureNotNull(reach).us(), reach);
    return predictedAlt;
  };
  ParserATNSimulator.prototype.l13 = function (closure, t, fullCtx) {
    if (Companion_getInstance_22().d12_1) {
      println('in computeReachSet, starting closure: ' + closure);
    }
    if (this.n12_1 == null) {
      this.n12_1 = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    var tmp0_iterator = closure.e();
    $l$loop: while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      if (Companion_getInstance_22().d12_1) {
        println('testing ' + this.x10(t) + ' at ' + c.toString());
      }
      var tmp = c.oq_1;
      if (tmp instanceof RuleStopState) {
        assert(ensureNotNull(c.qq_1).sm());
        if (fullCtx ? true : t === Companion_getInstance_4().pc_1) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList_init_$Create$_0();
          }
          skippedStopStates.a(c);
        }
        continue $l$loop;
      }
      var n = c.oq_1.gv();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var ti = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var trans = c.oq_1.rj(ti);
          var target = this.y10(trans, t);
          if (!(target == null)) {
            intermediate.ys(ATNConfig_init_$Create$_3(c, target, null, null, 12, null), this.n12_1);
          }
        }
         while (inductionVariable < n);
    }
    var reach = null;
    if (skippedStopStates == null ? !(t === Companion_getInstance_7().od_1) : false) {
      if (intermediate.h() === 1) {
        reach = intermediate;
      } else if (!(Companion_getInstance_22().h12(intermediate) === Companion_getInstance_9().yp_1)) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet_init_$Create$();
      var treatEofAsEpsilon = t === Companion_getInstance_7().od_1;
      var tmp2_iterator = intermediate.e();
      while (tmp2_iterator.f()) {
        var c_0 = tmp2_iterator.g();
        this.a14(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === Companion_getInstance_4().pc_1) {
      reach = this.b14(reach, reach === intermediate);
    }
    if (!(skippedStopStates == null) ? !fullCtx ? true : !Companion_getInstance_25().c14(ensureNotNull(reach)) : false) {
      assert(!skippedStopStates.d());
      var tmp3_iterator = skippedStopStates.e();
      while (tmp3_iterator.f()) {
        var c_1 = tmp3_iterator.g();
        ensureNotNull(reach).ys(c_1, this.n12_1);
      }
    }
    return ensureNotNull(reach).d() ? null : reach;
  };
  ParserATNSimulator.prototype.b14 = function (configs, lookToEndOfRule) {
    if (Companion_getInstance_25().d14(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.ls_1);
    var tmp0_iterator = configs.e();
    $l$loop: while (tmp0_iterator.f()) {
      var config = tmp0_iterator.g();
      var tmp = config.oq_1;
      if (tmp instanceof RuleStopState) {
        result.ys(config, this.n12_1);
        continue $l$loop;
      }
      if (lookToEndOfRule ? config.oq_1.rw() : false) {
        var nextTokens = this.qh_1.th(config.oq_1);
        if (ensureNotNull(nextTokens).bh(Companion_getInstance_7().md_1)) {
          var endOfRuleState = ensureNotNull(this.qh_1.lh_1)[config.oq_1.wh_1];
          var tmp_0 = ensureNotNull(endOfRuleState);
          result.ys(ATNConfig_init_$Create$_3(config, tmp_0, null, null, 12, null), this.n12_1);
        }
      }
    }
    return result;
  };
  ParserATNSimulator.prototype.w12 = function (p, ctx, fullCtx) {
    var initialContext = Companion_getInstance_23().mz(this.qh_1, ctx);
    var configs = new ATNConfigSet(fullCtx);
    var inductionVariable = 0;
    var last = p.gv();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var target = p.rj(i).qj_1;
        var tmp = ensureNotNull(target);
        var tmp_0 = i + 1 | 0;
        var c = ATNConfig_init_$Create$_0(tmp, tmp_0, initialContext, null, 8, null);
        var closureBusy = HashSet_init_$Create$();
        this.a14(c, configs, closureBusy, true, fullCtx, false);
      }
       while (inductionVariable < last);
    return configs;
  };
  ParserATNSimulator.prototype.y12 = function (configs) {
    var statesFromAlt1 = HashMap_init_$Create$();
    var configSet = new ATNConfigSet(configs.ls_1);
    var tmp0_iterator = configs.e();
    $l$loop_0: while (tmp0_iterator.f()) {
      var config = tmp0_iterator.g();
      if (!(config.pq_1 === 1)) {
        continue $l$loop_0;
      }
      var tmp1_elvis_lhs = ensureNotNull(config.sq_1).e14(ensureNotNull(this.k12_1), ensureNotNull(this.q12_1));
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var updatedContext = tmp;
      statesFromAlt1.a2(config.oq_1.vh_1, ensureNotNull(config.qq_1));
      if (!(updatedContext === config.sq_1)) {
        configSet.ys(ATNConfig_init_$Create$_2(config, updatedContext), this.n12_1);
      } else {
        configSet.ys(config, this.n12_1);
      }
    }
    var tmp2_iterator = configs.e();
    $l$loop_2: while (tmp2_iterator.f()) {
      var config_0 = tmp2_iterator.g();
      if (config_0.pq_1 === 1) {
        continue $l$loop_2;
      }
      if (!config_0.xq()) {
        var context = statesFromAlt1.p1(config_0.oq_1.vh_1);
        if (!(context == null) ? equals(context, config_0.qq_1) : false) {
          continue $l$loop_2;
        }
      }
      configSet.ys(config_0, this.n12_1);
    }
    return configSet;
  };
  ParserATNSimulator.prototype.y10 = function (trans, ttype) {
    var tmp;
    if (trans.yx(ttype, 0, this.qh_1.hh_1)) {
      tmp = trans.qj_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  ParserATNSimulator.prototype.t13 = function (ambigAlts, configs, nalts) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = nalts + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var altToPred = tmp$ret$0;
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      if (ambigAlts.j(c.pq_1)) {
        ensureNotNull(altToPred)[c.pq_1] = Companion_getInstance_26().f14(ensureNotNull(altToPred)[c.pq_1], c.sq_1);
      }
    }
    var nPredAlts = 0;
    var inductionVariable = 1;
    if (inductionVariable <= nalts)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (ensureNotNull(altToPred)[i] == null) {
          altToPred[i] = Companion_getInstance_26().tq_1;
        } else if (!(altToPred[i] === Companion_getInstance_26().tq_1)) {
          var tmp2 = nPredAlts;
          nPredAlts = tmp2 + 1 | 0;
        }
      }
       while (!(i === nalts));
    if (nPredAlts === 0)
      altToPred = null;
    if (Companion_getInstance_22().d12_1) {
      var tmp = ensureNotNull(altToPred);
      println('getPredsForAmbigAlts result ' + joinToString$default_0(tmp, null, null, null, 0, null, null, 63, null));
    }
    return altToPred;
  };
  ParserATNSimulator.prototype.u13 = function (ambigAlts, altToPred) {
    var pairs = ArrayList_init_$Create$_0();
    var containsPredicate = false;
    var inductionVariable = 1;
    var last = altToPred.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var pred = altToPred[i];
        assert(!(pred == null));
        if (!(ambigAlts == null) ? ambigAlts.j(i) : false) {
          pairs.a(new PredPrediction(ensureNotNull(pred), i));
        }
        if (!(pred === Companion_getInstance_26().tq_1))
          containsPredicate = true;
      }
       while (inductionVariable < last);
    var tmp;
    if (!containsPredicate) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$0 = copyToArray(pairs);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  ParserATNSimulator.prototype.e13 = function (configs, outerContext) {
    var sets = this.g14(configs, outerContext);
    var semValidConfigs = sets.p3_1;
    var semInvalidConfigs = sets.q3_1;
    var alt = this.h14(ensureNotNull(semValidConfigs));
    if (!(alt === Companion_getInstance_9().yp_1)) {
      return alt;
    }
    if (ensureNotNull(semInvalidConfigs).h() > 0) {
      alt = this.h14(ensureNotNull(semInvalidConfigs));
      if (!(alt === Companion_getInstance_9().yp_1)) {
        return alt;
      }
    }
    return Companion_getInstance_9().yp_1;
  };
  ParserATNSimulator.prototype.h14 = function (configs) {
    var alts = IntervalSet_init_$Create$_0(new Int32Array([]));
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var tmp;
      if (c.vq() > 0) {
        tmp = true;
      } else {
        var tmp_0;
        var tmp_1 = c.oq_1;
        if (tmp_1 instanceof RuleStopState) {
          tmp_0 = ensureNotNull(c.qq_1).jy();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        alts.dh(c.pq_1);
      }
    }
    return alts.sc() === 0 ? Companion_getInstance_9().yp_1 : alts.tj();
  };
  ParserATNSimulator.prototype.g14 = function (configs, outerContext) {
    var succeeded = new ATNConfigSet(configs.ls_1);
    var failed = new ATNConfigSet(configs.ls_1);
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      if (!(c.sq_1 === Companion_getInstance_26().tq_1)) {
        var predicateEvaluationResult = this.i14(c.sq_1, outerContext, c.pq_1, configs.ls_1);
        if (predicateEvaluationResult) {
          succeeded.xs(c);
        } else {
          failed.xs(c);
        }
      } else {
        succeeded.xs(c);
      }
    }
    return new Pair(succeeded, failed);
  };
  ParserATNSimulator.prototype.f13 = function (predPredictions, outerContext, complete) {
    var predictions = BitSet_init_$Create$();
    var indexedObject = predPredictions;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop_1: while (inductionVariable < last) {
      var pair = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (ensureNotNull(pair).j14_1 === Companion_getInstance_26().tq_1) {
        predictions.ws(ensureNotNull(ensureNotNull(pair).k14_1));
        if (!complete) {
          break $l$loop_1;
        }
        continue $l$loop_1;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.i14(ensureNotNull(pair).j14_1, outerContext, pair.k14_1, fullCtx);
      if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().f12_1) {
        println('eval pred ' + pair + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().f12_1) {
          outMessage('PREDICT ' + pair.k14_1);
        }
        predictions.ws(pair.k14_1);
        if (!complete) {
          break $l$loop_1;
        }
      }
    }
    return predictions;
  };
  ParserATNSimulator.prototype.i14 = function (pred, parserCallStack, alt, fullCtx) {
    return ensureNotNull(pred).l14(ensureNotNull(this.k12_1), ensureNotNull(parserCallStack));
  };
  ParserATNSimulator.prototype.a14 = function (config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.m14(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    assert(!fullCtx ? true : !configs.rs_1);
  };
  ParserATNSimulator.prototype.m14 = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    if (Companion_getInstance_22().d12_1) {
      println('closure(' + config.er(this.k12_1, true) + ')');
    }
    var tmp = config.oq_1;
    if (tmp instanceof RuleStopState) {
      if (!ensureNotNull(config.qq_1).sm()) {
        var inductionVariable = 0;
        var last = ensureNotNull(config.qq_1).sc();
        if (inductionVariable < last)
          $l$loop_0: do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (ensureNotNull(config.qq_1).hy(i) === Companion_getInstance_23().at_1) {
              if (fullCtx) {
                var tmp_0 = Companion_getInstance_23().zs_1;
                configs.ys(ATNConfig_init_$Create$_3(config, config.oq_1, tmp_0, null, 8, null), this.n12_1);
                continue $l$loop_0;
              } else {
                if (Companion_getInstance_22().d12_1) {
                  println('FALLING off rule ' + this.n14(config.oq_1.wh_1));
                }
                this.o14(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
              }
              continue $l$loop_0;
            }
            var returnState = this.qh_1.ih_1.j(ensureNotNull(config.qq_1).hy(i));
            var newContext = ensureNotNull(config.qq_1).gy(i);
            var c = ATNConfig_init_$Create$(ensureNotNull(returnState), config.pq_1, ensureNotNull(newContext), ensureNotNull(config.sq_1));
            c.rq_1 = config.rq_1;
            assert(depth > IntCompanionObject_getInstance().n_1);
            this.m14(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
          }
           while (inductionVariable < last);
        return Unit_getInstance();
      } else if (fullCtx) {
        configs.ys(config, this.n12_1);
        return Unit_getInstance();
      } else {
        if (Companion_getInstance_22().d12_1) {
          println('FALLING off rule ' + this.n14(config.oq_1.wh_1));
        }
      }
    }
    this.o14(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  };
  ParserATNSimulator.prototype.o14 = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var p = config.oq_1;
    if (!p.rw()) {
      configs.ys(config, this.n12_1);
    }
    var inductionVariable = 0;
    var last = p.gv();
    if (inductionVariable < last)
      $l$loop_1: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === 0 ? this.p14(config) : false)
          continue $l$loop_1;
        var t = p.rj(i);
        var tmp;
        if (!(t instanceof ActionTransition)) {
          tmp = collectPredicates;
        } else {
          tmp = false;
        }
        var continueCollecting = tmp;
        var c = this.q14(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
        if (!(c == null)) {
          var newDepth = depth;
          var tmp_0 = config.oq_1;
          if (tmp_0 instanceof RuleStopState) {
            assert(!fullCtx);
            if (!(this.r12_1 == null) ? ensureNotNull(this.r12_1).v12() : false) {
              var outermostPrecedenceReturn = (t instanceof EpsilonTransition ? t : THROW_CCE()).jz();
              if (outermostPrecedenceReturn === ensureNotNull(this.r12_1).f10_1.wh_1) {
                ensureNotNull(c).wq(true);
              }
            }
            var tmp1_this = ensureNotNull(c);
            var tmp2 = tmp1_this.rq_1;
            tmp1_this.rq_1 = tmp2 + 1 | 0;
            if (!closureBusy.a(c)) {
              continue $l$loop_1;
            }
            configs.rs_1 = true;
            assert(newDepth > IntCompanionObject_getInstance().n_1);
            var tmp3 = newDepth;
            newDepth = tmp3 - 1 | 0;
            if (Companion_getInstance_22().d12_1) {
              println('dips into outer ctx: ' + ensureNotNull(c));
            }
          } else {
            if (!t.vx() ? !closureBusy.a(c) : false) {
              continue $l$loop_1;
            }
            if (t instanceof RuleTransition) {
              if (newDepth >= 0) {
                var tmp4 = newDepth;
                newDepth = tmp4 + 1 | 0;
              }
            }
          }
          this.m14(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
        }
      }
       while (inductionVariable < last);
  };
  ParserATNSimulator.prototype.p14 = function (config) {
    var p = config.oq_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    if (!(p.ai() === Companion_getInstance_15().pi_1)) {
      tmp_1 = true;
    } else {
      tmp_1 = !(p instanceof StarLoopEntryState ? p : THROW_CCE()).xv_1;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = ensureNotNull(config.qq_1).sm();
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = ensureNotNull(config.qq_1).jy();
    }
    if (tmp) {
      return false;
    }
    var numCtxs = ensureNotNull(config.qq_1).sc();
    var inductionVariable = 0;
    if (inductionVariable < numCtxs)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var returnState = this.qh_1.ih_1.j(ensureNotNull(config.qq_1).hy(i));
        if (!(ensureNotNull(returnState).wh_1 === p.wh_1))
          return false;
      }
       while (inductionVariable < numCtxs);
    var tmp_2 = p.rj(0).qj_1;
    var decisionStartState = tmp_2 instanceof BlockStartState ? tmp_2 : THROW_CCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.vu_1).vh_1;
    var tmp_3 = this.qh_1.ih_1.j(blockEndStateNum);
    var blockEndState = tmp_3 instanceof BlockEndState ? tmp_3 : THROW_CCE();
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < numCtxs)
      $l$loop_2: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var returnStateNumber = ensureNotNull(config.qq_1).hy(i_0);
        var returnState_0 = this.qh_1.ih_1.j(returnStateNumber);
        if (!(ensureNotNull(returnState_0).gv() === 1) ? true : !returnState_0.rj(0).vx()) {
          return false;
        }
        var returnStateTarget = ensureNotNull(returnState_0).rj(0).qj_1;
        if (returnState_0.ai() === Companion_getInstance_15().ni_1 ? returnStateTarget === p : false) {
          continue $l$loop_2;
        }
        if (returnState_0 === blockEndState) {
          continue $l$loop_2;
        }
        if (returnStateTarget === blockEndState) {
          continue $l$loop_2;
        }
        if (((ensureNotNull(returnStateTarget).ai() === Companion_getInstance_15().ni_1 ? returnStateTarget.gv() === 1 : false) ? returnStateTarget.rj(0).vx() : false) ? returnStateTarget.rj(0).qj_1 === p : false) {
          continue $l$loop_2;
        }
        return false;
      }
       while (inductionVariable_0 < numCtxs);
    return true;
  };
  ParserATNSimulator.prototype.n14 = function (index) {
    return (!(this.k12_1 == null) ? index >= 0 : false) ? ensureNotNull(ensureNotNull(this.k12_1).gj())[index] : '<rule ' + index + '>';
  };
  ParserATNSimulator.prototype.q14 = function (config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    var tmp0_subject = t.xx();
    if (tmp0_subject === Companion_getInstance_28().ww_1) {
      return this.u14(config, t instanceof RuleTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_28().dx_1) {
      return this.t14(config, t instanceof PrecedencePredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_28().xw_1) {
      return this.s14(config, t instanceof PredicateTransition ? t : THROW_CCE(), collectPredicates, inContext, fullCtx);
    } else if (tmp0_subject === Companion_getInstance_28().zw_1) {
      return this.r14(config, t instanceof ActionTransition ? t : THROW_CCE());
    } else if (tmp0_subject === Companion_getInstance_28().uw_1) {
      var tmp = ensureNotNull(t.qj_1);
      return ATNConfig_init_$Create$_3(config, tmp, null, null, 12, null);
    } else if ((tmp0_subject === Companion_getInstance_28().yw_1 ? true : tmp0_subject === Companion_getInstance_28().vw_1) ? true : tmp0_subject === Companion_getInstance_28().ax_1) {
      if (treatEofAsEpsilon) {
        if (t.yx(Companion_getInstance_7().od_1, 0, 1)) {
          var tmp_0 = ensureNotNull(t.qj_1);
          return ATNConfig_init_$Create$_3(config, tmp_0, null, null, 12, null);
        }
      }
      return null;
    } else
      return null;
  };
  ParserATNSimulator.prototype.r14 = function (config, t) {
    if (Companion_getInstance_22().d12_1) {
      println('ACTION edge ' + t.jw_1 + ':' + t.kw_1);
    }
    var tmp = ensureNotNull(t.qj_1);
    return ATNConfig_init_$Create$_3(config, tmp, null, null, 12, null);
  };
  ParserATNSimulator.prototype.t14 = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_22().d12_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt.w14_1 + '>=_p' + ', ctx dependent=true');
      if (!(this.k12_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.k12_1).rn());
      }
    }
    var c = null;
    if (collectPredicates ? inContext : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.o12_1).rc();
        ensureNotNull(this.o12_1).vc(this.p12_1);
        var predSucceeds = this.i14(pt.x14(), this.q12_1, config.pq_1, fullCtx);
        ensureNotNull(this.o12_1).vc(currentPosition);
        if (predSucceeds) {
          var tmp = ensureNotNull(pt.qj_1);
          c = ATNConfig_init_$Create$_3(config, tmp, null, null, 12, null);
        }
      } else {
        var newSemCtx = Companion_getInstance_26().y14(config.sq_1, pt.x14());
        c = ATNConfig_init_$Create$_1(config, ensureNotNull(pt.qj_1), ensureNotNull(newSemCtx));
      }
    } else {
      var tmp_0 = ensureNotNull(pt.qj_1);
      c = ATNConfig_init_$Create$_3(config, tmp_0, null, null, 12, null);
    }
    if (Companion_getInstance_22().d12_1) {
      println('config from pred transition=' + ensureNotNull(c));
    }
    return c;
  };
  ParserATNSimulator.prototype.s14 = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (Companion_getInstance_22().d12_1) {
      println('PRED (collectPredicates=' + collectPredicates + ') ' + pt.pk_1 + ':' + pt.qk_1 + ', ctx dependent=' + pt.rk_1);
      if (!(this.k12_1 == null)) {
        outMessage('context surrounding pred is ' + ensureNotNull(this.k12_1).rn());
      }
    }
    var c = null;
    if (collectPredicates ? !pt.rk_1 ? true : pt.rk_1 ? inContext : false : false) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this.o12_1).rc();
        ensureNotNull(this.o12_1).vc(this.p12_1);
        var predSucceeds = this.i14(pt.x14(), this.q12_1, config.pq_1, fullCtx);
        ensureNotNull(this.o12_1).vc(currentPosition);
        if (predSucceeds) {
          var tmp = ensureNotNull(pt.qj_1);
          c = ATNConfig_init_$Create$_3(config, tmp, null, null, 12, null);
        }
      } else {
        var newSemCtx = Companion_getInstance_26().y14(config.sq_1, pt.x14());
        c = ATNConfig_init_$Create$_1(config, ensureNotNull(pt.qj_1), ensureNotNull(newSemCtx));
      }
    } else {
      var tmp_0 = ensureNotNull(pt.qj_1);
      c = ATNConfig_init_$Create$_3(config, tmp_0, null, null, 12, null);
    }
    if (Companion_getInstance_22().d12_1) {
      println('config from pred transition=' + ensureNotNull(c));
    }
    return c;
  };
  ParserATNSimulator.prototype.u14 = function (config, t) {
    if (Companion_getInstance_22().d12_1) {
      println('CALL rule ' + this.n14(ensureNotNull(t.qj_1).wh_1) + ', ctx=' + config.qq_1);
    }
    var returnState = t.bk_1;
    var newContext = Companion_getInstance_27().qz(config.qq_1, returnState.vh_1);
    var tmp = ensureNotNull(t.qj_1);
    return ATNConfig_init_$Create$_3(config, tmp, newContext, null, 8, null);
  };
  ParserATNSimulator.prototype.p13 = function (configs) {
    var altsets = Companion_getInstance_25().n13(ensureNotNull(configs));
    return Companion_getInstance_25().z14(altsets);
  };
  ParserATNSimulator.prototype.s13 = function (configs) {
    var conflictingAlts;
    if (!(configs.os_1 === Companion_getInstance_9().yp_1)) {
      conflictingAlts = BitSet_init_$Create$();
      conflictingAlts.ws(configs.os_1);
    } else {
      conflictingAlts = configs.ps_1;
    }
    return ensureNotNull(conflictingAlts);
  };
  ParserATNSimulator.prototype.x10 = function (t) {
    if (t === Companion_getInstance_7().od_1) {
      return 'EOF';
    }
    var vocabulary = !(this.k12_1 == null) ? ensureNotNull(this.k12_1).lf() : Companion_getInstance_8().rp_1;
    var displayName = vocabulary.mf(t);
    var tmp;
    if (displayName === t.toString()) {
      tmp = displayName;
    } else {
      tmp = displayName + '<' + t + '>';
    }
    return tmp;
  };
  ParserATNSimulator.prototype.t12 = function (input) {
    return this.x10(input.oc(1));
  };
  ParserATNSimulator.prototype.d13 = function (input, outerContext, configs, startIndex) {
    return new NoViableAltException(ensureNotNull(this.k12_1), input, input.j(startIndex), input.sd(1), configs, outerContext);
  };
  ParserATNSimulator.prototype.m13 = function (dfa, from, t, to) {
    var to_0 = to;
    if (Companion_getInstance_22().d12_1) {
      println('EDGE ' + from + ' -> ' + to_0 + ' upon ' + this.x10(t));
    }
    if (to_0 == null) {
      return null;
    }
    to_0 = this.x12(dfa, to_0);
    if ((from == null ? true : t < -1) ? true : t > this.qh_1.hh_1) {
      return to_0;
    }
    var tmp$ret$1;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    if (ensureNotNull(from).nx_1 == null) {
      var tmp = ensureNotNull(from);
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp0_arrayOfNulls = (this.qh_1.hh_1 + 1 | 0) + 1 | 0;
      tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
      tmp.nx_1 = tmp$ret$0;
    }
    ensureNotNull(ensureNotNull(from).nx_1)[t + 1 | 0] = to_0;
    tmp$ret$1 = Unit_getInstance();
    if (Companion_getInstance_22().d12_1) {
      outMessage('DFA=\n' + dfa.fj(!(this.k12_1 == null) ? ensureNotNull(this.k12_1).lf() : Companion_getInstance_8().rp_1));
    }
    return to_0;
  };
  ParserATNSimulator.prototype.x12 = function (dfa, D) {
    if (D === Companion_getInstance_14().kx_1) {
      return D;
    }
    var tmp$ret$0;
    // Inline function 'com.strumenta.kotlinmultiplatform.synchronized' call
    var tmp0_synchronized = dfa.h10_1;
    var existing = dfa.h10_1.p1(D);
    if (!(existing == null))
      return existing;
    D.lx_1 = dfa.h10_1.h();
    if (!ensureNotNull(D.mx_1).ts_1) {
      ensureNotNull(D.mx_1).et(this);
      ensureNotNull(D.mx_1).cq(true);
    }
    dfa.h10_1.a2(D, D);
    if (Companion_getInstance_22().d12_1) {
      println('adding new DFA state: ' + D);
    }
    return D;
  };
  ParserATNSimulator.prototype.i13 = function (dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().g12_1) {
      var interval = Companion_getInstance_32().ff(startIndex, stopIndex);
      outMessage('reportAttemptingFullContext decision=' + dfa.g10_1 + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.k12_1).on()).wc(interval));
    }
    if (!(this.k12_1 == null)) {
      ensureNotNull(this.k12_1).ym().zb(this.k12_1, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  ParserATNSimulator.prototype.z13 = function (dfa, prediction, configs, startIndex, stopIndex) {
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().g12_1) {
      var interval = Companion_getInstance_32().ff(startIndex, stopIndex);
      outMessage('reportContextSensitivity decision=' + dfa.g10_1 + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.k12_1).on()).wc(interval));
    }
    if (!(this.k12_1 == null)) {
      ensureNotNull(this.k12_1).ym().ac(this.k12_1, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  ParserATNSimulator.prototype.k13 = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (Companion_getInstance_22().d12_1 ? true : Companion_getInstance_22().g12_1) {
      var interval = Companion_getInstance_32().ff(startIndex, stopIndex);
      println('reportAmbiguity ' + ambigAlts + ':' + configs + ', input=' + ensureNotNull(ensureNotNull(this.k12_1).on()).wc(interval));
    }
    if (!(this.k12_1 == null)) {
      ensureNotNull(this.k12_1).ym().yb(this.k12_1, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  ParserATNSimulator.$metadata$ = classMeta('ParserATNSimulator', undefined, undefined, undefined, undefined, ATNSimulator.prototype);
  function PlusBlockStartState() {
    BlockStartState.call(this);
    this.hw_1 = null;
  }
  PlusBlockStartState.prototype.ai = function () {
    return Companion_getInstance_15().ji_1;
  };
  PlusBlockStartState.$metadata$ = classMeta('PlusBlockStartState', undefined, undefined, undefined, undefined, BlockStartState.prototype);
  function PlusLoopbackState() {
    DecisionState.call(this);
  }
  PlusLoopbackState.prototype.ai = function () {
    return Companion_getInstance_15().qi_1;
  };
  PlusLoopbackState.$metadata$ = classMeta('PlusLoopbackState', undefined, undefined, undefined, undefined, DecisionState.prototype);
  function PrecedencePredicateTransition(target, precedence) {
    AbstractPredicateTransition.call(this, target);
    this.w14_1 = precedence;
  }
  PrecedencePredicateTransition.prototype.xx = function () {
    return Companion_getInstance_28().dx_1;
  };
  PrecedencePredicateTransition.prototype.vx = function () {
    return true;
  };
  PrecedencePredicateTransition.prototype.x14 = function () {
    return new PrecedencePredicate(this.w14_1);
  };
  PrecedencePredicateTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PrecedencePredicateTransition.prototype.toString = function () {
    return '' + this.w14_1 + ' >= _p';
  };
  PrecedencePredicateTransition.$metadata$ = classMeta('PrecedencePredicateTransition', undefined, undefined, undefined, undefined, AbstractPredicateTransition.prototype);
  function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
    AbstractPredicateTransition.call(this, target);
    this.pk_1 = ruleIndex;
    this.qk_1 = predIndex;
    this.rk_1 = isCtxDependent;
  }
  PredicateTransition.prototype.xx = function () {
    return Companion_getInstance_28().xw_1;
  };
  PredicateTransition.prototype.vx = function () {
    return true;
  };
  PredicateTransition.prototype.x14 = function () {
    return Predicate_init_$Create$_0(this.pk_1, this.qk_1, this.rk_1);
  };
  PredicateTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PredicateTransition.prototype.toString = function () {
    return 'pred_' + this.pk_1 + ':' + this.qk_1;
  };
  PredicateTransition.$metadata$ = classMeta('PredicateTransition', undefined, undefined, undefined, undefined, AbstractPredicateTransition.prototype);
  function Companion_22() {
    Companion_instance_22 = this;
    this.zs_1 = new EmptyPredictionContext();
    this.at_1 = 2147483647;
    this.bt_1 = 1;
  }
  Companion_22.prototype.mz = function (atn, outerContext) {
    var tmp0_elvis_lhs = outerContext;
    var outerContext1 = tmp0_elvis_lhs == null ? get_EMPTY_RULECTX() : tmp0_elvis_lhs;
    if (outerContext1.dk() == null ? true : outerContext1 === get_EMPTY_RULECTX()) {
      return this.zs_1;
    }
    var parent = this.mz(atn, outerContext1.dk());
    var state = atn.ih_1.j(outerContext1.ij_1);
    var tmp = ensureNotNull(state).rj(0);
    var transition = tmp instanceof RuleTransition ? tmp : THROW_CCE();
    return Companion_getInstance_27().qz(parent, transition.bk_1.vh_1);
  };
  Companion_22.prototype.i15 = function () {
    var hash = MurmurHash_getInstance().ar(this.bt_1);
    hash = MurmurHash_getInstance().dr(hash, 0);
    return hash;
  };
  Companion_22.prototype.j15 = function (parent, returnState) {
    var hash = MurmurHash_getInstance().ar(this.bt_1);
    hash = MurmurHash_getInstance().cr(hash, parent);
    hash = MurmurHash_getInstance().br(hash, returnState);
    hash = MurmurHash_getInstance().dr(hash, 2);
    return hash;
  };
  Companion_22.prototype.cy = function (parents, returnStates) {
    var hash = MurmurHash_getInstance().ar(this.bt_1);
    var indexedObject = parents;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var parent = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      hash = MurmurHash_getInstance().cr(hash, parent);
    }
    var indexedObject_0 = returnStates;
    var inductionVariable_0 = 0;
    var last_0 = indexedObject_0.length;
    while (inductionVariable_0 < last_0) {
      var returnState = indexedObject_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      hash = MurmurHash_getInstance().br(hash, returnState);
    }
    hash = MurmurHash_getInstance().dr(hash, imul(2, parents.length));
    return hash;
  };
  Companion_22.prototype.ct = function (a, b, rootIsWildcard, mergeCache) {
    var a1 = a;
    var b1 = b;
    assert(!(a1 == null) ? !(b1 == null) : false);
    if (a1 === b1 ? true : equals(a1, b1))
      return ensureNotNull(a1);
    var tmp;
    if (a1 instanceof SingletonPredictionContext) {
      tmp = b1 instanceof SingletonPredictionContext;
    } else {
      tmp = false;
    }
    if (tmp) {
      var tmp_0 = a1 instanceof SingletonPredictionContext ? a1 : THROW_CCE();
      return this.k15(tmp_0, b1 instanceof SingletonPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
    }
    if (rootIsWildcard) {
      if (a1 instanceof EmptyPredictionContext)
        return a1;
      if (b1 instanceof EmptyPredictionContext)
        return b1;
    }
    if (a1 instanceof SingletonPredictionContext) {
      a1 = ArrayPredictionContext_init_$Create$(a1);
    }
    if (b1 instanceof SingletonPredictionContext) {
      b1 = ArrayPredictionContext_init_$Create$(ensureNotNull((b1 == null ? true : b1 instanceof SingletonPredictionContext) ? b1 : THROW_CCE()));
    }
    var tmp_1 = a1 instanceof ArrayPredictionContext ? a1 : THROW_CCE();
    return this.l15(tmp_1, b1 instanceof ArrayPredictionContext ? b1 : THROW_CCE(), rootIsWildcard, mergeCache);
  };
  Companion_22.prototype.k15 = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = mergeCache.n15(a, b);
      if (!(previous == null))
        return previous;
      previous = mergeCache.n15(b, a);
      if (!(previous == null))
        return previous;
    }
    var rootMerge = this.o15(a, b, rootIsWildcard);
    if (!(rootMerge == null)) {
      var tmp0_safe_receiver = mergeCache;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.p15(a, b, rootMerge);
      return rootMerge;
    }
    if (a.by_1 === b.by_1) {
      var parent = this.ct(a.ay_1, b.ay_1, rootIsWildcard, mergeCache);
      if (parent === a.ay_1)
        return a;
      if (parent === b.ay_1)
        return b;
      var c = Companion_getInstance_27().qz(parent, a.by_1);
      var tmp1_safe_receiver = mergeCache;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.p15(a, b, c);
      return c;
    } else {
      var singleParent = null;
      if (a === b ? true : !(a.ay_1 == null) ? equals(a.ay_1, b.ay_1) : false) {
        singleParent = a.ay_1;
      }
      if (!(singleParent == null)) {
        var tmp$ret$0;
        // Inline function 'kotlin.intArrayOf' call
        var tmp0_intArrayOf = new Int32Array([a.by_1, b.by_1]);
        tmp$ret$0 = tmp0_intArrayOf;
        var payloads = tmp$ret$0;
        if (a.by_1 > b.by_1) {
          payloads[0] = b.by_1;
          payloads[1] = a.by_1;
        }
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOf' call
        var tmp1_arrayOf = [singleParent, singleParent];
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_arrayOf;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var parents = tmp$ret$3;
        var a_ = new ArrayPredictionContext(ensureNotNull(parents), payloads);
        if (!(mergeCache == null)) {
          ensureNotNull(mergeCache).p15(a, b, a_);
        }
        return a_;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.intArrayOf' call
      var tmp2_intArrayOf = new Int32Array([a.by_1, b.by_1]);
      tmp$ret$4 = tmp2_intArrayOf;
      var payloads_0 = tmp$ret$4;
      var tmp$ret$7;
      // Inline function 'kotlin.arrayOf' call
      var tmp3_arrayOf = [a.ay_1, b.ay_1];
      var tmp$ret$6;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$5;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$5 = tmp3_arrayOf;
      tmp$ret$6 = tmp$ret$5;
      tmp$ret$7 = tmp$ret$6;
      var parents_0 = tmp$ret$7;
      if (a.by_1 > b.by_1) {
        payloads_0[0] = b.by_1;
        payloads_0[1] = a.by_1;
        var tmp$ret$10;
        // Inline function 'kotlin.arrayOf' call
        var tmp4_arrayOf = [b.ay_1, a.ay_1];
        var tmp$ret$9;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$8;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$8 = tmp4_arrayOf;
        tmp$ret$9 = tmp$ret$8;
        tmp$ret$10 = tmp$ret$9;
        parents_0 = tmp$ret$10;
      }
      var a__0 = new ArrayPredictionContext(parents_0, payloads_0);
      if (!(mergeCache == null)) {
        ensureNotNull(mergeCache).p15(a, b, a__0);
      }
      return a__0;
    }
  };
  Companion_22.prototype.o15 = function (a, b, rootIsWildcard) {
    if (rootIsWildcard) {
      if (a === this.zs_1)
        return this.zs_1;
      if (b === this.zs_1)
        return this.zs_1;
    } else {
      if (a === this.zs_1 ? b === this.zs_1 : false)
        return this.zs_1;
      if (a === this.zs_1) {
        var tmp$ret$0;
        // Inline function 'kotlin.intArrayOf' call
        var tmp0_intArrayOf = new Int32Array([b.by_1, this.at_1]);
        tmp$ret$0 = tmp0_intArrayOf;
        var payloads = tmp$ret$0;
        var tmp$ret$3;
        // Inline function 'kotlin.arrayOf' call
        var tmp1_arrayOf = [b.ay_1, null];
        var tmp$ret$2;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$1 = tmp1_arrayOf;
        tmp$ret$2 = tmp$ret$1;
        tmp$ret$3 = tmp$ret$2;
        var parents = tmp$ret$3;
        return new ArrayPredictionContext(parents, payloads);
      }
      if (b === this.zs_1) {
        var tmp$ret$4;
        // Inline function 'kotlin.intArrayOf' call
        var tmp2_intArrayOf = new Int32Array([a.by_1, this.at_1]);
        tmp$ret$4 = tmp2_intArrayOf;
        var payloads_0 = tmp$ret$4;
        var tmp$ret$7;
        // Inline function 'kotlin.arrayOf' call
        var tmp3_arrayOf = [a.ay_1, null];
        var tmp$ret$6;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$5 = tmp3_arrayOf;
        tmp$ret$6 = tmp$ret$5;
        tmp$ret$7 = tmp$ret$6;
        var parents_0 = tmp$ret$7;
        return new ArrayPredictionContext(parents_0, payloads_0);
      }
    }
    return null;
  };
  Companion_22.prototype.l15 = function (a, b, rootIsWildcard, mergeCache) {
    if (!(mergeCache == null)) {
      var previous = ensureNotNull(mergeCache).n15(a, b);
      if (!(previous == null))
        return previous;
      previous = ensureNotNull(mergeCache).n15(b, a);
      if (!(previous == null))
        return previous;
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(ensureNotNull(a.fy_1).length + ensureNotNull(b.fy_1).length | 0);
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = ensureNotNull(a.fy_1).length + b.fy_1.length | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var mergedParents = tmp$ret$0;
    while (i < ensureNotNull(a.fy_1).length ? j < ensureNotNull(b.fy_1).length : false) {
      var a_parent = ensureNotNull(a.ey_1)[i];
      var b_parent = ensureNotNull(b.ey_1)[j];
      if (a.fy_1[i] === ensureNotNull(b.fy_1)[j]) {
        var payload = a.fy_1[i];
        var both = (payload === this.at_1 ? a_parent == null : false) ? b_parent == null : false;
        var ax_ax = (!(a_parent == null) ? !(b_parent == null) : false) ? equals(a_parent, b_parent) : false;
        if (both ? true : ax_ax) {
          mergedParents[k] = a_parent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.ct(a_parent, b_parent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        var tmp0 = i;
        i = tmp0 + 1 | 0;
        var tmp1 = j;
        j = tmp1 + 1 | 0;
      } else if (a.fy_1[i] < b.fy_1[j]) {
        mergedParents[k] = a_parent;
        mergedReturnStates[k] = a.fy_1[i];
        var tmp2 = i;
        i = tmp2 + 1 | 0;
      } else {
        mergedParents[k] = b_parent;
        mergedReturnStates[k] = b.fy_1[j];
        var tmp3 = j;
        j = tmp3 + 1 | 0;
      }
      var tmp4 = k;
      k = tmp4 + 1 | 0;
    }
    if (i < a.fy_1.length) {
      var inductionVariable = i;
      var last = a.fy_1.length;
      if (inductionVariable < last)
        do {
          var p = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          mergedParents[k] = ensureNotNull(a.ey_1)[p];
          mergedReturnStates[k] = a.fy_1[p];
          var tmp6 = k;
          k = tmp6 + 1 | 0;
        }
         while (inductionVariable < last);
    } else {
      var inductionVariable_0 = j;
      var last_0 = b.fy_1.length;
      if (inductionVariable_0 < last_0)
        do {
          var p_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          mergedParents[k] = ensureNotNull(b.ey_1)[p_0];
          mergedReturnStates[k] = b.fy_1[p_0];
          var tmp8 = k;
          k = tmp8 + 1 | 0;
        }
         while (inductionVariable_0 < last_0);
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = Companion_getInstance_27().qz(mergedParents[0], mergedReturnStates[0]);
        var tmp9_safe_receiver = mergeCache;
        if (tmp9_safe_receiver == null)
          null;
        else
          tmp9_safe_receiver.p15(a, b, a_);
        return a_;
      }
      mergedParents = copyOf_0(mergedParents, k);
      mergedReturnStates = copyOf_1(mergedReturnStates, k);
    }
    var M = new ArrayPredictionContext(mergedParents, mergedReturnStates);
    if (M.equals(a)) {
      var tmp10_safe_receiver = mergeCache;
      if (tmp10_safe_receiver == null)
        null;
      else
        tmp10_safe_receiver.p15(a, b, a);
      return a;
    }
    if (M.equals(b)) {
      var tmp11_safe_receiver = mergeCache;
      if (tmp11_safe_receiver == null)
        null;
      else
        tmp11_safe_receiver.p15(a, b, b);
      return b;
    }
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp1_toTypedArray = filterNotNull(mergedParents);
    tmp$ret$1 = copyToArray(tmp1_toTypedArray);
    this.q15(tmp$ret$1);
    var tmp12_safe_receiver = mergeCache;
    if (tmp12_safe_receiver == null)
      null;
    else
      tmp12_safe_receiver.p15(a, b, M);
    return M;
  };
  Companion_22.prototype.q15 = function (parents) {
    var uniqueParents = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var p = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = parents[p];
        if (!uniqueParents.n1(parent)) {
          // Inline function 'kotlin.collections.set' call
          uniqueParents.a2(parent, parent);
        }
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = parents.length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var p_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        parents[p_0] = ensureNotNull(uniqueParents.p1(parents[p_0]));
      }
       while (inductionVariable_0 <= last_0);
  };
  Companion_22.prototype.tx = function (context, contextCache, visited) {
    if (context.sm()) {
      return context;
    }
    var existing = visited.p1(context);
    if (!(existing == null)) {
      return existing;
    }
    existing = contextCache.t15(context);
    if (!(existing == null)) {
      visited.a2(context, existing);
      return existing;
    }
    var changed = false;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = context.sc();
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    var parents = tmp$ret$0;
    var inductionVariable = 0;
    var last = parents.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var parent = this.tx(ensureNotNull(context.gy(i)), contextCache, visited);
        if (changed ? true : !(parent === context.gy(i))) {
          if (!changed) {
            var tmp$ret$1;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp1_arrayOfNulls = context.sc();
            tmp$ret$1 = fillArrayVal(Array(tmp1_arrayOfNulls), null);
            parents = tmp$ret$1;
            var inductionVariable_0 = 0;
            var last_0 = context.sc();
            if (inductionVariable_0 < last_0)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                parents[j] = context.gy(j);
              }
               while (inductionVariable_0 < last_0);
            changed = true;
          }
          parents[i] = parent;
        }
      }
       while (inductionVariable <= last);
    if (!changed) {
      contextCache.u15(context);
      visited.a2(context, context);
      return context;
    }
    var updated;
    if (parents.length === 0) {
      updated = this.zs_1;
    } else if (parents.length === 1) {
      updated = Companion_getInstance_27().qz(parents[0], context.hy(0));
    } else {
      var arrayPredictionContext = context instanceof ArrayPredictionContext ? context : THROW_CCE();
      updated = new ArrayPredictionContext(parents, arrayPredictionContext.fy_1);
    }
    contextCache.u15(updated);
    visited.a2(updated, updated);
    visited.a2(context, updated);
    return updated;
  };
  Companion_22.$metadata$ = objectMeta('Companion');
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function PredictionContext(cachedHashCode) {
    Companion_getInstance_23();
    this.iy_1 = cachedHashCode;
  }
  PredictionContext.prototype.sm = function () {
    return this === Companion_getInstance_23().zs_1;
  };
  PredictionContext.prototype.jy = function () {
    return this.hy(this.sc() - 1 | 0) === Companion_getInstance_23().at_1;
  };
  PredictionContext.prototype.hashCode = function () {
    return this.iy_1;
  };
  PredictionContext.$metadata$ = classMeta('PredictionContext');
  function PredictionContextCache() {
    this.s15_1 = HashMap_init_$Create$();
  }
  PredictionContextCache.prototype.u15 = function (ctx) {
    if (ctx === Companion_getInstance_23().zs_1)
      return Companion_getInstance_23().zs_1;
    var existing = this.s15_1.p1(ctx);
    if (!(existing == null)) {
      return existing;
    }
    this.s15_1.a2(ctx, ctx);
    return ctx;
  };
  PredictionContextCache.prototype.t15 = function (ctx) {
    return this.s15_1.p1(ctx);
  };
  PredictionContextCache.$metadata$ = classMeta('PredictionContextCache');
  function Companion_23() {
    Companion_instance_23 = this;
    this.v15_1 = new AltAndContextConfigEqualityComparator();
  }
  Companion_23.$metadata$ = objectMeta('Companion');
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  var PredictionMode_SLL_instance;
  var PredictionMode_LL_instance;
  var PredictionMode_LL_EXACT_AMBIG_DETECTION_instance;
  function AltAndContextMap() {
    var tmp = Companion_getInstance_24().v15_1;
    FlexibleHashMap_init_$Init$(tmp, 0, 0, 6, null, this);
  }
  AltAndContextMap.$metadata$ = classMeta('AltAndContextMap', undefined, undefined, undefined, undefined, FlexibleHashMap.prototype);
  function AltAndContextConfigEqualityComparator() {
    Companion_getInstance_24();
    AbstractEqualityComparator.call(this);
  }
  AltAndContextConfigEqualityComparator.prototype.hs = function (o) {
    var hashCode = MurmurHash_getInstance().ar(7);
    hashCode = MurmurHash_getInstance().br(hashCode, o.oq_1.vh_1);
    hashCode = MurmurHash_getInstance().cr(hashCode, o.qq_1);
    hashCode = MurmurHash_getInstance().dr(hashCode, 2);
    return hashCode;
  };
  AltAndContextConfigEqualityComparator.prototype.is = function (obj) {
    return this.hs(obj instanceof ATNConfig ? obj : THROW_CCE());
  };
  AltAndContextConfigEqualityComparator.prototype.js = function (a, b) {
    if (a === b)
      return true;
    return (a == null ? true : b == null) ? false : ensureNotNull(a).oq_1.vh_1 === ensureNotNull(b).oq_1.vh_1 ? equals(ensureNotNull(a).qq_1, ensureNotNull(b).qq_1) : false;
  };
  AltAndContextConfigEqualityComparator.prototype.ks = function (a, b) {
    var tmp = (a == null ? true : a instanceof ATNConfig) ? a : THROW_CCE();
    return this.js(tmp, (b == null ? true : b instanceof ATNConfig) ? b : THROW_CCE());
  };
  AltAndContextConfigEqualityComparator.$metadata$ = classMeta('AltAndContextConfigEqualityComparator', undefined, undefined, undefined, undefined, AbstractEqualityComparator.prototype);
  function Companion_24() {
    Companion_instance_24 = this;
  }
  Companion_24.prototype.q13 = function (mode, configs) {
    var configs_0 = configs;
    if (this.d14(configs_0)) {
      return true;
    }
    if (mode.equals(PredictionMode_SLL_getInstance())) {
      if (configs_0.qs_1) {
        var dup = ATNConfigSet_init_$Create$(false, 1, null);
        var tmp0_iterator = configs_0.e();
        while (tmp0_iterator.f()) {
          var c = tmp0_iterator.g();
          var mutableC = c;
          mutableC = ATNConfig_init_$Create$_2(mutableC, Companion_getInstance_26().tq_1);
          dup.xs(mutableC);
        }
        configs_0 = dup;
      }
    }
    var altsets = this.n13(configs_0);
    return this.f16(altsets) ? !this.e16(configs_0) : false;
  };
  Companion_24.prototype.c14 = function (configs) {
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var tmp = c.oq_1;
      if (tmp instanceof RuleStopState) {
        return true;
      }
    }
    return false;
  };
  Companion_24.prototype.d14 = function (configs) {
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var config = tmp0_iterator.g();
      var tmp = config.oq_1;
      if (!(tmp instanceof RuleStopState)) {
        return false;
      }
    }
    return true;
  };
  Companion_24.prototype.w13 = function (altsets) {
    return this.x13(altsets);
  };
  Companion_24.prototype.o13 = function (altsets) {
    return !this.g16(altsets);
  };
  Companion_24.prototype.g16 = function (altsets) {
    var tmp0_iterator = altsets.e();
    while (tmp0_iterator.f()) {
      var alts = tmp0_iterator.g();
      if (alts.h13() === 1) {
        return true;
      }
    }
    return false;
  };
  Companion_24.prototype.f16 = function (altsets) {
    var tmp0_iterator = altsets.e();
    while (tmp0_iterator.f()) {
      var alts = tmp0_iterator.g();
      if (alts.h13() > 1) {
        return true;
      }
    }
    return false;
  };
  Companion_24.prototype.y13 = function (altsets) {
    var it = altsets.e();
    var first = it.g();
    while (it.f()) {
      var next = it.g();
      if (!equals(next, first))
        return false;
    }
    return true;
  };
  Companion_24.prototype.v13 = function (altsets) {
    var all = this.z14(altsets);
    return all.h13() === 1 ? all.g13(0) : Companion_getInstance_9().yp_1;
  };
  Companion_24.prototype.z14 = function (altsets) {
    var all = BitSet_init_$Create$();
    var tmp0_iterator = altsets.e();
    while (tmp0_iterator.f()) {
      var alts = tmp0_iterator.g();
      all.h16(alts);
    }
    return all;
  };
  Companion_24.prototype.n13 = function (configs) {
    var configToAlts = new AltAndContextMap();
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var alts = configToAlts.p1(c);
      if (alts == null) {
        alts = BitSet_init_$Create$();
        configToAlts.a2(c, alts);
      }
      ensureNotNull(alts).ws(c.pq_1);
    }
    return configToAlts.q1();
  };
  Companion_24.prototype.i16 = function (configs) {
    var m = HashMap_init_$Create$();
    var tmp0_iterator = configs.e();
    while (tmp0_iterator.f()) {
      var c = tmp0_iterator.g();
      var alts = m.p1(c.oq_1);
      if (alts == null) {
        alts = BitSet_init_$Create$();
        m.a2(c.oq_1, alts);
      }
      alts.ws(c.pq_1);
    }
    return m;
  };
  Companion_24.prototype.e16 = function (configs) {
    var x = this.i16(configs);
    var tmp0_iterator = x.q1().e();
    while (tmp0_iterator.f()) {
      var alts = tmp0_iterator.g();
      if (alts.h13() === 1)
        return true;
    }
    return false;
  };
  Companion_24.prototype.x13 = function (altsets) {
    var viableAlts = BitSet_init_$Create$();
    var tmp0_iterator = altsets.e();
    while (tmp0_iterator.f()) {
      var alts = tmp0_iterator.g();
      var minAlt = alts.g13(0);
      viableAlts.ws(minAlt);
      if (viableAlts.h13() > 1) {
        return Companion_getInstance_9().yp_1;
      }
    }
    return viableAlts.g13(0);
  };
  Companion_24.$metadata$ = objectMeta('Companion');
  var Companion_instance_24;
  function Companion_getInstance_25() {
    PredictionMode_initEntries();
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  var PredictionMode_entriesInitialized;
  function PredictionMode_initEntries() {
    if (PredictionMode_entriesInitialized)
      return Unit_getInstance();
    PredictionMode_entriesInitialized = true;
    PredictionMode_SLL_instance = new PredictionMode('SLL', 0);
    PredictionMode_LL_instance = new PredictionMode('LL', 1);
    PredictionMode_LL_EXACT_AMBIG_DETECTION_instance = new PredictionMode('LL_EXACT_AMBIG_DETECTION', 2);
    Companion_getInstance_25();
  }
  function PredictionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  PredictionMode.$metadata$ = classMeta('PredictionMode', undefined, undefined, undefined, undefined, Enum.prototype);
  function PredictionMode_SLL_getInstance() {
    PredictionMode_initEntries();
    return PredictionMode_SLL_instance;
  }
  function PredictionMode_LL_getInstance() {
    PredictionMode_initEntries();
    return PredictionMode_LL_instance;
  }
  function PredictionMode_LL_EXACT_AMBIG_DETECTION_getInstance() {
    PredictionMode_initEntries();
    return PredictionMode_LL_EXACT_AMBIG_DETECTION_instance;
  }
  function RangeTransition(target, from, to) {
    Transition.call(this, target);
    this.k16_1 = from;
    this.l16_1 = to;
  }
  RangeTransition.prototype.xx = function () {
    return Companion_getInstance_28().vw_1;
  };
  RangeTransition.prototype.wx = function () {
    return Companion_getInstance_33().ff(this.k16_1, this.l16_1);
  };
  RangeTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= this.k16_1 ? symbol <= this.l16_1 : false;
  };
  RangeTransition.prototype.toString = function () {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  RangeTransition.$metadata$ = classMeta('RangeTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function RuleStartState() {
    ATNState.call(this);
    this.cv_1 = null;
    this.dv_1 = false;
  }
  RuleStartState.prototype.ai = function () {
    return Companion_getInstance_15().hi_1;
  };
  RuleStartState.$metadata$ = classMeta('RuleStartState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function RuleStopState() {
    ATNState.call(this);
  }
  RuleStopState.prototype.ai = function () {
    return Companion_getInstance_15().mi_1;
  };
  RuleStopState.$metadata$ = classMeta('RuleStopState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
    Transition.call(this, ruleStart);
    this.zj_1 = ruleIndex;
    this.ak_1 = precedence;
    this.bk_1 = followState;
  }
  RuleTransition.prototype.xx = function () {
    return Companion_getInstance_28().ww_1;
  };
  RuleTransition.prototype.vx = function () {
    return true;
  };
  RuleTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  RuleTransition.$metadata$ = classMeta('RuleTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function Predicate_init_$Init$($this) {
    SemanticContext.call($this);
    Predicate.call($this);
    $this.s16_1 = -1;
    $this.t16_1 = -1;
    $this.u16_1 = false;
    return $this;
  }
  function Predicate_init_$Create$() {
    return Predicate_init_$Init$(Object.create(Predicate.prototype));
  }
  function Predicate_init_$Init$_0(ruleIndex, predIndex, isCtxDependent, $this) {
    SemanticContext.call($this);
    Predicate.call($this);
    $this.s16_1 = ruleIndex;
    $this.t16_1 = predIndex;
    $this.u16_1 = isCtxDependent;
    return $this;
  }
  function Predicate_init_$Create$_0(ruleIndex, predIndex, isCtxDependent) {
    return Predicate_init_$Init$_0(ruleIndex, predIndex, isCtxDependent, Object.create(Predicate.prototype));
  }
  function filterPrecedencePredicates($this, collection) {
    var result = null;
    var iterator = collection.e();
    while (iterator.f()) {
      var context = iterator.g();
      if (context instanceof PrecedencePredicate) {
        if (result == null) {
          result = ArrayList_init_$Create$_0();
        }
        result.a(context);
        iterator.b4();
      }
    }
    var tmp0_elvis_lhs = result;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  }
  Predicate.prototype.l14 = function (parser, parserCallStack) {
    var localctx = this.u16_1 ? parserCallStack : null;
    return parser.bn(ensureNotNull(localctx), this.s16_1, this.t16_1);
  };
  Predicate.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hashCode = tmp.j11(0, 1, null);
    hashCode = MurmurHash_getInstance().br(hashCode, this.s16_1);
    hashCode = MurmurHash_getInstance().br(hashCode, this.t16_1);
    hashCode = MurmurHash_getInstance().br(hashCode, this.u16_1 ? 1 : 0);
    hashCode = MurmurHash_getInstance().dr(hashCode, 3);
    return hashCode;
  };
  Predicate.prototype.equals = function (other) {
    if (!(other instanceof Predicate))
      return false;
    if (this === other)
      return true;
    return (this.s16_1 === other.s16_1 ? this.t16_1 === other.t16_1 : false) ? this.u16_1 === other.u16_1 : false;
  };
  Predicate.prototype.toString = function () {
    return '{' + this.s16_1 + ':' + this.t16_1 + '}?';
  };
  function Predicate() {
  }
  Predicate.$metadata$ = classMeta('Predicate', undefined, undefined, undefined, undefined, SemanticContext.prototype);
  function PrecedencePredicate(precedence) {
    SemanticContext.call(this);
    this.v16_1 = precedence;
  }
  PrecedencePredicate.prototype.l14 = function (parser, parserCallStack) {
    return parser.cn(parserCallStack, this.v16_1);
  };
  PrecedencePredicate.prototype.e14 = function (parser, parserCallStack) {
    var tmp;
    if (parser.cn(parserCallStack, this.v16_1)) {
      tmp = Companion_getInstance_26().tq_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  PrecedencePredicate.prototype.w16 = function (other) {
    return this.v16_1 - other.v16_1 | 0;
  };
  PrecedencePredicate.prototype.a4 = function (other) {
    return this.w16(other instanceof PrecedencePredicate ? other : THROW_CCE());
  };
  PrecedencePredicate.prototype.hashCode = function () {
    var hashCode = 1;
    hashCode = imul(31, hashCode) + this.v16_1 | 0;
    return hashCode;
  };
  PrecedencePredicate.prototype.equals = function (other) {
    if (!(other instanceof PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.v16_1 === other.v16_1;
  };
  PrecedencePredicate.prototype.toString = function () {
    return '{' + this.v16_1 + '>=prec}?';
  };
  PrecedencePredicate.$metadata$ = classMeta('PrecedencePredicate', [Comparable], undefined, undefined, undefined, SemanticContext.prototype);
  function Operator() {
    SemanticContext.call(this);
  }
  Operator.$metadata$ = classMeta('Operator', undefined, undefined, undefined, undefined, SemanticContext.prototype);
  function AND(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$();
    if (a instanceof AND) {
      operands.b2(toList(a.x16_1));
    } else {
      operands.a(a);
    }
    if (b instanceof AND) {
      operands.b2(toList(b.x16_1));
    } else {
      operands.a(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_26(), operands);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !precedencePredicates.d();
    if (tmp$ret$0) {
      var reduced = Collections_getInstance().y16(precedencePredicates);
      operands.a(reduced);
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$1 = copyToArray(operands);
    tmp.x16_1 = tmp$ret$1;
  }
  AND.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AND))
      return false;
    return Arrays_getInstance().ub(this.x16_1, other.x16_1);
  };
  AND.prototype.hashCode = function () {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  AND.prototype.l14 = function (parser, parserCallStack) {
    var indexedObject = this.x16_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (!opnd.l14(parser, parserCallStack))
        return false;
    }
    return true;
  };
  AND.prototype.e14 = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.x16_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.e14(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated == null) {
        return null;
      } else if (!(evaluated === Companion_getInstance_26().tq_1)) {
        operands.a(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.d()) {
      return Companion_getInstance_26().tq_1;
    }
    var result = operands.j(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.h();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_26().y14(result, operands.j(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  AND.prototype.toString = function () {
    var tmp = toList(this.x16_1);
    return joinToString$default_1(tmp, '&&', null, null, 0, null, null, 62, null);
  };
  AND.$metadata$ = classMeta('AND', undefined, undefined, undefined, undefined, Operator.prototype);
  function OR(a, b) {
    Operator.call(this);
    var operands = HashSet_init_$Create$();
    if (a instanceof OR) {
      operands.b2(toList(a.z16_1));
    } else {
      operands.a(a);
    }
    if (b instanceof OR) {
      operands.b2(toList(b.z16_1));
    } else {
      operands.a(b);
    }
    var precedencePredicates = filterPrecedencePredicates(Companion_getInstance_26(), operands);
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    tmp$ret$0 = !precedencePredicates.d();
    if (tmp$ret$0) {
      var reduced = Collections_getInstance().a17(precedencePredicates);
      operands.a(reduced);
    }
    var tmp = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$1 = copyToArray(operands);
    tmp.z16_1 = tmp$ret$1;
  }
  OR.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof OR))
      return false;
    return Arrays_getInstance().ub(this.z16_1, other.z16_1);
  };
  OR.prototype.hashCode = function () {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  OR.prototype.l14 = function (parser, parserCallStack) {
    var indexedObject = this.z16_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var opnd = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (opnd.l14(parser, parserCallStack))
        return true;
    }
    return false;
  };
  OR.prototype.e14 = function (parser, parserCallStack) {
    var differs = false;
    var operands = ArrayList_init_$Create$_0();
    var indexedObject = this.z16_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var context = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var evaluated = context.e14(parser, parserCallStack);
      differs = !!(differs | !(evaluated === context));
      if (evaluated === Companion_getInstance_26().tq_1) {
        return Companion_getInstance_26().tq_1;
      } else if (!(evaluated == null)) {
        operands.a(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.d()) {
      return null;
    }
    var result = operands.j(0);
    var inductionVariable_0 = 1;
    var last_0 = operands.h();
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        result = Companion_getInstance_26().f14(result, operands.j(i));
      }
       while (inductionVariable_0 < last_0);
    return result;
  };
  OR.prototype.toString = function () {
    var tmp = toList(this.z16_1);
    return joinToString$default_1(tmp, '||', null, null, 0, null, null, 62, null);
  };
  OR.$metadata$ = classMeta('OR', undefined, undefined, undefined, undefined, Operator.prototype);
  function Companion_25() {
    Companion_instance_25 = this;
    this.tq_1 = Predicate_init_$Create$();
  }
  Companion_25.prototype.y14 = function (a, b) {
    if (a == null ? true : a === this.tq_1)
      return b;
    if (b == null ? true : b === this.tq_1)
      return a;
    var result = new AND(a, b);
    var tmp;
    if (result.x16_1.length === 1) {
      tmp = result.x16_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  };
  Companion_25.prototype.f14 = function (a, b) {
    if (a == null)
      return b;
    if (b == null)
      return a;
    if (a === this.tq_1 ? true : b === this.tq_1)
      return this.tq_1;
    var result = new OR(a, b);
    var tmp;
    if (result.z16_1.length === 1) {
      tmp = result.z16_1[0];
    } else {
      tmp = result;
    }
    return tmp;
  };
  Companion_25.$metadata$ = objectMeta('Companion');
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function SemanticContext() {
    Companion_getInstance_26();
  }
  SemanticContext.prototype.e14 = function (parser, parserCallStack) {
    return this;
  };
  SemanticContext.$metadata$ = classMeta('SemanticContext');
  function SetTransition(target, set) {
    Transition.call(this, target);
    var set_0 = set;
    if (set_0 == null)
      set_0 = Companion_getInstance_33().oy(Companion_getInstance_7().ld_1);
    this.w11_1 = set_0;
  }
  SetTransition.prototype.xx = function () {
    return Companion_getInstance_28().ax_1;
  };
  SetTransition.prototype.wx = function () {
    return this.w11_1;
  };
  SetTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.w11_1.bh(symbol);
  };
  SetTransition.prototype.toString = function () {
    return this.w11_1.toString();
  };
  SetTransition.$metadata$ = classMeta('SetTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function Companion_26() {
    Companion_instance_26 = this;
  }
  Companion_26.prototype.qz = function (parent, returnState) {
    var tmp;
    if (returnState === Companion_getInstance_23().at_1 ? parent == null : false) {
      tmp = Companion_getInstance_23().zs_1;
    } else {
      tmp = new SingletonPredictionContext(parent, returnState);
    }
    return tmp;
  };
  Companion_26.$metadata$ = objectMeta('Companion');
  var Companion_instance_26;
  function Companion_getInstance_27() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function SingletonPredictionContext(parent, returnState) {
    Companion_getInstance_27();
    PredictionContext.call(this, !(parent == null) ? Companion_getInstance_23().j15(parent, returnState) : Companion_getInstance_23().i15());
    this.ay_1 = parent;
    this.by_1 = returnState;
    Companion_getInstance_15();
    assert(!(this.by_1 === -1));
  }
  SingletonPredictionContext.prototype.sc = function () {
    return 1;
  };
  SingletonPredictionContext.prototype.gy = function (index) {
    assert(index === 0);
    return this.ay_1;
  };
  SingletonPredictionContext.prototype.hy = function (index) {
    assert(index === 0);
    return this.by_1;
  };
  SingletonPredictionContext.prototype.equals = function (o) {
    if (this === o) {
      return true;
    } else {
      if (!(o instanceof SingletonPredictionContext)) {
        return false;
      }
    }
    if (!(this.hashCode() === hashCode(o))) {
      return false;
    }
    var s = (o == null ? true : o instanceof SingletonPredictionContext) ? o : THROW_CCE();
    return (this.by_1 === ensureNotNull(s).by_1 ? !(this.ay_1 == null) : false) ? equals(this.ay_1, s.ay_1) : false;
  };
  SingletonPredictionContext.prototype.toString = function () {
    var up = !(this.ay_1 == null) ? toString(ensureNotNull(this.ay_1)) : '';
    var tmp;
    if (up.length === 0) {
      var tmp_0;
      if (this.by_1 === Companion_getInstance_23().at_1) {
        tmp_0 = '$';
      } else {
        tmp_0 = this.by_1.toString();
      }
      tmp = tmp_0;
    } else {
      tmp = this.by_1.toString() + ' ' + up;
    }
    return tmp;
  };
  SingletonPredictionContext.$metadata$ = classMeta('SingletonPredictionContext', undefined, undefined, undefined, undefined, PredictionContext.prototype);
  function StarBlockStartState() {
    BlockStartState.call(this);
  }
  StarBlockStartState.prototype.ai = function () {
    return Companion_getInstance_15().ki_1;
  };
  StarBlockStartState.$metadata$ = classMeta('StarBlockStartState', undefined, undefined, undefined, undefined, BlockStartState.prototype);
  function StarLoopEntryState() {
    DecisionState.call(this);
    this.wv_1 = null;
    this.xv_1 = false;
  }
  StarLoopEntryState.prototype.ai = function () {
    return Companion_getInstance_15().pi_1;
  };
  StarLoopEntryState.$metadata$ = classMeta('StarLoopEntryState', undefined, undefined, undefined, undefined, DecisionState.prototype);
  function StarLoopbackState() {
    ATNState.call(this);
  }
  StarLoopbackState.prototype.ai = function () {
    return Companion_getInstance_15().oi_1;
  };
  StarLoopbackState.$metadata$ = classMeta('StarLoopbackState', undefined, undefined, undefined, undefined, ATNState.prototype);
  function TokensStartState() {
    DecisionState.call(this);
  }
  TokensStartState.prototype.ai = function () {
    return Companion_getInstance_15().li_1;
  };
  TokensStartState.$metadata$ = classMeta('TokensStartState', undefined, undefined, undefined, undefined, DecisionState.prototype);
  function Companion_27() {
    Companion_instance_27 = this;
    this.uw_1 = 1;
    this.vw_1 = 2;
    this.ww_1 = 3;
    this.xw_1 = 4;
    this.yw_1 = 5;
    this.zw_1 = 6;
    this.ax_1 = 7;
    this.bx_1 = 8;
    this.cx_1 = 9;
    this.dx_1 = 10;
    this.ex_1 = listOf(['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE']);
  }
  Companion_27.$metadata$ = objectMeta('Companion');
  var Companion_instance_27;
  function Companion_getInstance_28() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function Transition(target) {
    Companion_getInstance_28();
    this.qj_1 = target;
    if (this.qj_1 == null) {
      throw NullPointerException_init_$Create$('target cannot be null.');
    }
  }
  Transition.prototype.vx = function () {
    return false;
  };
  Transition.prototype.wx = function () {
    return null;
  };
  Transition.$metadata$ = classMeta('Transition');
  function WildcardTransition(target) {
    Transition.call(this, target);
  }
  WildcardTransition.prototype.xx = function () {
    return Companion_getInstance_28().cx_1;
  };
  WildcardTransition.prototype.yx = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= minVocabSymbol ? symbol <= maxVocabSymbol : false;
  };
  WildcardTransition.prototype.toString = function () {
    return '.';
  };
  WildcardTransition.$metadata$ = classMeta('WildcardTransition', undefined, undefined, undefined, undefined, Transition.prototype);
  function sam$kotlin_Comparator$0(function_0) {
    this.z17_1 = function_0;
  }
  sam$kotlin_Comparator$0.prototype.l = function (a, b) {
    return this.z17_1(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.l(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = classMeta('sam$kotlin_Comparator$0', [Comparator]);
  function DFA$getStates$lambda(a, b) {
    var tmp$ret$2;
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp$ret$0;
    // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getStates.<anonymous>' call
    tmp$ret$0 = a.lx_1;
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getStates.<anonymous>' call
    tmp$ret$1 = b.lx_1;
    tmp$ret$2 = compareValues(tmp, tmp$ret$1);
    return tmp$ret$2;
  }
  function DFA(atnStartState, decision) {
    this.f10_1 = atnStartState;
    this.g10_1 = decision;
    this.h10_1 = HashMap_init_$Create$();
    this.i10_1 = null;
    var precedenceDfa = false;
    var tmp = this.f10_1;
    if (tmp instanceof StarLoopEntryState) {
      if (this.f10_1.xv_1) {
        precedenceDfa = true;
        var precedenceState = DFAState_init_$Create$(ATNConfigSet_init_$Create$(false, 1, null));
        var tmp_0 = precedenceState;
        var tmp$ret$0;
        // Inline function 'kotlin.arrayOfNulls' call
        tmp$ret$0 = fillArrayVal(Array(0), null);
        tmp_0.nx_1 = tmp$ret$0;
        precedenceState.ox_1 = false;
        precedenceState.rx_1 = false;
        this.i10_1 = precedenceState;
      }
    }
    this.j10_1 = precedenceDfa;
  }
  DFA.prototype.v12 = function () {
    return this.j10_1;
  };
  DFA.prototype.u12 = function (precedence) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.v12();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.getPrecedenceStartState.<anonymous>' call
      tmp$ret$0 = 'Only precedence DFAs may contain a precedence start state.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp;
    if (precedence < 0 ? true : precedence >= ensureNotNull(ensureNotNull(this.i10_1).nx_1).length) {
      tmp = null;
    } else {
      tmp = ensureNotNull(ensureNotNull(this.i10_1).nx_1)[precedence];
    }
    return tmp;
  };
  DFA.prototype.z12 = function (precedence, startState) {
    // Inline function 'kotlin.check' call
    var tmp0_check = this.v12();
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'org.antlr.v4.kotlinruntime.dfa.DFA.setPrecedenceStartState.<anonymous>' call
      tmp$ret$0 = 'Only precedence DFAs may contain a precedence start state.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (precedence < 0) {
      return Unit_getInstance();
    }
    if (precedence >= ensureNotNull(ensureNotNull(this.i10_1).nx_1).length) {
      ensureNotNull(this.i10_1).nx_1 = copyOf_0(ensureNotNull(ensureNotNull(this.i10_1).nx_1), precedence + 1 | 0);
    }
    ensureNotNull(ensureNotNull(this.i10_1).nx_1)[precedence] = startState;
  };
  DFA.prototype.a18 = function () {
    var result = ArrayList_init_$Create$_1(this.h10_1.q5());
    // Inline function 'kotlin.collections.sortBy' call
    if (result.h() > 1) {
      var tmp$ret$0;
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp = DFA$getStates$lambda;
      tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
      sortWith(result, tmp$ret$0);
    }
    return result;
  };
  DFA.prototype.toString = function () {
    var tmp0_elvis_lhs = this.fj(Companion_getInstance_8().rp_1);
    return tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
  };
  DFA.prototype.fj = function (vocabulary) {
    if (this.i10_1 == null) {
      return '';
    }
    var serializer = DFASerializer_init_$Create$(this, vocabulary);
    return serializer.toString();
  };
  DFA.prototype.o10 = function () {
    if (this.i10_1 == null)
      return '';
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  };
  DFA.$metadata$ = classMeta('DFA');
  function DFASerializer_init_$Init$(dfa, vocabulary, $this) {
    DFASerializer.call($this);
    $this.b18_1 = dfa;
    $this.c18_1 = vocabulary;
    return $this;
  }
  function DFASerializer_init_$Create$(dfa, vocabulary) {
    return DFASerializer_init_$Init$(dfa, vocabulary, Object.create(DFASerializer.prototype));
  }
  DFASerializer.prototype.toString = function () {
    if (this.b18_1.i10_1 == null)
      return 'null';
    var buf = StringBuilder_init_$Create$();
    var states = this.b18_1.a18();
    var tmp0_iterator = states.e();
    while (tmp0_iterator.f()) {
      var s = tmp0_iterator.g();
      var n = 0;
      if (!(s.nx_1 == null))
        n = ensureNotNull(s.nx_1).length;
      var inductionVariable = 0;
      var last = n;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var t = ensureNotNull(s.nx_1)[i];
          if (!(t == null) ? !(t.lx_1 === IntCompanionObject_getInstance().o_1) : false) {
            buf.x9(this.d18(s));
            var label = this.e18(i);
            buf.x9('-').x9(label).x9('->').x9(this.d18(t)).c(_Char___init__impl__6a9atx(10));
          }
        }
         while (inductionVariable < last);
    }
    var output = buf.toString();
    return output.length === 0 ? 'null' : output;
  };
  DFASerializer.prototype.e18 = function (i) {
    return this.c18_1.mf(i - 1 | 0);
  };
  DFASerializer.prototype.d18 = function (s) {
    var n = s.lx_1;
    var baseStateStr = (s.ox_1 ? ':' : '') + 's' + n + (s.rx_1 ? '^' : '');
    var tmp;
    if (s.ox_1) {
      var tmp_0;
      if (!(s.sx_1 == null)) {
        var tmp_1 = baseStateStr + '=>';
        var tmp_2 = ensureNotNull(s.sx_1);
        tmp_0 = tmp_1 + joinToString$default_0(tmp_2, null, null, null, 0, null, null, 63, null);
      } else {
        tmp_0 = baseStateStr + '=>' + s.px_1;
      }
      tmp = tmp_0;
    } else {
      tmp = baseStateStr;
    }
    return tmp;
  };
  function DFASerializer() {
  }
  DFASerializer.$metadata$ = classMeta('DFASerializer');
  function PredPrediction(pred, alt) {
    this.j14_1 = pred;
    this.k14_1 = alt;
  }
  PredPrediction.prototype.toString = function () {
    return '(' + this.j14_1 + ', ' + this.k14_1 + ')';
  };
  PredPrediction.$metadata$ = classMeta('PredPrediction');
  function DFAState_init_$Init$(configs, $this) {
    DFAState.call($this);
    $this.mx_1 = configs;
    return $this;
  }
  function DFAState_init_$Create$(configs) {
    return DFAState_init_$Init$(configs, Object.create(DFAState.prototype));
  }
  DFAState.prototype.f18 = function () {
    return this.lx_1;
  };
  DFAState.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().ar(7);
    hash = MurmurHash_getInstance().br(hash, ensureNotNull(this.mx_1).hashCode());
    hash = MurmurHash_getInstance().dr(hash, 1);
    return hash;
  };
  DFAState.prototype.equals = function (o) {
    if (this === o)
      return true;
    if (!(o instanceof DFAState)) {
      return false;
    }
    var other = (o == null ? true : o instanceof DFAState) ? o : THROW_CCE();
    return ensureNotNull(this.mx_1).equals(ensureNotNull(other).mx_1);
  };
  DFAState.prototype.toString = function () {
    var buf = StringBuilder_init_$Create$();
    buf.v9(this.lx_1).x9(':').v9(this.mx_1);
    if (this.ox_1) {
      buf.x9('=>');
      if (!(this.sx_1 == null)) {
        var tmp = ensureNotNull(this.sx_1);
        buf.x9(joinToString$default_0(tmp, null, null, null, 0, null, null, 63, null));
      } else {
        buf.v9(this.px_1);
      }
    }
    return buf.toString();
  };
  function DFAState() {
    this.lx_1 = -1;
    var tmp = this;
    tmp.mx_1 = ATNConfigSet_init_$Create$(false, 1, null);
    this.nx_1 = null;
    this.ox_1 = false;
    this.px_1 = 0;
    this.qx_1 = null;
    this.rx_1 = false;
    this.sx_1 = null;
  }
  DFAState.$metadata$ = classMeta('DFAState');
  function LexerDFASerializer(dfa) {
    DFASerializer_init_$Init$(dfa, Companion_getInstance_8().rp_1, this);
  }
  LexerDFASerializer.prototype.e18 = function (i) {
    return (new StringBuilder("'")).c(numberToChar(i)).x9("'").toString();
  };
  LexerDFASerializer.$metadata$ = classMeta('LexerDFASerializer', undefined, undefined, undefined, undefined, DFASerializer.prototype);
  function AbstractEqualityComparator() {
  }
  AbstractEqualityComparator.$metadata$ = classMeta('AbstractEqualityComparator', [EqualityComparator]);
  function Companion_28() {
    Companion_instance_28 = this;
    this.i18_1 = 16;
    this.j18_1 = 8;
    this.k18_1 = 0.75;
  }
  Companion_28.$metadata$ = objectMeta('Companion');
  var Companion_instance_28;
  function Companion_getInstance_29() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function Array2DHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_29();
    this.xr_1 = 0;
    this.yr_1 = numberToInt(Math_getInstance().tb(Companion_getInstance_29().i18_1 * Companion_getInstance_29().k18_1));
    this.zr_1 = 1;
    this.as_1 = Companion_getInstance_29().j18_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_34().zz_1;
    }
    this.vr_1 = comparator_0;
    var tmp = this;
    var tmp_0 = this.tr(initialCapacity);
    tmp.wr_1 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.as_1 = initialBucketCapacity;
  }
  Array2DHashSet.prototype.y1 = function (elements) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: not implemented');
  };
  Array2DHashSet.prototype.u = function (elements) {
    return this.y1(elements);
  };
  Array2DHashSet.prototype.bs = function (o) {
    if (this.xr_1 > this.yr_1) {
      this.es();
    }
    return this.cs(o);
  };
  Array2DHashSet.prototype.cs = function (o) {
    var b = this.ds(o);
    var bucket = this.wr_1[b];
    if (bucket == null) {
      var tmp = this.ur(this.as_1);
      bucket = isArray(tmp) ? tmp : THROW_CCE();
      bucket[0] = o;
      this.wr_1[b] = bucket;
      var tmp0_this = this;
      var tmp1 = tmp0_this.xr_1;
      tmp0_this.xr_1 = tmp1 + 1 | 0;
      return o;
    }
    var inductionVariable = 0;
    var last = bucket.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var existing = bucket[i];
        if (existing == null) {
          bucket[i] = o;
          var tmp3_this = this;
          var tmp4 = tmp3_this.xr_1;
          tmp3_this.xr_1 = tmp4 + 1 | 0;
          return o;
        }
        if (this.vr_1.ks(existing, o))
          return existing;
      }
       while (inductionVariable <= last);
    var oldLength = bucket.length;
    var tmp_0 = copyOf_0(bucket, imul(bucket.length, 2));
    bucket = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    this.wr_1[b] = bucket;
    bucket[oldLength] = o;
    var tmp5_this = this;
    var tmp6 = tmp5_this.xr_1;
    tmp5_this.xr_1 = tmp6 + 1 | 0;
    return o;
  };
  Array2DHashSet.prototype.ds = function (o) {
    var hash = this.vr_1.is(o);
    return hash & (this.wr_1.length - 1 | 0);
  };
  Array2DHashSet.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    var indexedObject = this.wr_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        hash = MurmurHash_getInstance().br(hash, this.vr_1.is(o));
      }
    }
    hash = MurmurHash_getInstance().dr(hash, this.h());
    return hash;
  };
  Array2DHashSet.prototype.equals = function (o) {
    if (o === this)
      return true;
    if (!(o instanceof Array2DHashSet))
      return false;
    var other = (o == null ? true : o instanceof Array2DHashSet) ? o : THROW_CCE();
    var tmp;
    if (!(ensureNotNull(other).h() === this.h())) {
      tmp = false;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.containsAll' call
      tmp$ret$0 = this.u(other);
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  Array2DHashSet.prototype.es = function () {
    var old = this.wr_1;
    var tmp0_this = this;
    tmp0_this.zr_1 = tmp0_this.zr_1 + 4 | 0;
    var newCapacity = imul(this.wr_1.length, 2);
    var newTable = this.tr(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    var tmp = this;
    tmp.wr_1 = isArray(newTable) ? newTable : THROW_CCE();
    this.yr_1 = numberToInt(newCapacity * Companion_getInstance_29().k18_1);
    var oldSize = this.h();
    var indexedObject = old;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null) {
        continue $l$loop;
      }
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null) {
          break $l$loop_0;
        }
        var b = this.ds(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          var tmp_0 = this.ur(this.as_1);
          newBucket = isArray(tmp_0) ? tmp_0 : THROW_CCE();
          newTable[b] = newBucket;
        } else {
          newBucket = newTable[b];
          if (bucketLength === newBucket.length) {
            var tmp_1 = copyOf_0(newBucket, imul(newBucket.length, 2));
            newBucket = isArray(tmp_1) ? tmp_1 : THROW_CCE();
            newTable[b] = newBucket;
          }
        }
        newBucket[bucketLength] = o;
        var tmp3_array = newBucketLengths;
        var tmp4_index0 = b;
        var tmp5 = tmp3_array[tmp4_index0];
        tmp3_array[tmp4_index0] = tmp5 + 1 | 0;
      }
    }
    assert(this.xr_1 === oldSize);
  };
  Array2DHashSet.prototype.h = function () {
    return this.xr_1;
  };
  Array2DHashSet.prototype.fs = function (t) {
    var existing = this.bs(t);
    return existing === t;
  };
  Array2DHashSet.prototype.a = function (element) {
    return this.fs((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  Array2DHashSet.prototype.d = function () {
    return this.xr_1 === 0;
  };
  Array2DHashSet.prototype.e = function () {
    // Inline function 'kotlin.TODO' call
    throw NotImplementedError_init_$Create$(null, 1, null);
  };
  Array2DHashSet.prototype.gs = function (elements) {
    var changed = false;
    var tmp0_iterator = elements.e();
    while (tmp0_iterator.f()) {
      var o = tmp0_iterator.g();
      var existing = this.bs(o);
      if (!(existing === o))
        changed = true;
    }
    return changed;
  };
  Array2DHashSet.prototype.b2 = function (elements) {
    return this.gs(elements);
  };
  Array2DHashSet.prototype.toString = function () {
    if (this.h() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.c(_Char___init__impl__6a9atx(123));
    var first = true;
    var indexedObject = this.wr_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var indexedObject_0 = bucket;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      $l$loop_0: while (inductionVariable_0 < last_0) {
        var o = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (o == null)
          break $l$loop_0;
        if (first)
          first = false;
        else {
          buf.x9(', ');
        }
        buf.x9(toString(o));
      }
    }
    buf.c(_Char___init__impl__6a9atx(125));
    return buf.toString();
  };
  Array2DHashSet.prototype.tr = function (capacity) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  Array2DHashSet.prototype.ur = function (capacity) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(capacity), null);
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  };
  Array2DHashSet.$metadata$ = classMeta('Array2DHashSet', [MutableSet]);
  function DoubleKeyMap() {
    this.m15_1 = LinkedHashMap_init_$Create$();
  }
  DoubleKeyMap.prototype.p15 = function (k1, k2, v) {
    var data2 = this.m15_1.p1(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.set' call
      var tmp0_set = this.m15_1;
      var tmp1_set = data2;
      tmp0_set.a2(k1, tmp1_set);
    } else {
      prev = data2.p1(k2);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp2_set = data2;
    tmp2_set.a2(k2, v);
    return prev;
  };
  DoubleKeyMap.prototype.n15 = function (k1, k2) {
    var tmp0_elvis_lhs = this.m15_1.p1(k1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var data2 = tmp;
    return data2.p1(k2);
  };
  DoubleKeyMap.$metadata$ = classMeta('DoubleKeyMap');
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = interfaceMeta('EqualityComparator');
  function createEntryListArray($this, length) {
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(length), null);
    var tmp = tmp$ret$0;
    return isArray(tmp) ? tmp : THROW_CCE();
  }
  function FlexibleHashMap_init_$Init$(comparator, initialCapacity, initialBucketCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      comparator = null;
    if (!(($mask0 & 2) === 0))
      initialCapacity = Companion_getInstance_30().l18_1;
    if (!(($mask0 & 4) === 0))
      initialBucketCapacity = Companion_getInstance_30().m18_1;
    FlexibleHashMap.call($this, comparator, initialCapacity, initialBucketCapacity);
    return $this;
  }
  function Entry(key, value) {
    this.o18_1 = key;
    this.p18_1 = value;
  }
  Entry.prototype.d1 = function () {
    return this.o18_1;
  };
  Entry.prototype.b1 = function () {
    return this.p18_1;
  };
  Entry.prototype.toString = function () {
    return toString_1(this.o18_1) + ':' + toString_1(this.p18_1);
  };
  Entry.$metadata$ = classMeta('Entry');
  function Companion_29() {
    Companion_instance_29 = this;
    this.l18_1 = 16;
    this.m18_1 = 8;
    this.n18_1 = 0.75;
  }
  Companion_29.$metadata$ = objectMeta('Companion');
  var Companion_instance_29;
  function Companion_getInstance_30() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function FlexibleHashMap(comparator, initialCapacity, initialBucketCapacity) {
    Companion_getInstance_30();
    this.y15_1 = 0;
    this.z15_1 = this.y15_1;
    this.a16_1 = numberToInt(Companion_getInstance_30().l18_1 * Companion_getInstance_30().n18_1);
    this.b16_1 = 1;
    this.c16_1 = Companion_getInstance_30().m18_1;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = Companion_getInstance_34().zz_1;
    }
    this.w15_1 = comparator_0;
    this.x15_1 = createEntryListArray(Companion_getInstance_30(), initialBucketCapacity);
    this.c16_1 = initialBucketCapacity;
  }
  FlexibleHashMap.prototype.q5 = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = filterNotNull(this.x15_1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      var tmp$ret$3;
      // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-keys>.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = filterNotNull_0(element);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.e();
      while (tmp0_iterator_0.f()) {
        var item = tmp0_iterator_0.g();
        var tmp$ret$0;
        // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-keys>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.o18_1;
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return toMutableSet(tmp$ret$5);
  };
  FlexibleHashMap.prototype.q1 = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.collections.flatMap' call
    var tmp0_flatMap = filterNotNull(this.x15_1);
    var tmp$ret$4;
    // Inline function 'kotlin.collections.flatMapTo' call
    var tmp0_flatMapTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_flatMap.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      var tmp$ret$3;
      // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-values>.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.collections.map' call
      var tmp0_map = filterNotNull_0(element);
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapTo' call
      var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_map, 10));
      var tmp0_iterator_0 = tmp0_map.e();
      while (tmp0_iterator_0.f()) {
        var item = tmp0_iterator_0.g();
        var tmp$ret$0;
        // Inline function 'org.antlr.v4.kotlinruntime.misc.FlexibleHashMap.<get-values>.<anonymous>.<anonymous>' call
        tmp$ret$0 = item.p18_1;
        tmp0_mapTo.a(tmp$ret$0);
      }
      tmp$ret$1 = tmp0_mapTo;
      tmp$ret$2 = tmp$ret$1;
      tmp$ret$3 = tmp$ret$2;
      var list = tmp$ret$3;
      addAll(tmp0_flatMapTo, list);
    }
    tmp$ret$4 = tmp0_flatMapTo;
    tmp$ret$5 = tmp$ret$4;
    return toMutableList(tmp$ret$5);
  };
  FlexibleHashMap.prototype.c1 = function () {
    throw new NotImplementedError('An operation is not implemented: not implemented');
  };
  FlexibleHashMap.prototype.h = function () {
    return this.z15_1;
  };
  FlexibleHashMap.prototype.d16 = function (key) {
    var hash = this.w15_1.is(key);
    return hash & (this.x15_1.length - 1 | 0);
  };
  FlexibleHashMap.prototype.p1 = function (key) {
    if (key == null)
      return null;
    var b = this.d16(key);
    var tmp0_elvis_lhs = this.x15_1[b];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var bucket = tmp;
    var tmp1_iterator = bucket.e();
    while (tmp1_iterator.f()) {
      var e = tmp1_iterator.g();
      var tmp2_safe_receiver = e;
      if (this.w15_1.ks(tmp2_safe_receiver == null ? null : tmp2_safe_receiver.o18_1, key)) {
        var tmp3_safe_receiver = e;
        return tmp3_safe_receiver == null ? null : tmp3_safe_receiver.p18_1;
      }
    }
    return null;
  };
  FlexibleHashMap.prototype.a2 = function (key, value) {
    if (key == null)
      return null;
    if (this.y15_1 > this.a16_1) {
      this.es();
    }
    var b = this.d16(key);
    var existingBucket = this.x15_1[b];
    var tmp;
    if (!(existingBucket == null)) {
      tmp = existingBucket;
    } else {
      var tmp_0 = this.x15_1;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mutableListOf' call
      tmp$ret$0 = ArrayList_init_$Create$_0();
      tmp_0[b] = tmp$ret$0;
      tmp = ensureNotNull(this.x15_1[b]);
    }
    var bucket = tmp;
    var tmp0_iterator = bucket.e();
    while (tmp0_iterator.f()) {
      var e = tmp0_iterator.g();
      var tmp1_safe_receiver = e;
      if (this.w15_1.ks(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.o18_1, key)) {
        var tmp2_safe_receiver = e;
        var prev = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.p18_1;
        var tmp3_safe_receiver = e;
        if (tmp3_safe_receiver == null) {
        } else
          tmp3_safe_receiver.p18_1 = value;
        var tmp4_this = this;
        var tmp5 = tmp4_this.y15_1;
        tmp4_this.y15_1 = tmp5 + 1 | 0;
        return prev;
      }
    }
    bucket.a(new Entry(key, value));
    var tmp6_this = this;
    var tmp7 = tmp6_this.y15_1;
    tmp6_this.y15_1 = tmp7 + 1 | 0;
    return null;
  };
  FlexibleHashMap.prototype.n1 = function (key) {
    return !(this.p1(key) == null);
  };
  FlexibleHashMap.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    var indexedObject = this.x15_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.e();
      $l$loop_0: while (tmp1_iterator.f()) {
        var e = tmp1_iterator.g();
        if (e == null)
          break $l$loop_0;
        hash = MurmurHash_getInstance().br(hash, this.w15_1.is(e.o18_1));
      }
    }
    hash = MurmurHash_getInstance().dr(hash, this.h());
    return hash;
  };
  FlexibleHashMap.prototype.equals = function (o) {
    throw UnsupportedOperationException_init_$Create$();
  };
  FlexibleHashMap.prototype.es = function () {
    var old = this.x15_1;
    var newCapacity = imul(this.x15_1.length, 2);
    var newTable = createEntryListArray(Companion_getInstance_30(), newCapacity);
    this.x15_1 = newTable;
    this.a16_1 = numberToInt(newCapacity * Companion_getInstance_30().n18_1);
    var oldSize = this.h();
    var indexedObject = old;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.e();
      $l$loop_0: while (tmp1_iterator.f()) {
        var e = tmp1_iterator.g();
        if (e == null)
          break $l$loop_0;
        this.a2(e.o18_1, e.p18_1);
      }
    }
    this.y15_1 = oldSize;
  };
  FlexibleHashMap.prototype.toString = function () {
    if (this.h() === 0)
      return '{}';
    var buf = StringBuilder_init_$Create$();
    buf.c(_Char___init__impl__6a9atx(123));
    var first = true;
    var indexedObject = this.x15_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var bucket = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (bucket == null)
        continue $l$loop;
      var tmp1_iterator = bucket.e();
      $l$loop_0: while (tmp1_iterator.f()) {
        var e = tmp1_iterator.g();
        if (e == null)
          break $l$loop_0;
        if (first)
          first = false;
        else {
          buf.x9(', ');
        }
        buf.x9(e.toString());
      }
    }
    buf.c(_Char___init__impl__6a9atx(125));
    return buf.toString();
  };
  FlexibleHashMap.$metadata$ = classMeta('FlexibleHashMap', [MutableMap]);
  function IntSet() {
  }
  IntSet.$metadata$ = interfaceMeta('IntSet');
  function IntegerList_init_$Init$($this) {
    IntegerList.call($this);
    $this.qm_1 = Companion_getInstance_31().r18_1;
    return $this;
  }
  function ensureCapacity($this, capacity) {
    if (capacity < 0 ? true : capacity > Companion_getInstance_31().t18_1) {
      throw RuntimeException_init_$Create$();
    }
    var newLength;
    var tmp;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isEmpty' call
    var tmp0_isEmpty = ensureNotNull($this.qm_1);
    tmp$ret$0 = tmp0_isEmpty.length === 0;
    if (tmp$ret$0) {
      tmp = Companion_getInstance_31().s18_1;
    } else {
      tmp = ensureNotNull($this.qm_1).length;
    }
    newLength = tmp;
    while (newLength < capacity) {
      newLength = imul(newLength, 2);
      if (newLength < 0 ? true : newLength > Companion_getInstance_31().t18_1) {
        newLength = Companion_getInstance_31().t18_1;
      }
    }
    var originalArray = toTypedArray(ensureNotNull($this.qm_1));
    var copiedArray = copyOf_0(originalArray, newLength);
    var inductionVariable = originalArray.length;
    var last = copiedArray.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        copiedArray[i] = 0;
      }
       while (inductionVariable < last);
    $this.qm_1 = toIntArray(filterNotNull(copiedArray));
  }
  function Companion_30() {
    Companion_instance_30 = this;
    this.r18_1 = new Int32Array(0);
    this.s18_1 = 4;
    this.t18_1 = 2147483639;
  }
  Companion_30.$metadata$ = objectMeta('Companion');
  var Companion_instance_30;
  function Companion_getInstance_31() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  IntegerList.prototype.sm = function () {
    return this.rm_1 === 0;
  };
  IntegerList.prototype.dh = function (value) {
    if (ensureNotNull(this.qm_1).length === this.rm_1) {
      ensureCapacity(this, this.rm_1 + 1 | 0);
    }
    ensureNotNull(this.qm_1)[this.rm_1] = value;
    var tmp0_this = this;
    var tmp1 = tmp0_this.rm_1;
    tmp0_this.rm_1 = tmp1 + 1 | 0;
  };
  IntegerList.prototype.j = function (index) {
    if (index < 0 ? true : index >= this.rm_1) {
      throw IndexOutOfBoundsException_init_$Create$_0();
    }
    return ensureNotNull(this.qm_1)[index];
  };
  IntegerList.prototype.p4 = function (index) {
    var value = this.j(index);
    var inductionVariable = 0;
    var last = (this.rm_1 - index | 0) - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ensureNotNull(this.qm_1)[index + i | 0] = ensureNotNull(this.qm_1)[(index + i | 0) + 1 | 0];
      }
       while (inductionVariable < last);
    ensureNotNull(this.qm_1)[this.rm_1 - 1 | 0] = 0;
    var tmp1_this = this;
    var tmp2 = tmp1_this.rm_1;
    tmp1_this.rm_1 = tmp2 - 1 | 0;
    return value;
  };
  IntegerList.prototype.sc = function () {
    return this.rm_1;
  };
  IntegerList.prototype.r5 = function () {
    var tmp;
    if (this.rm_1 === 0) {
      tmp = Companion_getInstance_31().r18_1;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.collections.copyOf' call
      var tmp0_copyOf = ensureNotNull(this.qm_1);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_copyOf;
      tmp$ret$1 = tmp$ret$0.slice();
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  IntegerList.prototype.equals = function (o) {
    if (o === this) {
      return true;
    }
    if (!(o instanceof IntegerList)) {
      return false;
    }
    var other = (o == null ? true : o instanceof IntegerList) ? o : THROW_CCE();
    if (!(this.rm_1 === ensureNotNull(other).rm_1)) {
      return false;
    }
    var inductionVariable = 0;
    var last = this.rm_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(ensureNotNull(this.qm_1)[i] === ensureNotNull(other.qm_1)[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  };
  IntegerList.prototype.hashCode = function () {
    var hashCode = 1;
    var inductionVariable = 0;
    var last = this.rm_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        hashCode = imul(31, hashCode) + ensureNotNull(this.qm_1)[i] | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  IntegerList.prototype.toString = function () {
    var tmp = this.r5();
    return joinToString$default_2(tmp, null, null, null, 0, null, null, 63, null);
  };
  function IntegerList() {
    Companion_getInstance_31();
    this.qm_1 = null;
    this.rm_1 = 0;
  }
  IntegerList.$metadata$ = classMeta('IntegerList');
  function IntegerStack_init_$Init$($this) {
    IntegerList_init_$Init$($this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_$Create$() {
    return IntegerStack_init_$Init$(Object.create(IntegerStack.prototype));
  }
  IntegerStack.prototype.om = function (value) {
    this.dh(value);
  };
  IntegerStack.prototype.um = function () {
    return this.p4(this.sc() - 1 | 0);
  };
  IntegerStack.prototype.tm = function () {
    return this.j(this.sc() - 1 | 0);
  };
  function IntegerStack() {
  }
  IntegerStack.$metadata$ = classMeta('IntegerStack', undefined, undefined, undefined, undefined, IntegerList.prototype);
  function Companion_31() {
    Companion_instance_31 = this;
    this.ye_1 = 1000;
    this.ze_1 = new Interval(-1, -2);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.ye_1 + 1 | 0;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.af_1 = tmp$ret$0;
    this.bf_1 = 0;
    this.cf_1 = 0;
    this.df_1 = 0;
    this.ef_1 = 0;
  }
  Companion_31.prototype.ff = function (a, b) {
    if ((!(a === b) ? true : a < 0) ? true : a > this.ye_1) {
      return new Interval(a, b);
    }
    if (this.af_1[a] == null) {
      this.af_1[a] = new Interval(a, a);
    }
    return ensureNotNull(this.af_1[a]);
  };
  Companion_31.$metadata$ = objectMeta('Companion');
  var Companion_instance_31;
  function Companion_getInstance_32() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Interval(a, b) {
    Companion_getInstance_32();
    this.xc_1 = a;
    this.yc_1 = b;
  }
  Interval.prototype.equals = function (o) {
    var tmp;
    if (o == null) {
      tmp = true;
    } else {
      tmp = !(o instanceof Interval);
    }
    if (tmp) {
      return false;
    }
    var other = (o == null ? true : o instanceof Interval) ? o : THROW_CCE();
    return this.xc_1 === ensureNotNull(other).xc_1 ? this.yc_1 === other.yc_1 : false;
  };
  Interval.prototype.hashCode = function () {
    var hash = 23;
    hash = imul(hash, 31) + this.xc_1 | 0;
    hash = imul(hash, 31) + this.yc_1 | 0;
    return hash;
  };
  Interval.prototype.u18 = function (other) {
    return this.xc_1 < other.xc_1 ? this.yc_1 < other.xc_1 : false;
  };
  Interval.prototype.v18 = function (other) {
    return this.xc_1 > other.yc_1;
  };
  Interval.prototype.w18 = function (other) {
    return this.u18(other) ? true : this.v18(other);
  };
  Interval.prototype.x18 = function (other) {
    return this.xc_1 === (other.yc_1 + 1 | 0) ? true : this.yc_1 === (other.xc_1 - 1 | 0);
  };
  Interval.prototype.y18 = function (other) {
    return Companion_getInstance_32().ff(Math_getInstance().rb(this.xc_1, other.xc_1), Math_getInstance().sb(this.yc_1, other.yc_1));
  };
  Interval.prototype.toString = function () {
    return this.xc_1.toString() + '..' + this.yc_1;
  };
  Interval.$metadata$ = classMeta('Interval');
  function IntervalSet_init_$Init$(set, $this) {
    IntervalSet_init_$Init$_0(new Int32Array([]), $this);
    $this.ck(set);
    return $this;
  }
  function IntervalSet_init_$Create$(set) {
    return IntervalSet_init_$Init$(set, Object.create(IntervalSet.prototype));
  }
  function IntervalSet_init_$Init$_0(els, $this) {
    IntervalSet.call($this);
    if (els == null) {
      $this.zg_1 = ArrayList_init_$Create$(2);
    } else {
      $this.zg_1 = ArrayList_init_$Create$(els.length);
      var indexedObject = els;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var e = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        $this.dh(e);
      }
    }
    return $this;
  }
  function IntervalSet_init_$Create$_0(els) {
    return IntervalSet_init_$Init$_0(els, Object.create(IntervalSet.prototype));
  }
  function Companion_32() {
    Companion_instance_32 = this;
    this.my_1 = Companion_getInstance_33().ff(Companion_getInstance_5().nl_1, Companion_getInstance_5().ol_1);
    this.my_1.cq(true);
    this.ny_1 = IntervalSet_init_$Create$_0(new Int32Array([]));
    this.ny_1.cq(true);
  }
  Companion_32.prototype.oy = function (a) {
    var s = IntervalSet_init_$Create$_0(new Int32Array([]));
    s.dh(a);
    return s;
  };
  Companion_32.prototype.ff = function (a, b) {
    var s = IntervalSet_init_$Create$_0(new Int32Array([]));
    s.xt(a, b);
    return s;
  };
  Companion_32.prototype.z18 = function (left, right) {
    if (left == null ? true : left.uj()) {
      return IntervalSet_init_$Create$_0(new Int32Array([]));
    }
    var result = IntervalSet_init_$Create$(left);
    if (right == null ? true : right.uj()) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    $l$loop_4: while (resultI < ensureNotNull(result.zg_1).h() ? rightI < ensureNotNull(right.zg_1).h() : false) {
      var resultInterval = ensureNotNull(result.zg_1).j(resultI);
      var rightInterval = ensureNotNull(right.zg_1).j(rightI);
      if (rightInterval.yc_1 < resultInterval.xc_1) {
        var tmp0 = rightI;
        rightI = tmp0 + 1 | 0;
        continue $l$loop_4;
      }
      if (rightInterval.xc_1 > resultInterval.yc_1) {
        var tmp1 = resultI;
        resultI = tmp1 + 1 | 0;
        continue $l$loop_4;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.xc_1 > resultInterval.xc_1) {
        beforeCurrent = new Interval(resultInterval.xc_1, rightInterval.xc_1 - 1 | 0);
      }
      if (rightInterval.yc_1 < resultInterval.yc_1) {
        afterCurrent = new Interval(rightInterval.yc_1 + 1 | 0, resultInterval.yc_1);
      }
      if (!(beforeCurrent == null)) {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.zg_1).j4(resultI, beforeCurrent);
          ensureNotNull(result.zg_1).w4(resultI + 1 | 0, afterCurrent);
          var tmp2 = resultI;
          resultI = tmp2 + 1 | 0;
          var tmp3 = rightI;
          rightI = tmp3 + 1 | 0;
          continue $l$loop_4;
        } else {
          ensureNotNull(result.zg_1).j4(resultI, beforeCurrent);
          var tmp4 = resultI;
          resultI = tmp4 + 1 | 0;
          continue $l$loop_4;
        }
      } else {
        if (!(afterCurrent == null)) {
          ensureNotNull(result.zg_1).j4(resultI, afterCurrent);
          var tmp5 = rightI;
          rightI = tmp5 + 1 | 0;
          continue $l$loop_4;
        } else {
          ensureNotNull(result.zg_1).p4(resultI);
          continue $l$loop_4;
        }
      }
    }
    return result;
  };
  Companion_32.$metadata$ = objectMeta('Companion');
  var Companion_instance_32;
  function Companion_getInstance_33() {
    if (Companion_instance_32 == null)
      new Companion_32();
    return Companion_instance_32;
  }
  IntervalSet.prototype.uj = function () {
    return this.zg_1 == null ? true : ensureNotNull(this.zg_1).d();
  };
  IntervalSet.prototype.tj = function () {
    if (this.uj()) {
      throw RuntimeException_init_$Create$_0('set is empty');
    }
    return ensureNotNull(this.zg_1).j(0).xc_1;
  };
  IntervalSet.prototype.cq = function (readonly) {
    if (this.ah_1 ? !readonly : false)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.ah_1 = readonly;
  };
  IntervalSet.prototype.dh = function (el) {
    if (this.ah_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    this.xt(el, el);
  };
  IntervalSet.prototype.xt = function (a, b) {
    this.a19(Companion_getInstance_32().ff(a, b));
  };
  IntervalSet.prototype.a19 = function (addition) {
    if (this.ah_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    if (addition.yc_1 < addition.xc_1) {
      return Unit_getInstance();
    }
    var iter = ensureNotNull(this.zg_1).z4();
    while (iter.f()) {
      var r = iter.g();
      if (addition.equals(r)) {
        return Unit_getInstance();
      }
      if (addition.x18(r) ? true : !addition.w18(r)) {
        var bigger = addition.y18(r);
        iter.c4(bigger);
        $l$loop: while (iter.f()) {
          var next = iter.g();
          if (!bigger.x18(next) ? bigger.w18(next) : false) {
            break $l$loop;
          }
          iter.b4();
          iter.e4();
          iter.c4(bigger.y18(next));
          iter.g();
        }
        return Unit_getInstance();
      }
      if (addition.u18(r)) {
        iter.e4();
        iter.d4(addition);
        return Unit_getInstance();
      }
    }
    ensureNotNull(this.zg_1).a(addition);
  };
  IntervalSet.prototype.ck = function (set) {
    if (set == null) {
      return this;
    }
    if (set instanceof IntervalSet) {
      var other = (set == null ? true : set instanceof IntervalSet) ? set : THROW_CCE();
      var n = ensureNotNull(ensureNotNull(other).zg_1).h();
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var I = ensureNotNull(other.zg_1).j(i);
          this.xt(I.xc_1, I.yc_1);
        }
         while (inductionVariable < n);
    } else {
      var tmp1_iterator = ensureNotNull(set).q18().e();
      while (tmp1_iterator.f()) {
        var value = tmp1_iterator.g();
        this.dh(value);
      }
    }
    return this;
  };
  IntervalSet.prototype.pz = function (vocabulary) {
    if (vocabulary == null ? true : ensureNotNull(vocabulary).uj()) {
      return null;
    }
    var vocabularyIS;
    if (vocabulary instanceof IntervalSet) {
      vocabularyIS = vocabulary;
    } else {
      vocabularyIS = IntervalSet_init_$Create$_0(new Int32Array([]));
      vocabularyIS.ck(vocabulary);
    }
    return vocabularyIS.b19(this);
  };
  IntervalSet.prototype.b19 = function (a) {
    if (a == null ? true : ensureNotNull(a).uj()) {
      return IntervalSet_init_$Create$(this);
    }
    if (a instanceof IntervalSet) {
      var tmp = Companion_getInstance_33();
      return tmp.z18(this, (a == null ? true : a instanceof IntervalSet) ? a : THROW_CCE());
    }
    var other = IntervalSet_init_$Create$_0(new Int32Array([]));
    other.ck(a);
    return Companion_getInstance_33().z18(this, other);
  };
  IntervalSet.prototype.di = function (a) {
    var o = IntervalSet_init_$Create$_0(new Int32Array([]));
    o.ck(this);
    o.ck(a);
    return o;
  };
  IntervalSet.prototype.bh = function (el) {
    var n = ensureNotNull(this.zg_1).h();
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = ensureNotNull(this.zg_1).j(m);
      var a = I.xc_1;
      var b = I.yc_1;
      if (b < el) {
        l = m + 1 | 0;
      } else if (a > el) {
        r = m - 1 | 0;
      } else {
        return true;
      }
    }
    return false;
  };
  IntervalSet.prototype.hashCode = function () {
    var tmp = MurmurHash_getInstance();
    var hash = tmp.j11(0, 1, null);
    var tmp0_iterator = ensureNotNull(this.zg_1).e();
    while (tmp0_iterator.f()) {
      var I = tmp0_iterator.g();
      hash = MurmurHash_getInstance().br(hash, I.xc_1);
      hash = MurmurHash_getInstance().br(hash, I.yc_1);
    }
    hash = MurmurHash_getInstance().dr(hash, imul(ensureNotNull(this.zg_1).h(), 2));
    return hash;
  };
  IntervalSet.prototype.equals = function (obj) {
    var tmp;
    if (obj == null) {
      tmp = true;
    } else {
      tmp = !(obj instanceof IntervalSet);
    }
    if (tmp) {
      return false;
    }
    var other = (obj == null ? true : obj instanceof IntervalSet) ? obj : THROW_CCE();
    return equals(this.zg_1, ensureNotNull(other).zg_1);
  };
  IntervalSet.prototype.toString = function () {
    return this.c19(false);
  };
  IntervalSet.prototype.c19 = function (elemAreChar) {
    var buf = StringBuilder_init_$Create$();
    if (this.zg_1 == null ? true : ensureNotNull(this.zg_1).d()) {
      return '{}';
    }
    if (this.sc() > 1) {
      buf.x9('{');
    }
    var iter = ensureNotNull(this.zg_1).e();
    while (iter.f()) {
      var I = iter.g();
      var a = I.xc_1;
      var b = I.yc_1;
      if (a === b) {
        if (a === Companion_getInstance_7().od_1) {
          buf.x9('<EOF>');
        } else if (elemAreChar) {
          // Inline function 'kotlin.TODO' call
          throw NotImplementedError_init_$Create$(null, 1, null);
        } else {
          buf.v9(a);
        }
      } else {
        if (elemAreChar) {
          // Inline function 'kotlin.TODO' call
          throw NotImplementedError_init_$Create$(null, 1, null);
        } else {
          buf.v9(a).x9('..').v9(b);
        }
      }
      if (iter.f()) {
        buf.x9(', ');
      }
    }
    if (this.sc() > 1) {
      buf.x9('}');
    }
    return buf.toString();
  };
  IntervalSet.prototype.fj = function (vocabulary) {
    var buf = StringBuilder_init_$Create$();
    if (this.zg_1 == null ? true : ensureNotNull(this.zg_1).d()) {
      return '{}';
    }
    if (this.sc() > 1) {
      buf.x9('{');
    }
    var iter = ensureNotNull(this.zg_1).e();
    while (iter.f()) {
      var I = iter.g();
      var a = I.xc_1;
      var b = I.yc_1;
      if (a === b) {
        buf.x9(this.d19(vocabulary, a));
      } else {
        var inductionVariable = a;
        if (inductionVariable <= b)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            if (i > a) {
              buf.x9(', ');
            }
            buf.x9(this.d19(vocabulary, i));
          }
           while (!(i === b));
      }
      if (iter.f()) {
        buf.x9(', ');
      }
    }
    if (this.sc() > 1) {
      buf.x9('}');
    }
    return buf.toString();
  };
  IntervalSet.prototype.d19 = function (vocabulary, a) {
    var tmp;
    if (a === Companion_getInstance_7().od_1) {
      tmp = '<EOF>';
    } else if (a === Companion_getInstance_7().md_1) {
      tmp = '<EPSILON>';
    } else {
      tmp = vocabulary.mf(a);
    }
    return tmp;
  };
  IntervalSet.prototype.sc = function () {
    var n = 0;
    var numIntervals = ensureNotNull(this.zg_1).h();
    if (numIntervals === 1) {
      var firstInterval = ensureNotNull(this.zg_1).j(0);
      return (firstInterval.yc_1 - firstInterval.xc_1 | 0) + 1 | 0;
    }
    var inductionVariable = 0;
    if (inductionVariable < numIntervals)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.zg_1).j(i);
        n = n + ((I.yc_1 - I.xc_1 | 0) + 1 | 0) | 0;
      }
       while (inductionVariable < numIntervals);
    return n;
  };
  IntervalSet.prototype.q18 = function () {
    var values = ArrayList_init_$Create$_0();
    var n = ensureNotNull(this.zg_1).h();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.zg_1).j(i);
        var a = I.xc_1;
        var b = I.yc_1;
        var inductionVariable_0 = a;
        if (inductionVariable_0 <= b)
          do {
            var v = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            values.a(v);
          }
           while (!(v === b));
      }
       while (inductionVariable < n);
    return values;
  };
  IntervalSet.prototype.ek = function (el) {
    if (this.ah_1)
      throw IllegalStateException_init_$Create$("can't alter readonly IntervalSet");
    var n = ensureNotNull(this.zg_1).h();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop_2: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var I = ensureNotNull(this.zg_1).j(i);
        var a = I.xc_1;
        var b = I.yc_1;
        if (el < a) {
          break $l$loop_2;
        }
        if (el === a ? el === b : false) {
          ensureNotNull(this.zg_1).p4(i);
          break $l$loop_2;
        }
        if (el === a) {
          var tmp1_this = I;
          var tmp2 = tmp1_this.xc_1;
          tmp1_this.xc_1 = tmp2 + 1 | 0;
          break $l$loop_2;
        }
        if (el === b) {
          var tmp3_this = I;
          var tmp4 = tmp3_this.yc_1;
          tmp3_this.yc_1 = tmp4 - 1 | 0;
          break $l$loop_2;
        }
        if (el > a ? el < b : false) {
          var oldb = I.yc_1;
          I.yc_1 = el - 1 | 0;
          this.xt(el + 1 | 0, oldb);
        }
      }
       while (inductionVariable < n);
  };
  function IntervalSet() {
    Companion_getInstance_33();
    this.zg_1 = null;
    this.ah_1 = false;
  }
  IntervalSet.$metadata$ = classMeta('IntervalSet', [IntSet]);
  function MurmurHash() {
    MurmurHash_instance = this;
    this.zq_1 = 0;
  }
  MurmurHash.prototype.ar = function (seed) {
    return seed;
  };
  MurmurHash.prototype.j11 = function (seed, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      seed = this.zq_1;
    return this.ar(seed);
  };
  MurmurHash.prototype.br = function (hash, value) {
    var hash_0 = hash;
    var c1 = -862048943;
    var c2 = 461845907;
    var r1 = 15;
    var r2 = 13;
    var m = 5;
    var n = -430675100;
    var k = value;
    k = imul(k, c1);
    k = k << r1 | (k >>> (32 - r1 | 0) | 0);
    k = imul(k, c2);
    hash_0 = hash_0 ^ k;
    hash_0 = hash_0 << r2 | (hash_0 >>> (32 - r2 | 0) | 0);
    hash_0 = imul(hash_0, m) + n | 0;
    return hash_0;
  };
  MurmurHash.prototype.cr = function (hash, value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return this.br(hash, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  MurmurHash.prototype.dr = function (hash, numberOfWords) {
    var hash_0 = hash;
    hash_0 = hash_0 ^ imul(numberOfWords, 4);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    hash_0 = imul(hash_0, -2048144789);
    hash_0 = hash_0 ^ (hash_0 >>> 13 | 0);
    hash_0 = imul(hash_0, -1028477387);
    hash_0 = hash_0 ^ (hash_0 >>> 16 | 0);
    return hash_0;
  };
  MurmurHash.$metadata$ = objectMeta('MurmurHash');
  var MurmurHash_instance;
  function MurmurHash_getInstance() {
    if (MurmurHash_instance == null)
      new MurmurHash();
    return MurmurHash_instance;
  }
  function Companion_33() {
    Companion_instance_33 = this;
    this.zz_1 = new ObjectEqualityComparator();
  }
  Companion_33.$metadata$ = objectMeta('Companion');
  var Companion_instance_33;
  function Companion_getInstance_34() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function ObjectEqualityComparator() {
    Companion_getInstance_34();
    AbstractEqualityComparator.call(this);
  }
  ObjectEqualityComparator.prototype.is = function (obj) {
    var tmp0_safe_receiver = obj;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  ObjectEqualityComparator.prototype.ks = function (a, b) {
    var tmp;
    if (a == null) {
      tmp = b == null;
    } else {
      tmp = equals(a, b);
    }
    return tmp;
  };
  ObjectEqualityComparator.$metadata$ = classMeta('ObjectEqualityComparator', undefined, undefined, undefined, undefined, AbstractEqualityComparator.prototype);
  function Utils() {
    Utils_instance = this;
  }
  Utils.prototype.mn = function (s, escapeSpaces) {
    var buf = StringBuilder_init_$Create$();
    var indexedObject = asCharArray(s);
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var c = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? escapeSpaces : false) {
        buf.c(_Char___init__impl__6a9atx(183));
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(9)))) {
        buf.x9('\\t');
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(10)))) {
        buf.x9('\\n');
      } else if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)))) {
        buf.x9('\\r');
      } else {
        buf.c(c);
      }
    }
    return buf.toString();
  };
  Utils.$metadata$ = objectMeta('Utils');
  var Utils_instance;
  function Utils_getInstance() {
    if (Utils_instance == null)
      new Utils();
    return Utils_instance;
  }
  function AbstractParseTreeVisitor() {
  }
  AbstractParseTreeVisitor.prototype.e19 = function (tree) {
    return tree.kp(this);
  };
  AbstractParseTreeVisitor.prototype.pp = function (node) {
    var result = this.f19();
    var n = node.bp();
    var inductionVariable = 0;
    if (inductionVariable < n)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!this.g19(node, result)) {
          break $l$loop;
        }
        var c = node.fp(i);
        var childResult = ensureNotNull(c).kp(this);
        result = this.h19(result, ensureNotNull(childResult));
      }
       while (inductionVariable < n);
    return result;
  };
  AbstractParseTreeVisitor.prototype.i19 = function (node) {
    return this.f19();
  };
  AbstractParseTreeVisitor.prototype.j19 = function (node) {
    return this.f19();
  };
  AbstractParseTreeVisitor.prototype.f19 = function () {
    return null;
  };
  AbstractParseTreeVisitor.prototype.h19 = function (aggregate, nextResult) {
    return nextResult;
  };
  AbstractParseTreeVisitor.prototype.g19 = function (node, currentResult) {
    return true;
  };
  AbstractParseTreeVisitor.$metadata$ = classMeta('AbstractParseTreeVisitor', [ParseTreeVisitor]);
  function ErrorNode() {
  }
  ErrorNode.$metadata$ = interfaceMeta('ErrorNode', [TerminalNode]);
  function ErrorNodeImpl(token) {
    TerminalNodeImpl.call(this, token);
  }
  ErrorNodeImpl.prototype.kp = function (visitor) {
    return visitor.j19(this);
  };
  ErrorNodeImpl.$metadata$ = classMeta('ErrorNodeImpl', [ErrorNode], undefined, undefined, undefined, TerminalNodeImpl.prototype);
  function ParseTree() {
  }
  ParseTree.$metadata$ = interfaceMeta('ParseTree', [SyntaxTree]);
  function ParseTreeListener() {
  }
  ParseTreeListener.$metadata$ = interfaceMeta('ParseTreeListener');
  function ParseTreeVisitor() {
  }
  ParseTreeVisitor.$metadata$ = interfaceMeta('ParseTreeVisitor');
  function RuleNode() {
  }
  RuleNode.$metadata$ = interfaceMeta('RuleNode', [ParseTree]);
  function SyntaxTree() {
  }
  SyntaxTree.$metadata$ = interfaceMeta('SyntaxTree', [Tree]);
  function TerminalNode() {
  }
  TerminalNode.$metadata$ = interfaceMeta('TerminalNode', [ParseTree]);
  function TerminalNodeImpl(symbol) {
    this.m19_1 = symbol;
    this.n19_1 = null;
  }
  TerminalNodeImpl.prototype.ip = function () {
    return this.m19_1;
  };
  TerminalNodeImpl.prototype.ep = function (value) {
    this.n19_1 = value;
  };
  TerminalNodeImpl.prototype.zd = function () {
    return ensureNotNull(ensureNotNull(this.ip()).zd());
  };
  TerminalNodeImpl.prototype.kp = function (visitor) {
    return visitor.i19(this);
  };
  TerminalNodeImpl.prototype.toString = function () {
    return ensureNotNull(this.ip()).kd() === Companion_getInstance_7().od_1 ? '<EOF>' : ensureNotNull(ensureNotNull(this.ip()).zd());
  };
  TerminalNodeImpl.$metadata$ = classMeta('TerminalNodeImpl', [TerminalNode]);
  function Tree() {
  }
  Tree.$metadata$ = interfaceMeta('Tree');
  var DEFAULT_CHANNEL;
  function BitSet_init_$Init$($this) {
    BitSet.call($this);
    return $this;
  }
  function BitSet_init_$Create$() {
    return BitSet_init_$Init$(Object.create(BitSet.prototype));
  }
  BitSet.prototype.ws = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.vs_1.a(bitIndex);
  };
  BitSet.prototype.oz = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    this.vs_1.h6(bitIndex);
  };
  BitSet.prototype.j = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_$Create$_0();
    return this.vs_1.t(bitIndex);
  };
  BitSet.prototype.h13 = function () {
    return this.vs_1.h();
  };
  BitSet.prototype.g13 = function (i) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.filter' call
    var tmp0_filter = this.vs_1;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_filterTo = ArrayList_init_$Create$_0();
    var tmp0_iterator = tmp0_filter.e();
    while (tmp0_iterator.f()) {
      var element = tmp0_iterator.g();
      var tmp$ret$0;
      // Inline function 'com.strumenta.kotlinmultiplatform.BitSet.nextSetBit.<anonymous>' call
      tmp$ret$0 = element >= i;
      if (tmp$ret$0) {
        tmp0_filterTo.a(element);
      }
    }
    tmp$ret$1 = tmp0_filterTo;
    tmp$ret$2 = tmp$ret$1;
    var nextSetBits = tmp$ret$2;
    var tmp0_elvis_lhs = minOrNull(nextSetBits);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  BitSet.prototype.h16 = function (alts) {
    this.vs_1.b2(alts.vs_1);
  };
  function BitSet() {
    this.vs_1 = HashSet_init_$Create$();
  }
  BitSet.$metadata$ = classMeta('BitSet');
  function Collections() {
    Collections_instance = this;
  }
  Collections.prototype.y16 = function (precedencePredicates) {
    var tmp0_elvis_lhs = minOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Collections.prototype.a17 = function (precedencePredicates) {
    var tmp0_elvis_lhs = maxOrNull(precedencePredicates);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Collections.$metadata$ = objectMeta('Collections');
  var Collections_instance;
  function Collections_getInstance() {
    if (Collections_instance == null)
      new Collections();
    return Collections_instance;
  }
  function IdentityHashMap() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp$ret$0 = LinkedHashMap_init_$Create$();
    tmp.r15_1 = tmp$ret$0;
  }
  IdentityHashMap.prototype.c1 = function () {
    return this.r15_1.c1();
  };
  IdentityHashMap.prototype.q5 = function () {
    return this.r15_1.q5();
  };
  IdentityHashMap.prototype.h = function () {
    return this.r15_1.h();
  };
  IdentityHashMap.prototype.q1 = function () {
    return this.r15_1.q1();
  };
  IdentityHashMap.prototype.n1 = function (key) {
    return this.r15_1.n1(key);
  };
  IdentityHashMap.prototype.p1 = function (key) {
    return this.r15_1.p1(key);
  };
  IdentityHashMap.prototype.a2 = function (key, value) {
    return this.r15_1.a2(key, value);
  };
  IdentityHashMap.$metadata$ = classMeta('IdentityHashMap', [MutableMap]);
  var Variant_VARIANT_0_instance;
  var Variant_VARIANT_1_instance;
  var Variant_VARIANT_2_instance;
  var Variant_VARIANT_FUTURE_instance;
  var Variant_entriesInitialized;
  function Variant_initEntries() {
    if (Variant_entriesInitialized)
      return Unit_getInstance();
    Variant_entriesInitialized = true;
    Variant_VARIANT_0_instance = new Variant('VARIANT_0', 0, 0, 3);
    Variant_VARIANT_1_instance = new Variant('VARIANT_1', 1, 1, 2);
    Variant_VARIANT_2_instance = new Variant('VARIANT_2', 2, 2, 3);
    Variant_VARIANT_FUTURE_instance = new Variant('VARIANT_FUTURE', 3, 3, 3);
  }
  function Variant(name, ordinal, value, bitsLength) {
    Enum.call(this, name, ordinal);
    this.q19_1 = value;
    this.r19_1 = bitsLength;
  }
  Variant.$metadata$ = classMeta('Variant', undefined, undefined, undefined, undefined, Enum.prototype);
  function Companion_34() {
    Companion_instance_34 = this;
  }
  Companion_34.prototype.yt = function (encoded) {
    var parts = split$default(encoded, ['-'], false, 0, 6, null);
    // Inline function 'kotlin.require' call
    var tmp0_require = parts.h() === 5;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$0 = 'Failed requirement.';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = parts.j(0).length === 8;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$1 = 'Failed requirement.';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    var tmp2_require = parts.j(1).length === 4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp2_require) {
      var tmp$ret$2;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$2 = 'Failed requirement.';
      var message_1 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    // Inline function 'kotlin.require' call
    var tmp3_require = parts.j(2).length === 4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp3_require) {
      var tmp$ret$3;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$3 = 'Failed requirement.';
      var message_2 = tmp$ret$3;
      throw IllegalArgumentException_init_$Create$(toString(message_2));
    }
    // Inline function 'kotlin.require' call
    var tmp4_require = parts.j(3).length === 4;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp4_require) {
      var tmp$ret$4;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$4 = 'Failed requirement.';
      var message_3 = tmp$ret$4;
      throw IllegalArgumentException_init_$Create$(toString(message_3));
    }
    // Inline function 'kotlin.require' call
    var tmp5_require = parts.j(4).length === 12;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp5_require) {
      var tmp$ret$5;
      // Inline function 'kotlin.require.<anonymous>' call
      tmp$ret$5 = 'Failed requirement.';
      var message_4 = tmp$ret$5;
      throw IllegalArgumentException_init_$Create$(toString(message_4));
    }
    var time_hi_and_version = toLong_0(parts.j(2), 16);
    var clock_seq_hi_and_res = toLong_0(parts.j(3), 16);
    var topBit1st = clock_seq_hi_and_res.lb(15);
    var topBit2nd = clock_seq_hi_and_res.lb(14).mb(new Long(1, 0));
    var topBit3nd = clock_seq_hi_and_res.lb(13).mb(new Long(1, 0));
    var tmp;
    if (topBit1st.equals(new Long(0, 0))) {
      throw UnsupportedOperationException_init_$Create$();
    } else if ((topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(1, 0)) : false) ? topBit3nd.equals(new Long(1, 0)) : false) {
      throw UnsupportedOperationException_init_$Create$();
    } else if (topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(0, 0)) : false) {
      tmp = Variant_VARIANT_1_getInstance();
    } else if ((topBit1st.equals(new Long(1, 0)) ? topBit2nd.equals(new Long(1, 0)) : false) ? topBit3nd.equals(new Long(0, 0)) : false) {
      tmp = Variant_VARIANT_2_getInstance();
    } else {
      throw UnsupportedOperationException_init_$Create$();
    }
    var variantEnum = tmp;
    var version = time_hi_and_version.lb(12);
    var timeLow = toLong_0(parts.j(0), 16);
    var timeMid = toLong_0(parts.j(1), 16);
    var timeHi = time_hi_and_version.mb(new Long(4095, 0));
    var variant = new Long(2, 0);
    var tmp0_subject = variantEnum.r19_1;
    var tmp_0;
    switch (tmp0_subject) {
      case 2:
        tmp_0 = clock_seq_hi_and_res.mb(new Long(16383, 0));
        break;
      case 3:
        tmp_0 = clock_seq_hi_and_res.mb(new Long(8191, 0));
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var clockSeq = tmp_0;
    var node = toLong_0(parts.j(4), 16);
    return UUID_init_$Create$_0(version, timeLow, timeMid, timeHi, variant, clockSeq, node);
  };
  Companion_34.$metadata$ = objectMeta('Companion');
  var Companion_instance_34;
  function Companion_getInstance_35() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function UUID_init_$Init$(most, least, $this) {
    UUID.call($this);
    $this.s19_1 = most.lb(32);
    $this.t19_1 = most.mb(new Long(-65536, 0)).lb(16);
    $this.u19_1 = most.mb(new Long(61440, 0)).lb(12);
    $this.v19_1 = most.mb(new Long(4095, 0));
    var variantLayout = least.lb(62);
    $this.w19_1 = new Long(2, 0);
    $this.x19_1 = least.lb(48).mb(new Long(16383, 0));
    $this.y19_1 = least.mb(new Long(-1, 65535));
    return $this;
  }
  function UUID_init_$Create$(most, least) {
    return UUID_init_$Init$(most, least, Object.create(UUID.prototype));
  }
  function UUID_init_$Init$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, $this) {
    UUID.call($this);
    $this.u19_1 = version;
    $this.s19_1 = timeLow;
    $this.t19_1 = timeMid;
    $this.v19_1 = timeHi;
    $this.w19_1 = variant;
    $this.x19_1 = clock_seq;
    $this.y19_1 = node;
    return $this;
  }
  function UUID_init_$Create$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node) {
    return UUID_init_$Init$_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, Object.create(UUID.prototype));
  }
  function Variant_VARIANT_1_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_1_instance;
  }
  function Variant_VARIANT_2_getInstance() {
    Variant_initEntries();
    return Variant_VARIANT_2_instance;
  }
  UUID.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals(get_js(getKClassFromExpression(this)), get_js(getKClassFromExpression(other))))
      return false;
    if (other instanceof UUID)
      other;
    else
      THROW_CCE();
    if (!this.s19_1.equals(other.s19_1))
      return false;
    if (!this.t19_1.equals(other.t19_1))
      return false;
    if (!this.u19_1.equals(other.u19_1))
      return false;
    if (!this.v19_1.equals(other.v19_1))
      return false;
    if (!this.w19_1.equals(other.w19_1))
      return false;
    if (!this.x19_1.equals(other.x19_1))
      return false;
    if (!this.y19_1.equals(other.y19_1))
      return false;
    return true;
  };
  UUID.prototype.hashCode = function () {
    var result = this.s19_1.hashCode();
    result = imul(31, result) + this.t19_1.hashCode() | 0;
    result = imul(31, result) + this.u19_1.hashCode() | 0;
    result = imul(31, result) + this.v19_1.hashCode() | 0;
    result = imul(31, result) + this.w19_1.hashCode() | 0;
    result = imul(31, result) + this.x19_1.hashCode() | 0;
    result = imul(31, result) + this.y19_1.hashCode() | 0;
    return result;
  };
  UUID.prototype.toString = function () {
    return 'UUID(timeLow=' + toString(this.s19_1) + ', timeMid=' + toString(this.t19_1) + ', version=' + toString(this.u19_1) + ', timeHi=' + toString(this.v19_1) + ', variant=' + toString(this.w19_1) + ', clock_seq=' + toString(this.x19_1) + ', node=' + toString(this.y19_1) + ')';
  };
  function UUID() {
    Companion_getInstance_35();
  }
  UUID.$metadata$ = classMeta('UUID');
  function WeakHashMap_init_$Init$($this) {
    WeakHashMap.call($this, LinkedHashMap_init_$Create$());
    return $this;
  }
  function WeakHashMap_init_$Create$() {
    return WeakHashMap_init_$Init$(Object.create(WeakHashMap.prototype));
  }
  function WeakHashMap(_wrapped) {
    this.z19_1 = _wrapped;
  }
  WeakHashMap.prototype.c1 = function () {
    return this.z19_1.c1();
  };
  WeakHashMap.prototype.q5 = function () {
    return this.z19_1.q5();
  };
  WeakHashMap.prototype.h = function () {
    return this.z19_1.h();
  };
  WeakHashMap.prototype.q1 = function () {
    return this.z19_1.q1();
  };
  WeakHashMap.prototype.n1 = function (key) {
    return this.z19_1.n1(key);
  };
  WeakHashMap.prototype.p1 = function (key) {
    return this.z19_1.p1(key);
  };
  WeakHashMap.prototype.a2 = function (key, value) {
    return this.z19_1.a2(key, value);
  };
  WeakHashMap.$metadata$ = classMeta('WeakHashMap', [MutableMap]);
  function maxValue(_this__u8e3s4) {
    return _Char___init__impl__6a9atx(65535);
  }
  function errMessage(message) {
    console.error(message);
  }
  function synchronized(lock, block) {
    return block();
  }
  function Type(javaClass) {
    this.a1a_1 = javaClass;
  }
  Type.$metadata$ = classMeta('Type');
  function isInstance(_this__u8e3s4, any) {
    return get_kotlin(_this__u8e3s4.a1a_1).y7(any);
  }
  function getType(_this__u8e3s4, name) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.find' call
    var tmp0_find = _this__u8e3s4.wb();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = tmp0_find.e();
      while (tmp0_iterator.f()) {
        var element = tmp0_iterator.g();
        var tmp$ret$0;
        // Inline function 'com.strumenta.kotlinmultiplatform.getType.<anonymous>' call
        tmp$ret$0 = element.x7() === name;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    tmp$ret$2 = tmp$ret$1;
    return new Type(get_js(ensureNotNull(tmp$ret$2)));
  }
  //region block: init
  DEFAULT_CHANNEL = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TypeDeclarator;
  _.$_$.b = asCharArray;
  _.$_$.c = getType;
  _.$_$.d = ATNDeserializer_init_$Create$;
  _.$_$.e = FailedPredicateException_init_$Create$;
  _.$_$.f = NoViableAltException_init_$Create$;
  _.$_$.g = VocabularyImpl_init_$Create$;
  _.$_$.h = ANTLRInputStream_init_$Create$;
  _.$_$.i = Lexer_init_$Init$;
  _.$_$.j = ParserRuleContext_init_$Init$;
  _.$_$.k = ParserRuleContext_init_$Init$_0;
  _.$_$.l = Companion_getInstance_9;
  _.$_$.m = LexerATNSimulator;
  _.$_$.n = ParserATNSimulator;
  _.$_$.o = PredictionContextCache;
  _.$_$.p = DFA;
  _.$_$.q = AbstractParseTreeVisitor;
  _.$_$.r = ParseTreeListener;
  _.$_$.s = ParseTreeVisitor;
  _.$_$.t = CommonTokenStream;
  _.$_$.u = Lexer;
  _.$_$.v = ParserRuleContext;
  _.$_$.w = Parser;
  _.$_$.x = RecognitionException;
  _.$_$.y = Token;
  //endregion
  return _;
}));

//# sourceMappingURL=antlr-kotlin-antlr-kotlin-runtime-js-ir.js.map
