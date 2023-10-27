package antlr.json

/**
 * @ClassName FsmContext.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
data class FsmContext(var Return:Boolean?, var NextState: Int?, var L:Lexer?,  var StateStack: Int?)