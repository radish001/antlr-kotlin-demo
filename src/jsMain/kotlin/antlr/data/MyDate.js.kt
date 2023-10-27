package antlr.data

/**
 * @ClassName MyDate.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-24
 * Copyright (C) 2022 HOSE
 */
actual class MyDate {
    actual fun ADD(dateValue: MyDate): MyDate {
        TODO("Not yet implemented")
    }

    actual fun ADD(number: MyNumber): MyDate {
        TODO("Not yet implemented")
    }

    actual fun SUB(dateValue: MyDate): MyDate {
        TODO("Not yet implemented")
    }

    actual fun SUB(number: MyNumber): MyDate {
        TODO("Not yet implemented")
    }

    actual fun ToNumber(): MyNumber {
        TODO("Not yet implemented")
    }

    actual companion object {
        actual fun parse(textValue: String): MyDate {
            TODO("Not yet implemented")
        }
    }

    actual constructor(myNumber: MyNumber) {
        TODO("Not yet implemented")
    }


}