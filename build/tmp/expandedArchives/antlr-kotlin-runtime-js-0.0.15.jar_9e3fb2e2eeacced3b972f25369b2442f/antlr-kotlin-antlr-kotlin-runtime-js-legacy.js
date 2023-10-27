(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'antlr-kotlin-antlr-kotlin-runtime-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'antlr-kotlin-antlr-kotlin-runtime-js-legacy'.");
    }
    root['antlr-kotlin-antlr-kotlin-runtime-js-legacy'] = factory(typeof this['antlr-kotlin-antlr-kotlin-runtime-js-legacy'] === 'undefined' ? {} : this['antlr-kotlin-antlr-kotlin-runtime-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_xqrb1d$;
  var toCharArray = Kotlin.kotlin.collections.toCharArray_rr68x$;
  var contentEquals = Kotlin.arrayEquals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  var JsMath = Math;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var copyOfRange = Kotlin.kotlin.collections.copyOfRange_wlitf7$;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Pair = Kotlin.kotlin.Pair;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init;
  var toChar = Kotlin.toChar;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var lastIndexOf = Kotlin.kotlin.text.lastIndexOf_8eortd$;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var toMap = Kotlin.kotlin.collections.toMap_abgq59$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var List = Kotlin.kotlin.collections.List;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var equals = Kotlin.equals;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var hasSurrogatePairAt = Kotlin.kotlin.text.hasSurrogatePairAt_94bcnn$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var isHighSurrogate = Kotlin.kotlin.text.isHighSurrogate_myv2d0$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var copyOf = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var count = Kotlin.kotlin.sequences.count_veqyi0$;
  var none = Kotlin.kotlin.sequences.none_veqyi0$;
  var last = Kotlin.kotlin.sequences.last_veqyi0$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var hashCode = Kotlin.hashCode;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var Set = Kotlin.kotlin.collections.Set;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_355ntz$;
  var kotlin_js_internal_CharCompanionObject = Kotlin.kotlin.js.internal.CharCompanionObject;
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var L0 = Kotlin.Long.ZERO;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_emfgvx$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var copyOf_1 = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var Comparable = Kotlin.kotlin.Comparable;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var joinToString_1 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var numberToInt = Kotlin.numberToInt;
  var Any = Object;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var MutableSet = Kotlin.kotlin.collections.MutableSet;
  var filterNotNull_0 = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var toMutableSet = Kotlin.kotlin.collections.toMutableSet_7wnvza$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var IllegalArgumentException_init_0 = Kotlin.kotlin.IllegalArgumentException_init;
  var sort = Kotlin.primitiveArraySort;
  var joinToString_2 = Kotlin.kotlin.collections.joinToString_vk9fgb$;
  var indexOf_0 = Kotlin.kotlin.collections.indexOf_c03ot6$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_bo8l67$;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_tmsbgo$;
  var toTypedArray_0 = Kotlin.kotlin.collections.toTypedArray_355ntz$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var RuntimeException_init_0 = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Annotation = Kotlin.kotlin.Annotation;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var indexOf_1 = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var minOrNull = Kotlin.kotlin.collections.minOrNull_exjks8$;
  var maxOrNull = Kotlin.kotlin.collections.maxOrNull_exjks8$;
  var toLong = Kotlin.kotlin.text.toLong_6ic1pp$;
  var L1 = Kotlin.Long.ONE;
  var L4095 = Kotlin.Long.fromInt(4095);
  var L2 = Kotlin.Long.fromInt(2);
  var L16383 = Kotlin.Long.fromInt(16383);
  var L8191 = Kotlin.Long.fromInt(8191);
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var L4294901760 = new Kotlin.Long(-65536, 0);
  var L61440 = Kotlin.Long.fromInt(61440);
  var L281474976710655 = new Kotlin.Long(-1, 65535);
  var uppercaseChar = Kotlin.kotlin.text.uppercaseChar_myv2d0$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var get_kotlin = Kotlin.kotlin.js.get_kotlin_2sk2mx$;
  ANTLRFileStream.prototype = Object.create(ANTLRInputStream.prototype);
  ANTLRFileStream.prototype.constructor = ANTLRFileStream;
  BailErrorStrategy.prototype = Object.create(DefaultErrorStrategy.prototype);
  BailErrorStrategy.prototype.constructor = BailErrorStrategy;
  CommonTokenStream.prototype = Object.create(BufferedTokenStream.prototype);
  CommonTokenStream.prototype.constructor = CommonTokenStream;
  ConsoleErrorListener.prototype = Object.create(BaseErrorListener.prototype);
  ConsoleErrorListener.prototype.constructor = ConsoleErrorListener;
  DiagnosticErrorListener.prototype = Object.create(BaseErrorListener.prototype);
  DiagnosticErrorListener.prototype.constructor = DiagnosticErrorListener;
  RecognitionException.prototype = Object.create(RuntimeException.prototype);
  RecognitionException.prototype.constructor = RecognitionException;
  FailedPredicateException.prototype = Object.create(RecognitionException.prototype);
  FailedPredicateException.prototype.constructor = FailedPredicateException;
  InputMismatchException.prototype = Object.create(RecognitionException.prototype);
  InputMismatchException.prototype.constructor = InputMismatchException;
  ParserRuleContext.prototype = Object.create(RuleContext.prototype);
  ParserRuleContext.prototype.constructor = ParserRuleContext;
  InterpreterRuleContext.prototype = Object.create(ParserRuleContext.prototype);
  InterpreterRuleContext.prototype.constructor = InterpreterRuleContext;
  Lexer.prototype = Object.create(Recognizer.prototype);
  Lexer.prototype.constructor = Lexer;
  LexerInterpreter.prototype = Object.create(Lexer.prototype);
  LexerInterpreter.prototype.constructor = LexerInterpreter;
  LexerNoViableAltException.prototype = Object.create(RecognitionException.prototype);
  LexerNoViableAltException.prototype.constructor = LexerNoViableAltException;
  NoViableAltException.prototype = Object.create(RecognitionException.prototype);
  NoViableAltException.prototype.constructor = NoViableAltException;
  Parser.prototype = Object.create(Recognizer.prototype);
  Parser.prototype.constructor = Parser;
  RuleContextWithAltNum.prototype = Object.create(ParserRuleContext.prototype);
  RuleContextWithAltNum.prototype.constructor = RuleContextWithAltNum;
  TokenStreamRewriter$InsertBeforeOp.prototype = Object.create(TokenStreamRewriter$RewriteOperation.prototype);
  TokenStreamRewriter$InsertBeforeOp.prototype.constructor = TokenStreamRewriter$InsertBeforeOp;
  TokenStreamRewriter$InsertAfterOp.prototype = Object.create(TokenStreamRewriter$InsertBeforeOp.prototype);
  TokenStreamRewriter$InsertAfterOp.prototype.constructor = TokenStreamRewriter$InsertAfterOp;
  TokenStreamRewriter$ReplaceOp.prototype = Object.create(TokenStreamRewriter$RewriteOperation.prototype);
  TokenStreamRewriter$ReplaceOp.prototype.constructor = TokenStreamRewriter$ReplaceOp;
  ATNConfigSet$AbstractConfigHashSet.prototype = Object.create(Array2DHashSet.prototype);
  ATNConfigSet$AbstractConfigHashSet.prototype.constructor = ATNConfigSet$AbstractConfigHashSet;
  ATNConfigSet$ConfigHashSet.prototype = Object.create(ATNConfigSet$AbstractConfigHashSet.prototype);
  ATNConfigSet$ConfigHashSet.prototype.constructor = ATNConfigSet$ConfigHashSet;
  ATNConfigSet$ConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  ATNConfigSet$ConfigEqualityComparator.prototype.constructor = ATNConfigSet$ConfigEqualityComparator;
  ATNDeserializer$UnicodeDeserializingMode.prototype = Object.create(Enum.prototype);
  ATNDeserializer$UnicodeDeserializingMode.prototype.constructor = ATNDeserializer$UnicodeDeserializingMode;
  ATNType.prototype = Object.create(Enum.prototype);
  ATNType.prototype.constructor = ATNType;
  AbstractPredicateTransition.prototype = Object.create(Transition.prototype);
  AbstractPredicateTransition.prototype.constructor = AbstractPredicateTransition;
  ActionTransition.prototype = Object.create(Transition.prototype);
  ActionTransition.prototype.constructor = ActionTransition;
  AmbiguityInfo.prototype = Object.create(DecisionEventInfo.prototype);
  AmbiguityInfo.prototype.constructor = AmbiguityInfo;
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
  ContextSensitivityInfo.prototype = Object.create(DecisionEventInfo.prototype);
  ContextSensitivityInfo.prototype.constructor = ContextSensitivityInfo;
  SingletonPredictionContext.prototype = Object.create(PredictionContext.prototype);
  SingletonPredictionContext.prototype.constructor = SingletonPredictionContext;
  EmptyPredictionContext.prototype = Object.create(SingletonPredictionContext.prototype);
  EmptyPredictionContext.prototype.constructor = EmptyPredictionContext;
  EpsilonTransition.prototype = Object.create(Transition.prototype);
  EpsilonTransition.prototype.constructor = EpsilonTransition;
  ErrorInfo.prototype = Object.create(DecisionEventInfo.prototype);
  ErrorInfo.prototype.constructor = ErrorInfo;
  LexerATNConfig.prototype = Object.create(ATNConfig.prototype);
  LexerATNConfig.prototype.constructor = LexerATNConfig;
  LexerATNSimulator.prototype = Object.create(ATNSimulator.prototype);
  LexerATNSimulator.prototype.constructor = LexerATNSimulator;
  LexerActionType.prototype = Object.create(Enum.prototype);
  LexerActionType.prototype.constructor = LexerActionType;
  LookaheadEventInfo.prototype = Object.create(DecisionEventInfo.prototype);
  LookaheadEventInfo.prototype.constructor = LookaheadEventInfo;
  LoopEndState.prototype = Object.create(ATNState.prototype);
  LoopEndState.prototype.constructor = LoopEndState;
  SetTransition.prototype = Object.create(Transition.prototype);
  SetTransition.prototype.constructor = SetTransition;
  NotSetTransition.prototype = Object.create(SetTransition.prototype);
  NotSetTransition.prototype.constructor = NotSetTransition;
  OrderedATNConfigSet$LexerConfigHashSet.prototype = Object.create(ATNConfigSet$AbstractConfigHashSet.prototype);
  OrderedATNConfigSet$LexerConfigHashSet.prototype.constructor = OrderedATNConfigSet$LexerConfigHashSet;
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
  PredicateEvalInfo.prototype = Object.create(DecisionEventInfo.prototype);
  PredicateEvalInfo.prototype.constructor = PredicateEvalInfo;
  PredicateTransition.prototype = Object.create(AbstractPredicateTransition.prototype);
  PredicateTransition.prototype.constructor = PredicateTransition;
  PredictionMode$AltAndContextMap.prototype = Object.create(FlexibleHashMap.prototype);
  PredictionMode$AltAndContextMap.prototype.constructor = PredictionMode$AltAndContextMap;
  PredictionMode$AltAndContextConfigEqualityComparator.prototype = Object.create(AbstractEqualityComparator.prototype);
  PredictionMode$AltAndContextConfigEqualityComparator.prototype.constructor = PredictionMode$AltAndContextConfigEqualityComparator;
  PredictionMode.prototype = Object.create(Enum.prototype);
  PredictionMode.prototype.constructor = PredictionMode;
  ProfilingATNSimulator.prototype = Object.create(ParserATNSimulator.prototype);
  ProfilingATNSimulator.prototype.constructor = ProfilingATNSimulator;
  RangeTransition.prototype = Object.create(Transition.prototype);
  RangeTransition.prototype.constructor = RangeTransition;
  RuleStartState.prototype = Object.create(ATNState.prototype);
  RuleStartState.prototype.constructor = RuleStartState;
  RuleStopState.prototype = Object.create(ATNState.prototype);
  RuleStopState.prototype.constructor = RuleStopState;
  RuleTransition.prototype = Object.create(Transition.prototype);
  RuleTransition.prototype.constructor = RuleTransition;
  SemanticContext$Predicate.prototype = Object.create(SemanticContext.prototype);
  SemanticContext$Predicate.prototype.constructor = SemanticContext$Predicate;
  SemanticContext$PrecedencePredicate.prototype = Object.create(SemanticContext.prototype);
  SemanticContext$PrecedencePredicate.prototype.constructor = SemanticContext$PrecedencePredicate;
  SemanticContext$Operator.prototype = Object.create(SemanticContext.prototype);
  SemanticContext$Operator.prototype.constructor = SemanticContext$Operator;
  SemanticContext$AND.prototype = Object.create(SemanticContext$Operator.prototype);
  SemanticContext$AND.prototype.constructor = SemanticContext$AND;
  SemanticContext$OR.prototype = Object.create(SemanticContext$Operator.prototype);
  SemanticContext$OR.prototype.constructor = SemanticContext$OR;
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
  ParseCancellationException.prototype = Object.create(RuntimeException.prototype);
  ParseCancellationException.prototype.constructor = ParseCancellationException;
  ErrorNodeImpl.prototype = Object.create(TerminalNodeImpl.prototype);
  ErrorNodeImpl.prototype.constructor = ErrorNodeImpl;
  TagChunk.prototype = Object.create(Chunk.prototype);
  TagChunk.prototype.constructor = TagChunk;
  TextChunk.prototype = Object.create(Chunk.prototype);
  TextChunk.prototype.constructor = TextChunk;
  TokenTagToken.prototype = Object.create(CommonToken.prototype);
  TokenTagToken.prototype.constructor = TokenTagToken;
  UUID$Variant.prototype = Object.create(Enum.prototype);
  UUID$Variant.prototype.constructor = UUID$Variant;
  CharStreams.prototype = Object.create(AbstractCharStreams.prototype);
  CharStreams.prototype.constructor = CharStreams;
  function indices($receiver) {
    return toList(get_indices($receiver));
  }
  function assert(condition) {
    if (!condition) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
  }
  function convertToString($receiver) {
    return joinToString($receiver, '');
  }
  function asCharArray($receiver) {
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    tmp$ = iterator($receiver);
    while (tmp$.hasNext()) {
      var item = unboxChar(tmp$.next());
      destination.add_11rb$(toBoxedChar(item));
    }
    return toCharArray(destination);
  }
  function Arrays() {
    Arrays_instance = this;
  }
  Arrays.prototype.equals_hdevzo$ = function (a, b) {
    return a == null && b == null || (a != null && b != null && contentEquals(a, b));
  };
  Arrays.prototype.equals_elb7bo$ = function (a, b) {
    return a == null && b == null || (a != null && b != null && contentEquals(a, b));
  };
  Arrays.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Arrays',
    interfaces: []
  };
  var Arrays_instance = null;
  function Arrays_getInstance() {
    if (Arrays_instance === null) {
      new Arrays();
    }
    return Arrays_instance;
  }
  function Math_0() {
    Math_instance = this;
  }
  Math_0.prototype.min_vux9f0$ = function (a, b) {
    return JsMath.min(a, b);
  };
  Math_0.prototype.max_vux9f0$ = function (a, b) {
    return JsMath.max(a, b);
  };
  Math_0.prototype.floor_14dthe$ = function (d) {
    return JsMath.floor(d);
  };
  Math_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Math',
    interfaces: []
  };
  var Math_instance = null;
  function Math_getInstance() {
    if (Math_instance === null) {
      new Math_0();
    }
    return Math_instance;
  }
  function outMessage(message) {
    println(message);
  }
  function TypeDeclarator() {
  }
  TypeDeclarator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TypeDeclarator',
    interfaces: []
  };
  function ANTLRErrorListener() {
  }
  ANTLRErrorListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ANTLRErrorListener',
    interfaces: []
  };
  function ANTLRErrorStrategy() {
  }
  ANTLRErrorStrategy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ANTLRErrorStrategy',
    interfaces: []
  };
  function ANTLRFileStream(sourceName) {
    ANTLRFileStream$Companion_getInstance();
    ANTLRInputStream_init(this);
    this.sourceName_h4s80j$_0 = sourceName;
  }
  Object.defineProperty(ANTLRFileStream.prototype, 'sourceName', {
    get: function () {
      return this.sourceName_h4s80j$_0;
    }
  });
  function ANTLRFileStream$Companion() {
    ANTLRFileStream$Companion_instance = this;
  }
  function Coroutine$invoke_61zpoe$($this, fileName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fs = void 0;
    this.local$fileName = fileName_0;
  }
  Coroutine$invoke_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_61zpoe$.prototype.constructor = Coroutine$invoke_61zpoe$;
  Coroutine$invoke_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fs = new ANTLRFileStream(this.local$fileName);
            this.state_0 = 2;
            this.result_0 = this.local$fs.load_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$fs;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ANTLRFileStream$Companion.prototype.invoke_61zpoe$ = function (fileName_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_61zpoe$(this, fileName_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ANTLRFileStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ANTLRFileStream$Companion_instance = null;
  function ANTLRFileStream$Companion_getInstance() {
    if (ANTLRFileStream$Companion_instance === null) {
      new ANTLRFileStream$Companion();
    }
    return ANTLRFileStream$Companion_instance;
  }
  function Coroutine$load_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$load_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_0.prototype.constructor = Coroutine$load_0;
  Coroutine$load_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Utils_getInstance().readFile_61zpoe$(this.$this.sourceName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.data = this.result_0;
            this.$this.n = ensureNotNull(this.$this.data).length;
            return;
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  ANTLRFileStream.prototype.load_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$load_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  ANTLRFileStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ANTLRFileStream',
    interfaces: [ANTLRInputStream]
  };
  function ANTLRInputStream() {
    ANTLRInputStream$Companion_getInstance();
    this.data = null;
    this.n = 0;
    this.p = 0;
    this.name = null;
  }
  Object.defineProperty(ANTLRInputStream.prototype, 'sourceName', {
    configurable: true,
    get: function () {
      var tmp$ = this.name == null;
      if (!tmp$) {
        tmp$ = ensureNotNull(this.name).length === 0;
      }
      if (tmp$) {
        return IntStream$Companion_getInstance().UNKNOWN_SOURCE_NAME;
      } else
        return ensureNotNull(this.name);
    }
  });
  ANTLRInputStream.prototype.reset = function () {
    this.p = 0;
  };
  ANTLRInputStream.prototype.consume = function () {
    if (this.p >= this.n) {
      assert(this.LA_za3lpa$(1) === IntStream$Companion_getInstance().EOF);
      throw IllegalStateException_init('cannot consume EOF');
    }
    if (this.p < this.n) {
      this.p = this.p + 1 | 0;
    }
  };
  ANTLRInputStream.prototype.LA_za3lpa$ = function (i) {
    var tmp$;
    var i_0 = i;
    if (i_0 === 0) {
      return 0;
    }
    if (i_0 < 0) {
      i_0 = i_0 + 1 | 0;
      if ((this.p + i_0 - 1 | 0) < 0) {
        return IntStream$Companion_getInstance().EOF;
      }
    }
    if ((this.p + i_0 - 1 | 0) >= this.n) {
      tmp$ = IntStream$Companion_getInstance().EOF;
    } else
      tmp$ = ensureNotNull(ensureNotNull(this.data)[this.p + i_0 - 1 | 0]) | 0;
    return tmp$;
  };
  ANTLRInputStream.prototype.LT_za3lpa$ = function (i) {
    return this.LA_za3lpa$(i);
  };
  ANTLRInputStream.prototype.index = function () {
    return this.p;
  };
  ANTLRInputStream.prototype.size = function () {
    return this.n;
  };
  ANTLRInputStream.prototype.mark = function () {
    return -1;
  };
  ANTLRInputStream.prototype.release_za3lpa$ = function (marker) {
  };
  ANTLRInputStream.prototype.seek_za3lpa$ = function (index) {
    var index_0 = index;
    if (index_0 <= this.p) {
      this.p = index_0;
      return;
    }
    index_0 = Math_getInstance().min_vux9f0$(index_0, this.n);
    while (this.p < index_0) {
      this.consume();
    }
  };
  ANTLRInputStream.prototype.getText_yeqsgl$ = function (interval) {
    var start = interval.a;
    var stop = interval.b;
    if (stop >= this.n)
      stop = this.n - 1 | 0;
    var count = stop - start + 1 | 0;
    return start >= this.n ? '' : convertToString(copyOfRange(ensureNotNull(this.data), start, start + count | 0));
  };
  function ANTLRInputStream$Companion() {
    ANTLRInputStream$Companion_instance = this;
    this.READ_BUFFER_SIZE = 1024;
    this.INITIAL_BUFFER_SIZE = 1024;
  }
  ANTLRInputStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ANTLRInputStream$Companion_instance = null;
  function ANTLRInputStream$Companion_getInstance() {
    if (ANTLRInputStream$Companion_instance === null) {
      new ANTLRInputStream$Companion();
    }
    return ANTLRInputStream$Companion_instance;
  }
  ANTLRInputStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ANTLRInputStream',
    interfaces: [CharStream]
  };
  function ANTLRInputStream_init($this) {
    $this = $this || Object.create(ANTLRInputStream.prototype);
    ANTLRInputStream.call($this);
    return $this;
  }
  function ANTLRInputStream_init_0(input, $this) {
    $this = $this || Object.create(ANTLRInputStream.prototype);
    ANTLRInputStream.call($this);
    $this.data = asCharArray(input);
    $this.n = input.length;
    return $this;
  }
  function AbstractCharStreams() {
  }
  AbstractCharStreams.prototype.fromString_puj7f4$ = function (s, sourceName) {
    if (sourceName === void 0)
      sourceName = IntStream$Companion_getInstance().UNKNOWN_SOURCE_NAME;
    return new StringCharStream(s, sourceName);
  };
  AbstractCharStreams.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractCharStreams',
    interfaces: []
  };
  function BailErrorStrategy() {
    DefaultErrorStrategy.call(this);
  }
  BailErrorStrategy.prototype.recover_t5gqrh$ = function (recognizer, e) {
    var tmp$;
    var context = recognizer.context;
    while (context != null) {
      ensureNotNull(context).exception = e;
      context = (tmp$ = ensureNotNull(context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
    }
    throw ParseCancellationException_init_1(e);
  };
  BailErrorStrategy.prototype.recoverInline_yo2s5h$ = function (recognizer) {
    var tmp$;
    var e = InputMismatchException_init(recognizer);
    var context = recognizer.context;
    while (context != null) {
      ensureNotNull(context).exception = e;
      context = (tmp$ = ensureNotNull(context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
    }
    throw ParseCancellationException_init_1(e);
  };
  BailErrorStrategy.prototype.sync_yo2s5h$ = function (recognizer) {
  };
  BailErrorStrategy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BailErrorStrategy',
    interfaces: [DefaultErrorStrategy]
  };
  function BaseErrorListener() {
  }
  BaseErrorListener.prototype.syntaxError_kf8cjj$ = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
  };
  BaseErrorListener.prototype.reportAmbiguity_c3gkca$ = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
  };
  BaseErrorListener.prototype.reportAttemptingFullContext_hwltrx$ = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
  };
  BaseErrorListener.prototype.reportContextSensitivity_9n96ep$ = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
  };
  BaseErrorListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseErrorListener',
    interfaces: [ANTLRErrorListener]
  };
  function BufferedTokenStream(tokenSource) {
    this.tokenSource_b2njti$_0 = tokenSource;
    this.tokens = ArrayList_init(100);
    this.p = -1;
    this.fetchedEOF = false;
    if (this.tokenSource == null) {
      throw new NullPointerException('tokenSource cannot be null');
    }
  }
  Object.defineProperty(BufferedTokenStream.prototype, 'tokenSource', {
    get: function () {
      return this.tokenSource_b2njti$_0;
    },
    set: function (tokenSource) {
      this.tokenSource_b2njti$_0 = tokenSource;
    }
  });
  Object.defineProperty(BufferedTokenStream.prototype, 'sourceName', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.tokenSource.sourceName);
    }
  });
  Object.defineProperty(BufferedTokenStream.prototype, 'text', {
    configurable: true,
    get: function () {
      return this.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(0, this.size() - 1 | 0));
    }
  });
  BufferedTokenStream.prototype.index = function () {
    return this.p;
  };
  BufferedTokenStream.prototype.mark = function () {
    return 0;
  };
  BufferedTokenStream.prototype.release_za3lpa$ = function (marker) {
  };
  BufferedTokenStream.prototype.reset = function () {
    this.seek_za3lpa$(0);
  };
  BufferedTokenStream.prototype.seek_za3lpa$ = function (index) {
    this.lazyInit();
    this.p = this.adjustSeekIndex_za3lpa$(index);
  };
  BufferedTokenStream.prototype.size = function () {
    return this.tokens.size;
  };
  BufferedTokenStream.prototype.consume = function () {
    var skipEofCheck;
    if (this.p >= 0) {
      if (this.fetchedEOF) {
        skipEofCheck = this.p < (this.tokens.size - 1 | 0);
      } else {
        skipEofCheck = this.p < this.tokens.size;
      }
    } else {
      skipEofCheck = false;
    }
    if (!skipEofCheck && this.LA_za3lpa$(1) === IntStream$Companion_getInstance().EOF) {
      throw IllegalStateException_init('cannot consume EOF');
    }
    if (this.sync_za3lpa$(this.p + 1 | 0)) {
      this.p = this.adjustSeekIndex_za3lpa$(this.p + 1 | 0);
    }
  };
  BufferedTokenStream.prototype.sync_za3lpa$ = function (i) {
    assert(i >= 0);
    var n = i - this.tokens.size + 1 | 0;
    if (n > 0) {
      var fetched = this.fetch_za3lpa$(n);
      return fetched >= n;
    }
    return true;
  };
  BufferedTokenStream.prototype.fetch_za3lpa$ = function (n) {
    var tmp$;
    if (this.fetchedEOF) {
      return 0;
    }
    for (var i = 0; i < n; i++) {
      var t = this.tokenSource.nextToken();
      if (Kotlin.isType(t, WritableToken)) {
        (Kotlin.isType(tmp$ = t, WritableToken) ? tmp$ : throwCCE()).tokenIndex = this.tokens.size;
      }
      this.tokens.add_11rb$(t);
      if (t.type === Token$Companion_getInstance().EOF) {
        this.fetchedEOF = true;
        return i + 1 | 0;
      }
    }
    return n;
  };
  BufferedTokenStream.prototype.get_za3lpa$ = function (i) {
    if (i < 0 || i >= this.tokens.size) {
      throw new IndexOutOfBoundsException('token index ' + toString(i) + ' out of range 0..' + toString(this.tokens.size - 1 | 0));
    }
    return this.tokens.get_za3lpa$(i);
  };
  BufferedTokenStream.prototype.get_vux9f0$ = function (start, stop) {
    var tmp$;
    var stop_0 = stop;
    if (start < 0 || stop_0 < 0)
      return null;
    this.lazyInit();
    var subset = ArrayList_init_0();
    if (stop_0 >= this.tokens.size)
      stop_0 = this.tokens.size - 1 | 0;
    tmp$ = stop_0;
    for (var i = start; i <= tmp$; i++) {
      var t = this.tokens.get_za3lpa$(i);
      if (t.type === Token$Companion_getInstance().EOF)
        break;
      subset.add_11rb$(t);
    }
    return subset;
  };
  BufferedTokenStream.prototype.LA_za3lpa$ = function (i) {
    return ensureNotNull(this.LT_za3lpa$(i)).type;
  };
  BufferedTokenStream.prototype.LB_za3lpa$ = function (k) {
    return (this.p - k | 0) < 0 ? null : this.tokens.get_za3lpa$(this.p - k | 0);
  };
  BufferedTokenStream.prototype.LT_za3lpa$ = function (k) {
    var tmp$;
    this.lazyInit();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_za3lpa$(-k | 0);
    var i = this.p + k - 1 | 0;
    this.sync_za3lpa$(i);
    if (i >= this.tokens.size) {
      tmp$ = this.tokens.get_za3lpa$(this.tokens.size - 1 | 0);
    } else
      tmp$ = this.tokens.get_za3lpa$(i);
    return tmp$;
  };
  BufferedTokenStream.prototype.adjustSeekIndex_za3lpa$ = function (i) {
    return i;
  };
  BufferedTokenStream.prototype.lazyInit = function () {
    if (this.p === -1) {
      this.setup();
    }
  };
  BufferedTokenStream.prototype.setup = function () {
    this.sync_za3lpa$(0);
    this.p = this.adjustSeekIndex_za3lpa$(0);
  };
  BufferedTokenStream.prototype.getTokens_vzml9u$ = function (start, stop, types) {
    if (types === void 0)
      types = null;
    this.lazyInit();
    if (start < 0 || stop >= this.tokens.size || stop < 0 || start >= this.tokens.size) {
      throw new IndexOutOfBoundsException('start ' + toString(start) + ' or stop ' + toString(stop) + ' not in 0..' + toString(this.tokens.size - 1 | 0));
    }
    if (start > stop)
      return null;
    var filteredTokens = ArrayList_init_0();
    for (var i = start; i <= stop; i++) {
      var t = this.tokens.get_za3lpa$(i);
      if (types == null || types.contains_11rb$(t.type)) {
        ensureNotNull(filteredTokens).add_11rb$(t);
      }
    }
    if (ensureNotNull(filteredTokens).isEmpty()) {
      filteredTokens = null;
    }
    return filteredTokens;
  };
  BufferedTokenStream.prototype.getTokens_qt1dr2$ = function (start, stop, ttype) {
    var s = HashSet_init(ttype);
    s.add_11rb$(ttype);
    return this.getTokens_vzml9u$(start, stop, s);
  };
  BufferedTokenStream.prototype.nextTokenOnChannel_vux9f0$ = function (i, channel) {
    var i_0 = i;
    this.sync_za3lpa$(i_0);
    if (i_0 >= this.size()) {
      return this.size() - 1 | 0;
    }
    var token = this.tokens.get_za3lpa$(i_0);
    while (token.channel !== channel) {
      if (token.type === Token$Companion_getInstance().EOF) {
        return i_0;
      }
      i_0 = i_0 + 1 | 0;
      this.sync_za3lpa$(i_0);
      token = this.tokens.get_za3lpa$(i_0);
    }
    return i_0;
  };
  BufferedTokenStream.prototype.previousTokenOnChannel_vux9f0$ = function (i, channel) {
    var i_0 = i;
    this.sync_za3lpa$(i_0);
    if (i_0 >= this.size()) {
      return this.size() - 1 | 0;
    }
    while (i_0 >= 0) {
      var token = this.tokens.get_za3lpa$(i_0);
      if (token.type === Token$Companion_getInstance().EOF || token.channel === channel) {
        return i_0;
      }
      i_0 = i_0 - 1 | 0;
    }
    return i_0;
  };
  BufferedTokenStream.prototype.getHiddenTokensToRight_vux9f0$ = function (tokenIndex, channel) {
    if (channel === void 0)
      channel = -1;
    this.lazyInit();
    if (tokenIndex < 0 || tokenIndex >= this.tokens.size) {
      throw new IndexOutOfBoundsException(tokenIndex.toString() + ' not in 0..' + toString(this.tokens.size - 1 | 0));
    }
    var nextOnChannel = this.nextTokenOnChannel_vux9f0$(tokenIndex + 1 | 0, Lexer$Companion_getInstance().DEFAULT_TOKEN_CHANNEL);
    var to;
    var from = tokenIndex + 1 | 0;
    if (nextOnChannel === -1)
      to = this.size() - 1 | 0;
    else
      to = nextOnChannel;
    return this.filterForChannel_qt1dr2$(from, to, channel);
  };
  BufferedTokenStream.prototype.getHiddenTokensToLeft_vux9f0$ = function (tokenIndex, channel) {
    if (channel === void 0)
      channel = -1;
    this.lazyInit();
    if (tokenIndex < 0 || tokenIndex >= this.tokens.size) {
      throw new IndexOutOfBoundsException(tokenIndex.toString() + ' not in 0..' + toString(this.tokens.size - 1 | 0));
    }
    if (tokenIndex === 0) {
      return null;
    }
    var prevOnChannel = this.previousTokenOnChannel_vux9f0$(tokenIndex - 1 | 0, Lexer$Companion_getInstance().DEFAULT_TOKEN_CHANNEL);
    if (prevOnChannel === (tokenIndex - 1 | 0))
      return null;
    var from = prevOnChannel + 1 | 0;
    var to = tokenIndex - 1 | 0;
    return this.filterForChannel_qt1dr2$(from, to, channel);
  };
  BufferedTokenStream.prototype.filterForChannel_qt1dr2$ = function (from, to, channel) {
    var hidden = ArrayList_init_0();
    for (var i = from; i <= to; i++) {
      var t = this.tokens.get_za3lpa$(i);
      if (channel === -1) {
        if (t.channel !== Lexer$Companion_getInstance().DEFAULT_TOKEN_CHANNEL)
          hidden.add_11rb$(t);
      } else {
        if (t.channel === channel)
          hidden.add_11rb$(t);
      }
    }
    return hidden.size === 0 ? null : hidden;
  };
  BufferedTokenStream.prototype.getText_yeqsgl$ = function (interval) {
    var tmp$;
    var start = interval.a;
    var stop = interval.b;
    if (start < 0 || stop < 0)
      return '';
    this.fill();
    if (stop >= this.tokens.size)
      stop = this.tokens.size - 1 | 0;
    var buf = StringBuilder_init();
    tmp$ = stop;
    for (var i = start; i <= tmp$; i++) {
      var t = this.tokens.get_za3lpa$(i);
      if (t.type === Token$Companion_getInstance().EOF)
        break;
      buf.append_pdl1vj$(t.text);
    }
    return buf.toString();
  };
  BufferedTokenStream.prototype.getText_wqeert$ = function (ctx) {
    return this.getText_yeqsgl$(ctx.sourceInterval);
  };
  BufferedTokenStream.prototype.getText_5osdw8$ = function (start, stop) {
    var tmp$;
    if (start != null && stop != null) {
      tmp$ = this.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(ensureNotNull(start).tokenIndex, ensureNotNull(stop).tokenIndex));
    } else
      tmp$ = '';
    return tmp$;
  };
  BufferedTokenStream.prototype.fill = function () {
    this.lazyInit();
    var blockSize = 1000;
    while (true) {
      var fetched = this.fetch_za3lpa$(blockSize);
      if (fetched < blockSize) {
        return;
      }
    }
  };
  BufferedTokenStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BufferedTokenStream',
    interfaces: [TokenStream]
  };
  function CharStream() {
    CharStream$Companion_getInstance();
  }
  function CharStream$Companion() {
    CharStream$Companion_instance = this;
    this.EOF = IntStream$Companion_getInstance().EOF;
  }
  CharStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CharStream$Companion_instance = null;
  function CharStream$Companion_getInstance() {
    if (CharStream$Companion_instance === null) {
      new CharStream$Companion();
    }
    return CharStream$Companion_instance;
  }
  CharStream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CharStream',
    interfaces: [IntStream]
  };
  function CommonToken() {
    CommonToken$Companion_getInstance();
    this.type_k0yb7g$_0 = 0;
    this.line_k5mx86$_0 = 0;
    this.charPositionInLine_6n4xae$_0 = -1;
    this.channel_erltar$_0 = Token$Companion_getInstance().DEFAULT_CHANNEL;
    this.source = null;
    this.tokenIndex_9qz1bv$_0 = -1;
    this.startIndex_fxqhg2$_0 = 0;
    this.stopIndex_ague9m$_0 = 0;
    this.text_k1awnj$_0 = null;
  }
  Object.defineProperty(CommonToken.prototype, 'type', {
    configurable: true,
    get: function () {
      return this.type_k0yb7g$_0;
    },
    set: function (type) {
      this.type_k0yb7g$_0 = type;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'line', {
    configurable: true,
    get: function () {
      return this.line_k5mx86$_0;
    },
    set: function (line) {
      this.line_k5mx86$_0 = line;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'charPositionInLine', {
    configurable: true,
    get: function () {
      return this.charPositionInLine_6n4xae$_0;
    },
    set: function (charPositionInLine) {
      this.charPositionInLine_6n4xae$_0 = charPositionInLine;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'channel', {
    configurable: true,
    get: function () {
      return this.channel_erltar$_0;
    },
    set: function (channel) {
      this.channel_erltar$_0 = channel;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'tokenIndex', {
    configurable: true,
    get: function () {
      return this.tokenIndex_9qz1bv$_0;
    },
    set: function (tokenIndex) {
      this.tokenIndex_9qz1bv$_0 = tokenIndex;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'startIndex', {
    configurable: true,
    get: function () {
      return this.startIndex_fxqhg2$_0;
    },
    set: function (startIndex) {
      this.startIndex_fxqhg2$_0 = startIndex;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'stopIndex', {
    configurable: true,
    get: function () {
      return this.stopIndex_ague9m$_0;
    },
    set: function (stopIndex) {
      this.stopIndex_ague9m$_0 = stopIndex;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'tokenSource', {
    configurable: true,
    get: function () {
      return this.source.first;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'inputStream', {
    configurable: true,
    get: function () {
      return this.source.second;
    }
  });
  Object.defineProperty(CommonToken.prototype, 'text', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      if (this.text_k1awnj$_0 != null) {
        return this.text_k1awnj$_0;
      }
      tmp$ = this.inputStream;
      if (tmp$ == null) {
        return null;
      }
      var input = tmp$;
      var n = input.size();
      if (this.startIndex < n && this.stopIndex < n) {
        tmp$_0 = input.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(this.startIndex, this.stopIndex));
      } else {
        tmp$_0 = '<EOF>';
      }
      return tmp$_0;
    },
    set: function (text) {
      this.text_k1awnj$_0 = text;
    }
  });
  CommonToken.prototype.toString = function () {
    return this.toString_jbcggj$(null);
  };
  CommonToken.prototype.toString_jbcggj$ = function (r) {
    var channelStr = '';
    if (this.channel > 0) {
      channelStr = ',channel=' + toString(this.channel);
    }
    var txt = this.text;
    if (txt != null) {
      txt = replace(txt, '\n', '\\n');
      txt = replace(txt, '\r', '\\r');
      txt = replace(txt, '\t', '\\t');
    } else {
      txt = '<no text>';
    }
    var typeString = this.type.toString();
    if (r != null) {
      typeString = ensureNotNull(r).vocabulary.getDisplayName_za3lpa$(this.type);
    }
    return '[@' + this.tokenIndex + ',' + this.startIndex + ':' + this.stopIndex + "='" + toString(txt) + "',<" + typeString + '>' + channelStr + ',' + this.line + ':' + this.charPositionInLine + ']';
  };
  function CommonToken$Companion() {
    CommonToken$Companion_instance = this;
    this.EMPTY_SOURCE_0 = new Pair(null, null);
  }
  CommonToken$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommonToken$Companion_instance = null;
  function CommonToken$Companion_getInstance() {
    if (CommonToken$Companion_instance === null) {
      new CommonToken$Companion();
    }
    return CommonToken$Companion_instance;
  }
  CommonToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonToken',
    interfaces: [WritableToken]
  };
  function CommonToken_init(type, $this) {
    $this = $this || Object.create(CommonToken.prototype);
    CommonToken.call($this);
    $this.type = type;
    $this.source = CommonToken$Companion_getInstance().EMPTY_SOURCE_0;
    return $this;
  }
  function CommonToken_init_0(source, type, channel, start, stop, $this) {
    $this = $this || Object.create(CommonToken.prototype);
    CommonToken.call($this);
    $this.source = source;
    $this.type = type;
    $this.channel = channel;
    $this.startIndex = start;
    $this.stopIndex = stop;
    if (source.first != null) {
      $this.line = ensureNotNull(source.first).line;
      $this.charPositionInLine = ensureNotNull(source.first).charPositionInLine;
    }
    return $this;
  }
  function CommonToken_init_1(type, text, $this) {
    $this = $this || Object.create(CommonToken.prototype);
    CommonToken.call($this);
    $this.type = type;
    $this.channel = Token$Companion_getInstance().DEFAULT_CHANNEL;
    $this.text = text;
    $this.source = CommonToken$Companion_getInstance().EMPTY_SOURCE_0;
    return $this;
  }
  function CommonToken_init_2(oldToken, $this) {
    $this = $this || Object.create(CommonToken.prototype);
    CommonToken.call($this);
    var tmp$, tmp$_0;
    $this.type = oldToken.type;
    $this.line = oldToken.line;
    $this.tokenIndex = oldToken.tokenIndex;
    $this.charPositionInLine = oldToken.charPositionInLine;
    $this.channel = oldToken.channel;
    $this.startIndex = oldToken.startIndex;
    $this.stopIndex = oldToken.stopIndex;
    if (Kotlin.isType(oldToken, CommonToken)) {
      $this.text = (Kotlin.isType(tmp$ = oldToken, CommonToken) ? tmp$ : throwCCE()).text;
      $this.source = (Kotlin.isType(tmp$_0 = oldToken, CommonToken) ? tmp$_0 : throwCCE()).source;
    } else {
      $this.text = oldToken.text;
      $this.source = new Pair(ensureNotNull(oldToken.tokenSource), ensureNotNull(oldToken.inputStream));
    }
    return $this;
  }
  function CommonTokenFactory(copyText) {
    CommonTokenFactory$Companion_getInstance();
    if (copyText === void 0)
      copyText = false;
    this.copyText_0 = copyText;
  }
  CommonTokenFactory.prototype.create_peov9u$ = function (source, type, text, channel, start, stop, line, charPositionInLine) {
    var t = CommonToken_init_0(source, type, channel, start, stop);
    t.line = line;
    t.charPositionInLine = charPositionInLine;
    if (text != null) {
      t.text = text;
    } else if (this.copyText_0 && source.second != null) {
      t.text = ensureNotNull(source.second).getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(start, stop));
    }
    return t;
  };
  CommonTokenFactory.prototype.create_19mbxw$ = function (type, text) {
    return CommonToken_init_1(type, text);
  };
  function CommonTokenFactory$Companion() {
    CommonTokenFactory$Companion_instance = this;
    this.DEFAULT = new CommonTokenFactory();
  }
  CommonTokenFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CommonTokenFactory$Companion_instance = null;
  function CommonTokenFactory$Companion_getInstance() {
    if (CommonTokenFactory$Companion_instance === null) {
      new CommonTokenFactory$Companion();
    }
    return CommonTokenFactory$Companion_instance;
  }
  CommonTokenFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonTokenFactory',
    interfaces: [TokenFactory]
  };
  function CommonTokenStream(tokenSource) {
    BufferedTokenStream.call(this, tokenSource);
    this.channel_0 = Token$Companion_getInstance().DEFAULT_CHANNEL;
  }
  Object.defineProperty(CommonTokenStream.prototype, 'numberOfOnChannelTokens', {
    configurable: true,
    get: function () {
      var tmp$;
      var n = 0;
      this.fill();
      tmp$ = this.tokens;
      for (var i = 0; i !== tmp$.size; ++i) {
        var t = this.tokens.get_za3lpa$(i);
        if (t.channel === this.channel_0) {
          n = n + 1 | 0;
        }
        if (t.type === Token$Companion_getInstance().EOF)
          break;
      }
      return n;
    }
  });
  CommonTokenStream.prototype.adjustSeekIndex_za3lpa$ = function (i) {
    return this.nextTokenOnChannel_vux9f0$(i, this.channel_0);
  };
  CommonTokenStream.prototype.LB_za3lpa$ = function (k) {
    if (k === 0 || (this.p - k | 0) < 0)
      return null;
    var i = this.p;
    var n = 1;
    while (n <= k && i > 0) {
      i = this.previousTokenOnChannel_vux9f0$(i - 1 | 0, this.channel_0);
      n = n + 1 | 0;
    }
    return i < 0 ? null : this.tokens.get_za3lpa$(i);
  };
  CommonTokenStream.prototype.LT_za3lpa$ = function (k) {
    this.lazyInit();
    if (k === 0)
      return null;
    if (k < 0)
      return this.LB_za3lpa$(-k | 0);
    var i = this.p;
    var n = 1;
    while (n < k) {
      if (this.sync_za3lpa$(i + 1 | 0)) {
        i = this.nextTokenOnChannel_vux9f0$(i + 1 | 0, this.channel_0);
      }
      n = n + 1 | 0;
    }
    return this.tokens.get_za3lpa$(i);
  };
  CommonTokenStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CommonTokenStream',
    interfaces: [BufferedTokenStream]
  };
  function CommonTokenStream_init(tokenSource, channel, $this) {
    $this = $this || Object.create(CommonTokenStream.prototype);
    CommonTokenStream.call($this, tokenSource);
    $this.channel_0 = channel;
    return $this;
  }
  function ConsoleErrorListener() {
    ConsoleErrorListener$Companion_getInstance();
    BaseErrorListener.call(this);
  }
  ConsoleErrorListener.prototype.syntaxError_kf8cjj$ = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    errMessage('line ' + line + ':' + charPositionInLine + ' ' + msg);
  };
  function ConsoleErrorListener$Companion() {
    ConsoleErrorListener$Companion_instance = this;
    this.INSTANCE = new ConsoleErrorListener();
  }
  ConsoleErrorListener$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ConsoleErrorListener$Companion_instance = null;
  function ConsoleErrorListener$Companion_getInstance() {
    if (ConsoleErrorListener$Companion_instance === null) {
      new ConsoleErrorListener$Companion();
    }
    return ConsoleErrorListener$Companion_instance;
  }
  ConsoleErrorListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConsoleErrorListener',
    interfaces: [BaseErrorListener]
  };
  function DefaultErrorStrategy() {
    this.errorRecoveryMode = false;
    this.lastErrorIndex = -1;
    this.lastErrorStates = null;
    this.nextTokensContext = null;
    this.nextTokensState = 0;
  }
  DefaultErrorStrategy.prototype.reset_yo2s5h$ = function (recognizer) {
    this.endErrorCondition_yo2s5h$(recognizer);
  };
  DefaultErrorStrategy.prototype.beginErrorCondition_yo2s5h$ = function (recognizer) {
    this.errorRecoveryMode = true;
  };
  DefaultErrorStrategy.prototype.inErrorRecoveryMode_yo2s5h$ = function (recognizer) {
    return this.errorRecoveryMode;
  };
  DefaultErrorStrategy.prototype.endErrorCondition_yo2s5h$ = function (recognizer) {
    this.errorRecoveryMode = false;
    this.lastErrorStates = null;
    this.lastErrorIndex = -1;
  };
  DefaultErrorStrategy.prototype.reportMatch_yo2s5h$ = function (recognizer) {
    this.endErrorCondition_yo2s5h$(recognizer);
  };
  DefaultErrorStrategy.prototype.reportError_t5gqrh$ = function (recognizer, e) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.inErrorRecoveryMode_yo2s5h$(recognizer)) {
      return;
    }
    this.beginErrorCondition_yo2s5h$(recognizer);
    if (Kotlin.isType(e, NoViableAltException)) {
      this.reportNoViableAlternative_5vi7bz$(recognizer, Kotlin.isType(tmp$ = e, NoViableAltException) ? tmp$ : throwCCE());
    } else if (Kotlin.isType(e, InputMismatchException)) {
      this.reportInputMismatch_xz7t3y$(recognizer, Kotlin.isType(tmp$_0 = e, InputMismatchException) ? tmp$_0 : throwCCE());
    } else if (Kotlin.isType(e, FailedPredicateException)) {
      this.reportFailedPredicate_lsu480$(recognizer, Kotlin.isType(tmp$_1 = e, FailedPredicateException) ? tmp$_1 : throwCCE());
    } else {
      errMessage('unknown recognition error type: ' + toString(e));
      recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(e.offendingToken), ensureNotNull(e.message), e);
    }
  };
  DefaultErrorStrategy.prototype.recover_t5gqrh$ = function (recognizer, e) {
    if (this.lastErrorIndex === ensureNotNull(recognizer.readInputStream()).index() && this.lastErrorStates != null && ensureNotNull(this.lastErrorStates).contains_za3lpa$(recognizer.state)) {
      recognizer.consume();
    }
    this.lastErrorIndex = ensureNotNull(recognizer.readInputStream()).index();
    if (this.lastErrorStates == null)
      this.lastErrorStates = IntervalSet_init_1(new Int32Array([]));
    ensureNotNull(this.lastErrorStates).add_za3lpa$(recognizer.state);
    var followSet = this.getErrorRecoverySet_yo2s5h$(recognizer);
    this.consumeUntil_55n6m2$(recognizer, followSet);
  };
  DefaultErrorStrategy.prototype.sync_yo2s5h$ = function (recognizer) {
    var s = ensureNotNull(recognizer.interpreter).atn.states.get_za3lpa$(recognizer.state);
    if (this.inErrorRecoveryMode_yo2s5h$(recognizer)) {
      return;
    }
    var tokens = recognizer.readInputStream();
    var la = ensureNotNull(tokens).LA_za3lpa$(1);
    var nextTokens = recognizer.atn.nextTokens_1vr0xx$(ensureNotNull(s));
    if (ensureNotNull(nextTokens).contains_za3lpa$(la)) {
      this.nextTokensContext = null;
      this.nextTokensState = -1;
      return;
    }
    if (nextTokens.contains_za3lpa$(Token$Companion_getInstance().EPSILON)) {
      if (this.nextTokensContext == null) {
        this.nextTokensContext = recognizer.context;
        this.nextTokensState = recognizer.state;
      }
      return;
    }
    switch (s.stateType) {
      case 3:
      case 5:
      case 4:
      case 10:
        if (this.singleTokenDeletion_yo2s5h$(recognizer) != null) {
          return;
        }

        throw InputMismatchException_init(recognizer);
      case 11:
      case 9:
        this.reportUnwantedToken_yo2s5h$(recognizer);
        var expecting = recognizer.expectedTokens;
        var whatFollowsLoopIterationOrRule = expecting.or_lqo98a$(this.getErrorRecoverySet_yo2s5h$(recognizer));
        this.consumeUntil_55n6m2$(recognizer, whatFollowsLoopIterationOrRule);
        break;
      default:
        break;
    }
  };
  DefaultErrorStrategy.prototype.reportNoViableAlternative_5vi7bz$ = function (recognizer, e) {
    var tokens = recognizer.readInputStream();
    var input;
    if (tokens != null) {
      if (ensureNotNull(e.startToken).type === Token$Companion_getInstance().EOF)
        input = '<EOF>';
      else
        input = ensureNotNull(e.startToken.text);
    } else {
      input = '<unknown input>';
    }
    var msg = 'no viable alternative at input ' + this.escapeWSAndQuote_61zpoe$(input);
    recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(e.offendingToken), msg, e);
  };
  DefaultErrorStrategy.prototype.reportInputMismatch_xz7t3y$ = function (recognizer, e) {
    var msg = 'mismatched input ' + this.getTokenErrorDisplay_wkbxdq$(e.offendingToken) + ' expecting ' + ensureNotNull(e.expectedTokens).toString_hr977m$(recognizer.vocabulary);
    recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(e.offendingToken), msg, e);
  };
  DefaultErrorStrategy.prototype.reportFailedPredicate_lsu480$ = function (recognizer, e) {
    var ruleName = ensureNotNull(recognizer.ruleNames)[ensureNotNull(recognizer.context).ruleIndex];
    var msg = 'rule ' + ruleName + ' ' + e.message;
    recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(e.offendingToken), msg, e);
  };
  DefaultErrorStrategy.prototype.reportUnwantedToken_yo2s5h$ = function (recognizer) {
    if (this.inErrorRecoveryMode_yo2s5h$(recognizer)) {
      return;
    }
    this.beginErrorCondition_yo2s5h$(recognizer);
    var t = recognizer.currentToken;
    var tokenName = this.getTokenErrorDisplay_wkbxdq$(t);
    var expecting = this.getExpectedTokens_yo2s5h$(recognizer);
    var msg = 'extraneous input ' + tokenName + ' expecting ' + expecting.toString_hr977m$(recognizer.vocabulary);
    recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.reportMissingToken_yo2s5h$ = function (recognizer) {
    if (this.inErrorRecoveryMode_yo2s5h$(recognizer)) {
      return;
    }
    this.beginErrorCondition_yo2s5h$(recognizer);
    var t = recognizer.currentToken;
    var expecting = this.getExpectedTokens_yo2s5h$(recognizer);
    var msg = 'missing ' + expecting.toString_hr977m$(recognizer.vocabulary) + ' at ' + this.getTokenErrorDisplay_wkbxdq$(t);
    recognizer.notifyErrorListeners_ft0bs8$(ensureNotNull(t), msg, null);
  };
  DefaultErrorStrategy.prototype.recoverInline_yo2s5h$ = function (recognizer) {
    var tmp$;
    var matchedSymbol = this.singleTokenDeletion_yo2s5h$(recognizer);
    if (matchedSymbol != null) {
      recognizer.consume();
      return matchedSymbol;
    }
    if (this.singleTokenInsertion_yo2s5h$(recognizer)) {
      return this.getMissingSymbol_yo2s5h$(recognizer);
    }
    if (this.nextTokensContext == null) {
      tmp$ = InputMismatchException_init(recognizer);
    } else {
      tmp$ = InputMismatchException_init_0(recognizer, this.nextTokensState, ensureNotNull(this.nextTokensContext));
    }
    var e = tmp$;
    throw e;
  };
  DefaultErrorStrategy.prototype.singleTokenInsertion_yo2s5h$ = function (recognizer) {
    var currentSymbolType = ensureNotNull(recognizer.readInputStream()).LA_za3lpa$(1);
    var currentState = ensureNotNull(recognizer.interpreter).atn.states.get_za3lpa$(recognizer.state);
    var next = ensureNotNull(currentState).transition_za3lpa$(0).target;
    var atn = ensureNotNull(recognizer.interpreter).atn;
    var expectingAtLL2 = atn.nextTokens_ujrfb5$(ensureNotNull(next), recognizer.context);
    if (expectingAtLL2.contains_za3lpa$(currentSymbolType)) {
      this.reportMissingToken_yo2s5h$(recognizer);
      return true;
    }
    return false;
  };
  DefaultErrorStrategy.prototype.singleTokenDeletion_yo2s5h$ = function (recognizer) {
    var nextTokenType = ensureNotNull(recognizer.readInputStream()).LA_za3lpa$(2);
    var expecting = this.getExpectedTokens_yo2s5h$(recognizer);
    if (expecting.contains_za3lpa$(nextTokenType)) {
      this.reportUnwantedToken_yo2s5h$(recognizer);
      recognizer.consume();
      var matchedSymbol = recognizer.currentToken;
      this.reportMatch_yo2s5h$(recognizer);
      return matchedSymbol;
    }
    return null;
  };
  DefaultErrorStrategy.prototype.getMissingSymbol_yo2s5h$ = function (recognizer) {
    var tmp$;
    var currentSymbol = recognizer.currentToken;
    var expecting = this.getExpectedTokens_yo2s5h$(recognizer);
    var expectedTokenType = Token$Companion_getInstance().INVALID_TYPE;
    if (!expecting.isNil) {
      expectedTokenType = expecting.minElement;
    }
    var tokenText;
    if (expectedTokenType === Token$Companion_getInstance().EOF)
      tokenText = '<missing EOF>';
    else
      tokenText = '<missing ' + recognizer.vocabulary.getDisplayName_za3lpa$(expectedTokenType) + '>';
    var current = currentSymbol;
    var lookback = (Kotlin.isType(tmp$ = recognizer.readInputStream(), TokenStream) ? tmp$ : throwCCE()).LT_za3lpa$(-1);
    if (ensureNotNull(current).type === Token$Companion_getInstance().EOF && lookback != null) {
      current = lookback;
    }
    return recognizer.tokenFactory.create_peov9u$(new Pair(current.tokenSource, ensureNotNull(current.tokenSource).readInputStream()), expectedTokenType, tokenText, Token$Companion_getInstance().DEFAULT_CHANNEL, -1, -1, current.line, current.charPositionInLine);
  };
  DefaultErrorStrategy.prototype.getExpectedTokens_yo2s5h$ = function (recognizer) {
    return recognizer.expectedTokens;
  };
  DefaultErrorStrategy.prototype.getTokenErrorDisplay_wkbxdq$ = function (t) {
    if (t == null)
      return '<no token>';
    var s = this.getSymbolText_jdptgj$(t);
    if (s == null) {
      if (this.getSymbolType_jdptgj$(t) === Token$Companion_getInstance().EOF) {
        s = '<EOF>';
      } else {
        s = '<' + toString(this.getSymbolType_jdptgj$(t)) + '>';
      }
    }
    return this.escapeWSAndQuote_61zpoe$(s);
  };
  DefaultErrorStrategy.prototype.getSymbolText_jdptgj$ = function (symbol) {
    return ensureNotNull(symbol.text);
  };
  DefaultErrorStrategy.prototype.getSymbolType_jdptgj$ = function (symbol) {
    return symbol.type;
  };
  DefaultErrorStrategy.prototype.escapeWSAndQuote_61zpoe$ = function (s) {
    var s_0 = s;
    s_0 = replace(s_0, '\n', '\\n');
    s_0 = replace(s_0, '\r', '\\r');
    s_0 = replace(s_0, '\t', '\\t');
    return "'" + s_0 + "'";
  };
  DefaultErrorStrategy.prototype.getErrorRecoverySet_yo2s5h$ = function (recognizer) {
    var tmp$;
    var atn = ensureNotNull(recognizer.interpreter).atn;
    var ctx = recognizer.context;
    var recoverSet = IntervalSet_init_1(new Int32Array([]));
    while (ctx != null && ensureNotNull(ctx).invokingState >= 0) {
      var invokingState = atn.states.get_za3lpa$(ensureNotNull(ctx).invokingState);
      var rt = Kotlin.isType(tmp$ = ensureNotNull(invokingState).transition_za3lpa$(0), RuleTransition) ? tmp$ : throwCCE();
      var follow = atn.nextTokens_1vr0xx$(rt.followState);
      recoverSet.addAll_lqo98a$(follow);
      ctx = ensureNotNull(ctx).readParent();
    }
    recoverSet.remove_za3lpa$(Token$Companion_getInstance().EPSILON);
    return recoverSet;
  };
  DefaultErrorStrategy.prototype.consumeUntil_55n6m2$ = function (recognizer, set) {
    var ttype = ensureNotNull(recognizer.readInputStream()).LA_za3lpa$(1);
    while (ttype !== Token$Companion_getInstance().EOF && !set.contains_za3lpa$(ttype)) {
      recognizer.consume();
      ttype = ensureNotNull(recognizer.readInputStream()).LA_za3lpa$(1);
    }
  };
  DefaultErrorStrategy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultErrorStrategy',
    interfaces: [ANTLRErrorStrategy]
  };
  function DiagnosticErrorListener(exactOnly) {
    if (exactOnly === void 0)
      exactOnly = true;
    BaseErrorListener.call(this);
    this.exactOnly_0 = exactOnly;
  }
  DiagnosticErrorListener.prototype.reportAmbiguity_c3gkca$ = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (this.exactOnly_0 && !exact) {
      return;
    }
    var format = "reportAmbiguity d=%s: ambigAlts=%s, input='%s'";
    var decision = this.getDecisionDescription_0(recognizer, dfa);
    var conflictingAlts = this.getConflictingAlts_0(ambigAlts, configs);
    var text = ensureNotNull(recognizer.tokenStream).getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex));
    var message = 'reportAmbiguity d=' + decision + ': ambigAlts=' + conflictingAlts + ", input='" + text + "'";
    recognizer.notifyErrorListeners_61zpoe$(message);
  };
  DiagnosticErrorListener.prototype.reportAttemptingFullContext_hwltrx$ = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var decision = this.getDecisionDescription_0(recognizer, dfa);
    var text = ensureNotNull(recognizer.tokenStream).getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex));
    var message = 'reportAttemptingFullContext d=' + decision + ", input='" + text + "'";
    recognizer.notifyErrorListeners_61zpoe$(message);
  };
  DiagnosticErrorListener.prototype.reportContextSensitivity_9n96ep$ = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var format = "reportContextSensitivity d=%s, input='%s'";
    var decision = this.getDecisionDescription_0(recognizer, dfa);
    var text = ensureNotNull(recognizer.tokenStream).getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex));
    var message = 'reportContextSensitivity d=' + decision + ", input='" + text + "'";
    recognizer.notifyErrorListeners_61zpoe$(message);
  };
  DiagnosticErrorListener.prototype.getDecisionDescription_0 = function (recognizer, dfa) {
    var tmp$;
    var decision = dfa.decision;
    var ruleIndex = dfa.atnStartState.ruleIndex;
    var ruleNames = recognizer.ruleNames;
    if (ruleIndex < 0 || ruleIndex >= ensureNotNull(ruleNames).length) {
      return decision.toString();
    }
    var ruleName = ensureNotNull(ruleNames)[ruleIndex];
    var tmp$_0 = ruleName == null;
    if (!tmp$_0) {
      tmp$_0 = ensureNotNull(ruleName).length === 0;
    }
    if (tmp$_0) {
      tmp$ = decision.toString();
    } else
      tmp$ = decision.toString() + ' (' + ruleName + ')';
    return tmp$;
  };
  DiagnosticErrorListener.prototype.getConflictingAlts_0 = function (reportedAlts, configs) {
    var tmp$;
    if (reportedAlts != null) {
      return reportedAlts;
    }
    var result = BitSet_init();
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      result.set_za3lpa$(config.alt);
    }
    return result;
  };
  DiagnosticErrorListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DiagnosticErrorListener',
    interfaces: [BaseErrorListener]
  };
  function formatMessage(predicate, message) {
    return message != null ? message : 'failed predicate: {' + toString(predicate) + '}?';
  }
  function FailedPredicateException(recognizer, predicate, message) {
    if (predicate === void 0)
      predicate = null;
    if (message === void 0)
      message = null;
    RecognitionException.call(this, recognizer, ensureNotNull(recognizer.readInputStream()), ensureNotNull(recognizer.context), formatMessage(predicate, message));
    this.predicate = predicate;
    this.name = 'FailedPredicateException';
    this.ruleIndex = -1;
    this.predIndex = -1;
    var tmp$, tmp$_0, tmp$_1;
    var s = ensureNotNull(recognizer.interpreter).atn.states.get_za3lpa$(recognizer.state);
    var trans = Kotlin.isType(tmp$ = ensureNotNull(s).transition_za3lpa$(0), AbstractPredicateTransition) ? tmp$ : throwCCE();
    if (Kotlin.isType(trans, PredicateTransition)) {
      this.ruleIndex = (Kotlin.isType(tmp$_0 = trans, PredicateTransition) ? tmp$_0 : throwCCE()).ruleIndex;
      this.predIndex = (Kotlin.isType(tmp$_1 = trans, PredicateTransition) ? tmp$_1 : throwCCE()).predIndex;
    } else {
      this.ruleIndex = 0;
      this.predIndex = 0;
    }
    throw new NotImplementedError_init();
  }
  FailedPredicateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FailedPredicateException',
    interfaces: [RecognitionException]
  };
  function InputMismatchException() {
    this.name = 'InputMismatchException';
  }
  InputMismatchException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InputMismatchException',
    interfaces: [RecognitionException]
  };
  function InputMismatchException_init(recognizer, $this) {
    $this = $this || Object.create(InputMismatchException.prototype);
    RecognitionException.call($this, recognizer, ensureNotNull(recognizer.readInputStream()), ensureNotNull(recognizer.context));
    InputMismatchException.call($this);
    $this.offendingToken = recognizer.currentToken;
    return $this;
  }
  function InputMismatchException_init_0(recognizer, state, ctx, $this) {
    $this = $this || Object.create(InputMismatchException.prototype);
    RecognitionException.call($this, recognizer, ensureNotNull(recognizer.readInputStream()), ctx);
    InputMismatchException.call($this);
    $this.offendingState = state;
    $this.offendingToken = recognizer.currentToken;
    return $this;
  }
  function IntStream() {
    IntStream$Companion_getInstance();
  }
  function IntStream$Companion() {
    IntStream$Companion_instance = this;
    this.EOF = -1;
    this.UNKNOWN_SOURCE_NAME = '<unknown>';
  }
  IntStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntStream$Companion_instance = null;
  function IntStream$Companion_getInstance() {
    if (IntStream$Companion_instance === null) {
      new IntStream$Companion();
    }
    return IntStream$Companion_instance;
  }
  IntStream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IntStream',
    interfaces: []
  };
  function InterpreterRuleContext() {
  }
  InterpreterRuleContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterpreterRuleContext',
    interfaces: [ParserRuleContext]
  };
  function InterpreterRuleContext_init($this) {
    $this = $this || Object.create(InterpreterRuleContext.prototype);
    ParserRuleContext_init($this);
    InterpreterRuleContext.call($this);
    return $this;
  }
  function InterpreterRuleContext_init_0(parent, invokingStateNumber, ruleIndex, $this) {
    $this = $this || Object.create(InterpreterRuleContext.prototype);
    ParserRuleContext_init_0(parent, invokingStateNumber, $this);
    InterpreterRuleContext.call($this);
    $this.ruleIndex = ruleIndex;
    return $this;
  }
  function Lexer() {
    Lexer$Companion_getInstance();
    this._tokenFactorySourcePair = null;
    this.tokenFactory_6i2jt7$_0 = CommonTokenFactory$Companion_getInstance().DEFAULT;
    this.token = null;
    this._tokenStartCharIndex = -1;
    this._tokenStartLine = 0;
    this._tokenStartCharPositionInLine = 0;
    this._hitEOF = false;
    this.channel = 0;
    this.type = 0;
    this._modeStack = IntegerStack_init();
    this._mode = Lexer$Companion_getInstance().DEFAULT_MODE;
    this._text = null;
  }
  Lexer.prototype.assignInputStream_rpvxkc$ = function (newValue) {
    var tmp$;
    this.assignInputStream_ojxtjn$((tmp$ = newValue) == null || Kotlin.isType(tmp$, CharStream) ? tmp$ : throwCCE());
  };
  Lexer.prototype.assignInputStream_ojxtjn$ = function (input) {
    var tmp$;
    this.inputStream = null;
    this._tokenFactorySourcePair = new Pair(this, null);
    this.reset();
    println(Kotlin.isType(input, ANTLRInputStream));
    println(input == null || Kotlin.isType(input, ANTLRInputStream));
    println(Kotlin.isType(input, CharStream));
    println(input == null || Kotlin.isType(input, CharStream));
    this.inputStream = Kotlin.isType(tmp$ = input, CharStream) ? tmp$ : throwCCE();
    this._tokenFactorySourcePair = new Pair(this, this.readInputStream());
  };
  Lexer.prototype.readInputStream = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    println('\u6253\u5370readInputStream-------');
    println(toString(this.inputStream));
    println((tmp$ = this.inputStream) != null ? tmp$.sourceName : null);
    println(Kotlin.isType(this.inputStream, ANTLRInputStream));
    var tmp$_3;
    println((tmp$_3 = this.inputStream) == null || Kotlin.isType(tmp$_3, ANTLRInputStream));
    println(Kotlin.isType(this.inputStream, CommonTokenStream));
    println(Kotlin.isType(this.inputStream, CharStream));
    var tmp$_4;
    println((tmp$_4 = this.inputStream) == null || Kotlin.isType(tmp$_4, CharStream));
    println(Kotlin.isType(tmp$_0 = this.inputStream, CharStream) ? tmp$_0 : throwCCE());
    println((tmp$_1 = this.inputStream) == null || Kotlin.isType(tmp$_1, CharStream) ? tmp$_1 : throwCCE());
    return (tmp$_2 = this.inputStream) == null || Kotlin.isType(tmp$_2, CharStream) ? tmp$_2 : throwCCE();
  };
  Object.defineProperty(Lexer.prototype, 'tokenFactory', {
    configurable: true,
    get: function () {
      return this.tokenFactory_6i2jt7$_0;
    },
    set: function (tokenFactory) {
      this.tokenFactory_6i2jt7$_0 = tokenFactory;
    }
  });
  Object.defineProperty(Lexer.prototype, 'sourceName', {
    configurable: true,
    get: function () {
      return ensureNotNull(ensureNotNull(this.inputStream).sourceName);
    }
  });
  Object.defineProperty(Lexer.prototype, 'line', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.interpreter).line;
    },
    set: function (line) {
      ensureNotNull(this.interpreter).line = line;
    }
  });
  Object.defineProperty(Lexer.prototype, 'charPositionInLine', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.interpreter).charPositionInLine;
    },
    set: function (charPositionInLine) {
      ensureNotNull(this.interpreter).charPositionInLine = charPositionInLine;
    }
  });
  Object.defineProperty(Lexer.prototype, 'charIndex', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.inputStream).index();
    }
  });
  Object.defineProperty(Lexer.prototype, 'text', {
    configurable: true,
    get: function () {
      if (this._text != null) {
        return ensureNotNull(this._text);
      } else
        return ensureNotNull(this.interpreter).getText_npe0fi$(ensureNotNull(this.readInputStream()));
    },
    set: function (text) {
      this._text = text;
    }
  });
  Object.defineProperty(Lexer.prototype, 'channelNames', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  Object.defineProperty(Lexer.prototype, 'modeNames', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  Object.defineProperty(Lexer.prototype, 'tokenNames', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  Object.defineProperty(Lexer.prototype, 'allTokens', {
    configurable: true,
    get: function () {
      var tokens = ArrayList_init_0();
      var t = this.nextToken();
      while (ensureNotNull(t).type !== Token$Companion_getInstance().EOF) {
        tokens.add_11rb$(t);
        t = this.nextToken();
      }
      return tokens;
    }
  });
  Lexer.prototype.reset = function () {
    if (this.inputStream != null) {
      ensureNotNull(this.inputStream).seek_za3lpa$(0);
    }
    this.token = null;
    this.type = Token$Companion_getInstance().INVALID_TYPE;
    this.channel = Token$Companion_getInstance().DEFAULT_CHANNEL;
    this._tokenStartCharIndex = -1;
    this._tokenStartCharPositionInLine = -1;
    this._tokenStartLine = -1;
    this._text = null;
    this._hitEOF = false;
    this._mode = Lexer$Companion_getInstance().DEFAULT_MODE;
    this._modeStack.clear();
    ensureNotNull(this.interpreter).reset();
  };
  Lexer.prototype.nextToken = function () {
    if (this.inputStream == null) {
      throw IllegalStateException_init('nextToken requires a non-null input stream.');
    }
    var tokenStartMarker = ensureNotNull(this.inputStream).mark();
    try {
      outer: while (true) {
        if (this._hitEOF) {
          this.emitEOF();
          return ensureNotNull(this.token);
        }
        this.token = null;
        this.channel = Token$Companion_getInstance().DEFAULT_CHANNEL;
        this._tokenStartCharIndex = ensureNotNull(this.inputStream).index();
        this._tokenStartCharPositionInLine = ensureNotNull(this.interpreter).charPositionInLine;
        this._tokenStartLine = ensureNotNull(this.interpreter).line;
        this._text = null;
        do {
          this.type = Token$Companion_getInstance().INVALID_TYPE;
          var ttype;
          try {
            ttype = ensureNotNull(this.interpreter).match_kas9oc$(ensureNotNull(this.readInputStream()), this._mode);
          } catch (e) {
            if (Kotlin.isType(e, LexerNoViableAltException)) {
              this.notifyListeners_ytsk3g$(e);
              this.recover_ytsk3g$(e);
              ttype = Lexer$Companion_getInstance().SKIP;
            } else
              throw e;
          }
          if (ensureNotNull(this.inputStream).LA_za3lpa$(1) === IntStream$Companion_getInstance().EOF) {
            this._hitEOF = true;
          }
          if (this.type === Token$Companion_getInstance().INVALID_TYPE)
            this.type = ttype;
          if (this.type === Lexer$Companion_getInstance().SKIP) {
            continue outer;
          }
        }
         while (this.type === Lexer$Companion_getInstance().MORE);
        if (this.token == null)
          this.emit();
        return ensureNotNull(this.token);
      }
    }finally {
      ensureNotNull(this.inputStream).release_za3lpa$(tokenStartMarker);
    }
  };
  Lexer.prototype.skip = function () {
    this.type = Lexer$Companion_getInstance().SKIP;
  };
  Lexer.prototype.more = function () {
    this.type = Lexer$Companion_getInstance().MORE;
  };
  Lexer.prototype.mode_za3lpa$ = function (m) {
    this._mode = m;
  };
  Lexer.prototype.pushMode_za3lpa$ = function (m) {
    if (LexerATNSimulator$Companion_getInstance().debug)
      println('pushMode ' + toString(m));
    this._modeStack.push_za3lpa$(this._mode);
    this.mode_za3lpa$(m);
  };
  Lexer.prototype.popMode = function () {
    if (this._modeStack.isEmpty)
      throw RuntimeException_init();
    if (LexerATNSimulator$Companion_getInstance().debug)
      outMessage('popMode back to ' + toString(this._modeStack.peek()));
    this.mode_za3lpa$(this._modeStack.pop());
    return this._mode;
  };
  Lexer.prototype.emit_jdptgj$ = function (token) {
    this.token = token;
  };
  Lexer.prototype.emit = function () {
    var t = this.tokenFactory.create_peov9u$(ensureNotNull(this._tokenFactorySourcePair), this.type, this._text, this.channel, this._tokenStartCharIndex, this.charIndex - 1 | 0, this._tokenStartLine, this._tokenStartCharPositionInLine);
    this.emit_jdptgj$(t);
    return t;
  };
  Lexer.prototype.emitEOF = function () {
    var cpos = this.charPositionInLine;
    var line = this.line;
    var eof = this.tokenFactory.create_peov9u$(ensureNotNull(this._tokenFactorySourcePair), Token$Companion_getInstance().EOF, null, Token$Companion_getInstance().DEFAULT_CHANNEL, ensureNotNull(this.inputStream).index(), ensureNotNull(this.inputStream).index() - 1 | 0, line, cpos);
    this.emit_jdptgj$(eof);
    return eof;
  };
  Lexer.prototype.recover_ytsk3g$ = function (e) {
    if (ensureNotNull(this.inputStream).LA_za3lpa$(1) !== IntStream$Companion_getInstance().EOF) {
      ensureNotNull(this.interpreter).consume_npe0fi$(ensureNotNull(this.readInputStream()));
    }
  };
  Lexer.prototype.notifyListeners_ytsk3g$ = function (e) {
    var text = ensureNotNull(this.readInputStream()).getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(this._tokenStartCharIndex, ensureNotNull(this.inputStream).index()));
    var msg = "token recognition error at: '" + this.getErrorDisplay_61zpoe$(text) + "'";
    var listener = this.errorListenerDispatch;
    listener.syntaxError_kf8cjj$(this, null, this._tokenStartLine, this._tokenStartCharPositionInLine, msg, e);
  };
  Lexer.prototype.getErrorDisplay_61zpoe$ = function (s) {
    var tmp$, tmp$_0;
    var buf = StringBuilder_init();
    tmp$ = asCharArray(s);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = unboxChar(tmp$[tmp$_0]);
      buf.append_pdl1vj$(this.getErrorDisplay_za3lpa$(c | 0));
    }
    return buf.toString();
  };
  Lexer.prototype.getErrorDisplay_za3lpa$ = function (c) {
    var s = String.fromCharCode(toChar(c));
    switch (c) {
      case -1:
        s = '<EOF>';
        break;
      case 10:
        s = '\\n';
        break;
      case 9:
        s = '\\t';
        break;
      case 13:
        s = '\\r';
        break;
    }
    return s;
  };
  Lexer.prototype.getCharErrorDisplay_za3lpa$ = function (c) {
    var s = this.getErrorDisplay_za3lpa$(c);
    return "'" + s + "'";
  };
  Lexer.prototype.recover_udmhbo$ = function (re) {
    ensureNotNull(this.inputStream).consume();
  };
  function Lexer$Companion() {
    Lexer$Companion_instance = this;
    this.DEFAULT_MODE = 0;
    this.MORE = -2;
    this.SKIP = -3;
    this.DEFAULT_TOKEN_CHANNEL = Token$Companion_getInstance().DEFAULT_CHANNEL;
    this.HIDDEN = Token$Companion_getInstance().HIDDEN_CHANNEL;
    this.MIN_CHAR_VALUE = 0;
    this.MAX_CHAR_VALUE = 1114111;
  }
  Lexer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Lexer$Companion_instance = null;
  function Lexer$Companion_getInstance() {
    if (Lexer$Companion_instance === null) {
      new Lexer$Companion();
    }
    return Lexer$Companion_instance;
  }
  Lexer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Lexer',
    interfaces: [TokenSource, Recognizer]
  };
  function Lexer_init($this) {
    $this = $this || Object.create(Lexer.prototype);
    Recognizer.call($this);
    Lexer.call($this);
    return $this;
  }
  function Lexer_init_0(input, $this) {
    $this = $this || Object.create(Lexer.prototype);
    Recognizer.call($this);
    Lexer.call($this);
    $this.inputStream = input;
    $this._tokenFactorySourcePair = new Pair($this, input);
    return $this;
  }
  function LexerInterpreter(grammarFileName, vocabulary, ruleNames, channelNames, modeNames, atn, input) {
    Lexer_init_0(input, this);
    this.grammarFileName_ybsf68$_0 = grammarFileName;
    this.vocabulary_htyzow$_0 = vocabulary;
    this.atn_9jpkg3$_0 = atn;
    this.tokenNames_48ea6f$_0 = null;
    this.ruleNames_9t8apa$_0 = null;
    this.channelNames_s0cuxd$_0 = null;
    this.modeNames_q8jxh5$_0 = null;
    this._decisionToDFA_0 = null;
    this._sharedContextCache_0 = new PredictionContextCache();
    var tmp$, tmp$_0;
    if (this.atn.grammarType !== ATNType$LEXER_getInstance()) {
      throw IllegalArgumentException_init('The ATN must be a lexer ATN.');
    }
    this.tokenNames_48ea6f$_0 = Kotlin.newArray(this.atn.maxTokenType, null);
    tmp$ = ensureNotNull(this.tokenNames);
    for (var i = 0; i !== tmp$.length; ++i) {
      ensureNotNull(this.tokenNames)[i] = ensureNotNull(this.vocabulary).getDisplayName_za3lpa$(i);
    }
    this.ruleNames_9t8apa$_0 = copyToArray(ruleNames);
    this.channelNames_s0cuxd$_0 = copyToArray(channelNames);
    this.modeNames_q8jxh5$_0 = copyToArray(modeNames);
    this._decisionToDFA_0 = Kotlin.newArray(this.atn.numberOfDecisions, null);
    tmp$_0 = this._decisionToDFA_0;
    for (var i_0 = 0; i_0 !== tmp$_0.length; ++i_0) {
      this._decisionToDFA_0[i_0] = new DFA(ensureNotNull(this.atn.getDecisionState_za3lpa$(i_0)), i_0);
    }
    this.interpreter = new LexerATNSimulator(this, this.atn, this._decisionToDFA_0, this._sharedContextCache_0);
  }
  Object.defineProperty(LexerInterpreter.prototype, 'grammarFileName', {
    get: function () {
      return this.grammarFileName_ybsf68$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'vocabulary', {
    get: function () {
      return this.vocabulary_htyzow$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'atn', {
    get: function () {
      return this.atn_9jpkg3$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'tokenNames', {
    configurable: true,
    get: function () {
      return this.tokenNames_48ea6f$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'ruleNames', {
    configurable: true,
    get: function () {
      return this.ruleNames_9t8apa$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'channelNames', {
    configurable: true,
    get: function () {
      return this.channelNames_s0cuxd$_0;
    }
  });
  Object.defineProperty(LexerInterpreter.prototype, 'modeNames', {
    configurable: true,
    get: function () {
      return this.modeNames_q8jxh5$_0;
    }
  });
  LexerInterpreter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerInterpreter',
    interfaces: [Lexer]
  };
  function LexerInterpreter_init(grammarFileName, tokenNames, ruleNames, modeNames, atn, input, $this) {
    $this = $this || Object.create(LexerInterpreter.prototype);
    LexerInterpreter.call($this, grammarFileName, VocabularyImpl$Companion_getInstance().fromTokenNames_t85qxa$(copyToArray(tokenNames)), ruleNames, ArrayList_init_0(), modeNames, atn, input);
    return $this;
  }
  function LexerInterpreter_init_0(grammarFileName, vocabulary, ruleNames, modeNames, atn, input, $this) {
    $this = $this || Object.create(LexerInterpreter.prototype);
    LexerInterpreter.call($this, grammarFileName, vocabulary, ruleNames, ArrayList_init_0(), modeNames, atn, input);
    return $this;
  }
  function LexerNoViableAltException(lexer, input, startIndex, deadEndConfigs) {
    RecognitionException.call(this, lexer, input, null);
    this.startIndex = startIndex;
    this.deadEndConfigs = deadEndConfigs;
    this.name = 'LexerNoViableAltException';
  }
  Object.defineProperty(LexerNoViableAltException.prototype, 'inputStream', {
    configurable: true,
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = Kotlin.callGetter(this, RecognitionException.prototype, 'inputStream'), CharStream) ? tmp$ : throwCCE();
    }
  });
  LexerNoViableAltException.prototype.toString = function () {
    var symbol = '';
    if (this.startIndex >= 0 && this.startIndex < this.inputStream.size()) {
      symbol = this.inputStream.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(this.startIndex, this.startIndex));
      symbol = Utils_getInstance().escapeWhitespace_ivxn3r$(symbol, false);
    }
    return "LexerNoViableAltException('" + symbol + "')";
  };
  LexerNoViableAltException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerNoViableAltException',
    interfaces: [RecognitionException]
  };
  function ListTokenSource(tokens, sourceName) {
    if (sourceName === void 0)
      sourceName = null;
    this.tokens_0 = tokens;
    this.sourceName_oetl5s$_0 = sourceName;
    this.i_0 = 0;
    this.eofToken_0 = null;
    this.tokenFactory_k3fydn$_0 = CommonTokenFactory$Companion_getInstance().DEFAULT;
    if (this.tokens_0 == null) {
      throw new NullPointerException('tokens cannot be null');
    }
  }
  Object.defineProperty(ListTokenSource.prototype, 'sourceName', {
    get: function () {
      return this.sourceName_oetl5s$_0;
    }
  });
  Object.defineProperty(ListTokenSource.prototype, 'tokenFactory', {
    configurable: true,
    get: function () {
      return this.tokenFactory_k3fydn$_0;
    },
    set: function (tokenFactory) {
      this.tokenFactory_k3fydn$_0 = tokenFactory;
    }
  });
  Object.defineProperty(ListTokenSource.prototype, 'charPositionInLine', {
    configurable: true,
    get: function () {
      if (this.i_0 < ensureNotNull(this.tokens_0).size) {
        return this.tokens_0.get_za3lpa$(this.i_0).charPositionInLine;
      } else if (this.eofToken_0 != null) {
        return ensureNotNull(this.eofToken_0).charPositionInLine;
      } else if (this.tokens_0.size > 0) {
        var lastToken = this.tokens_0.get_za3lpa$(this.tokens_0.size - 1 | 0);
        var tokenText = lastToken.text;
        if (tokenText != null) {
          var lastNewLine = lastIndexOf(ensureNotNull(tokenText), 10);
          if (lastNewLine >= 0) {
            return ensureNotNull(tokenText).length - lastNewLine - 1 | 0;
          }
        }
        return lastToken.charPositionInLine + lastToken.stopIndex - lastToken.startIndex + 1 | 0;
      }
      return 0;
    }
  });
  Object.defineProperty(ListTokenSource.prototype, 'line', {
    configurable: true,
    get: function () {
      var tmp$;
      if (this.i_0 < ensureNotNull(this.tokens_0).size) {
        return this.tokens_0.get_za3lpa$(this.i_0).line;
      } else if (this.eofToken_0 != null) {
        return ensureNotNull(this.eofToken_0).line;
      } else if (this.tokens_0.size > 0) {
        var lastToken = this.tokens_0.get_za3lpa$(this.tokens_0.size - 1 | 0);
        var line = lastToken.line;
        var tokenText = lastToken.text;
        if (tokenText != null) {
          tmp$ = ensureNotNull(tokenText).length;
          for (var i = 0; i < tmp$; i++) {
            if (ensureNotNull(tokenText).charCodeAt(i) === 10) {
              line = line + 1 | 0;
            }
          }
        }
        return line;
      }
      return 1;
    }
  });
  ListTokenSource.prototype.readInputStream = function () {
    if (this.i_0 < ensureNotNull(this.tokens_0).size) {
      return ensureNotNull(this.tokens_0).get_za3lpa$(this.i_0).inputStream;
    } else if (this.eofToken_0 != null) {
      return ensureNotNull(this.eofToken_0).inputStream;
    } else if (this.tokens_0.size > 0) {
      return this.tokens_0.get_za3lpa$(this.tokens_0.size - 1 | 0).inputStream;
    }
    return null;
  };
  ListTokenSource.prototype.nextToken = function () {
    if (this.i_0 >= ensureNotNull(this.tokens_0).size) {
      if (this.eofToken_0 == null) {
        var start = -1;
        if (this.tokens_0.size > 0) {
          var previousStop = this.tokens_0.get_za3lpa$(this.tokens_0.size - 1 | 0).stopIndex;
          if (previousStop !== -1) {
            start = previousStop + 1 | 0;
          }
        }
        var stop = Math_getInstance().max_vux9f0$(-1, start - 1 | 0);
        this.eofToken_0 = this.tokenFactory.create_peov9u$(new Pair(this, this.readInputStream()), Token$Companion_getInstance().EOF, 'EOF', Token$Companion_getInstance().DEFAULT_CHANNEL, start, stop, this.line, this.charPositionInLine);
      }
      return ensureNotNull(this.eofToken_0);
    }
    var t = this.tokens_0.get_za3lpa$(this.i_0);
    if (this.i_0 === (this.tokens_0.size - 1 | 0) && t.type === Token$Companion_getInstance().EOF) {
      this.eofToken_0 = t;
    }
    this.i_0 = this.i_0 + 1 | 0;
    return t;
  };
  ListTokenSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListTokenSource',
    interfaces: [TokenSource]
  };
  function NoViableAltException(recognizer, input, startToken, offendingToken, deadEndConfigs, ctx) {
    var tmp$;
    if (input === void 0)
      input = (tmp$ = recognizer.readInputStream()) == null || Kotlin.isType(tmp$, TokenStream) ? tmp$ : throwCCE();
    if (startToken === void 0)
      startToken = recognizer.currentToken;
    if (offendingToken === void 0)
      offendingToken = recognizer.currentToken;
    if (deadEndConfigs === void 0)
      deadEndConfigs = null;
    if (ctx === void 0)
      ctx = recognizer.context;
    RecognitionException.call(this, recognizer, ensureNotNull(input), ensureNotNull(ctx));
    this.startToken = startToken;
    this.deadEndConfigs = deadEndConfigs;
    this.name = 'NoViableAltException';
    this.offendingToken = offendingToken;
  }
  NoViableAltException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoViableAltException',
    interfaces: [RecognitionException]
  };
  function Parser(input) {
    Recognizer.call(this);
    this.errorHandler = new DefaultErrorStrategy();
    this._input = input;
    this._precedenceStack = IntegerStack_init();
    this.context = null;
    this.buildParseTree = true;
    this._parseListeners = ArrayList_init_0();
    this.numberOfSyntaxErrors_twx9mv$_0 = 0;
    this.isMatchedEOF_qcrw05$_0 = false;
    this.assignInputStream_rpvxkc$(input);
  }
  Parser.prototype.assignInputStream_rpvxkc$ = function (newValue) {
    this.inputStream = newValue;
  };
  Parser.prototype.readInputStream = function () {
    return this.inputStream;
  };
  Object.defineProperty(Parser.prototype, 'numberOfSyntaxErrors', {
    configurable: true,
    get: function () {
      return this.numberOfSyntaxErrors_twx9mv$_0;
    },
    set: function (numberOfSyntaxErrors) {
      this.numberOfSyntaxErrors_twx9mv$_0 = numberOfSyntaxErrors;
    }
  });
  Object.defineProperty(Parser.prototype, 'isMatchedEOF', {
    configurable: true,
    get: function () {
      return this.isMatchedEOF_qcrw05$_0;
    },
    set: function (isMatchedEOF) {
      this.isMatchedEOF_qcrw05$_0 = isMatchedEOF;
    }
  });
  Object.defineProperty(Parser.prototype, 'parseListeners', {
    configurable: true,
    get: function () {
      return this._parseListeners;
    }
  });
  Object.defineProperty(Parser.prototype, 'tokenFactory', {
    configurable: true,
    get: function () {
      return ensureNotNull(ensureNotNull(this._input).tokenSource).tokenFactory;
    },
    set: function (factory) {
      ensureNotNull(ensureNotNull(this._input).tokenSource).tokenFactory = factory;
    }
  });
  Object.defineProperty(Parser.prototype, 'tokenStream', {
    configurable: true,
    get: function () {
      return this._input;
    },
    set: function (input) {
      this._input = null;
      this.reset();
      this._input = input;
    }
  });
  Object.defineProperty(Parser.prototype, 'currentToken', {
    configurable: true,
    get: function () {
      return ensureNotNull(this._input).LT_za3lpa$(1);
    }
  });
  Object.defineProperty(Parser.prototype, 'precedence', {
    configurable: true,
    get: function () {
      if (this._precedenceStack.isEmpty) {
        return -1;
      } else
        return this._precedenceStack.peek();
    }
  });
  Object.defineProperty(Parser.prototype, 'expectedTokens', {
    configurable: true,
    get: function () {
      return this.atn.getExpectedTokens_3o07by$(this.state, this.context);
    }
  });
  Object.defineProperty(Parser.prototype, 'ruleInvocationStack', {
    configurable: true,
    get: function () {
      return this.getRuleInvocationStack_katy8o$(this.context);
    }
  });
  Object.defineProperty(Parser.prototype, 'dfaStrings', {
    configurable: true,
    get: function () {
      ensureNotNull(this.interpreter);
      var tmp$;
      var s = ArrayList_init_0();
      tmp$ = ensureNotNull(this.interpreter).decisionToDFA.length;
      for (var d = 0; d < tmp$; d++) {
        var dfa = ensureNotNull(this.interpreter).decisionToDFA[d];
        s.add_11rb$(ensureNotNull(dfa.toString_hr977m$(this.vocabulary)));
      }
      return s;
    }
  });
  Object.defineProperty(Parser.prototype, 'sourceName', {
    configurable: true,
    get: function () {
      return ensureNotNull(ensureNotNull(this._input).sourceName);
    }
  });
  Object.defineProperty(Parser.prototype, 'parseInfo', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var interp = this.interpreter;
      if (Kotlin.isType(interp, ProfilingATNSimulator)) {
        tmp$_0 = new ParseInfo(Kotlin.isType(tmp$ = interp, ProfilingATNSimulator) ? tmp$ : throwCCE());
      } else
        tmp$_0 = null;
      return tmp$_0;
    }
  });
  Parser.prototype.reset = function () {
    throw new NotImplementedError_init();
  };
  Parser.prototype.match_za3lpa$ = function (ttype) {
    var t = this.currentToken;
    if (ensureNotNull(t).type === ttype) {
      if (ttype === Token$Companion_getInstance().EOF) {
        this.isMatchedEOF = true;
      }
      this.errorHandler.reportMatch_yo2s5h$(this);
      this.consume();
    } else {
      t = this.errorHandler.recoverInline_yo2s5h$(this);
      if (this.buildParseTree && t.tokenIndex === -1) {
        ensureNotNull(this.context).addErrorNode_hgqa9i$(this.createErrorNode_hfw1a6$(this.context, t));
      }
    }
    return t;
  };
  Parser.prototype.matchWildcard = function () {
    var t = this.currentToken;
    if (ensureNotNull(t).type > 0) {
      this.errorHandler.reportMatch_yo2s5h$(this);
      this.consume();
    } else {
      t = this.errorHandler.recoverInline_yo2s5h$(this);
      if (this.buildParseTree && t.tokenIndex === -1) {
        ensureNotNull(this.context).addErrorNode_hgqa9i$(this.createErrorNode_hfw1a6$(this.context, t));
      }
    }
    return t;
  };
  Parser.prototype.addParseListener_pkisj3$ = function (listener) {
    this._parseListeners.add_11rb$(listener);
  };
  Parser.prototype.removeParseListener_pkisj3$ = function (listener) {
    this._parseListeners.remove_11rb$(listener);
  };
  Parser.prototype.removeParseListeners = function () {
    this._parseListeners.clear();
  };
  Parser.prototype.triggerEnterRuleEvent = function () {
    var tmp$;
    tmp$ = this._parseListeners.iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener.enterEveryRule_1b5y54$(ensureNotNull(this.context));
      ensureNotNull(this.context).enterRule_pkisj3$(listener);
    }
  };
  Parser.prototype.triggerExitRuleEvent = function () {
    var tmp$;
    tmp$ = reversed(get_indices_0(this._parseListeners)).iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      var listener = this._parseListeners.get_za3lpa$(i);
      ensureNotNull(this.context).exitRule_pkisj3$(listener);
      listener.exitEveryRule_1b5y54$(ensureNotNull(this.context));
    }
  };
  Parser.prototype.notifyErrorListeners_61zpoe$ = function (msg) {
    if (!(this.currentToken != null)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    this.notifyErrorListeners_ft0bs8$(ensureNotNull(this.currentToken), msg, null);
  };
  Parser.prototype.notifyErrorListeners_ft0bs8$ = function (offendingToken, msg, e) {
    this.numberOfSyntaxErrors = this.numberOfSyntaxErrors + 1 | 0;
    var line = -1;
    var charPositionInLine = -1;
    line = offendingToken.line;
    charPositionInLine = offendingToken.charPositionInLine;
    var listener = this.errorListenerDispatch;
    listener.syntaxError_kf8cjj$(this, offendingToken, line, charPositionInLine, msg, e);
  };
  Parser.prototype.consume = function () {
    var tmp$, tmp$_0;
    var o = this.currentToken;
    if (!(o != null)) {
      var message = 'current token must not be null when consuming';
      throw IllegalArgumentException_init(message.toString());
    }
    if (ensureNotNull(o).type !== Recognizer$Companion_getInstance().EOF) {
      ensureNotNull(this.inputStream).consume();
    }
    var hasListener = !this._parseListeners.isEmpty();
    if (this.buildParseTree || hasListener) {
      if (this.errorHandler.inErrorRecoveryMode_yo2s5h$(this)) {
        var node = ensureNotNull(this.context).addErrorNode_hgqa9i$(this.createErrorNode_hfw1a6$(this.context, o));
        tmp$ = this._parseListeners.iterator();
        while (tmp$.hasNext()) {
          var listener = tmp$.next();
          listener.visitErrorNode_hgqa9i$(node);
        }
      } else {
        var node_0 = ensureNotNull(this.context).addChild_ww9j2q$(this.createTerminalNode_hfw1a6$(this.context, o));
        tmp$_0 = this._parseListeners.iterator();
        while (tmp$_0.hasNext()) {
          var listener_0 = tmp$_0.next();
          listener_0.visitTerminal_ww9j2q$(node_0);
        }
      }
    }
    return o;
  };
  Parser.prototype.createTerminalNode_hfw1a6$ = function (parent, t) {
    return new TerminalNodeImpl(t);
  };
  Parser.prototype.createErrorNode_hfw1a6$ = function (parent, t) {
    return new ErrorNodeImpl(t);
  };
  Parser.prototype.addContextToParseTree = function () {
    var tmp$;
    var parent = (tmp$ = ensureNotNull(this.context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
    if (parent != null) {
      parent.addChild_wqeert$(ensureNotNull(this.context));
    }
  };
  Parser.prototype.enterRule_1kxye0$ = function (localctx, state, ruleIndex) {
    this.state = state;
    this.context = localctx;
    ensureNotNull(this.context).start = ensureNotNull(this._input).LT_za3lpa$(1);
    if (this.buildParseTree)
      this.addContextToParseTree();
    this.triggerEnterRuleEvent();
  };
  Parser.prototype.exitRule = function () {
    var tmp$;
    if (this.isMatchedEOF) {
      ensureNotNull(this.context).stop = ensureNotNull(this._input).LT_za3lpa$(1);
    } else {
      ensureNotNull(this.context).stop = ensureNotNull(this._input).LT_za3lpa$(-1);
    }
    this.triggerExitRuleEvent();
    this.state = ensureNotNull(this.context).invokingState;
    this.context = (tmp$ = ensureNotNull(this.context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
  };
  Parser.prototype.enterOuterAlt_205md2$ = function (localctx, altNum) {
    var tmp$;
    localctx.altNumber = altNum;
    if (this.buildParseTree && this.context !== localctx) {
      var parent = (tmp$ = ensureNotNull(this.context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
      if (parent != null) {
        parent.removeLastChild();
        parent.addChild_wqeert$(localctx);
      }
    }
    this.context = localctx;
  };
  Parser.prototype.enterRecursionRule_205md2$ = function (localctx, ruleIndex) {
    this.enterRecursionRule_r4gjwq$(localctx, ensureNotNull(ensureNotNull(this.atn.ruleToStartState)[ruleIndex]).stateNumber, ruleIndex, 0);
  };
  Parser.prototype.enterRecursionRule_r4gjwq$ = function (localctx, state, ruleIndex, precedence) {
    this.state = state;
    this._precedenceStack.push_za3lpa$(precedence);
    this.context = localctx;
    ensureNotNull(this.context).start = ensureNotNull(this._input).LT_za3lpa$(1);
    this.triggerEnterRuleEvent();
  };
  Parser.prototype.pushNewRecursionContext_1kxye0$ = function (localctx, state, ruleIndex) {
    var previous = this.context;
    ensureNotNull(previous).assignParent_ueznix$(localctx);
    ensureNotNull(previous).invokingState = state;
    ensureNotNull(previous).stop = ensureNotNull(this._input).LT_za3lpa$(-1);
    this.context = localctx;
    ensureNotNull(this.context).start = ensureNotNull(previous).start;
    if (this.buildParseTree) {
      ensureNotNull(this.context).addChild_wqeert$(previous);
    }
    this.triggerEnterRuleEvent();
  };
  Parser.prototype.unrollRecursionContexts_ueznix$ = function (_parentctx) {
    var tmp$;
    this._precedenceStack.pop();
    ensureNotNull(this.context).stop = ensureNotNull(this._input).LT_za3lpa$(-1);
    var retctx = this.context;
    while (this.context !== _parentctx) {
      this.triggerExitRuleEvent();
      this.context = (tmp$ = ensureNotNull(this.context).readParent()) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
    }
    ensureNotNull(retctx).assignParent_ueznix$(_parentctx);
    if (this.buildParseTree && _parentctx != null) {
      _parentctx.addChild_wqeert$(retctx);
    }
  };
  Parser.prototype.precpred_efhjzr$ = function (localctx, precedence) {
    return precedence >= this._precedenceStack.peek();
  };
  Parser.prototype.getRuleIndex_61zpoe$ = function (ruleName) {
    var ruleIndex = this.ruleIndexMap.get_11rb$(ruleName);
    return ruleIndex != null ? ensureNotNull(ruleIndex) : -1;
  };
  Parser.prototype.getRuleContext = function () {
    return this.context;
  };
  Parser.prototype.getRuleInvocationStack_katy8o$ = function (p) {
    var p_0 = p;
    var ruleNames = this.ruleNames;
    var stack = ArrayList_init_0();
    while (p_0 != null) {
      var ruleIndex = ensureNotNull(p_0).ruleIndex;
      if (ruleIndex < 0)
        stack.add_11rb$('n/a');
      else
        stack.add_11rb$(ensureNotNull(ruleNames)[ruleIndex]);
      p_0 = ensureNotNull(p_0).readParent();
    }
    return stack;
  };
  Parser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: [Recognizer]
  };
  function ParserRuleContext() {
    this.children = null;
    this.start = null;
    this.stop = null;
    this.exception = null;
  }
  Object.defineProperty(ParserRuleContext.prototype, 'position', {
    configurable: true,
    get: function () {
      return this.start != null && ensureNotNull(this.stop).endPoint() != null ? new Position(ensureNotNull(this.start).startPoint(), ensureNotNull(ensureNotNull(this.stop).endPoint())) : null;
    }
  });
  ParserRuleContext.prototype.assignParent_ueznix$ = function (value) {
    this.parent = value;
  };
  ParserRuleContext.prototype.assignParent_107ici$ = function (value) {
    var tmp$;
    this.assignParent_ueznix$((tmp$ = value) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE());
  };
  Object.defineProperty(ParserRuleContext.prototype, 'childCount', {
    configurable: true,
    get: function () {
      return this.children != null ? ensureNotNull(this.children).size : 0;
    }
  });
  Object.defineProperty(ParserRuleContext.prototype, 'sourceInterval', {
    configurable: true,
    get: function () {
      var tmp$;
      if (this.start == null) {
        return Interval$Companion_getInstance().INVALID;
      }
      if (this.stop == null || ensureNotNull(this.stop).tokenIndex < ensureNotNull(this.start).tokenIndex) {
        tmp$ = Interval$Companion_getInstance().of_vux9f0$(ensureNotNull(this.start).tokenIndex, ensureNotNull(this.start).tokenIndex - 1 | 0);
      } else
        tmp$ = Interval$Companion_getInstance().of_vux9f0$(ensureNotNull(this.start).tokenIndex, ensureNotNull(this.stop).tokenIndex);
      return tmp$;
    }
  });
  ParserRuleContext.prototype.copyFrom_1b5y54$ = function (ctx) {
    var tmp$, tmp$_0;
    this.parent = ctx.parent;
    this.invokingState = ctx.invokingState;
    this.start = ctx.start;
    this.stop = ctx.stop;
    if (ctx.children != null) {
      this.children = ArrayList_init_0();
      tmp$ = ensureNotNull(ctx.children).iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        if (Kotlin.isType(child, ErrorNode)) {
          this.addChild_ww9j2q$(Kotlin.isType(tmp$_0 = child, ErrorNode) ? tmp$_0 : throwCCE());
        }
      }
    }
  };
  ParserRuleContext.prototype.enterRule_pkisj3$ = function (listener) {
  };
  ParserRuleContext.prototype.exitRule_pkisj3$ = function (listener) {
  };
  ParserRuleContext.prototype.addAnyChild_w2z1rj$ = function (t) {
    if (this.children == null)
      this.children = ArrayList_init_0();
    ensureNotNull(this.children).add_11rb$(t);
    return t;
  };
  ParserRuleContext.prototype.addChild_wqeert$ = function (ruleInvocation) {
    return this.addAnyChild_w2z1rj$(ruleInvocation);
  };
  ParserRuleContext.prototype.addChild_ww9j2q$ = function (t) {
    t.assignParent_107ici$(this);
    return this.addAnyChild_w2z1rj$(t);
  };
  ParserRuleContext.prototype.addErrorNode_hgqa9i$ = function (errorNode) {
    errorNode.assignParent_107ici$(this);
    return this.addAnyChild_w2z1rj$(errorNode);
  };
  ParserRuleContext.prototype.addChild_jdptgj$ = function (matchedToken) {
    var t = new TerminalNodeImpl(matchedToken);
    this.addAnyChild_w2z1rj$(t);
    t.assignParent_107ici$(this);
    return t;
  };
  ParserRuleContext.prototype.addErrorNode_jdptgj$ = function (badToken) {
    var t = new ErrorNodeImpl(badToken);
    this.addAnyChild_w2z1rj$(t);
    t.assignParent_107ici$(this);
    return t;
  };
  ParserRuleContext.prototype.removeLastChild = function () {
    if (this.children != null) {
      ensureNotNull(this.children).removeAt_za3lpa$(ensureNotNull(this.children).size - 1 | 0);
    }
  };
  ParserRuleContext.prototype.getChild_za3lpa$ = function (i) {
    return this.children != null && i >= 0 && i < ensureNotNull(this.children).size ? ensureNotNull(this.children).get_za3lpa$(i) : null;
  };
  ParserRuleContext.prototype.getChild_lnv4m8$ = function (ctxType, i) {
    var tmp$, tmp$_0;
    if (this.children == null || i < 0 || i >= ensureNotNull(this.children).size) {
      return null;
    }
    var j = -1;
    tmp$ = ensureNotNull(this.children).iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      if (isInstance(ctxType, o)) {
        j = j + 1 | 0;
        if (j === i) {
          return Kotlin.isType(tmp$_0 = o, ParseTree) ? tmp$_0 : throwCCE();
        }
      }
    }
    return null;
  };
  ParserRuleContext.prototype.getToken_vux9f0$ = function (ttype, i) {
    var tmp$, tmp$_0;
    if (this.children == null || i < 0 || i >= ensureNotNull(this.children).size) {
      return null;
    }
    var j = -1;
    tmp$ = ensureNotNull(this.children).iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      if (Kotlin.isType(o, TerminalNode)) {
        var tnode = Kotlin.isType(tmp$_0 = o, TerminalNode) ? tmp$_0 : throwCCE();
        var symbol = tnode.symbol;
        if (ensureNotNull(symbol).type === ttype) {
          j = j + 1 | 0;
          if (j === i) {
            return tnode;
          }
        }
      }
    }
    return null;
  };
  ParserRuleContext.prototype.getTokens_za3lpa$ = function (ttype) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.children == null) {
      return emptyList();
    }
    var tokens = null;
    tmp$ = ensureNotNull(this.children).iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      if (Kotlin.isType(o, TerminalNode)) {
        var tnode = Kotlin.isType(tmp$_0 = o, TerminalNode) ? tmp$_0 : throwCCE();
        var symbol = tnode.symbol;
        if (ensureNotNull(symbol).type === ttype) {
          if (tokens == null) {
            tokens = ArrayList_init_0();
          }
          tokens.add_11rb$(tnode);
        }
      }
    }
    if (tokens == null) {
      tmp$_1 = emptyList();
    } else
      tmp$_1 = tokens;
    return tmp$_1;
  };
  ParserRuleContext.prototype.getRuleContext_21emol$ = function (ctxType, i) {
    var tmp$;
    return (tmp$ = this.getChild_lnv4m8$(ctxType, i)) == null || Kotlin.isType(tmp$, ParserRuleContext) ? tmp$ : throwCCE();
  };
  ParserRuleContext.prototype.getRuleContexts_iax61z$ = function (ctxType) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.children == null) {
      return emptyList();
    }
    var contexts = null;
    tmp$ = ensureNotNull(this.children).iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      if (isInstance(ctxType, o)) {
        if (contexts == null) {
          contexts = ArrayList_init_0();
        }
        contexts.add_11rb$(Kotlin.isType(tmp$_0 = o, ParserRuleContext) ? tmp$_0 : throwCCE());
      }
    }
    if (contexts == null) {
      tmp$_1 = emptyList();
    } else
      tmp$_1 = contexts;
    return tmp$_1;
  };
  ParserRuleContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserRuleContext',
    interfaces: [RuleContext]
  };
  function ParserRuleContext_init($this) {
    $this = $this || Object.create(ParserRuleContext.prototype);
    RuleContext_init($this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ParserRuleContext_init_0(parent, invokingStateNumber, $this) {
    $this = $this || Object.create(ParserRuleContext.prototype);
    RuleContext_init_0(parent, invokingStateNumber, $this);
    ParserRuleContext.call($this);
    return $this;
  }
  function ProxyErrorListener(delegates) {
    this.delegates_0 = delegates;
    if (this.delegates_0 == null) {
      throw new NullPointerException('delegates');
    }
  }
  ProxyErrorListener.prototype.syntaxError_kf8cjj$ = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    var tmp$;
    tmp$ = ensureNotNull(this.delegates_0).iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener.syntaxError_kf8cjj$(recognizer, offendingSymbol, line, charPositionInLine, msg, e);
    }
  };
  ProxyErrorListener.prototype.reportAmbiguity_c3gkca$ = function (recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var tmp$;
    tmp$ = ensureNotNull(this.delegates_0).iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener.reportAmbiguity_c3gkca$(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
    }
  };
  ProxyErrorListener.prototype.reportAttemptingFullContext_hwltrx$ = function (recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    var tmp$;
    tmp$ = ensureNotNull(this.delegates_0).iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener.reportAttemptingFullContext_hwltrx$(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs);
    }
  };
  ProxyErrorListener.prototype.reportContextSensitivity_9n96ep$ = function (recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var tmp$;
    tmp$ = ensureNotNull(this.delegates_0).iterator();
    while (tmp$.hasNext()) {
      var listener = tmp$.next();
      listener.reportContextSensitivity_9n96ep$(recognizer, dfa, startIndex, stopIndex, prediction, configs);
    }
  };
  ProxyErrorListener.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProxyErrorListener',
    interfaces: [ANTLRErrorListener]
  };
  function RecognitionException(recognizer, inputStream, ctx, message) {
    if (message === void 0)
      message = null;
    RuntimeException_init(this);
    this.recognizer = recognizer;
    this.inputStream_i6x4i2$_0 = inputStream;
    this.ctx = ctx;
    this.message_t2eo3x$_0 = message;
    this.name = 'RecognitionException';
    this.offendingToken_l88pst$_0 = null;
    this.offendingState_ktrzet$_0 = -1;
    if (this.recognizer != null)
      this.offendingState = ensureNotNull(this.recognizer).state;
  }
  Object.defineProperty(RecognitionException.prototype, 'inputStream', {
    get: function () {
      return this.inputStream_i6x4i2$_0;
    }
  });
  Object.defineProperty(RecognitionException.prototype, 'message', {
    get: function () {
      return this.message_t2eo3x$_0;
    }
  });
  Object.defineProperty(RecognitionException.prototype, 'offendingToken', {
    configurable: true,
    get: function () {
      return this.offendingToken_l88pst$_0;
    },
    set: function (offendingToken) {
      this.offendingToken_l88pst$_0 = offendingToken;
    }
  });
  Object.defineProperty(RecognitionException.prototype, 'offendingState', {
    configurable: true,
    get: function () {
      return this.offendingState_ktrzet$_0;
    },
    set: function (offendingState) {
      this.offendingState_ktrzet$_0 = offendingState;
    }
  });
  Object.defineProperty(RecognitionException.prototype, 'expectedTokens', {
    configurable: true,
    get: function () {
      if (this.recognizer != null) {
        return ensureNotNull(this.recognizer).atn.getExpectedTokens_3o07by$(this.offendingState, this.ctx);
      } else
        return null;
    }
  });
  RecognitionException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RecognitionException',
    interfaces: [RuntimeException]
  };
  function Recognizer() {
    Recognizer$Companion_getInstance();
    this._listeners_7g5jg$_0 = ArrayList_init_0();
    this.interpreter = null;
    this.state = -1;
    this.inputStream = null;
  }
  Object.defineProperty(Recognizer.prototype, 'tokenTypeMap', {
    configurable: true,
    get: function () {
      var vocabulary = this.vocabulary;
      Recognizer$Companion_getInstance().tokenTypeMapCache_0;
      var tmp$;
      var result = Recognizer$Companion_getInstance().tokenTypeMapCache_0.get_11rb$(vocabulary);
      if (result == null) {
        var tmp = HashMap_init();
        tmp$ = this.atn.maxTokenType;
        for (var i = 0; i <= tmp$; i++) {
          var literalName = vocabulary.getLiteralName_za3lpa$(i);
          if (literalName != null) {
            tmp.put_xwzc9p$(literalName, i);
          }
          var symbolicName = vocabulary.getSymbolicName_za3lpa$(i);
          if (symbolicName != null) {
            tmp.put_xwzc9p$(symbolicName, i);
          }
        }
        var value = Token$Companion_getInstance().EOF;
        tmp.put_xwzc9p$('EOF', value);
        result = toMap(tmp);
        var $receiver = Recognizer$Companion_getInstance().tokenTypeMapCache_0;
        var value_0 = result;
        $receiver.put_xwzc9p$(vocabulary, value_0);
      }
      return result;
    }
  });
  Object.defineProperty(Recognizer.prototype, 'ruleIndexMap', {
    configurable: true,
    get: function () {
      var tmp$;
      tmp$ = this.ruleNames;
      if (tmp$ == null) {
        throw UnsupportedOperationException_init('The current recognizer does not provide a list of rule names.');
      }
      var ruleNames = tmp$;
      Recognizer$Companion_getInstance().ruleIndexMapCache_0;
      var result = Recognizer$Companion_getInstance().ruleIndexMapCache_0.get_11rb$(ruleNames);
      if (result == null) {
        var destination = ArrayList_init(ruleNames.length);
        var tmp$_0, tmp$_0_0;
        var index = 0;
        for (tmp$_0 = 0; tmp$_0 !== ruleNames.length; ++tmp$_0) {
          var item = ruleNames[tmp$_0];
          destination.add_11rb$(to(item, (tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0)));
        }
        result = toMap_0(destination);
        var $receiver = Recognizer$Companion_getInstance().ruleIndexMapCache_0;
        var value = result;
        $receiver.put_xwzc9p$(ruleNames, value);
      }
      return ensureNotNull(result);
    }
  });
  Object.defineProperty(Recognizer.prototype, 'serializedATN', {
    configurable: true,
    get: function () {
      throw UnsupportedOperationException_init('there is no serialized ATN');
    }
  });
  Object.defineProperty(Recognizer.prototype, 'parseInfo', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  Object.defineProperty(Recognizer.prototype, 'errorListeners', {
    configurable: true,
    get: function () {
      return this._listeners_7g5jg$_0;
    }
  });
  Object.defineProperty(Recognizer.prototype, 'errorListenerDispatch', {
    configurable: true,
    get: function () {
      return new ProxyErrorListener(this.errorListeners);
    }
  });
  Recognizer.prototype.getTokenType_61zpoe$ = function (tokenName) {
    var ttype = this.tokenTypeMap.get_11rb$(tokenName);
    return ttype != null ? ttype : Token$Companion_getInstance().INVALID_TYPE;
  };
  Recognizer.prototype.getErrorHeader_udmhbo$ = function (e) {
    var line = ensureNotNull(e.offendingToken).line;
    var charPositionInLine = ensureNotNull(e.offendingToken).charPositionInLine;
    return 'line ' + line + ':' + charPositionInLine;
  };
  Recognizer.prototype.getTokenErrorDisplay_wkbxdq$ = function (t) {
    var tmp$;
    if (t == null)
      return '<no token>';
    var s = t.text;
    if (s == null) {
      if (t.type === Token$Companion_getInstance().EOF) {
        tmp$ = '<EOF>';
      } else {
        tmp$ = '<' + toString(t.type) + '>';
      }
      s = tmp$;
    }
    s = replace(s, '\n', '\\n');
    s = replace(s, '\r', '\\r');
    s = replace(s, '\t', '\\t');
    return "'" + toString(s) + "'";
  };
  Recognizer.prototype.addErrorListener_tqsjfw$ = function (listener) {
    if (listener == null) {
      throw new NullPointerException('listener cannot be null.');
    }
    this._listeners_7g5jg$_0.add_11rb$(listener);
  };
  Recognizer.prototype.removeErrorListener_lyc00b$ = function (listener) {
    this._listeners_7g5jg$_0.remove_11rb$(listener);
  };
  Recognizer.prototype.removeErrorListeners = function () {
    this._listeners_7g5jg$_0.clear();
  };
  Recognizer.prototype.sempred_63cxg8$ = function (_localctx, ruleIndex, actionIndex) {
    return true;
  };
  Recognizer.prototype.precpred_efhjzr$ = function (localctx, precedence) {
    return true;
  };
  Recognizer.prototype.action_63cxg8$ = function (_localctx, ruleIndex, actionIndex) {
  };
  function Recognizer$Companion() {
    Recognizer$Companion_instance = this;
    this.EOF = -1;
    this.tokenTypeMapCache_0 = WeakHashMap_init();
    this.ruleIndexMapCache_0 = WeakHashMap_init();
  }
  Recognizer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Recognizer$Companion_instance = null;
  function Recognizer$Companion_getInstance() {
    if (Recognizer$Companion_instance === null) {
      new Recognizer$Companion();
    }
    return Recognizer$Companion_instance;
  }
  Recognizer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Recognizer',
    interfaces: []
  };
  var EMPTY_RULECTX;
  function RuleContext() {
    this.parent = null;
    this.invokingState = -1;
    this.ruleIndex_rb8bz9$_0 = -1;
  }
  RuleContext.prototype.assignParent_107ici$ = function (value) {
    var tmp$;
    this.parent = (tmp$ = value) == null || Kotlin.isType(tmp$, RuleContext) ? tmp$ : throwCCE();
  };
  RuleContext.prototype.assignParent_katy8o$ = function (value) {
    this.parent = value;
  };
  RuleContext.prototype.readParent = function () {
    return this.parent;
  };
  Object.defineProperty(RuleContext.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this.invokingState === -1;
    }
  });
  Object.defineProperty(RuleContext.prototype, 'sourceInterval', {
    configurable: true,
    get: function () {
      return Interval$Companion_getInstance().INVALID;
    }
  });
  Object.defineProperty(RuleContext.prototype, 'ruleContext', {
    configurable: true,
    get: function () {
      return this;
    }
  });
  Object.defineProperty(RuleContext.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this;
    }
  });
  Object.defineProperty(RuleContext.prototype, 'text', {
    configurable: true,
    get: function () {
      var tmp$;
      if (this.childCount === 0) {
        return '';
      }
      var builder = StringBuilder_init();
      tmp$ = this.childCount;
      for (var i = 0; i < tmp$; i++) {
        builder.append_pdl1vj$(ensureNotNull(this.getChild_za3lpa$(i)).text);
      }
      return builder.toString();
    }
  });
  Object.defineProperty(RuleContext.prototype, 'ruleIndex', {
    configurable: true,
    get: function () {
      return this.ruleIndex_rb8bz9$_0;
    },
    set: function (ruleIndex) {
      this.ruleIndex_rb8bz9$_0 = ruleIndex;
    }
  });
  Object.defineProperty(RuleContext.prototype, 'altNumber', {
    configurable: true,
    get: function () {
      return ATN$Companion_getInstance().INVALID_ALT_NUMBER;
    },
    set: function (altNumber) {
    }
  });
  Object.defineProperty(RuleContext.prototype, 'childCount', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  RuleContext.prototype.depth = function () {
    var n = 0;
    var p = this;
    while (p != null) {
      p = p.parent;
      n = n + 1 | 0;
    }
    return n;
  };
  RuleContext.prototype.getChild_za3lpa$ = function (i) {
    return null;
  };
  RuleContext.prototype.accept_sjdhzy$ = function (visitor) {
    return ensureNotNull(visitor.visitChildren_8ff8eq$(this));
  };
  RuleContext.prototype.toStringTree_yo2s5h$ = function (recog) {
    return Trees_getInstance().toStringTree_bxzmte$(this, recog);
  };
  RuleContext.prototype.toStringTree_d29504$ = function (ruleNames) {
    return Trees_getInstance().toStringTree_86pqm2$(this, ruleNames);
  };
  RuleContext.prototype.toStringTree = function () {
    var tmp$;
    return this.toStringTree_d29504$((tmp$ = null) == null || Kotlin.isType(tmp$, List) ? tmp$ : throwCCE());
  };
  RuleContext.prototype.toString = function () {
    var tmp$, tmp$_0;
    return this.toString_wb3ns8$((tmp$ = null) == null || Kotlin.isType(tmp$, List) ? tmp$ : throwCCE(), (tmp$_0 = null) == null || Kotlin.isType(tmp$_0, RuleContext) ? tmp$_0 : throwCCE());
  };
  RuleContext.prototype.toString_ldv8uu$ = function (recog, stop) {
    if (stop === void 0)
      stop = EMPTY_RULECTX;
    var ruleNames = recog != null ? recog.ruleNames : null;
    var ruleNamesList = ruleNames != null ? listOf(ruleNames.slice()) : null;
    return this.toString_wb3ns8$(ruleNamesList, stop);
  };
  RuleContext.prototype.toString_wb3ns8$ = function (ruleNames, stop) {
    if (stop === void 0)
      stop = null;
    var buf = StringBuilder_init();
    var p = this;
    buf.append_pdl1vj$('[');
    while (p != null && p !== stop) {
      if (ruleNames == null) {
        if (!p.isEmpty) {
          buf.append_s8jyv4$(p.invokingState);
        }
      } else {
        var ruleIndex = p.ruleIndex;
        var ruleName = ruleIndex >= 0 && ruleIndex < ruleNames.size ? ruleNames.get_za3lpa$(ruleIndex) : ruleIndex.toString();
        buf.append_pdl1vj$(ruleName);
      }
      if (p.parent != null && (ruleNames != null || !ensureNotNull(p.parent).isEmpty)) {
        buf.append_pdl1vj$(' ');
      }
      p = p.parent;
    }
    buf.append_pdl1vj$(']');
    return buf.toString();
  };
  RuleContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleContext',
    interfaces: [RuleNode]
  };
  function RuleContext_init($this) {
    $this = $this || Object.create(RuleContext.prototype);
    RuleContext.call($this);
    $this.parent = null;
    return $this;
  }
  function RuleContext_init_0(parent, invokingState, $this) {
    $this = $this || Object.create(RuleContext.prototype);
    RuleContext.call($this);
    $this.parent = parent;
    $this.invokingState = invokingState;
    return $this;
  }
  function RuleContextWithAltNum() {
    this.altNumber_yauzng$_0 = 0;
  }
  Object.defineProperty(RuleContextWithAltNum.prototype, 'altNumber', {
    configurable: true,
    get: function () {
      return this.altNumber_yauzng$_0;
    },
    set: function (altNumber) {
      this.altNumber_yauzng$_0 = altNumber;
    }
  });
  RuleContextWithAltNum.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleContextWithAltNum',
    interfaces: [ParserRuleContext]
  };
  function RuleContextWithAltNum_init($this) {
    $this = $this || Object.create(RuleContextWithAltNum.prototype);
    ParserRuleContext_init($this);
    RuleContextWithAltNum.call($this);
    $this.altNumber = ATN$Companion_getInstance().INVALID_ALT_NUMBER;
    return $this;
  }
  function RuleContextWithAltNum_init_0(parent, invokingStateNumber, $this) {
    $this = $this || Object.create(RuleContextWithAltNum.prototype);
    ParserRuleContext_init_0(parent, invokingStateNumber, $this);
    RuleContextWithAltNum.call($this);
    return $this;
  }
  function RuntimeMetaData() {
    RuntimeMetaData_instance = this;
    this.runtimeVersion = '4.7.1';
  }
  RuntimeMetaData.prototype.checkVersion_f5e6j7$ = function (generatingToolVersion, compileTimeVersion) {
    var runtimeVersion = this.runtimeVersion;
    var runtimeConflictsWithGeneratingTool = false;
    var runtimeConflictsWithCompileTimeTool = false;
    if (generatingToolVersion != null) {
      runtimeConflictsWithGeneratingTool = (!equals(runtimeVersion, generatingToolVersion) && !equals(this.getMajorMinorVersion_61zpoe$(runtimeVersion), this.getMajorMinorVersion_61zpoe$(generatingToolVersion)));
    }
    runtimeConflictsWithCompileTimeTool = (!equals(runtimeVersion, compileTimeVersion) && !equals(this.getMajorMinorVersion_61zpoe$(runtimeVersion), this.getMajorMinorVersion_61zpoe$(compileTimeVersion)));
    if (runtimeConflictsWithGeneratingTool) {
      errMessage('ANTLR Tool version ' + toString(generatingToolVersion) + ' used for code generation does not match the current runtime version ' + runtimeVersion);
    }
    if (runtimeConflictsWithCompileTimeTool) {
      errMessage('ANTLR Runtime version ' + compileTimeVersion + ' used for parser compilation does not match the current runtime version ' + runtimeVersion);
    }
  };
  RuntimeMetaData.prototype.getMajorMinorVersion_61zpoe$ = function (version) {
    var firstDot = indexOf(version, 46);
    var secondDot = firstDot >= 0 ? indexOf(version, 46, firstDot + 1 | 0) : -1;
    var firstDash = indexOf(version, 45);
    var referenceLength = version.length;
    if (secondDot >= 0) {
      referenceLength = Math_getInstance().min_vux9f0$(referenceLength, secondDot);
    }
    if (firstDash >= 0) {
      referenceLength = Math_getInstance().min_vux9f0$(referenceLength, firstDash);
    }
    var endIndex = referenceLength;
    return version.substring(0, endIndex);
  };
  RuntimeMetaData.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RuntimeMetaData',
    interfaces: []
  };
  var RuntimeMetaData_instance = null;
  function RuntimeMetaData_getInstance() {
    if (RuntimeMetaData_instance === null) {
      new RuntimeMetaData();
    }
    return RuntimeMetaData_instance;
  }
  function codePointIndices($receiver) {
    var $receiver_0 = until(0, $receiver.length);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var transform$result;
      if (hasSurrogatePairAt($receiver, element - 1 | 0)) {
        transform$result = null;
      } else {
        transform$result = element;
      }
      if ((tmp$_0 = transform$result) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return toIntArray(destination);
  }
  function toCodePoint(high, low) {
    return ((high | 0) << 10) + (low | 0) + -56613888 | 0;
  }
  function StringCharStream(source, sourceName) {
    this.source_0 = source;
    this.sourceName_l4q8on$_0 = sourceName;
    this.codePointIndices_0 = codePointIndices(this.source_0);
    this.size_0 = this.codePointIndices_0.length;
    this.position_0 = 0;
  }
  Object.defineProperty(StringCharStream.prototype, 'sourceName', {
    get: function () {
      return this.sourceName_l4q8on$_0;
    }
  });
  StringCharStream.prototype.codePoint_0 = function (index) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.size_0;
    if (0 <= index && index < tmp$) {
      var char = this.source_0.charCodeAt(this.codePointIndices_0[index]);
      if (isHighSurrogate(char)) {
        tmp$_0 = this.size_0;
        if (0 <= (index + 1 | 0) && (index + 1 | 0) < tmp$_0) {
          var low = this.source_0.charCodeAt(this.codePointIndices_0[index] + 1 | 0);
          tmp$_1 = toCodePoint(char, low);
        } else {
          tmp$_1 = IntStream$Companion_getInstance().EOF;
        }
      } else {
        tmp$_1 = char | 0;
      }
    } else {
      tmp$_1 = IntStream$Companion_getInstance().EOF;
    }
    return tmp$_1;
  };
  StringCharStream.prototype.consume = function () {
    if ((this.size_0 - this.position_0 | 0) === 0) {
      assert(this.LA_za3lpa$(1) === IntStream$Companion_getInstance().EOF);
      throw IllegalStateException_init('cannot consume EOF');
    }
    this.position_0 = this.position_0 + 1 | 0;
  };
  StringCharStream.prototype.index = function () {
    return this.position_0;
  };
  StringCharStream.prototype.size = function () {
    return this.size_0;
  };
  StringCharStream.prototype.mark = function () {
    return -1;
  };
  StringCharStream.prototype.release_za3lpa$ = function (marker) {
  };
  StringCharStream.prototype.seek_za3lpa$ = function (index) {
    this.position_0 = index;
  };
  StringCharStream.prototype.toString = function () {
    return this.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(0, this.size_0 - 1 | 0));
  };
  StringCharStream.prototype.getText_yeqsgl$ = function (interval) {
    var startIndex = Math_getInstance().min_vux9f0$(interval.a, this.size_0);
    var endIndex = Math_getInstance().min_vux9f0$(interval.b, this.size_0);
    var $receiver = this.source_0;
    var startIndex_0 = this.codePointIndices_0[startIndex];
    var endIndex_0 = this.codePointIndices_0[endIndex] + 1 | 0;
    return $receiver.substring(startIndex_0, endIndex_0);
  };
  StringCharStream.prototype.LA_za3lpa$ = function (i) {
    var tmp$;
    if (i < 0)
      tmp$ = this.codePoint_0(this.position_0 + i | 0);
    else if (i > 0)
      tmp$ = this.codePoint_0(this.position_0 + i - 1 | 0);
    else
      return 0;
    return tmp$;
  };
  StringCharStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StringCharStream',
    interfaces: [CharStream]
  };
  function Token() {
    Token$Companion_getInstance();
  }
  Token.prototype.startPoint = function () {
    return new Point(this.line, this.charPositionInLine);
  };
  Token.prototype.endPoint = function () {
    return this.text == null ? null : (new Point(this.line, this.charPositionInLine)).advance_61zpoe$(ensureNotNull(this.text));
  };
  function Token$Companion() {
    Token$Companion_instance = this;
    this.INVALID_TYPE = 0;
    this.EPSILON = -2;
    this.MIN_USER_TOKEN_TYPE = 1;
    this.EOF = IntStream$Companion_getInstance().EOF;
    this.DEFAULT_CHANNEL = 0;
    this.HIDDEN_CHANNEL = 1;
    this.MIN_USER_CHANNEL_VALUE = 2;
  }
  Token$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Token$Companion_instance = null;
  function Token$Companion_getInstance() {
    if (Token$Companion_instance === null) {
      new Token$Companion();
    }
    return Token$Companion_instance;
  }
  Token.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Token',
    interfaces: []
  };
  function TokenFactory() {
  }
  TokenFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TokenFactory',
    interfaces: []
  };
  function TokenSource() {
  }
  TokenSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TokenSource',
    interfaces: []
  };
  function TokenStream() {
  }
  TokenStream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TokenStream',
    interfaces: [IntStream]
  };
  function TokenStreamRewriter(tokenStream) {
    TokenStreamRewriter$Companion_getInstance();
    this.tokenStream = tokenStream;
    this.programs_0 = null;
    this.lastRewriteTokenIndexes_0 = null;
    this.programs_0 = HashMap_init();
    this.programs_0.put_xwzc9p$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, ArrayList_init(TokenStreamRewriter$Companion_getInstance().PROGRAM_INIT_SIZE));
    this.lastRewriteTokenIndexes_0 = HashMap_init();
  }
  Object.defineProperty(TokenStreamRewriter.prototype, 'classesByName', {
    configurable: true,
    get: function () {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
    }
  });
  Object.defineProperty(TokenStreamRewriter.prototype, 'lastRewriteTokenIndex', {
    configurable: true,
    get: function () {
      return this.getLastRewriteTokenIndex_0(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME);
    }
  });
  Object.defineProperty(TokenStreamRewriter.prototype, 'text', {
    configurable: true,
    get: function () {
      return this.getText_cbpzs7$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, Interval$Companion_getInstance().of_vux9f0$(0, this.tokenStream.size() - 1 | 0));
    }
  });
  function TokenStreamRewriter$RewriteOperation($outer) {
    this.$outer = $outer;
    this.instructionIndex = 0;
    this.index = 0;
    this.text = null;
  }
  TokenStreamRewriter$RewriteOperation.prototype.execute_irqrwq$ = function (buf) {
    return this.index;
  };
  TokenStreamRewriter$RewriteOperation.prototype.toString = function () {
    throw new NotImplementedError_init();
  };
  TokenStreamRewriter$RewriteOperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RewriteOperation',
    interfaces: []
  };
  function TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init($outer, index, $this) {
    $this = $this || Object.create(TokenStreamRewriter$RewriteOperation.prototype);
    TokenStreamRewriter$RewriteOperation.call($this, $outer);
    $this.index = index;
    return $this;
  }
  function TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init_0($outer, index, text, $this) {
    $this = $this || Object.create(TokenStreamRewriter$RewriteOperation.prototype);
    TokenStreamRewriter$RewriteOperation.call($this, $outer);
    $this.index = index;
    $this.text = text;
    return $this;
  }
  function TokenStreamRewriter$InsertBeforeOp($outer, index, text) {
    this.$outer = $outer;
    TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init_0(this.$outer, index, text, this);
  }
  TokenStreamRewriter$InsertBeforeOp.prototype.execute_irqrwq$ = function (buf) {
    buf.append_s8jyv4$(this.text);
    if (this.$outer.tokenStream.get_za3lpa$(this.index).type !== Token$Companion_getInstance().EOF) {
      buf.append_pdl1vj$(this.$outer.tokenStream.get_za3lpa$(this.index).text);
    }
    return this.index + 1 | 0;
  };
  TokenStreamRewriter$InsertBeforeOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InsertBeforeOp',
    interfaces: [TokenStreamRewriter$RewriteOperation]
  };
  function TokenStreamRewriter$InsertAfterOp($outer, index, text) {
    this.$outer = $outer;
    TokenStreamRewriter$InsertBeforeOp.call(this, this.$outer, index + 1 | 0, text);
  }
  TokenStreamRewriter$InsertAfterOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InsertAfterOp',
    interfaces: [TokenStreamRewriter$InsertBeforeOp]
  };
  function TokenStreamRewriter$ReplaceOp($outer, from, lastIndex, text) {
    this.$outer = $outer;
    TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init_0(this.$outer, from, text, this);
    this.lastIndex = lastIndex;
  }
  TokenStreamRewriter$ReplaceOp.prototype.execute_irqrwq$ = function (buf) {
    if (this.text != null) {
      buf.append_s8jyv4$(this.text);
    }
    return this.lastIndex + 1 | 0;
  };
  TokenStreamRewriter$ReplaceOp.prototype.toString = function () {
    var tmp$;
    if (this.text == null) {
      tmp$ = '<DeleteOp@' + toString(this.$outer.tokenStream.get_za3lpa$(this.index)) + '..' + toString(this.$outer.tokenStream.get_za3lpa$(this.lastIndex)) + '>';
    } else
      tmp$ = '<ReplaceOp@' + toString(this.$outer.tokenStream.get_za3lpa$(this.index)) + '..' + toString(this.$outer.tokenStream.get_za3lpa$(this.lastIndex)) + ':"' + toString(this.text) + '">';
    return tmp$;
  };
  TokenStreamRewriter$ReplaceOp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReplaceOp',
    interfaces: [TokenStreamRewriter$RewriteOperation]
  };
  TokenStreamRewriter.prototype.rollback_za3lpa$ = function (instructionIndex) {
    this.rollback_bm4lxs$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, instructionIndex);
  };
  TokenStreamRewriter.prototype.rollback_bm4lxs$ = function (programName, instructionIndex) {
    var is = this.programs_0.get_11rb$(programName);
    if (is != null) {
      this.programs_0.put_xwzc9p$(programName, is.subList_vux9f0$(TokenStreamRewriter$Companion_getInstance().MIN_TOKEN_INDEX, instructionIndex));
    }
  };
  TokenStreamRewriter.prototype.deleteProgram_61zpoe$ = function (programName) {
    if (programName === void 0)
      programName = TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME;
    this.rollback_bm4lxs$(programName, TokenStreamRewriter$Companion_getInstance().MIN_TOKEN_INDEX);
  };
  TokenStreamRewriter.prototype.insertAfter_iszf0u$ = function (t, text) {
    this.insertAfter_xfym74$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, t, text);
  };
  TokenStreamRewriter.prototype.insertAfter_vux3hl$ = function (index, text) {
    this.insertAfter_3m4wor$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, index, text);
  };
  TokenStreamRewriter.prototype.insertAfter_xfym74$ = function (programName, t, text) {
    this.insertAfter_3m4wor$(programName, t.tokenIndex, text);
  };
  TokenStreamRewriter.prototype.insertAfter_3m4wor$ = function (programName, index, text) {
    var op = new TokenStreamRewriter$InsertAfterOp(this, index, text);
    var rewrites = this.getProgram_0(programName);
    op.instructionIndex = rewrites.size;
    rewrites.add_11rb$(op);
  };
  TokenStreamRewriter.prototype.insertBefore_iszf0u$ = function (t, text) {
    this.insertBefore_xfym74$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, t, text);
  };
  TokenStreamRewriter.prototype.insertBefore_vux3hl$ = function (index, text) {
    this.insertBefore_3m4wor$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, index, text);
  };
  TokenStreamRewriter.prototype.insertBefore_xfym74$ = function (programName, t, text) {
    this.insertBefore_3m4wor$(programName, t.tokenIndex, text);
  };
  TokenStreamRewriter.prototype.insertBefore_3m4wor$ = function (programName, index, text) {
    var op = new TokenStreamRewriter$InsertBeforeOp(this, index, text);
    var rewrites = this.getProgram_0(programName);
    op.instructionIndex = rewrites.size;
    rewrites.add_11rb$(op);
  };
  TokenStreamRewriter.prototype.replace_vux3hl$ = function (index, text) {
    this.replace_b57vyq$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, index, index, text);
  };
  TokenStreamRewriter.prototype.replace_qt1joh$ = function (from, to, text) {
    this.replace_b57vyq$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, from, to, text);
  };
  TokenStreamRewriter.prototype.replace_iszf0u$ = function (indexT, text) {
    this.replace_t524c2$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, indexT, indexT, text);
  };
  TokenStreamRewriter.prototype.replace_xowngh$ = function (from, to, text) {
    this.replace_t524c2$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, from, to, text);
  };
  TokenStreamRewriter.prototype.replace_b57vyq$ = function (programName, from, to, text) {
    if (from > to || from < 0 || to < 0 || to >= this.tokenStream.size()) {
      throw IllegalArgumentException_init('replace: range invalid: ' + toString(from) + '..' + toString(to) + '(size=' + toString(this.tokenStream.size()) + ')');
    }
    var op = new TokenStreamRewriter$ReplaceOp(this, from, to, ensureNotNull(text));
    var rewrites = this.getProgram_0(programName);
    op.instructionIndex = rewrites.size;
    rewrites.add_11rb$(op);
  };
  TokenStreamRewriter.prototype.replace_t524c2$ = function (programName, from, to, text) {
    this.replace_b57vyq$(programName, from.tokenIndex, to.tokenIndex, text);
  };
  TokenStreamRewriter.prototype.delete_za3lpa$ = function (index) {
    this.delete_3m52m6$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, index, index);
  };
  TokenStreamRewriter.prototype.delete_vux9f0$ = function (from, to) {
    this.delete_3m52m6$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, from, to);
  };
  TokenStreamRewriter.prototype.delete_jdptgj$ = function (indexT) {
    this.delete_d1teoy$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, indexT, indexT);
  };
  TokenStreamRewriter.prototype.delete_2tm1u4$ = function (from, to) {
    this.delete_d1teoy$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, from, to);
  };
  TokenStreamRewriter.prototype.delete_3m52m6$ = function (programName, from, to) {
    this.replace_b57vyq$(programName, from, to, null);
  };
  TokenStreamRewriter.prototype.delete_d1teoy$ = function (programName, from, to) {
    this.replace_t524c2$(programName, from, to, null);
  };
  TokenStreamRewriter.prototype.getLastRewriteTokenIndex_0 = function (programName) {
    var tmp$;
    tmp$ = this.lastRewriteTokenIndexes_0.get_11rb$(programName);
    if (tmp$ == null) {
      return -1;
    }
    return tmp$;
  };
  TokenStreamRewriter.prototype.setLastRewriteTokenIndex_0 = function (programName, i) {
    this.lastRewriteTokenIndexes_0.put_xwzc9p$(programName, i);
  };
  TokenStreamRewriter.prototype.getProgram_0 = function (name) {
    var is = this.programs_0.get_11rb$(name);
    if (is == null) {
      is = this.initializeProgram_0(name);
    }
    return is;
  };
  TokenStreamRewriter.prototype.initializeProgram_0 = function (name) {
    var is = ArrayList_init(TokenStreamRewriter$Companion_getInstance().PROGRAM_INIT_SIZE);
    this.programs_0.put_xwzc9p$(name, is);
    return is;
  };
  TokenStreamRewriter.prototype.getText_yeqsgl$ = function (interval) {
    return this.getText_cbpzs7$(TokenStreamRewriter$Companion_getInstance().DEFAULT_PROGRAM_NAME, interval);
  };
  TokenStreamRewriter.prototype.getText_cbpzs7$ = function (programName, interval) {
    if (interval === void 0)
      interval = Interval$Companion_getInstance().of_vux9f0$(0, this.tokenStream.size() - 1 | 0);
    var tmp$;
    var rewrites = this.programs_0.get_11rb$(programName);
    var start = interval.a;
    var stop = interval.b;
    if (stop > (this.tokenStream.size() - 1 | 0))
      stop = this.tokenStream.size() - 1 | 0;
    if (start < 0)
      start = 0;
    if (rewrites == null || rewrites.isEmpty()) {
      return this.tokenStream.getText_yeqsgl$(interval);
    }
    var buf = StringBuilder_init();
    var indexToOp = ensureNotNull(this.reduceToSingleOperationPerIndex_0(rewrites));
    var i = start;
    while (i <= stop && i < this.tokenStream.size()) {
      var op = indexToOp.get_11rb$(i);
      indexToOp.remove_11rb$(i);
      var t = this.tokenStream.get_za3lpa$(i);
      if (op == null) {
        if (t.type !== Token$Companion_getInstance().EOF)
          buf.append_pdl1vj$(t.text);
        i = i + 1 | 0;
      } else {
        i = op.execute_irqrwq$(buf);
      }
    }
    if (stop === (this.tokenStream.size() - 1 | 0)) {
      tmp$ = indexToOp.values.iterator();
      while (tmp$.hasNext()) {
        var op_0 = tmp$.next();
        if (op_0.index >= (this.tokenStream.size() - 1 | 0))
          buf.append_s8jyv4$(op_0.text);
      }
    }
    return buf.toString();
  };
  TokenStreamRewriter.prototype.reduceToSingleOperationPerIndex_0 = function (rewrites) {
    for (var i = 0; i !== rewrites.size; ++i) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      tmp$ = rewrites.get_za3lpa$(i);
      if (tmp$ == null) {
        continue;
      }
      tmp$_1 = Kotlin.isType(tmp$_0 = tmp$, TokenStreamRewriter$ReplaceOp) ? tmp$_0 : null;
      if (tmp$_1 == null) {
        continue;
      }
      var op = tmp$_1;
      var rop = Kotlin.isType(tmp$_2 = rewrites.get_za3lpa$(i), TokenStreamRewriter$ReplaceOp) ? tmp$_2 : throwCCE();
      var inserts = this.getKindOfOps_0(rewrites, getType(this, 'InsertBeforeOp'), i);
      tmp$_3 = inserts.iterator();
      while (tmp$_3.hasNext()) {
        var iop = tmp$_3.next();
        if (iop.index === rop.index) {
          rewrites.set_wxm5ur$(iop.instructionIndex, null);
          rop.text = ensureNotNull(iop.text).toString() + (rop.text != null ? ensureNotNull(rop.text).toString() : '');
        } else if (iop.index > rop.index && iop.index <= rop.lastIndex) {
          rewrites.set_wxm5ur$(iop.instructionIndex, null);
        }
      }
      var prevReplaces = this.getKindOfOps_0(rewrites, getType(this, 'ReplaceOp'), i);
      tmp$_4 = prevReplaces.iterator();
      while (tmp$_4.hasNext()) {
        var prevRop = tmp$_4.next();
        if (prevRop.index >= rop.index && prevRop.lastIndex <= rop.lastIndex) {
          rewrites.set_wxm5ur$(prevRop.instructionIndex, null);
          continue;
        }
        var disjoint = prevRop.lastIndex < rop.index || prevRop.index > rop.lastIndex;
        if (prevRop.text == null && rop.text == null && !disjoint) {
          rewrites.set_wxm5ur$(prevRop.instructionIndex, null);
          rop.index = Math_getInstance().min_vux9f0$(prevRop.index, rop.index);
          rop.lastIndex = Math_getInstance().max_vux9f0$(prevRop.lastIndex, rop.lastIndex);
          println('new rop ' + toString(rop));
        } else if (!disjoint) {
          throw IllegalArgumentException_init('replace op boundaries of ' + rop + ' overlap with previous ' + prevRop);
        }
      }
    }
    for (var i_0 = 0; i_0 !== rewrites.size; ++i_0) {
      var tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
      tmp$_5 = rewrites.get_za3lpa$(i_0);
      if (tmp$_5 == null) {
        continue;
      }
      tmp$_7 = Kotlin.isType(tmp$_6 = tmp$_5, TokenStreamRewriter$InsertBeforeOp) ? tmp$_6 : null;
      if (tmp$_7 == null) {
        continue;
      }
      var op_0 = tmp$_7;
      var iop_0 = Kotlin.isType(tmp$_8 = rewrites.get_za3lpa$(i_0), TokenStreamRewriter$InsertBeforeOp) ? tmp$_8 : throwCCE();
      var prevInserts = this.getKindOfOps_0(rewrites, getType(this, 'InsertBeforeOp'), i_0);
      tmp$_9 = prevInserts.iterator();
      while (tmp$_9.hasNext()) {
        var prevIop = tmp$_9.next();
        if (prevIop.index === iop_0.index) {
          if (Kotlin.isType(prevIop, TokenStreamRewriter$InsertAfterOp)) {
            iop_0.text = this.catOpText_0(prevIop.text, iop_0.text);
            rewrites.set_wxm5ur$(prevIop.instructionIndex, null);
          } else if (Kotlin.isType(prevIop, TokenStreamRewriter$InsertBeforeOp)) {
            iop_0.text = this.catOpText_0(iop_0.text, prevIop.text);
            rewrites.set_wxm5ur$(prevIop.instructionIndex, null);
          }
        }
      }
      var prevReplaces_0 = this.getKindOfOps_0(rewrites, getType(this, 'ReplaceOp'), i_0);
      tmp$_10 = prevReplaces_0.iterator();
      while (tmp$_10.hasNext()) {
        var rop_0 = tmp$_10.next();
        if (iop_0.index === rop_0.index) {
          rop_0.text = this.catOpText_0(iop_0.text, rop_0.text);
          rewrites.set_wxm5ur$(i_0, null);
          continue;
        }
        if (iop_0.index >= rop_0.index && iop_0.index <= rop_0.lastIndex) {
          throw IllegalArgumentException_init('insert op ' + iop_0 + ' within boundaries of previous ' + rop_0);
        }
      }
    }
    var m = HashMap_init();
    for (var i_1 = 0; i_1 !== rewrites.size; ++i_1) {
      var tmp$_11;
      tmp$_11 = rewrites.get_za3lpa$(i_1);
      if (tmp$_11 == null) {
        continue;
      }
      var op_1 = tmp$_11;
      if (m.get_11rb$(op_1.index) != null) {
        throw Error_init('should only be one op per index');
      }
      m.put_xwzc9p$(op_1.index, op_1);
    }
    return m;
  };
  TokenStreamRewriter.prototype.catOpText_0 = function (a, b) {
    var x = '';
    var y = '';
    if (a != null)
      x = a.toString();
    if (b != null)
      y = b.toString();
    return x + y;
  };
  TokenStreamRewriter.prototype.getKindOfOps_0 = function (rewrites, kind, before) {
    var tmp$;
    var ops = ArrayList_init_0();
    var i = 0;
    while (i < before && i < rewrites.size) {
      var op = rewrites.get_za3lpa$(i);
      if (op == null) {
        i = i + 1 | 0;
        continue;
      }
      if (isInstance(kind, op)) {
        ops.add_11rb$(Kotlin.isType(tmp$ = op, TokenStreamRewriter$RewriteOperation) ? tmp$ : throwCCE());
      }
      i = i + 1 | 0;
    }
    return ops;
  };
  function TokenStreamRewriter$Companion() {
    TokenStreamRewriter$Companion_instance = this;
    this.DEFAULT_PROGRAM_NAME = 'default';
    this.PROGRAM_INIT_SIZE = 100;
    this.MIN_TOKEN_INDEX = 0;
  }
  TokenStreamRewriter$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TokenStreamRewriter$Companion_instance = null;
  function TokenStreamRewriter$Companion_getInstance() {
    if (TokenStreamRewriter$Companion_instance === null) {
      new TokenStreamRewriter$Companion();
    }
    return TokenStreamRewriter$Companion_instance;
  }
  TokenStreamRewriter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenStreamRewriter',
    interfaces: [TypeDeclarator]
  };
  function UnbufferedTokenStream(tokenSource, bufferSize) {
    if (bufferSize === void 0)
      bufferSize = 256;
    this.tokenSource_5rfu7j$_0 = null;
    this.tokens_0 = null;
    this.n_0 = 0;
    this.p_0 = 0;
    this.numMarkers_0 = 0;
    this.lastToken_0 = null;
    this.lastTokenBufferStart_0 = null;
    this.currentTokenIndex_0 = 0;
    this.tokenSource = tokenSource;
    this.tokens_0 = Kotlin.newArray(bufferSize, null);
    this.n_0 = 0;
    this.fill_0(1);
  }
  Object.defineProperty(UnbufferedTokenStream.prototype, 'tokenSource', {
    configurable: true,
    get: function () {
      return this.tokenSource_5rfu7j$_0;
    },
    set: function (tokenSource) {
      this.tokenSource_5rfu7j$_0 = tokenSource;
    }
  });
  Object.defineProperty(UnbufferedTokenStream.prototype, 'text', {
    configurable: true,
    get: function () {
      return '';
    }
  });
  Object.defineProperty(UnbufferedTokenStream.prototype, 'sourceName', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.tokenSource).sourceName;
    }
  });
  Object.defineProperty(UnbufferedTokenStream.prototype, 'bufferStartIndex_0', {
    configurable: true,
    get: function () {
      return this.currentTokenIndex_0 - this.p_0 | 0;
    }
  });
  UnbufferedTokenStream.prototype.get_za3lpa$ = function (i) {
    var bufferStartIndex = this.bufferStartIndex_0;
    if (i < bufferStartIndex || i >= (bufferStartIndex + this.n_0 | 0)) {
      throw new IndexOutOfBoundsException('get(' + toString(i) + ') outside buffer: ' + toString(bufferStartIndex) + '..' + toString(bufferStartIndex + this.n_0 | 0));
    }
    return ensureNotNull(this.tokens_0[i - bufferStartIndex | 0]);
  };
  UnbufferedTokenStream.prototype.LT_za3lpa$ = function (i) {
    if (i === -1) {
      return ensureNotNull(this.lastToken_0);
    }
    this.sync_0(i);
    var index = this.p_0 + i - 1 | 0;
    if (index < 0) {
      throw new IndexOutOfBoundsException('LT(' + i + ') gives negative index');
    }
    if (index >= this.n_0) {
      assert(this.n_0 > 0 && ensureNotNull(this.tokens_0[this.n_0 - 1 | 0]).type === Token$Companion_getInstance().EOF);
      return ensureNotNull(this.tokens_0[this.n_0 - 1 | 0]);
    }
    return ensureNotNull(this.tokens_0[index]);
  };
  UnbufferedTokenStream.prototype.LA_za3lpa$ = function (i) {
    return this.LT_za3lpa$(i).type;
  };
  UnbufferedTokenStream.prototype.getText_wqeert$ = function (ctx) {
    return this.getText_yeqsgl$(ctx.sourceInterval);
  };
  UnbufferedTokenStream.prototype.getText_5osdw8$ = function (start, stop) {
    return this.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(ensureNotNull(start).tokenIndex, ensureNotNull(stop).tokenIndex));
  };
  UnbufferedTokenStream.prototype.consume = function () {
    if (this.LA_za3lpa$(1) === Token$Companion_getInstance().EOF) {
      throw IllegalStateException_init('cannot consume EOF');
    }
    this.lastToken_0 = this.tokens_0[this.p_0];
    if (this.p_0 === (this.n_0 - 1 | 0) && this.numMarkers_0 === 0) {
      this.n_0 = 0;
      this.p_0 = -1;
      this.lastTokenBufferStart_0 = this.lastToken_0;
    }
    this.p_0 = this.p_0 + 1 | 0;
    this.currentTokenIndex_0 = this.currentTokenIndex_0 + 1 | 0;
    this.sync_0(1);
  };
  UnbufferedTokenStream.prototype.sync_0 = function (want) {
    var need = this.p_0 + want - 1 - this.n_0 + 1 | 0;
    if (need > 0) {
      this.fill_0(need);
    }
  };
  UnbufferedTokenStream.prototype.fill_0 = function (n) {
    for (var i = 0; i < n; i++) {
      if (this.n_0 > 0 && ensureNotNull(this.tokens_0[this.n_0 - 1 | 0]).type === Token$Companion_getInstance().EOF) {
        return i;
      }
      var t = ensureNotNull(this.tokenSource).nextToken();
      this.add_0(t);
    }
    return n;
  };
  UnbufferedTokenStream.prototype.add_0 = function (t) {
    var tmp$, tmp$_0;
    if (this.n_0 >= this.tokens_0.length) {
      this.tokens_0 = copyOf(this.tokens_0, this.tokens_0.length * 2 | 0);
    }
    if (Kotlin.isType(t, WritableToken)) {
      (Kotlin.isType(tmp$ = t, WritableToken) ? tmp$ : throwCCE()).tokenIndex = this.bufferStartIndex_0 + this.n_0 | 0;
    }
    this.tokens_0[tmp$_0 = this.n_0, this.n_0 = tmp$_0 + 1 | 0, tmp$_0] = t;
  };
  UnbufferedTokenStream.prototype.mark = function () {
    if (this.numMarkers_0 === 0) {
      this.lastTokenBufferStart_0 = this.lastToken_0;
    }
    var mark = (-this.numMarkers_0 | 0) - 1 | 0;
    this.numMarkers_0 = this.numMarkers_0 + 1 | 0;
    return mark;
  };
  UnbufferedTokenStream.prototype.release_za3lpa$ = function (marker) {
    var expectedMark = -this.numMarkers_0 | 0;
    if (marker !== expectedMark) {
      throw IllegalStateException_init('release() called with an invalid marker.');
    }
    this.numMarkers_0 = this.numMarkers_0 - 1 | 0;
    if (this.numMarkers_0 === 0) {
      if (this.p_0 > 0) {
        arraycopy(this.tokens_0, this.p_0, this.tokens_0, 0, this.n_0 - this.p_0 | 0);
        this.n_0 = this.n_0 - this.p_0 | 0;
        this.p_0 = 0;
      }
      this.lastTokenBufferStart_0 = this.lastToken_0;
    }
  };
  UnbufferedTokenStream.prototype.index = function () {
    return this.currentTokenIndex_0;
  };
  UnbufferedTokenStream.prototype.seek_za3lpa$ = function (index) {
    var index_0 = index;
    if (index_0 === this.currentTokenIndex_0) {
      return;
    }
    if (index_0 > this.currentTokenIndex_0) {
      this.sync_0(index_0 - this.currentTokenIndex_0 | 0);
      index_0 = Math_getInstance().min_vux9f0$(index_0, this.bufferStartIndex_0 + this.n_0 - 1 | 0);
    }
    var bufferStartIndex = this.bufferStartIndex_0;
    var i = index_0 - bufferStartIndex | 0;
    if (i < 0) {
      throw IllegalArgumentException_init('cannot seek to negative index ' + toString(index_0));
    } else if (i >= this.n_0) {
      throw UnsupportedOperationException_init('seek to index outside buffer: ' + toString(index_0) + ' not in ' + toString(bufferStartIndex) + '..' + toString(bufferStartIndex + this.n_0 | 0));
    }
    this.p_0 = i;
    this.currentTokenIndex_0 = index_0;
    if (this.p_0 === 0) {
      this.lastToken_0 = this.lastTokenBufferStart_0;
    } else {
      this.lastToken_0 = this.tokens_0[this.p_0 - 1 | 0];
    }
  };
  UnbufferedTokenStream.prototype.size = function () {
    throw UnsupportedOperationException_init('Unbuffered stream cannot know its size');
  };
  UnbufferedTokenStream.prototype.getText_yeqsgl$ = function (interval) {
    var bufferStartIndex = this.bufferStartIndex_0;
    var bufferStopIndex = bufferStartIndex + this.tokens_0.length - 1 | 0;
    var start = interval.a;
    var stop = interval.b;
    if (start < bufferStartIndex || stop > bufferStopIndex) {
      throw UnsupportedOperationException_init('interval ' + toString(interval) + ' not in token buffer window: ' + toString(bufferStartIndex) + '..' + toString(bufferStopIndex));
    }
    var a = start - bufferStartIndex | 0;
    var b = stop - bufferStartIndex | 0;
    var buf = StringBuilder_init();
    for (var i = a; i <= b; i++) {
      var t = this.tokens_0[i];
      buf.append_pdl1vj$(ensureNotNull(t).text);
    }
    return buf.toString();
  };
  UnbufferedTokenStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnbufferedTokenStream',
    interfaces: [TokenStream]
  };
  function Vocabulary() {
  }
  Vocabulary.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Vocabulary',
    interfaces: []
  };
  function VocabularyImpl(literalNames, symbolicNames, displayNames) {
    VocabularyImpl$Companion_getInstance();
    if (displayNames === void 0)
      displayNames = null;
    this.literalNames_0 = null;
    this.symbolicNames_0 = null;
    this.displayNames_0 = null;
    this.maxTokenType_iusvvj$_0 = 0;
    this.literalNames_0 = literalNames != null ? literalNames : VocabularyImpl$Companion_getInstance().EMPTY_NAMES_0;
    this.symbolicNames_0 = symbolicNames != null ? symbolicNames : VocabularyImpl$Companion_getInstance().EMPTY_NAMES_0;
    this.displayNames_0 = displayNames != null ? displayNames : VocabularyImpl$Companion_getInstance().EMPTY_NAMES_0;
    this.maxTokenType_iusvvj$_0 = Math_getInstance().max_vux9f0$(this.displayNames_0.length, Math_getInstance().max_vux9f0$(this.literalNames_0.length, this.symbolicNames_0.length)) - 1 | 0;
  }
  Object.defineProperty(VocabularyImpl.prototype, 'maxTokenType', {
    configurable: true,
    get: function () {
      return this.maxTokenType_iusvvj$_0;
    }
  });
  VocabularyImpl.prototype.getLiteralName_za3lpa$ = function (tokenType) {
    var tmp$;
    if (tokenType >= 0 && tokenType < this.literalNames_0.length) {
      tmp$ = this.literalNames_0[tokenType];
    } else
      tmp$ = null;
    return tmp$;
  };
  VocabularyImpl.prototype.getSymbolicName_za3lpa$ = function (tokenType) {
    var tmp$;
    if (tokenType >= 0 && tokenType < this.symbolicNames_0.length) {
      return this.symbolicNames_0[tokenType];
    }
    if (tokenType === Token$Companion_getInstance().EOF) {
      tmp$ = 'EOF';
    } else
      tmp$ = null;
    return tmp$;
  };
  VocabularyImpl.prototype.getDisplayName_za3lpa$ = function (tokenType) {
    if (tokenType >= 0 && tokenType < this.displayNames_0.length) {
      var displayName = this.displayNames_0[tokenType];
      if (displayName != null) {
        return displayName;
      }
    }
    var literalName = this.getLiteralName_za3lpa$(tokenType);
    if (literalName != null) {
      return literalName;
    }
    var symbolicName = this.getSymbolicName_za3lpa$(tokenType);
    return symbolicName != null ? symbolicName : tokenType.toString();
  };
  function VocabularyImpl$Companion() {
    VocabularyImpl$Companion_instance = this;
    this.EMPTY_NAMES_0 = Kotlin.newArray(0, null);
    this.EMPTY_VOCABULARY = new VocabularyImpl(this.EMPTY_NAMES_0, this.EMPTY_NAMES_0, this.EMPTY_NAMES_0);
  }
  VocabularyImpl$Companion.prototype.fromTokenNames_t85qxa$ = function (tokenNames) {
    var tmp$ = tokenNames == null;
    if (!tmp$) {
      tmp$ = tokenNames.length === 0;
    }
    if (tmp$) {
      return this.EMPTY_VOCABULARY;
    }
    var literalNames = copyOf(tokenNames, tokenNames.length);
    var symbolicNames = copyOf(tokenNames, tokenNames.length);
    for (var i = 0; i !== tokenNames.length; ++i) {
      var tmp$_0;
      tmp$_0 = tokenNames[i];
      if (tmp$_0 == null) {
        continue;
      }
      var tokenName = tmp$_0;
      if (!(tokenName.length === 0)) {
        var firstChar = tokenName.charCodeAt(0);
        if (firstChar === 39) {
          symbolicNames[i] = null;
          continue;
        } else if (isCharUppercase(firstChar)) {
          literalNames[i] = null;
          continue;
        }
      }
      literalNames[i] = null;
      symbolicNames[i] = null;
    }
    return new VocabularyImpl(literalNames, symbolicNames, tokenNames);
  };
  VocabularyImpl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VocabularyImpl$Companion_instance = null;
  function VocabularyImpl$Companion_getInstance() {
    if (VocabularyImpl$Companion_instance === null) {
      new VocabularyImpl$Companion();
    }
    return VocabularyImpl$Companion_instance;
  }
  VocabularyImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VocabularyImpl',
    interfaces: [Vocabulary]
  };
  function WritableToken() {
  }
  WritableToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WritableToken',
    interfaces: [Token]
  };
  function Node() {
  }
  Node.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Node',
    interfaces: []
  };
  function Point(line, column) {
    this.line = line;
    this.column = column;
    if (!(this.line >= 1)) {
      var message = 'Line should be equal or greater than 1, was ' + this.line;
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(this.column >= 0)) {
      var message_0 = 'Column should be equal or greater than 0, was ' + this.column;
      throw IllegalArgumentException_init(message_0.toString());
    }
  }
  Point.prototype.toString = function () {
    return 'Line ' + this.line + ', Column ' + this.column;
  };
  Point.prototype.offset_61zpoe$ = function (code) {
    var lines = split(code, ['\n']);
    if (!(lines.size >= this.line)) {
      var message = 'The point does not exist in the given text. It indicates line ' + this.line + ' but there are only ' + lines.size + ' lines';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(lines.get_za3lpa$(this.line - 1 | 0).length >= this.column)) {
      var message_0 = 'The column does not exist in the given text. Line ' + this.line + ' has ' + lines.get_za3lpa$(this.line - 1 | 0).length + ' columns, the point indicates column ' + this.column;
      throw IllegalArgumentException_init(message_0.toString());
    }
    var newLines = this.line - 1 | 0;
    var $receiver = lines.subList_vux9f0$(0, this.line - 1 | 0);
    var accumulator = 0;
    if (!$receiver.isEmpty()) {
      var iterator = $receiver.listIterator_za3lpa$($receiver.size);
      while (iterator.hasPrevious()) {
        var it = iterator.previous();
        var acc = accumulator;
        accumulator = it.length + acc | 0;
      }
    }
    return accumulator + newLines + this.column | 0;
  };
  Point.prototype.isBefore_m7zbco$ = function (other) {
    return this.line < other.line || (this.line === other.line && this.column < other.column);
  };
  Point.prototype.advance_61zpoe$ = function (text) {
    var matches = Regex_init('\r\n|\r|\n').findAll_905azu$(text);
    var line = this.line + count(matches) | 0;
    var col = none(matches) ? this.column + text.length | 0 : text.length - last(matches).range.endInclusive - 1 | 0;
    return new Point(line, col);
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.line;
  };
  Point.prototype.component2 = function () {
    return this.column;
  };
  Point.prototype.copy_vux9f0$ = function (line, column) {
    return new Point(line === void 0 ? this.line : line, column === void 0 ? this.column : column);
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.column) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.line, other.line) && Kotlin.equals(this.column, other.column)))));
  };
  var START_POINT;
  function Position(start, end) {
    this.start = start;
    this.end = end;
    var tmp$;
    if (!(this.start.isBefore_m7zbco$(this.end) || ((tmp$ = this.start) != null ? tmp$.equals(this.end) : null))) {
      var message = Position_init$lambda(this)();
      throw IllegalArgumentException_init(message.toString());
    }
  }
  Position.prototype.text_61zpoe$ = function (wholeText) {
    var startIndex = this.start.offset_61zpoe$(wholeText);
    var endIndex = this.end.offset_61zpoe$(wholeText);
    return wholeText.substring(startIndex, endIndex);
  };
  Position.prototype.length_61zpoe$ = function (code) {
    return this.end.offset_61zpoe$(code) - this.start.offset_61zpoe$(code) | 0;
  };
  Position.prototype.contains_m7zbco$ = function (point) {
    return ((point != null ? point.equals(this.start) : null) || this.start.isBefore_m7zbco$(point)) && ((point != null ? point.equals(this.end) : null) || point.isBefore_m7zbco$(this.end));
  };
  function Position_init$lambda(this$Position) {
    return function () {
      return 'End should follows start or be the same as start (start: ' + this$Position.start + ', end: ' + this$Position.end + ')';
    };
  }
  Position.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Position',
    interfaces: []
  };
  Position.prototype.component1 = function () {
    return this.start;
  };
  Position.prototype.component2 = function () {
    return this.end;
  };
  Position.prototype.copy_20w7qk$ = function (start, end) {
    return new Position(start === void 0 ? this.start : start, end === void 0 ? this.end : end);
  };
  Position.prototype.toString = function () {
    return 'Position(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + ')';
  };
  Position.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    return result;
  };
  Position.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end)))));
  };
  function pos(startLine, startCol, endLine, endCol) {
    return new Position(new Point(startLine, startCol), new Point(endLine, endCol));
  }
  function ATN(grammarType, maxTokenType) {
    ATN$Companion_getInstance();
    this.grammarType = grammarType;
    this.maxTokenType = maxTokenType;
    this.states = ArrayList_init_0();
    this.decisionToState = ArrayList_init_0();
    this.ruleToStartState = null;
    this.ruleToStopState = null;
    this.modeNameToStartState = LinkedHashMap_init();
    this.ruleToTokenType = null;
    this.lexerActions = null;
    this.modeToStartState = ArrayList_init_0();
  }
  Object.defineProperty(ATN.prototype, 'numberOfDecisions', {
    configurable: true,
    get: function () {
      return this.decisionToState.size;
    }
  });
  ATN.prototype.nextTokens_ujrfb5$ = function (s, ctx) {
    var anal = new LL1Analyzer(this);
    return anal.LOOK_ujrfb5$(s, ctx);
  };
  ATN.prototype.nextTokens_1vr0xx$ = function (s) {
    if (s.nextTokenWithinRule != null)
      return s.nextTokenWithinRule;
    s.nextTokenWithinRule = this.nextTokens_ujrfb5$(s, null);
    ensureNotNull(s.nextTokenWithinRule).isReadonly = true;
    return s.nextTokenWithinRule;
  };
  ATN.prototype.addState_cou8py$ = function (state) {
    if (state != null) {
      ensureNotNull(state).atn = this;
      ensureNotNull(state).stateNumber = this.states.size;
    }
    this.states.add_11rb$(state);
  };
  ATN.prototype.removeState_1vr0xx$ = function (state) {
    this.states.set_wxm5ur$(state.stateNumber, null);
  };
  ATN.prototype.defineDecisionState_7pgr4q$ = function (s) {
    this.decisionToState.add_11rb$(s);
    s.decision = this.decisionToState.size - 1 | 0;
    return s.decision;
  };
  ATN.prototype.getDecisionState_za3lpa$ = function (decision) {
    var tmp$;
    if (!this.decisionToState.isEmpty()) {
      tmp$ = this.decisionToState.get_za3lpa$(decision);
    } else
      tmp$ = null;
    return tmp$;
  };
  ATN.prototype.getExpectedTokens_3o07by$ = function (stateNumber, context) {
    var tmp$;
    if (stateNumber < 0 || stateNumber >= this.states.size) {
      throw IllegalArgumentException_init('Invalid state number.');
    }
    var ctx = context;
    var s = this.states.get_za3lpa$(stateNumber);
    var following = this.nextTokens_1vr0xx$(ensureNotNull(s));
    if (!ensureNotNull(following).contains_za3lpa$(Token$Companion_getInstance().EPSILON)) {
      return following;
    }
    var expected = IntervalSet_init_1(new Int32Array([]));
    expected.addAll_lqo98a$(following);
    expected.remove_za3lpa$(Token$Companion_getInstance().EPSILON);
    while (ctx != null && ensureNotNull(ctx).invokingState >= 0 && ensureNotNull(following).contains_za3lpa$(Token$Companion_getInstance().EPSILON)) {
      var invokingState = this.states.get_za3lpa$(ensureNotNull(ctx).invokingState);
      var rt = Kotlin.isType(tmp$ = ensureNotNull(invokingState).transition_za3lpa$(0), RuleTransition) ? tmp$ : throwCCE();
      following = this.nextTokens_1vr0xx$(rt.followState);
      expected.addAll_lqo98a$(following);
      expected.remove_za3lpa$(Token$Companion_getInstance().EPSILON);
      ctx = ensureNotNull(ctx).readParent();
    }
    if (ensureNotNull(following).contains_za3lpa$(Token$Companion_getInstance().EPSILON)) {
      expected.add_za3lpa$(Token$Companion_getInstance().EOF);
    }
    return expected;
  };
  function ATN$Companion() {
    ATN$Companion_instance = this;
    this.INVALID_ALT_NUMBER = 0;
  }
  ATN$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATN$Companion_instance = null;
  function ATN$Companion_getInstance() {
    if (ATN$Companion_instance === null) {
      new ATN$Companion();
    }
    return ATN$Companion_instance;
  }
  ATN.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATN',
    interfaces: []
  };
  function ATNConfig() {
    ATNConfig$Companion_getInstance();
    this.state = null;
    this.alt = 0;
    this.context = null;
    this.reachesIntoOuterContext = 0;
    this.semanticContext = null;
  }
  Object.defineProperty(ATNConfig.prototype, 'outerContextDepth', {
    configurable: true,
    get: function () {
      return this.reachesIntoOuterContext & ~ATNConfig$Companion_getInstance().SUPPRESS_PRECEDENCE_FILTER_0;
    }
  });
  Object.defineProperty(ATNConfig.prototype, 'isPrecedenceFilterSuppressed', {
    configurable: true,
    get: function () {
      return (this.reachesIntoOuterContext & ATNConfig$Companion_getInstance().SUPPRESS_PRECEDENCE_FILTER_0) !== 0;
    },
    set: function (value) {
      if (value) {
        this.reachesIntoOuterContext = this.reachesIntoOuterContext | 1073741824;
      } else {
        this.reachesIntoOuterContext = this.reachesIntoOuterContext & ~ATNConfig$Companion_getInstance().SUPPRESS_PRECEDENCE_FILTER_0;
      }
    }
  });
  ATNConfig.prototype.equals = function (o) {
    var tmp$, tmp$_0;
    if (!Kotlin.isType(o, ATNConfig)) {
      tmp$_0 = false;
    } else {
      tmp$_0 = this.equals_8vatrl$((tmp$ = o) == null || Kotlin.isType(tmp$, ATNConfig) ? tmp$ : throwCCE());
    }
    return tmp$_0;
  };
  ATNConfig.prototype.equals_8vatrl$ = function (other) {
    if (this === other) {
      return true;
    } else if (other == null) {
      return false;
    }
    return this.state.stateNumber === other.state.stateNumber && this.alt === other.alt && (this.context === other.context || (this.context != null && equals(this.context, other.context))) && equals(this.semanticContext, other.semanticContext) && this.isPrecedenceFilterSuppressed === other.isPrecedenceFilterSuppressed;
  };
  ATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_za3lpa$(7);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.state.stateNumber);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.alt);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, this.context);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, this.semanticContext);
    hashCode = MurmurHash_getInstance().finish_vux9f0$(hashCode, 4);
    return hashCode;
  };
  ATNConfig.prototype.toString = function () {
    return this.toString_zg1gca$(null, true);
  };
  ATNConfig.prototype.toString_zg1gca$ = function (recog, showAlt) {
    var buf = StringBuilder_init();
    buf.append_s8itvh$(40);
    buf.append_s8jyv4$(this.state);
    if (showAlt) {
      buf.append_pdl1vj$(',');
      buf.append_s8jyv4$(this.alt);
    }
    if (this.context != null) {
      buf.append_pdl1vj$(',[');
      buf.append_pdl1vj$(ensureNotNull(this.context).toString());
      buf.append_pdl1vj$(']');
    }
    if (this.semanticContext != null && this.semanticContext !== SemanticContext$Companion_getInstance().NONE) {
      buf.append_pdl1vj$(',');
      buf.append_s8jyv4$(this.semanticContext);
    }
    if (this.outerContextDepth > 0) {
      buf.append_pdl1vj$(',up=').append_s8jyv4$(this.outerContextDepth);
    }
    buf.append_s8itvh$(41);
    return buf.toString();
  };
  function ATNConfig$Companion() {
    ATNConfig$Companion_instance = this;
    this.SUPPRESS_PRECEDENCE_FILTER_0 = 1073741824;
  }
  ATNConfig$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNConfig$Companion_instance = null;
  function ATNConfig$Companion_getInstance() {
    if (ATNConfig$Companion_instance === null) {
      new ATNConfig$Companion();
    }
    return ATNConfig$Companion_instance;
  }
  ATNConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNConfig',
    interfaces: []
  };
  function ATNConfig_init(old, $this) {
    $this = $this || Object.create(ATNConfig.prototype);
    ATNConfig.call($this);
    $this.state = old.state;
    $this.alt = old.alt;
    $this.context = old.context;
    $this.semanticContext = old.semanticContext;
    $this.reachesIntoOuterContext = old.reachesIntoOuterContext;
    return $this;
  }
  function ATNConfig_init_0(state, alt, context, semanticContext, $this) {
    if (semanticContext === void 0)
      semanticContext = SemanticContext$Companion_getInstance().NONE;
    $this = $this || Object.create(ATNConfig.prototype);
    ATNConfig.call($this);
    $this.state = state;
    $this.alt = alt;
    $this.context = context;
    $this.semanticContext = semanticContext;
    return $this;
  }
  function ATNConfig_init_1(c, state, semanticContext, $this) {
    $this = $this || Object.create(ATNConfig.prototype);
    ATNConfig_init_3(c, state, c.context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_2(c, semanticContext, $this) {
    $this = $this || Object.create(ATNConfig.prototype);
    ATNConfig_init_3(c, c.state, c.context, semanticContext, $this);
    return $this;
  }
  function ATNConfig_init_3(c, state, context, semanticContext, $this) {
    if (context === void 0)
      context = c.context;
    if (semanticContext === void 0)
      semanticContext = c.semanticContext;
    $this = $this || Object.create(ATNConfig.prototype);
    ATNConfig.call($this);
    $this.state = state;
    $this.alt = c.alt;
    $this.context = context;
    $this.semanticContext = semanticContext;
    $this.reachesIntoOuterContext = c.reachesIntoOuterContext;
    return $this;
  }
  function ATNConfigSet(fullCtx) {
    if (fullCtx === void 0)
      fullCtx = true;
    this.fullCtx = fullCtx;
    this.configLookup = null;
    this.configs = ArrayList_init(7);
    this.uniqueAlt = 0;
    this.conflictingAlts = null;
    this.hasSemanticContext = false;
    this.dipsIntoOuterContext = false;
    this.cachedHashCode_45ajib$_0 = -1;
    this.isReadonly_do02k4$_0 = false;
    this.configLookup = new ATNConfigSet$ConfigHashSet();
  }
  Object.defineProperty(ATNConfigSet.prototype, 'states', {
    configurable: true,
    get: function () {
      var tmp$;
      var states = HashSet_init_0();
      tmp$ = this.configs.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        states.add_11rb$(c.state);
      }
      return states;
    }
  });
  Object.defineProperty(ATNConfigSet.prototype, 'alts', {
    configurable: true,
    get: function () {
      var tmp$;
      var alts = BitSet_init();
      tmp$ = this.configs.iterator();
      while (tmp$.hasNext()) {
        var config = tmp$.next();
        alts.set_za3lpa$(config.alt);
      }
      return alts;
    }
  });
  Object.defineProperty(ATNConfigSet.prototype, 'predicates', {
    configurable: true,
    get: function () {
      var tmp$;
      var preds = ArrayList_init_0();
      tmp$ = this.configs.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        if (c.semanticContext !== SemanticContext$Companion_getInstance().NONE) {
          preds.add_11rb$(ensureNotNull(c.semanticContext));
        }
      }
      return preds;
    }
  });
  Object.defineProperty(ATNConfigSet.prototype, 'isReadonly', {
    configurable: true,
    get: function () {
      return this.isReadonly_do02k4$_0;
    },
    set: function (value) {
      this.isReadonly_do02k4$_0 = value;
      this.configLookup = null;
    }
  });
  function ATNConfigSet$ConfigHashSet() {
    ATNConfigSet$AbstractConfigHashSet.call(this, ATNConfigSet$ConfigEqualityComparator$Companion_getInstance().INSTANCE);
  }
  ATNConfigSet$ConfigHashSet.prototype.containsAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATNConfigSet$ConfigHashSet.prototype.retainAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATNConfigSet$ConfigHashSet.prototype.remove_11rb$ = function (element) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ATNConfigSet$ConfigHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConfigHashSet',
    interfaces: [ATNConfigSet$AbstractConfigHashSet]
  };
  function ATNConfigSet$ConfigEqualityComparator() {
    ATNConfigSet$ConfigEqualityComparator$Companion_getInstance();
    AbstractEqualityComparator.call(this);
  }
  ATNConfigSet$ConfigEqualityComparator.prototype.hashCode_11rb$ = function (o) {
    var hashCode_0 = 7;
    hashCode_0 = (31 * hashCode_0 | 0) + o.state.stateNumber | 0;
    hashCode_0 = (31 * hashCode_0 | 0) + o.alt | 0;
    hashCode_0 = (31 * hashCode_0 | 0) + hashCode(ensureNotNull(o.semanticContext)) | 0;
    return hashCode_0;
  };
  ATNConfigSet$ConfigEqualityComparator.prototype.equals_xwzc9q$ = function (a, b) {
    if (a === b)
      return true;
    return a == null || b == null ? false : ensureNotNull(a).state.stateNumber === ensureNotNull(b).state.stateNumber && ensureNotNull(a).alt === ensureNotNull(b).alt && equals(ensureNotNull(a).semanticContext, ensureNotNull(b).semanticContext);
  };
  function ATNConfigSet$ConfigEqualityComparator$Companion() {
    ATNConfigSet$ConfigEqualityComparator$Companion_instance = this;
    this.INSTANCE = new ATNConfigSet$ConfigEqualityComparator();
  }
  ATNConfigSet$ConfigEqualityComparator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNConfigSet$ConfigEqualityComparator$Companion_instance = null;
  function ATNConfigSet$ConfigEqualityComparator$Companion_getInstance() {
    if (ATNConfigSet$ConfigEqualityComparator$Companion_instance === null) {
      new ATNConfigSet$ConfigEqualityComparator$Companion();
    }
    return ATNConfigSet$ConfigEqualityComparator$Companion_instance;
  }
  ATNConfigSet$ConfigEqualityComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConfigEqualityComparator',
    interfaces: [AbstractEqualityComparator]
  };
  ATNConfigSet.prototype.add_kc35f6$ = function (config) {
    return this.add_gfqbqc$(config, null);
  };
  ATNConfigSet.prototype.add_gfqbqc$ = function (config, mergeCache) {
    if (this.isReadonly)
      throw IllegalStateException_init('This set is readonly');
    if (config.semanticContext !== SemanticContext$Companion_getInstance().NONE) {
      this.hasSemanticContext = true;
    }
    if (config.outerContextDepth > 0) {
      this.dipsIntoOuterContext = true;
    }
    var existing = ensureNotNull(this.configLookup).getOrAdd_11rb$(config);
    if (existing === config) {
      this.cachedHashCode_45ajib$_0 = -1;
      this.configs.add_11rb$(config);
      return true;
    }
    var rootIsWildcard = !this.fullCtx;
    var merged = PredictionContext$Companion_getInstance().merge_atc7xh$(existing.context, config.context, rootIsWildcard, mergeCache);
    existing.reachesIntoOuterContext = Math_getInstance().max_vux9f0$(existing.reachesIntoOuterContext, config.reachesIntoOuterContext);
    if (config.isPrecedenceFilterSuppressed) {
      existing.isPrecedenceFilterSuppressed = true;
    }
    existing.context = merged;
    return true;
  };
  ATNConfigSet.prototype.elements = function () {
    return this.configs;
  };
  ATNConfigSet.prototype.get_za3lpa$ = function (i) {
    return this.configs.get_za3lpa$(i);
  };
  ATNConfigSet.prototype.optimizeConfigs_jm5xc8$ = function (interpreter) {
    var tmp$;
    if (this.isReadonly)
      throw IllegalStateException_init('This set is readonly');
    if (ensureNotNull(this.configLookup).isEmpty())
      return;
    tmp$ = this.configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      config.context = interpreter.getCachedContext_3gc72n$(ensureNotNull(config.context));
    }
  };
  ATNConfigSet.prototype.addAll_ozhz31$ = function (coll) {
    var tmp$;
    tmp$ = coll.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      this.add_kc35f6$(c);
    }
    return false;
  };
  ATNConfigSet.prototype.equals = function (o) {
    var tmp$;
    if (o === this) {
      return true;
    } else if (!Kotlin.isType(o, ATNConfigSet)) {
      return false;
    }
    var other = (tmp$ = o) == null || Kotlin.isType(tmp$, ATNConfigSet) ? tmp$ : throwCCE();
    return this.configs != null && equals(this.configs, ensureNotNull(other).configs) && this.fullCtx === other.fullCtx && this.uniqueAlt === other.uniqueAlt && this.conflictingAlts === other.conflictingAlts && this.hasSemanticContext === other.hasSemanticContext && this.dipsIntoOuterContext === other.dipsIntoOuterContext;
  };
  ATNConfigSet.prototype.hashCode = function () {
    if (this.isReadonly) {
      if (this.cachedHashCode_45ajib$_0 === -1) {
        this.cachedHashCode_45ajib$_0 = hashCode(this.configs);
      }
      return this.cachedHashCode_45ajib$_0;
    }
    return hashCode(this.configs);
  };
  Object.defineProperty(ATNConfigSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.configs.size;
    }
  });
  ATNConfigSet.prototype.isEmpty = function () {
    return this.configs.isEmpty();
  };
  ATNConfigSet.prototype.contains_11rb$ = function (o) {
    if (this.configLookup == null) {
      throw UnsupportedOperationException_init('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup).contains_11rb$(o);
  };
  ATNConfigSet.prototype.containsFast_kc35f6$ = function (obj) {
    if (this.configLookup == null) {
      throw UnsupportedOperationException_init('This method is not implemented for readonly sets.');
    }
    return ensureNotNull(this.configLookup).containsFast_11rb$(obj);
  };
  ATNConfigSet.prototype.iterator = function () {
    return this.configs.iterator();
  };
  ATNConfigSet.prototype.clear = function () {
    if (this.isReadonly)
      throw IllegalStateException_init('This set is readonly');
    this.configs.clear();
    this.cachedHashCode_45ajib$_0 = -1;
    ensureNotNull(this.configLookup).clear();
  };
  ATNConfigSet.prototype.toString = function () {
    var buf = StringBuilder_init();
    buf.append_pdl1vj$(this.elements().toString());
    if (this.hasSemanticContext)
      buf.append_pdl1vj$(',hasSemanticContext=').append_6taknv$(this.hasSemanticContext);
    if (this.uniqueAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER)
      buf.append_pdl1vj$(',uniqueAlt=').append_s8jyv4$(this.uniqueAlt);
    if (this.conflictingAlts != null)
      buf.append_pdl1vj$(',conflictingAlts=').append_s8jyv4$(this.conflictingAlts);
    if (this.dipsIntoOuterContext)
      buf.append_pdl1vj$(',dipsIntoOuterContext');
    return buf.toString();
  };
  ATNConfigSet.prototype.toArray = function () {
    return ensureNotNull(this.configLookup).toArray();
  };
  ATNConfigSet.prototype.toArray_ro6dgy$ = function (a) {
    return ensureNotNull(this.configLookup).toArray_ro6dgy$(a);
  };
  ATNConfigSet.prototype.containsAll_brywnq$ = function (elements) {
    throw UnsupportedOperationException_init_0();
  };
  function ATNConfigSet$AbstractConfigHashSet(comparator, initialCapacity, initialBucketCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 16;
    if (initialBucketCapacity === void 0)
      initialBucketCapacity = 2;
    Array2DHashSet.call(this, comparator, initialCapacity, initialBucketCapacity);
  }
  ATNConfigSet$AbstractConfigHashSet.prototype.asElementType_za3rmp$ = function (o) {
    var tmp$, tmp$_0;
    if (!Kotlin.isType(o, ATNConfig)) {
      tmp$_0 = null;
    } else
      tmp$_0 = Kotlin.isType(tmp$ = o, ATNConfig) ? tmp$ : throwCCE();
    return tmp$_0;
  };
  ATNConfigSet$AbstractConfigHashSet.prototype.createBuckets_za3lpa$ = function (capacity) {
    return Kotlin.newArray(capacity, null);
  };
  ATNConfigSet$AbstractConfigHashSet.prototype.createBucket_za3lpa$ = function (capacity) {
    return Kotlin.newArray(capacity, null);
  };
  ATNConfigSet$AbstractConfigHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractConfigHashSet',
    interfaces: [Array2DHashSet]
  };
  ATNConfigSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNConfigSet',
    interfaces: [Set]
  };
  function ATNConfigSet_init(old, $this) {
    $this = $this || Object.create(ATNConfigSet.prototype);
    ATNConfigSet.call($this, old.fullCtx);
    $this.addAll_ozhz31$(old);
    $this.uniqueAlt = old.uniqueAlt;
    $this.conflictingAlts = old.conflictingAlts;
    $this.hasSemanticContext = old.hasSemanticContext;
    $this.dipsIntoOuterContext = old.dipsIntoOuterContext;
    return $this;
  }
  function ATNDeserializationOptions() {
    ATNDeserializationOptions$Companion_getInstance();
    this.isReadOnly_cjfoed$_0 = false;
    this.verifyATN_0 = false;
    this.generateRuleBypassTransitions_0 = false;
  }
  Object.defineProperty(ATNDeserializationOptions.prototype, 'isReadOnly', {
    configurable: true,
    get: function () {
      return this.isReadOnly_cjfoed$_0;
    },
    set: function (isReadOnly) {
      this.isReadOnly_cjfoed$_0 = isReadOnly;
    }
  });
  Object.defineProperty(ATNDeserializationOptions.prototype, 'isVerifyATN', {
    configurable: true,
    get: function () {
      return this.verifyATN_0;
    },
    set: function (verifyATN) {
      this.throwIfReadOnly_0();
      this.verifyATN_0 = verifyATN;
    }
  });
  Object.defineProperty(ATNDeserializationOptions.prototype, 'isGenerateRuleBypassTransitions', {
    configurable: true,
    get: function () {
      return this.generateRuleBypassTransitions_0;
    },
    set: function (generateRuleBypassTransitions) {
      this.throwIfReadOnly_0();
      this.generateRuleBypassTransitions_0 = generateRuleBypassTransitions;
    }
  });
  ATNDeserializationOptions.prototype.makeReadOnly = function () {
    this.isReadOnly = true;
  };
  ATNDeserializationOptions.prototype.throwIfReadOnly_0 = function () {
    if (this.isReadOnly) {
      throw IllegalStateException_init('The object is read only.');
    }
  };
  function ATNDeserializationOptions$Companion() {
    ATNDeserializationOptions$Companion_instance = this;
    this.defaultOptions = null;
    this.defaultOptions = ATNDeserializationOptions_init();
    this.defaultOptions.makeReadOnly();
  }
  ATNDeserializationOptions$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNDeserializationOptions$Companion_instance = null;
  function ATNDeserializationOptions$Companion_getInstance() {
    if (ATNDeserializationOptions$Companion_instance === null) {
      new ATNDeserializationOptions$Companion();
    }
    return ATNDeserializationOptions$Companion_instance;
  }
  ATNDeserializationOptions.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNDeserializationOptions',
    interfaces: []
  };
  function ATNDeserializationOptions_init($this) {
    $this = $this || Object.create(ATNDeserializationOptions.prototype);
    ATNDeserializationOptions.call($this);
    $this.verifyATN_0 = true;
    $this.generateRuleBypassTransitions_0 = false;
    return $this;
  }
  function ATNDeserializationOptions_init_0(options, $this) {
    $this = $this || Object.create(ATNDeserializationOptions.prototype);
    ATNDeserializationOptions.call($this);
    $this.verifyATN_0 = options.verifyATN_0;
    $this.generateRuleBypassTransitions_0 = options.generateRuleBypassTransitions_0;
    return $this;
  }
  function ATNDeserializer(deserializationOptions) {
    ATNDeserializer$Companion_getInstance();
    if (deserializationOptions === void 0)
      deserializationOptions = ATNDeserializationOptions$Companion_getInstance().defaultOptions;
    this.deserializationOptions_0 = null;
    var deserializationOptions_0 = deserializationOptions;
    if (deserializationOptions_0 == null) {
      deserializationOptions_0 = ATNDeserializationOptions$Companion_getInstance().defaultOptions;
    }
    this.deserializationOptions_0 = deserializationOptions_0;
  }
  function ATNDeserializer$UnicodeDeserializer() {
  }
  ATNDeserializer$UnicodeDeserializer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UnicodeDeserializer',
    interfaces: []
  };
  function ATNDeserializer$UnicodeDeserializingMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ATNDeserializer$UnicodeDeserializingMode_initFields() {
    ATNDeserializer$UnicodeDeserializingMode_initFields = function () {
    };
    ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_instance = new ATNDeserializer$UnicodeDeserializingMode('UNICODE_BMP', 0);
    ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_instance = new ATNDeserializer$UnicodeDeserializingMode('UNICODE_SMP', 1);
  }
  var ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_instance;
  function ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance() {
    ATNDeserializer$UnicodeDeserializingMode_initFields();
    return ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_instance;
  }
  var ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_instance;
  function ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_getInstance() {
    ATNDeserializer$UnicodeDeserializingMode_initFields();
    return ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_instance;
  }
  ATNDeserializer$UnicodeDeserializingMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnicodeDeserializingMode',
    interfaces: [Enum]
  };
  function ATNDeserializer$UnicodeDeserializingMode$values() {
    return [ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance(), ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_getInstance()];
  }
  ATNDeserializer$UnicodeDeserializingMode.values = ATNDeserializer$UnicodeDeserializingMode$values;
  function ATNDeserializer$UnicodeDeserializingMode$valueOf(name) {
    switch (name) {
      case 'UNICODE_BMP':
        return ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance();
      case 'UNICODE_SMP':
        return ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_getInstance();
      default:
        throwISE('No enum constant org.antlr.v4.kotlinruntime.atn.ATNDeserializer.UnicodeDeserializingMode.' + name);
    }
  }
  ATNDeserializer$UnicodeDeserializingMode.valueOf_61zpoe$ = ATNDeserializer$UnicodeDeserializingMode$valueOf;
  ATNDeserializer.prototype.deserialize_4hbowm$ = function (data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42, tmp$_43, tmp$_44, tmp$_45, tmp$_46, tmp$_47, tmp$_48, tmp$_49, tmp$_50, tmp$_51, tmp$_52, tmp$_53, tmp$_54, tmp$_55, tmp$_56, tmp$_57, tmp$_58, tmp$_59, tmp$_60, tmp$_61, tmp$_62, tmp$_63, tmp$_64, tmp$_65, tmp$_66, tmp$_67, tmp$_68, tmp$_69, tmp$_70, tmp$_71, tmp$_72, tmp$_73, tmp$_74, tmp$_75, tmp$_76, tmp$_77, tmp$_78, tmp$_79;
    var data_0 = data;
    data_0 = copyOf_0(data_0);
    tmp$ = data_0.length;
    for (var i = 1; i < tmp$; i++) {
      data_0[i] = toChar((data_0[i] | 0) - 2 | 0);
    }
    var p = 0;
    tmp$_1 = data_0[tmp$_0 = p, p = tmp$_0 + 1 | 0, tmp$_0];
    var version = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_1);
    if (version !== ATNDeserializer$Companion_getInstance().SERIALIZED_VERSION) {
      var reason = 'Could not deserialize ATN with version ' + version + ' (expected ' + ATNDeserializer$Companion_getInstance().SERIALIZED_VERSION + ').';
      throw UnsupportedOperationException_init(reason);
    }
    var uuid = ATNDeserializer$Companion_getInstance().toUUID_1b3ri0$(data_0, p);
    p = p + 8 | 0;
    if (!ATNDeserializer$Companion_getInstance().SUPPORTED_UUIDS_0.contains_11rb$(uuid)) {
      var reason_0 = 'Could not deserialize ATN with UUID ' + uuid + ' (expected ' + ATNDeserializer$Companion_getInstance().SERIALIZED_UUID + ' or a legacy UUID).';
      throw UnsupportedOperationException_init(reason_0);
    }
    var supportsPrecedencePredicates = ATNDeserializer$Companion_getInstance().isFeatureSupported_0(ATNDeserializer$Companion_getInstance().ADDED_PRECEDENCE_TRANSITIONS_0, uuid);
    var supportsLexerActions = ATNDeserializer$Companion_getInstance().isFeatureSupported_0(ATNDeserializer$Companion_getInstance().ADDED_LEXER_ACTIONS_0, uuid);
    tmp$_4 = ATNType$values();
    tmp$_3 = data_0[tmp$_2 = p, p = tmp$_2 + 1 | 0, tmp$_2];
    var grammarType = tmp$_4[ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_3)];
    tmp$_6 = data_0[tmp$_5 = p, p = tmp$_5 + 1 | 0, tmp$_5];
    var maxTokenType = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_6);
    var atn = new ATN(grammarType, maxTokenType);
    var loopBackStateNumbers = ArrayList_init_0();
    var endStateNumbers = ArrayList_init_0();
    tmp$_8 = data_0[tmp$_7 = p, p = tmp$_7 + 1 | 0, tmp$_7];
    var nstates = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_8);
    for (var i_0 = 0; i_0 < nstates; i_0++) {
      tmp$_10 = data_0[tmp$_9 = p, p = tmp$_9 + 1 | 0, tmp$_9];
      var stype = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_10);
      if (stype === ATNState$Companion_getInstance().INVALID_TYPE) {
        atn.addState_cou8py$(null);
        continue;
      }
      tmp$_12 = data_0[tmp$_11 = p, p = tmp$_11 + 1 | 0, tmp$_11];
      var ruleIndex = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_12);
      if (ruleIndex === (maxValue(kotlin_js_internal_CharCompanionObject) | 0)) {
        ruleIndex = -1;
      }
      var s = this.stateFactory_vux9f0$(stype, ruleIndex);
      if (stype === ATNState$Companion_getInstance().LOOP_END) {
        tmp$_14 = data_0[tmp$_13 = p, p = tmp$_13 + 1 | 0, tmp$_13];
        var loopBackStateNumber = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_14);
        loopBackStateNumbers.add_11rb$(new Pair(Kotlin.isType(tmp$_15 = s, LoopEndState) ? tmp$_15 : throwCCE(), loopBackStateNumber));
      } else if (Kotlin.isType(s, BlockStartState)) {
        tmp$_17 = data_0[tmp$_16 = p, p = tmp$_16 + 1 | 0, tmp$_16];
        var endStateNumber = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_17);
        endStateNumbers.add_11rb$(new Pair(s, endStateNumber));
      }
      atn.addState_cou8py$(s);
    }
    tmp$_18 = loopBackStateNumbers.iterator();
    while (tmp$_18.hasNext()) {
      var pair = tmp$_18.next();
      pair.first.loopBackState = atn.states.get_za3lpa$(pair.second);
    }
    tmp$_19 = endStateNumbers.iterator();
    while (tmp$_19.hasNext()) {
      var pair_0 = tmp$_19.next();
      pair_0.first.endState = Kotlin.isType(tmp$_20 = atn.states.get_za3lpa$(pair_0.second), BlockEndState) ? tmp$_20 : throwCCE();
    }
    tmp$_22 = data_0[tmp$_21 = p, p = tmp$_21 + 1 | 0, tmp$_21];
    var numNonGreedyStates = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_22);
    for (var i_1 = 0; i_1 < numNonGreedyStates; i_1++) {
      tmp$_24 = data_0[tmp$_23 = p, p = tmp$_23 + 1 | 0, tmp$_23];
      var stateNumber = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_24);
      (Kotlin.isType(tmp$_25 = atn.states.get_za3lpa$(stateNumber), DecisionState) ? tmp$_25 : throwCCE()).nonGreedy = true;
    }
    if (supportsPrecedencePredicates) {
      tmp$_27 = data_0[tmp$_26 = p, p = tmp$_26 + 1 | 0, tmp$_26];
      var numPrecedenceStates = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_27);
      for (var i_2 = 0; i_2 < numPrecedenceStates; i_2++) {
        tmp$_29 = data_0[tmp$_28 = p, p = tmp$_28 + 1 | 0, tmp$_28];
        var stateNumber_0 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_29);
        (Kotlin.isType(tmp$_30 = atn.states.get_za3lpa$(stateNumber_0), RuleStartState) ? tmp$_30 : throwCCE()).isLeftRecursiveRule = true;
      }
    }
    tmp$_32 = data_0[tmp$_31 = p, p = tmp$_31 + 1 | 0, tmp$_31];
    var nrules = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_32);
    if (atn.grammarType === ATNType$LEXER_getInstance()) {
      atn.ruleToTokenType = new Int32Array(nrules);
    }
    atn.ruleToStartState = Kotlin.newArray(nrules, null);
    for (var i_3 = 0; i_3 < nrules; i_3++) {
      tmp$_34 = data_0[tmp$_33 = p, p = tmp$_33 + 1 | 0, tmp$_33];
      var s_0 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_34);
      var startState = Kotlin.isType(tmp$_35 = atn.states.get_za3lpa$(s_0), RuleStartState) ? tmp$_35 : throwCCE();
      ensureNotNull(atn.ruleToStartState)[i_3] = startState;
      if (atn.grammarType === ATNType$LEXER_getInstance()) {
        tmp$_37 = data_0[tmp$_36 = p, p = tmp$_36 + 1 | 0, tmp$_36];
        var tokenType = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_37);
        if (tokenType === 65535) {
          tokenType = Token$Companion_getInstance().EOF;
        }
        ensureNotNull(atn.ruleToTokenType)[i_3] = tokenType;
        if (!ATNDeserializer$Companion_getInstance().isFeatureSupported_0(ATNDeserializer$Companion_getInstance().ADDED_LEXER_ACTIONS_0, uuid)) {
          tmp$_39 = data_0[tmp$_38 = p, p = tmp$_38 + 1 | 0, tmp$_38];
          var actionIndexIgnored = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_39);
        }
      }
    }
    atn.ruleToStopState = Kotlin.newArray(nrules, null);
    tmp$_40 = atn.states.iterator();
    while (tmp$_40.hasNext()) {
      var state = tmp$_40.next();
      if (!Kotlin.isType(state, RuleStopState)) {
        continue;
      }
      var stopState = state;
      ensureNotNull(atn.ruleToStopState)[state.ruleIndex] = stopState;
      ensureNotNull(ensureNotNull(atn.ruleToStartState)[state.ruleIndex]).stopState = stopState;
    }
    tmp$_42 = data_0[tmp$_41 = p, p = tmp$_41 + 1 | 0, tmp$_41];
    var nmodes = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_42);
    for (var i_4 = 0; i_4 < nmodes; i_4++) {
      tmp$_44 = data_0[tmp$_43 = p, p = tmp$_43 + 1 | 0, tmp$_43];
      var s_1 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_44);
      atn.modeToStartState.add_11rb$(Kotlin.isType(tmp$_45 = atn.states.get_za3lpa$(s_1), TokensStartState) ? tmp$_45 : throwCCE());
    }
    var sets = ArrayList_init_0();
    p = this.deserializeSets_0(data_0, p, sets, ATNDeserializer$Companion_getInstance().getUnicodeDeserializer_uqhmvg$(ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance()));
    if (ATNDeserializer$Companion_getInstance().isFeatureSupported_0(ATNDeserializer$Companion_getInstance().ADDED_UNICODE_SMP_0, uuid)) {
      p = this.deserializeSets_0(data_0, p, sets, ATNDeserializer$Companion_getInstance().getUnicodeDeserializer_uqhmvg$(ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_getInstance()));
    }
    tmp$_47 = data_0[tmp$_46 = p, p = tmp$_46 + 1 | 0, tmp$_46];
    var nedges = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_47);
    for (var i_5 = 0; i_5 < nedges; i_5++) {
      var src = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p]);
      var trg = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p + 1 | 0]);
      var ttype = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p + 2 | 0]);
      var arg1 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p + 3 | 0]);
      var arg2 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p + 4 | 0]);
      var arg3 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data_0[p + 5 | 0]);
      var trans = this.edgeFactory_lhjf6u$(atn, ttype, src, trg, arg1, arg2, arg3, sets);
      var srcState = atn.states.get_za3lpa$(src);
      ensureNotNull(srcState).addTransition_hv8bj8$(trans);
      p = p + 6 | 0;
    }
    tmp$_48 = atn.states.iterator();
    while (tmp$_48.hasNext()) {
      var state_0 = tmp$_48.next();
      tmp$_49 = ensureNotNull(state_0).numberOfTransitions;
      for (var i_6 = 0; i_6 < tmp$_49; i_6++) {
        tmp$_51 = Kotlin.isType(tmp$_50 = ensureNotNull(state_0).transition_za3lpa$(i_6), RuleTransition) ? tmp$_50 : null;
        if (tmp$_51 == null) {
          continue;
        }
        var t = tmp$_51;
        var ruleTransition = Kotlin.isType(tmp$_52 = t, RuleTransition) ? tmp$_52 : throwCCE();
        var outermostPrecedenceReturn = -1;
        if (ensureNotNull(ensureNotNull(atn.ruleToStartState)[ensureNotNull(ruleTransition.target).ruleIndex]).isLeftRecursiveRule) {
          if (ruleTransition.precedence === 0) {
            outermostPrecedenceReturn = ensureNotNull(ruleTransition.target).ruleIndex;
          }
        }
        var returnTransition = new EpsilonTransition(ruleTransition.followState, outermostPrecedenceReturn);
        ensureNotNull(ensureNotNull(atn.ruleToStopState)[ensureNotNull(ensureNotNull(ruleTransition).target).ruleIndex]).addTransition_hv8bj8$(returnTransition);
      }
    }
    tmp$_53 = atn.states.iterator();
    while (tmp$_53.hasNext()) {
      var state_1 = tmp$_53.next();
      if (Kotlin.isType(state_1, BlockStartState)) {
        if ((Kotlin.isType(tmp$_54 = state_1, BlockStartState) ? tmp$_54 : throwCCE()).endState == null) {
          throw IllegalStateException_init_0();
        }
        if (ensureNotNull((Kotlin.isType(tmp$_55 = state_1, BlockStartState) ? tmp$_55 : throwCCE()).endState).startState != null) {
          throw IllegalStateException_init_0();
        }
        ensureNotNull((Kotlin.isType(tmp$_57 = state_1, BlockStartState) ? tmp$_57 : throwCCE()).endState).startState = Kotlin.isType(tmp$_56 = state_1, BlockStartState) ? tmp$_56 : throwCCE();
      }
      if (Kotlin.isType(state_1, PlusLoopbackState)) {
        var loopbackState = Kotlin.isType(tmp$_58 = state_1, PlusLoopbackState) ? tmp$_58 : throwCCE();
        tmp$_59 = loopbackState.numberOfTransitions;
        for (var i_7 = 0; i_7 < tmp$_59; i_7++) {
          var target = loopbackState.transition_za3lpa$(i_7).target;
          if (Kotlin.isType(target, PlusBlockStartState)) {
            (Kotlin.isType(tmp$_60 = target, PlusBlockStartState) ? tmp$_60 : throwCCE()).loopBackState = loopbackState;
          }
        }
      } else if (Kotlin.isType(state_1, StarLoopbackState)) {
        var loopbackState_0 = Kotlin.isType(tmp$_61 = state_1, StarLoopbackState) ? tmp$_61 : throwCCE();
        tmp$_62 = loopbackState_0.numberOfTransitions;
        for (var i_8 = 0; i_8 < tmp$_62; i_8++) {
          var target_0 = loopbackState_0.transition_za3lpa$(i_8).target;
          if (Kotlin.isType(target_0, StarLoopEntryState)) {
            (Kotlin.isType(tmp$_63 = target_0, StarLoopEntryState) ? tmp$_63 : throwCCE()).loopBackState = loopbackState_0;
          }
        }
      }
    }
    tmp$_65 = data_0[tmp$_64 = p, p = tmp$_64 + 1 | 0, tmp$_64];
    var ndecisions = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_65);
    for (var i_9 = 1; i_9 <= ndecisions; i_9++) {
      tmp$_67 = data_0[tmp$_66 = p, p = tmp$_66 + 1 | 0, tmp$_66];
      var s_2 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_67);
      var decState = Kotlin.isType(tmp$_68 = atn.states.get_za3lpa$(s_2), DecisionState) ? tmp$_68 : throwCCE();
      atn.decisionToState.add_11rb$(decState);
      decState.decision = i_9 - 1 | 0;
    }
    if (atn.grammarType === ATNType$LEXER_getInstance()) {
      if (supportsLexerActions) {
        tmp$_70 = data_0[tmp$_69 = p, p = tmp$_69 + 1 | 0, tmp$_69];
        atn.lexerActions = Kotlin.newArray(ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_70), null);
        tmp$_71 = ensureNotNull(atn.lexerActions);
        for (var i_10 = 0; i_10 !== tmp$_71.length; ++i_10) {
          var tmp$_80, tmp$_81, tmp$_82, tmp$_83, tmp$_84, tmp$_85, tmp$_86;
          tmp$_82 = LexerActionType$values();
          tmp$_81 = data_0[tmp$_80 = p, p = tmp$_80 + 1 | 0, tmp$_80];
          var actionType = tmp$_82[ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_81)];
          tmp$_84 = data_0[tmp$_83 = p, p = tmp$_83 + 1 | 0, tmp$_83];
          var data1 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_84);
          if (data1 === 65535) {
            data1 = -1;
          }
          tmp$_86 = data_0[tmp$_85 = p, p = tmp$_85 + 1 | 0, tmp$_85];
          var data2 = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_86);
          if (data2 === 65535) {
            data2 = -1;
          }
          var lexerAction = this.lexerActionFactory_0(actionType, data1, data2);
          ensureNotNull(atn.lexerActions)[i_10] = lexerAction;
        }
      } else {
        var legacyLexerActions = ArrayList_init_0();
        tmp$_72 = atn.states.iterator();
        while (tmp$_72.hasNext()) {
          var state_2 = tmp$_72.next();
          tmp$_73 = ensureNotNull(state_2).numberOfTransitions;
          for (var i_11 = 0; i_11 < tmp$_73; i_11++) {
            tmp$_75 = Kotlin.isType(tmp$_74 = ensureNotNull(state_2).transition_za3lpa$(i_11), ActionTransition) ? tmp$_74 : null;
            if (tmp$_75 == null) {
              continue;
            }
            var transition = tmp$_75;
            var ruleIndex_0 = (Kotlin.isType(tmp$_76 = transition, ActionTransition) ? tmp$_76 : throwCCE()).ruleIndex;
            var actionIndex = (Kotlin.isType(tmp$_77 = transition, ActionTransition) ? tmp$_77 : throwCCE()).actionIndex;
            var lexerAction_0 = new LexerCustomAction(ruleIndex_0, actionIndex);
            state_2.setTransition_y7er8m$(i_11, new ActionTransition(ensureNotNull(transition.target), ruleIndex_0, legacyLexerActions.size, false));
            legacyLexerActions.add_11rb$(lexerAction_0);
          }
        }
        atn.lexerActions = copyToArray(legacyLexerActions);
      }
    }
    this.markPrecedenceDecisions_0(atn);
    if (this.deserializationOptions_0.isVerifyATN) {
      this.verifyATN_0(atn);
    }
    if (this.deserializationOptions_0.isGenerateRuleBypassTransitions && atn.grammarType === ATNType$PARSER_getInstance()) {
      atn.ruleToTokenType = new Int32Array(ensureNotNull(atn.ruleToStartState).length);
      tmp$_78 = ensureNotNull(atn.ruleToStartState);
      for (var i_12 = 0; i_12 !== tmp$_78.length; ++i_12) {
        ensureNotNull(atn.ruleToTokenType)[i_12] = atn.maxTokenType + i_12 + 1 | 0;
      }
      tmp$_79 = ensureNotNull(atn.ruleToStartState);
      for (var i_13 = 0; i_13 !== tmp$_79.length; ++i_13) {
        var tmp$_87, tmp$_88, tmp$_89, tmp$_90, tmp$_91, tmp$_92;
        var bypassStart = new BasicBlockStartState();
        bypassStart.ruleIndex = i_13;
        atn.addState_cou8py$(bypassStart);
        var bypassStop = new BlockEndState();
        bypassStop.ruleIndex = i_13;
        atn.addState_cou8py$(bypassStop);
        bypassStart.endState = bypassStop;
        atn.defineDecisionState_7pgr4q$(bypassStart);
        bypassStop.startState = bypassStart;
        var endState;
        var excludeTransition = null;
        if (ensureNotNull(ensureNotNull(atn.ruleToStartState)[i_13]).isLeftRecursiveRule) {
          endState = null;
          tmp$_87 = atn.states.iterator();
          while (tmp$_87.hasNext()) {
            var state_3 = tmp$_87.next();
            if (ensureNotNull(state_3).ruleIndex !== i_13) {
              continue;
            }
            if (!Kotlin.isType(state_3, StarLoopEntryState)) {
              continue;
            }
            tmp$_89 = Kotlin.isType(tmp$_88 = state_3.transition_za3lpa$(state_3.numberOfTransitions - 1 | 0).target, LoopEndState) ? tmp$_88 : null;
            if (tmp$_89 == null) {
              continue;
            }
            var maybeLoopEndState = tmp$_89;
            if (maybeLoopEndState.epsilonOnlyTransitions && Kotlin.isType(maybeLoopEndState.transition_za3lpa$(0).target, RuleStopState)) {
              endState = state_3;
              break;
            }
          }
          if (endState == null) {
            throw UnsupportedOperationException_init("Couldn't identify final state of the precedence rule prefix section.");
          }
          excludeTransition = ensureNotNull((Kotlin.isType(tmp$_90 = endState, StarLoopEntryState) ? tmp$_90 : throwCCE()).loopBackState).transition_za3lpa$(0);
        } else {
          endState = ensureNotNull(atn.ruleToStopState)[i_13];
        }
        tmp$_91 = atn.states.iterator();
        while (tmp$_91.hasNext()) {
          var state_4 = tmp$_91.next();
          tmp$_92 = ensureNotNull(state_4).transitions.iterator();
          while (tmp$_92.hasNext()) {
            var transition_0 = tmp$_92.next();
            if (transition_0 === excludeTransition) {
              continue;
            }
            if (transition_0.target === endState) {
              transition_0.target = bypassStop;
            }
          }
        }
        while (ensureNotNull(ensureNotNull(atn.ruleToStartState)[i_13]).numberOfTransitions > 0) {
          var transition_1 = ensureNotNull(ensureNotNull(atn.ruleToStartState)[i_13]).removeTransition_za3lpa$(ensureNotNull(ensureNotNull(atn.ruleToStartState)[i_13]).numberOfTransitions - 1 | 0);
          bypassStart.addTransition_hv8bj8$(transition_1);
        }
        ensureNotNull(ensureNotNull(atn.ruleToStartState)[i_13]).addTransition_hv8bj8$(new EpsilonTransition(bypassStart));
        bypassStop.addTransition_hv8bj8$(new EpsilonTransition(ensureNotNull(endState)));
        var matchState = new BasicState();
        atn.addState_cou8py$(matchState);
        matchState.addTransition_hv8bj8$(new AtomTransition(bypassStop, ensureNotNull(atn.ruleToTokenType)[i_13]));
        bypassStart.addTransition_hv8bj8$(new EpsilonTransition(matchState));
      }
      if (this.deserializationOptions_0.isVerifyATN) {
        this.verifyATN_0(atn);
      }
    }
    return atn;
  };
  ATNDeserializer.prototype.deserializeSets_0 = function (data, p, sets, unicodeDeserializer) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var p_0 = p;
    tmp$_0 = data[tmp$ = p_0, p_0 = tmp$ + 1 | 0, tmp$];
    var nsets = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_0);
    for (var i = 0; i < nsets; i++) {
      var nintervals = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(data[p_0]);
      p_0 = p_0 + 1 | 0;
      var set = IntervalSet_init_1(new Int32Array([]));
      sets.add_11rb$(set);
      tmp$_2 = data[tmp$_1 = p_0, p_0 = tmp$_1 + 1 | 0, tmp$_1];
      var containsEof = ATNDeserializer$Companion_getInstance().toInt_s8itvh$(tmp$_2) !== 0;
      if (containsEof) {
        set.add_za3lpa$(-1);
      }
      for (var j = 0; j < nintervals; j++) {
        var a = unicodeDeserializer.readUnicode_1b3ri0$(data, p_0);
        p_0 = p_0 + unicodeDeserializer.size() | 0;
        var b = unicodeDeserializer.readUnicode_1b3ri0$(data, p_0);
        p_0 = p_0 + unicodeDeserializer.size() | 0;
        set.add_vux9f0$(a, b);
      }
    }
    return p_0;
  };
  ATNDeserializer.prototype.markPrecedenceDecisions_0 = function (atn) {
    var tmp$, tmp$_0;
    tmp$ = atn.states.iterator();
    while (tmp$.hasNext()) {
      var state = tmp$.next();
      if (!Kotlin.isType(state, StarLoopEntryState)) {
        continue;
      }
      if (ensureNotNull(ensureNotNull(atn.ruleToStartState)[state.ruleIndex]).isLeftRecursiveRule) {
        var maybeLoopEndState = state.transition_za3lpa$(state.numberOfTransitions - 1 | 0).target;
        if (Kotlin.isType(maybeLoopEndState, LoopEndState)) {
          if (maybeLoopEndState.epsilonOnlyTransitions && Kotlin.isType(maybeLoopEndState.transition_za3lpa$(0).target, RuleStopState)) {
            (Kotlin.isType(tmp$_0 = state, StarLoopEntryState) ? tmp$_0 : throwCCE()).isPrecedenceDecision = true;
          }
        }
      }
    }
  };
  ATNDeserializer.prototype.verifyATN_0 = function (atn) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    tmp$ = atn.states.iterator();
    while (tmp$.hasNext()) {
      var state = tmp$.next();
      if (state == null) {
        continue;
      }
      this.checkCondition_ifx8ge$(ensureNotNull(state).onlyHasEpsilonTransitions() || ensureNotNull(state).numberOfTransitions <= 1);
      if (Kotlin.isType(state, PlusBlockStartState)) {
        this.checkCondition_ifx8ge$((Kotlin.isType(tmp$_0 = state, PlusBlockStartState) ? tmp$_0 : throwCCE()).loopBackState != null);
      }
      if (Kotlin.isType(state, StarLoopEntryState)) {
        var starLoopEntryState = Kotlin.isType(tmp$_1 = state, StarLoopEntryState) ? tmp$_1 : throwCCE();
        this.checkCondition_ifx8ge$(ensureNotNull(starLoopEntryState).loopBackState != null);
        this.checkCondition_ifx8ge$(ensureNotNull(starLoopEntryState).numberOfTransitions === 2);
        if (Kotlin.isType(ensureNotNull(starLoopEntryState).transition_za3lpa$(0).target, StarBlockStartState)) {
          this.checkCondition_ifx8ge$(Kotlin.isType(ensureNotNull(starLoopEntryState).transition_za3lpa$(1).target, LoopEndState));
          this.checkCondition_ifx8ge$(!ensureNotNull(starLoopEntryState).nonGreedy);
        } else if (Kotlin.isType(ensureNotNull(starLoopEntryState).transition_za3lpa$(0).target, LoopEndState)) {
          this.checkCondition_ifx8ge$(Kotlin.isType(ensureNotNull(starLoopEntryState).transition_za3lpa$(1).target, StarBlockStartState));
          this.checkCondition_ifx8ge$(ensureNotNull(starLoopEntryState).nonGreedy);
        } else {
          throw IllegalStateException_init_0();
        }
      }
      if (Kotlin.isType(state, StarLoopbackState)) {
        this.checkCondition_ifx8ge$(ensureNotNull(state).numberOfTransitions === 1);
        this.checkCondition_ifx8ge$(Kotlin.isType(ensureNotNull(state).transition_za3lpa$(0).target, StarLoopEntryState));
      }
      if (Kotlin.isType(state, LoopEndState)) {
        this.checkCondition_ifx8ge$((Kotlin.isType(tmp$_2 = state, LoopEndState) ? tmp$_2 : throwCCE()).loopBackState != null);
      }
      if (Kotlin.isType(state, RuleStartState)) {
        this.checkCondition_ifx8ge$((Kotlin.isType(tmp$_3 = state, RuleStartState) ? tmp$_3 : throwCCE()).stopState != null);
      }
      if (Kotlin.isType(state, BlockStartState)) {
        this.checkCondition_ifx8ge$((Kotlin.isType(tmp$_4 = state, BlockStartState) ? tmp$_4 : throwCCE()).endState != null);
      }
      if (Kotlin.isType(state, BlockEndState)) {
        this.checkCondition_ifx8ge$((Kotlin.isType(tmp$_5 = state, BlockEndState) ? tmp$_5 : throwCCE()).startState != null);
      }
      if (Kotlin.isType(state, DecisionState)) {
        var decisionState = Kotlin.isType(tmp$_6 = state, DecisionState) ? tmp$_6 : throwCCE();
        this.checkCondition_ifx8ge$(ensureNotNull(decisionState).numberOfTransitions <= 1 || ensureNotNull(decisionState).decision >= 0);
      } else {
        this.checkCondition_ifx8ge$(ensureNotNull(state).numberOfTransitions <= 1 || Kotlin.isType(state, RuleStopState));
      }
    }
  };
  ATNDeserializer.prototype.checkCondition_ifx8ge$ = function (condition, message) {
    if (message === void 0)
      message = null;
    if (!condition) {
      throw IllegalStateException_init(ensureNotNull(message));
    }
  };
  ATNDeserializer.prototype.edgeFactory_lhjf6u$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    var tmp$, tmp$_0, tmp$_1;
    var target = ensureNotNull(atn.states.get_za3lpa$(trg));
    switch (type) {
      case 1:
        return new EpsilonTransition(target);
      case 2:
        if (arg3 !== 0) {
          tmp$ = new RangeTransition(target, Token$Companion_getInstance().EOF, arg2);
        } else {
          tmp$ = new RangeTransition(target, arg1, arg2);
        }

        return tmp$;
      case 3:
        return new RuleTransition(Kotlin.isType(tmp$_0 = atn.states.get_za3lpa$(arg1), RuleStartState) ? tmp$_0 : throwCCE(), arg2, arg3, target);
      case 4:
        return new PredicateTransition(target, arg1, arg2, arg3 !== 0);
      case 10:
        return new PrecedencePredicateTransition(target, arg1);
      case 5:
        if (arg3 !== 0) {
          tmp$_1 = new AtomTransition(target, Token$Companion_getInstance().EOF);
        } else {
          tmp$_1 = new AtomTransition(target, arg1);
        }

        return tmp$_1;
      case 6:
        return new ActionTransition(target, arg1, arg2, arg3 !== 0);
      case 7:
        return new SetTransition(target, sets.get_za3lpa$(arg1));
      case 8:
        return new NotSetTransition(target, sets.get_za3lpa$(arg1));
      case 9:
        return new WildcardTransition(target);
    }
    throw IllegalArgumentException_init('The specified transition type is not valid.');
  };
  ATNDeserializer.prototype.stateFactory_vux9f0$ = function (type, ruleIndex) {
    var s;
    switch (type) {
      case 0:
        return null;
      case 1:
        s = new BasicState();
        break;
      case 2:
        s = new RuleStartState();
        break;
      case 3:
        s = new BasicBlockStartState();
        break;
      case 4:
        s = new PlusBlockStartState();
        break;
      case 5:
        s = new StarBlockStartState();
        break;
      case 6:
        s = new TokensStartState();
        break;
      case 7:
        s = new RuleStopState();
        break;
      case 8:
        s = new BlockEndState();
        break;
      case 9:
        s = new StarLoopbackState();
        break;
      case 10:
        s = new StarLoopEntryState();
        break;
      case 11:
        s = new PlusLoopbackState();
        break;
      case 12:
        s = new LoopEndState();
        break;
      default:
        var message = 'The specified state type ' + type + ' is not valid.';
        throw IllegalArgumentException_init(message);
    }
    s.ruleIndex = ruleIndex;
    return s;
  };
  ATNDeserializer.prototype.lexerActionFactory_0 = function (type, data1, data2) {
    switch (type.name) {
      case 'CHANNEL':
        return new LexerChannelAction(data1);
      case 'CUSTOM':
        return new LexerCustomAction(data1, data2);
      case 'MODE':
        return new LexerModeAction(data1);
      case 'MORE':
        return LexerMoreAction$Companion_getInstance().INSTANCE;
      case 'POP_MODE':
        return LexerPopModeAction$Companion_getInstance().INSTANCE;
      case 'PUSH_MODE':
        return new LexerPushModeAction(data1);
      case 'SKIP':
        return LexerSkipAction$Companion_getInstance().INSTANCE;
      case 'TYPE':
        return new LexerTypeAction(data1);
      default:
        var message = 'The specified lexer action type ' + type + ' is not valid.';
        throw IllegalArgumentException_init(message);
    }
  };
  function ATNDeserializer$Companion() {
    ATNDeserializer$Companion_instance = this;
    this.SERIALIZED_VERSION = 0;
    this.SERIALIZED_VERSION = 3;
    this.BASE_SERIALIZED_UUID_0 = null;
    this.ADDED_PRECEDENCE_TRANSITIONS_0 = null;
    this.ADDED_LEXER_ACTIONS_0 = null;
    this.ADDED_UNICODE_SMP_0 = null;
    this.SUPPORTED_UUIDS_0 = null;
    this.SERIALIZED_UUID = null;
    this.BASE_SERIALIZED_UUID_0 = UUID$Companion_getInstance().fromString_61zpoe$('33761B2D-78BB-4A43-8B0B-4F5BEE8AACF3');
    this.ADDED_PRECEDENCE_TRANSITIONS_0 = UUID$Companion_getInstance().fromString_61zpoe$('1DA0C57D-6C06-438A-9B27-10BCB3CE0F61');
    this.ADDED_LEXER_ACTIONS_0 = UUID$Companion_getInstance().fromString_61zpoe$('AADB8D7E-AEEF-4415-AD2B-8204D6CF042E');
    this.ADDED_UNICODE_SMP_0 = UUID$Companion_getInstance().fromString_61zpoe$('59627784-3BE5-417A-B9EB-8131A7286089');
    this.SUPPORTED_UUIDS_0 = ArrayList_init_0();
    this.SUPPORTED_UUIDS_0.add_11rb$(this.BASE_SERIALIZED_UUID_0);
    this.SUPPORTED_UUIDS_0.add_11rb$(this.ADDED_PRECEDENCE_TRANSITIONS_0);
    this.SUPPORTED_UUIDS_0.add_11rb$(this.ADDED_LEXER_ACTIONS_0);
    this.SUPPORTED_UUIDS_0.add_11rb$(this.ADDED_UNICODE_SMP_0);
    this.SERIALIZED_UUID = this.ADDED_UNICODE_SMP_0;
  }
  function ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral.prototype.readUnicode_1b3ri0$ = function (data, p) {
    return data[p] | 0;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral.prototype.size = function () {
    return 1;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ATNDeserializer$UnicodeDeserializer]
  };
  function ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral_0() {
  }
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral_0.prototype.readUnicode_1b3ri0$ = function (data, p) {
    return ATNDeserializer$Companion_getInstance().toInt32_1b3ri0$(data, p);
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral_0.prototype.size = function () {
    return 2;
  };
  ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [ATNDeserializer$UnicodeDeserializer]
  };
  ATNDeserializer$Companion.prototype.getUnicodeDeserializer_uqhmvg$ = function (mode) {
    var tmp$;
    if (mode === ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance()) {
      tmp$ = new ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral();
    } else {
      tmp$ = new ATNDeserializer$Companion$getUnicodeDeserializer$ObjectLiteral_0();
    }
    return tmp$;
  };
  ATNDeserializer$Companion.prototype.isFeatureSupported_0 = function (feature, actualUuid) {
    var tmp$;
    var featureIndex = this.SUPPORTED_UUIDS_0.indexOf_11rb$(feature);
    if (featureIndex < 0) {
      tmp$ = false;
    } else
      tmp$ = this.SUPPORTED_UUIDS_0.indexOf_11rb$(actualUuid) >= featureIndex;
    return tmp$;
  };
  ATNDeserializer$Companion.prototype.toInt_s8itvh$ = function (c) {
    return c | 0;
  };
  ATNDeserializer$Companion.prototype.toInt32_1b3ri0$ = function (data, offset) {
    return data[offset] | 0 | (data[offset + 1 | 0] | 0) << 16;
  };
  ATNDeserializer$Companion.prototype.toLong_1b3ri0$ = function (data, offset) {
    var lowOrder = Kotlin.Long.fromInt(this.toInt32_1b3ri0$(data, offset)).and(L4294967295);
    return lowOrder.or(Kotlin.Long.fromInt(this.toInt32_1b3ri0$(data, offset + 2 | 0)).shiftLeft(32));
  };
  ATNDeserializer$Companion.prototype.toUUID_1b3ri0$ = function (data, offset) {
    var leastSigBits = this.toLong_1b3ri0$(data, offset);
    var mostSigBits = this.toLong_1b3ri0$(data, offset + 4 | 0);
    return UUID_init(mostSigBits, leastSigBits);
  };
  ATNDeserializer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNDeserializer$Companion_instance = null;
  function ATNDeserializer$Companion_getInstance() {
    if (ATNDeserializer$Companion_instance === null) {
      new ATNDeserializer$Companion();
    }
    return ATNDeserializer$Companion_instance;
  }
  ATNDeserializer.prototype.deserializeIntegers_9mvhws$ = function (serializedIntegersATN) {
    var destination = ArrayList_init(serializedIntegersATN.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== serializedIntegersATN.length; ++tmp$) {
      var item = serializedIntegersATN[tmp$];
      destination.add_11rb$(toBoxedChar(toChar(item)));
    }
    var chars = toCharArray(destination);
    return this.deserialize_4hbowm$(chars);
  };
  ATNDeserializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNDeserializer',
    interfaces: []
  };
  function ATNSimulator(atn, sharedContextCache) {
    ATNSimulator$Companion_getInstance();
    this.atn = atn;
    this.sharedContextCache = sharedContextCache;
  }
  ATNSimulator.prototype.clearDFA = function () {
    throw UnsupportedOperationException_init('This ATN simulator does not support clearing the DFA.');
  };
  ATNSimulator.prototype.getCachedContext_3gc72n$ = function (context) {
    if (this.sharedContextCache == null)
      return context;
    var visited = new IdentityHashMap();
    return PredictionContext$Companion_getInstance().getCachedContext_2tzs0j$(context, this.sharedContextCache, visited);
  };
  function ATNSimulator$Companion() {
    ATNSimulator$Companion_instance = this;
    this.SERIALIZED_VERSION = 0;
    this.SERIALIZED_VERSION = ATNDeserializer$Companion_getInstance().SERIALIZED_VERSION;
    this.SERIALIZED_UUID = null;
    this.SERIALIZED_UUID = ATNDeserializer$Companion_getInstance().SERIALIZED_UUID;
    this.ERROR = null;
    this.ERROR = DFAState_init_1(new ATNConfigSet());
    this.ERROR.stateNumber = 2147483647;
  }
  ATNSimulator$Companion.prototype.deserialize_4hbowm$ = function (data) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.checkCondition_6taknv$ = function (condition) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.checkCondition_8kj6y5$ = function (condition, message) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.toInt_s8itvh$ = function (c) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.toInt32_1b3ri0$ = function (data, offset) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.toLong_1b3ri0$ = function (data, offset) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.toUUID_1b3ri0$ = function (data, offset) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.edgeFactory_lhjf6u$ = function (atn, type, src, trg, arg1, arg2, arg3, sets) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.prototype.stateFactory_vux9f0$ = function (type, ruleIndex) {
    throw new NotImplementedError_init();
  };
  ATNSimulator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNSimulator$Companion_instance = null;
  function ATNSimulator$Companion_getInstance() {
    if (ATNSimulator$Companion_instance === null) {
      new ATNSimulator$Companion();
    }
    return ATNSimulator$Companion_instance;
  }
  ATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNSimulator',
    interfaces: []
  };
  function ATNState() {
    ATNState$Companion_getInstance();
    this.atn = null;
    this.stateNumber = -1;
    this.ruleIndex = 0;
    this.epsilonOnlyTransitions = false;
    this.transitions = ArrayList_init(ATNState$Companion_getInstance().INITIAL_NUM_TRANSITIONS);
    this.nextTokenWithinRule = null;
  }
  Object.defineProperty(ATNState.prototype, 'isNonGreedyExitState', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Object.defineProperty(ATNState.prototype, 'numberOfTransitions', {
    configurable: true,
    get: function () {
      return this.transitions.size;
    }
  });
  ATNState.prototype.hashCode = function () {
    return this.stateNumber;
  };
  ATNState.prototype.equals = function (other) {
    return Kotlin.isType(other, ATNState) ? this.stateNumber === other.stateNumber : false;
  };
  ATNState.prototype.toString = function () {
    return this.stateNumber.toString();
  };
  ATNState.prototype.getTransitions = function () {
    return copyToArray(this.transitions);
  };
  ATNState.prototype.addTransition_hv8bj8$ = function (e) {
    this.addTransition_y7er8m$(this.transitions.size, e);
  };
  ATNState.prototype.addTransition_y7er8m$ = function (index, e) {
    var tmp$;
    if (this.transitions.isEmpty()) {
      this.epsilonOnlyTransitions = e.isEpsilon;
    } else if (this.epsilonOnlyTransitions !== e.isEpsilon) {
      errMessage('ATN state ' + this.stateNumber + ' has both epsilon and non-epsilon transitions.' + '\n');
      this.epsilonOnlyTransitions = false;
    }
    var alreadyPresent = false;
    tmp$ = this.transitions.iterator();
    while (tmp$.hasNext()) {
      var t = tmp$.next();
      if (ensureNotNull(t.target).stateNumber === ensureNotNull(e.target).stateNumber) {
        if (t.accessLabel() != null && e.accessLabel() != null && ensureNotNull(t.accessLabel()).equals(e.accessLabel())) {
          alreadyPresent = true;
          break;
        } else if (t.isEpsilon && e.isEpsilon) {
          alreadyPresent = true;
          break;
        }
      }
    }
    if (!alreadyPresent) {
      this.transitions.add_wxm5ur$(index, e);
    }
  };
  ATNState.prototype.transition_za3lpa$ = function (i) {
    return this.transitions.get_za3lpa$(i);
  };
  ATNState.prototype.setTransition_y7er8m$ = function (i, e) {
    this.transitions.set_wxm5ur$(i, e);
  };
  ATNState.prototype.removeTransition_za3lpa$ = function (index) {
    return this.transitions.removeAt_za3lpa$(index);
  };
  ATNState.prototype.onlyHasEpsilonTransitions = function () {
    return this.epsilonOnlyTransitions;
  };
  function ATNState$Companion() {
    ATNState$Companion_instance = this;
    this.INITIAL_NUM_TRANSITIONS = 4;
    this.INVALID_TYPE = 0;
    this.BASIC = 1;
    this.RULE_START = 2;
    this.BLOCK_START = 3;
    this.PLUS_BLOCK_START = 4;
    this.STAR_BLOCK_START = 5;
    this.TOKEN_START = 6;
    this.RULE_STOP = 7;
    this.BLOCK_END = 8;
    this.STAR_LOOP_BACK = 9;
    this.STAR_LOOP_ENTRY = 10;
    this.PLUS_LOOP_BACK = 11;
    this.LOOP_END = 12;
    this.serializationNames = listOf(['INVALID', 'BASIC', 'RULE_START', 'BLOCK_START', 'PLUS_BLOCK_START', 'STAR_BLOCK_START', 'TOKEN_START', 'RULE_STOP', 'BLOCK_END', 'STAR_LOOP_BACK', 'STAR_LOOP_ENTRY', 'PLUS_LOOP_BACK', 'LOOP_END']);
    this.INVALID_STATE_NUMBER = -1;
  }
  ATNState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ATNState$Companion_instance = null;
  function ATNState$Companion_getInstance() {
    if (ATNState$Companion_instance === null) {
      new ATNState$Companion();
    }
    return ATNState$Companion_instance;
  }
  ATNState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNState',
    interfaces: []
  };
  function ATNType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ATNType_initFields() {
    ATNType_initFields = function () {
    };
    ATNType$LEXER_instance = new ATNType('LEXER', 0);
    ATNType$PARSER_instance = new ATNType('PARSER', 1);
  }
  var ATNType$LEXER_instance;
  function ATNType$LEXER_getInstance() {
    ATNType_initFields();
    return ATNType$LEXER_instance;
  }
  var ATNType$PARSER_instance;
  function ATNType$PARSER_getInstance() {
    ATNType_initFields();
    return ATNType$PARSER_instance;
  }
  ATNType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ATNType',
    interfaces: [Enum]
  };
  function ATNType$values() {
    return [ATNType$LEXER_getInstance(), ATNType$PARSER_getInstance()];
  }
  ATNType.values = ATNType$values;
  function ATNType$valueOf(name) {
    switch (name) {
      case 'LEXER':
        return ATNType$LEXER_getInstance();
      case 'PARSER':
        return ATNType$PARSER_getInstance();
      default:
        throwISE('No enum constant org.antlr.v4.kotlinruntime.atn.ATNType.' + name);
    }
  }
  ATNType.valueOf_61zpoe$ = ATNType$valueOf;
  function AbstractPredicateTransition(target) {
    Transition.call(this, target);
  }
  AbstractPredicateTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractPredicateTransition',
    interfaces: [Transition]
  };
  function ActionTransition(target, ruleIndex, actionIndex, isCtxDependent) {
    if (actionIndex === void 0)
      actionIndex = -1;
    if (isCtxDependent === void 0)
      isCtxDependent = false;
    Transition.call(this, target);
    this.ruleIndex = ruleIndex;
    this.actionIndex = actionIndex;
    this.isCtxDependent = isCtxDependent;
  }
  Object.defineProperty(ActionTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().ACTION;
    }
  });
  Object.defineProperty(ActionTransition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  ActionTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  ActionTransition.prototype.toString = function () {
    return 'action_' + this.ruleIndex + ':' + this.actionIndex;
  };
  ActionTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTransition',
    interfaces: [Transition]
  };
  function AmbiguityInfo(decision, configs, ambigAlts, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.ambigAlts = ambigAlts;
  }
  AmbiguityInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AmbiguityInfo',
    interfaces: [DecisionEventInfo]
  };
  function ArrayPredictionContext(parents, returnStates) {
    PredictionContext.call(this, PredictionContext$Companion_getInstance().calculateHashCode_aimbxn$(ensureNotNull(parents), ensureNotNull(returnStates)));
    this.parents = parents;
    this.returnStates = returnStates;
  }
  ArrayPredictionContext.prototype.size = function () {
    return ensureNotNull(this.returnStates).length;
  };
  ArrayPredictionContext.prototype.getParent_za3lpa$ = function (index) {
    return ensureNotNull(ensureNotNull(this.parents)[index]);
  };
  ArrayPredictionContext.prototype.getReturnState_za3lpa$ = function (index) {
    return ensureNotNull(this.returnStates)[index];
  };
  ArrayPredictionContext.prototype.equals = function (other) {
    if (this === other) {
      return true;
    } else if (!Kotlin.isType(other, ArrayPredictionContext)) {
      return false;
    }
    if (this.hashCode() !== hashCode(other)) {
      return false;
    }
    return Arrays_getInstance().equals_elb7bo$(this.returnStates, other.returnStates) && Arrays_getInstance().equals_hdevzo$(this.parents, other.parents);
  };
  ArrayPredictionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrayPredictionContext',
    interfaces: [PredictionContext]
  };
  function ArrayPredictionContext_init(a, $this) {
    $this = $this || Object.create(ArrayPredictionContext.prototype);
    ArrayPredictionContext.call($this, [a.parent], new Int32Array([a.returnState]));
    return $this;
  }
  function AtomTransition(target, label) {
    Transition.call(this, target);
    this.label = label;
  }
  Object.defineProperty(AtomTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().ATOM;
    }
  });
  AtomTransition.prototype.accessLabel = function () {
    return IntervalSet$Companion_getInstance().of_za3lpa$(this.label);
  };
  AtomTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.label === symbol;
  };
  AtomTransition.prototype.toString = function () {
    return this.label.toString();
  };
  AtomTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomTransition',
    interfaces: [Transition]
  };
  function BasicBlockStartState() {
    BlockStartState.call(this);
  }
  Object.defineProperty(BasicBlockStartState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().BLOCK_START;
    }
  });
  BasicBlockStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicBlockStartState',
    interfaces: [BlockStartState]
  };
  function BasicState() {
    ATNState.call(this);
  }
  Object.defineProperty(BasicState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().BASIC;
    }
  });
  BasicState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BasicState',
    interfaces: [ATNState]
  };
  function BlockEndState() {
    ATNState.call(this);
    this.startState = null;
  }
  Object.defineProperty(BlockEndState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().BLOCK_END;
    }
  });
  BlockEndState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockEndState',
    interfaces: [ATNState]
  };
  function BlockStartState() {
    DecisionState.call(this);
    this.endState = null;
  }
  BlockStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlockStartState',
    interfaces: [DecisionState]
  };
  function CodePointTransitions() {
    CodePointTransitions_instance = this;
  }
  CodePointTransitions.prototype.createWithCodePoint_9cezu1$ = function (target, codePoint) {
    var tmp$;
    if (isSupplementaryCodePoint(kotlin_js_internal_CharCompanionObject, codePoint)) {
      tmp$ = new SetTransition(target, IntervalSet$Companion_getInstance().of_za3lpa$(codePoint));
    } else {
      tmp$ = new AtomTransition(target, codePoint);
    }
    return tmp$;
  };
  CodePointTransitions.prototype.createWithCodePointRange_29naij$ = function (target, codePointFrom, codePointTo) {
    var tmp$;
    if (isSupplementaryCodePoint(kotlin_js_internal_CharCompanionObject, codePointFrom) || isSupplementaryCodePoint(kotlin_js_internal_CharCompanionObject, codePointTo)) {
      tmp$ = new SetTransition(target, IntervalSet$Companion_getInstance().of_vux9f0$(codePointFrom, codePointTo));
    } else {
      tmp$ = new RangeTransition(target, codePointFrom, codePointTo);
    }
    return tmp$;
  };
  CodePointTransitions.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CodePointTransitions',
    interfaces: []
  };
  var CodePointTransitions_instance = null;
  function CodePointTransitions_getInstance() {
    if (CodePointTransitions_instance === null) {
      new CodePointTransitions();
    }
    return CodePointTransitions_instance;
  }
  function ContextSensitivityInfo(decision, configs, input, startIndex, stopIndex) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, true);
  }
  ContextSensitivityInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ContextSensitivityInfo',
    interfaces: [DecisionEventInfo]
  };
  function DecisionEventInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    this.decision = decision;
    this.configs = configs;
    this.input = input;
    this.startIndex = startIndex;
    this.stopIndex = stopIndex;
    this.fullCtx = fullCtx;
  }
  DecisionEventInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecisionEventInfo',
    interfaces: []
  };
  function DecisionInfo(decision) {
    this.decision = decision;
    this.invocations = L0;
    this.timeInPrediction = L0;
    this.SLL_TotalLook = L0;
    this.SLL_MinLook = L0;
    this.SLL_MaxLook = L0;
    this.SLL_MaxLookEvent = null;
    this.LL_TotalLook = L0;
    this.LL_MinLook = L0;
    this.LL_MaxLook = L0;
    this.LL_MaxLookEvent = null;
    this.contextSensitivities = ArrayList_init_0();
    this.errors = ArrayList_init_0();
    this.ambiguities = ArrayList_init_0();
    this.predicateEvals = ArrayList_init_0();
    this.SLL_ATNTransitions = L0;
    this.SLL_DFATransitions = L0;
    this.LL_Fallback = L0;
    this.LL_ATNTransitions = L0;
    this.LL_DFATransitions = L0;
  }
  DecisionInfo.prototype.toString = function () {
    return '{' + 'decision=' + toString(this.decision) + ', contextSensitivities=' + toString(this.contextSensitivities.size) + ', errors=' + toString(this.errors.size) + ', ambiguities=' + toString(this.ambiguities.size) + ', SLL_lookahead=' + toString(this.SLL_TotalLook) + ', SLL_ATNTransitions=' + toString(this.SLL_ATNTransitions) + ', SLL_DFATransitions=' + toString(this.SLL_DFATransitions) + ', LL_Fallback=' + toString(this.LL_Fallback) + ', LL_lookahead=' + toString(this.LL_TotalLook) + ', LL_ATNTransitions=' + toString(this.LL_ATNTransitions) + String.fromCharCode(toBoxedChar(125));
  };
  DecisionInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecisionInfo',
    interfaces: []
  };
  function DecisionState() {
    ATNState.call(this);
    this.decision = -1;
    this.nonGreedy = false;
  }
  DecisionState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecisionState',
    interfaces: [ATNState]
  };
  function EmptyPredictionContext() {
    SingletonPredictionContext.call(this, null, PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE);
  }
  Object.defineProperty(EmptyPredictionContext.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  EmptyPredictionContext.prototype.size = function () {
    return 1;
  };
  EmptyPredictionContext.prototype.getParent_za3lpa$ = function (index) {
    return null;
  };
  EmptyPredictionContext.prototype.getReturnState_za3lpa$ = function (index) {
    return PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE;
  };
  EmptyPredictionContext.prototype.equals = function (o) {
    return this === o;
  };
  EmptyPredictionContext.prototype.toString = function () {
    return '$';
  };
  EmptyPredictionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyPredictionContext',
    interfaces: [SingletonPredictionContext]
  };
  function EpsilonTransition(target, outermostPrecedenceReturn) {
    if (outermostPrecedenceReturn === void 0)
      outermostPrecedenceReturn = -1;
    Transition.call(this, target);
    this.outermostPrecedenceReturn_0 = outermostPrecedenceReturn;
  }
  Object.defineProperty(EpsilonTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().EPSILON;
    }
  });
  Object.defineProperty(EpsilonTransition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  EpsilonTransition.prototype.outermostPrecedenceReturn = function () {
    return this.outermostPrecedenceReturn_0;
  };
  EpsilonTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  EpsilonTransition.prototype.toString = function () {
    return 'epsilon';
  };
  EpsilonTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EpsilonTransition',
    interfaces: [Transition]
  };
  function ErrorInfo(decision, configs, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
  }
  ErrorInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ErrorInfo',
    interfaces: [DecisionEventInfo]
  };
  function LL1Analyzer(atn) {
    LL1Analyzer$Companion_getInstance();
    this.atn = atn;
  }
  LL1Analyzer.prototype.getDecisionLookahead_cou8py$ = function (s) {
    var tmp$;
    if (s == null) {
      return null;
    }
    var look = Kotlin.newArray(ensureNotNull(s).numberOfTransitions, null);
    tmp$ = ensureNotNull(s).numberOfTransitions;
    for (var alt = 0; alt < tmp$; alt++) {
      look[alt] = IntervalSet_init_1(new Int32Array([]));
      var lookBusy = HashSet_init_0();
      var seeThruPreds = false;
      this._LOOK_0(ensureNotNull(ensureNotNull(s).transition_za3lpa$(alt).target), null, PredictionContext$Companion_getInstance().EMPTY, ensureNotNull(look[alt]), lookBusy, BitSet_init(), seeThruPreds, false);
      if (ensureNotNull(look[alt]).size() === 0 || ensureNotNull(look[alt]).contains_za3lpa$(LL1Analyzer$Companion_getInstance().HIT_PRED)) {
        look[alt] = null;
      }
    }
    return look;
  };
  LL1Analyzer.prototype.LOOK_ujrfb5$ = function (s, ctx) {
    return this.LOOK_msncd9$(s, null, ctx);
  };
  LL1Analyzer.prototype.LOOK_msncd9$ = function (s, stopState, ctx) {
    var r = IntervalSet_init_1(new Int32Array([]));
    var seeThruPreds = true;
    var lookContext = ctx != null ? PredictionContext$Companion_getInstance().fromRuleContext_6188bs$(ensureNotNull(s.atn), ctx) : null;
    this._LOOK_0(s, stopState, lookContext, r, HashSet_init_0(), BitSet_init(), seeThruPreds, true);
    return r;
  };
  LL1Analyzer.prototype._LOOK_0 = function (s, stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var c = ATNConfig_init_0(s, 0, ctx);
    if (!lookBusy.add_11rb$(c))
      return;
    if (s === stopState) {
      if (ctx == null) {
        look.add_za3lpa$(Token$Companion_getInstance().EPSILON);
        return;
      } else if (ensureNotNull(ctx).isEmpty && addEOF) {
        look.add_za3lpa$(Token$Companion_getInstance().EOF);
        return;
      }
    }
    if (Kotlin.isType(s, RuleStopState)) {
      if (ctx == null) {
        look.add_za3lpa$(Token$Companion_getInstance().EPSILON);
        return;
      } else if (ensureNotNull(ctx).isEmpty && addEOF) {
        look.add_za3lpa$(Token$Companion_getInstance().EOF);
        return;
      }
      if (ctx !== PredictionContext$Companion_getInstance().EMPTY) {
        var removed = calledRuleStack.get_za3lpa$(s.ruleIndex);
        try {
          calledRuleStack.clear_za3lpa$(s.ruleIndex);
          tmp$ = ensureNotNull(ctx).size();
          for (var i = 0; i < tmp$; i++) {
            var returnState = this.atn.states.get_za3lpa$(ensureNotNull(ctx).getReturnState_za3lpa$(i));
            this._LOOK_0(ensureNotNull(returnState), stopState, ensureNotNull(ctx).getParent_za3lpa$(i), look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
          }
        }finally {
          if (removed) {
            calledRuleStack.set_za3lpa$(s.ruleIndex);
          }
        }
        return;
      }
    }
    var n = s.numberOfTransitions;
    for (var i_0 = 0; i_0 < n; i_0++) {
      var t = s.transition_za3lpa$(i_0);
      if (Kotlin.isType(t, RuleTransition)) {
        if (calledRuleStack.get_za3lpa$(ensureNotNull((Kotlin.isType(tmp$_0 = t, RuleTransition) ? tmp$_0 : throwCCE()).target).ruleIndex)) {
          continue;
        }
        var newContext = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(ctx, (Kotlin.isType(tmp$_1 = t, RuleTransition) ? tmp$_1 : throwCCE()).followState.stateNumber);
        try {
          calledRuleStack.set_za3lpa$(ensureNotNull((Kotlin.isType(tmp$_2 = t, RuleTransition) ? tmp$_2 : throwCCE()).target).ruleIndex);
          this._LOOK_0(ensureNotNull(t.target), stopState, newContext, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
        }finally {
          calledRuleStack.clear_za3lpa$(ensureNotNull((Kotlin.isType(tmp$_3 = t, RuleTransition) ? tmp$_3 : throwCCE()).target).ruleIndex);
        }
      } else if (Kotlin.isType(t, AbstractPredicateTransition)) {
        if (seeThruPreds) {
          this._LOOK_0(ensureNotNull(t.target), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
        } else {
          look.add_za3lpa$(LL1Analyzer$Companion_getInstance().HIT_PRED);
        }
      } else if (t.isEpsilon) {
        this._LOOK_0(ensureNotNull(t.target), stopState, ctx, look, lookBusy, calledRuleStack, seeThruPreds, addEOF);
      } else if (Kotlin.isType(t, WildcardTransition)) {
        look.addAll_lqo98a$(IntervalSet$Companion_getInstance().of_vux9f0$(Token$Companion_getInstance().MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
      } else {
        var set = t.accessLabel();
        if (set != null) {
          if (Kotlin.isType(t, NotSetTransition)) {
            set = ensureNotNull(set).complement_lqo98a$(IntervalSet$Companion_getInstance().of_vux9f0$(Token$Companion_getInstance().MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
          }
          look.addAll_lqo98a$(set);
        }
      }
    }
  };
  function LL1Analyzer$Companion() {
    LL1Analyzer$Companion_instance = this;
    this.HIT_PRED = Token$Companion_getInstance().INVALID_TYPE;
  }
  LL1Analyzer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LL1Analyzer$Companion_instance = null;
  function LL1Analyzer$Companion_getInstance() {
    if (LL1Analyzer$Companion_instance === null) {
      new LL1Analyzer$Companion();
    }
    return LL1Analyzer$Companion_instance;
  }
  LL1Analyzer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LL1Analyzer',
    interfaces: []
  };
  function LexerATNConfig() {
    this.lexerActionExecutor = null;
    this.passedThroughNonGreedyDecision_0 = false;
  }
  LexerATNConfig.prototype.hasPassedThroughNonGreedyDecision = function () {
    return this.passedThroughNonGreedyDecision_0;
  };
  LexerATNConfig.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_za3lpa$(7);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.state.stateNumber);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.alt);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, this.context);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, this.semanticContext);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.passedThroughNonGreedyDecision_0 ? 1 : 0);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, this.lexerActionExecutor);
    hashCode = MurmurHash_getInstance().finish_vux9f0$(hashCode, 6);
    return hashCode;
  };
  LexerATNConfig.prototype.equals_8vatrl$ = function (other) {
    var tmp$, tmp$_0;
    if (this === other) {
      return true;
    } else if (!Kotlin.isType(other, LexerATNConfig)) {
      return false;
    }
    var lexerOther = (tmp$ = other) == null || Kotlin.isType(tmp$, LexerATNConfig) ? tmp$ : throwCCE();
    if (this.passedThroughNonGreedyDecision_0 !== ensureNotNull(lexerOther).passedThroughNonGreedyDecision_0) {
      return false;
    }
    if (!ObjectEqualityComparator$Companion_getInstance().INSTANCE.equals_xwzc9q$(this.lexerActionExecutor, lexerOther.lexerActionExecutor)) {
      tmp$_0 = false;
    } else
      tmp$_0 = ATNConfig.prototype.equals_8vatrl$.call(this, other);
    return tmp$_0;
  };
  LexerATNConfig.prototype.checkNonGreedyDecision_0 = function (source, target) {
    var tmp$;
    return source.passedThroughNonGreedyDecision_0 || (Kotlin.isType(target, DecisionState) && (Kotlin.isType(tmp$ = target, DecisionState) ? tmp$ : throwCCE()).nonGreedy);
  };
  LexerATNConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerATNConfig',
    interfaces: [ATNConfig]
  };
  function LexerATNConfig_init(state, alt, context, $this) {
    $this = $this || Object.create(LexerATNConfig.prototype);
    ATNConfig_init_0(state, alt, context, SemanticContext$Companion_getInstance().NONE, $this);
    LexerATNConfig.call($this);
    $this.passedThroughNonGreedyDecision_0 = false;
    $this.lexerActionExecutor = null;
    return $this;
  }
  function LexerATNConfig_init_0(state, alt, context, lexerActionExecutor, $this) {
    $this = $this || Object.create(LexerATNConfig.prototype);
    ATNConfig_init_0(state, alt, context, SemanticContext$Companion_getInstance().NONE, $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_0 = false;
    return $this;
  }
  function LexerATNConfig_init_1(c, state, $this) {
    $this = $this || Object.create(LexerATNConfig.prototype);
    ATNConfig_init_3(c, state, c.context, c.semanticContext, $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor = c.lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_0 = $this.checkNonGreedyDecision_0(c, state);
    return $this;
  }
  function LexerATNConfig_init_2(c, state, lexerActionExecutor, $this) {
    $this = $this || Object.create(LexerATNConfig.prototype);
    ATNConfig_init_3(c, state, c.context, c.semanticContext, $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor = lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_0 = $this.checkNonGreedyDecision_0(c, state);
    return $this;
  }
  function LexerATNConfig_init_3(c, state, context, $this) {
    $this = $this || Object.create(LexerATNConfig.prototype);
    ATNConfig_init_3(c, state, context, c.semanticContext, $this);
    LexerATNConfig.call($this);
    $this.lexerActionExecutor = c.lexerActionExecutor;
    $this.passedThroughNonGreedyDecision_0 = $this.checkNonGreedyDecision_0(c, state);
    return $this;
  }
  function LexerATNSimulator(recog, atn, decisionToDFA, sharedContextCache) {
    LexerATNSimulator$Companion_getInstance();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.recog_0 = recog;
    this.decisionToDFA = decisionToDFA;
    this.startIndex_0 = -1;
    this.line = 1;
    this.charPositionInLine = 0;
    this.mode_0 = Lexer$Companion_getInstance().DEFAULT_MODE;
    this.prevAccept_0 = new LexerATNSimulator$SimState();
  }
  function LexerATNSimulator$SimState() {
    this.index = -1;
    this.line = 0;
    this.charPos = -1;
    this.dfaState = null;
  }
  LexerATNSimulator$SimState.prototype.reset = function () {
    this.index = -1;
    this.line = 0;
    this.charPos = -1;
    this.dfaState = null;
  };
  LexerATNSimulator$SimState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimState',
    interfaces: []
  };
  LexerATNSimulator.prototype.copyState_hkclie$ = function (simulator) {
    this.charPositionInLine = simulator.charPositionInLine;
    this.line = simulator.line;
    this.mode_0 = simulator.mode_0;
    this.startIndex_0 = simulator.startIndex_0;
  };
  LexerATNSimulator.prototype.match_kas9oc$ = function (input, mode) {
    var tmp$, tmp$_0;
    this.mode_0 = mode;
    var mark = input.mark();
    try {
      this.startIndex_0 = input.index();
      this.prevAccept_0.reset();
      var dfa = this.decisionToDFA[mode];
      if (ensureNotNull(dfa).s0 == null) {
        tmp$_0 = this.matchATN_0(input);
      } else {
        tmp$_0 = this.execATN_0(input, Kotlin.isType(tmp$ = ensureNotNull(dfa).s0, DFAState) ? tmp$ : throwCCE());
      }
      return tmp$_0;
    }finally {
      input.release_za3lpa$(mark);
    }
  };
  LexerATNSimulator.prototype.reset = function () {
    this.prevAccept_0.reset();
    this.startIndex_0 = -1;
    this.line = 1;
    this.charPositionInLine = 0;
    this.mode_0 = Lexer$Companion_getInstance().DEFAULT_MODE;
  };
  LexerATNSimulator.prototype.clearDFA = function () {
    var tmp$;
    tmp$ = this.decisionToDFA;
    for (var d = 0; d !== tmp$.length; ++d) {
      var tmp$_0;
      this.decisionToDFA[d] = new DFA(Kotlin.isType(tmp$_0 = this.atn.getDecisionState_za3lpa$(d), DecisionState) ? tmp$_0 : throwCCE(), d);
    }
  };
  LexerATNSimulator.prototype.matchATN_0 = function (input) {
    var startState = this.atn.modeToStartState.get_za3lpa$(this.mode_0);
    if (LexerATNSimulator$Companion_getInstance().debug) {
      outMessage('matchATN mode ' + this.mode_0 + ' start: ' + startState + '\n');
    }
    var old_mode = this.mode_0;
    var s0_closure = this.computeStartState_0(input, startState);
    var suppressEdge = s0_closure.hasSemanticContext;
    s0_closure.hasSemanticContext = false;
    var next = this.addDFAState_0(s0_closure);
    if (!suppressEdge) {
      ensureNotNull(this.decisionToDFA[this.mode_0]).s0 = next;
    }
    var predict = this.execATN_0(input, next);
    if (LexerATNSimulator$Companion_getInstance().debug) {
      outMessage('DFA after matchATN: ' + toString(ensureNotNull(this.decisionToDFA[old_mode]).toLexerString()) + '\n');
    }
    return predict;
  };
  LexerATNSimulator.prototype.execATN_0 = function (input, ds0) {
    if (LexerATNSimulator$Companion_getInstance().debug) {
      outMessage('start state closure=' + toString(ds0.configs) + '\n');
    }
    if (ds0.isAcceptState) {
      this.captureSimState_0(this.prevAccept_0, input, ds0);
    }
    var t = input.LA_za3lpa$(1);
    var s = ds0;
    while (true) {
      if (LexerATNSimulator$Companion_getInstance().debug) {
        outMessage('execATN loop starting closure: ' + toString(ensureNotNull(s).configs) + '\n');
      }
      var target = this.getExistingTargetState_lym590$(s, t);
      if (target == null) {
        target = this.computeTargetState_v2xr3i$(input, s, t);
      }
      if (target === ATNSimulator$Companion_getInstance().ERROR) {
        break;
      }
      if (t !== IntStream$Companion_getInstance().EOF) {
        this.consume_npe0fi$(input);
      }
      if (ensureNotNull(target).isAcceptState) {
        this.captureSimState_0(this.prevAccept_0, input, target);
        if (t === IntStream$Companion_getInstance().EOF) {
          break;
        }
      }
      t = input.LA_za3lpa$(1);
      s = target;
    }
    return this.failOrAccept_0(this.prevAccept_0, input, ensureNotNull(ensureNotNull(s).configs), t);
  };
  LexerATNSimulator.prototype.getExistingTargetState_lym590$ = function (s, t) {
    if (ensureNotNull(s).edges == null || t < LexerATNSimulator$Companion_getInstance().MIN_DFA_EDGE || t > LexerATNSimulator$Companion_getInstance().MAX_DFA_EDGE) {
      return null;
    }
    var target = ensureNotNull(ensureNotNull(s).edges)[t - LexerATNSimulator$Companion_getInstance().MIN_DFA_EDGE | 0];
    if (LexerATNSimulator$Companion_getInstance().debug && target != null) {
      outMessage('reuse state ' + toString(ensureNotNull(s).stateNumber) + ' edge to ' + toString(ensureNotNull(target).stateNumber));
    }
    return target;
  };
  LexerATNSimulator.prototype.computeTargetState_v2xr3i$ = function (input, s, t) {
    var reach = new OrderedATNConfigSet();
    this.getReachableConfigSet_0(input, ensureNotNull(ensureNotNull(s).configs), reach, t);
    if (reach.isEmpty()) {
      if (!reach.hasSemanticContext) {
        this.addDFAEdge_0(s, t, ATNSimulator$Companion_getInstance().ERROR);
      }
      return ATNSimulator$Companion_getInstance().ERROR;
    }
    return this.addDFAEdge_1(s, t, reach);
  };
  LexerATNSimulator.prototype.failOrAccept_0 = function (prevAccept, input, reach, t) {
    var tmp$;
    if (prevAccept.dfaState != null) {
      var lexerActionExecutor = ensureNotNull(prevAccept.dfaState).lexerActionExecutor;
      this.accept_0(input, lexerActionExecutor, this.startIndex_0, prevAccept.index, prevAccept.line, prevAccept.charPos);
      return ensureNotNull(prevAccept.dfaState).prediction;
    } else {
      if (t === IntStream$Companion_getInstance().EOF && input.index() === this.startIndex_0) {
        return Token$Companion_getInstance().EOF;
      }
      throw new LexerNoViableAltException(Kotlin.isType(tmp$ = this.recog_0, Lexer) ? tmp$ : throwCCE(), input, this.startIndex_0, reach);
    }
  };
  LexerATNSimulator.prototype.getReachableConfigSet_0 = function (input, closure, reach, t) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var skipAlt = ATN$Companion_getInstance().INVALID_ALT_NUMBER;
    tmp$ = closure.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      var currentAltReachedAcceptState = c.alt === skipAlt;
      if (currentAltReachedAcceptState && (Kotlin.isType(tmp$_0 = c, LexerATNConfig) ? tmp$_0 : throwCCE()).hasPassedThroughNonGreedyDecision()) {
        continue;
      }
      if (LexerATNSimulator$Companion_getInstance().debug) {
        outMessage('testing ' + this.getTokenName_za3lpa$(t) + ' at ' + c.toString_zg1gca$(this.recog_0, true) + '\n');
      }
      var n = c.state.numberOfTransitions;
      for (var ti = 0; ti < n; ti++) {
        var trans = c.state.transition_za3lpa$(ti);
        var target = this.getReachableTarget_0(trans, t);
        if (target != null) {
          var lexerActionExecutor = (Kotlin.isType(tmp$_1 = c, LexerATNConfig) ? tmp$_1 : throwCCE()).lexerActionExecutor;
          if (lexerActionExecutor != null) {
            lexerActionExecutor = ensureNotNull(lexerActionExecutor).fixOffsetBeforeMatch_za3lpa$(input.index() - this.startIndex_0 | 0);
          }
          var treatEofAsEpsilon = t === CharStream$Companion_getInstance().EOF;
          if (this.closure_0(input, LexerATNConfig_init_2(Kotlin.isType(tmp$_2 = c, LexerATNConfig) ? tmp$_2 : throwCCE(), target, lexerActionExecutor), reach, currentAltReachedAcceptState, true, treatEofAsEpsilon)) {
            skipAlt = c.alt;
            break;
          }
        }
      }
    }
  };
  LexerATNSimulator.prototype.accept_0 = function (input, lexerActionExecutor, startIndex, index, line, charPos) {
    if (LexerATNSimulator$Companion_getInstance().debug) {
      outMessage('ACTION ' + toString(lexerActionExecutor) + '\n');
    }
    input.seek_za3lpa$(index);
    this.line = line;
    this.charPositionInLine = charPos;
    if (lexerActionExecutor != null && this.recog_0 != null) {
      ensureNotNull(lexerActionExecutor).execute_6l0lfc$(this.recog_0, input, startIndex);
    }
  };
  LexerATNSimulator.prototype.getReachableTarget_0 = function (trans, t) {
    var tmp$;
    if (trans.matches_qt1dr2$(t, Lexer$Companion_getInstance().MIN_CHAR_VALUE, Lexer$Companion_getInstance().MAX_CHAR_VALUE)) {
      tmp$ = trans.target;
    } else
      tmp$ = null;
    return tmp$;
  };
  LexerATNSimulator.prototype.computeStartState_0 = function (input, p) {
    var tmp$;
    var initialContext = PredictionContext$Companion_getInstance().EMPTY;
    var configs = new OrderedATNConfigSet();
    tmp$ = p.numberOfTransitions;
    for (var i = 0; i < tmp$; i++) {
      var target = p.transition_za3lpa$(i).target;
      var c = LexerATNConfig_init(ensureNotNull(target), i + 1 | 0, initialContext);
      this.closure_0(input, c, configs, false, false, false);
    }
    return configs;
  };
  LexerATNSimulator.prototype.closure_0 = function (input, config, configs, currentAltReachedAcceptState, speculative, treatEofAsEpsilon) {
    var tmp$, tmp$_0;
    var currentAltReachedAcceptState_0 = currentAltReachedAcceptState;
    if (LexerATNSimulator$Companion_getInstance().debug) {
      println('closure(' + config.toString_zg1gca$(this.recog_0, true) + ')');
    }
    if (Kotlin.isType(config.state, RuleStopState)) {
      if (LexerATNSimulator$Companion_getInstance().debug) {
        if (this.recog_0 != null) {
          outMessage('closure at ' + ensureNotNull(ensureNotNull(this.recog_0).ruleNames)[config.state.ruleIndex] + ' rule stop ' + config + '\n');
        } else {
          outMessage('closure at rule stop ' + config + '\n');
        }
      }
      if (config.context == null || ensureNotNull(config.context).hasEmptyPath()) {
        if (config.context == null || ensureNotNull(config.context).isEmpty) {
          configs.add_kc35f6$(config);
          return true;
        } else {
          configs.add_kc35f6$(LexerATNConfig_init_3(config, config.state, PredictionContext$Companion_getInstance().EMPTY));
          currentAltReachedAcceptState_0 = true;
        }
      }
      if (config.context != null && !ensureNotNull(config.context).isEmpty) {
        tmp$ = ensureNotNull(config.context).size();
        for (var i = 0; i < tmp$; i++) {
          if (ensureNotNull(config.context).getReturnState_za3lpa$(i) !== PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE) {
            var newContext = ensureNotNull(config.context).getParent_za3lpa$(i);
            var returnState = this.atn.states.get_za3lpa$(ensureNotNull(config.context).getReturnState_za3lpa$(i));
            var c = LexerATNConfig_init_3(config, ensureNotNull(returnState), ensureNotNull(newContext));
            currentAltReachedAcceptState_0 = this.closure_0(input, c, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
          }
        }
      }
      return currentAltReachedAcceptState_0;
    }
    if (!config.state.onlyHasEpsilonTransitions()) {
      if (!currentAltReachedAcceptState_0 || !config.hasPassedThroughNonGreedyDecision()) {
        configs.add_kc35f6$(config);
      }
    }
    var p = config.state;
    tmp$_0 = p.numberOfTransitions;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      var t = p.transition_za3lpa$(i_0);
      var c_0 = this.getEpsilonTarget_0(input, config, t, configs, speculative, treatEofAsEpsilon);
      if (c_0 != null) {
        currentAltReachedAcceptState_0 = this.closure_0(input, c_0, configs, currentAltReachedAcceptState_0, speculative, treatEofAsEpsilon);
      }
    }
    return currentAltReachedAcceptState_0;
  };
  LexerATNSimulator.prototype.getEpsilonTarget_0 = function (input, config, t, configs, speculative, treatEofAsEpsilon) {
    var tmp$, tmp$_0, tmp$_1;
    var c = null;
    switch (t.serializationType) {
      case 3:
        var ruleTransition = Kotlin.isType(tmp$ = t, RuleTransition) ? tmp$ : throwCCE();
        var newContext = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(config.context, ruleTransition.followState.stateNumber);
        c = LexerATNConfig_init_3(config, ensureNotNull(t.target), newContext);
        break;
      case 10:
        throw UnsupportedOperationException_init('Precedence predicates are not supported in lexers.');
      case 4:
        var pt = Kotlin.isType(tmp$_0 = t, PredicateTransition) ? tmp$_0 : throwCCE();
        if (LexerATNSimulator$Companion_getInstance().debug) {
          println('EVAL rule ' + toString(pt.ruleIndex) + ':' + toString(pt.predIndex));
        }

        configs.hasSemanticContext = true;
        if (this.evaluatePredicate_0(input, pt.ruleIndex, pt.predIndex, speculative)) {
          c = LexerATNConfig_init_1(config, ensureNotNull(t.target));
        }

        break;
      case 6:
        if (config.context == null || ensureNotNull(config.context).hasEmptyPath()) {
          var lexerActionExecutor = LexerActionExecutor$Companion_getInstance().append_yjss86$(config.lexerActionExecutor, ensureNotNull(ensureNotNull(this.atn.lexerActions)[(Kotlin.isType(tmp$_1 = t, ActionTransition) ? tmp$_1 : throwCCE()).actionIndex]));
          c = LexerATNConfig_init_2(config, ensureNotNull(t.target), lexerActionExecutor);
        } else {
          c = LexerATNConfig_init_1(config, ensureNotNull(t.target));
        }

        break;
      case 1:
        c = LexerATNConfig_init_1(config, ensureNotNull(t.target));
        break;
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.matches_qt1dr2$(CharStream$Companion_getInstance().EOF, Lexer$Companion_getInstance().MIN_CHAR_VALUE, Lexer$Companion_getInstance().MAX_CHAR_VALUE)) {
            c = LexerATNConfig_init_1(config, ensureNotNull(t.target));
          }
        }

        break;
    }
    return c;
  };
  LexerATNSimulator.prototype.evaluatePredicate_0 = function (input, ruleIndex, predIndex, speculative) {
    if (this.recog_0 == null) {
      return true;
    }
    if (!speculative) {
      return ensureNotNull(this.recog_0).sempred_63cxg8$(null, ruleIndex, predIndex);
    }
    var savedCharPositionInLine = this.charPositionInLine;
    var savedLine = this.line;
    var index = input.index();
    var marker = input.mark();
    try {
      this.consume_npe0fi$(input);
      return ensureNotNull(this.recog_0).sempred_63cxg8$(null, ruleIndex, predIndex);
    }finally {
      this.charPositionInLine = savedCharPositionInLine;
      this.line = savedLine;
      input.seek_za3lpa$(index);
      input.release_za3lpa$(marker);
    }
  };
  LexerATNSimulator.prototype.captureSimState_0 = function (settings, input, dfaState) {
    settings.index = input.index();
    settings.line = this.line;
    settings.charPos = this.charPositionInLine;
    settings.dfaState = dfaState;
  };
  LexerATNSimulator.prototype.addDFAEdge_1 = function (from, t, q) {
    var suppressEdge = q.hasSemanticContext;
    q.hasSemanticContext = false;
    var to = this.addDFAState_0(q);
    if (suppressEdge) {
      return to;
    }
    this.addDFAEdge_0(from, t, to);
    return to;
  };
  LexerATNSimulator.prototype.addDFAEdge_0 = function (p, t, q) {
    if (t < LexerATNSimulator$Companion_getInstance().MIN_DFA_EDGE || t > LexerATNSimulator$Companion_getInstance().MAX_DFA_EDGE) {
      return;
    }
    if (LexerATNSimulator$Companion_getInstance().debug) {
      println('EDGE ' + toString(p) + ' -> ' + toString(q) + ' upon ' + String.fromCharCode(toBoxedChar(toChar(t))));
    }
    ensureNotNull(p);
    if (ensureNotNull(p).edges == null) {
      ensureNotNull(p).edges = Kotlin.newArray(LexerATNSimulator$Companion_getInstance().MAX_DFA_EDGE - LexerATNSimulator$Companion_getInstance().MIN_DFA_EDGE + 1 | 0, null);
    }
    ensureNotNull(ensureNotNull(p).edges)[t - LexerATNSimulator$Companion_getInstance().MIN_DFA_EDGE | 0] = q;
  };
  LexerATNSimulator.prototype.addDFAState_0 = function (configs) {
    var tmp$, tmp$_0;
    assert(!configs.hasSemanticContext);
    var proposed = DFAState_init_1(configs);
    var firstConfigWithRuleStopState = null;
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (Kotlin.isType(c.state, RuleStopState)) {
        firstConfigWithRuleStopState = c;
        break;
      }
    }
    if (firstConfigWithRuleStopState != null) {
      proposed.isAcceptState = true;
      proposed.lexerActionExecutor = (Kotlin.isType(tmp$_0 = firstConfigWithRuleStopState, LexerATNConfig) ? tmp$_0 : throwCCE()).lexerActionExecutor;
      proposed.prediction = ensureNotNull(this.atn.ruleToTokenType)[ensureNotNull(firstConfigWithRuleStopState).state.ruleIndex];
    }
    var dfa = this.decisionToDFA[this.mode_0];
    ensureNotNull(dfa);
    var existing = dfa.states.get_11rb$(proposed);
    if (existing != null)
      return existing;
    proposed.stateNumber = ensureNotNull(ensureNotNull(dfa).states).size;
    configs.isReadonly = true;
    proposed.configs = configs;
    dfa.states.put_xwzc9p$(proposed, proposed);
    return proposed;
  };
  LexerATNSimulator.prototype.getDFA_za3lpa$ = function (mode) {
    return ensureNotNull(this.decisionToDFA[mode]);
  };
  LexerATNSimulator.prototype.getText_npe0fi$ = function (input) {
    return input.getText_yeqsgl$(Interval$Companion_getInstance().of_vux9f0$(this.startIndex_0, input.index() - 1 | 0));
  };
  LexerATNSimulator.prototype.consume_npe0fi$ = function (input) {
    var curChar = input.LA_za3lpa$(1);
    if (toChar(curChar) === 10) {
      this.line = this.line + 1 | 0;
      this.charPositionInLine = 0;
    } else {
      this.charPositionInLine = this.charPositionInLine + 1 | 0;
    }
    input.consume();
  };
  LexerATNSimulator.prototype.getTokenName_za3lpa$ = function (t) {
    return t === -1 ? 'EOF' : "'" + String.fromCharCode(toBoxedChar(toChar(t))) + "'";
  };
  function LexerATNSimulator$Companion() {
    LexerATNSimulator$Companion_instance = this;
    this.debug = false;
    this.dfa_debug = false;
    this.MIN_DFA_EDGE = 0;
    this.MAX_DFA_EDGE = 127;
  }
  LexerATNSimulator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LexerATNSimulator$Companion_instance = null;
  function LexerATNSimulator$Companion_getInstance() {
    if (LexerATNSimulator$Companion_instance === null) {
      new LexerATNSimulator$Companion();
    }
    return LexerATNSimulator$Companion_instance;
  }
  LexerATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerATNSimulator',
    interfaces: [ATNSimulator]
  };
  function LexerATNSimulator_init(atn, decisionToDFA, sharedContextCache, $this) {
    $this = $this || Object.create(LexerATNSimulator.prototype);
    LexerATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function LexerAction() {
  }
  LexerAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LexerAction',
    interfaces: []
  };
  function LexerActionExecutor(lexerActions) {
    LexerActionExecutor$Companion_getInstance();
    this.lexerActions = lexerActions;
    this.hashCode_0 = 0;
    var tmp$, tmp$_0;
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    tmp$ = this.lexerActions;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var lexerAction = tmp$[tmp$_0];
      hash = MurmurHash_getInstance().update_6t2rgq$(hash, lexerAction);
    }
    this.hashCode_0 = MurmurHash_getInstance().finish_vux9f0$(hash, this.lexerActions.length);
  }
  LexerActionExecutor.prototype.fixOffsetBeforeMatch_za3lpa$ = function (offset) {
    var tmp$, tmp$_0;
    var updatedLexerActions = null;
    tmp$ = this.lexerActions;
    for (var i = 0; i !== tmp$.length; ++i) {
      if (this.lexerActions[i].isPositionDependent && !Kotlin.isType(this.lexerActions[i], LexerIndexedCustomAction)) {
        if (updatedLexerActions == null) {
          updatedLexerActions = this.lexerActions.slice();
        }
        updatedLexerActions[i] = new LexerIndexedCustomAction(offset, this.lexerActions[i]);
      }
    }
    if (updatedLexerActions == null) {
      tmp$_0 = this;
    } else
      tmp$_0 = new LexerActionExecutor(updatedLexerActions);
    return tmp$_0;
  };
  LexerActionExecutor.prototype.execute_6l0lfc$ = function (lexer, input, startIndex) {
    var tmp$, tmp$_0;
    var requiresSeek = false;
    var stopIndex = input.index();
    try {
      tmp$ = this.lexerActions;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var lexerAction = tmp$[tmp$_0];
        var mutableLexerAction = lexerAction;
        if (Kotlin.isType(mutableLexerAction, LexerIndexedCustomAction)) {
          var offset = mutableLexerAction.offset;
          input.seek_za3lpa$(startIndex + offset | 0);
          mutableLexerAction = mutableLexerAction.action;
          requiresSeek = (startIndex + offset | 0) !== stopIndex;
        } else if (mutableLexerAction.isPositionDependent) {
          input.seek_za3lpa$(stopIndex);
          requiresSeek = false;
        }
        mutableLexerAction.execute_jiaafk$(lexer);
      }
    }finally {
      if (requiresSeek) {
        input.seek_za3lpa$(stopIndex);
      }
    }
  };
  LexerActionExecutor.prototype.hashCode = function () {
    return this.hashCode_0;
  };
  LexerActionExecutor.prototype.equals = function (other) {
    var tmp$;
    if (other === this) {
      return true;
    } else if (!Kotlin.isType(other, LexerActionExecutor)) {
      return false;
    }
    var other1 = (tmp$ = other) == null || Kotlin.isType(tmp$, LexerActionExecutor) ? tmp$ : throwCCE();
    return this.hashCode_0 === ensureNotNull(other1).hashCode_0 && contentEquals(this.lexerActions, other1.lexerActions);
  };
  function LexerActionExecutor$Companion() {
    LexerActionExecutor$Companion_instance = this;
  }
  LexerActionExecutor$Companion.prototype.append_yjss86$ = function (lexerActionExecutor, lexerAction) {
    if (lexerActionExecutor == null) {
      return new LexerActionExecutor([lexerAction]);
    }
    var lexerActions = copyOf(lexerActionExecutor.lexerActions, lexerActionExecutor.lexerActions.length + 1 | 0);
    lexerActions[get_lastIndex(lexerActions)] = lexerAction;
    return new LexerActionExecutor(copyToArray(filterNotNull(lexerActions)));
  };
  LexerActionExecutor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LexerActionExecutor$Companion_instance = null;
  function LexerActionExecutor$Companion_getInstance() {
    if (LexerActionExecutor$Companion_instance === null) {
      new LexerActionExecutor$Companion();
    }
    return LexerActionExecutor$Companion_instance;
  }
  LexerActionExecutor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerActionExecutor',
    interfaces: []
  };
  function LexerActionType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LexerActionType_initFields() {
    LexerActionType_initFields = function () {
    };
    LexerActionType$CHANNEL_instance = new LexerActionType('CHANNEL', 0);
    LexerActionType$CUSTOM_instance = new LexerActionType('CUSTOM', 1);
    LexerActionType$MODE_instance = new LexerActionType('MODE', 2);
    LexerActionType$MORE_instance = new LexerActionType('MORE', 3);
    LexerActionType$POP_MODE_instance = new LexerActionType('POP_MODE', 4);
    LexerActionType$PUSH_MODE_instance = new LexerActionType('PUSH_MODE', 5);
    LexerActionType$SKIP_instance = new LexerActionType('SKIP', 6);
    LexerActionType$TYPE_instance = new LexerActionType('TYPE', 7);
  }
  var LexerActionType$CHANNEL_instance;
  function LexerActionType$CHANNEL_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$CHANNEL_instance;
  }
  var LexerActionType$CUSTOM_instance;
  function LexerActionType$CUSTOM_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$CUSTOM_instance;
  }
  var LexerActionType$MODE_instance;
  function LexerActionType$MODE_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$MODE_instance;
  }
  var LexerActionType$MORE_instance;
  function LexerActionType$MORE_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$MORE_instance;
  }
  var LexerActionType$POP_MODE_instance;
  function LexerActionType$POP_MODE_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$POP_MODE_instance;
  }
  var LexerActionType$PUSH_MODE_instance;
  function LexerActionType$PUSH_MODE_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$PUSH_MODE_instance;
  }
  var LexerActionType$SKIP_instance;
  function LexerActionType$SKIP_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$SKIP_instance;
  }
  var LexerActionType$TYPE_instance;
  function LexerActionType$TYPE_getInstance() {
    LexerActionType_initFields();
    return LexerActionType$TYPE_instance;
  }
  LexerActionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerActionType',
    interfaces: [Enum]
  };
  function LexerActionType$values() {
    return [LexerActionType$CHANNEL_getInstance(), LexerActionType$CUSTOM_getInstance(), LexerActionType$MODE_getInstance(), LexerActionType$MORE_getInstance(), LexerActionType$POP_MODE_getInstance(), LexerActionType$PUSH_MODE_getInstance(), LexerActionType$SKIP_getInstance(), LexerActionType$TYPE_getInstance()];
  }
  LexerActionType.values = LexerActionType$values;
  function LexerActionType$valueOf(name) {
    switch (name) {
      case 'CHANNEL':
        return LexerActionType$CHANNEL_getInstance();
      case 'CUSTOM':
        return LexerActionType$CUSTOM_getInstance();
      case 'MODE':
        return LexerActionType$MODE_getInstance();
      case 'MORE':
        return LexerActionType$MORE_getInstance();
      case 'POP_MODE':
        return LexerActionType$POP_MODE_getInstance();
      case 'PUSH_MODE':
        return LexerActionType$PUSH_MODE_getInstance();
      case 'SKIP':
        return LexerActionType$SKIP_getInstance();
      case 'TYPE':
        return LexerActionType$TYPE_getInstance();
      default:
        throwISE('No enum constant org.antlr.v4.kotlinruntime.atn.LexerActionType.' + name);
    }
  }
  LexerActionType.valueOf_61zpoe$ = LexerActionType$valueOf;
  function LexerChannelAction(channel) {
    this.channel = channel;
  }
  Object.defineProperty(LexerChannelAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$CHANNEL_getInstance();
    }
  });
  Object.defineProperty(LexerChannelAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerChannelAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.channel = this.channel;
  };
  LexerChannelAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.channel);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 2);
  };
  LexerChannelAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerChannelAction)) {
      return false;
    }
    return this.channel === obj.channel;
  };
  LexerChannelAction.prototype.toString = function () {
    return 'channel(' + this.channel + ')';
  };
  LexerChannelAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerChannelAction',
    interfaces: [LexerAction]
  };
  function LexerCustomAction(ruleIndex, actionIndex) {
    this.ruleIndex = ruleIndex;
    this.actionIndex = actionIndex;
  }
  Object.defineProperty(LexerCustomAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$CUSTOM_getInstance();
    }
  });
  Object.defineProperty(LexerCustomAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  LexerCustomAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.action_63cxg8$(null, this.ruleIndex, this.actionIndex);
  };
  LexerCustomAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.ruleIndex);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionIndex);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 3);
  };
  LexerCustomAction.prototype.equals = function (obj) {
    var tmp$;
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerCustomAction)) {
      return false;
    }
    var other = (tmp$ = obj) == null || Kotlin.isType(tmp$, LexerCustomAction) ? tmp$ : throwCCE();
    return this.ruleIndex === ensureNotNull(other).ruleIndex && this.actionIndex === other.actionIndex;
  };
  LexerCustomAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerCustomAction',
    interfaces: [LexerAction]
  };
  function LexerIndexedCustomAction(offset, action) {
    this.offset = offset;
    this.action = action;
  }
  Object.defineProperty(LexerIndexedCustomAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return this.action.actionType;
    }
  });
  Object.defineProperty(LexerIndexedCustomAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  LexerIndexedCustomAction.prototype.execute_jiaafk$ = function (lexer) {
    this.action.execute_jiaafk$(lexer);
  };
  LexerIndexedCustomAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.offset);
    hash = MurmurHash_getInstance().update_6t2rgq$(hash, this.action);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 2);
  };
  LexerIndexedCustomAction.prototype.equals = function (obj) {
    var tmp$;
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerIndexedCustomAction)) {
      return false;
    }
    var other = (tmp$ = obj) == null || Kotlin.isType(tmp$, LexerIndexedCustomAction) ? tmp$ : throwCCE();
    return this.offset === ensureNotNull(other).offset && equals(this.action, other.action);
  };
  LexerIndexedCustomAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerIndexedCustomAction',
    interfaces: [LexerAction]
  };
  function LexerModeAction(mode) {
    this.mode = mode;
  }
  Object.defineProperty(LexerModeAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$MODE_getInstance();
    }
  });
  Object.defineProperty(LexerModeAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerModeAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.mode_za3lpa$(this.mode);
  };
  LexerModeAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.mode);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 2);
  };
  LexerModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerModeAction)) {
      return false;
    }
    return this.mode === obj.mode;
  };
  LexerModeAction.prototype.toString = function () {
    return 'mode(' + this.mode + ')';
  };
  LexerModeAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerModeAction',
    interfaces: [LexerAction]
  };
  function LexerMoreAction() {
    LexerMoreAction$Companion_getInstance();
  }
  Object.defineProperty(LexerMoreAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$MORE_getInstance();
    }
  });
  Object.defineProperty(LexerMoreAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerMoreAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.more();
  };
  LexerMoreAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 1);
  };
  LexerMoreAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerMoreAction.prototype.toString = function () {
    return 'more';
  };
  function LexerMoreAction$Companion() {
    LexerMoreAction$Companion_instance = this;
    this.INSTANCE = new LexerMoreAction();
  }
  LexerMoreAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LexerMoreAction$Companion_instance = null;
  function LexerMoreAction$Companion_getInstance() {
    if (LexerMoreAction$Companion_instance === null) {
      new LexerMoreAction$Companion();
    }
    return LexerMoreAction$Companion_instance;
  }
  LexerMoreAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerMoreAction',
    interfaces: [LexerAction]
  };
  function LexerPopModeAction() {
    LexerPopModeAction$Companion_getInstance();
  }
  Object.defineProperty(LexerPopModeAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$POP_MODE_getInstance();
    }
  });
  Object.defineProperty(LexerPopModeAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerPopModeAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.popMode();
  };
  LexerPopModeAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 1);
  };
  LexerPopModeAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerPopModeAction.prototype.toString = function () {
    return 'popMode';
  };
  function LexerPopModeAction$Companion() {
    LexerPopModeAction$Companion_instance = this;
    this.INSTANCE = new LexerPopModeAction();
  }
  LexerPopModeAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LexerPopModeAction$Companion_instance = null;
  function LexerPopModeAction$Companion_getInstance() {
    if (LexerPopModeAction$Companion_instance === null) {
      new LexerPopModeAction$Companion();
    }
    return LexerPopModeAction$Companion_instance;
  }
  LexerPopModeAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerPopModeAction',
    interfaces: [LexerAction]
  };
  function LexerPushModeAction(mode) {
    this.mode = mode;
  }
  Object.defineProperty(LexerPushModeAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$PUSH_MODE_getInstance();
    }
  });
  Object.defineProperty(LexerPushModeAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerPushModeAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.pushMode_za3lpa$(this.mode);
  };
  LexerPushModeAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.mode);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 2);
  };
  LexerPushModeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerPushModeAction)) {
      return false;
    }
    return this.mode === obj.mode;
  };
  LexerPushModeAction.prototype.toString = function () {
    return 'pushMode(' + this.mode + ')';
  };
  LexerPushModeAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerPushModeAction',
    interfaces: [LexerAction]
  };
  function LexerSkipAction() {
    LexerSkipAction$Companion_getInstance();
  }
  Object.defineProperty(LexerSkipAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$SKIP_getInstance();
    }
  });
  Object.defineProperty(LexerSkipAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerSkipAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.skip();
  };
  LexerSkipAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 1);
  };
  LexerSkipAction.prototype.equals = function (obj) {
    return obj === this;
  };
  LexerSkipAction.prototype.toString = function () {
    return 'skip';
  };
  function LexerSkipAction$Companion() {
    LexerSkipAction$Companion_instance = this;
    this.INSTANCE = new LexerSkipAction();
  }
  LexerSkipAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LexerSkipAction$Companion_instance = null;
  function LexerSkipAction$Companion_getInstance() {
    if (LexerSkipAction$Companion_instance === null) {
      new LexerSkipAction$Companion();
    }
    return LexerSkipAction$Companion_instance;
  }
  LexerSkipAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerSkipAction',
    interfaces: [LexerAction]
  };
  function LexerTypeAction(type) {
    this.type = type;
  }
  Object.defineProperty(LexerTypeAction.prototype, 'actionType', {
    configurable: true,
    get: function () {
      return LexerActionType$TYPE_getInstance();
    }
  });
  Object.defineProperty(LexerTypeAction.prototype, 'isPositionDependent', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  LexerTypeAction.prototype.execute_jiaafk$ = function (lexer) {
    lexer.type = this.type;
  };
  LexerTypeAction.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.actionType.ordinal);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, this.type);
    return MurmurHash_getInstance().finish_vux9f0$(hash, 2);
  };
  LexerTypeAction.prototype.equals = function (obj) {
    if (obj === this) {
      return true;
    } else if (!Kotlin.isType(obj, LexerTypeAction)) {
      return false;
    }
    return this.type === obj.type;
  };
  LexerTypeAction.prototype.toString = function () {
    return 'type(' + this.type + ')';
  };
  LexerTypeAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerTypeAction',
    interfaces: [LexerAction]
  };
  function LookaheadEventInfo(decision, configs, predictedAlt, input, startIndex, stopIndex, fullCtx) {
    DecisionEventInfo.call(this, decision, configs, input, startIndex, stopIndex, fullCtx);
    this.predictedAlt = predictedAlt;
  }
  LookaheadEventInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LookaheadEventInfo',
    interfaces: [DecisionEventInfo]
  };
  function LoopEndState() {
    ATNState.call(this);
    this.loopBackState = null;
  }
  Object.defineProperty(LoopEndState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().LOOP_END;
    }
  });
  LoopEndState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LoopEndState',
    interfaces: [ATNState]
  };
  function NotSetTransition(target, set) {
    SetTransition.call(this, target, set);
  }
  Object.defineProperty(NotSetTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().NOT_SET;
    }
  });
  NotSetTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return minVocabSymbol <= symbol && symbol <= maxVocabSymbol && !SetTransition.prototype.matches_qt1dr2$.call(this, symbol, minVocabSymbol, maxVocabSymbol);
  };
  NotSetTransition.prototype.toString = function () {
    var other = SetTransition.prototype.toString.call(this);
    return String.fromCharCode(126) + other;
  };
  NotSetTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotSetTransition',
    interfaces: [SetTransition]
  };
  function OrderedATNConfigSet() {
    ATNConfigSet.call(this);
    this.configLookup = new OrderedATNConfigSet$LexerConfigHashSet();
  }
  function OrderedATNConfigSet$LexerConfigHashSet() {
    ATNConfigSet$AbstractConfigHashSet.call(this, ObjectEqualityComparator$Companion_getInstance().INSTANCE);
  }
  OrderedATNConfigSet$LexerConfigHashSet.prototype.remove_11rb$ = function (element) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  OrderedATNConfigSet$LexerConfigHashSet.prototype.containsAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  OrderedATNConfigSet$LexerConfigHashSet.prototype.retainAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  OrderedATNConfigSet$LexerConfigHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerConfigHashSet',
    interfaces: [ATNConfigSet$AbstractConfigHashSet]
  };
  OrderedATNConfigSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderedATNConfigSet',
    interfaces: [ATNConfigSet]
  };
  function ParseInfo(atnSimulator) {
    this.atnSimulator_0 = atnSimulator;
  }
  Object.defineProperty(ParseInfo.prototype, 'decisionInfo', {
    configurable: true,
    get: function () {
      return ensureNotNull(this.atnSimulator_0.decisionInfo);
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'llDecisions', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var LL = ArrayList_init_0();
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        var fallBack = ensureNotNull(decisions[i]).LL_Fallback;
        if (fallBack.toNumber() > 0)
          LL.add_11rb$(i);
      }
      return LL;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalTimeInPrediction', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var t = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        t = t.add(ensureNotNull(decisions[i]).timeInPrediction);
      }
      return t;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalSLLLookaheadOps', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var k = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        k = k.add(ensureNotNull(decisions[i]).SLL_TotalLook);
      }
      return k;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalLLLookaheadOps', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var k = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        k = k.add(ensureNotNull(decisions[i]).LL_TotalLook);
      }
      return k;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalSLLATNLookaheadOps', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var k = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        k = k.add(ensureNotNull(decisions[i]).SLL_ATNTransitions);
      }
      return k;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalLLATNLookaheadOps', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var k = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        k = k.add(ensureNotNull(decisions[i]).LL_ATNTransitions);
      }
      return k;
    }
  });
  Object.defineProperty(ParseInfo.prototype, 'totalATNLookaheadOps', {
    configurable: true,
    get: function () {
      var tmp$;
      var decisions = this.atnSimulator_0.decisionInfo;
      var k = L0;
      tmp$ = ensureNotNull(decisions);
      for (var i = 0; i !== tmp$.length; ++i) {
        k = k.add(ensureNotNull(decisions[i]).SLL_ATNTransitions);
        k = k.add(ensureNotNull(decisions[i]).LL_ATNTransitions);
      }
      return k;
    }
  });
  ParseInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseInfo',
    interfaces: []
  };
  function ParserATNSimulator(parser, atn, decisionToDFA, sharedContextCache) {
    ParserATNSimulator$Companion_getInstance();
    ATNSimulator.call(this, atn, sharedContextCache);
    this.parser = parser;
    this.decisionToDFA = decisionToDFA;
    this.predictionMode = PredictionMode$LL_getInstance();
    this.mergeCache = null;
    this._input = null;
    this._startIndex = 0;
    this._outerContext = null;
    this._dfa = null;
  }
  ParserATNSimulator.prototype.reset = function () {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  ParserATNSimulator.prototype.clearDFA = function () {
    var tmp$;
    tmp$ = this.decisionToDFA;
    for (var d = 0; d !== tmp$.length; ++d) {
      this.decisionToDFA[d] = new DFA(ensureNotNull(this.atn.getDecisionState_za3lpa$(d)), d);
    }
  };
  ParserATNSimulator.prototype.adaptivePredict_4drauk$ = function (input, decision, outerContext) {
    var outerContext_0 = outerContext;
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().debug_list_atn_decisions) {
      println('adaptivePredict decision ' + toString(decision) + ' exec LA(1)==' + this.getLookaheadName_6y5fgd$(input) + ' line ' + toString(ensureNotNull(input.LT_za3lpa$(1)).line) + ':' + toString(ensureNotNull(input.LT_za3lpa$(1)).charPositionInLine));
    }
    this._input = input;
    this._startIndex = input.index();
    this._outerContext = outerContext_0;
    var dfa = this.decisionToDFA[decision];
    this._dfa = dfa;
    var m = input.mark();
    var index = this._startIndex;
    try {
      var s0;
      if (dfa.isPrecedenceDfa) {
        s0 = dfa.getPrecedenceStartState_za3lpa$(ensureNotNull(this.parser).precedence);
      } else {
        s0 = dfa.s0;
      }
      if (s0 == null) {
        if (outerContext_0 == null)
          outerContext_0 = EMPTY_RULECTX;
        if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().debug_list_atn_decisions) {
          outMessage('predictATN decision ' + toString(dfa.decision) + ' exec LA(1)==' + this.getLookaheadName_6y5fgd$(input) + ', outerContext=' + ensureNotNull(outerContext_0).toString_ldv8uu$(this.parser));
        }
        var fullCtx = false;
        var s0_closure = this.computeStartState_hz82bt$(dfa.atnStartState, EMPTY_RULECTX, fullCtx);
        if (dfa.isPrecedenceDfa) {
          ensureNotNull(dfa.s0).configs = s0_closure;
          s0_closure = this.applyPrecedenceFilter_5hido$(s0_closure);
          s0 = this.addDFAState_lasmuz$(dfa, DFAState_init_1(s0_closure));
          dfa.setPrecedenceStartState_a8bk1f$(ensureNotNull(this.parser).precedence, s0);
        } else {
          s0 = this.addDFAState_lasmuz$(dfa, DFAState_init_1(s0_closure));
          dfa.s0 = s0;
        }
      }
      var alt = this.execATN_e8ys3q$(dfa, s0, input, index, ensureNotNull(outerContext_0));
      if (ParserATNSimulator$Companion_getInstance().debug)
        outMessage('DFA after predictATN: ' + dfa.toString_hr977m$(ensureNotNull(this.parser).vocabulary));
      return alt;
    }finally {
      this.mergeCache = null;
      this._dfa = null;
      input.seek_za3lpa$(index);
      input.release_za3lpa$(m);
    }
  };
  ParserATNSimulator.prototype.execATN_e8ys3q$ = function (dfa, s0, input, startIndex, outerContext) {
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().debug_list_atn_decisions) {
      outMessage('execATN decision ' + toString(dfa.decision) + ' exec LA(1)==' + this.getLookaheadName_6y5fgd$(input) + ' line ' + toString(ensureNotNull(input.LT_za3lpa$(1)).line) + ':' + toString(ensureNotNull(input.LT_za3lpa$(1)).charPositionInLine));
    }
    var previousD = s0;
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('s0 = ' + toString(s0));
    var t = input.LA_za3lpa$(1);
    while (true) {
      var D = this.getExistingTargetState_un0zdb$(previousD, t);
      if (D == null) {
        D = this.computeTargetState_w6iyp5$(dfa, previousD, t);
      }
      if (D === ATNSimulator$Companion_getInstance().ERROR) {
        var e = this.noViableAlt_ybjr5t$(input, outerContext, ensureNotNull(previousD.configs), startIndex);
        input.seek_za3lpa$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_gje68g$(ensureNotNull(previousD.configs), outerContext);
        if (alt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
          return alt;
        }
        throw e;
      }
      if (ensureNotNull(D).requiresFullContext && this.predictionMode !== PredictionMode$SLL_getInstance()) {
        var conflictingAlts = ensureNotNull(ensureNotNull(D).configs).conflictingAlts;
        if (ensureNotNull(D).predicates != null) {
          if (ParserATNSimulator$Companion_getInstance().debug)
            println('DFA state has preds in DFA sim LL failover');
          var conflictIndex = input.index();
          if (conflictIndex !== startIndex) {
            input.seek_za3lpa$(startIndex);
          }
          conflictingAlts = this.evalSemanticContext_uy0wz1$(ensureNotNull(ensureNotNull(D).predicates), outerContext, true);
          if (conflictingAlts.cardinality() === 1) {
            if (ParserATNSimulator$Companion_getInstance().debug)
              println('Full LL avoided');
            return conflictingAlts.nextSetBit_za3lpa$(0);
          }
          if (conflictIndex !== startIndex) {
            input.seek_za3lpa$(conflictIndex);
          }
        }
        if (ParserATNSimulator$Companion_getInstance().dfa_debug)
          println('ctx sensitive state ' + outerContext + ' in ' + toString(D));
        var fullCtx = true;
        var s0_closure = this.computeStartState_hz82bt$(dfa.atnStartState, outerContext, fullCtx);
        this.reportAttemptingFullContext_ow7rzo$(dfa, ensureNotNull(conflictingAlts), ensureNotNull(ensureNotNull(D).configs), startIndex, input.index());
        return this.execATNWithFullContext_34wea6$(dfa, D, s0_closure, input, startIndex, outerContext);
      }
      if (ensureNotNull(D).isAcceptState) {
        if (ensureNotNull(D).predicates == null) {
          return ensureNotNull(D).prediction;
        }
        var stopIndex = input.index();
        input.seek_za3lpa$(startIndex);
        var alts = this.evalSemanticContext_uy0wz1$(ensureNotNull(ensureNotNull(D).predicates), outerContext, true);
        switch (alts.cardinality()) {
          case 0:
            throw this.noViableAlt_ybjr5t$(input, outerContext, ensureNotNull(ensureNotNull(D).configs), startIndex);
          case 1:
            return alts.nextSetBit_za3lpa$(0);
          default:
            this.reportAmbiguity_kviovu$(dfa, D, startIndex, stopIndex, false, alts, ensureNotNull(ensureNotNull(D).configs));
            return alts.nextSetBit_za3lpa$(0);
        }
      }
      previousD = D;
      if (t !== IntStream$Companion_getInstance().EOF) {
        input.consume();
        t = input.LA_za3lpa$(1);
      }
    }
  };
  ParserATNSimulator.prototype.getExistingTargetState_un0zdb$ = function (previousD, t) {
    var tmp$;
    var edges = previousD.edges;
    if (edges == null || (t + 1 | 0) < 0 || (t + 1 | 0) >= ensureNotNull(edges).length) {
      tmp$ = null;
    } else
      tmp$ = ensureNotNull(edges)[t + 1 | 0];
    return tmp$;
  };
  ParserATNSimulator.prototype.computeTargetState_w6iyp5$ = function (dfa, previousD, t) {
    var reach = this.computeReachSet_hzybmb$(ensureNotNull(previousD.configs), t, false);
    if (reach == null) {
      this.addDFAEdge_vntopm$(dfa, previousD, t, ATNSimulator$Companion_getInstance().ERROR);
      return ATNSimulator$Companion_getInstance().ERROR;
    }
    var D = DFAState_init_1(reach);
    var predictedAlt = ParserATNSimulator$Companion_getInstance().getUniqueAlt_0(ensureNotNull(reach));
    if (ParserATNSimulator$Companion_getInstance().debug) {
      var altSubSets = PredictionMode$Companion_getInstance().getConflictingAltSubsets_5hido$(ensureNotNull(reach));
      println('SLL altSubSets=' + toString(altSubSets) + ', configs=' + toString(reach) + ', predict=' + toString(predictedAlt) + ', allSubsetsConflict=' + toString(PredictionMode$Companion_getInstance().allSubsetsConflict_rxav07$(altSubSets)) + ', conflictingAlts=' + toString(this.getConflictingAlts_4q2tpx$(reach)));
    }
    if (predictedAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
      ensureNotNull(D).isAcceptState = true;
      ensureNotNull(ensureNotNull(D).configs).uniqueAlt = predictedAlt;
      ensureNotNull(D).prediction = predictedAlt;
    } else if (PredictionMode$Companion_getInstance().hasSLLConflictTerminatingPrediction_v4n2eh$(this.predictionMode, reach)) {
      ensureNotNull(ensureNotNull(D).configs).conflictingAlts = this.getConflictingAlts_4q2tpx$(reach);
      ensureNotNull(D).requiresFullContext = true;
      ensureNotNull(D).isAcceptState = true;
      ensureNotNull(D).prediction = ensureNotNull(ensureNotNull(ensureNotNull(D).configs).conflictingAlts).nextSetBit_za3lpa$(0);
    }
    if (ensureNotNull(D).isAcceptState && ensureNotNull(ensureNotNull(D).configs).hasSemanticContext) {
      this.predicateDFAState_vw4bkm$(D, this.atn.getDecisionState_za3lpa$(dfa.decision));
      if (ensureNotNull(D).predicates != null) {
        ensureNotNull(D).prediction = ATN$Companion_getInstance().INVALID_ALT_NUMBER;
      }
    }
    D = this.addDFAEdge_vntopm$(dfa, previousD, t, D);
    return D;
  };
  ParserATNSimulator.prototype.predicateDFAState_vw4bkm$ = function (dfaState, decisionState) {
    var nalts = ensureNotNull(decisionState).numberOfTransitions;
    var altsToCollectPredsFrom = this.getConflictingAltsOrUniqueAlt_5hido$(ensureNotNull(dfaState.configs));
    var altToPred = this.getPredsForAmbigAlts_agq5f2$(altsToCollectPredsFrom, ensureNotNull(dfaState.configs), nalts);
    if (altToPred != null) {
      dfaState.predicates = this.getPredicatePredictions_v0nlbs$(altsToCollectPredsFrom, altToPred);
      dfaState.prediction = ATN$Companion_getInstance().INVALID_ALT_NUMBER;
    } else {
      dfaState.prediction = altsToCollectPredsFrom.nextSetBit_za3lpa$(0);
    }
  };
  ParserATNSimulator.prototype.execATNWithFullContext_34wea6$ = function (dfa, D, s0, input, startIndex, outerContext) {
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().debug_list_atn_decisions) {
      println('execATNWithFullContext ' + toString(s0));
    }
    var fullCtx = true;
    var foundExactAmbig = false;
    var reach = null;
    var previous = s0;
    input.seek_za3lpa$(startIndex);
    var t = input.LA_za3lpa$(1);
    var predictedAlt;
    while (true) {
      reach = this.computeReachSet_hzybmb$(previous, t, fullCtx);
      if (reach == null) {
        var e = this.noViableAlt_ybjr5t$(input, outerContext, previous, startIndex);
        input.seek_za3lpa$(startIndex);
        var alt = this.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_gje68g$(previous, outerContext);
        if (alt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
          return alt;
        }
        throw e;
      }
      var altSubSets = PredictionMode$Companion_getInstance().getConflictingAltSubsets_5hido$(ensureNotNull(reach));
      if (ParserATNSimulator$Companion_getInstance().debug) {
        println('LL altSubSets=' + toString(altSubSets) + ', predict=' + toString(PredictionMode$Companion_getInstance().getUniqueAlt_rxav07$(altSubSets)) + ', resolvesToJustOneViableAlt=' + toString(PredictionMode$Companion_getInstance().resolvesToJustOneViableAlt_rxav07$(altSubSets)));
      }
      ensureNotNull(reach).uniqueAlt = ParserATNSimulator$Companion_getInstance().getUniqueAlt_0(ensureNotNull(reach));
      if (ensureNotNull(reach).uniqueAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
        predictedAlt = ensureNotNull(reach).uniqueAlt;
        break;
      }
      if (this.predictionMode !== PredictionMode$LL_EXACT_AMBIG_DETECTION_getInstance()) {
        predictedAlt = PredictionMode$Companion_getInstance().resolvesToJustOneViableAlt_rxav07$(altSubSets);
        if (predictedAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
          break;
        }
      } else {
        if (PredictionMode$Companion_getInstance().allSubsetsConflict_rxav07$(altSubSets) && PredictionMode$Companion_getInstance().allSubsetsEqual_rxav07$(altSubSets)) {
          foundExactAmbig = true;
          predictedAlt = PredictionMode$Companion_getInstance().getSingleViableAlt_rxav07$(altSubSets);
          break;
        }
      }
      previous = reach;
      if (t !== IntStream$Companion_getInstance().EOF) {
        input.consume();
        t = input.LA_za3lpa$(1);
      }
    }
    if (ensureNotNull(reach).uniqueAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
      this.reportContextSensitivity_5vghnm$(dfa, predictedAlt, reach, startIndex, input.index());
      return predictedAlt;
    }
    this.reportAmbiguity_kviovu$(dfa, D, startIndex, input.index(), foundExactAmbig, ensureNotNull(reach).alts, reach);
    return predictedAlt;
  };
  ParserATNSimulator.prototype.computeReachSet_hzybmb$ = function (closure, t, fullCtx) {
    var tmp$, tmp$_0, tmp$_1;
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('in computeReachSet, starting closure: ' + toString(closure));
    if (this.mergeCache == null) {
      this.mergeCache = new DoubleKeyMap();
    }
    var intermediate = new ATNConfigSet(fullCtx);
    var skippedStopStates = null;
    tmp$ = closure.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (ParserATNSimulator$Companion_getInstance().debug)
        println('testing ' + this.getTokenName_za3lpa$(t) + ' at ' + c.toString());
      if (Kotlin.isType(c.state, RuleStopState)) {
        assert(ensureNotNull(c.context).isEmpty);
        if (fullCtx || t === IntStream$Companion_getInstance().EOF) {
          if (skippedStopStates == null) {
            skippedStopStates = ArrayList_init_0();
          }
          skippedStopStates.add_11rb$(c);
        }
        continue;
      }
      var n = c.state.numberOfTransitions;
      for (var ti = 0; ti < n; ti++) {
        var trans = c.state.transition_za3lpa$(ti);
        var target = this.getReachableTarget_635hli$(trans, t);
        if (target != null) {
          intermediate.add_gfqbqc$(ATNConfig_init_3(c, target), this.mergeCache);
        }
      }
    }
    var reach = null;
    if (skippedStopStates == null && t !== Token$Companion_getInstance().EOF) {
      if (intermediate.size === 1) {
        reach = intermediate;
      } else if (ParserATNSimulator$Companion_getInstance().getUniqueAlt_0(intermediate) !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
        reach = intermediate;
      }
    }
    if (reach == null) {
      reach = new ATNConfigSet(fullCtx);
      var closureBusy = HashSet_init_0();
      var treatEofAsEpsilon = t === Token$Companion_getInstance().EOF;
      tmp$_0 = intermediate.iterator();
      while (tmp$_0.hasNext()) {
        var c_0 = tmp$_0.next();
        this.closure_o1ifp5$(c_0, reach, closureBusy, false, fullCtx, treatEofAsEpsilon);
      }
    }
    if (t === IntStream$Companion_getInstance().EOF) {
      reach = this.removeAllConfigsNotInRuleStopState_ox2scz$(reach, reach === intermediate);
    }
    if (skippedStopStates != null && (!fullCtx || !PredictionMode$Companion_getInstance().hasConfigInRuleStopState_5hido$(ensureNotNull(reach)))) {
      assert(!skippedStopStates.isEmpty());
      tmp$_1 = skippedStopStates.iterator();
      while (tmp$_1.hasNext()) {
        var c_1 = tmp$_1.next();
        ensureNotNull(reach).add_gfqbqc$(c_1, this.mergeCache);
      }
    }
    return ensureNotNull(reach).isEmpty() ? null : reach;
  };
  ParserATNSimulator.prototype.removeAllConfigsNotInRuleStopState_ox2scz$ = function (configs, lookToEndOfRule) {
    var tmp$;
    if (PredictionMode$Companion_getInstance().allConfigsInRuleStopStates_5hido$(configs)) {
      return configs;
    }
    var result = new ATNConfigSet(configs.fullCtx);
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      if (Kotlin.isType(config.state, RuleStopState)) {
        result.add_gfqbqc$(config, this.mergeCache);
        continue;
      }
      if (lookToEndOfRule && config.state.onlyHasEpsilonTransitions()) {
        var nextTokens = this.atn.nextTokens_1vr0xx$(config.state);
        if (ensureNotNull(nextTokens).contains_za3lpa$(Token$Companion_getInstance().EPSILON)) {
          var endOfRuleState = ensureNotNull(this.atn.ruleToStopState)[config.state.ruleIndex];
          result.add_gfqbqc$(ATNConfig_init_3(config, ensureNotNull(endOfRuleState)), this.mergeCache);
        }
      }
    }
    return result;
  };
  ParserATNSimulator.prototype.computeStartState_hz82bt$ = function (p, ctx, fullCtx) {
    var tmp$;
    var initialContext = PredictionContext$Companion_getInstance().fromRuleContext_6188bs$(this.atn, ctx);
    var configs = new ATNConfigSet(fullCtx);
    tmp$ = p.numberOfTransitions;
    for (var i = 0; i < tmp$; i++) {
      var target = p.transition_za3lpa$(i).target;
      var c = ATNConfig_init_0(ensureNotNull(target), i + 1 | 0, initialContext);
      var closureBusy = HashSet_init_0();
      this.closure_o1ifp5$(c, configs, closureBusy, true, fullCtx, false);
    }
    return configs;
  };
  ParserATNSimulator.prototype.applyPrecedenceFilter_5hido$ = function (configs) {
    var tmp$, tmp$_0, tmp$_1;
    var statesFromAlt1 = HashMap_init();
    var configSet = new ATNConfigSet(configs.fullCtx);
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      if (config.alt !== 1) {
        continue;
      }
      tmp$_0 = ensureNotNull(config.semanticContext).evalPrecedence_nz1zv5$(ensureNotNull(this.parser), ensureNotNull(this._outerContext));
      if (tmp$_0 == null) {
        continue;
      }
      var updatedContext = tmp$_0;
      statesFromAlt1.put_xwzc9p$(config.state.stateNumber, ensureNotNull(config.context));
      if (updatedContext !== config.semanticContext) {
        configSet.add_gfqbqc$(ATNConfig_init_2(config, updatedContext), this.mergeCache);
      } else {
        configSet.add_gfqbqc$(config, this.mergeCache);
      }
    }
    tmp$_1 = configs.iterator();
    while (tmp$_1.hasNext()) {
      var config_0 = tmp$_1.next();
      if (config_0.alt === 1) {
        continue;
      }
      if (!config_0.isPrecedenceFilterSuppressed) {
        var context = statesFromAlt1.get_11rb$(config_0.state.stateNumber);
        if (context != null && equals(context, config_0.context)) {
          continue;
        }
      }
      configSet.add_gfqbqc$(config_0, this.mergeCache);
    }
    return configSet;
  };
  ParserATNSimulator.prototype.getReachableTarget_635hli$ = function (trans, ttype) {
    var tmp$;
    if (trans.matches_qt1dr2$(ttype, 0, this.atn.maxTokenType)) {
      tmp$ = trans.target;
    } else
      tmp$ = null;
    return tmp$;
  };
  ParserATNSimulator.prototype.getPredsForAmbigAlts_agq5f2$ = function (ambigAlts, configs, nalts) {
    var tmp$;
    var altToPred = Kotlin.newArray(nalts + 1 | 0, null);
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (ambigAlts.get_za3lpa$(c.alt)) {
        ensureNotNull(altToPred)[c.alt] = SemanticContext$Companion_getInstance().or_njoihq$(ensureNotNull(altToPred)[c.alt], c.semanticContext);
      }
    }
    var nPredAlts = 0;
    for (var i = 1; i <= nalts; i++) {
      if (ensureNotNull(altToPred)[i] == null) {
        altToPred[i] = SemanticContext$Companion_getInstance().NONE;
      } else if (altToPred[i] !== SemanticContext$Companion_getInstance().NONE) {
        nPredAlts = nPredAlts + 1 | 0;
      }
    }
    if (nPredAlts === 0)
      altToPred = null;
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('getPredsForAmbigAlts result ' + joinToString_0(ensureNotNull(altToPred)));
    return altToPred;
  };
  ParserATNSimulator.prototype.getPredicatePredictions_v0nlbs$ = function (ambigAlts, altToPred) {
    var tmp$;
    var pairs = ArrayList_init_0();
    var containsPredicate = false;
    for (var i = 1; i < altToPred.length; i++) {
      var pred = altToPred[i];
      assert(pred != null);
      if (ambigAlts != null && ambigAlts.get_za3lpa$(i)) {
        pairs.add_11rb$(new DFAState$PredPrediction(ensureNotNull(pred), i));
      }
      if (pred !== SemanticContext$Companion_getInstance().NONE)
        containsPredicate = true;
    }
    if (!containsPredicate) {
      tmp$ = null;
    } else {
      tmp$ = copyToArray(pairs);
    }
    return tmp$;
  };
  ParserATNSimulator.prototype.getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule_gje68g$ = function (configs, outerContext) {
    var sets = this.splitAccordingToSemanticValidity_gje68g$(configs, outerContext);
    var semValidConfigs = sets.first;
    var semInvalidConfigs = sets.second;
    var alt = this.getAltThatFinishedDecisionEntryRule_5hido$(ensureNotNull(semValidConfigs));
    if (alt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
      return alt;
    }
    if (ensureNotNull(semInvalidConfigs).size > 0) {
      alt = this.getAltThatFinishedDecisionEntryRule_5hido$(ensureNotNull(semInvalidConfigs));
      if (alt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
        return alt;
      }
    }
    return ATN$Companion_getInstance().INVALID_ALT_NUMBER;
  };
  ParserATNSimulator.prototype.getAltThatFinishedDecisionEntryRule_5hido$ = function (configs) {
    var tmp$;
    var alts = IntervalSet_init_1(new Int32Array([]));
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (c.outerContextDepth > 0 || (Kotlin.isType(c.state, RuleStopState) && ensureNotNull(c.context).hasEmptyPath())) {
        alts.add_za3lpa$(c.alt);
      }
    }
    return alts.size() === 0 ? ATN$Companion_getInstance().INVALID_ALT_NUMBER : alts.minElement;
  };
  ParserATNSimulator.prototype.splitAccordingToSemanticValidity_gje68g$ = function (configs, outerContext) {
    var tmp$;
    var succeeded = new ATNConfigSet(configs.fullCtx);
    var failed = new ATNConfigSet(configs.fullCtx);
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (c.semanticContext !== SemanticContext$Companion_getInstance().NONE) {
        var predicateEvaluationResult = this.evalSemanticContext_uo144n$(c.semanticContext, outerContext, c.alt, configs.fullCtx);
        if (predicateEvaluationResult) {
          succeeded.add_kc35f6$(c);
        } else {
          failed.add_kc35f6$(c);
        }
      } else {
        succeeded.add_kc35f6$(c);
      }
    }
    return new Pair(succeeded, failed);
  };
  ParserATNSimulator.prototype.evalSemanticContext_uy0wz1$ = function (predPredictions, outerContext, complete) {
    var tmp$;
    var predictions = BitSet_init();
    for (tmp$ = 0; tmp$ !== predPredictions.length; ++tmp$) {
      var pair = predPredictions[tmp$];
      if (ensureNotNull(pair).pred === SemanticContext$Companion_getInstance().NONE) {
        predictions.set_za3lpa$(ensureNotNull(ensureNotNull(pair).alt));
        if (!complete) {
          break;
        }
        continue;
      }
      var fullCtx = false;
      var predicateEvaluationResult = this.evalSemanticContext_uo144n$(ensureNotNull(pair).pred, outerContext, pair.alt, fullCtx);
      if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().dfa_debug) {
        println('eval pred ' + toString(pair) + '=' + predicateEvaluationResult);
      }
      if (predicateEvaluationResult) {
        if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().dfa_debug)
          outMessage('PREDICT ' + toString(pair.alt));
        predictions.set_za3lpa$(pair.alt);
        if (!complete) {
          break;
        }
      }
    }
    return predictions;
  };
  ParserATNSimulator.prototype.evalSemanticContext_uo144n$ = function (pred, parserCallStack, alt, fullCtx) {
    return ensureNotNull(pred).eval_nz1zv5$(ensureNotNull(this.parser), ensureNotNull(parserCallStack));
  };
  ParserATNSimulator.prototype.closure_o1ifp5$ = function (config, configs, closureBusy, collectPredicates, fullCtx, treatEofAsEpsilon) {
    var initialDepth = 0;
    this.closureCheckingStopState_xdzxvd$(config, configs, closureBusy, collectPredicates, fullCtx, initialDepth, treatEofAsEpsilon);
    assert(!fullCtx || !configs.dipsIntoOuterContext);
  };
  ParserATNSimulator.prototype.closureCheckingStopState_xdzxvd$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var tmp$;
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('closure(' + config.toString_zg1gca$(this.parser, true) + ')');
    if (Kotlin.isType(config.state, RuleStopState)) {
      if (!ensureNotNull(config.context).isEmpty) {
        tmp$ = ensureNotNull(config.context).size();
        for (var i = 0; i < tmp$; i++) {
          if (ensureNotNull(config.context).getReturnState_za3lpa$(i) === PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE) {
            if (fullCtx) {
              configs.add_gfqbqc$(ATNConfig_init_3(config, config.state, PredictionContext$Companion_getInstance().EMPTY), this.mergeCache);
              continue;
            } else {
              if (ParserATNSimulator$Companion_getInstance().debug)
                println('FALLING off rule ' + this.getRuleName_za3lpa$(config.state.ruleIndex));
              this.closure__xdzxvd$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
            }
            continue;
          }
          var returnState = this.atn.states.get_za3lpa$(ensureNotNull(config.context).getReturnState_za3lpa$(i));
          var newContext = ensureNotNull(config.context).getParent_za3lpa$(i);
          var c = ATNConfig_init_0(ensureNotNull(returnState), config.alt, ensureNotNull(newContext), ensureNotNull(config.semanticContext));
          c.reachesIntoOuterContext = config.reachesIntoOuterContext;
          assert(depth > -2147483648);
          this.closureCheckingStopState_xdzxvd$(c, configs, closureBusy, collectPredicates, fullCtx, depth - 1 | 0, treatEofAsEpsilon);
        }
        return;
      } else if (fullCtx) {
        configs.add_gfqbqc$(config, this.mergeCache);
        return;
      } else {
        if (ParserATNSimulator$Companion_getInstance().debug)
          println('FALLING off rule ' + this.getRuleName_za3lpa$(config.state.ruleIndex));
      }
    }
    this.closure__xdzxvd$(config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon);
  };
  ParserATNSimulator.prototype.closure__xdzxvd$ = function (config, configs, closureBusy, collectPredicates, fullCtx, depth, treatEofAsEpsilon) {
    var tmp$, tmp$_0;
    var p = config.state;
    if (!p.onlyHasEpsilonTransitions()) {
      configs.add_gfqbqc$(config, this.mergeCache);
    }
    tmp$ = p.numberOfTransitions;
    for (var i = 0; i < tmp$; i++) {
      if (i === 0 && this.canDropLoopEntryEdgeInLeftRecursiveRule_kc35f6$(config))
        continue;
      var t = p.transition_za3lpa$(i);
      var continueCollecting = !Kotlin.isType(t, ActionTransition) && collectPredicates;
      var c = this.getEpsilonTarget_lw9mey$(config, t, continueCollecting, depth === 0, fullCtx, treatEofAsEpsilon);
      if (c != null) {
        var newDepth = depth;
        if (Kotlin.isType(config.state, RuleStopState)) {
          assert(!fullCtx);
          if (this._dfa != null && ensureNotNull(this._dfa).isPrecedenceDfa) {
            var outermostPrecedenceReturn = (Kotlin.isType(tmp$_0 = t, EpsilonTransition) ? tmp$_0 : throwCCE()).outermostPrecedenceReturn();
            if (outermostPrecedenceReturn === ensureNotNull(this._dfa).atnStartState.ruleIndex) {
              ensureNotNull(c).isPrecedenceFilterSuppressed = true;
            }
          }
          var tmp$_1;
          tmp$_1 = ensureNotNull(c);
          tmp$_1.reachesIntoOuterContext = tmp$_1.reachesIntoOuterContext + 1 | 0;
          if (!closureBusy.add_11rb$(c)) {
            continue;
          }
          configs.dipsIntoOuterContext = true;
          assert(newDepth > -2147483648);
          newDepth = newDepth - 1 | 0;
          if (ParserATNSimulator$Companion_getInstance().debug)
            println('dips into outer ctx: ' + toString(ensureNotNull(c)));
        } else {
          if (!t.isEpsilon && !closureBusy.add_11rb$(c)) {
            continue;
          }
          if (Kotlin.isType(t, RuleTransition)) {
            if (newDepth >= 0) {
              newDepth = newDepth + 1 | 0;
            }
          }
        }
        this.closureCheckingStopState_xdzxvd$(c, configs, closureBusy, continueCollecting, fullCtx, newDepth, treatEofAsEpsilon);
      }
    }
  };
  ParserATNSimulator.prototype.canDropLoopEntryEdgeInLeftRecursiveRule_kc35f6$ = function (config) {
    var tmp$, tmp$_0, tmp$_1;
    var p = config.state;
    if (p.stateType !== ATNState$Companion_getInstance().STAR_LOOP_ENTRY || !(Kotlin.isType(tmp$ = p, StarLoopEntryState) ? tmp$ : throwCCE()).isPrecedenceDecision || ensureNotNull(config.context).isEmpty || ensureNotNull(config.context).hasEmptyPath()) {
      return false;
    }
    var numCtxs = ensureNotNull(config.context).size();
    for (var i = 0; i < numCtxs; i++) {
      var returnState = this.atn.states.get_za3lpa$(ensureNotNull(config.context).getReturnState_za3lpa$(i));
      if (ensureNotNull(returnState).ruleIndex !== p.ruleIndex)
        return false;
    }
    var decisionStartState = Kotlin.isType(tmp$_0 = p.transition_za3lpa$(0).target, BlockStartState) ? tmp$_0 : throwCCE();
    var blockEndStateNum = ensureNotNull(decisionStartState.endState).stateNumber;
    var blockEndState = Kotlin.isType(tmp$_1 = this.atn.states.get_za3lpa$(blockEndStateNum), BlockEndState) ? tmp$_1 : throwCCE();
    for (var i_0 = 0; i_0 < numCtxs; i_0++) {
      var returnStateNumber = ensureNotNull(config.context).getReturnState_za3lpa$(i_0);
      var returnState_0 = this.atn.states.get_za3lpa$(returnStateNumber);
      if (ensureNotNull(returnState_0).numberOfTransitions !== 1 || !returnState_0.transition_za3lpa$(0).isEpsilon) {
        return false;
      }
      var returnStateTarget = ensureNotNull(returnState_0).transition_za3lpa$(0).target;
      if (returnState_0.stateType === ATNState$Companion_getInstance().BLOCK_END && returnStateTarget === p) {
        continue;
      }
      if (returnState_0 === blockEndState) {
        continue;
      }
      if (returnStateTarget === blockEndState) {
        continue;
      }
      if (ensureNotNull(returnStateTarget).stateType === ATNState$Companion_getInstance().BLOCK_END && returnStateTarget.numberOfTransitions === 1 && returnStateTarget.transition_za3lpa$(0).isEpsilon && returnStateTarget.transition_za3lpa$(0).target === p) {
        continue;
      }
      return false;
    }
    return true;
  };
  ParserATNSimulator.prototype.getRuleName_za3lpa$ = function (index) {
    return this.parser != null && index >= 0 ? ensureNotNull(ensureNotNull(this.parser).ruleNames)[index] : '<rule ' + index + '>';
  };
  ParserATNSimulator.prototype.getEpsilonTarget_lw9mey$ = function (config, t, collectPredicates, inContext, fullCtx, treatEofAsEpsilon) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    switch (t.serializationType) {
      case 3:
        return this.ruleTransition_9zma1q$(config, Kotlin.isType(tmp$ = t, RuleTransition) ? tmp$ : throwCCE());
      case 10:
        return this.precedenceTransition_vifz12$(config, Kotlin.isType(tmp$_0 = t, PrecedencePredicateTransition) ? tmp$_0 : throwCCE(), collectPredicates, inContext, fullCtx);
      case 4:
        return this.predTransition_my1p78$(config, Kotlin.isType(tmp$_1 = t, PredicateTransition) ? tmp$_1 : throwCCE(), collectPredicates, inContext, fullCtx);
      case 6:
        return this.actionTransition_wg1zq4$(config, Kotlin.isType(tmp$_2 = t, ActionTransition) ? tmp$_2 : throwCCE());
      case 1:
        return ATNConfig_init_3(config, ensureNotNull(t.target));
      case 5:
      case 2:
      case 7:
        if (treatEofAsEpsilon) {
          if (t.matches_qt1dr2$(Token$Companion_getInstance().EOF, 0, 1)) {
            return ATNConfig_init_3(config, ensureNotNull(t.target));
          }
        }

        return null;
      default:
        return null;
    }
  };
  ParserATNSimulator.prototype.actionTransition_wg1zq4$ = function (config, t) {
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('ACTION edge ' + toString(t.ruleIndex) + ':' + toString(t.actionIndex));
    return ATNConfig_init_3(config, ensureNotNull(t.target));
  };
  ParserATNSimulator.prototype.precedenceTransition_vifz12$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (ParserATNSimulator$Companion_getInstance().debug) {
      println('PRED (collectPredicates=' + toString(collectPredicates) + ') ' + toString(pt.precedence) + '>=_p' + ', ctx dependent=true');
      if (this.parser != null) {
        outMessage('context surrounding pred is ' + toString(ensureNotNull(this.parser).ruleInvocationStack));
      }
    }
    var c = null;
    if (collectPredicates && inContext) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input).index();
        ensureNotNull(this._input).seek_za3lpa$(this._startIndex);
        var predSucceeds = this.evalSemanticContext_uo144n$(pt.predicate, this._outerContext, config.alt, fullCtx);
        ensureNotNull(this._input).seek_za3lpa$(currentPosition);
        if (predSucceeds) {
          c = ATNConfig_init_3(config, ensureNotNull(pt.target));
        }
      } else {
        var newSemCtx = SemanticContext$Companion_getInstance().and_njoihq$(config.semanticContext, pt.predicate);
        c = ATNConfig_init_1(config, ensureNotNull(pt.target), ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig_init_3(config, ensureNotNull(pt.target));
    }
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('config from pred transition=' + toString(ensureNotNull(c)));
    return c;
  };
  ParserATNSimulator.prototype.predTransition_my1p78$ = function (config, pt, collectPredicates, inContext, fullCtx) {
    if (ParserATNSimulator$Companion_getInstance().debug) {
      println('PRED (collectPredicates=' + toString(collectPredicates) + ') ' + toString(pt.ruleIndex) + ':' + toString(pt.predIndex) + ', ctx dependent=' + toString(pt.isCtxDependent));
      if (this.parser != null) {
        outMessage('context surrounding pred is ' + toString(ensureNotNull(this.parser).ruleInvocationStack));
      }
    }
    var c = null;
    if (collectPredicates && (!pt.isCtxDependent || (pt.isCtxDependent && inContext))) {
      if (fullCtx) {
        var currentPosition = ensureNotNull(this._input).index();
        ensureNotNull(this._input).seek_za3lpa$(this._startIndex);
        var predSucceeds = this.evalSemanticContext_uo144n$(pt.predicate, this._outerContext, config.alt, fullCtx);
        ensureNotNull(this._input).seek_za3lpa$(currentPosition);
        if (predSucceeds) {
          c = ATNConfig_init_3(config, ensureNotNull(pt.target));
        }
      } else {
        var newSemCtx = SemanticContext$Companion_getInstance().and_njoihq$(config.semanticContext, pt.predicate);
        c = ATNConfig_init_1(config, ensureNotNull(pt.target), ensureNotNull(newSemCtx));
      }
    } else {
      c = ATNConfig_init_3(config, ensureNotNull(pt.target));
    }
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('config from pred transition=' + toString(ensureNotNull(c)));
    return c;
  };
  ParserATNSimulator.prototype.ruleTransition_9zma1q$ = function (config, t) {
    if (ParserATNSimulator$Companion_getInstance().debug) {
      println('CALL rule ' + this.getRuleName_za3lpa$(ensureNotNull(t.target).ruleIndex) + ', ctx=' + toString(config.context));
    }
    var returnState = t.followState;
    var newContext = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(config.context, returnState.stateNumber);
    return ATNConfig_init_3(config, ensureNotNull(t.target), newContext);
  };
  ParserATNSimulator.prototype.getConflictingAlts_4q2tpx$ = function (configs) {
    var altsets = PredictionMode$Companion_getInstance().getConflictingAltSubsets_5hido$(ensureNotNull(configs));
    return PredictionMode$Companion_getInstance().getAlts_rxav07$(altsets);
  };
  ParserATNSimulator.prototype.getConflictingAltsOrUniqueAlt_5hido$ = function (configs) {
    var conflictingAlts;
    if (configs.uniqueAlt !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
      conflictingAlts = BitSet_init();
      conflictingAlts.set_za3lpa$(configs.uniqueAlt);
    } else {
      conflictingAlts = configs.conflictingAlts;
    }
    return ensureNotNull(conflictingAlts);
  };
  ParserATNSimulator.prototype.getTokenName_za3lpa$ = function (t) {
    var tmp$;
    if (t === Token$Companion_getInstance().EOF) {
      return 'EOF';
    }
    var vocabulary = this.parser != null ? ensureNotNull(this.parser).vocabulary : VocabularyImpl$Companion_getInstance().EMPTY_VOCABULARY;
    var displayName = vocabulary.getDisplayName_za3lpa$(t);
    if (equals(displayName, t.toString())) {
      tmp$ = displayName;
    } else
      tmp$ = displayName + '<' + toString(t) + '>';
    return tmp$;
  };
  ParserATNSimulator.prototype.getLookaheadName_6y5fgd$ = function (input) {
    return this.getTokenName_za3lpa$(input.LA_za3lpa$(1));
  };
  ParserATNSimulator.prototype.dumpDeadEndConfigs_5mimk0$ = function (nvae) {
    var tmp$, tmp$_0, tmp$_1;
    errMessage('dead end configs: ');
    tmp$ = ensureNotNull(nvae.deadEndConfigs).iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      var trans = 'no edges';
      if (c.state.numberOfTransitions > 0) {
        var t = c.state.transition_za3lpa$(0);
        if (Kotlin.isType(t, AtomTransition)) {
          var at = Kotlin.isType(tmp$_0 = t, AtomTransition) ? tmp$_0 : throwCCE();
          trans = 'Atom ' + this.getTokenName_za3lpa$(at.label);
        } else if (Kotlin.isType(t, SetTransition)) {
          var st = Kotlin.isType(tmp$_1 = t, SetTransition) ? tmp$_1 : throwCCE();
          var not = Kotlin.isType(st, NotSetTransition);
          trans = (not ? '~' : '') + 'Set ' + st.set.toString();
        }
      }
      errMessage(c.toString_zg1gca$(this.parser, true) + ':' + trans);
    }
  };
  ParserATNSimulator.prototype.noViableAlt_ybjr5t$ = function (input, outerContext, configs, startIndex) {
    return new NoViableAltException(ensureNotNull(this.parser), input, input.get_za3lpa$(startIndex), input.LT_za3lpa$(1), configs, outerContext);
  };
  ParserATNSimulator.prototype.addDFAEdge_vntopm$ = function (dfa, from, t, to) {
    var to_0 = {v: to};
    if (ParserATNSimulator$Companion_getInstance().debug) {
      println('EDGE ' + toString(from) + ' -> ' + toString(to_0.v) + ' upon ' + this.getTokenName_za3lpa$(t));
    }
    if (to_0.v == null) {
      return null;
    }
    to_0.v = this.addDFAState_lasmuz$(dfa, to_0.v);
    if (from == null || t < -1 || t > this.atn.maxTokenType) {
      return to_0.v;
    }
    if (ensureNotNull(from).edges == null) {
      ensureNotNull(from).edges = Kotlin.newArray(this.atn.maxTokenType + 1 + 1 | 0, null);
    }
    ensureNotNull(ensureNotNull(from).edges)[t + 1 | 0] = to_0.v;
    if (ParserATNSimulator$Companion_getInstance().debug) {
      outMessage('DFA=\n' + dfa.toString_hr977m$(this.parser != null ? ensureNotNull(this.parser).vocabulary : VocabularyImpl$Companion_getInstance().EMPTY_VOCABULARY));
    }
    return to_0.v;
  };
  ParserATNSimulator.prototype.addDFAState_lasmuz$ = function (dfa, D) {
    if (D === ATNSimulator$Companion_getInstance().ERROR) {
      return D;
    }
    var existing = dfa.states.get_11rb$(D);
    if (existing != null)
      return existing;
    D.stateNumber = dfa.states.size;
    if (!ensureNotNull(D.configs).isReadonly) {
      ensureNotNull(D.configs).optimizeConfigs_jm5xc8$(this);
      ensureNotNull(D.configs).isReadonly = true;
    }
    dfa.states.put_xwzc9p$(D, D);
    if (ParserATNSimulator$Companion_getInstance().debug)
      println('adding new DFA state: ' + toString(D));
    return D;
  };
  ParserATNSimulator.prototype.reportAttemptingFullContext_ow7rzo$ = function (dfa, conflictingAlts, configs, startIndex, stopIndex) {
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().retry_debug) {
      var interval = Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex);
      outMessage('reportAttemptingFullContext decision=' + toString(dfa.decision) + ':' + toString(configs) + ', input=' + ensureNotNull(ensureNotNull(this.parser).tokenStream).getText_yeqsgl$(interval));
    }
    if (this.parser != null)
      ensureNotNull(this.parser).errorListenerDispatch.reportAttemptingFullContext_hwltrx$(this.parser, dfa, startIndex, stopIndex, conflictingAlts, configs);
  };
  ParserATNSimulator.prototype.reportContextSensitivity_5vghnm$ = function (dfa, prediction, configs, startIndex, stopIndex) {
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().retry_debug) {
      var interval = Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex);
      outMessage('reportContextSensitivity decision=' + toString(dfa.decision) + ':' + toString(configs) + ', input=' + ensureNotNull(ensureNotNull(this.parser).tokenStream).getText_yeqsgl$(interval));
    }
    if (this.parser != null)
      ensureNotNull(this.parser).errorListenerDispatch.reportContextSensitivity_9n96ep$(this.parser, dfa, startIndex, stopIndex, prediction, configs);
  };
  ParserATNSimulator.prototype.reportAmbiguity_kviovu$ = function (dfa, D, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (ParserATNSimulator$Companion_getInstance().debug || ParserATNSimulator$Companion_getInstance().retry_debug) {
      var interval = Interval$Companion_getInstance().of_vux9f0$(startIndex, stopIndex);
      println('reportAmbiguity ' + toString(ambigAlts) + ':' + toString(configs) + ', input=' + ensureNotNull(ensureNotNull(this.parser).tokenStream).getText_yeqsgl$(interval));
    }
    if (this.parser != null)
      ensureNotNull(this.parser).errorListenerDispatch.reportAmbiguity_c3gkca$(this.parser, dfa, startIndex, stopIndex, exact, ambigAlts, configs);
  };
  function ParserATNSimulator$Companion() {
    ParserATNSimulator$Companion_instance = this;
    this.debug = false;
    this.debug_list_atn_decisions = false;
    this.dfa_debug = false;
    this.retry_debug = false;
  }
  ParserATNSimulator$Companion.prototype.getUniqueAlt_0 = function (configs) {
    var tmp$;
    var alt = ATN$Companion_getInstance().INVALID_ALT_NUMBER;
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (alt === ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
        alt = c.alt;
      } else if (c.alt !== alt) {
        return ATN$Companion_getInstance().INVALID_ALT_NUMBER;
      }
    }
    return alt;
  };
  ParserATNSimulator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParserATNSimulator$Companion_instance = null;
  function ParserATNSimulator$Companion_getInstance() {
    if (ParserATNSimulator$Companion_instance === null) {
      new ParserATNSimulator$Companion();
    }
    return ParserATNSimulator$Companion_instance;
  }
  ParserATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParserATNSimulator',
    interfaces: [ATNSimulator]
  };
  function ParserATNSimulator_init(atn, decisionToDFA, sharedContextCache, $this) {
    $this = $this || Object.create(ParserATNSimulator.prototype);
    ParserATNSimulator.call($this, null, atn, decisionToDFA, sharedContextCache);
    return $this;
  }
  function PlusBlockStartState() {
    BlockStartState.call(this);
    this.loopBackState = null;
  }
  Object.defineProperty(PlusBlockStartState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().PLUS_BLOCK_START;
    }
  });
  PlusBlockStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlusBlockStartState',
    interfaces: [BlockStartState]
  };
  function PlusLoopbackState() {
    DecisionState.call(this);
  }
  Object.defineProperty(PlusLoopbackState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().PLUS_LOOP_BACK;
    }
  });
  PlusLoopbackState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlusLoopbackState',
    interfaces: [DecisionState]
  };
  function PrecedencePredicateTransition(target, precedence) {
    AbstractPredicateTransition.call(this, target);
    this.precedence = precedence;
  }
  Object.defineProperty(PrecedencePredicateTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().PRECEDENCE;
    }
  });
  Object.defineProperty(PrecedencePredicateTransition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  Object.defineProperty(PrecedencePredicateTransition.prototype, 'predicate', {
    configurable: true,
    get: function () {
      return new SemanticContext$PrecedencePredicate(this.precedence);
    }
  });
  PrecedencePredicateTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PrecedencePredicateTransition.prototype.toString = function () {
    return this.precedence.toString() + ' >= _p';
  };
  PrecedencePredicateTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrecedencePredicateTransition',
    interfaces: [AbstractPredicateTransition]
  };
  function PredicateEvalInfo(decision, input, startIndex, stopIndex, semctx, evalResult, predictedAlt, fullCtx) {
    DecisionEventInfo.call(this, decision, new ATNConfigSet(), input, startIndex, stopIndex, fullCtx);
    this.semctx = semctx;
    this.evalResult = evalResult;
    this.predictedAlt = predictedAlt;
  }
  PredicateEvalInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredicateEvalInfo',
    interfaces: [DecisionEventInfo]
  };
  function PredicateTransition(target, ruleIndex, predIndex, isCtxDependent) {
    AbstractPredicateTransition.call(this, target);
    this.ruleIndex = ruleIndex;
    this.predIndex = predIndex;
    this.isCtxDependent = isCtxDependent;
  }
  Object.defineProperty(PredicateTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().PREDICATE;
    }
  });
  Object.defineProperty(PredicateTransition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  Object.defineProperty(PredicateTransition.prototype, 'predicate', {
    configurable: true,
    get: function () {
      return SemanticContext$SemanticContext$Predicate_init_0(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }
  });
  PredicateTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  PredicateTransition.prototype.toString = function () {
    return 'pred_' + this.ruleIndex + ':' + this.predIndex;
  };
  PredicateTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredicateTransition',
    interfaces: [AbstractPredicateTransition]
  };
  function PredictionContext(cachedHashCode) {
    PredictionContext$Companion_getInstance();
    this.cachedHashCode = cachedHashCode;
  }
  Object.defineProperty(PredictionContext.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this === PredictionContext$Companion_getInstance().EMPTY;
    }
  });
  PredictionContext.prototype.hasEmptyPath = function () {
    return this.getReturnState_za3lpa$(this.size() - 1 | 0) === PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE;
  };
  PredictionContext.prototype.hashCode = function () {
    return this.cachedHashCode;
  };
  PredictionContext.prototype.toString_7hw5da$ = function (recog) {
    return this.toString();
  };
  PredictionContext.prototype.toStrings_pjdt30$ = function (recognizer, currentState) {
    return this.toStrings_h46lha$(recognizer, PredictionContext$Companion_getInstance().EMPTY, currentState);
  };
  PredictionContext.prototype.toStrings_h46lha$ = function (recognizer, stop, currentState) {
    var result = ArrayList_init_0();
    var perm = 0;
    outer: while (true) {
      var offset = 0;
      var last = true;
      var p = this;
      var stateNumber = currentState;
      var localBuffer = StringBuilder_init();
      localBuffer.append_pdl1vj$('[');
      while (!ensureNotNull(p).isEmpty && p !== stop) {
        var index = 0;
        if (p.size() > 0) {
          var bits = 1;
          while (1 << bits < p.size()) {
            bits = bits + 1 | 0;
          }
          var mask = (1 << bits) - 1 | 0;
          index = perm >> offset & mask;
          last = last & index >= (p.size() - 1 | 0);
          if (index >= p.size()) {
            perm = perm + 1 | 0;
            continue outer;
          }
          offset = offset + bits | 0;
        }
        if (recognizer != null) {
          if (localBuffer.length > 1) {
            localBuffer.append_s8itvh$(32);
          }
          var atn = recognizer.atn;
          var s = atn.states.get_za3lpa$(stateNumber);
          var ruleName = ensureNotNull(recognizer.ruleNames)[ensureNotNull(s).ruleIndex];
          localBuffer.append_pdl1vj$(ruleName);
        } else if (p.getReturnState_za3lpa$(index) !== PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE) {
          if (!p.isEmpty) {
            if (localBuffer.length > 1) {
              localBuffer.append_s8itvh$(32);
            }
            localBuffer.append_s8jyv4$(p.getReturnState_za3lpa$(index));
          }
        }
        stateNumber = p.getReturnState_za3lpa$(index);
        p = p.getParent_za3lpa$(index);
      }
      localBuffer.append_pdl1vj$(']');
      result.add_11rb$(localBuffer.toString());
      if (last) {
        break;
      }
      perm = perm + 1 | 0;
    }
    return copyToArray(result);
  };
  function PredictionContext$Companion() {
    PredictionContext$Companion_instance = this;
    this.EMPTY = new EmptyPredictionContext();
    this.EMPTY_RETURN_STATE = 2147483647;
    this.INITIAL_HASH_0 = 1;
  }
  PredictionContext$Companion.prototype.fromRuleContext_6188bs$ = function (atn, outerContext) {
    var tmp$;
    var outerContext1 = outerContext != null ? outerContext : EMPTY_RULECTX;
    if (outerContext1.readParent() == null || outerContext1 === EMPTY_RULECTX) {
      return this.EMPTY;
    }
    var parent = this.fromRuleContext_6188bs$(atn, outerContext1.readParent());
    var state = atn.states.get_za3lpa$(outerContext1.invokingState);
    var transition = Kotlin.isType(tmp$ = ensureNotNull(state).transition_za3lpa$(0), RuleTransition) ? tmp$ : throwCCE();
    return SingletonPredictionContext$Companion_getInstance().create_cj3mow$(parent, transition.followState.stateNumber);
  };
  PredictionContext$Companion.prototype.calculateEmptyHashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$(this.INITIAL_HASH_0);
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, 0);
    return hash;
  };
  PredictionContext$Companion.prototype.calculateHashCode_dhk4zn$ = function (parent, returnState) {
    var hash = MurmurHash_getInstance().initialize_za3lpa$(this.INITIAL_HASH_0);
    hash = MurmurHash_getInstance().update_6t2rgq$(hash, parent);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, returnState);
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, 2);
    return hash;
  };
  PredictionContext$Companion.prototype.calculateHashCode_aimbxn$ = function (parents, returnStates) {
    var tmp$, tmp$_0;
    var hash = MurmurHash_getInstance().initialize_za3lpa$(this.INITIAL_HASH_0);
    for (tmp$ = 0; tmp$ !== parents.length; ++tmp$) {
      var parent = parents[tmp$];
      hash = MurmurHash_getInstance().update_6t2rgq$(hash, parent);
    }
    for (tmp$_0 = 0; tmp$_0 !== returnStates.length; ++tmp$_0) {
      var returnState = returnStates[tmp$_0];
      hash = MurmurHash_getInstance().update_vux9f0$(hash, returnState);
    }
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, 2 * parents.length | 0);
    return hash;
  };
  PredictionContext$Companion.prototype.merge_atc7xh$ = function (a, b, rootIsWildcard, mergeCache) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var a1 = a;
    var b1 = b;
    assert(a1 != null && b1 != null);
    if (a1 === b1 || equals(a1, b1))
      return ensureNotNull(a1);
    if (Kotlin.isType(a1, SingletonPredictionContext) && Kotlin.isType(b1, SingletonPredictionContext)) {
      return this.mergeSingletons_g0jl1j$(Kotlin.isType(tmp$ = a1, SingletonPredictionContext) ? tmp$ : throwCCE(), Kotlin.isType(tmp$_0 = b1, SingletonPredictionContext) ? tmp$_0 : throwCCE(), rootIsWildcard, mergeCache);
    }
    if (rootIsWildcard) {
      if (Kotlin.isType(a1, EmptyPredictionContext))
        return a1;
      if (Kotlin.isType(b1, EmptyPredictionContext))
        return b1;
    }
    if (Kotlin.isType(a1, SingletonPredictionContext)) {
      a1 = ArrayPredictionContext_init(a1);
    }
    if (Kotlin.isType(b1, SingletonPredictionContext)) {
      b1 = ArrayPredictionContext_init(ensureNotNull((tmp$_1 = b1) == null || Kotlin.isType(tmp$_1, SingletonPredictionContext) ? tmp$_1 : throwCCE()));
    }
    return this.mergeArrays_6ie71n$(Kotlin.isType(tmp$_2 = a1, ArrayPredictionContext) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = b1, ArrayPredictionContext) ? tmp$_3 : throwCCE(), rootIsWildcard, mergeCache);
  };
  PredictionContext$Companion.prototype.mergeSingletons_g0jl1j$ = function (a, b, rootIsWildcard, mergeCache) {
    if (mergeCache != null) {
      var previous = mergeCache.get_xwzc9p$(a, b);
      if (previous != null)
        return previous;
      previous = mergeCache.get_xwzc9p$(b, a);
      if (previous != null)
        return previous;
    }
    var rootMerge = this.mergeRoot_3wfjjf$(a, b, rootIsWildcard);
    if (rootMerge != null) {
      mergeCache != null ? mergeCache.put_1llc0w$(a, b, rootMerge) : null;
      return rootMerge;
    }
    if (a.returnState === b.returnState) {
      var parent = this.merge_atc7xh$(a.parent, b.parent, rootIsWildcard, mergeCache);
      if (parent === a.parent)
        return a;
      if (parent === b.parent)
        return b;
      var c = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(parent, a.returnState);
      mergeCache != null ? mergeCache.put_1llc0w$(a, b, c) : null;
      return c;
    } else {
      var singleParent = null;
      if (a === b || (a.parent != null && equals(a.parent, b.parent))) {
        singleParent = a.parent;
      }
      if (singleParent != null) {
        var payloads = new Int32Array([a.returnState, b.returnState]);
        if (a.returnState > b.returnState) {
          payloads[0] = b.returnState;
          payloads[1] = a.returnState;
        }
        var parents = [singleParent, singleParent];
        var a_ = new ArrayPredictionContext(ensureNotNull(parents), payloads);
        if (mergeCache != null)
          ensureNotNull(mergeCache).put_1llc0w$(a, b, a_);
        return a_;
      }
      var payloads_0 = new Int32Array([a.returnState, b.returnState]);
      var parents_0 = [a.parent, b.parent];
      if (a.returnState > b.returnState) {
        payloads_0[0] = b.returnState;
        payloads_0[1] = a.returnState;
        parents_0 = [b.parent, a.parent];
      }
      var a__0 = new ArrayPredictionContext(parents_0, payloads_0);
      if (mergeCache != null)
        ensureNotNull(mergeCache).put_1llc0w$(a, b, a__0);
      return a__0;
    }
  };
  PredictionContext$Companion.prototype.mergeRoot_3wfjjf$ = function (a, b, rootIsWildcard) {
    if (rootIsWildcard) {
      if (a === this.EMPTY)
        return this.EMPTY;
      if (b === this.EMPTY)
        return this.EMPTY;
    } else {
      if (a === this.EMPTY && b === this.EMPTY)
        return this.EMPTY;
      if (a === this.EMPTY) {
        var payloads = new Int32Array([b.returnState, this.EMPTY_RETURN_STATE]);
        var parents = [b.parent, null];
        return new ArrayPredictionContext(parents, payloads);
      }
      if (b === this.EMPTY) {
        var payloads_0 = new Int32Array([a.returnState, this.EMPTY_RETURN_STATE]);
        var parents_0 = [a.parent, null];
        return new ArrayPredictionContext(parents_0, payloads_0);
      }
    }
    return null;
  };
  PredictionContext$Companion.prototype.mergeArrays_6ie71n$ = function (a, b, rootIsWildcard, mergeCache) {
    var tmp$, tmp$_0;
    if (mergeCache != null) {
      var previous = ensureNotNull(mergeCache).get_xwzc9p$(a, b);
      if (previous != null)
        return previous;
      previous = ensureNotNull(mergeCache).get_xwzc9p$(b, a);
      if (previous != null)
        return previous;
    }
    var i = 0;
    var j = 0;
    var k = 0;
    var mergedReturnStates = new Int32Array(ensureNotNull(a.returnStates).length + ensureNotNull(b.returnStates).length | 0);
    var mergedParents = Kotlin.newArray(ensureNotNull(a.returnStates).length + b.returnStates.length | 0, null);
    while (i < ensureNotNull(a.returnStates).length && j < ensureNotNull(b.returnStates).length) {
      var a_parent = ensureNotNull(a.parents)[i];
      var b_parent = ensureNotNull(b.parents)[j];
      if (a.returnStates[i] === ensureNotNull(b.returnStates)[j]) {
        var payload = a.returnStates[i];
        var both = payload === this.EMPTY_RETURN_STATE && a_parent == null && b_parent == null;
        var ax_ax = a_parent != null && b_parent != null && equals(a_parent, b_parent);
        if (both || ax_ax) {
          mergedParents[k] = a_parent;
          mergedReturnStates[k] = payload;
        } else {
          var mergedParent = this.merge_atc7xh$(a_parent, b_parent, rootIsWildcard, mergeCache);
          mergedParents[k] = mergedParent;
          mergedReturnStates[k] = payload;
        }
        i = i + 1 | 0;
        j = j + 1 | 0;
      } else if (a.returnStates[i] < b.returnStates[j]) {
        mergedParents[k] = a_parent;
        mergedReturnStates[k] = a.returnStates[i];
        i = i + 1 | 0;
      } else {
        mergedParents[k] = b_parent;
        mergedReturnStates[k] = b.returnStates[j];
        j = j + 1 | 0;
      }
      k = k + 1 | 0;
    }
    if (i < a.returnStates.length) {
      tmp$ = a.returnStates.length;
      for (var p = i; p < tmp$; p++) {
        mergedParents[k] = ensureNotNull(a.parents)[p];
        mergedReturnStates[k] = a.returnStates[p];
        k = k + 1 | 0;
      }
    } else {
      tmp$_0 = b.returnStates.length;
      for (var p_0 = j; p_0 < tmp$_0; p_0++) {
        mergedParents[k] = ensureNotNull(b.parents)[p_0];
        mergedReturnStates[k] = b.returnStates[p_0];
        k = k + 1 | 0;
      }
    }
    if (k < mergedParents.length) {
      if (k === 1) {
        var a_ = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(mergedParents[0], mergedReturnStates[0]);
        mergeCache != null ? mergeCache.put_1llc0w$(a, b, a_) : null;
        return a_;
      }
      mergedParents = copyOf(mergedParents, k);
      mergedReturnStates = copyOf_1(mergedReturnStates, k);
    }
    var M = new ArrayPredictionContext(mergedParents, mergedReturnStates);
    if (M != null ? M.equals(a) : null) {
      mergeCache != null ? mergeCache.put_1llc0w$(a, b, a) : null;
      return a;
    }
    if (M != null ? M.equals(b) : null) {
      mergeCache != null ? mergeCache.put_1llc0w$(a, b, b) : null;
      return b;
    }
    this.combineCommonParents_0(copyToArray(filterNotNull(mergedParents)));
    mergeCache != null ? mergeCache.put_1llc0w$(a, b, M) : null;
    return M;
  };
  PredictionContext$Companion.prototype.combineCommonParents_0 = function (parents) {
    var uniqueParents = HashMap_init();
    for (var p = 0; p !== parents.length; ++p) {
      var parent = parents[p];
      if (!uniqueParents.containsKey_11rb$(parent)) {
        uniqueParents.put_xwzc9p$(parent, parent);
      }
    }
    for (var p_0 = 0; p_0 !== parents.length; ++p_0) {
      parents[p_0] = ensureNotNull(uniqueParents.get_11rb$(parents[p_0]));
    }
  };
  PredictionContext$Companion.prototype.getCachedContext_2tzs0j$ = function (context, contextCache, visited) {
    var tmp$;
    if (context.isEmpty) {
      return context;
    }
    var existing = visited.get_11rb$(context);
    if (existing != null) {
      return existing;
    }
    existing = contextCache.get_3gc72n$(context);
    if (existing != null) {
      visited.put_xwzc9p$(context, existing);
      return existing;
    }
    var changed = false;
    var parents = Kotlin.newArray(context.size(), null);
    for (var i = 0; i !== parents.length; ++i) {
      var tmp$_0;
      var parent = this.getCachedContext_2tzs0j$(ensureNotNull(context.getParent_za3lpa$(i)), contextCache, visited);
      if (changed || parent !== context.getParent_za3lpa$(i)) {
        if (!changed) {
          parents = Kotlin.newArray(context.size(), null);
          tmp$_0 = context.size();
          for (var j = 0; j < tmp$_0; j++) {
            parents[j] = context.getParent_za3lpa$(j);
          }
          changed = true;
        }
        parents[i] = parent;
      }
    }
    if (!changed) {
      contextCache.add_3gc72n$(context);
      visited.put_xwzc9p$(context, context);
      return context;
    }
    var updated;
    if (parents.length === 0) {
      updated = this.EMPTY;
    } else if (parents.length === 1) {
      updated = SingletonPredictionContext$Companion_getInstance().create_cj3mow$(parents[0], context.getReturnState_za3lpa$(0));
    } else {
      var arrayPredictionContext = Kotlin.isType(tmp$ = context, ArrayPredictionContext) ? tmp$ : throwCCE();
      updated = new ArrayPredictionContext(parents, arrayPredictionContext.returnStates);
    }
    contextCache.add_3gc72n$(updated);
    visited.put_xwzc9p$(updated, updated);
    visited.put_xwzc9p$(context, updated);
    return updated;
  };
  PredictionContext$Companion.prototype.getAllContextNodes_3gc72n$ = function (context) {
    var nodes = ArrayList_init_0();
    var visited = new IdentityHashMap();
    this.getAllContextNodes__7mz6b3$(context, nodes, visited);
    return nodes;
  };
  PredictionContext$Companion.prototype.getAllContextNodes__7mz6b3$ = function (context, nodes, visited) {
    var tmp$;
    if (context == null || visited.containsKey_11rb$(context))
      return;
    visited.put_xwzc9p$(context, context);
    nodes.add_11rb$(context);
    tmp$ = context.size();
    for (var i = 0; i < tmp$; i++) {
      this.getAllContextNodes__7mz6b3$(context.getParent_za3lpa$(i), nodes, visited);
    }
  };
  PredictionContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PredictionContext$Companion_instance = null;
  function PredictionContext$Companion_getInstance() {
    if (PredictionContext$Companion_instance === null) {
      new PredictionContext$Companion();
    }
    return PredictionContext$Companion_instance;
  }
  PredictionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionContext',
    interfaces: []
  };
  function PredictionContextCache() {
    this.cache_0 = HashMap_init();
  }
  PredictionContextCache.prototype.add_3gc72n$ = function (ctx) {
    if (ctx === PredictionContext$Companion_getInstance().EMPTY)
      return PredictionContext$Companion_getInstance().EMPTY;
    var existing = this.cache_0.get_11rb$(ctx);
    if (existing != null) {
      return existing;
    }
    this.cache_0.put_xwzc9p$(ctx, ctx);
    return ctx;
  };
  PredictionContextCache.prototype.get_3gc72n$ = function (ctx) {
    return this.cache_0.get_11rb$(ctx);
  };
  PredictionContextCache.prototype.size = function () {
    return this.cache_0.size;
  };
  PredictionContextCache.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionContextCache',
    interfaces: []
  };
  function PredictionMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PredictionMode_initFields() {
    PredictionMode_initFields = function () {
    };
    PredictionMode$SLL_instance = new PredictionMode('SLL', 0);
    PredictionMode$LL_instance = new PredictionMode('LL', 1);
    PredictionMode$LL_EXACT_AMBIG_DETECTION_instance = new PredictionMode('LL_EXACT_AMBIG_DETECTION', 2);
    PredictionMode$Companion_getInstance();
  }
  var PredictionMode$SLL_instance;
  function PredictionMode$SLL_getInstance() {
    PredictionMode_initFields();
    return PredictionMode$SLL_instance;
  }
  var PredictionMode$LL_instance;
  function PredictionMode$LL_getInstance() {
    PredictionMode_initFields();
    return PredictionMode$LL_instance;
  }
  var PredictionMode$LL_EXACT_AMBIG_DETECTION_instance;
  function PredictionMode$LL_EXACT_AMBIG_DETECTION_getInstance() {
    PredictionMode_initFields();
    return PredictionMode$LL_EXACT_AMBIG_DETECTION_instance;
  }
  function PredictionMode$AltAndContextMap() {
    FlexibleHashMap.call(this, PredictionMode$AltAndContextConfigEqualityComparator$Companion_getInstance().INSTANCE);
  }
  PredictionMode$AltAndContextMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AltAndContextMap',
    interfaces: [FlexibleHashMap]
  };
  function PredictionMode$AltAndContextConfigEqualityComparator() {
    PredictionMode$AltAndContextConfigEqualityComparator$Companion_getInstance();
    AbstractEqualityComparator.call(this);
  }
  PredictionMode$AltAndContextConfigEqualityComparator.prototype.hashCode_11rb$ = function (o) {
    var hashCode = MurmurHash_getInstance().initialize_za3lpa$(7);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, o.state.stateNumber);
    hashCode = MurmurHash_getInstance().update_6t2rgq$(hashCode, o.context);
    hashCode = MurmurHash_getInstance().finish_vux9f0$(hashCode, 2);
    return hashCode;
  };
  PredictionMode$AltAndContextConfigEqualityComparator.prototype.equals_xwzc9q$ = function (a, b) {
    if (a === b)
      return true;
    return a == null || b == null ? false : ensureNotNull(a).state.stateNumber === ensureNotNull(b).state.stateNumber && equals(ensureNotNull(a).context, ensureNotNull(b).context);
  };
  function PredictionMode$AltAndContextConfigEqualityComparator$Companion() {
    PredictionMode$AltAndContextConfigEqualityComparator$Companion_instance = this;
    this.INSTANCE = new PredictionMode$AltAndContextConfigEqualityComparator();
  }
  PredictionMode$AltAndContextConfigEqualityComparator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PredictionMode$AltAndContextConfigEqualityComparator$Companion_instance = null;
  function PredictionMode$AltAndContextConfigEqualityComparator$Companion_getInstance() {
    if (PredictionMode$AltAndContextConfigEqualityComparator$Companion_instance === null) {
      new PredictionMode$AltAndContextConfigEqualityComparator$Companion();
    }
    return PredictionMode$AltAndContextConfigEqualityComparator$Companion_instance;
  }
  PredictionMode$AltAndContextConfigEqualityComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AltAndContextConfigEqualityComparator',
    interfaces: [AbstractEqualityComparator]
  };
  function PredictionMode$Companion() {
    PredictionMode$Companion_instance = this;
  }
  PredictionMode$Companion.prototype.hasSLLConflictTerminatingPrediction_v4n2eh$ = function (mode, configs) {
    var tmp$;
    var configs_0 = configs;
    if (this.allConfigsInRuleStopStates_5hido$(configs_0)) {
      return true;
    }
    if (mode === PredictionMode$SLL_getInstance()) {
      if (configs_0.hasSemanticContext) {
        var dup = new ATNConfigSet();
        tmp$ = configs_0.iterator();
        while (tmp$.hasNext()) {
          var c = tmp$.next();
          var mutableC = c;
          mutableC = ATNConfig_init_2(mutableC, SemanticContext$Companion_getInstance().NONE);
          dup.add_kc35f6$(mutableC);
        }
        configs_0 = dup;
      }
    }
    var altsets = this.getConflictingAltSubsets_5hido$(configs_0);
    return this.hasConflictingAltSet_rxav07$(altsets) && !this.hasStateAssociatedWithOneAlt_5hido$(configs_0);
  };
  PredictionMode$Companion.prototype.hasConfigInRuleStopState_5hido$ = function (configs) {
    var tmp$;
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (Kotlin.isType(c.state, RuleStopState)) {
        return true;
      }
    }
    return false;
  };
  PredictionMode$Companion.prototype.allConfigsInRuleStopStates_5hido$ = function (configs) {
    var tmp$;
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      if (!Kotlin.isType(config.state, RuleStopState)) {
        return false;
      }
    }
    return true;
  };
  PredictionMode$Companion.prototype.resolvesToJustOneViableAlt_rxav07$ = function (altsets) {
    return this.getSingleViableAlt_rxav07$(altsets);
  };
  PredictionMode$Companion.prototype.allSubsetsConflict_rxav07$ = function (altsets) {
    return !this.hasNonConflictingAltSet_rxav07$(altsets);
  };
  PredictionMode$Companion.prototype.hasNonConflictingAltSet_rxav07$ = function (altsets) {
    var tmp$;
    tmp$ = altsets.iterator();
    while (tmp$.hasNext()) {
      var alts = tmp$.next();
      if (alts.cardinality() === 1) {
        return true;
      }
    }
    return false;
  };
  PredictionMode$Companion.prototype.hasConflictingAltSet_rxav07$ = function (altsets) {
    var tmp$;
    tmp$ = altsets.iterator();
    while (tmp$.hasNext()) {
      var alts = tmp$.next();
      if (alts.cardinality() > 1) {
        return true;
      }
    }
    return false;
  };
  PredictionMode$Companion.prototype.allSubsetsEqual_rxav07$ = function (altsets) {
    var it = altsets.iterator();
    var first = it.next();
    while (it.hasNext()) {
      var next = it.next();
      if (!equals(next, first))
        return false;
    }
    return true;
  };
  PredictionMode$Companion.prototype.getUniqueAlt_rxav07$ = function (altsets) {
    var all = this.getAlts_rxav07$(altsets);
    return all.cardinality() === 1 ? all.nextSetBit_za3lpa$(0) : ATN$Companion_getInstance().INVALID_ALT_NUMBER;
  };
  PredictionMode$Companion.prototype.getAlts_rxav07$ = function (altsets) {
    var tmp$;
    var all = BitSet_init();
    tmp$ = altsets.iterator();
    while (tmp$.hasNext()) {
      var alts = tmp$.next();
      all.or_8s8j64$(alts);
    }
    return all;
  };
  PredictionMode$Companion.prototype.getAlts_5hido$ = function (configs) {
    var tmp$;
    var alts = BitSet_init();
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var config = tmp$.next();
      alts.set_za3lpa$(config.alt);
    }
    return alts;
  };
  PredictionMode$Companion.prototype.getConflictingAltSubsets_5hido$ = function (configs) {
    var tmp$;
    var configToAlts = new PredictionMode$AltAndContextMap();
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      var alts = configToAlts.get_11rb$(c);
      if (alts == null) {
        alts = BitSet_init();
        configToAlts.put_xwzc9p$(c, alts);
      }
      ensureNotNull(alts).set_za3lpa$(c.alt);
    }
    return configToAlts.values;
  };
  PredictionMode$Companion.prototype.getStateToAltMap_5hido$ = function (configs) {
    var tmp$;
    var m = HashMap_init();
    tmp$ = configs.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      var alts = m.get_11rb$(c.state);
      if (alts == null) {
        alts = BitSet_init();
        m.put_xwzc9p$(c.state, alts);
      }
      alts.set_za3lpa$(c.alt);
    }
    return m;
  };
  PredictionMode$Companion.prototype.hasStateAssociatedWithOneAlt_5hido$ = function (configs) {
    var tmp$;
    var x = this.getStateToAltMap_5hido$(configs);
    tmp$ = x.values.iterator();
    while (tmp$.hasNext()) {
      var alts = tmp$.next();
      if (alts.cardinality() === 1)
        return true;
    }
    return false;
  };
  PredictionMode$Companion.prototype.getSingleViableAlt_rxav07$ = function (altsets) {
    var tmp$;
    var viableAlts = BitSet_init();
    tmp$ = altsets.iterator();
    while (tmp$.hasNext()) {
      var alts = tmp$.next();
      var minAlt = alts.nextSetBit_za3lpa$(0);
      viableAlts.set_za3lpa$(minAlt);
      if (viableAlts.cardinality() > 1) {
        return ATN$Companion_getInstance().INVALID_ALT_NUMBER;
      }
    }
    return viableAlts.nextSetBit_za3lpa$(0);
  };
  PredictionMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PredictionMode$Companion_instance = null;
  function PredictionMode$Companion_getInstance() {
    PredictionMode_initFields();
    if (PredictionMode$Companion_instance === null) {
      new PredictionMode$Companion();
    }
    return PredictionMode$Companion_instance;
  }
  PredictionMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredictionMode',
    interfaces: [Enum]
  };
  function PredictionMode$values() {
    return [PredictionMode$SLL_getInstance(), PredictionMode$LL_getInstance(), PredictionMode$LL_EXACT_AMBIG_DETECTION_getInstance()];
  }
  PredictionMode.values = PredictionMode$values;
  function PredictionMode$valueOf(name) {
    switch (name) {
      case 'SLL':
        return PredictionMode$SLL_getInstance();
      case 'LL':
        return PredictionMode$LL_getInstance();
      case 'LL_EXACT_AMBIG_DETECTION':
        return PredictionMode$LL_EXACT_AMBIG_DETECTION_getInstance();
      default:
        throwISE('No enum constant org.antlr.v4.kotlinruntime.atn.PredictionMode.' + name);
    }
  }
  PredictionMode.valueOf_61zpoe$ = PredictionMode$valueOf;
  function ProfilingATNSimulator(parser) {
    ParserATNSimulator.call(this, parser, ensureNotNull(parser.interpreter).atn, ensureNotNull(parser.interpreter).decisionToDFA, ensureNotNull(ensureNotNull(parser.interpreter).sharedContextCache));
    this.decisionInfo = null;
  }
  ProfilingATNSimulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProfilingATNSimulator',
    interfaces: [ParserATNSimulator]
  };
  function RangeTransition(target, from, to) {
    Transition.call(this, target);
    this.from = from;
    this.to = to;
  }
  Object.defineProperty(RangeTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().RANGE;
    }
  });
  RangeTransition.prototype.accessLabel = function () {
    return IntervalSet$Companion_getInstance().of_vux9f0$(this.from, this.to);
  };
  RangeTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= this.from && symbol <= this.to;
  };
  RangeTransition.prototype.toString = function () {
    throw new NotImplementedError_init();
  };
  RangeTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeTransition',
    interfaces: [Transition]
  };
  function RuleStartState() {
    ATNState.call(this);
    this.stopState = null;
    this.isLeftRecursiveRule = false;
  }
  Object.defineProperty(RuleStartState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().RULE_START;
    }
  });
  RuleStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleStartState',
    interfaces: [ATNState]
  };
  function RuleStopState() {
    ATNState.call(this);
  }
  Object.defineProperty(RuleStopState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().RULE_STOP;
    }
  });
  RuleStopState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleStopState',
    interfaces: [ATNState]
  };
  function RuleTransition(ruleStart, ruleIndex, precedence, followState) {
    Transition.call(this, ruleStart);
    this.ruleIndex = ruleIndex;
    this.precedence = precedence;
    this.followState = followState;
  }
  Object.defineProperty(RuleTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().RULE;
    }
  });
  Object.defineProperty(RuleTransition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return true;
    }
  });
  RuleTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return false;
  };
  RuleTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleTransition',
    interfaces: [Transition]
  };
  function RuleTransition_init(ruleStart, ruleIndex, followState, $this) {
    $this = $this || Object.create(RuleTransition.prototype);
    RuleTransition.call($this, ruleStart, ruleIndex, 0, followState);
    return $this;
  }
  function SemanticContext() {
    SemanticContext$Companion_getInstance();
  }
  SemanticContext.prototype.evalPrecedence_nz1zv5$ = function (parser, parserCallStack) {
    return this;
  };
  function SemanticContext$Predicate() {
    this.ruleIndex = 0;
    this.predIndex = 0;
    this.isCtxDependent = false;
  }
  SemanticContext$Predicate.prototype.eval_nz1zv5$ = function (parser, parserCallStack) {
    var localctx = this.isCtxDependent ? parserCallStack : null;
    return parser.sempred_63cxg8$(ensureNotNull(localctx), this.ruleIndex, this.predIndex);
  };
  SemanticContext$Predicate.prototype.hashCode = function () {
    var hashCode = MurmurHash_getInstance().initialize_za3lpa$();
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.ruleIndex);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.predIndex);
    hashCode = MurmurHash_getInstance().update_vux9f0$(hashCode, this.isCtxDependent ? 1 : 0);
    hashCode = MurmurHash_getInstance().finish_vux9f0$(hashCode, 3);
    return hashCode;
  };
  SemanticContext$Predicate.prototype.equals = function (other) {
    if (!Kotlin.isType(other, SemanticContext$Predicate))
      return false;
    if (this === other)
      return true;
    return this.ruleIndex === other.ruleIndex && this.predIndex === other.predIndex && this.isCtxDependent === other.isCtxDependent;
  };
  SemanticContext$Predicate.prototype.toString = function () {
    return '{' + this.ruleIndex + ':' + this.predIndex + '}?';
  };
  SemanticContext$Predicate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Predicate',
    interfaces: [SemanticContext]
  };
  function SemanticContext$SemanticContext$Predicate_init($this) {
    $this = $this || Object.create(SemanticContext$Predicate.prototype);
    SemanticContext.call($this);
    SemanticContext$Predicate.call($this);
    $this.ruleIndex = -1;
    $this.predIndex = -1;
    $this.isCtxDependent = false;
    return $this;
  }
  function SemanticContext$SemanticContext$Predicate_init_0(ruleIndex, predIndex, isCtxDependent, $this) {
    $this = $this || Object.create(SemanticContext$Predicate.prototype);
    SemanticContext.call($this);
    SemanticContext$Predicate.call($this);
    $this.ruleIndex = ruleIndex;
    $this.predIndex = predIndex;
    $this.isCtxDependent = isCtxDependent;
    return $this;
  }
  function SemanticContext$PrecedencePredicate(precedence) {
    if (precedence === void 0)
      precedence = 0;
    SemanticContext.call(this);
    this.precedence = precedence;
  }
  SemanticContext$PrecedencePredicate.prototype.eval_nz1zv5$ = function (parser, parserCallStack) {
    return parser.precpred_efhjzr$(parserCallStack, this.precedence);
  };
  SemanticContext$PrecedencePredicate.prototype.evalPrecedence_nz1zv5$ = function (parser, parserCallStack) {
    var tmp$;
    if (parser.precpred_efhjzr$(parserCallStack, this.precedence)) {
      tmp$ = SemanticContext$Companion_getInstance().NONE;
    } else {
      tmp$ = null;
    }
    return tmp$;
  };
  SemanticContext$PrecedencePredicate.prototype.compareTo_11rb$ = function (other) {
    return this.precedence - other.precedence | 0;
  };
  SemanticContext$PrecedencePredicate.prototype.hashCode = function () {
    var hashCode = 1;
    hashCode = (31 * hashCode | 0) + this.precedence | 0;
    return hashCode;
  };
  SemanticContext$PrecedencePredicate.prototype.equals = function (other) {
    if (!Kotlin.isType(other, SemanticContext$PrecedencePredicate)) {
      return false;
    }
    if (this === other) {
      return true;
    }
    return this.precedence === other.precedence;
  };
  SemanticContext$PrecedencePredicate.prototype.toString = function () {
    return '{' + this.precedence + '>=prec}?';
  };
  SemanticContext$PrecedencePredicate.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrecedencePredicate',
    interfaces: [Comparable, SemanticContext]
  };
  function SemanticContext$Operator() {
    SemanticContext.call(this);
  }
  SemanticContext$Operator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Operator',
    interfaces: [SemanticContext]
  };
  function SemanticContext$AND(a, b) {
    SemanticContext$Operator.call(this);
    this.opnds = null;
    var operands = HashSet_init_0();
    if (Kotlin.isType(a, SemanticContext$AND))
      operands.addAll_brywnq$(toList_0(a.opnds));
    else
      operands.add_11rb$(a);
    if (Kotlin.isType(b, SemanticContext$AND))
      operands.addAll_brywnq$(toList_0(b.opnds));
    else
      operands.add_11rb$(b);
    var precedencePredicates = SemanticContext$Companion_getInstance().filterPrecedencePredicates_0(operands);
    if (!precedencePredicates.isEmpty()) {
      var reduced = Collections_getInstance().min_euev0d$(precedencePredicates);
      operands.add_11rb$(reduced);
    }
    this.opnds = copyToArray(operands);
  }
  Object.defineProperty(SemanticContext$AND.prototype, 'operands', {
    configurable: true,
    get: function () {
      return toList_0(this.opnds);
    }
  });
  SemanticContext$AND.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SemanticContext$AND))
      return false;
    return Arrays_getInstance().equals_hdevzo$(this.opnds, other.opnds);
  };
  SemanticContext$AND.prototype.hashCode = function () {
    throw new NotImplementedError_init();
  };
  SemanticContext$AND.prototype.eval_nz1zv5$ = function (parser, parserCallStack) {
    var tmp$, tmp$_0;
    tmp$ = this.opnds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var opnd = tmp$[tmp$_0];
      if (!opnd.eval_nz1zv5$(parser, parserCallStack))
        return false;
    }
    return true;
  };
  SemanticContext$AND.prototype.evalPrecedence_nz1zv5$ = function (parser, parserCallStack) {
    var tmp$, tmp$_0, tmp$_1;
    var differs = false;
    var operands = ArrayList_init_0();
    tmp$ = this.opnds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var context = tmp$[tmp$_0];
      var evaluated = context.evalPrecedence_nz1zv5$(parser, parserCallStack);
      differs = differs | evaluated !== context;
      if (evaluated == null) {
        return null;
      } else if (evaluated !== SemanticContext$Companion_getInstance().NONE) {
        operands.add_11rb$(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty()) {
      return SemanticContext$Companion_getInstance().NONE;
    }
    var result = operands.get_za3lpa$(0);
    tmp$_1 = operands.size;
    for (var i = 1; i < tmp$_1; i++) {
      result = SemanticContext$Companion_getInstance().and_njoihq$(result, operands.get_za3lpa$(i));
    }
    return result;
  };
  SemanticContext$AND.prototype.toString = function () {
    return joinToString_1(toList_0(this.opnds), '&&');
  };
  SemanticContext$AND.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AND',
    interfaces: [SemanticContext$Operator]
  };
  function SemanticContext$OR(a, b) {
    SemanticContext$Operator.call(this);
    this.opnds = null;
    var operands = HashSet_init_0();
    if (Kotlin.isType(a, SemanticContext$OR))
      operands.addAll_brywnq$(toList_0(a.opnds));
    else
      operands.add_11rb$(a);
    if (Kotlin.isType(b, SemanticContext$OR))
      operands.addAll_brywnq$(toList_0(b.opnds));
    else
      operands.add_11rb$(b);
    var precedencePredicates = SemanticContext$Companion_getInstance().filterPrecedencePredicates_0(operands);
    if (!precedencePredicates.isEmpty()) {
      var reduced = Collections_getInstance().max_euev0d$(precedencePredicates);
      operands.add_11rb$(reduced);
    }
    this.opnds = copyToArray(operands);
  }
  Object.defineProperty(SemanticContext$OR.prototype, 'operands', {
    configurable: true,
    get: function () {
      return toList_0(this.opnds);
    }
  });
  SemanticContext$OR.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SemanticContext$OR))
      return false;
    return Arrays_getInstance().equals_hdevzo$(this.opnds, other.opnds);
  };
  SemanticContext$OR.prototype.hashCode = function () {
    throw new NotImplementedError_init();
  };
  SemanticContext$OR.prototype.eval_nz1zv5$ = function (parser, parserCallStack) {
    var tmp$, tmp$_0;
    tmp$ = this.opnds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var opnd = tmp$[tmp$_0];
      if (opnd.eval_nz1zv5$(parser, parserCallStack))
        return true;
    }
    return false;
  };
  SemanticContext$OR.prototype.evalPrecedence_nz1zv5$ = function (parser, parserCallStack) {
    var tmp$, tmp$_0, tmp$_1;
    var differs = false;
    var operands = ArrayList_init_0();
    tmp$ = this.opnds;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var context = tmp$[tmp$_0];
      var evaluated = context.evalPrecedence_nz1zv5$(parser, parserCallStack);
      differs = differs | evaluated !== context;
      if (evaluated === SemanticContext$Companion_getInstance().NONE) {
        return SemanticContext$Companion_getInstance().NONE;
      } else if (evaluated != null) {
        operands.add_11rb$(evaluated);
      }
    }
    if (!differs) {
      return this;
    }
    if (operands.isEmpty()) {
      return null;
    }
    var result = operands.get_za3lpa$(0);
    tmp$_1 = operands.size;
    for (var i = 1; i < tmp$_1; i++) {
      result = SemanticContext$Companion_getInstance().or_njoihq$(result, operands.get_za3lpa$(i));
    }
    return result;
  };
  SemanticContext$OR.prototype.toString = function () {
    return joinToString_1(toList_0(this.opnds), '||');
  };
  SemanticContext$OR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OR',
    interfaces: [SemanticContext$Operator]
  };
  function SemanticContext$Companion() {
    SemanticContext$Companion_instance = this;
    this.NONE = SemanticContext$SemanticContext$Predicate_init();
  }
  SemanticContext$Companion.prototype.and_njoihq$ = function (a, b) {
    var tmp$;
    if (a == null || a === this.NONE)
      return b;
    if (b == null || b === this.NONE)
      return a;
    var result = new SemanticContext$AND(a, b);
    if (result.opnds.length === 1) {
      tmp$ = result.opnds[0];
    } else
      tmp$ = result;
    return tmp$;
  };
  SemanticContext$Companion.prototype.or_njoihq$ = function (a, b) {
    var tmp$;
    if (a == null)
      return b;
    if (b == null)
      return a;
    if (a === this.NONE || b === this.NONE)
      return this.NONE;
    var result = new SemanticContext$OR(a, b);
    if (result.opnds.length === 1) {
      tmp$ = result.opnds[0];
    } else
      tmp$ = result;
    return tmp$;
  };
  SemanticContext$Companion.prototype.filterPrecedencePredicates_0 = function (collection) {
    var result = null;
    var iterator = collection.iterator();
    while (iterator.hasNext()) {
      var context = iterator.next();
      if (Kotlin.isType(context, SemanticContext$PrecedencePredicate)) {
        if (result == null) {
          result = ArrayList_init_0();
        }
        result.add_11rb$(context);
        iterator.remove();
      }
    }
    return result != null ? result : emptyList();
  };
  SemanticContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SemanticContext$Companion_instance = null;
  function SemanticContext$Companion_getInstance() {
    if (SemanticContext$Companion_instance === null) {
      new SemanticContext$Companion();
    }
    return SemanticContext$Companion_instance;
  }
  SemanticContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SemanticContext',
    interfaces: []
  };
  function SetTransition(target, set) {
    Transition.call(this, target);
    this.set = null;
    var set_0 = set;
    if (set_0 == null)
      set_0 = IntervalSet$Companion_getInstance().of_za3lpa$(Token$Companion_getInstance().INVALID_TYPE);
    this.set = set_0;
  }
  Object.defineProperty(SetTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().SET;
    }
  });
  SetTransition.prototype.accessLabel = function () {
    return this.set;
  };
  SetTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return this.set.contains_za3lpa$(symbol);
  };
  SetTransition.prototype.toString = function () {
    return this.set.toString();
  };
  SetTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetTransition',
    interfaces: [Transition]
  };
  function SingletonPredictionContext(parent, returnState) {
    SingletonPredictionContext$Companion_getInstance();
    PredictionContext.call(this, parent != null ? PredictionContext$Companion_getInstance().calculateHashCode_dhk4zn$(parent, returnState) : PredictionContext$Companion_getInstance().calculateEmptyHashCode());
    this.parent = parent;
    this.returnState = returnState;
    assert(this.returnState !== -1);
  }
  SingletonPredictionContext.prototype.size = function () {
    return 1;
  };
  SingletonPredictionContext.prototype.getParent_za3lpa$ = function (index) {
    assert(index === 0);
    return this.parent;
  };
  SingletonPredictionContext.prototype.getReturnState_za3lpa$ = function (index) {
    assert(index === 0);
    return this.returnState;
  };
  SingletonPredictionContext.prototype.equals = function (o) {
    var tmp$;
    if (this === o) {
      return true;
    } else if (!Kotlin.isType(o, SingletonPredictionContext)) {
      return false;
    }
    if (this.hashCode() !== hashCode(o)) {
      return false;
    }
    var s = (tmp$ = o) == null || Kotlin.isType(tmp$, SingletonPredictionContext) ? tmp$ : throwCCE();
    return this.returnState === ensureNotNull(s).returnState && this.parent != null && equals(this.parent, s.parent);
  };
  SingletonPredictionContext.prototype.toString = function () {
    var tmp$;
    var up = this.parent != null ? ensureNotNull(this.parent).toString() : '';
    if (up.length === 0) {
      if (this.returnState === PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE) {
        tmp$ = '$';
      } else
        tmp$ = this.returnState.toString();
    } else
      tmp$ = this.returnState.toString() + ' ' + up;
    return tmp$;
  };
  function SingletonPredictionContext$Companion() {
    SingletonPredictionContext$Companion_instance = this;
  }
  SingletonPredictionContext$Companion.prototype.create_cj3mow$ = function (parent, returnState) {
    var tmp$;
    if (returnState === PredictionContext$Companion_getInstance().EMPTY_RETURN_STATE && parent == null) {
      tmp$ = PredictionContext$Companion_getInstance().EMPTY;
    } else
      tmp$ = new SingletonPredictionContext(parent, returnState);
    return tmp$;
  };
  SingletonPredictionContext$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SingletonPredictionContext$Companion_instance = null;
  function SingletonPredictionContext$Companion_getInstance() {
    if (SingletonPredictionContext$Companion_instance === null) {
      new SingletonPredictionContext$Companion();
    }
    return SingletonPredictionContext$Companion_instance;
  }
  SingletonPredictionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingletonPredictionContext',
    interfaces: [PredictionContext]
  };
  function StarBlockStartState() {
    BlockStartState.call(this);
  }
  Object.defineProperty(StarBlockStartState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().STAR_BLOCK_START;
    }
  });
  StarBlockStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StarBlockStartState',
    interfaces: [BlockStartState]
  };
  function StarLoopEntryState() {
    DecisionState.call(this);
    this.loopBackState = null;
    this.isPrecedenceDecision = false;
  }
  Object.defineProperty(StarLoopEntryState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().STAR_LOOP_ENTRY;
    }
  });
  StarLoopEntryState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StarLoopEntryState',
    interfaces: [DecisionState]
  };
  function StarLoopbackState() {
    ATNState.call(this);
  }
  Object.defineProperty(StarLoopbackState.prototype, 'loopEntryState', {
    configurable: true,
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.transition_za3lpa$(0).target, StarLoopEntryState) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(StarLoopbackState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().STAR_LOOP_BACK;
    }
  });
  StarLoopbackState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StarLoopbackState',
    interfaces: [ATNState]
  };
  function TokensStartState() {
    DecisionState.call(this);
  }
  Object.defineProperty(TokensStartState.prototype, 'stateType', {
    configurable: true,
    get: function () {
      return ATNState$Companion_getInstance().TOKEN_START;
    }
  });
  TokensStartState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokensStartState',
    interfaces: [DecisionState]
  };
  function Transition(target) {
    Transition$Companion_getInstance();
    this.target = target;
    if (this.target == null) {
      throw new NullPointerException('target cannot be null.');
    }
  }
  Object.defineProperty(Transition.prototype, 'isEpsilon', {
    configurable: true,
    get: function () {
      return false;
    }
  });
  Transition.prototype.accessLabel = function () {
    return null;
  };
  function Transition$Companion() {
    Transition$Companion_instance = this;
    this.EPSILON = 1;
    this.RANGE = 2;
    this.RULE = 3;
    this.PREDICATE = 4;
    this.ATOM = 5;
    this.ACTION = 6;
    this.SET = 7;
    this.NOT_SET = 8;
    this.WILDCARD = 9;
    this.PRECEDENCE = 10;
    this.serializationNames = listOf(['INVALID', 'EPSILON', 'RANGE', 'RULE', 'PREDICATE', 'ATOM', 'ACTION', 'SET', 'NOT_SET', 'WILDCARD', 'PRECEDENCE']);
  }
  Transition$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transition$Companion_instance = null;
  function Transition$Companion_getInstance() {
    if (Transition$Companion_instance === null) {
      new Transition$Companion();
    }
    return Transition$Companion_instance;
  }
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  function WildcardTransition(target) {
    Transition.call(this, target);
  }
  Object.defineProperty(WildcardTransition.prototype, 'serializationType', {
    configurable: true,
    get: function () {
      return Transition$Companion_getInstance().WILDCARD;
    }
  });
  WildcardTransition.prototype.matches_qt1dr2$ = function (symbol, minVocabSymbol, maxVocabSymbol) {
    return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
  };
  WildcardTransition.prototype.toString = function () {
    return '.';
  };
  WildcardTransition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WildcardTransition',
    interfaces: [Transition]
  };
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function DFA(atnStartState, decision) {
    if (decision === void 0)
      decision = 0;
    this.atnStartState = atnStartState;
    this.decision = decision;
    this.states = HashMap_init();
    this.s0 = null;
    this.precedenceDfa_0 = false;
    var precedenceDfa = false;
    if (Kotlin.isType(this.atnStartState, StarLoopEntryState)) {
      if (this.atnStartState.isPrecedenceDecision) {
        precedenceDfa = true;
        var precedenceState = DFAState_init_1(new ATNConfigSet());
        precedenceState.edges = Kotlin.newArray(0, null);
        precedenceState.isAcceptState = false;
        precedenceState.requiresFullContext = false;
        this.s0 = precedenceState;
      }
    }
    this.precedenceDfa_0 = precedenceDfa;
  }
  Object.defineProperty(DFA.prototype, 'isPrecedenceDfa', {
    configurable: true,
    get: function () {
      return this.precedenceDfa_0;
    },
    set: function (precedenceDfa) {
      if (precedenceDfa !== this.isPrecedenceDfa) {
        throw UnsupportedOperationException_init('The precedenceDfa field cannot change after a DFA is constructed.');
      }
    }
  });
  DFA.prototype.getPrecedenceStartState_za3lpa$ = function (precedence) {
    var tmp$;
    if (!this.isPrecedenceDfa) {
      var message = 'Only precedence DFAs may contain a precedence start state.';
      throw IllegalStateException_init(message.toString());
    }
    if (precedence < 0 || precedence >= ensureNotNull(ensureNotNull(this.s0).edges).length) {
      tmp$ = null;
    } else
      tmp$ = ensureNotNull(ensureNotNull(this.s0).edges)[precedence];
    return tmp$;
  };
  DFA.prototype.setPrecedenceStartState_a8bk1f$ = function (precedence, startState) {
    if (!this.isPrecedenceDfa) {
      var message = 'Only precedence DFAs may contain a precedence start state.';
      throw IllegalStateException_init(message.toString());
    }
    if (precedence < 0) {
      return;
    }
    if (precedence >= ensureNotNull(ensureNotNull(this.s0).edges).length) {
      ensureNotNull(this.s0).edges = copyOf(ensureNotNull(ensureNotNull(this.s0).edges), precedence + 1 | 0);
    }
    ensureNotNull(ensureNotNull(this.s0).edges)[precedence] = startState;
  };
  function DFA$getStates$lambda(it) {
    return it.stateNumber;
  }
  DFA.prototype.getStates = function () {
    var result = ArrayList_init_1(this.states.keys);
    if (result.size > 1) {
      sortWith(result, new Comparator(compareBy$lambda(DFA$getStates$lambda)));
    }
    return result;
  };
  DFA.prototype.toString = function () {
    var tmp$;
    return (tmp$ = this.toString_hr977m$(VocabularyImpl$Companion_getInstance().EMPTY_VOCABULARY)) != null ? tmp$ : 'null';
  };
  DFA.prototype.toString_hr977m$ = function (vocabulary) {
    if (this.s0 == null) {
      return '';
    }
    var serializer = DFASerializer_init_0(this, vocabulary);
    return serializer.toString();
  };
  DFA.prototype.toLexerString = function () {
    if (this.s0 == null)
      return '';
    var serializer = new LexerDFASerializer(this);
    return serializer.toString();
  };
  DFA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFA',
    interfaces: []
  };
  function DFASerializer() {
    this.dfa_cvs56l$_0 = null;
    this.vocabulary_iu0kac$_0 = null;
  }
  DFASerializer.prototype.toString = function () {
    var tmp$, tmp$_0;
    if (this.dfa_cvs56l$_0.s0 == null)
      return 'null';
    var buf = StringBuilder_init();
    var states = this.dfa_cvs56l$_0.getStates();
    tmp$ = states.iterator();
    while (tmp$.hasNext()) {
      var s = tmp$.next();
      var n = 0;
      if (s.edges != null)
        n = ensureNotNull(s.edges).length;
      tmp$_0 = n;
      for (var i = 0; i < tmp$_0; i++) {
        var t = ensureNotNull(s.edges)[i];
        if (t != null && t.stateNumber !== 2147483647) {
          buf.append_pdl1vj$(this.getStateString_dqilj7$(s));
          var label = this.getEdgeLabel_za3lpa$(i);
          buf.append_pdl1vj$('-').append_pdl1vj$(label).append_pdl1vj$('->').append_pdl1vj$(this.getStateString_dqilj7$(t)).append_s8itvh$(10);
        }
      }
    }
    var output = buf.toString();
    return output.length === 0 ? 'null' : output;
  };
  DFASerializer.prototype.getEdgeLabel_za3lpa$ = function (i) {
    return this.vocabulary_iu0kac$_0.getDisplayName_za3lpa$(i - 1 | 0);
  };
  DFASerializer.prototype.getStateString_dqilj7$ = function (s) {
    var tmp$;
    var n = s.stateNumber;
    var baseStateStr = (s.isAcceptState ? ':' : '') + 's' + toString(n) + (s.requiresFullContext ? '^' : '');
    if (s.isAcceptState) {
      if (s.predicates != null) {
        tmp$ = baseStateStr + '=>' + joinToString_0(ensureNotNull(s.predicates));
      } else {
        tmp$ = baseStateStr + '=>' + toString(s.prediction);
      }
    } else {
      tmp$ = baseStateStr;
    }
    return tmp$;
  };
  DFASerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFASerializer',
    interfaces: []
  };
  function DFASerializer_init(dfa, tokenNames, $this) {
    $this = $this || Object.create(DFASerializer.prototype);
    var tmp$;
    DFASerializer_init_0(dfa, VocabularyImpl$Companion_getInstance().fromTokenNames_t85qxa$(Kotlin.isArray(tmp$ = tokenNames) ? tmp$ : throwCCE()), $this);
    return $this;
  }
  function DFASerializer_init_0(dfa, vocabulary, $this) {
    $this = $this || Object.create(DFASerializer.prototype);
    DFASerializer.call($this);
    $this.dfa_cvs56l$_0 = dfa;
    $this.vocabulary_iu0kac$_0 = vocabulary;
    return $this;
  }
  function DFAState() {
    this.stateNumber = -1;
    this.configs = new ATNConfigSet();
    this.edges = null;
    this.isAcceptState = false;
    this.prediction = 0;
    this.lexerActionExecutor = null;
    this.requiresFullContext = false;
    this.predicates = null;
  }
  Object.defineProperty(DFAState.prototype, 'altSet', {
    configurable: true,
    get: function () {
      var tmp$;
      var alts = HashSet_init_0();
      if (this.configs != null) {
        tmp$ = ensureNotNull(this.configs).iterator();
        while (tmp$.hasNext()) {
          var c = tmp$.next();
          alts.add_11rb$(c.alt);
        }
      }
      return alts.isEmpty() ? null : alts;
    }
  });
  function DFAState$PredPrediction(pred, alt) {
    this.pred = pred;
    this.alt = alt;
  }
  DFAState$PredPrediction.prototype.toString = function () {
    return '(' + this.pred + ', ' + this.alt + ')';
  };
  DFAState$PredPrediction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PredPrediction',
    interfaces: []
  };
  DFAState.prototype.hashCode = function () {
    var hash = MurmurHash_getInstance().initialize_za3lpa$(7);
    hash = MurmurHash_getInstance().update_vux9f0$(hash, ensureNotNull(this.configs).hashCode());
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, 1);
    return hash;
  };
  DFAState.prototype.equals = function (o) {
    var tmp$;
    if (this === o)
      return true;
    if (!Kotlin.isType(o, DFAState)) {
      return false;
    }
    var other = (tmp$ = o) == null || Kotlin.isType(tmp$, DFAState) ? tmp$ : throwCCE();
    return equals(ensureNotNull(this.configs), ensureNotNull(other).configs);
  };
  DFAState.prototype.toString = function () {
    var buf = StringBuilder_init();
    buf.append_s8jyv4$(this.stateNumber).append_pdl1vj$(':').append_s8jyv4$(this.configs);
    if (this.isAcceptState) {
      buf.append_pdl1vj$('=>');
      if (this.predicates != null) {
        buf.append_pdl1vj$(joinToString_0(ensureNotNull(this.predicates)));
      } else {
        buf.append_s8jyv4$(this.prediction);
      }
    }
    return buf.toString();
  };
  DFAState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DFAState',
    interfaces: []
  };
  function DFAState_init($this) {
    $this = $this || Object.create(DFAState.prototype);
    DFAState.call($this);
    return $this;
  }
  function DFAState_init_0(stateNumber, $this) {
    $this = $this || Object.create(DFAState.prototype);
    DFAState.call($this);
    $this.stateNumber = stateNumber;
    return $this;
  }
  function DFAState_init_1(configs, $this) {
    $this = $this || Object.create(DFAState.prototype);
    DFAState.call($this);
    $this.configs = configs;
    return $this;
  }
  function LexerDFASerializer(dfa) {
    DFASerializer_init_0(dfa, VocabularyImpl$Companion_getInstance().EMPTY_VOCABULARY, this);
  }
  LexerDFASerializer.prototype.getEdgeLabel_za3lpa$ = function (i) {
    return (new StringBuilder("'")).append_s8itvh$(toChar(i)).append_pdl1vj$("'").toString();
  };
  LexerDFASerializer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LexerDFASerializer',
    interfaces: [DFASerializer]
  };
  function AbstractEqualityComparator() {
  }
  AbstractEqualityComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractEqualityComparator',
    interfaces: [EqualityComparator]
  };
  function Array2DHashSet(comparator, initialCapacity, initialBucketCapacity) {
    Array2DHashSet$Companion_getInstance();
    if (comparator === void 0)
      comparator = null;
    if (initialCapacity === void 0)
      initialCapacity = Array2DHashSet$Companion_getInstance().INITAL_CAPACITY;
    if (initialBucketCapacity === void 0)
      initialBucketCapacity = Array2DHashSet$Companion_getInstance().INITAL_BUCKET_CAPACITY;
    this.comparator = null;
    this.buckets = null;
    this.n = 0;
    this.threshold = numberToInt(Math_getInstance().floor_14dthe$(Array2DHashSet$Companion_getInstance().INITAL_CAPACITY * Array2DHashSet$Companion_getInstance().LOAD_FACTOR));
    this.currentPrime = 1;
    this.initialBucketCapacity = Array2DHashSet$Companion_getInstance().INITAL_BUCKET_CAPACITY;
    var tmp$;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = ObjectEqualityComparator$Companion_getInstance().INSTANCE;
    }
    this.comparator = comparator_0;
    this.buckets = Kotlin.isArray(tmp$ = this.createBuckets_za3lpa$(initialCapacity)) ? tmp$ : throwCCE();
    this.initialBucketCapacity = initialBucketCapacity;
  }
  Array2DHashSet.prototype.remove_11rb$ = function (element) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Array2DHashSet.prototype.containsAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Array2DHashSet.prototype.retainAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Array2DHashSet.prototype.getOrAdd_11rb$ = function (o) {
    if (this.n > this.threshold)
      this.expand();
    return this.getOrAddImpl_11rb$(o);
  };
  Array2DHashSet.prototype.getOrAddImpl_11rb$ = function (o) {
    var tmp$, tmp$_0;
    var b = this.getBucket_11rb$(o);
    var bucket = this.buckets[b];
    if (bucket == null) {
      bucket = Kotlin.isArray(tmp$ = this.createBucket_za3lpa$(this.initialBucketCapacity)) ? tmp$ : throwCCE();
      bucket[0] = o;
      this.buckets[b] = bucket;
      this.n = this.n + 1 | 0;
      return o;
    }
    for (var i = 0; i !== bucket.length; ++i) {
      var existing = bucket[i];
      if (existing == null) {
        bucket[i] = o;
        this.n = this.n + 1 | 0;
        return o;
      }
      if (this.comparator.equals_xwzc9q$(existing, o))
        return existing;
    }
    var oldLength = bucket.length;
    bucket = Kotlin.isArray(tmp$_0 = copyOf(bucket, bucket.length * 2 | 0)) ? tmp$_0 : throwCCE();
    this.buckets[b] = bucket;
    bucket[oldLength] = o;
    this.n = this.n + 1 | 0;
    return o;
  };
  Array2DHashSet.prototype.get_11rb$ = function (o) {
    var tmp$, tmp$_0;
    if (o == null)
      return o;
    var b = this.getBucket_11rb$(o);
    tmp$ = this.buckets[b];
    if (tmp$ == null) {
      return null;
    }
    var bucket = tmp$;
    for (tmp$_0 = 0; tmp$_0 !== bucket.length; ++tmp$_0) {
      var e = bucket[tmp$_0];
      if (e == null)
        return null;
      if (this.comparator.equals_xwzc9q$(e, o))
        return e;
    }
    return null;
  };
  Array2DHashSet.prototype.getBucket_11rb$ = function (o) {
    var hash = this.comparator.hashCode_11rb$(o);
    return hash & this.buckets.length - 1;
  };
  Array2DHashSet.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1;
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null)
        continue;
      for (tmp$_1 = 0; tmp$_1 !== bucket.length; ++tmp$_1) {
        var o = bucket[tmp$_1];
        if (o == null)
          break;
        hash = MurmurHash_getInstance().update_vux9f0$(hash, this.comparator.hashCode_11rb$(o));
      }
    }
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, this.size);
    return hash;
  };
  Array2DHashSet.prototype.equals = function (o) {
    var tmp$;
    if (o === this)
      return true;
    if (!Kotlin.isType(o, Array2DHashSet))
      return false;
    var other = (tmp$ = o) == null || Kotlin.isType(tmp$, Array2DHashSet) ? tmp$ : throwCCE();
    return ensureNotNull(other).size !== this.size ? false : this.containsAll_brywnq$(other);
  };
  Array2DHashSet.prototype.expand = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var old = this.buckets;
    this.currentPrime = this.currentPrime + 4 | 0;
    var newCapacity = this.buckets.length * 2 | 0;
    var newTable = this.createBuckets_za3lpa$(newCapacity);
    var newBucketLengths = new Int32Array(newTable.length);
    this.buckets = Kotlin.isArray(tmp$ = newTable) ? tmp$ : throwCCE();
    this.threshold = numberToInt(newCapacity * Array2DHashSet$Companion_getInstance().LOAD_FACTOR);
    var oldSize = this.size;
    for (tmp$_0 = 0; tmp$_0 !== old.length; ++tmp$_0) {
      var bucket = old[tmp$_0];
      if (bucket == null) {
        continue;
      }
      for (tmp$_1 = 0; tmp$_1 !== bucket.length; ++tmp$_1) {
        var o = bucket[tmp$_1];
        if (o == null) {
          break;
        }
        var b = this.getBucket_11rb$(o);
        var bucketLength = newBucketLengths[b];
        var newBucket;
        if (bucketLength === 0) {
          newBucket = Kotlin.isArray(tmp$_2 = this.createBucket_za3lpa$(this.initialBucketCapacity)) ? tmp$_2 : throwCCE();
          newTable[b] = newBucket;
        } else {
          newBucket = newTable[b];
          if (bucketLength === newBucket.length) {
            newBucket = Kotlin.isArray(tmp$_3 = copyOf(newBucket, newBucket.length * 2 | 0)) ? tmp$_3 : throwCCE();
            newTable[b] = newBucket;
          }
        }
        newBucket[bucketLength] = o;
        newBucketLengths[b] = newBucketLengths[b] + 1 | 0;
      }
    }
    assert(this.n === oldSize);
  };
  Object.defineProperty(Array2DHashSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.n;
    }
  });
  Array2DHashSet.prototype.add_11rb$ = function (t) {
    var existing = this.getOrAdd_11rb$(t);
    return existing === t;
  };
  Array2DHashSet.prototype.isEmpty = function () {
    return this.n === 0;
  };
  Array2DHashSet.prototype.contains_11rb$ = function (element) {
    return this.containsFast_11rb$(element);
  };
  Array2DHashSet.prototype.containsFast_11rb$ = function (obj) {
    var tmp$;
    if (obj == null) {
      tmp$ = false;
    } else
      tmp$ = this.get_11rb$(obj) != null;
    return tmp$;
  };
  Array2DHashSet.prototype.iterator = function () {
    throw new NotImplementedError_init();
  };
  Array2DHashSet.prototype.toArray = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var a = this.createBucket_za3lpa$(this.size);
    var i = 0;
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null) {
        continue;
      }
      for (tmp$_1 = 0; tmp$_1 !== bucket.length; ++tmp$_1) {
        var o = bucket[tmp$_1];
        if (o == null) {
          break;
        }
        a[tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2] = o;
      }
    }
    return Kotlin.isArray(tmp$_3 = a) ? tmp$_3 : throwCCE();
  };
  Array2DHashSet.prototype.toArray_ro6dgy$ = function (a) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var a_0 = a;
    if (a_0.length < this.size) {
      a_0 = Kotlin.isArray(tmp$ = copyOf(a_0, this.size)) ? tmp$ : throwCCE();
    }
    var i = 0;
    tmp$_0 = this.buckets;
    for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
      var bucket = tmp$_0[tmp$_1];
      if (bucket == null) {
        continue;
      }
      for (tmp$_2 = 0; tmp$_2 !== bucket.length; ++tmp$_2) {
        var o = bucket[tmp$_2];
        if (o == null) {
          break;
        }
        var targetElement = (tmp$_3 = o) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
        a_0[tmp$_4 = i, i = tmp$_4 + 1 | 0, tmp$_4] = targetElement;
      }
    }
    return a_0;
  };
  Array2DHashSet.prototype.removeFast_11rb$ = function (obj) {
    var tmp$;
    if (obj == null) {
      return false;
    }
    var b = this.getBucket_11rb$(obj);
    tmp$ = this.buckets[b];
    if (tmp$ == null) {
      return false;
    }
    var bucket = tmp$;
    for (var i = 0; i !== bucket.length; ++i) {
      var tmp$_0;
      tmp$_0 = bucket[i];
      if (tmp$_0 == null) {
        return false;
      }
      var e = tmp$_0;
      if (this.comparator.equals_xwzc9q$(e, obj)) {
        throw new NotImplementedError_init();
      }
    }
    return false;
  };
  Array2DHashSet.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    var changed = false;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var o = tmp$.next();
      var existing = this.getOrAdd_11rb$(o);
      if (existing !== o)
        changed = true;
    }
    return changed;
  };
  Array2DHashSet.prototype.removeAll_brywnq$ = function (elements) {
    throw new NotImplementedError_init();
  };
  Array2DHashSet.prototype.clear = function () {
    var tmp$;
    this.buckets = Kotlin.isArray(tmp$ = this.createBuckets_za3lpa$(Array2DHashSet$Companion_getInstance().INITAL_CAPACITY)) ? tmp$ : throwCCE();
    this.n = 0;
    this.threshold = numberToInt(Math_getInstance().floor_14dthe$(Array2DHashSet$Companion_getInstance().INITAL_CAPACITY * Array2DHashSet$Companion_getInstance().LOAD_FACTOR));
  };
  Array2DHashSet.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.size === 0)
      return '{}';
    var buf = StringBuilder_init();
    buf.append_s8itvh$(123);
    var first = true;
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null)
        continue;
      for (tmp$_1 = 0; tmp$_1 !== bucket.length; ++tmp$_1) {
        var o = bucket[tmp$_1];
        if (o == null)
          break;
        if (first)
          first = false;
        else
          buf.append_pdl1vj$(', ');
        buf.append_pdl1vj$(o.toString());
      }
    }
    buf.append_s8itvh$(125);
    return buf.toString();
  };
  Array2DHashSet.prototype.toTableString = function () {
    var tmp$, tmp$_0, tmp$_1;
    var buf = StringBuilder_init();
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null) {
        buf.append_pdl1vj$('null\n');
        continue;
      }
      buf.append_s8itvh$(91);
      var first = true;
      for (tmp$_1 = 0; tmp$_1 !== bucket.length; ++tmp$_1) {
        var o = bucket[tmp$_1];
        if (first)
          first = false;
        else
          buf.append_pdl1vj$(' ');
        if (o == null)
          buf.append_pdl1vj$('_');
        else
          buf.append_pdl1vj$(o.toString());
      }
      buf.append_pdl1vj$(']\n');
    }
    return buf.toString();
  };
  Array2DHashSet.prototype.asElementType_za3rmp$ = function (o) {
    var tmp$;
    return (tmp$ = o) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  Array2DHashSet.prototype.createBuckets_za3lpa$ = function (capacity) {
    var tmp$;
    return Kotlin.isArray(tmp$ = Kotlin.newArray(capacity, null)) ? tmp$ : throwCCE();
  };
  Array2DHashSet.prototype.createBucket_za3lpa$ = function (capacity) {
    var tmp$;
    return Kotlin.isArray(tmp$ = Kotlin.newArray(capacity, null)) ? tmp$ : throwCCE();
  };
  function Array2DHashSet$SetIterator($outer, data) {
    this.$outer = $outer;
    this.data_8be2vx$ = data;
    this.nextIndex_8be2vx$ = 0;
    this.removed_8be2vx$ = true;
  }
  Array2DHashSet$SetIterator.prototype.hasNext = function () {
    return this.nextIndex_8be2vx$ < this.data_8be2vx$.length;
  };
  Array2DHashSet$SetIterator.prototype.next = function () {
    var tmp$;
    if (!this.hasNext()) {
      throw NoSuchElementException_init();
    }
    this.removed_8be2vx$ = false;
    return this.data_8be2vx$[tmp$ = this.nextIndex_8be2vx$, this.nextIndex_8be2vx$ = tmp$ + 1 | 0, tmp$];
  };
  Array2DHashSet$SetIterator.prototype.remove = function () {
    if (this.removed_8be2vx$) {
      throw IllegalStateException_init_0();
    }
    this.$outer.remove_11rb$(this.data_8be2vx$[this.nextIndex_8be2vx$ - 1 | 0]);
    this.removed_8be2vx$ = true;
  };
  Array2DHashSet$SetIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetIterator',
    interfaces: [MutableIterator]
  };
  function Array2DHashSet$Companion() {
    Array2DHashSet$Companion_instance = this;
    this.INITAL_CAPACITY = 16;
    this.INITAL_BUCKET_CAPACITY = 8;
    this.LOAD_FACTOR = 0.75;
  }
  Array2DHashSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2DHashSet$Companion_instance = null;
  function Array2DHashSet$Companion_getInstance() {
    if (Array2DHashSet$Companion_instance === null) {
      new Array2DHashSet$Companion();
    }
    return Array2DHashSet$Companion_instance;
  }
  Array2DHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2DHashSet',
    interfaces: [MutableSet]
  };
  function DoubleKeyMap() {
    this.data_8be2vx$ = LinkedHashMap_init();
  }
  DoubleKeyMap.prototype.put_1llc0w$ = function (k1, k2, v) {
    var data2 = this.data_8be2vx$.get_11rb$(k1);
    var prev = null;
    if (data2 == null) {
      data2 = LinkedHashMap_init();
      var $receiver = this.data_8be2vx$;
      var value = data2;
      $receiver.put_xwzc9p$(k1, value);
    } else {
      prev = data2.get_11rb$(k2);
    }
    data2.put_xwzc9p$(k2, v);
    return prev;
  };
  DoubleKeyMap.prototype.get_xwzc9p$ = function (k1, k2) {
    var tmp$;
    tmp$ = this.data_8be2vx$.get_11rb$(k1);
    if (tmp$ == null) {
      return null;
    }
    var data2 = tmp$;
    return data2.get_11rb$(k2);
  };
  DoubleKeyMap.prototype.get_11rb$ = function (k1) {
    return ensureNotNull(this.data_8be2vx$.get_11rb$(k1));
  };
  DoubleKeyMap.prototype.values_11rb$ = function (k1) {
    var tmp$;
    tmp$ = this.data_8be2vx$.get_11rb$(k1);
    if (tmp$ == null) {
      return null;
    }
    var data2 = tmp$;
    return data2.values;
  };
  DoubleKeyMap.prototype.keySet = function () {
    return this.data_8be2vx$.keys;
  };
  DoubleKeyMap.prototype.keySet_11rb$ = function (k1) {
    var tmp$;
    tmp$ = this.data_8be2vx$.get_11rb$(k1);
    if (tmp$ == null) {
      return null;
    }
    var data2 = tmp$;
    return data2.keys;
  };
  DoubleKeyMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleKeyMap',
    interfaces: []
  };
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EqualityComparator',
    interfaces: []
  };
  function FlexibleHashMap(comparator, initialCapacity, initialBucketCapacity) {
    FlexibleHashMap$Companion_getInstance();
    if (comparator === void 0)
      comparator = null;
    if (initialCapacity === void 0)
      initialCapacity = FlexibleHashMap$Companion_getInstance().INITAL_CAPACITY;
    if (initialBucketCapacity === void 0)
      initialBucketCapacity = FlexibleHashMap$Companion_getInstance().INITAL_BUCKET_CAPACITY;
    this.comparator = null;
    this.buckets = null;
    this.n = 0;
    this.size_1owx08$_0 = this.n;
    this.threshold = numberToInt(FlexibleHashMap$Companion_getInstance().INITAL_CAPACITY * FlexibleHashMap$Companion_getInstance().LOAD_FACTOR);
    this.currentPrime = 1;
    this.initialBucketCapacity = FlexibleHashMap$Companion_getInstance().INITAL_BUCKET_CAPACITY;
    var comparator_0 = comparator;
    if (comparator_0 == null) {
      comparator_0 = ObjectEqualityComparator$Companion_getInstance().INSTANCE;
    }
    this.comparator = comparator_0;
    this.buckets = FlexibleHashMap$Companion_getInstance().createEntryListArray_0(initialBucketCapacity);
    this.initialBucketCapacity = initialBucketCapacity;
  }
  Object.defineProperty(FlexibleHashMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      var $receiver = filterNotNull(this.buckets);
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0 = filterNotNull_0(element);
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(item.key);
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return toMutableSet(destination);
    }
  });
  Object.defineProperty(FlexibleHashMap.prototype, 'values', {
    configurable: true,
    get: function () {
      var $receiver = filterNotNull(this.buckets);
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_0 = filterNotNull_0(element);
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_0;
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination_0.add_11rb$(item.value);
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return toMutableList(destination);
    }
  });
  Object.defineProperty(FlexibleHashMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
    }
  });
  Object.defineProperty(FlexibleHashMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.size_1owx08$_0;
    }
  });
  function FlexibleHashMap$Entry(key, value) {
    this.key = key;
    this.value = value;
  }
  FlexibleHashMap$Entry.prototype.toString = function () {
    return toString(this.key) + ':' + toString(this.value);
  };
  FlexibleHashMap$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  FlexibleHashMap.prototype.getBucket_11rb$ = function (key) {
    var hash = this.comparator.hashCode_11rb$(key);
    return hash & this.buckets.length - 1;
  };
  FlexibleHashMap.prototype.get_11rb$ = function (key) {
    var tmp$, tmp$_0;
    if (key == null)
      return null;
    var b = this.getBucket_11rb$(key);
    tmp$ = this.buckets[b];
    if (tmp$ == null) {
      return null;
    }
    var bucket = tmp$;
    tmp$_0 = bucket.iterator();
    while (tmp$_0.hasNext()) {
      var e = tmp$_0.next();
      if (this.comparator.equals_xwzc9q$(e != null ? e.key : null, key)) {
        return e != null ? e.value : null;
      }
    }
    return null;
  };
  FlexibleHashMap.prototype.put_xwzc9p$ = function (key, value) {
    var tmp$, tmp$_0;
    if (key == null)
      return null;
    if (this.n > this.threshold)
      this.expand();
    var b = this.getBucket_11rb$(key);
    var existingBucket = this.buckets[b];
    if (existingBucket != null)
      tmp$ = existingBucket;
    else {
      this.buckets[b] = ArrayList_init_0();
      tmp$ = ensureNotNull(this.buckets[b]);
    }
    var bucket = tmp$;
    tmp$_0 = bucket.iterator();
    while (tmp$_0.hasNext()) {
      var e = tmp$_0.next();
      if (this.comparator.equals_xwzc9q$(e != null ? e.key : null, key)) {
        var prev = e != null ? e.value : null;
        e != null ? (e.value = value) : null;
        this.n = this.n + 1 | 0;
        return prev;
      }
    }
    bucket.add_11rb$(new FlexibleHashMap$Entry(key, value));
    this.n = this.n + 1 | 0;
    return null;
  };
  FlexibleHashMap.prototype.remove_11rb$ = function (key) {
    throw UnsupportedOperationException_init_0();
  };
  FlexibleHashMap.prototype.putAll_a2k3zr$ = function (from) {
    throw UnsupportedOperationException_init_0();
  };
  FlexibleHashMap.prototype.containsKey_11rb$ = function (key) {
    return this.get_11rb$(key) != null;
  };
  FlexibleHashMap.prototype.containsValue_11rc$ = function (value) {
    throw UnsupportedOperationException_init_0();
  };
  FlexibleHashMap.prototype.hashCode = function () {
    var tmp$, tmp$_0, tmp$_1;
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null)
        continue;
      tmp$_1 = bucket.iterator();
      while (tmp$_1.hasNext()) {
        var e = tmp$_1.next();
        if (e == null)
          break;
        hash = MurmurHash_getInstance().update_vux9f0$(hash, this.comparator.hashCode_11rb$(e.key));
      }
    }
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, this.size);
    return hash;
  };
  FlexibleHashMap.prototype.equals = function (o) {
    throw UnsupportedOperationException_init_0();
  };
  FlexibleHashMap.prototype.expand = function () {
    var tmp$, tmp$_0;
    var old = this.buckets;
    var newCapacity = this.buckets.length * 2 | 0;
    var newTable = FlexibleHashMap$Companion_getInstance().createEntryListArray_0(newCapacity);
    this.buckets = newTable;
    this.threshold = numberToInt(newCapacity * FlexibleHashMap$Companion_getInstance().LOAD_FACTOR);
    var oldSize = this.size;
    for (tmp$ = 0; tmp$ !== old.length; ++tmp$) {
      var bucket = old[tmp$];
      if (bucket == null)
        continue;
      tmp$_0 = bucket.iterator();
      while (tmp$_0.hasNext()) {
        var e = tmp$_0.next();
        if (e == null)
          break;
        this.put_xwzc9p$(e.key, e.value);
      }
    }
    this.n = oldSize;
  };
  FlexibleHashMap.prototype.isEmpty = function () {
    return this.n === 0;
  };
  FlexibleHashMap.prototype.clear = function () {
    this.buckets = FlexibleHashMap$Companion_getInstance().createEntryListArray_0(FlexibleHashMap$Companion_getInstance().INITAL_CAPACITY);
    this.n = 0;
  };
  FlexibleHashMap.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.size === 0)
      return '{}';
    var buf = StringBuilder_init();
    buf.append_s8itvh$(123);
    var first = true;
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null)
        continue;
      tmp$_1 = bucket.iterator();
      while (tmp$_1.hasNext()) {
        var e = tmp$_1.next();
        if (e == null)
          break;
        if (first)
          first = false;
        else
          buf.append_pdl1vj$(', ');
        buf.append_pdl1vj$(e.toString());
      }
    }
    buf.append_s8itvh$(125);
    return buf.toString();
  };
  FlexibleHashMap.prototype.toTableString = function () {
    var tmp$, tmp$_0, tmp$_1;
    var buf = StringBuilder_init();
    tmp$ = this.buckets;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var bucket = tmp$[tmp$_0];
      if (bucket == null) {
        buf.append_pdl1vj$('null\n');
        continue;
      }
      buf.append_s8itvh$(91);
      var first = true;
      tmp$_1 = bucket.iterator();
      while (tmp$_1.hasNext()) {
        var e = tmp$_1.next();
        if (first)
          first = false;
        else
          buf.append_pdl1vj$(' ');
        if (e == null)
          buf.append_pdl1vj$('_');
        else
          buf.append_pdl1vj$(e.toString());
      }
      buf.append_pdl1vj$(']\n');
    }
    return buf.toString();
  };
  function FlexibleHashMap$Companion() {
    FlexibleHashMap$Companion_instance = this;
    this.INITAL_CAPACITY = 16;
    this.INITAL_BUCKET_CAPACITY = 8;
    this.LOAD_FACTOR = 0.75;
  }
  FlexibleHashMap$Companion.prototype.createEntryListArray_0 = function (length) {
    var tmp$;
    return Kotlin.isArray(tmp$ = Kotlin.newArray(length, null)) ? tmp$ : throwCCE();
  };
  FlexibleHashMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FlexibleHashMap$Companion_instance = null;
  function FlexibleHashMap$Companion_getInstance() {
    if (FlexibleHashMap$Companion_instance === null) {
      new FlexibleHashMap$Companion();
    }
    return FlexibleHashMap$Companion_instance;
  }
  FlexibleHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlexibleHashMap',
    interfaces: [MutableMap]
  };
  function IntSet() {
  }
  IntSet.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IntSet',
    interfaces: []
  };
  function IntegerList() {
    IntegerList$Companion_getInstance();
    this._data_4jffhl$_0 = null;
    this._size_4rtktu$_0 = 0;
  }
  Object.defineProperty(IntegerList.prototype, 'isEmpty', {
    configurable: true,
    get: function () {
      return this._size_4rtktu$_0 === 0;
    }
  });
  IntegerList.prototype.add_za3lpa$ = function (value) {
    if (ensureNotNull(this._data_4jffhl$_0).length === this._size_4rtktu$_0) {
      this.ensureCapacity_dxo3os$_0(this._size_4rtktu$_0 + 1 | 0);
    }
    ensureNotNull(this._data_4jffhl$_0)[this._size_4rtktu$_0] = value;
    this._size_4rtktu$_0 = this._size_4rtktu$_0 + 1 | 0;
  };
  IntegerList.prototype.addAll_q5rwfd$ = function (array) {
    this.ensureCapacity_dxo3os$_0(this._size_4rtktu$_0 + array.length | 0);
    Arrays_getInstance();
    arraycopy_0(array, 0, ensureNotNull(this._data_4jffhl$_0), this._size_4rtktu$_0, array.length);
    this._size_4rtktu$_0 = this._size_4rtktu$_0 + array.length | 0;
  };
  IntegerList.prototype.addAll_4dgdii$ = function (list) {
    this.ensureCapacity_dxo3os$_0(this._size_4rtktu$_0 + list._size_4rtktu$_0 | 0);
    arraycopy_0(ensureNotNull(list._data_4jffhl$_0), 0, ensureNotNull(this._data_4jffhl$_0), this._size_4rtktu$_0, list._size_4rtktu$_0);
    this._size_4rtktu$_0 = this._size_4rtktu$_0 + list._size_4rtktu$_0 | 0;
  };
  IntegerList.prototype.addAll_wlb8mv$ = function (list) {
    this.ensureCapacity_dxo3os$_0(this._size_4rtktu$_0 + list.size | 0);
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      ensureNotNull(this._data_4jffhl$_0)[this._size_4rtktu$_0 + index_0 | 0] = item;
    }
    this._size_4rtktu$_0 = this._size_4rtktu$_0 + list.size | 0;
  };
  IntegerList.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this._size_4rtktu$_0) {
      throw IndexOutOfBoundsException_init();
    }
    return ensureNotNull(this._data_4jffhl$_0)[index];
  };
  IntegerList.prototype.contains_za3lpa$ = function (value) {
    var tmp$;
    tmp$ = this._size_4rtktu$_0;
    for (var i = 0; i < tmp$; i++) {
      if (ensureNotNull(this._data_4jffhl$_0)[i] === value) {
        return true;
      }
    }
    return false;
  };
  IntegerList.prototype.set_vux9f0$ = function (index, value) {
    if (index < 0 || index >= this._size_4rtktu$_0) {
      throw IndexOutOfBoundsException_init();
    }
    var previous = ensureNotNull(this._data_4jffhl$_0)[index];
    ensureNotNull(this._data_4jffhl$_0)[index] = value;
    return previous;
  };
  IntegerList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    var value = this.get_za3lpa$(index);
    tmp$ = this._size_4rtktu$_0 - index - 1 | 0;
    for (var i = 0; i < tmp$; i++) {
      ensureNotNull(this._data_4jffhl$_0)[index + i | 0] = ensureNotNull(this._data_4jffhl$_0)[index + i + 1 | 0];
    }
    ensureNotNull(this._data_4jffhl$_0)[this._size_4rtktu$_0 - 1 | 0] = 0;
    this._size_4rtktu$_0 = this._size_4rtktu$_0 - 1 | 0;
    return value;
  };
  IntegerList.prototype.removeRange_vux9f0$ = function (fromIndex, toIndex) {
    if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size_4rtktu$_0 || toIndex > this._size_4rtktu$_0) {
      throw IndexOutOfBoundsException_init();
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_0();
    }
    arraycopy_0(ensureNotNull(this._data_4jffhl$_0), toIndex, ensureNotNull(this._data_4jffhl$_0), fromIndex, this._size_4rtktu$_0 - toIndex | 0);
    this._size_4rtktu$_0 = this._size_4rtktu$_0 - (toIndex - fromIndex) | 0;
  };
  IntegerList.prototype.size = function () {
    return this._size_4rtktu$_0;
  };
  IntegerList.prototype.trimToSize = function () {
    if (ensureNotNull(this._data_4jffhl$_0).length === this._size_4rtktu$_0) {
      return;
    }
    this._data_4jffhl$_0 = copyOf_1(ensureNotNull(this._data_4jffhl$_0), this._size_4rtktu$_0);
  };
  IntegerList.prototype.clear = function () {
    this._size_4rtktu$_0 = 0;
  };
  IntegerList.prototype.toArray = function () {
    var tmp$;
    if (this._size_4rtktu$_0 === 0) {
      tmp$ = IntegerList$Companion_getInstance().EMPTY_DATA_0;
    } else {
      tmp$ = ensureNotNull(this._data_4jffhl$_0).slice();
    }
    return tmp$;
  };
  IntegerList.prototype.sort = function () {
    sort(ensureNotNull(this._data_4jffhl$_0));
  };
  IntegerList.prototype.equals = function (o) {
    var tmp$, tmp$_0;
    if (o === this) {
      return true;
    }
    if (!Kotlin.isType(o, IntegerList)) {
      return false;
    }
    var other = (tmp$ = o) == null || Kotlin.isType(tmp$, IntegerList) ? tmp$ : throwCCE();
    if (this._size_4rtktu$_0 !== ensureNotNull(other)._size_4rtktu$_0) {
      return false;
    }
    tmp$_0 = this._size_4rtktu$_0;
    for (var i = 0; i < tmp$_0; i++) {
      if (ensureNotNull(this._data_4jffhl$_0)[i] !== ensureNotNull(other._data_4jffhl$_0)[i]) {
        return false;
      }
    }
    return true;
  };
  IntegerList.prototype.hashCode = function () {
    var tmp$;
    var hashCode = 1;
    tmp$ = this._size_4rtktu$_0;
    for (var i = 0; i < tmp$; i++) {
      hashCode = (31 * hashCode | 0) + ensureNotNull(this._data_4jffhl$_0)[i] | 0;
    }
    return hashCode;
  };
  IntegerList.prototype.toString = function () {
    return joinToString_2(this.toArray());
  };
  IntegerList.prototype.binarySearch_za3lpa$ = function (key) {
    return indexOf_0(ensureNotNull(this._data_4jffhl$_0), key);
  };
  IntegerList.prototype.binarySearch_qt1dr2$ = function (fromIndex, toIndex, key) {
    var tmp$;
    if (fromIndex < 0 || toIndex < 0 || fromIndex > this._size_4rtktu$_0 || toIndex > this._size_4rtktu$_0) {
      throw IndexOutOfBoundsException_init();
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_0();
    }
    var i = indexOf_0(sliceArray(ensureNotNull(this._data_4jffhl$_0), new IntRange(fromIndex, toIndex - 1 | 0)), key);
    if (i === -1) {
      tmp$ = -1;
    } else {
      tmp$ = i + fromIndex | 0;
    }
    return tmp$;
  };
  IntegerList.prototype.ensureCapacity_dxo3os$_0 = function (capacity) {
    var tmp$;
    if (capacity < 0 || capacity > IntegerList$Companion_getInstance().MAX_ARRAY_SIZE_0) {
      throw RuntimeException_init();
    }
    var newLength;
    if (ensureNotNull(this._data_4jffhl$_0).length === 0) {
      tmp$ = IntegerList$Companion_getInstance().INITIAL_SIZE_0;
    } else {
      tmp$ = ensureNotNull(this._data_4jffhl$_0).length;
    }
    newLength = tmp$;
    while (newLength < capacity) {
      newLength = newLength * 2 | 0;
      if (newLength < 0 || newLength > IntegerList$Companion_getInstance().MAX_ARRAY_SIZE_0) {
        newLength = IntegerList$Companion_getInstance().MAX_ARRAY_SIZE_0;
      }
    }
    var originalArray = toTypedArray(ensureNotNull(this._data_4jffhl$_0));
    var copiedArray = copyOf(originalArray, newLength);
    for (var i = originalArray.length; i < copiedArray.length; i++) {
      copiedArray[i] = 0;
    }
    this._data_4jffhl$_0 = toIntArray(filterNotNull(copiedArray));
  };
  IntegerList.prototype.toCharArray = function () {
    var tmp$;
    var resultArray = Kotlin.charArray(this._size_4rtktu$_0);
    var resultIdx = 0;
    var calculatedPreciseResultSize = false;
    tmp$ = this._size_4rtktu$_0;
    for (var i = 0; i < tmp$; i++) {
      var codePoint = ensureNotNull(this._data_4jffhl$_0)[i];
      if (!calculatedPreciseResultSize && isSupplementaryCodePoint(kotlin_js_internal_CharCompanionObject, codePoint)) {
        resultArray = toCharArray(filterNotNull(copyOf(toTypedArray_0(resultArray), this.charArraySize_ggsnxu$_0())));
        calculatedPreciseResultSize = true;
      }
      var charsWritten = toChars(kotlin_js_internal_CharCompanionObject, codePoint, resultArray, resultIdx);
      resultIdx = resultIdx + charsWritten | 0;
    }
    return resultArray;
  };
  IntegerList.prototype.charArraySize_ggsnxu$_0 = function () {
    var tmp$;
    var result = 0;
    tmp$ = this._size_4rtktu$_0;
    for (var i = 0; i < tmp$; i++) {
      result = result + charCount(kotlin_js_internal_CharCompanionObject, ensureNotNull(this._data_4jffhl$_0)[i]);
    }
    return result;
  };
  function IntegerList$Companion() {
    IntegerList$Companion_instance = this;
    this.EMPTY_DATA_0 = new Int32Array(0);
    this.INITIAL_SIZE_0 = 4;
    this.MAX_ARRAY_SIZE_0 = 2147483639;
  }
  IntegerList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntegerList$Companion_instance = null;
  function IntegerList$Companion_getInstance() {
    if (IntegerList$Companion_instance === null) {
      new IntegerList$Companion();
    }
    return IntegerList$Companion_instance;
  }
  IntegerList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerList',
    interfaces: []
  };
  function IntegerList_init($this) {
    $this = $this || Object.create(IntegerList.prototype);
    IntegerList.call($this);
    $this._data_4jffhl$_0 = IntegerList$Companion_getInstance().EMPTY_DATA_0;
    return $this;
  }
  function IntegerList_init_0(capacity, $this) {
    $this = $this || Object.create(IntegerList.prototype);
    IntegerList.call($this);
    var tmp$;
    if (capacity < 0) {
      throw IllegalArgumentException_init_0();
    }
    if (capacity === 0) {
      tmp$ = IntegerList$Companion_getInstance().EMPTY_DATA_0;
    } else {
      tmp$ = new Int32Array(capacity);
    }
    $this._data_4jffhl$_0 = tmp$;
    return $this;
  }
  function IntegerList_init_1(list, $this) {
    $this = $this || Object.create(IntegerList.prototype);
    IntegerList.call($this);
    $this._data_4jffhl$_0 = ensureNotNull(list._data_4jffhl$_0).slice();
    $this._size_4rtktu$_0 = list._size_4rtktu$_0;
    return $this;
  }
  function IntegerList_init_2(list, $this) {
    $this = $this || Object.create(IntegerList.prototype);
    IntegerList_init_0(list.size, $this);
    var tmp$;
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var value = tmp$.next();
      $this.add_za3lpa$(value);
    }
    return $this;
  }
  function IntegerStack() {
  }
  IntegerStack.prototype.push_za3lpa$ = function (value) {
    this.add_za3lpa$(value);
  };
  IntegerStack.prototype.pop = function () {
    return this.removeAt_za3lpa$(this.size() - 1 | 0);
  };
  IntegerStack.prototype.peek = function () {
    return this.get_za3lpa$(this.size() - 1 | 0);
  };
  IntegerStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntegerStack',
    interfaces: [IntegerList]
  };
  function IntegerStack_init($this) {
    $this = $this || Object.create(IntegerStack.prototype);
    IntegerList_init($this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_0(capacity, $this) {
    $this = $this || Object.create(IntegerStack.prototype);
    IntegerList_init_0(capacity, $this);
    IntegerStack.call($this);
    return $this;
  }
  function IntegerStack_init_1(list, $this) {
    $this = $this || Object.create(IntegerStack.prototype);
    IntegerList_init_1(list, $this);
    IntegerStack.call($this);
    return $this;
  }
  function InterpreterDataReader() {
    InterpreterDataReader_instance = this;
  }
  function InterpreterDataReader$InterpreterData() {
    this.atn_8be2vx$ = null;
    this.vocabulary_8be2vx$ = null;
    this.ruleNames_8be2vx$ = null;
    this.channels_8be2vx$ = null;
    this.modes_8be2vx$ = null;
  }
  InterpreterDataReader$InterpreterData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterpreterData',
    interfaces: []
  };
  InterpreterDataReader.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'InterpreterDataReader',
    interfaces: []
  };
  var InterpreterDataReader_instance = null;
  function InterpreterDataReader_getInstance() {
    if (InterpreterDataReader_instance === null) {
      new InterpreterDataReader();
    }
    return InterpreterDataReader_instance;
  }
  function Interval(a, b) {
    Interval$Companion_getInstance();
    this.a = a;
    this.b = b;
  }
  Interval.prototype.length = function () {
    return this.b < this.a ? 0 : this.b - this.a + 1 | 0;
  };
  Interval.prototype.equals = function (o) {
    var tmp$;
    if (o == null || !Kotlin.isType(o, Interval)) {
      return false;
    }
    var other = (tmp$ = o) == null || Kotlin.isType(tmp$, Interval) ? tmp$ : throwCCE();
    return this.a === ensureNotNull(other).a && this.b === other.b;
  };
  Interval.prototype.hashCode = function () {
    var hash = 23;
    hash = (hash * 31 | 0) + this.a | 0;
    hash = (hash * 31 | 0) + this.b | 0;
    return hash;
  };
  Interval.prototype.startsBeforeDisjoint_yeqsgl$ = function (other) {
    return this.a < other.a && this.b < other.a;
  };
  Interval.prototype.startsBeforeNonDisjoint_yeqsgl$ = function (other) {
    return this.a <= other.a && this.b >= other.a;
  };
  Interval.prototype.startsAfter_yeqsgl$ = function (other) {
    return this.a > other.a;
  };
  Interval.prototype.startsAfterDisjoint_yeqsgl$ = function (other) {
    return this.a > other.b;
  };
  Interval.prototype.startsAfterNonDisjoint_yeqsgl$ = function (other) {
    return this.a > other.a && this.a <= other.b;
  };
  Interval.prototype.disjoint_yeqsgl$ = function (other) {
    return this.startsBeforeDisjoint_yeqsgl$(other) || this.startsAfterDisjoint_yeqsgl$(other);
  };
  Interval.prototype.adjacent_yeqsgl$ = function (other) {
    return this.a === (other.b + 1 | 0) || this.b === (other.a - 1 | 0);
  };
  Interval.prototype.properlyContains_yeqsgl$ = function (other) {
    return other.a >= this.a && other.b <= this.b;
  };
  Interval.prototype.union_yeqsgl$ = function (other) {
    return Interval$Companion_getInstance().of_vux9f0$(Math_getInstance().min_vux9f0$(this.a, other.a), Math_getInstance().max_vux9f0$(this.b, other.b));
  };
  Interval.prototype.intersection_yeqsgl$ = function (other) {
    return Interval$Companion_getInstance().of_vux9f0$(Math_getInstance().max_vux9f0$(this.a, other.a), Math_getInstance().min_vux9f0$(this.b, other.b));
  };
  Interval.prototype.differenceNotProperlyContained_yeqsgl$ = function (other) {
    var diff = null;
    if (other.startsBeforeNonDisjoint_yeqsgl$(this)) {
      diff = Interval$Companion_getInstance().of_vux9f0$(Math_getInstance().max_vux9f0$(this.a, other.b + 1 | 0), this.b);
    } else if (other.startsAfterNonDisjoint_yeqsgl$(this)) {
      diff = Interval$Companion_getInstance().of_vux9f0$(this.a, other.a - 1 | 0);
    }
    return diff;
  };
  Interval.prototype.toString = function () {
    return this.a.toString() + '..' + toString(this.b);
  };
  function Interval$Companion() {
    Interval$Companion_instance = this;
    this.INTERVAL_POOL_MAX_VALUE = 1000;
    this.INVALID = new Interval(-1, -2);
    this.cache_8be2vx$ = Kotlin.newArray(this.INTERVAL_POOL_MAX_VALUE + 1 | 0, null);
    this.creates = 0;
    this.misses = 0;
    this.hits = 0;
    this.outOfRange = 0;
  }
  Interval$Companion.prototype.of_vux9f0$ = function (a, b) {
    if (a !== b || a < 0 || a > this.INTERVAL_POOL_MAX_VALUE) {
      return new Interval(a, b);
    }
    if (this.cache_8be2vx$[a] == null) {
      this.cache_8be2vx$[a] = new Interval(a, a);
    }
    return ensureNotNull(this.cache_8be2vx$[a]);
  };
  Interval$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Interval$Companion_instance = null;
  function Interval$Companion_getInstance() {
    if (Interval$Companion_instance === null) {
      new Interval$Companion();
    }
    return Interval$Companion_instance;
  }
  Interval.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Interval',
    interfaces: []
  };
  function IntervalSet() {
    IntervalSet$Companion_getInstance();
    this.intervals_0 = null;
    this.isReadonly_6jc71z$_0 = false;
  }
  Object.defineProperty(IntervalSet.prototype, 'isNil', {
    configurable: true,
    get: function () {
      return this.intervals_0 == null || ensureNotNull(this.intervals_0).isEmpty();
    }
  });
  Object.defineProperty(IntervalSet.prototype, 'maxElement', {
    configurable: true,
    get: function () {
      if (this.isNil) {
        throw RuntimeException_init_0('set is empty');
      }
      var last = ensureNotNull(this.intervals_0).get_za3lpa$(ensureNotNull(this.intervals_0).size - 1 | 0);
      return last.b;
    }
  });
  Object.defineProperty(IntervalSet.prototype, 'minElement', {
    configurable: true,
    get: function () {
      if (this.isNil) {
        throw RuntimeException_init_0('set is empty');
      }
      return ensureNotNull(this.intervals_0).get_za3lpa$(0).a;
    }
  });
  Object.defineProperty(IntervalSet.prototype, 'isReadonly', {
    configurable: true,
    get: function () {
      return this.isReadonly_6jc71z$_0;
    },
    set: function (readonly) {
      if (this.isReadonly_6jc71z$_0 && !readonly)
        throw IllegalStateException_init("can't alter readonly IntervalSet");
      this.isReadonly_6jc71z$_0 = readonly;
    }
  });
  IntervalSet.prototype.clear = function () {
    if (this.isReadonly)
      throw IllegalStateException_init("can't alter readonly IntervalSet");
    ensureNotNull(this.intervals_0).clear();
  };
  IntervalSet.prototype.add_za3lpa$ = function (el) {
    if (this.isReadonly)
      throw IllegalStateException_init("can't alter readonly IntervalSet");
    this.add_vux9f0$(el, el);
  };
  IntervalSet.prototype.add_vux9f0$ = function (a, b) {
    this.add_0(Interval$Companion_getInstance().of_vux9f0$(a, b));
  };
  IntervalSet.prototype.add_0 = function (addition) {
    if (this.isReadonly)
      throw IllegalStateException_init("can't alter readonly IntervalSet");
    if (addition.b < addition.a) {
      return;
    }
    var iter = ensureNotNull(this.intervals_0).listIterator();
    while (iter.hasNext()) {
      var r = iter.next();
      if (addition != null ? addition.equals(r) : null) {
        return;
      }
      if (addition.adjacent_yeqsgl$(r) || !addition.disjoint_yeqsgl$(r)) {
        var bigger = addition.union_yeqsgl$(r);
        iter.set_11rb$(bigger);
        while (iter.hasNext()) {
          var next = iter.next();
          if (!bigger.adjacent_yeqsgl$(next) && bigger.disjoint_yeqsgl$(next)) {
            break;
          }
          iter.remove();
          iter.previous();
          iter.set_11rb$(bigger.union_yeqsgl$(next));
          iter.next();
        }
        return;
      }
      if (addition.startsBeforeDisjoint_yeqsgl$(r)) {
        iter.previous();
        iter.add_11rb$(addition);
        return;
      }
    }
    ensureNotNull(this.intervals_0).add_11rb$(addition);
  };
  IntervalSet.prototype.addAll_lqo98a$ = function (set) {
    var tmp$, tmp$_0;
    if (set == null) {
      return this;
    }
    if (Kotlin.isType(set, IntervalSet)) {
      var other = (tmp$ = set) == null || Kotlin.isType(tmp$, IntervalSet) ? tmp$ : throwCCE();
      var n = ensureNotNull(ensureNotNull(other).intervals_0).size;
      for (var i = 0; i < n; i++) {
        var I = ensureNotNull(other.intervals_0).get_za3lpa$(i);
        this.add_vux9f0$(I.a, I.b);
      }
    } else {
      tmp$_0 = ensureNotNull(set).toList().iterator();
      while (tmp$_0.hasNext()) {
        var value = tmp$_0.next();
        this.add_za3lpa$(value);
      }
    }
    return this;
  };
  IntervalSet.prototype.complement_vux9f0$ = function (minElement, maxElement) {
    return this.complement_lqo98a$(IntervalSet$Companion_getInstance().of_vux9f0$(minElement, maxElement));
  };
  IntervalSet.prototype.complement_lqo98a$ = function (vocabulary) {
    if (vocabulary == null || ensureNotNull(vocabulary).isNil) {
      return null;
    }
    var vocabularyIS;
    if (Kotlin.isType(vocabulary, IntervalSet)) {
      vocabularyIS = vocabulary;
    } else {
      vocabularyIS = IntervalSet_init_1(new Int32Array([]));
      vocabularyIS.addAll_lqo98a$(vocabulary);
    }
    return vocabularyIS.subtract_lqo98a$(this);
  };
  IntervalSet.prototype.subtract_lqo98a$ = function (a) {
    var tmp$, tmp$_0;
    if (a == null || ensureNotNull(a).isNil) {
      return IntervalSet_init_0(this);
    }
    if (Kotlin.isType(a, IntervalSet)) {
      tmp$_0 = (tmp$ = a) == null || Kotlin.isType(tmp$, IntervalSet) ? tmp$ : throwCCE();
      return IntervalSet$Companion_getInstance().subtract_807a5o$(this, tmp$_0);
    }
    var other = IntervalSet_init_1(new Int32Array([]));
    other.addAll_lqo98a$(a);
    return IntervalSet$Companion_getInstance().subtract_807a5o$(this, other);
  };
  IntervalSet.prototype.or_lqo98a$ = function (a) {
    var o = IntervalSet_init_1(new Int32Array([]));
    o.addAll_lqo98a$(this);
    o.addAll_lqo98a$(a);
    return o;
  };
  IntervalSet.prototype.and_lqo98a$ = function (other) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (other == null) {
      return null;
    }
    var myIntervals = this.intervals_0;
    var theirIntervals = (Kotlin.isType(tmp$ = other, IntervalSet) ? tmp$ : throwCCE()).intervals_0;
    var intersection = null;
    var mySize = ensureNotNull(myIntervals).size;
    var theirSize = ensureNotNull(theirIntervals).size;
    var i = 0;
    var j = 0;
    while (i < mySize && j < theirSize) {
      var mine = myIntervals.get_za3lpa$(i);
      var theirs = theirIntervals.get_za3lpa$(j);
      if (mine.startsBeforeDisjoint_yeqsgl$(theirs)) {
        i = i + 1 | 0;
      } else if (theirs.startsBeforeDisjoint_yeqsgl$(mine)) {
        j = j + 1 | 0;
      } else if (mine.properlyContains_yeqsgl$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_1(new Int32Array([]));
        }
        intersection.add_0(mine.intersection_yeqsgl$(theirs));
        j = j + 1 | 0;
      } else if (theirs.properlyContains_yeqsgl$(mine)) {
        if (intersection == null) {
          intersection = IntervalSet_init_1(new Int32Array([]));
        }
        intersection.add_0(mine.intersection_yeqsgl$(theirs));
        i = i + 1 | 0;
      } else if (!mine.disjoint_yeqsgl$(theirs)) {
        if (intersection == null) {
          intersection = IntervalSet_init_1(new Int32Array([]));
        }
        intersection.add_0(mine.intersection_yeqsgl$(theirs));
        if (mine.startsAfterNonDisjoint_yeqsgl$(theirs)) {
          tmp$_0 = j, j = tmp$_0 + 1 | 0;
        } else if (theirs.startsAfterNonDisjoint_yeqsgl$(mine)) {
          tmp$_1 = i, i = tmp$_1 + 1 | 0;
        }
      }
    }
    if (intersection == null) {
      tmp$_2 = IntervalSet_init_1(new Int32Array([]));
    } else
      tmp$_2 = intersection;
    return tmp$_2;
  };
  IntervalSet.prototype.contains_za3lpa$ = function (el) {
    var n = ensureNotNull(this.intervals_0).size;
    var l = 0;
    var r = n - 1 | 0;
    while (l <= r) {
      var m = (l + r | 0) / 2 | 0;
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(m);
      var a = I.a;
      var b = I.b;
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
    var tmp$;
    var hash = MurmurHash_getInstance().initialize_za3lpa$();
    tmp$ = ensureNotNull(this.intervals_0).iterator();
    while (tmp$.hasNext()) {
      var I = tmp$.next();
      hash = MurmurHash_getInstance().update_vux9f0$(hash, I.a);
      hash = MurmurHash_getInstance().update_vux9f0$(hash, I.b);
    }
    hash = MurmurHash_getInstance().finish_vux9f0$(hash, ensureNotNull(this.intervals_0).size * 2 | 0);
    return hash;
  };
  IntervalSet.prototype.equals = function (obj) {
    var tmp$;
    if (obj == null || !Kotlin.isType(obj, IntervalSet)) {
      return false;
    }
    var other = (tmp$ = obj) == null || Kotlin.isType(tmp$, IntervalSet) ? tmp$ : throwCCE();
    return equals(this.intervals_0, ensureNotNull(other).intervals_0);
  };
  IntervalSet.prototype.toString = function () {
    return this.toString_6taknv$(false);
  };
  IntervalSet.prototype.toString_6taknv$ = function (elemAreChar) {
    var buf = StringBuilder_init();
    if (this.intervals_0 == null || ensureNotNull(this.intervals_0).isEmpty()) {
      return '{}';
    }
    if (this.size() > 1) {
      buf.append_pdl1vj$('{');
    }
    var iter = ensureNotNull(this.intervals_0).iterator();
    while (iter.hasNext()) {
      var I = iter.next();
      var a = I.a;
      var b = I.b;
      if (a === b) {
        if (a === Token$Companion_getInstance().EOF)
          buf.append_pdl1vj$('<EOF>');
        else if (elemAreChar) {
          throw new NotImplementedError_init();
        } else
          buf.append_s8jyv4$(a);
      } else {
        if (elemAreChar) {
          throw new NotImplementedError_init();
        } else
          buf.append_s8jyv4$(a).append_pdl1vj$('..').append_s8jyv4$(b);
      }
      if (iter.hasNext()) {
        buf.append_pdl1vj$(', ');
      }
    }
    if (this.size() > 1) {
      buf.append_pdl1vj$('}');
    }
    return buf.toString();
  };
  IntervalSet.prototype.toString_kand9s$ = function (tokenNames) {
    var tmp$;
    return this.toString_hr977m$(VocabularyImpl$Companion_getInstance().fromTokenNames_t85qxa$(Kotlin.isArray(tmp$ = tokenNames) ? tmp$ : throwCCE()));
  };
  IntervalSet.prototype.toString_hr977m$ = function (vocabulary) {
    var buf = StringBuilder_init();
    if (this.intervals_0 == null || ensureNotNull(this.intervals_0).isEmpty()) {
      return '{}';
    }
    if (this.size() > 1) {
      buf.append_pdl1vj$('{');
    }
    var iter = ensureNotNull(this.intervals_0).iterator();
    while (iter.hasNext()) {
      var I = iter.next();
      var a = I.a;
      var b = I.b;
      if (a === b) {
        buf.append_pdl1vj$(this.elementName_0(vocabulary, a));
      } else {
        for (var i = a; i <= b; i++) {
          if (i > a)
            buf.append_pdl1vj$(', ');
          buf.append_pdl1vj$(this.elementName_0(vocabulary, i));
        }
      }
      if (iter.hasNext()) {
        buf.append_pdl1vj$(', ');
      }
    }
    if (this.size() > 1) {
      buf.append_pdl1vj$('}');
    }
    return buf.toString();
  };
  IntervalSet.prototype.elementName_1 = function (tokenNames, a) {
    var tmp$;
    return this.elementName_0(VocabularyImpl$Companion_getInstance().fromTokenNames_t85qxa$(Kotlin.isArray(tmp$ = tokenNames) ? tmp$ : throwCCE()), a);
  };
  IntervalSet.prototype.elementName_0 = function (vocabulary, a) {
    var tmp$;
    if (a === Token$Companion_getInstance().EOF) {
      tmp$ = '<EOF>';
    } else if (a === Token$Companion_getInstance().EPSILON) {
      tmp$ = '<EPSILON>';
    } else {
      tmp$ = vocabulary.getDisplayName_za3lpa$(a);
    }
    return tmp$;
  };
  IntervalSet.prototype.size = function () {
    var n = 0;
    var numIntervals = ensureNotNull(this.intervals_0).size;
    if (numIntervals === 1) {
      var firstInterval = ensureNotNull(this.intervals_0).get_za3lpa$(0);
      return firstInterval.b - firstInterval.a + 1 | 0;
    }
    for (var i = 0; i < numIntervals; i++) {
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(i);
      n = n + (I.b - I.a + 1) | 0;
    }
    return n;
  };
  IntervalSet.prototype.toIntegerList = function () {
    var values = IntegerList_init_0(this.size());
    var n = ensureNotNull(this.intervals_0).size;
    for (var i = 0; i < n; i++) {
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(i);
      var a = I.a;
      var b = I.b;
      for (var v = a; v <= b; v++) {
        values.add_za3lpa$(v);
      }
    }
    return values;
  };
  IntervalSet.prototype.toList = function () {
    var values = ArrayList_init_0();
    var n = ensureNotNull(this.intervals_0).size;
    for (var i = 0; i < n; i++) {
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(i);
      var a = I.a;
      var b = I.b;
      for (var v = a; v <= b; v++) {
        values.add_11rb$(v);
      }
    }
    return values;
  };
  IntervalSet.prototype.toSet = function () {
    var tmp$;
    var s = HashSet_init_0();
    tmp$ = ensureNotNull(this.intervals_0).iterator();
    while (tmp$.hasNext()) {
      var I = tmp$.next();
      var a = I.a;
      var b = I.b;
      for (var v = a; v <= b; v++) {
        s.add_11rb$(v);
      }
    }
    return s;
  };
  IntervalSet.prototype.get_za3lpa$ = function (i) {
    var n = ensureNotNull(this.intervals_0).size;
    var index = 0;
    for (var j = 0; j < n; j++) {
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(j);
      var a = I.a;
      var b = I.b;
      for (var v = a; v <= b; v++) {
        if (index === i) {
          return v;
        }
        index = index + 1 | 0;
      }
    }
    return -1;
  };
  IntervalSet.prototype.toArray = function () {
    return this.toIntegerList().toArray();
  };
  IntervalSet.prototype.remove_za3lpa$ = function (el) {
    if (this.isReadonly)
      throw IllegalStateException_init("can't alter readonly IntervalSet");
    var n = ensureNotNull(this.intervals_0).size;
    for (var i = 0; i < n; i++) {
      var I = ensureNotNull(this.intervals_0).get_za3lpa$(i);
      var a = I.a;
      var b = I.b;
      if (el < a) {
        break;
      }
      if (el === a && el === b) {
        ensureNotNull(this.intervals_0).removeAt_za3lpa$(i);
        break;
      }
      if (el === a) {
        I.a = I.a + 1 | 0;
        break;
      }
      if (el === b) {
        I.b = I.b - 1 | 0;
        break;
      }
      if (el > a && el < b) {
        var oldb = I.b;
        I.b = el - 1 | 0;
        this.add_vux9f0$(el + 1 | 0, oldb);
      }
    }
  };
  function IntervalSet$Companion() {
    IntervalSet$Companion_instance = this;
    this.COMPLETE_CHAR_SET = IntervalSet$Companion_getInstance().of_vux9f0$(Lexer$Companion_getInstance().MIN_CHAR_VALUE, Lexer$Companion_getInstance().MAX_CHAR_VALUE);
    this.COMPLETE_CHAR_SET.isReadonly = true;
    this.EMPTY_SET = IntervalSet_init_1(new Int32Array([]));
    this.EMPTY_SET.isReadonly = true;
  }
  IntervalSet$Companion.prototype.of_za3lpa$ = function (a) {
    var s = IntervalSet_init_1(new Int32Array([]));
    s.add_za3lpa$(a);
    return s;
  };
  IntervalSet$Companion.prototype.of_vux9f0$ = function (a, b) {
    var s = IntervalSet_init_1(new Int32Array([]));
    s.add_vux9f0$(a, b);
    return s;
  };
  IntervalSet$Companion.prototype.or_4iytz$ = function (sets) {
    var tmp$;
    var r = IntervalSet_init_1(new Int32Array([]));
    for (tmp$ = 0; tmp$ !== sets.length; ++tmp$) {
      var s = sets[tmp$];
      r.addAll_lqo98a$(s);
    }
    return r;
  };
  IntervalSet$Companion.prototype.subtract_807a5o$ = function (left, right) {
    if (left == null || left.isNil) {
      return IntervalSet_init_1(new Int32Array([]));
    }
    var result = IntervalSet_init_0(left);
    if (right == null || right.isNil) {
      return result;
    }
    var resultI = 0;
    var rightI = 0;
    while (resultI < ensureNotNull(result.intervals_0).size && rightI < ensureNotNull(right.intervals_0).size) {
      var resultInterval = ensureNotNull(result.intervals_0).get_za3lpa$(resultI);
      var rightInterval = ensureNotNull(right.intervals_0).get_za3lpa$(rightI);
      if (rightInterval.b < resultInterval.a) {
        rightI = rightI + 1 | 0;
        continue;
      }
      if (rightInterval.a > resultInterval.b) {
        resultI = resultI + 1 | 0;
        continue;
      }
      var beforeCurrent = null;
      var afterCurrent = null;
      if (rightInterval.a > resultInterval.a) {
        beforeCurrent = new Interval(resultInterval.a, rightInterval.a - 1 | 0);
      }
      if (rightInterval.b < resultInterval.b) {
        afterCurrent = new Interval(rightInterval.b + 1 | 0, resultInterval.b);
      }
      if (beforeCurrent != null) {
        if (afterCurrent != null) {
          ensureNotNull(result.intervals_0).set_wxm5ur$(resultI, beforeCurrent);
          ensureNotNull(result.intervals_0).add_wxm5ur$(resultI + 1 | 0, afterCurrent);
          resultI = resultI + 1 | 0;
          rightI = rightI + 1 | 0;
          continue;
        } else {
          ensureNotNull(result.intervals_0).set_wxm5ur$(resultI, beforeCurrent);
          resultI = resultI + 1 | 0;
          continue;
        }
      } else {
        if (afterCurrent != null) {
          ensureNotNull(result.intervals_0).set_wxm5ur$(resultI, afterCurrent);
          rightI = rightI + 1 | 0;
          continue;
        } else {
          ensureNotNull(result.intervals_0).removeAt_za3lpa$(resultI);
          continue;
        }
      }
    }
    return result;
  };
  IntervalSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntervalSet$Companion_instance = null;
  function IntervalSet$Companion_getInstance() {
    if (IntervalSet$Companion_instance === null) {
      new IntervalSet$Companion();
    }
    return IntervalSet$Companion_instance;
  }
  IntervalSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntervalSet',
    interfaces: [IntSet]
  };
  function IntervalSet_init(intervals, $this) {
    $this = $this || Object.create(IntervalSet.prototype);
    IntervalSet.call($this);
    $this.intervals_0 = intervals;
    return $this;
  }
  function IntervalSet_init_0(set, $this) {
    $this = $this || Object.create(IntervalSet.prototype);
    IntervalSet_init_1(new Int32Array([]), $this);
    $this.addAll_lqo98a$(set);
    return $this;
  }
  function IntervalSet_init_1(els, $this) {
    $this = $this || Object.create(IntervalSet.prototype);
    IntervalSet.call($this);
    var tmp$;
    if (els == null) {
      $this.intervals_0 = ArrayList_init(2);
    } else {
      $this.intervals_0 = ArrayList_init(els.length);
      for (tmp$ = 0; tmp$ !== els.length; ++tmp$) {
        var e = els[tmp$];
        $this.add_za3lpa$(e);
      }
    }
    return $this;
  }
  function LogManager() {
  }
  LogManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogManager',
    interfaces: []
  };
  function MultiMap() {
    this.$delegate_x13q47$_0 = LinkedHashMap_init();
  }
  Object.defineProperty(MultiMap.prototype, 'pairs', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var pairs = ArrayList_init_0();
      tmp$ = this.keys.iterator();
      while (tmp$.hasNext()) {
        var key = tmp$.next();
        tmp$_0 = ensureNotNull(this.get_11rb$(key)).iterator();
        while (tmp$_0.hasNext()) {
          var value = tmp$_0.next();
          pairs.add_11rb$(new Pair(key, value));
        }
      }
      return pairs;
    }
  });
  MultiMap.prototype.map_xwzc9p$ = function (key, value) {
    var elementsForKey = this.get_11rb$(key);
    if (elementsForKey == null) {
      elementsForKey = ArrayList_init_0();
      this.put_xwzc9p$(key, elementsForKey);
    }
    elementsForKey.add_11rb$(value);
  };
  Object.defineProperty(MultiMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.$delegate_x13q47$_0.entries;
    }
  });
  Object.defineProperty(MultiMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.$delegate_x13q47$_0.keys;
    }
  });
  Object.defineProperty(MultiMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.$delegate_x13q47$_0.size;
    }
  });
  Object.defineProperty(MultiMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.$delegate_x13q47$_0.values;
    }
  });
  MultiMap.prototype.clear = function () {
    return this.$delegate_x13q47$_0.clear();
  };
  MultiMap.prototype.containsKey_11rb$ = function (key) {
    return this.$delegate_x13q47$_0.containsKey_11rb$(key);
  };
  MultiMap.prototype.containsValue_11rc$ = function (value) {
    return this.$delegate_x13q47$_0.containsValue_11rc$(value);
  };
  MultiMap.prototype.get_11rb$ = function (key) {
    return this.$delegate_x13q47$_0.get_11rb$(key);
  };
  MultiMap.prototype.isEmpty = function () {
    return this.$delegate_x13q47$_0.isEmpty();
  };
  MultiMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.$delegate_x13q47$_0.put_xwzc9p$(key, value);
  };
  MultiMap.prototype.putAll_a2k3zr$ = function (from) {
    return this.$delegate_x13q47$_0.putAll_a2k3zr$(from);
  };
  MultiMap.prototype.remove_11rb$ = function (key) {
    return this.$delegate_x13q47$_0.remove_11rb$(key);
  };
  MultiMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiMap',
    interfaces: [MutableMap]
  };
  function MurmurHash() {
    MurmurHash_instance = this;
    this.DEFAULT_SEED_0 = 0;
  }
  MurmurHash.prototype.initialize_za3lpa$ = function (seed) {
    if (seed === void 0)
      seed = this.DEFAULT_SEED_0;
    return seed;
  };
  MurmurHash.prototype.update_vux9f0$ = function (hash, value) {
    var hash_0 = hash;
    var c1 = -862048943;
    var c2 = 461845907;
    var r1 = 15;
    var r2 = 13;
    var m = 5;
    var n = -430675100;
    var k = value;
    k = Kotlin.imul(k, c1);
    k = k << r1 | k >>> 32 - r1;
    k = Kotlin.imul(k, c2);
    hash_0 = hash_0 ^ k;
    hash_0 = hash_0 << r2 | hash_0 >>> 32 - r2;
    hash_0 = Kotlin.imul(hash_0, m) + n | 0;
    return hash_0;
  };
  MurmurHash.prototype.update_6t2rgq$ = function (hash, value) {
    var tmp$;
    return this.update_vux9f0$(hash, (tmp$ = value != null ? hashCode(value) : null) != null ? tmp$ : 0);
  };
  MurmurHash.prototype.finish_vux9f0$ = function (hash, numberOfWords) {
    var hash_0 = hash;
    hash_0 = hash_0 ^ (numberOfWords * 4 | 0);
    hash_0 = hash_0 ^ hash_0 >>> 16;
    hash_0 = Kotlin.imul(hash_0, -2048144789);
    hash_0 = hash_0 ^ hash_0 >>> 13;
    hash_0 = Kotlin.imul(hash_0, -1028477387);
    hash_0 = hash_0 ^ hash_0 >>> 16;
    return hash_0;
  };
  MurmurHash.prototype.hashCode_naghps$ = function (data, seed) {
    var tmp$;
    var hash = this.initialize_za3lpa$(seed);
    for (tmp$ = 0; tmp$ !== data.length; ++tmp$) {
      var value = data[tmp$];
      hash = this.update_6t2rgq$(hash, value);
    }
    hash = this.finish_vux9f0$(hash, data.length);
    return hash;
  };
  MurmurHash.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MurmurHash',
    interfaces: []
  };
  var MurmurHash_instance = null;
  function MurmurHash_getInstance() {
    if (MurmurHash_instance === null) {
      new MurmurHash();
    }
    return MurmurHash_instance;
  }
  function NotNull() {
  }
  NotNull.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NotNull',
    interfaces: [Annotation]
  };
  function ObjectEqualityComparator() {
    ObjectEqualityComparator$Companion_getInstance();
    AbstractEqualityComparator.call(this);
  }
  ObjectEqualityComparator.prototype.hashCode_11rb$ = function (obj) {
    var tmp$;
    return (tmp$ = obj != null ? hashCode(obj) : null) != null ? tmp$ : 0;
  };
  ObjectEqualityComparator.prototype.equals_xwzc9q$ = function (a, b) {
    var tmp$;
    if (a == null) {
      tmp$ = b == null;
    } else
      tmp$ = equals(a, b);
    return tmp$;
  };
  function ObjectEqualityComparator$Companion() {
    ObjectEqualityComparator$Companion_instance = this;
    this.INSTANCE = new ObjectEqualityComparator();
  }
  ObjectEqualityComparator$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ObjectEqualityComparator$Companion_instance = null;
  function ObjectEqualityComparator$Companion_getInstance() {
    if (ObjectEqualityComparator$Companion_instance === null) {
      new ObjectEqualityComparator$Companion();
    }
    return ObjectEqualityComparator$Companion_instance;
  }
  ObjectEqualityComparator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectEqualityComparator',
    interfaces: [AbstractEqualityComparator]
  };
  function OrderedHashSet() {
    this.$delegate_66auzx$_0 = LinkedHashSet_init();
  }
  Object.defineProperty(OrderedHashSet.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.$delegate_66auzx$_0.size;
    }
  });
  OrderedHashSet.prototype.contains_11rb$ = function (element) {
    return this.$delegate_66auzx$_0.contains_11rb$(element);
  };
  OrderedHashSet.prototype.containsAll_brywnq$ = function (elements) {
    return this.$delegate_66auzx$_0.containsAll_brywnq$(elements);
  };
  OrderedHashSet.prototype.isEmpty = function () {
    return this.$delegate_66auzx$_0.isEmpty();
  };
  OrderedHashSet.prototype.iterator = function () {
    return this.$delegate_66auzx$_0.iterator();
  };
  OrderedHashSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrderedHashSet',
    interfaces: [Set]
  };
  function ParseCancellationException() {
    this.name = 'ParseCancellationException';
  }
  ParseCancellationException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseCancellationException',
    interfaces: [RuntimeException]
  };
  function ParseCancellationException_init($this) {
    $this = $this || Object.create(ParseCancellationException.prototype);
    RuntimeException_init($this);
    ParseCancellationException.call($this);
    return $this;
  }
  function ParseCancellationException_init_0(message, $this) {
    $this = $this || Object.create(ParseCancellationException.prototype);
    RuntimeException_init($this);
    ParseCancellationException.call($this);
    return $this;
  }
  function ParseCancellationException_init_1(cause, $this) {
    $this = $this || Object.create(ParseCancellationException.prototype);
    RuntimeException_init($this);
    ParseCancellationException.call($this);
    throw new NotImplementedError_init();
  }
  function ParseCancellationException_init_2(message, cause, $this) {
    $this = $this || Object.create(ParseCancellationException.prototype);
    RuntimeException_init($this);
    ParseCancellationException.call($this);
    throw new NotImplementedError_init();
  }
  function Predicate() {
  }
  Predicate.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Predicate',
    interfaces: []
  };
  function Utils() {
    Utils_instance = this;
  }
  Utils.prototype.numNonnull_ltw98x$ = function (data) {
    var tmp$;
    var n = 0;
    if (data == null)
      return n;
    for (tmp$ = 0; tmp$ !== data.length; ++tmp$) {
      var o = data[tmp$];
      if (o != null) {
        n = n + 1 | 0;
      }
    }
    return n;
  };
  Utils.prototype.removeAllElements_mmn0xf$ = function (data, value) {
    if (data == null)
      return;
    while (data.contains_11rb$(value))
      data.remove_11rb$(value);
  };
  Utils.prototype.escapeWhitespace_ivxn3r$ = function (s, escapeSpaces) {
    var tmp$, tmp$_0;
    var buf = StringBuilder_init();
    tmp$ = asCharArray(s);
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = unboxChar(tmp$[tmp$_0]);
      if (c === 32 && escapeSpaces)
        buf.append_s8itvh$(183);
      else if (c === 9)
        buf.append_pdl1vj$('\\t');
      else if (c === 10)
        buf.append_pdl1vj$('\\n');
      else if (c === 13)
        buf.append_pdl1vj$('\\r');
      else
        buf.append_s8itvh$(c);
    }
    return buf.toString();
  };
  function Coroutine$readFile_61zpoe$($this, fileName_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fileName = fileName_0;
  }
  Coroutine$readFile_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readFile_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readFile_61zpoe$.prototype.constructor = Coroutine$readFile_61zpoe$;
  Coroutine$readFile_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Platform_getInstance().readFile_61zpoe$(this.local$fileName, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return asCharArray(this.result_0);
          default:
            this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Utils.prototype.readFile_61zpoe$ = function (fileName_0, continuation_0, suspended) {
    var instance = new Coroutine$readFile_61zpoe$(this, fileName_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  Utils.prototype.toMap_kand9s$ = function (keys) {
    var m = HashMap_init();
    for (var i = 0; i !== keys.length; ++i) {
      var key = keys[i];
      m.put_xwzc9p$(key, i);
    }
    return m;
  };
  Utils.prototype.toCharArray_6h4h2h$ = function (data) {
    return data != null ? data.toCharArray() : null;
  };
  Utils.prototype.toSet_8s8j64$ = function (bits) {
    var s = IntervalSet_init_1(new Int32Array([]));
    var i = bits.nextSetBit_za3lpa$(0);
    while (i >= 0) {
      s.add_za3lpa$(i);
      i = bits.nextSetBit_za3lpa$(i + 1 | 0);
    }
    return s;
  };
  Utils.prototype.expandTabs_9d67ql$ = function (s, tabSize) {
    var tmp$;
    if (s == null)
      return null;
    var buf = StringBuilder_init();
    var col = 0;
    tmp$ = iterator(s);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      switch (element) {
        case 10:
          col = 0;
          buf.append_s8itvh$(element);
          break;
        case 9:
          var n = tabSize - (col % tabSize | 0) | 0;
          col = col + n | 0;
          buf.append_pdl1vj$(this.spaces_za3lpa$(n));
          break;
        default:
          col = col + 1 | 0;
          buf.append_s8itvh$(element);
          break;
      }
    }
    return buf.toString();
  };
  Utils.prototype.spaces_za3lpa$ = function (n) {
    return this.sequence_19mbxw$(n, ' ');
  };
  Utils.prototype.newlines_za3lpa$ = function (n) {
    return this.sequence_19mbxw$(n, '\n');
  };
  Utils.prototype.sequence_19mbxw$ = function (n, s) {
    var buf = StringBuilder_init();
    for (var sp = 1; sp <= n; sp++)
      buf.append_pdl1vj$(s);
    return buf.toString();
  };
  Utils.prototype.count_4wanh1$ = function (s, x) {
    var tmp$;
    var n = 0;
    tmp$ = iterator(s);
    while (tmp$.hasNext()) {
      var element = unboxChar(tmp$.next());
      if (element === x) {
        n = n + 1 | 0;
      }
    }
    return n;
  };
  Utils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Utils',
    interfaces: []
  };
  var Utils_instance = null;
  function Utils_getInstance() {
    if (Utils_instance === null) {
      new Utils();
    }
    return Utils_instance;
  }
  function AbstractParseTreeVisitor() {
  }
  AbstractParseTreeVisitor.prototype.visit_iaqcoz$ = function (tree) {
    return tree.accept_sjdhzy$(this);
  };
  AbstractParseTreeVisitor.prototype.visitChildren_8ff8eq$ = function (node) {
    var result = this.defaultResult();
    var n = node.childCount;
    for (var i = 0; i < n; i++) {
      if (!this.shouldVisitNextChild_r2muk3$(node, result)) {
        break;
      }
      var c = node.getChild_za3lpa$(i);
      var childResult = ensureNotNull(c).accept_sjdhzy$(this);
      result = this.aggregateResult_xwzc9q$(result, ensureNotNull(childResult));
    }
    return result;
  };
  AbstractParseTreeVisitor.prototype.visitTerminal_ww9j2q$ = function (node) {
    return this.defaultResult();
  };
  AbstractParseTreeVisitor.prototype.visitErrorNode_hgqa9i$ = function (node) {
    return this.defaultResult();
  };
  AbstractParseTreeVisitor.prototype.defaultResult = function () {
    return null;
  };
  AbstractParseTreeVisitor.prototype.aggregateResult_xwzc9q$ = function (aggregate, nextResult) {
    return nextResult;
  };
  AbstractParseTreeVisitor.prototype.shouldVisitNextChild_r2muk3$ = function (node, currentResult) {
    return true;
  };
  AbstractParseTreeVisitor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractParseTreeVisitor',
    interfaces: [ParseTreeVisitor]
  };
  function ErrorNode() {
  }
  ErrorNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ErrorNode',
    interfaces: [TerminalNode]
  };
  function ErrorNodeImpl(token) {
    TerminalNodeImpl.call(this, token);
  }
  ErrorNodeImpl.prototype.accept_sjdhzy$ = function (visitor) {
    return visitor.visitErrorNode_hgqa9i$(this);
  };
  ErrorNodeImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ErrorNodeImpl',
    interfaces: [ErrorNode, TerminalNodeImpl]
  };
  function ParseTree() {
  }
  ParseTree.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParseTree',
    interfaces: [SyntaxTree]
  };
  function ParseTreeListener() {
  }
  ParseTreeListener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParseTreeListener',
    interfaces: []
  };
  function ParseTreeProperty() {
    this.annotations_0 = new IdentityHashMap();
  }
  ParseTreeProperty.prototype.get_iaqcoz$ = function (node) {
    return ensureNotNull(this.annotations_0.get_11rb$(node));
  };
  ParseTreeProperty.prototype.put_bfeeh4$ = function (node, value) {
    this.annotations_0.put_xwzc9p$(node, value);
  };
  ParseTreeProperty.prototype.removeFrom_iaqcoz$ = function (node) {
    return ensureNotNull(this.annotations_0.remove_11rb$(node));
  };
  ParseTreeProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseTreeProperty',
    interfaces: []
  };
  function ParseTreeVisitor() {
  }
  ParseTreeVisitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ParseTreeVisitor',
    interfaces: []
  };
  function ParseTreeWalker() {
    ParseTreeWalker$Companion_getInstance();
  }
  ParseTreeWalker.prototype.walk_pplowy$ = function (listener, t) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(t, ErrorNode)) {
      listener.visitErrorNode_hgqa9i$(Kotlin.isType(tmp$ = t, ErrorNode) ? tmp$ : throwCCE());
      return;
    } else if (Kotlin.isType(t, TerminalNode)) {
      listener.visitTerminal_ww9j2q$(Kotlin.isType(tmp$_0 = t, TerminalNode) ? tmp$_0 : throwCCE());
      return;
    }
    var r = Kotlin.isType(tmp$_1 = t, RuleNode) ? tmp$_1 : throwCCE();
    this.enterRule_7k1k0d$(listener, r);
    var n = r.childCount;
    for (var i = 0; i < n; i++) {
      this.walk_pplowy$(listener, ensureNotNull(r.getChild_za3lpa$(i)));
    }
    this.exitRule_7k1k0d$(listener, r);
  };
  ParseTreeWalker.prototype.enterRule_7k1k0d$ = function (listener, r) {
    var tmp$;
    var ctx = Kotlin.isType(tmp$ = r.ruleContext, ParserRuleContext) ? tmp$ : throwCCE();
    listener.enterEveryRule_1b5y54$(ctx);
    ctx.enterRule_pkisj3$(listener);
  };
  ParseTreeWalker.prototype.exitRule_7k1k0d$ = function (listener, r) {
    var tmp$;
    var ctx = Kotlin.isType(tmp$ = r.ruleContext, ParserRuleContext) ? tmp$ : throwCCE();
    ctx.exitRule_pkisj3$(listener);
    listener.exitEveryRule_1b5y54$(ctx);
  };
  function ParseTreeWalker$Companion() {
    ParseTreeWalker$Companion_instance = this;
    this.DEFAULT = new ParseTreeWalker();
  }
  ParseTreeWalker$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ParseTreeWalker$Companion_instance = null;
  function ParseTreeWalker$Companion_getInstance() {
    if (ParseTreeWalker$Companion_instance === null) {
      new ParseTreeWalker$Companion();
    }
    return ParseTreeWalker$Companion_instance;
  }
  ParseTreeWalker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseTreeWalker',
    interfaces: []
  };
  function RuleNode() {
  }
  RuleNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RuleNode',
    interfaces: [ParseTree]
  };
  function SyntaxTree() {
  }
  SyntaxTree.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SyntaxTree',
    interfaces: [Tree]
  };
  function TerminalNode() {
  }
  TerminalNode.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TerminalNode',
    interfaces: [ParseTree]
  };
  function TerminalNodeImpl(symbol) {
    this.symbol_hyveme$_0 = symbol;
    this.parent_xoijuc$_0 = null;
  }
  Object.defineProperty(TerminalNodeImpl.prototype, 'symbol', {
    get: function () {
      return this.symbol_hyveme$_0;
    },
    set: function (symbol) {
      this.symbol_hyveme$_0 = symbol;
    }
  });
  TerminalNodeImpl.prototype.assignParent_107ici$ = function (value) {
    this.parent_xoijuc$_0 = value;
  };
  TerminalNodeImpl.prototype.readParent = function () {
    return this.parent_xoijuc$_0;
  };
  Object.defineProperty(TerminalNodeImpl.prototype, 'sourceInterval', {
    configurable: true,
    get: function () {
      if (this.symbol == null)
        return Interval$Companion_getInstance().INVALID;
      var tokenIndex = ensureNotNull(this.symbol).tokenIndex;
      return new Interval(tokenIndex, tokenIndex);
    }
  });
  Object.defineProperty(TerminalNodeImpl.prototype, 'childCount', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(TerminalNodeImpl.prototype, 'text', {
    configurable: true,
    get: function () {
      return ensureNotNull(ensureNotNull(this.symbol).text);
    }
  });
  TerminalNodeImpl.prototype.getChild_za3lpa$ = function (i) {
    return null;
  };
  Object.defineProperty(TerminalNodeImpl.prototype, 'payload', {
    configurable: true,
    get: function () {
      return this.symbol;
    }
  });
  TerminalNodeImpl.prototype.accept_sjdhzy$ = function (visitor) {
    return visitor.visitTerminal_ww9j2q$(this);
  };
  TerminalNodeImpl.prototype.toStringTree_yo2s5h$ = function (parser) {
    return this.toString();
  };
  TerminalNodeImpl.prototype.toString = function () {
    return ensureNotNull(this.symbol).type === Token$Companion_getInstance().EOF ? '<EOF>' : ensureNotNull(ensureNotNull(this.symbol).text);
  };
  TerminalNodeImpl.prototype.toStringTree = function () {
    return this.toString();
  };
  TerminalNodeImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TerminalNodeImpl',
    interfaces: [TerminalNode]
  };
  function Tree() {
  }
  Tree.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Tree',
    interfaces: []
  };
  function Trees() {
    Trees_instance = this;
  }
  Trees.prototype.toStringTree_bxzmte$ = function (t, recog) {
    var ruleNames = recog != null ? recog.ruleNames : null;
    var ruleNamesList = ruleNames != null ? listOf(ruleNames.slice()) : null;
    return this.toStringTree_86pqm2$(t, ruleNamesList);
  };
  Trees.prototype.toStringTree_86pqm2$ = function (t, ruleNames) {
    if (ruleNames === void 0)
      ruleNames = null;
    var tmp$;
    var s = Utils_getInstance().escapeWhitespace_ivxn3r$(this.getNodeText_86pqm2$(t, ruleNames), false);
    if (t.childCount === 0)
      return s;
    var buf = StringBuilder_init();
    buf.append_pdl1vj$('(');
    s = Utils_getInstance().escapeWhitespace_ivxn3r$(this.getNodeText_86pqm2$(t, ruleNames), false);
    buf.append_pdl1vj$(s);
    buf.append_s8itvh$(32);
    tmp$ = t.childCount;
    for (var i = 0; i < tmp$; i++) {
      if (i > 0)
        buf.append_s8itvh$(32);
      buf.append_pdl1vj$(this.toStringTree_86pqm2$(ensureNotNull(t.getChild_za3lpa$(i)), ruleNames));
    }
    buf.append_pdl1vj$(')');
    return buf.toString();
  };
  Trees.prototype.getNodeText_bxzmte$ = function (t, recog) {
    var ruleNames = recog != null ? recog.ruleNames : null;
    var ruleNamesList = ruleNames != null ? listOf(ruleNames.slice()) : null;
    return this.getNodeText_86pqm2$(t, ruleNamesList);
  };
  Trees.prototype.getNodeText_86pqm2$ = function (t, ruleNames) {
    var tmp$, tmp$_0;
    if (ruleNames != null) {
      if (Kotlin.isType(t, RuleContext)) {
        var ruleIndex = t.ruleContext.ruleIndex;
        var ruleName = ruleNames.get_za3lpa$(ruleIndex);
        var altNumber = t.altNumber;
        if (altNumber !== ATN$Companion_getInstance().INVALID_ALT_NUMBER) {
          tmp$ = ruleName + ':' + altNumber;
        } else
          tmp$ = ruleName;
        return tmp$;
      } else if (Kotlin.isType(t, ErrorNode)) {
        return t.toString();
      } else if (Kotlin.isType(t, TerminalNode)) {
        var symbol = t.symbol;
        if (symbol != null) {
          return ensureNotNull(symbol.text);
        }
      }
    }
    var payload = t.payload;
    if (Kotlin.isType(payload, Token)) {
      tmp$_0 = ensureNotNull(payload.text);
    } else
      tmp$_0 = toString(t.payload);
    return tmp$_0;
  };
  Trees.prototype.getChildren_wb4ppq$ = function (t) {
    var tmp$;
    var kids = ArrayList_init_0();
    tmp$ = t.childCount;
    for (var i = 0; i < tmp$; i++) {
      kids.add_11rb$(ensureNotNull(t.getChild_za3lpa$(i)));
    }
    return kids;
  };
  Trees.prototype.getAncestors_wb4ppq$ = function (t) {
    if (t.readParent() == null)
      return emptyList();
    var ancestors = ArrayList_init_0();
    var t1 = t.readParent();
    while (t1 != null) {
      ancestors.add_wxm5ur$(0, t1);
      t1 = t1.readParent();
    }
    return ancestors;
  };
  Trees.prototype.isAncestorOf_689zpu$ = function (t, u) {
    if (t == null || u == null || t.readParent() == null)
      return false;
    var p = u.readParent();
    while (p != null) {
      if (t === p)
        return true;
      p = p.readParent();
    }
    return false;
  };
  Trees.prototype.findAllTokenNodes_5y1d81$ = function (t, ttype) {
    return this.findAllNodes_314z62$(t, ttype, true);
  };
  Trees.prototype.findAllRuleNodes_5y1d81$ = function (t, ruleIndex) {
    return this.findAllNodes_314z62$(t, ruleIndex, false);
  };
  Trees.prototype.findAllNodes_314z62$ = function (t, index, findTokens) {
    var nodes = ArrayList_init_0();
    this._findAllNodes_iwcsw6$(t, index, findTokens, nodes);
    return nodes;
  };
  Trees.prototype._findAllNodes_iwcsw6$ = function (t, index, findTokens, nodes) {
    var tmp$, tmp$_0, tmp$_1;
    if (findTokens && Kotlin.isType(t, TerminalNode)) {
      var tnode = Kotlin.isType(tmp$ = t, TerminalNode) ? tmp$ : throwCCE();
      if (ensureNotNull(tnode.symbol).type === index)
        nodes.add_11rb$(t);
    } else if (!findTokens && Kotlin.isType(t, ParserRuleContext)) {
      var ctx = Kotlin.isType(tmp$_0 = t, ParserRuleContext) ? tmp$_0 : throwCCE();
      if (ctx.ruleIndex === index)
        nodes.add_11rb$(t);
    }
    tmp$_1 = t.childCount;
    for (var i = 0; i < tmp$_1; i++) {
      this._findAllNodes_iwcsw6$(ensureNotNull(t.getChild_za3lpa$(i)), index, findTokens, nodes);
    }
  };
  Trees.prototype.getDescendants_iaqcoz$ = function (t) {
    var nodes = ArrayList_init_0();
    nodes.add_11rb$(t);
    var n = t.childCount;
    for (var i = 0; i < n; i++) {
      nodes.addAll_brywnq$(this.getDescendants_iaqcoz$(ensureNotNull(t.getChild_za3lpa$(i))));
    }
    return nodes;
  };
  Trees.prototype.descendants_iaqcoz$ = function (t) {
    return this.getDescendants_iaqcoz$(t);
  };
  Trees.prototype.getRootOfSubtreeEnclosingRegion_9sszh$ = function (t, startTokenIndex, stopTokenIndex) {
    var tmp$;
    var n = t.childCount;
    for (var i = 0; i < n; i++) {
      var child = t.getChild_za3lpa$(i);
      var r = this.getRootOfSubtreeEnclosingRegion_9sszh$(ensureNotNull(child), startTokenIndex, stopTokenIndex);
      if (r != null)
        return r;
    }
    if (Kotlin.isType(t, ParserRuleContext)) {
      var r_0 = Kotlin.isType(tmp$ = t, ParserRuleContext) ? tmp$ : throwCCE();
      if (startTokenIndex >= ensureNotNull(r_0.start).tokenIndex && (r_0.stop == null || stopTokenIndex <= ensureNotNull(r_0.stop).tokenIndex)) {
        return r_0;
      }
    }
    return null;
  };
  Trees.prototype.stripChildrenOutOfRange_hzg9oj$ = function (t, root, startIndex, stopIndex) {
    var tmp$;
    if (t == null)
      return;
    tmp$ = t.childCount;
    for (var i = 0; i < tmp$; i++) {
      var child = t.getChild_za3lpa$(i);
      var range = ensureNotNull(child).sourceInterval;
      if (Kotlin.isType(child, ParserRuleContext) && (range.b < startIndex || range.a > stopIndex)) {
        if (this.isAncestorOf_689zpu$(child, root)) {
          var abbrev = CommonToken_init_1(Token$Companion_getInstance().INVALID_TYPE, '...');
          ensureNotNull(t.children).set_wxm5ur$(i, new TerminalNodeImpl(abbrev));
        }
      }
    }
  };
  Trees.prototype.findNodeSuchThat_zggjh7$ = function (t, pred) {
    if (pred.test_11rb$(t))
      return t;
    if (t == null)
      return null;
    var n = t.childCount;
    for (var i = 0; i < n; i++) {
      var u = this.findNodeSuchThat_zggjh7$(t.getChild_za3lpa$(i), pred);
      if (u != null)
        return u;
    }
    return null;
  };
  Trees.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Trees',
    interfaces: []
  };
  var Trees_instance = null;
  function Trees_getInstance() {
    if (Trees_instance === null) {
      new Trees();
    }
    return Trees_instance;
  }
  function Chunk() {
  }
  Chunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  function ParseTreeMatch(tree, pattern, labels, mismatchedNode) {
    this.tree = tree;
    this.pattern = pattern;
    this.labels = labels;
    this.mismatchedNode = mismatchedNode;
    if (this.tree == null) {
      throw IllegalArgumentException_init('tree cannot be null');
    }
    if (this.pattern == null) {
      throw IllegalArgumentException_init('pattern cannot be null');
    }
    if (this.labels == null) {
      throw IllegalArgumentException_init('labels cannot be null');
    }
  }
  ParseTreeMatch.prototype.get_61zpoe$ = function (label) {
    var tmp$;
    var parseTrees = ensureNotNull(this.labels).get_11rb$(label);
    if (parseTrees == null || ensureNotNull(parseTrees).size === 0) {
      tmp$ = null;
    } else
      tmp$ = ensureNotNull(parseTrees).get_za3lpa$(ensureNotNull(parseTrees).size - 1 | 0);
    return tmp$;
  };
  ParseTreeMatch.prototype.getAll_61zpoe$ = function (label) {
    var tmp$;
    tmp$ = ensureNotNull(this.labels).get_11rb$(label);
    if (tmp$ == null) {
      return emptyList();
    }
    return tmp$;
  };
  ParseTreeMatch.prototype.succeeded = function () {
    return this.mismatchedNode == null;
  };
  ParseTreeMatch.prototype.toString = function () {
    return 'Match ' + (this.succeeded() ? 'succeeded' : 'failed') + '; found ' + ensureNotNull(this.labels).size + ' labels';
  };
  ParseTreeMatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseTreeMatch',
    interfaces: []
  };
  function ParseTreePattern(matcher, pattern, patternRuleIndex, patternTree) {
    this.matcher = matcher;
    this.pattern = pattern;
    this.patternRuleIndex = patternRuleIndex;
    this.patternTree = patternTree;
  }
  ParseTreePattern.prototype.match_iaqcoz$ = function (tree) {
    return this.matcher.match_ipo11c$(tree, this);
  };
  ParseTreePattern.prototype.matches_iaqcoz$ = function (tree) {
    return this.matcher.match_ipo11c$(tree, this).succeeded();
  };
  ParseTreePattern.prototype.findAll_nvni41$ = function (tree, xpath) {
    throw new NotImplementedError_init();
  };
  ParseTreePattern.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseTreePattern',
    interfaces: []
  };
  function ParseTreePatternMatcher(lexer, parser) {
    this.lexer = lexer;
    this.parser = parser;
    this.start_0 = '<';
    this.stop_0 = '>';
    this.escape_0 = '\\';
  }
  ParseTreePatternMatcher.prototype.setDelimiters_bx1i3m$ = function (start, stop, escapeLeft) {
    var tmp$ = start == null;
    if (!tmp$) {
      tmp$ = start.length === 0;
    }
    if (tmp$) {
      throw IllegalArgumentException_init('start cannot be null or empty');
    }
    var tmp$_0 = stop == null;
    if (!tmp$_0) {
      tmp$_0 = stop.length === 0;
    }
    if (tmp$_0) {
      throw IllegalArgumentException_init('stop cannot be null or empty');
    }
    this.start_0 = start;
    this.stop_0 = stop;
    this.escape_0 = escapeLeft;
  };
  ParseTreePatternMatcher.prototype.matches_rji55r$ = function (tree, pattern, patternRuleIndex) {
    var p = this.compile_bm4lxs$(pattern, patternRuleIndex);
    return this.matches_ipo11c$(tree, p);
  };
  ParseTreePatternMatcher.prototype.matches_ipo11c$ = function (tree, pattern) {
    var labels = new MultiMap();
    var mismatchedNode = this.matchImpl_0(tree, pattern.patternTree, labels);
    return mismatchedNode == null;
  };
  ParseTreePatternMatcher.prototype.match_rji55r$ = function (tree, pattern, patternRuleIndex) {
    var p = this.compile_bm4lxs$(pattern, patternRuleIndex);
    return this.match_ipo11c$(tree, p);
  };
  ParseTreePatternMatcher.prototype.match_ipo11c$ = function (tree, pattern) {
    var labels = new MultiMap();
    var mismatchedNode = this.matchImpl_0(tree, pattern.patternTree, labels);
    return new ParseTreeMatch(tree, pattern, labels, mismatchedNode);
  };
  ParseTreePatternMatcher.prototype.compile_bm4lxs$ = function (pattern, patternRuleIndex) {
    var tokenList = this.tokenize_61zpoe$(pattern);
    var tokenSrc = new ListTokenSource(tokenList);
    var tokens = new CommonTokenStream(tokenSrc);
    throw new NotImplementedError_init();
  };
  ParseTreePatternMatcher.prototype.matchImpl_0 = function (tree, patternTree, labels) {
    if (tree == null) {
      throw IllegalArgumentException_init('tree cannot be null');
    }
    if (patternTree == null) {
      throw IllegalArgumentException_init('patternTree cannot be null');
    }
    if (Kotlin.isType(tree, TerminalNode) && Kotlin.isType(patternTree, TerminalNode)) {
      throw new NotImplementedError_init();
    }
    if (Kotlin.isType(tree, ParserRuleContext) && Kotlin.isType(patternTree, ParserRuleContext)) {
      throw new NotImplementedError_init();
    }
    return tree;
  };
  ParseTreePatternMatcher.prototype.getRuleTagToken_0 = function (t) {
    if (Kotlin.isType(t, RuleNode)) {
      throw new NotImplementedError_init();
    }
    return null;
  };
  ParseTreePatternMatcher.prototype.tokenize_61zpoe$ = function (pattern) {
    var tmp$, tmp$_0;
    var chunks = this.split_y4putb$(pattern);
    var tokens = ArrayList_init_0();
    tmp$ = chunks.iterator();
    while (tmp$.hasNext()) {
      var chunk = tmp$.next();
      if (Kotlin.isType(chunk, TagChunk)) {
        var tagChunk = Kotlin.isType(tmp$_0 = chunk, TagChunk) ? tmp$_0 : throwCCE();
        if (isCharUppercase(ensureNotNull(tagChunk.tag).charCodeAt(0))) {
          var ttype = this.parser.getTokenType_61zpoe$(tagChunk.tag);
          if (ttype === Token$Companion_getInstance().INVALID_TYPE) {
            throw IllegalArgumentException_init('Unknown token ' + tagChunk.tag + ' in pattern: ' + pattern);
          }
          var t = new TokenTagToken(tagChunk.tag, ensureNotNull(ttype), tagChunk.label);
          tokens.add_11rb$(t);
        } else if (isCharLowerCase(tagChunk.tag.charCodeAt(0))) {
          throw new NotImplementedError_init();
        } else {
          throw IllegalArgumentException_init('invalid tag: ' + tagChunk.tag + ' in pattern: ' + pattern);
        }
      } else {
        throw new NotImplementedError_init();
      }
    }
    return tokens;
  };
  ParseTreePatternMatcher.prototype.split_y4putb$ = function (pattern) {
    var p = 0;
    var n = pattern.length;
    var chunks = ArrayList_init_0();
    var buf = StringBuilder_init();
    var starts = ArrayList_init_0();
    var stops = ArrayList_init_0();
    while (p < n) {
      if (p === indexOf_1(pattern, this.escape_0 + this.start_0, p)) {
        p = p + (this.escape_0.length + this.start_0.length) | 0;
      } else if (p === indexOf_1(pattern, this.escape_0 + this.stop_0, p)) {
        p = p + (this.escape_0.length + this.stop_0.length) | 0;
      } else if (p === indexOf_1(pattern, this.start_0, p)) {
        starts.add_11rb$(p);
        p = p + this.start_0.length | 0;
      } else if (p === indexOf_1(pattern, this.stop_0, p)) {
        stops.add_11rb$(p);
        p = p + this.stop_0.length | 0;
      } else {
        p = p + 1 | 0;
      }
    }
    if (starts.size > stops.size) {
      throw IllegalArgumentException_init('unterminated tag in pattern: ' + pattern);
    }
    if (starts.size < stops.size) {
      throw IllegalArgumentException_init('missing start tag in pattern: ' + pattern);
    }
    var ntags = starts.size;
    for (var i = 0; i < ntags; i++) {
      if (starts.get_za3lpa$(i) >= stops.get_za3lpa$(i)) {
        throw IllegalArgumentException_init('tag delimiters out of order in pattern: ' + pattern);
      }
    }
    if (ntags === 0) {
      var text = pattern.substring(0, n);
      chunks.add_11rb$(new TextChunk(text));
    }
    if (ntags > 0 && starts.get_za3lpa$(0) > 0) {
      var endIndex = starts.get_za3lpa$(0);
      var text_0 = pattern.substring(0, endIndex);
      chunks.add_11rb$(new TextChunk(text_0));
    }
    for (var i_0 = 0; i_0 < ntags; i_0++) {
      var startIndex = starts.get_za3lpa$(i_0) + this.start_0.length | 0;
      var endIndex_0 = stops.get_za3lpa$(i_0);
      var tag = pattern.substring(startIndex, endIndex_0);
      var ruleOrToken = tag;
      var label = null;
      var colon = indexOf(tag, 58);
      if (colon >= 0) {
        label = tag.substring(0, colon);
        var startIndex_0 = colon + 1 | 0;
        var endIndex_1 = tag.length;
        ruleOrToken = tag.substring(startIndex_0, endIndex_1);
      }
      chunks.add_11rb$(new TagChunk(label, ruleOrToken));
      if ((i_0 + 1 | 0) < ntags) {
        var startIndex_1 = stops.get_za3lpa$(i_0) + this.stop_0.length | 0;
        var endIndex_2 = starts.get_za3lpa$(i_0 + 1 | 0);
        var text_1 = pattern.substring(startIndex_1, endIndex_2);
        chunks.add_11rb$(new TextChunk(text_1));
      }
    }
    if (ntags > 0) {
      var afterLastTag = stops.get_za3lpa$(ntags - 1 | 0) + this.stop_0.length | 0;
      if (afterLastTag < n) {
        var text_2 = pattern.substring(afterLastTag, n);
        chunks.add_11rb$(new TextChunk(text_2));
      }
    }
    for (var i_1 = 0; i_1 !== chunks.size; ++i_1) {
      var tmp$;
      var c = chunks.get_za3lpa$(i_1);
      if (Kotlin.isType(c, TextChunk)) {
        var tc = Kotlin.isType(tmp$ = c, TextChunk) ? tmp$ : throwCCE();
        var unescaped = replace(ensureNotNull(tc.text), this.escape_0, '');
        if (unescaped.length < ensureNotNull(tc.text).length) {
          chunks.set_wxm5ur$(i_1, new TextChunk(unescaped));
        }
      }
    }
    return chunks;
  };
  ParseTreePatternMatcher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParseTreePatternMatcher',
    interfaces: []
  };
  var DEFAULT_CHANNEL;
  function RuleTagToken(ruleName, type, label) {
    if (label === void 0)
      label = null;
    this.ruleName = ruleName;
    this.type_j3htoh$_0 = type;
    this.label = label;
    var tmp$ = this.ruleName == null;
    if (!tmp$) {
      tmp$ = this.ruleName.length === 0;
    }
    if (tmp$) {
      throw IllegalArgumentException_init('ruleName cannot be null or empty.');
    }
  }
  Object.defineProperty(RuleTagToken.prototype, 'type', {
    get: function () {
      return this.type_j3htoh$_0;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'channel', {
    configurable: true,
    get: function () {
      return DEFAULT_CHANNEL;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'text', {
    configurable: true,
    get: function () {
      if (this.label != null) {
        return '<' + toString(this.label) + ':' + toString(this.ruleName) + '>';
      } else
        return '<' + toString(this.ruleName) + '>';
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'line', {
    configurable: true,
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'charPositionInLine', {
    configurable: true,
    get: function () {
      return -1;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'tokenIndex', {
    configurable: true,
    get: function () {
      return -1;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'startIndex', {
    configurable: true,
    get: function () {
      return -1;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'stopIndex', {
    configurable: true,
    get: function () {
      return -1;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'tokenSource', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  Object.defineProperty(RuleTagToken.prototype, 'inputStream', {
    configurable: true,
    get: function () {
      return null;
    }
  });
  RuleTagToken.prototype.toString = function () {
    return this.ruleName + ':' + toString(this.type);
  };
  RuleTagToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuleTagToken',
    interfaces: [Token]
  };
  function TagChunk(label, tag) {
    Chunk.call(this);
    this.label = label;
    this.tag = tag;
    var tmp$ = this.tag == null;
    if (!tmp$) {
      tmp$ = this.tag.length === 0;
    }
    if (tmp$) {
      throw IllegalArgumentException_init('tag cannot be null or empty');
    }
  }
  TagChunk.prototype.toString = function () {
    var tmp$;
    if (this.label != null) {
      tmp$ = this.label + ':' + this.tag;
    } else
      tmp$ = ensureNotNull(this.tag);
    return tmp$;
  };
  TagChunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TagChunk',
    interfaces: [Chunk]
  };
  function TagChunk_init(tag, $this) {
    $this = $this || Object.create(TagChunk.prototype);
    TagChunk.call($this, null, tag);
    return $this;
  }
  function TextChunk(text) {
    Chunk.call(this);
    this.text = text;
    if (this.text == null) {
      throw IllegalArgumentException_init('text cannot be null');
    }
  }
  TextChunk.prototype.toString = function () {
    return "'" + toString(this.text) + "'";
  };
  TextChunk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextChunk',
    interfaces: [Chunk]
  };
  function TokenTagToken(tokenName, type, label) {
    if (label === void 0)
      label = null;
    CommonToken_init(type, this);
    this.tokenName = tokenName;
    this.label = label;
    this.text_mod5iz$_0 = null;
  }
  Object.defineProperty(TokenTagToken.prototype, 'text', {
    configurable: true,
    get: function () {
      if (this.label != null) {
        return '<' + toString(this.label) + ':' + this.tokenName + '>';
      } else
        return '<' + this.tokenName + '>';
    },
    set: function (text) {
      this.text_mod5iz$_0 = text;
    }
  });
  TokenTagToken.prototype.toString = function () {
    return this.tokenName + ':' + toString(this.type);
  };
  TokenTagToken.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TokenTagToken',
    interfaces: [CommonToken]
  };
  function BitSet() {
    this.setBits_0 = HashSet_init_0();
  }
  BitSet.prototype.set_za3lpa$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_0();
    this.setBits_0.add_11rb$(bitIndex);
  };
  BitSet.prototype.clear_za3lpa$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_0();
    this.setBits_0.remove_11rb$(bitIndex);
  };
  BitSet.prototype.get_za3lpa$ = function (bitIndex) {
    if (bitIndex < 0)
      throw IllegalArgumentException_init_0();
    return this.setBits_0.contains_11rb$(bitIndex);
  };
  BitSet.prototype.cardinality = function () {
    return this.setBits_0.size;
  };
  BitSet.prototype.nextSetBit_za3lpa$ = function (i) {
    var tmp$;
    var $receiver = this.setBits_0;
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element >= i)
        destination.add_11rb$(element);
    }
    var nextSetBits = destination;
    return (tmp$ = minOrNull(nextSetBits)) != null ? tmp$ : -1;
  };
  BitSet.prototype.or_8s8j64$ = function (alts) {
    this.setBits_0.addAll_brywnq$(alts.setBits_0);
  };
  BitSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitSet',
    interfaces: []
  };
  function BitSet_init($this) {
    $this = $this || Object.create(BitSet.prototype);
    BitSet.call($this);
    return $this;
  }
  function Collections() {
    Collections_instance = this;
  }
  Collections.prototype.min_euev0d$ = function (precedencePredicates) {
    var tmp$;
    tmp$ = minOrNull(precedencePredicates);
    if (tmp$ == null) {
      throw NoSuchElementException_init();
    }
    return tmp$;
  };
  Collections.prototype.max_euev0d$ = function (precedencePredicates) {
    var tmp$;
    tmp$ = maxOrNull(precedencePredicates);
    if (tmp$ == null) {
      throw NoSuchElementException_init();
    }
    return tmp$;
  };
  Collections.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Collections',
    interfaces: []
  };
  var Collections_instance = null;
  function Collections_getInstance() {
    if (Collections_instance === null) {
      new Collections();
    }
    return Collections_instance;
  }
  function IdentityHashMap() {
    this.$delegate_8b6b4h$_0 = LinkedHashMap_init();
  }
  Object.defineProperty(IdentityHashMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this.$delegate_8b6b4h$_0.entries;
    }
  });
  Object.defineProperty(IdentityHashMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this.$delegate_8b6b4h$_0.keys;
    }
  });
  Object.defineProperty(IdentityHashMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this.$delegate_8b6b4h$_0.size;
    }
  });
  Object.defineProperty(IdentityHashMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this.$delegate_8b6b4h$_0.values;
    }
  });
  IdentityHashMap.prototype.clear = function () {
    return this.$delegate_8b6b4h$_0.clear();
  };
  IdentityHashMap.prototype.containsKey_11rb$ = function (key) {
    return this.$delegate_8b6b4h$_0.containsKey_11rb$(key);
  };
  IdentityHashMap.prototype.containsValue_11rc$ = function (value) {
    return this.$delegate_8b6b4h$_0.containsValue_11rc$(value);
  };
  IdentityHashMap.prototype.get_11rb$ = function (key) {
    return this.$delegate_8b6b4h$_0.get_11rb$(key);
  };
  IdentityHashMap.prototype.isEmpty = function () {
    return this.$delegate_8b6b4h$_0.isEmpty();
  };
  IdentityHashMap.prototype.put_xwzc9p$ = function (key, value) {
    return this.$delegate_8b6b4h$_0.put_xwzc9p$(key, value);
  };
  IdentityHashMap.prototype.putAll_a2k3zr$ = function (from) {
    return this.$delegate_8b6b4h$_0.putAll_a2k3zr$(from);
  };
  IdentityHashMap.prototype.remove_11rb$ = function (key) {
    return this.$delegate_8b6b4h$_0.remove_11rb$(key);
  };
  IdentityHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IdentityHashMap',
    interfaces: [MutableMap]
  };
  function UUID() {
    UUID$Companion_getInstance();
    this.timeLow_0 = null;
    this.timeMid_0 = null;
    this.version_0 = null;
    this.timeHi_0 = null;
    this.variant_0 = null;
    this.clock_seq_0 = null;
    this.node_0 = null;
  }
  function UUID$Variant(name, ordinal, value, bitsLength) {
    Enum.call(this);
    this.value = value;
    this.bitsLength = bitsLength;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UUID$Variant_initFields() {
    UUID$Variant_initFields = function () {
    };
    UUID$Variant$VARIANT_0_instance = new UUID$Variant('VARIANT_0', 0, 0, 3);
    UUID$Variant$VARIANT_1_instance = new UUID$Variant('VARIANT_1', 1, 1, 2);
    UUID$Variant$VARIANT_2_instance = new UUID$Variant('VARIANT_2', 2, 2, 3);
    UUID$Variant$VARIANT_FUTURE_instance = new UUID$Variant('VARIANT_FUTURE', 3, 3, 3);
  }
  var UUID$Variant$VARIANT_0_instance;
  function UUID$Variant$VARIANT_0_getInstance() {
    UUID$Variant_initFields();
    return UUID$Variant$VARIANT_0_instance;
  }
  var UUID$Variant$VARIANT_1_instance;
  function UUID$Variant$VARIANT_1_getInstance() {
    UUID$Variant_initFields();
    return UUID$Variant$VARIANT_1_instance;
  }
  var UUID$Variant$VARIANT_2_instance;
  function UUID$Variant$VARIANT_2_getInstance() {
    UUID$Variant_initFields();
    return UUID$Variant$VARIANT_2_instance;
  }
  var UUID$Variant$VARIANT_FUTURE_instance;
  function UUID$Variant$VARIANT_FUTURE_getInstance() {
    UUID$Variant_initFields();
    return UUID$Variant$VARIANT_FUTURE_instance;
  }
  UUID$Variant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Variant',
    interfaces: [Enum]
  };
  function UUID$Variant$values() {
    return [UUID$Variant$VARIANT_0_getInstance(), UUID$Variant$VARIANT_1_getInstance(), UUID$Variant$VARIANT_2_getInstance(), UUID$Variant$VARIANT_FUTURE_getInstance()];
  }
  UUID$Variant.values = UUID$Variant$values;
  function UUID$Variant$valueOf(name) {
    switch (name) {
      case 'VARIANT_0':
        return UUID$Variant$VARIANT_0_getInstance();
      case 'VARIANT_1':
        return UUID$Variant$VARIANT_1_getInstance();
      case 'VARIANT_2':
        return UUID$Variant$VARIANT_2_getInstance();
      case 'VARIANT_FUTURE':
        return UUID$Variant$VARIANT_FUTURE_getInstance();
      default:
        throwISE('No enum constant com.strumenta.kotlinmultiplatform.UUID.Variant.' + name);
    }
  }
  UUID$Variant.valueOf_61zpoe$ = UUID$Variant$valueOf;
  function UUID$Companion() {
    UUID$Companion_instance = this;
  }
  UUID$Companion.prototype.fromString_61zpoe$ = function (encoded) {
    var tmp$, tmp$_0;
    var parts = split(encoded, ['-']);
    if (!(parts.size === 5)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!(parts.get_za3lpa$(0).length === 8)) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!(parts.get_za3lpa$(1).length === 4)) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    if (!(parts.get_za3lpa$(2).length === 4)) {
      var message_2 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_2.toString());
    }
    if (!(parts.get_za3lpa$(3).length === 4)) {
      var message_3 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_3.toString());
    }
    if (!(parts.get_za3lpa$(4).length === 12)) {
      var message_4 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_4.toString());
    }
    var time_hi_and_version = toLong(parts.get_za3lpa$(2), 16);
    var clock_seq_hi_and_res = toLong(parts.get_za3lpa$(3), 16);
    var topBit1st = clock_seq_hi_and_res.shiftRight(15);
    var topBit2nd = clock_seq_hi_and_res.shiftRight(14).and(L1);
    var topBit3nd = clock_seq_hi_and_res.shiftRight(13).and(L1);
    if (equals(topBit1st, L0))
      throw UnsupportedOperationException_init_0();
    else if (equals(topBit1st, L1) && equals(topBit2nd, L1) && equals(topBit3nd, L1))
      throw UnsupportedOperationException_init_0();
    else if (equals(topBit1st, L1) && equals(topBit2nd, L0))
      tmp$ = UUID$Variant$VARIANT_1_getInstance();
    else if (equals(topBit1st, L1) && equals(topBit2nd, L1) && equals(topBit3nd, L0))
      tmp$ = UUID$Variant$VARIANT_2_getInstance();
    else
      throw UnsupportedOperationException_init_0();
    var variantEnum = tmp$;
    var version = time_hi_and_version.shiftRight(12);
    var timeLow = toLong(parts.get_za3lpa$(0), 16);
    var timeMid = toLong(parts.get_za3lpa$(1), 16);
    var timeHi = time_hi_and_version.and(L4095);
    var variant = L2;
    switch (variantEnum.bitsLength) {
      case 2:
        tmp$_0 = clock_seq_hi_and_res.and(L16383);
        break;
      case 3:
        tmp$_0 = clock_seq_hi_and_res.and(L8191);
        break;
      default:
        throw UnsupportedOperationException_init_0();
    }
    var clockSeq = tmp$_0;
    var node = toLong(parts.get_za3lpa$(4), 16);
    return UUID_init_0(version, timeLow, timeMid, timeHi, variant, clockSeq, node);
  };
  UUID$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UUID$Companion_instance = null;
  function UUID$Companion_getInstance() {
    if (UUID$Companion_instance === null) {
      new UUID$Companion();
    }
    return UUID$Companion_instance;
  }
  UUID.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, UUID) ? tmp$ : throwCCE();
    if (!equals(this.timeLow_0, other.timeLow_0))
      return false;
    if (!equals(this.timeMid_0, other.timeMid_0))
      return false;
    if (!equals(this.version_0, other.version_0))
      return false;
    if (!equals(this.timeHi_0, other.timeHi_0))
      return false;
    if (!equals(this.variant_0, other.variant_0))
      return false;
    if (!equals(this.clock_seq_0, other.clock_seq_0))
      return false;
    if (!equals(this.node_0, other.node_0))
      return false;
    return true;
  };
  UUID.prototype.hashCode = function () {
    var result = hashCode(this.timeLow_0);
    result = (31 * result | 0) + hashCode(this.timeMid_0) | 0;
    result = (31 * result | 0) + hashCode(this.version_0) | 0;
    result = (31 * result | 0) + hashCode(this.timeHi_0) | 0;
    result = (31 * result | 0) + hashCode(this.variant_0) | 0;
    result = (31 * result | 0) + hashCode(this.clock_seq_0) | 0;
    result = (31 * result | 0) + hashCode(this.node_0) | 0;
    return result;
  };
  UUID.prototype.toString = function () {
    return 'UUID(timeLow=' + this.timeLow_0.toString() + ', timeMid=' + this.timeMid_0.toString() + ', version=' + this.version_0.toString() + ', timeHi=' + this.timeHi_0.toString() + ', variant=' + this.variant_0.toString() + ', clock_seq=' + this.clock_seq_0.toString() + ', node=' + this.node_0.toString() + ')';
  };
  UUID.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UUID',
    interfaces: []
  };
  function UUID_init(most, least, $this) {
    $this = $this || Object.create(UUID.prototype);
    UUID.call($this);
    $this.timeLow_0 = most.shiftRight(32);
    $this.timeMid_0 = most.and(L4294901760).shiftRight(16);
    $this.version_0 = most.and(L61440).shiftRight(12);
    $this.timeHi_0 = most.and(L4095);
    var variantLayout = least.shiftRight(62);
    $this.variant_0 = L2;
    $this.clock_seq_0 = least.shiftRight(48).and(L16383);
    $this.node_0 = least.and(L281474976710655);
    return $this;
  }
  function UUID_init_0(version, timeLow, timeMid, timeHi, variant, clock_seq, node, $this) {
    $this = $this || Object.create(UUID.prototype);
    UUID.call($this);
    $this.version_0 = version;
    $this.timeLow_0 = timeLow;
    $this.timeMid_0 = timeMid;
    $this.timeHi_0 = timeHi;
    $this.variant_0 = variant;
    $this.clock_seq_0 = clock_seq;
    $this.node_0 = node;
    return $this;
  }
  function WeakHashMap(_wrapped) {
    if (_wrapped === void 0)
      _wrapped = LinkedHashMap_init();
    this._wrapped = _wrapped;
  }
  Object.defineProperty(WeakHashMap.prototype, 'entries', {
    configurable: true,
    get: function () {
      return this._wrapped.entries;
    }
  });
  Object.defineProperty(WeakHashMap.prototype, 'keys', {
    configurable: true,
    get: function () {
      return this._wrapped.keys;
    }
  });
  Object.defineProperty(WeakHashMap.prototype, 'size', {
    configurable: true,
    get: function () {
      return this._wrapped.size;
    }
  });
  Object.defineProperty(WeakHashMap.prototype, 'values', {
    configurable: true,
    get: function () {
      return this._wrapped.values;
    }
  });
  WeakHashMap.prototype.clear = function () {
    return this._wrapped.clear();
  };
  WeakHashMap.prototype.containsKey_11rb$ = function (key) {
    return this._wrapped.containsKey_11rb$(key);
  };
  WeakHashMap.prototype.containsValue_11rc$ = function (value) {
    return this._wrapped.containsValue_11rc$(value);
  };
  WeakHashMap.prototype.get_11rb$ = function (key) {
    return this._wrapped.get_11rb$(key);
  };
  WeakHashMap.prototype.isEmpty = function () {
    return this._wrapped.isEmpty();
  };
  WeakHashMap.prototype.put_xwzc9p$ = function (key, value) {
    return this._wrapped.put_xwzc9p$(key, value);
  };
  WeakHashMap.prototype.putAll_a2k3zr$ = function (from) {
    return this._wrapped.putAll_a2k3zr$(from);
  };
  WeakHashMap.prototype.remove_11rb$ = function (key) {
    return this._wrapped.remove_11rb$(key);
  };
  WeakHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeakHashMap',
    interfaces: [MutableMap]
  };
  function WeakHashMap_init($this) {
    $this = $this || Object.create(WeakHashMap.prototype);
    WeakHashMap.call($this, LinkedHashMap_init());
    return $this;
  }
  function arraycopy(src, srcPos, dest, destPos, length) {
    var tmp$;
    tmp$ = until(0, length).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      dest[destPos + element | 0] = src[srcPos + element | 0];
    }
  }
  function arraycopy_0(src, srcPos, dest, destPos, length) {
    var tmp$;
    tmp$ = until(0, length).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      dest[destPos + element | 0] = src[srcPos + element | 0];
    }
  }
  function isSupplementaryCodePoint($receiver, codePoint) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Char.Companion.isSupplementaryCodePoint not implemented');
  }
  function charCount($receiver, i) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Char.Companion.charCount not implemented');
  }
  function maxValue($receiver) {
    return 65535;
  }
  function toChars($receiver, codePoint, resultArray, resultIdx) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Char.Companion.toChars not implemented');
  }
  function isCharUppercase(firstChar) {
    if (uppercaseChar(firstChar) === String.fromCharCode(firstChar).toLowerCase().charCodeAt(0)) {
      return false;
    }
    return firstChar === uppercaseChar(firstChar);
  }
  function isCharLowerCase(firstChar) {
    if (uppercaseChar(firstChar) === String.fromCharCode(firstChar).toLowerCase().charCodeAt(0)) {
      return false;
    }
    return firstChar === String.fromCharCode(firstChar).toLowerCase().charCodeAt(0);
  }
  function errMessage(message) {
    console.error(message);
  }
  var synchronized = defineInlineFunction('antlr-kotlin-antlr-kotlin-runtime-js-legacy.com.strumenta.kotlinmultiplatform.synchronized_eocq09$', function (lock, block) {
    return block();
  });
  function Type(javaClass) {
    this.javaClass = javaClass;
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: []
  };
  function isInstance($receiver, any) {
    return get_kotlin($receiver.javaClass).isInstance_s8jyv4$(any);
  }
  function getType($receiver, name) {
    var $receiver_0 = $receiver.classesByName;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.simpleName, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return new Type(get_js(ensureNotNull(firstOrNull$result)));
  }
  function CharStreams() {
    CharStreams_instance = this;
    AbstractCharStreams.call(this);
  }
  CharStreams.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CharStreams',
    interfaces: [AbstractCharStreams]
  };
  var CharStreams_instance = null;
  function CharStreams_getInstance() {
    if (CharStreams_instance === null) {
      new CharStreams();
    }
    return CharStreams_instance;
  }
  function ThreadLocal() {
  }
  ThreadLocal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThreadLocal',
    interfaces: [Annotation]
  };
  function Platform() {
    Platform_instance = this;
  }
  Platform.prototype.readFile_61zpoe$ = function (fileName, continuation) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$strumenta = package$com.strumenta || (package$com.strumenta = {});
  var package$kotlinmultiplatform = package$strumenta.kotlinmultiplatform || (package$strumenta.kotlinmultiplatform = {});
  package$kotlinmultiplatform.indices_4b5429$ = indices;
  package$kotlinmultiplatform.assert_6taknv$ = assert;
  package$kotlinmultiplatform.convertToString_355ntz$ = convertToString;
  package$kotlinmultiplatform.asCharArray_pdl1vz$ = asCharArray;
  Object.defineProperty(package$kotlinmultiplatform, 'Arrays', {
    get: Arrays_getInstance
  });
  Object.defineProperty(package$kotlinmultiplatform, 'Math', {
    get: Math_getInstance
  });
  package$kotlinmultiplatform.outMessage_61zpoe$ = outMessage;
  package$kotlinmultiplatform.TypeDeclarator = TypeDeclarator;
  var package$org = _.org || (_.org = {});
  var package$antlr = package$org.antlr || (package$org.antlr = {});
  var package$v4 = package$antlr.v4 || (package$antlr.v4 = {});
  var package$kotlinruntime = package$v4.kotlinruntime || (package$v4.kotlinruntime = {});
  package$kotlinruntime.ANTLRErrorListener = ANTLRErrorListener;
  package$kotlinruntime.ANTLRErrorStrategy = ANTLRErrorStrategy;
  Object.defineProperty(ANTLRFileStream, 'Companion', {
    get: ANTLRFileStream$Companion_getInstance
  });
  package$kotlinruntime.ANTLRFileStream = ANTLRFileStream;
  Object.defineProperty(ANTLRInputStream, 'Companion', {
    get: ANTLRInputStream$Companion_getInstance
  });
  package$kotlinruntime.ANTLRInputStream_init = ANTLRInputStream_init;
  package$kotlinruntime.ANTLRInputStream_init_61zpoe$ = ANTLRInputStream_init_0;
  package$kotlinruntime.ANTLRInputStream = ANTLRInputStream;
  package$kotlinruntime.AbstractCharStreams = AbstractCharStreams;
  package$kotlinruntime.BailErrorStrategy = BailErrorStrategy;
  package$kotlinruntime.BaseErrorListener = BaseErrorListener;
  package$kotlinruntime.BufferedTokenStream = BufferedTokenStream;
  Object.defineProperty(CharStream, 'Companion', {
    get: CharStream$Companion_getInstance
  });
  package$kotlinruntime.CharStream = CharStream;
  Object.defineProperty(CommonToken, 'Companion', {
    get: CommonToken$Companion_getInstance
  });
  package$kotlinruntime.CommonToken_init_za3lpa$ = CommonToken_init;
  package$kotlinruntime.CommonToken_init_cx8pz3$ = CommonToken_init_0;
  package$kotlinruntime.CommonToken_init_19mbxw$ = CommonToken_init_1;
  package$kotlinruntime.CommonToken_init_jdptgj$ = CommonToken_init_2;
  package$kotlinruntime.CommonToken = CommonToken;
  Object.defineProperty(CommonTokenFactory, 'Companion', {
    get: CommonTokenFactory$Companion_getInstance
  });
  package$kotlinruntime.CommonTokenFactory = CommonTokenFactory;
  package$kotlinruntime.CommonTokenStream_init_4mw2ve$ = CommonTokenStream_init;
  package$kotlinruntime.CommonTokenStream = CommonTokenStream;
  Object.defineProperty(ConsoleErrorListener, 'Companion', {
    get: ConsoleErrorListener$Companion_getInstance
  });
  package$kotlinruntime.ConsoleErrorListener = ConsoleErrorListener;
  package$kotlinruntime.DefaultErrorStrategy = DefaultErrorStrategy;
  package$kotlinruntime.DiagnosticErrorListener = DiagnosticErrorListener;
  package$kotlinruntime.FailedPredicateException = FailedPredicateException;
  package$kotlinruntime.InputMismatchException_init_yo2s5h$ = InputMismatchException_init;
  package$kotlinruntime.InputMismatchException_init_cnbngv$ = InputMismatchException_init_0;
  package$kotlinruntime.InputMismatchException = InputMismatchException;
  Object.defineProperty(IntStream, 'Companion', {
    get: IntStream$Companion_getInstance
  });
  package$kotlinruntime.IntStream = IntStream;
  package$kotlinruntime.InterpreterRuleContext_init = InterpreterRuleContext_init;
  package$kotlinruntime.InterpreterRuleContext_init_1kxye0$ = InterpreterRuleContext_init_0;
  package$kotlinruntime.InterpreterRuleContext = InterpreterRuleContext;
  Object.defineProperty(Lexer, 'Companion', {
    get: Lexer$Companion_getInstance
  });
  package$kotlinruntime.Lexer_init = Lexer_init;
  package$kotlinruntime.Lexer_init_npe0fi$ = Lexer_init_0;
  package$kotlinruntime.Lexer = Lexer;
  package$kotlinruntime.LexerInterpreter_init_tl3fud$ = LexerInterpreter_init;
  package$kotlinruntime.LexerInterpreter_init_8h3j50$ = LexerInterpreter_init_0;
  package$kotlinruntime.LexerInterpreter = LexerInterpreter;
  package$kotlinruntime.LexerNoViableAltException = LexerNoViableAltException;
  package$kotlinruntime.ListTokenSource = ListTokenSource;
  package$kotlinruntime.NoViableAltException = NoViableAltException;
  $$importsForInline$$['antlr-kotlin-antlr-kotlin-runtime-js-legacy'] = _;
  package$kotlinruntime.Parser = Parser;
  package$kotlinruntime.ParserRuleContext_init = ParserRuleContext_init;
  package$kotlinruntime.ParserRuleContext_init_4fi77d$ = ParserRuleContext_init_0;
  package$kotlinruntime.ParserRuleContext = ParserRuleContext;
  package$kotlinruntime.ProxyErrorListener = ProxyErrorListener;
  package$kotlinruntime.RecognitionException = RecognitionException;
  Object.defineProperty(Recognizer, 'Companion', {
    get: Recognizer$Companion_getInstance
  });
  package$kotlinruntime.Recognizer = Recognizer;
  Object.defineProperty(package$kotlinruntime, 'EMPTY_RULECTX', {
    get: function () {
      return EMPTY_RULECTX;
    }
  });
  package$kotlinruntime.RuleContext_init = RuleContext_init;
  package$kotlinruntime.RuleContext_init_pm7hgm$ = RuleContext_init_0;
  package$kotlinruntime.RuleContext = RuleContext;
  package$kotlinruntime.RuleContextWithAltNum_init = RuleContextWithAltNum_init;
  package$kotlinruntime.RuleContextWithAltNum_init_205md2$ = RuleContextWithAltNum_init_0;
  package$kotlinruntime.RuleContextWithAltNum = RuleContextWithAltNum;
  Object.defineProperty(package$kotlinruntime, 'RuntimeMetaData', {
    get: RuntimeMetaData_getInstance
  });
  package$kotlinruntime.codePointIndices_7efafi$ = codePointIndices;
  package$kotlinruntime.StringCharStream = StringCharStream;
  Object.defineProperty(Token, 'Companion', {
    get: Token$Companion_getInstance
  });
  package$kotlinruntime.Token = Token;
  package$kotlinruntime.TokenFactory = TokenFactory;
  package$kotlinruntime.TokenSource = TokenSource;
  package$kotlinruntime.TokenStream = TokenStream;
  TokenStreamRewriter.RewriteOperation_init_za3lpa$ = TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init;
  TokenStreamRewriter.RewriteOperation_init_vux3hl$ = TokenStreamRewriter$TokenStreamRewriter$RewriteOperation_init_0;
  TokenStreamRewriter.RewriteOperation = TokenStreamRewriter$RewriteOperation;
  TokenStreamRewriter.InsertBeforeOp = TokenStreamRewriter$InsertBeforeOp;
  TokenStreamRewriter.InsertAfterOp = TokenStreamRewriter$InsertAfterOp;
  TokenStreamRewriter.ReplaceOp = TokenStreamRewriter$ReplaceOp;
  Object.defineProperty(TokenStreamRewriter, 'Companion', {
    get: TokenStreamRewriter$Companion_getInstance
  });
  package$kotlinruntime.TokenStreamRewriter = TokenStreamRewriter;
  package$kotlinruntime.UnbufferedTokenStream = UnbufferedTokenStream;
  package$kotlinruntime.Vocabulary = Vocabulary;
  Object.defineProperty(VocabularyImpl, 'Companion', {
    get: VocabularyImpl$Companion_getInstance
  });
  package$kotlinruntime.VocabularyImpl = VocabularyImpl;
  package$kotlinruntime.WritableToken = WritableToken;
  var package$ast = package$kotlinruntime.ast || (package$kotlinruntime.ast = {});
  package$ast.Node = Node;
  package$ast.Point = Point;
  Object.defineProperty(package$ast, 'START_POINT', {
    get: function () {
      return START_POINT;
    }
  });
  package$ast.Position = Position;
  package$ast.pos_tjonv8$ = pos;
  Object.defineProperty(ATN, 'Companion', {
    get: ATN$Companion_getInstance
  });
  var package$atn = package$kotlinruntime.atn || (package$kotlinruntime.atn = {});
  package$atn.ATN = ATN;
  Object.defineProperty(ATNConfig, 'Companion', {
    get: ATNConfig$Companion_getInstance
  });
  package$atn.ATNConfig_init_kc35f6$ = ATNConfig_init;
  package$atn.ATNConfig_init_ov0x6t$ = ATNConfig_init_0;
  package$atn.ATNConfig_init_4apq0v$ = ATNConfig_init_1;
  package$atn.ATNConfig_init_gr27s$ = ATNConfig_init_2;
  package$atn.ATNConfig_init_7xfwte$ = ATNConfig_init_3;
  package$atn.ATNConfig = ATNConfig;
  ATNConfigSet.ConfigHashSet = ATNConfigSet$ConfigHashSet;
  Object.defineProperty(ATNConfigSet$ConfigEqualityComparator, 'Companion', {
    get: ATNConfigSet$ConfigEqualityComparator$Companion_getInstance
  });
  ATNConfigSet.ConfigEqualityComparator = ATNConfigSet$ConfigEqualityComparator;
  ATNConfigSet.AbstractConfigHashSet = ATNConfigSet$AbstractConfigHashSet;
  package$atn.ATNConfigSet_init_5hido$ = ATNConfigSet_init;
  package$atn.ATNConfigSet = ATNConfigSet;
  Object.defineProperty(ATNDeserializationOptions, 'Companion', {
    get: ATNDeserializationOptions$Companion_getInstance
  });
  package$atn.ATNDeserializationOptions_init = ATNDeserializationOptions_init;
  package$atn.ATNDeserializationOptions_init_cr4ljv$ = ATNDeserializationOptions_init_0;
  package$atn.ATNDeserializationOptions = ATNDeserializationOptions;
  ATNDeserializer.UnicodeDeserializer = ATNDeserializer$UnicodeDeserializer;
  Object.defineProperty(ATNDeserializer$UnicodeDeserializingMode, 'UNICODE_BMP', {
    get: ATNDeserializer$UnicodeDeserializingMode$UNICODE_BMP_getInstance
  });
  Object.defineProperty(ATNDeserializer$UnicodeDeserializingMode, 'UNICODE_SMP', {
    get: ATNDeserializer$UnicodeDeserializingMode$UNICODE_SMP_getInstance
  });
  ATNDeserializer.UnicodeDeserializingMode = ATNDeserializer$UnicodeDeserializingMode;
  Object.defineProperty(ATNDeserializer, 'Companion', {
    get: ATNDeserializer$Companion_getInstance
  });
  package$atn.ATNDeserializer = ATNDeserializer;
  Object.defineProperty(ATNSimulator, 'Companion', {
    get: ATNSimulator$Companion_getInstance
  });
  package$atn.ATNSimulator = ATNSimulator;
  Object.defineProperty(ATNState, 'Companion', {
    get: ATNState$Companion_getInstance
  });
  package$atn.ATNState = ATNState;
  Object.defineProperty(ATNType, 'LEXER', {
    get: ATNType$LEXER_getInstance
  });
  Object.defineProperty(ATNType, 'PARSER', {
    get: ATNType$PARSER_getInstance
  });
  package$atn.ATNType = ATNType;
  package$atn.AbstractPredicateTransition = AbstractPredicateTransition;
  package$atn.ActionTransition = ActionTransition;
  package$atn.AmbiguityInfo = AmbiguityInfo;
  package$atn.ArrayPredictionContext_init_iz1qcc$ = ArrayPredictionContext_init;
  package$atn.ArrayPredictionContext = ArrayPredictionContext;
  package$atn.AtomTransition = AtomTransition;
  package$atn.BasicBlockStartState = BasicBlockStartState;
  package$atn.BasicState = BasicState;
  package$atn.BlockEndState = BlockEndState;
  package$atn.BlockStartState = BlockStartState;
  Object.defineProperty(package$atn, 'CodePointTransitions', {
    get: CodePointTransitions_getInstance
  });
  package$atn.ContextSensitivityInfo = ContextSensitivityInfo;
  package$atn.DecisionEventInfo = DecisionEventInfo;
  package$atn.DecisionInfo = DecisionInfo;
  package$atn.DecisionState = DecisionState;
  package$atn.EmptyPredictionContext = EmptyPredictionContext;
  package$atn.EpsilonTransition = EpsilonTransition;
  package$atn.ErrorInfo = ErrorInfo;
  Object.defineProperty(LL1Analyzer, 'Companion', {
    get: LL1Analyzer$Companion_getInstance
  });
  package$atn.LL1Analyzer = LL1Analyzer;
  package$atn.LexerATNConfig_init_5km3kk$ = LexerATNConfig_init;
  package$atn.LexerATNConfig_init_54i37m$ = LexerATNConfig_init_0;
  package$atn.LexerATNConfig_init_kmb8nb$ = LexerATNConfig_init_1;
  package$atn.LexerATNConfig_init_agfns6$ = LexerATNConfig_init_2;
  package$atn.LexerATNConfig_init_vtdrss$ = LexerATNConfig_init_3;
  package$atn.LexerATNConfig = LexerATNConfig;
  LexerATNSimulator.SimState = LexerATNSimulator$SimState;
  Object.defineProperty(LexerATNSimulator, 'Companion', {
    get: LexerATNSimulator$Companion_getInstance
  });
  package$atn.LexerATNSimulator_init_ayul3s$ = LexerATNSimulator_init;
  package$atn.LexerATNSimulator = LexerATNSimulator;
  package$atn.LexerAction = LexerAction;
  Object.defineProperty(LexerActionExecutor, 'Companion', {
    get: LexerActionExecutor$Companion_getInstance
  });
  package$atn.LexerActionExecutor = LexerActionExecutor;
  Object.defineProperty(LexerActionType, 'CHANNEL', {
    get: LexerActionType$CHANNEL_getInstance
  });
  Object.defineProperty(LexerActionType, 'CUSTOM', {
    get: LexerActionType$CUSTOM_getInstance
  });
  Object.defineProperty(LexerActionType, 'MODE', {
    get: LexerActionType$MODE_getInstance
  });
  Object.defineProperty(LexerActionType, 'MORE', {
    get: LexerActionType$MORE_getInstance
  });
  Object.defineProperty(LexerActionType, 'POP_MODE', {
    get: LexerActionType$POP_MODE_getInstance
  });
  Object.defineProperty(LexerActionType, 'PUSH_MODE', {
    get: LexerActionType$PUSH_MODE_getInstance
  });
  Object.defineProperty(LexerActionType, 'SKIP', {
    get: LexerActionType$SKIP_getInstance
  });
  Object.defineProperty(LexerActionType, 'TYPE', {
    get: LexerActionType$TYPE_getInstance
  });
  package$atn.LexerActionType = LexerActionType;
  package$atn.LexerChannelAction = LexerChannelAction;
  package$atn.LexerCustomAction = LexerCustomAction;
  package$atn.LexerIndexedCustomAction = LexerIndexedCustomAction;
  package$atn.LexerModeAction = LexerModeAction;
  Object.defineProperty(LexerMoreAction, 'Companion', {
    get: LexerMoreAction$Companion_getInstance
  });
  package$atn.LexerMoreAction = LexerMoreAction;
  Object.defineProperty(LexerPopModeAction, 'Companion', {
    get: LexerPopModeAction$Companion_getInstance
  });
  package$atn.LexerPopModeAction = LexerPopModeAction;
  package$atn.LexerPushModeAction = LexerPushModeAction;
  Object.defineProperty(LexerSkipAction, 'Companion', {
    get: LexerSkipAction$Companion_getInstance
  });
  package$atn.LexerSkipAction = LexerSkipAction;
  package$atn.LexerTypeAction = LexerTypeAction;
  package$atn.LookaheadEventInfo = LookaheadEventInfo;
  package$atn.LoopEndState = LoopEndState;
  package$atn.NotSetTransition = NotSetTransition;
  OrderedATNConfigSet.LexerConfigHashSet = OrderedATNConfigSet$LexerConfigHashSet;
  package$atn.OrderedATNConfigSet = OrderedATNConfigSet;
  package$atn.ParseInfo = ParseInfo;
  Object.defineProperty(ParserATNSimulator, 'Companion', {
    get: ParserATNSimulator$Companion_getInstance
  });
  package$atn.ParserATNSimulator_init_2qlqpr$ = ParserATNSimulator_init;
  package$atn.ParserATNSimulator = ParserATNSimulator;
  package$atn.PlusBlockStartState = PlusBlockStartState;
  package$atn.PlusLoopbackState = PlusLoopbackState;
  package$atn.PrecedencePredicateTransition = PrecedencePredicateTransition;
  package$atn.PredicateEvalInfo = PredicateEvalInfo;
  package$atn.PredicateTransition = PredicateTransition;
  Object.defineProperty(PredictionContext, 'Companion', {
    get: PredictionContext$Companion_getInstance
  });
  package$atn.PredictionContext = PredictionContext;
  package$atn.PredictionContextCache = PredictionContextCache;
  Object.defineProperty(PredictionMode, 'SLL', {
    get: PredictionMode$SLL_getInstance
  });
  Object.defineProperty(PredictionMode, 'LL', {
    get: PredictionMode$LL_getInstance
  });
  Object.defineProperty(PredictionMode, 'LL_EXACT_AMBIG_DETECTION', {
    get: PredictionMode$LL_EXACT_AMBIG_DETECTION_getInstance
  });
  PredictionMode.AltAndContextMap = PredictionMode$AltAndContextMap;
  Object.defineProperty(PredictionMode, 'Companion', {
    get: PredictionMode$Companion_getInstance
  });
  package$atn.PredictionMode = PredictionMode;
  package$atn.ProfilingATNSimulator = ProfilingATNSimulator;
  package$atn.RangeTransition = RangeTransition;
  package$atn.RuleStartState = RuleStartState;
  package$atn.RuleStopState = RuleStopState;
  package$atn.RuleTransition_init_hb7kk3$ = RuleTransition_init;
  package$atn.RuleTransition = RuleTransition;
  SemanticContext.Predicate_init = SemanticContext$SemanticContext$Predicate_init;
  SemanticContext.Predicate_init_ydzd23$ = SemanticContext$SemanticContext$Predicate_init_0;
  SemanticContext.Predicate = SemanticContext$Predicate;
  SemanticContext.PrecedencePredicate = SemanticContext$PrecedencePredicate;
  SemanticContext.Operator = SemanticContext$Operator;
  SemanticContext.AND = SemanticContext$AND;
  SemanticContext.OR = SemanticContext$OR;
  Object.defineProperty(SemanticContext, 'Companion', {
    get: SemanticContext$Companion_getInstance
  });
  package$atn.SemanticContext = SemanticContext;
  package$atn.SetTransition = SetTransition;
  Object.defineProperty(SingletonPredictionContext, 'Companion', {
    get: SingletonPredictionContext$Companion_getInstance
  });
  package$atn.SingletonPredictionContext = SingletonPredictionContext;
  package$atn.StarBlockStartState = StarBlockStartState;
  package$atn.StarLoopEntryState = StarLoopEntryState;
  package$atn.StarLoopbackState = StarLoopbackState;
  package$atn.TokensStartState = TokensStartState;
  Object.defineProperty(Transition, 'Companion', {
    get: Transition$Companion_getInstance
  });
  package$atn.Transition = Transition;
  package$atn.WildcardTransition = WildcardTransition;
  var package$dfa = package$kotlinruntime.dfa || (package$kotlinruntime.dfa = {});
  package$dfa.DFA = DFA;
  package$dfa.DFASerializer_init_wmmrt4$ = DFASerializer_init;
  package$dfa.DFASerializer_init_vp5t2u$ = DFASerializer_init_0;
  package$dfa.DFASerializer = DFASerializer;
  DFAState.PredPrediction = DFAState$PredPrediction;
  package$dfa.DFAState_init = DFAState_init;
  package$dfa.DFAState_init_za3lpa$ = DFAState_init_0;
  package$dfa.DFAState_init_5hido$ = DFAState_init_1;
  package$dfa.DFAState = DFAState;
  package$dfa.LexerDFASerializer = LexerDFASerializer;
  var package$misc = package$kotlinruntime.misc || (package$kotlinruntime.misc = {});
  package$misc.AbstractEqualityComparator = AbstractEqualityComparator;
  Array2DHashSet.SetIterator = Array2DHashSet$SetIterator;
  Object.defineProperty(Array2DHashSet, 'Companion', {
    get: Array2DHashSet$Companion_getInstance
  });
  package$misc.Array2DHashSet = Array2DHashSet;
  package$misc.DoubleKeyMap = DoubleKeyMap;
  package$misc.EqualityComparator = EqualityComparator;
  FlexibleHashMap.Entry = FlexibleHashMap$Entry;
  Object.defineProperty(FlexibleHashMap, 'Companion', {
    get: FlexibleHashMap$Companion_getInstance
  });
  package$misc.FlexibleHashMap = FlexibleHashMap;
  package$misc.IntSet = IntSet;
  Object.defineProperty(IntegerList, 'Companion', {
    get: IntegerList$Companion_getInstance
  });
  package$misc.IntegerList_init = IntegerList_init;
  package$misc.IntegerList_init_za3lpa$ = IntegerList_init_0;
  package$misc.IntegerList_init_4dgdii$ = IntegerList_init_1;
  package$misc.IntegerList_init_wlb8mv$ = IntegerList_init_2;
  package$misc.IntegerList = IntegerList;
  package$misc.IntegerStack_init = IntegerStack_init;
  package$misc.IntegerStack_init_za3lpa$ = IntegerStack_init_0;
  package$misc.IntegerStack_init_6l5ocw$ = IntegerStack_init_1;
  package$misc.IntegerStack = IntegerStack;
  InterpreterDataReader.prototype.InterpreterData = InterpreterDataReader$InterpreterData;
  Object.defineProperty(package$misc, 'InterpreterDataReader', {
    get: InterpreterDataReader_getInstance
  });
  Object.defineProperty(Interval, 'Companion', {
    get: Interval$Companion_getInstance
  });
  package$misc.Interval = Interval;
  Object.defineProperty(IntervalSet, 'Companion', {
    get: IntervalSet$Companion_getInstance
  });
  package$misc.IntervalSet_init_z67ncl$ = IntervalSet_init;
  package$misc.IntervalSet_init_mtnojb$ = IntervalSet_init_0;
  package$misc.IntervalSet_init_pmhfmb$ = IntervalSet_init_1;
  package$misc.IntervalSet = IntervalSet;
  package$misc.LogManager = LogManager;
  package$misc.MultiMap = MultiMap;
  Object.defineProperty(package$misc, 'MurmurHash', {
    get: MurmurHash_getInstance
  });
  package$misc.NotNull = NotNull;
  Object.defineProperty(ObjectEqualityComparator, 'Companion', {
    get: ObjectEqualityComparator$Companion_getInstance
  });
  package$misc.ObjectEqualityComparator = ObjectEqualityComparator;
  package$misc.OrderedHashSet = OrderedHashSet;
  package$misc.ParseCancellationException_init = ParseCancellationException_init;
  package$misc.ParseCancellationException_init_61zpoe$ = ParseCancellationException_init_0;
  package$misc.ParseCancellationException_init_tcv7n7$ = ParseCancellationException_init_1;
  package$misc.ParseCancellationException_init_ldd2zj$ = ParseCancellationException_init_2;
  package$misc.ParseCancellationException = ParseCancellationException;
  package$misc.Predicate = Predicate;
  Object.defineProperty(package$misc, 'Utils', {
    get: Utils_getInstance
  });
  var package$tree = package$kotlinruntime.tree || (package$kotlinruntime.tree = {});
  package$tree.AbstractParseTreeVisitor = AbstractParseTreeVisitor;
  package$tree.ErrorNode = ErrorNode;
  package$tree.ErrorNodeImpl = ErrorNodeImpl;
  package$tree.ParseTree = ParseTree;
  package$tree.ParseTreeListener = ParseTreeListener;
  package$tree.ParseTreeProperty = ParseTreeProperty;
  package$tree.ParseTreeVisitor = ParseTreeVisitor;
  Object.defineProperty(ParseTreeWalker, 'Companion', {
    get: ParseTreeWalker$Companion_getInstance
  });
  package$tree.ParseTreeWalker = ParseTreeWalker;
  package$tree.RuleNode = RuleNode;
  package$tree.SyntaxTree = SyntaxTree;
  package$tree.TerminalNode = TerminalNode;
  package$tree.TerminalNodeImpl = TerminalNodeImpl;
  package$tree.Tree = Tree;
  Object.defineProperty(package$tree, 'Trees', {
    get: Trees_getInstance
  });
  var package$pattern = package$tree.pattern || (package$tree.pattern = {});
  package$pattern.Chunk = Chunk;
  package$pattern.ParseTreeMatch = ParseTreeMatch;
  package$pattern.ParseTreePattern = ParseTreePattern;
  package$pattern.ParseTreePatternMatcher = ParseTreePatternMatcher;
  Object.defineProperty(package$pattern, 'DEFAULT_CHANNEL', {
    get: function () {
      return DEFAULT_CHANNEL;
    }
  });
  package$pattern.RuleTagToken = RuleTagToken;
  package$pattern.TagChunk_init_61zpoe$ = TagChunk_init;
  package$pattern.TagChunk = TagChunk;
  package$pattern.TextChunk = TextChunk;
  package$pattern.TokenTagToken = TokenTagToken;
  package$kotlinmultiplatform.BitSet_init = BitSet_init;
  package$kotlinmultiplatform.BitSet = BitSet;
  Object.defineProperty(package$kotlinmultiplatform, 'Collections', {
    get: Collections_getInstance
  });
  package$kotlinmultiplatform.IdentityHashMap = IdentityHashMap;
  Object.defineProperty(UUID$Variant, 'VARIANT_0', {
    get: UUID$Variant$VARIANT_0_getInstance
  });
  Object.defineProperty(UUID$Variant, 'VARIANT_1', {
    get: UUID$Variant$VARIANT_1_getInstance
  });
  Object.defineProperty(UUID$Variant, 'VARIANT_2', {
    get: UUID$Variant$VARIANT_2_getInstance
  });
  Object.defineProperty(UUID$Variant, 'VARIANT_FUTURE', {
    get: UUID$Variant$VARIANT_FUTURE_getInstance
  });
  UUID.Variant = UUID$Variant;
  Object.defineProperty(UUID, 'Companion', {
    get: UUID$Companion_getInstance
  });
  package$kotlinmultiplatform.UUID_init_3pjtqy$ = UUID_init;
  package$kotlinmultiplatform.UUID_init_qmbbdj$ = UUID_init_0;
  package$kotlinmultiplatform.UUID = UUID;
  package$kotlinmultiplatform.WeakHashMap_init_q3lmfv$ = WeakHashMap_init;
  package$kotlinmultiplatform.WeakHashMap = WeakHashMap;
  package$kotlinmultiplatform.arraycopy_vybhjg$ = arraycopy;
  package$kotlinmultiplatform.arraycopy_lvhpry$ = arraycopy_0;
  package$kotlinmultiplatform.isSupplementaryCodePoint_fu3g7k$ = isSupplementaryCodePoint;
  package$kotlinmultiplatform.charCount_fu3g7k$ = charCount;
  package$kotlinmultiplatform.maxValue_n24eoe$ = maxValue;
  package$kotlinmultiplatform.toChars_fr4wp0$ = toChars;
  package$kotlinmultiplatform.isCharUppercase_s8itvh$ = isCharUppercase;
  package$kotlinmultiplatform.isCharLowerCase_s8itvh$ = isCharLowerCase;
  package$kotlinmultiplatform.errMessage_61zpoe$ = errMessage;
  package$kotlinmultiplatform.synchronized_eocq09$ = synchronized;
  package$kotlinmultiplatform.Type = Type;
  package$kotlinmultiplatform.isInstance_ozoody$ = isInstance;
  package$kotlinmultiplatform.getType_13cy8p$ = getType;
  Object.defineProperty(package$kotlinruntime, 'CharStreams', {
    get: CharStreams_getInstance
  });
  package$kotlinruntime.ThreadLocal = ThreadLocal;
  Object.defineProperty(package$misc, 'Platform', {
    get: Platform_getInstance
  });
  WritableToken.prototype.startPoint = Token.prototype.startPoint;
  WritableToken.prototype.endPoint = Token.prototype.endPoint;
  CommonToken.prototype.startPoint = WritableToken.prototype.startPoint;
  CommonToken.prototype.endPoint = WritableToken.prototype.endPoint;
  RuleTagToken.prototype.startPoint = Token.prototype.startPoint;
  RuleTagToken.prototype.endPoint = Token.prototype.endPoint;
  EMPTY_RULECTX = ParserRuleContext_init();
  START_POINT = new Point(1, 0);
  DEFAULT_CHANNEL = 0;
  Kotlin.defineModule('antlr-kotlin-antlr-kotlin-runtime-js-legacy', _);
  return _;
}));

//# sourceMappingURL=antlr-kotlin-antlr-kotlin-runtime-js-legacy.js.map
