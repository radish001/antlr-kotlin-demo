package antlr.function

import antlr.impl.Operand

/**
 * @ClassName MyFunction.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */
data class CommonFunction(val name :String, val operandList : List<Operand> )
