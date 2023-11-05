package antlr.expect

/**
 * @ClassName RoundingMode.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-11-02
 * Copyright (C) 2022 HOSE
 */
enum class RoundingMode(val value:Int) {
    ROUND_UP(0),
    ROUND_DOWN(1),
    ROUND_CEILING(2),
    ROUND_FLOOR(3),
    ROUND_HALF_UP(4),
    ROUND_HALF_DOWN(5),
    ROUND_HALF_EVEN(6)
}