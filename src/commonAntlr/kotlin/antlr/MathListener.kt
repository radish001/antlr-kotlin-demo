// Generated from java-escape by ANTLR 4.7.1
package antlr

import org.antlr.v4.kotlinruntime.tree.ParseTreeListener

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MathParser}.
 */
interface MathListener : ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MathParser#prog}.
	 * @param ctx the parse tree
	 */
	fun enterProg(ctx: MathParser.ProgContext)
	/**
	 * Exit a parse tree produced by {@link MathParser#prog}.
	 * @param ctx the parse tree
	 */
	fun exitProg(ctx: MathParser.ProgContext)
	/**
	 * Enter a parse tree produced by the {@code CEILING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCEILING_fun(ctx: MathParser.CEILING_funContext)
	/**
	 * Exit a parse tree produced by the {@code CEILING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCEILING_fun(ctx: MathParser.CEILING_funContext)
	/**
	 * Enter a parse tree produced by the {@code FACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFACT_fun(ctx: MathParser.FACT_funContext)
	/**
	 * Exit a parse tree produced by the {@code FACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFACT_fun(ctx: MathParser.FACT_funContext)
	/**
	 * Enter a parse tree produced by the {@code REGEXREPALCE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREGEXREPALCE_fun(ctx: MathParser.REGEXREPALCE_funContext)
	/**
	 * Exit a parse tree produced by the {@code REGEXREPALCE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREGEXREPALCE_fun(ctx: MathParser.REGEXREPALCE_funContext)
	/**
	 * Enter a parse tree produced by the {@code AddSub_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAddSub_fun(ctx: MathParser.AddSub_funContext)
	/**
	 * Exit a parse tree produced by the {@code AddSub_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAddSub_fun(ctx: MathParser.AddSub_funContext)
	/**
	 * Enter a parse tree produced by the {@code AVERAGEIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAVERAGEIF_fun(ctx: MathParser.AVERAGEIF_funContext)
	/**
	 * Exit a parse tree produced by the {@code AVERAGEIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAVERAGEIF_fun(ctx: MathParser.AVERAGEIF_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNULLORERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNULLORERROR_fun(ctx: MathParser.ISNULLORERROR_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNULLORERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNULLORERROR_fun(ctx: MathParser.ISNULLORERROR_funContext)
	/**
	 * Enter a parse tree produced by the {@code RIGHT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterRIGHT_fun(ctx: MathParser.RIGHT_funContext)
	/**
	 * Exit a parse tree produced by the {@code RIGHT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitRIGHT_fun(ctx: MathParser.RIGHT_funContext)
	/**
	 * Enter a parse tree produced by the {@code OCT2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterOCT2BIN_fun(ctx: MathParser.OCT2BIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code OCT2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitOCT2BIN_fun(ctx: MathParser.OCT2BIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code QUARTILE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterQUARTILE_fun(ctx: MathParser.QUARTILE_funContext)
	/**
	 * Exit a parse tree produced by the {@code QUARTILE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitQUARTILE_fun(ctx: MathParser.QUARTILE_funContext)
	/**
	 * Enter a parse tree produced by the {@code FINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFINV_fun(ctx: MathParser.FINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code FINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFINV_fun(ctx: MathParser.FINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code NOT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNOT_fun(ctx: MathParser.NOT_funContext)
	/**
	 * Exit a parse tree produced by the {@code NOT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNOT_fun(ctx: MathParser.NOT_funContext)
	/**
	 * Enter a parse tree produced by the {@code DAYS360_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDAYS360_fun(ctx: MathParser.DAYS360_funContext)
	/**
	 * Exit a parse tree produced by the {@code DAYS360_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDAYS360_fun(ctx: MathParser.DAYS360_funContext)
	/**
	 * Enter a parse tree produced by the {@code WEEKNUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterWEEKNUM_fun(ctx: MathParser.WEEKNUM_funContext)
	/**
	 * Exit a parse tree produced by the {@code WEEKNUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitWEEKNUM_fun(ctx: MathParser.WEEKNUM_funContext)
	/**
	 * Enter a parse tree produced by the {@code POISSON_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPOISSON_fun(ctx: MathParser.POISSON_funContext)
	/**
	 * Exit a parse tree produced by the {@code POISSON_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPOISSON_fun(ctx: MathParser.POISSON_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISREGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISREGEX_fun(ctx: MathParser.ISREGEX_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISREGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISREGEX_fun(ctx: MathParser.ISREGEX_funContext)
	/**
	 * Enter a parse tree produced by the {@code PERCENTILE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPERCENTILE_fun(ctx: MathParser.PERCENTILE_funContext)
	/**
	 * Exit a parse tree produced by the {@code PERCENTILE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPERCENTILE_fun(ctx: MathParser.PERCENTILE_funContext)
	/**
	 * Enter a parse tree produced by the {@code SHA256_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSHA256_fun(ctx: MathParser.SHA256_funContext)
	/**
	 * Exit a parse tree produced by the {@code SHA256_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSHA256_fun(ctx: MathParser.SHA256_funContext)
	/**
	 * Enter a parse tree produced by the {@code HYPGEOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHYPGEOMDIST_fun(ctx: MathParser.HYPGEOMDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code HYPGEOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHYPGEOMDIST_fun(ctx: MathParser.HYPGEOMDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code PERMUT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPERMUT_fun(ctx: MathParser.PERMUT_funContext)
	/**
	 * Exit a parse tree produced by the {@code PERMUT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPERMUT_fun(ctx: MathParser.PERMUT_funContext)
	/**
	 * Enter a parse tree produced by the {@code TRIMSTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTRIMSTART_fun(ctx: MathParser.TRIMSTART_funContext)
	/**
	 * Exit a parse tree produced by the {@code TRIMSTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTRIMSTART_fun(ctx: MathParser.TRIMSTART_funContext)
	/**
	 * Enter a parse tree produced by the {@code RMB_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterRMB_fun(ctx: MathParser.RMB_funContext)
	/**
	 * Exit a parse tree produced by the {@code RMB_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitRMB_fun(ctx: MathParser.RMB_funContext)
	/**
	 * Enter a parse tree produced by the {@code DEC2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDEC2HEX_fun(ctx: MathParser.DEC2HEX_funContext)
	/**
	 * Exit a parse tree produced by the {@code DEC2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDEC2HEX_fun(ctx: MathParser.DEC2HEX_funContext)
	/**
	 * Enter a parse tree produced by the {@code CLEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCLEAN_fun(ctx: MathParser.CLEAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code CLEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCLEAN_fun(ctx: MathParser.CLEAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code LOWER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLOWER_fun(ctx: MathParser.LOWER_funContext)
	/**
	 * Exit a parse tree produced by the {@code LOWER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLOWER_fun(ctx: MathParser.LOWER_funContext)
	/**
	 * Enter a parse tree produced by the {@code OR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterOR_fun(ctx: MathParser.OR_funContext)
	/**
	 * Exit a parse tree produced by the {@code OR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitOR_fun(ctx: MathParser.OR_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDMONTHS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDMONTHS_fun(ctx: MathParser.ADDMONTHS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDMONTHS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDMONTHS_fun(ctx: MathParser.ADDMONTHS_funContext)
	/**
	 * Enter a parse tree produced by the {@code NORMSINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNORMSINV_fun(ctx: MathParser.NORMSINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code NORMSINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNORMSINV_fun(ctx: MathParser.NORMSINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code LEFT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLEFT_fun(ctx: MathParser.LEFT_funContext)
	/**
	 * Exit a parse tree produced by the {@code LEFT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLEFT_fun(ctx: MathParser.LEFT_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISEVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISEVEN_fun(ctx: MathParser.ISEVEN_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISEVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISEVEN_fun(ctx: MathParser.ISEVEN_funContext)
	/**
	 * Enter a parse tree produced by the {@code LOGINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLOGINV_fun(ctx: MathParser.LOGINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code LOGINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLOGINV_fun(ctx: MathParser.LOGINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code WORKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterWORKDAY_fun(ctx: MathParser.WORKDAY_funContext)
	/**
	 * Exit a parse tree produced by the {@code WORKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitWORKDAY_fun(ctx: MathParser.WORKDAY_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISERROR_fun(ctx: MathParser.ISERROR_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISERROR_fun(ctx: MathParser.ISERROR_funContext)
	/**
	 * Enter a parse tree produced by the {@code BIN2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBIN2DEC_fun(ctx: MathParser.BIN2DEC_funContext)
	/**
	 * Exit a parse tree produced by the {@code BIN2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBIN2DEC_fun(ctx: MathParser.BIN2DEC_funContext)
	/**
	 * Enter a parse tree produced by the {@code JIS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterJIS_fun(ctx: MathParser.JIS_funContext)
	/**
	 * Exit a parse tree produced by the {@code JIS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitJIS_fun(ctx: MathParser.JIS_funContext)
	/**
	 * Enter a parse tree produced by the {@code CRC32_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCRC32_fun(ctx: MathParser.CRC32_funContext)
	/**
	 * Exit a parse tree produced by the {@code CRC32_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCRC32_fun(ctx: MathParser.CRC32_funContext)
	/**
	 * Enter a parse tree produced by the {@code LCM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLCM_fun(ctx: MathParser.LCM_funContext)
	/**
	 * Exit a parse tree produced by the {@code LCM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLCM_fun(ctx: MathParser.LCM_funContext)
	/**
	 * Enter a parse tree produced by the {@code HARMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHARMEAN_fun(ctx: MathParser.HARMEAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code HARMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHARMEAN_fun(ctx: MathParser.HARMEAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code NORMINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNORMINV_fun(ctx: MathParser.NORMINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code NORMINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNORMINV_fun(ctx: MathParser.NORMINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code GAMMAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGAMMAINV_fun(ctx: MathParser.GAMMAINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code GAMMAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGAMMAINV_fun(ctx: MathParser.GAMMAINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code SQRT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSQRT_fun(ctx: MathParser.SQRT_funContext)
	/**
	 * Exit a parse tree produced by the {@code SQRT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSQRT_fun(ctx: MathParser.SQRT_funContext)
	/**
	 * Enter a parse tree produced by the {@code DEGREES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDEGREES_fun(ctx: MathParser.DEGREES_funContext)
	/**
	 * Exit a parse tree produced by the {@code DEGREES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDEGREES_fun(ctx: MathParser.DEGREES_funContext)
	/**
	 * Enter a parse tree produced by the {@code MROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMROUND_fun(ctx: MathParser.MROUND_funContext)
	/**
	 * Exit a parse tree produced by the {@code MROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMROUND_fun(ctx: MathParser.MROUND_funContext)
	/**
	 * Enter a parse tree produced by the {@code DATEDIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDATEDIF_fun(ctx: MathParser.DATEDIF_funContext)
	/**
	 * Exit a parse tree produced by the {@code DATEDIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDATEDIF_fun(ctx: MathParser.DATEDIF_funContext)
	/**
	 * Enter a parse tree produced by the {@code TRIMEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTRIMEND_fun(ctx: MathParser.TRIMEND_funContext)
	/**
	 * Exit a parse tree produced by the {@code TRIMEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTRIMEND_fun(ctx: MathParser.TRIMEND_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISLOGICAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISLOGICAL_fun(ctx: MathParser.ISLOGICAL_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISLOGICAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISLOGICAL_fun(ctx: MathParser.ISLOGICAL_funContext)
	/**
	 * Enter a parse tree produced by the {@code INT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterINT_fun(ctx: MathParser.INT_funContext)
	/**
	 * Exit a parse tree produced by the {@code INT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitINT_fun(ctx: MathParser.INT_funContext)
	/**
	 * Enter a parse tree produced by the {@code SUMIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSUMIF_fun(ctx: MathParser.SUMIF_funContext)
	/**
	 * Exit a parse tree produced by the {@code SUMIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSUMIF_fun(ctx: MathParser.SUMIF_funContext)
	/**
	 * Enter a parse tree produced by the {@code HEX2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHEX2OCT_fun(ctx: MathParser.HEX2OCT_funContext)
	/**
	 * Exit a parse tree produced by the {@code HEX2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHEX2OCT_fun(ctx: MathParser.HEX2OCT_funContext)
	/**
	 * Enter a parse tree produced by the {@code PI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPI_fun(ctx: MathParser.PI_funContext)
	/**
	 * Exit a parse tree produced by the {@code PI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPI_fun(ctx: MathParser.PI_funContext)
	/**
	 * Enter a parse tree produced by the {@code YEAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterYEAR_fun(ctx: MathParser.YEAR_funContext)
	/**
	 * Exit a parse tree produced by the {@code YEAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitYEAR_fun(ctx: MathParser.YEAR_funContext)
	/**
	 * Enter a parse tree produced by the {@code SQRTPI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSQRTPI_fun(ctx: MathParser.SQRTPI_funContext)
	/**
	 * Exit a parse tree produced by the {@code SQRTPI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSQRTPI_fun(ctx: MathParser.SQRTPI_funContext)
	/**
	 * Enter a parse tree produced by the {@code CONCATENATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCONCATENATE_fun(ctx: MathParser.CONCATENATE_funContext)
	/**
	 * Exit a parse tree produced by the {@code CONCATENATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCONCATENATE_fun(ctx: MathParser.CONCATENATE_funContext)
	/**
	 * Enter a parse tree produced by the {@code COUNT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCOUNT_fun(ctx: MathParser.COUNT_funContext)
	/**
	 * Exit a parse tree produced by the {@code COUNT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCOUNT_fun(ctx: MathParser.COUNT_funContext)
	/**
	 * Enter a parse tree produced by the {@code FALSE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFALSE_fun(ctx: MathParser.FALSE_funContext)
	/**
	 * Exit a parse tree produced by the {@code FALSE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFALSE_fun(ctx: MathParser.FALSE_funContext)
	/**
	 * Enter a parse tree produced by the {@code HTMLENCODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHTMLENCODE_fun(ctx: MathParser.HTMLENCODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code HTMLENCODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHTMLENCODE_fun(ctx: MathParser.HTMLENCODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code BASE64URLTOTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBASE64URLTOTEXT_fun(ctx: MathParser.BASE64URLTOTEXT_funContext)
	/**
	 * Exit a parse tree produced by the {@code BASE64URLTOTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBASE64URLTOTEXT_fun(ctx: MathParser.BASE64URLTOTEXT_funContext)
	/**
	 * Enter a parse tree produced by the {@code LOG10_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLOG10_fun(ctx: MathParser.LOG10_funContext)
	/**
	 * Exit a parse tree produced by the {@code LOG10_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLOG10_fun(ctx: MathParser.LOG10_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISTEXT_fun(ctx: MathParser.ISTEXT_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISTEXT_fun(ctx: MathParser.ISTEXT_funContext)
	/**
	 * Enter a parse tree produced by the {@code NEGBINOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNEGBINOMDIST_fun(ctx: MathParser.NEGBINOMDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code NEGBINOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNEGBINOMDIST_fun(ctx: MathParser.NEGBINOMDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code NETWORKDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNETWORKDAYS_fun(ctx: MathParser.NETWORKDAYS_funContext)
	/**
	 * Exit a parse tree produced by the {@code NETWORKDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNETWORKDAYS_fun(ctx: MathParser.NETWORKDAYS_funContext)
	/**
	 * Enter a parse tree produced by the {@code FACTDOUBLE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFACTDOUBLE_fun(ctx: MathParser.FACTDOUBLE_funContext)
	/**
	 * Exit a parse tree produced by the {@code FACTDOUBLE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFACTDOUBLE_fun(ctx: MathParser.FACTDOUBLE_funContext)
	/**
	 * Enter a parse tree produced by the {@code TIMEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTIMEVALUE_fun(ctx: MathParser.TIMEVALUE_funContext)
	/**
	 * Exit a parse tree produced by the {@code TIMEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTIMEVALUE_fun(ctx: MathParser.TIMEVALUE_funContext)
	/**
	 * Enter a parse tree produced by the {@code AVEDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAVEDEV_fun(ctx: MathParser.AVEDEV_funContext)
	/**
	 * Exit a parse tree produced by the {@code AVEDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAVEDEV_fun(ctx: MathParser.AVEDEV_funContext)
	/**
	 * Enter a parse tree produced by the {@code GUID_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGUID_fun(ctx: MathParser.GUID_funContext)
	/**
	 * Exit a parse tree produced by the {@code GUID_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGUID_fun(ctx: MathParser.GUID_funContext)
	/**
	 * Enter a parse tree produced by the {@code JSON_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterJSON_fun(ctx: MathParser.JSON_funContext)
	/**
	 * Exit a parse tree produced by the {@code JSON_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitJSON_fun(ctx: MathParser.JSON_funContext)
	/**
	 * Enter a parse tree produced by the {@code FIXED_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFIXED_fun(ctx: MathParser.FIXED_funContext)
	/**
	 * Exit a parse tree produced by the {@code FIXED_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFIXED_fun(ctx: MathParser.FIXED_funContext)
	/**
	 * Enter a parse tree produced by the {@code TINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTINV_fun(ctx: MathParser.TINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code TINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTINV_fun(ctx: MathParser.TINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code EDATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEDATE_fun(ctx: MathParser.EDATE_funContext)
	/**
	 * Exit a parse tree produced by the {@code EDATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEDATE_fun(ctx: MathParser.EDATE_funContext)
	/**
	 * Enter a parse tree produced by the {@code GEOMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGEOMEAN_fun(ctx: MathParser.GEOMEAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code GEOMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGEOMEAN_fun(ctx: MathParser.GEOMEAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code VAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterVAR_fun(ctx: MathParser.VAR_funContext)
	/**
	 * Exit a parse tree produced by the {@code VAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitVAR_fun(ctx: MathParser.VAR_funContext)
	/**
	 * Enter a parse tree produced by the {@code SIGN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSIGN_fun(ctx: MathParser.SIGN_funContext)
	/**
	 * Exit a parse tree produced by the {@code SIGN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSIGN_fun(ctx: MathParser.SIGN_funContext)
	/**
	 * Enter a parse tree produced by the {@code EOMONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEOMONTH_fun(ctx: MathParser.EOMONTH_funContext)
	/**
	 * Exit a parse tree produced by the {@code EOMONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEOMONTH_fun(ctx: MathParser.EOMONTH_funContext)
	/**
	 * Enter a parse tree produced by the {@code FLOOR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFLOOR_fun(ctx: MathParser.FLOOR_funContext)
	/**
	 * Exit a parse tree produced by the {@code FLOOR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFLOOR_fun(ctx: MathParser.FLOOR_funContext)
	/**
	 * Enter a parse tree produced by the {@code HOUR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHOUR_fun(ctx: MathParser.HOUR_funContext)
	/**
	 * Exit a parse tree produced by the {@code HOUR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHOUR_fun(ctx: MathParser.HOUR_funContext)
	/**
	 * Enter a parse tree produced by the {@code LEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLEN_fun(ctx: MathParser.LEN_funContext)
	/**
	 * Exit a parse tree produced by the {@code LEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLEN_fun(ctx: MathParser.LEN_funContext)
	/**
	 * Enter a parse tree produced by the {@code ACOS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterACOS_fun(ctx: MathParser.ACOS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ACOS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitACOS_fun(ctx: MathParser.ACOS_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNULLORWHITESPACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNULLORWHITESPACE_fun(ctx: MathParser.ISNULLORWHITESPACE_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNULLORWHITESPACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNULLORWHITESPACE_fun(ctx: MathParser.ISNULLORWHITESPACE_funContext)
	/**
	 * Enter a parse tree produced by the {@code COSH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCOSH_fun(ctx: MathParser.COSH_funContext)
	/**
	 * Exit a parse tree produced by the {@code COSH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCOSH_fun(ctx: MathParser.COSH_funContext)
	/**
	 * Enter a parse tree produced by the {@code QUOTIENT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterQUOTIENT_fun(ctx: MathParser.QUOTIENT_funContext)
	/**
	 * Exit a parse tree produced by the {@code QUOTIENT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitQUOTIENT_fun(ctx: MathParser.QUOTIENT_funContext)
	/**
	 * Enter a parse tree produced by the {@code OCT2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterOCT2DEC_fun(ctx: MathParser.OCT2DEC_funContext)
	/**
	 * Exit a parse tree produced by the {@code OCT2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitOCT2DEC_fun(ctx: MathParser.OCT2DEC_funContext)
	/**
	 * Enter a parse tree produced by the {@code SEARCH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSEARCH_fun(ctx: MathParser.SEARCH_funContext)
	/**
	 * Exit a parse tree produced by the {@code SEARCH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSEARCH_fun(ctx: MathParser.SEARCH_funContext)
	/**
	 * Enter a parse tree produced by the {@code ROUNDUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterROUNDUP_fun(ctx: MathParser.ROUNDUP_funContext)
	/**
	 * Exit a parse tree produced by the {@code ROUNDUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitROUNDUP_fun(ctx: MathParser.ROUNDUP_funContext)
	/**
	 * Enter a parse tree produced by the {@code COMBIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCOMBIN_fun(ctx: MathParser.COMBIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code COMBIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCOMBIN_fun(ctx: MathParser.COMBIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code CODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCODE_fun(ctx: MathParser.CODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code CODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCODE_fun(ctx: MathParser.CODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code ASINH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterASINH_fun(ctx: MathParser.ASINH_funContext)
	/**
	 * Exit a parse tree produced by the {@code ASINH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitASINH_fun(ctx: MathParser.ASINH_funContext)
	/**
	 * Enter a parse tree produced by the {@code SIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSIN_fun(ctx: MathParser.SIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code SIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSIN_fun(ctx: MathParser.SIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code SUBSTRING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSUBSTRING_fun(ctx: MathParser.SUBSTRING_funContext)
	/**
	 * Exit a parse tree produced by the {@code SUBSTRING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSUBSTRING_fun(ctx: MathParser.SUBSTRING_funContext)
	/**
	 * Enter a parse tree produced by the {@code AVERAGE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAVERAGE_fun(ctx: MathParser.AVERAGE_funContext)
	/**
	 * Exit a parse tree produced by the {@code AVERAGE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAVERAGE_fun(ctx: MathParser.AVERAGE_funContext)
	/**
	 * Enter a parse tree produced by the {@code LOG_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLOG_fun(ctx: MathParser.LOG_funContext)
	/**
	 * Exit a parse tree produced by the {@code LOG_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLOG_fun(ctx: MathParser.LOG_funContext)
	/**
	 * Enter a parse tree produced by the {@code HMACSHA512_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHMACSHA512_fun(ctx: MathParser.HMACSHA512_funContext)
	/**
	 * Exit a parse tree produced by the {@code HMACSHA512_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHMACSHA512_fun(ctx: MathParser.HMACSHA512_funContext)
	/**
	 * Enter a parse tree produced by the {@code AndOr_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAndOr_fun(ctx: MathParser.AndOr_funContext)
	/**
	 * Exit a parse tree produced by the {@code AndOr_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAndOr_fun(ctx: MathParser.AndOr_funContext)
	/**
	 * Enter a parse tree produced by the {@code STDEVP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSTDEVP_fun(ctx: MathParser.STDEVP_funContext)
	/**
	 * Exit a parse tree produced by the {@code STDEVP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSTDEVP_fun(ctx: MathParser.STDEVP_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDYEARS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDYEARS_fun(ctx: MathParser.ADDYEARS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDYEARS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDYEARS_fun(ctx: MathParser.ADDYEARS_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDSECONDS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDSECONDS_fun(ctx: MathParser.ADDSECONDS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDSECONDS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDSECONDS_fun(ctx: MathParser.ADDSECONDS_funContext)
	/**
	 * Enter a parse tree produced by the {@code ROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterROUND_fun(ctx: MathParser.ROUND_funContext)
	/**
	 * Exit a parse tree produced by the {@code ROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitROUND_fun(ctx: MathParser.ROUND_funContext)
	/**
	 * Enter a parse tree produced by the {@code EXP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEXP_fun(ctx: MathParser.EXP_funContext)
	/**
	 * Exit a parse tree produced by the {@code EXP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEXP_fun(ctx: MathParser.EXP_funContext)
	/**
	 * Enter a parse tree produced by the {@code COUNTIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCOUNTIF_fun(ctx: MathParser.COUNTIF_funContext)
	/**
	 * Exit a parse tree produced by the {@code COUNTIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCOUNTIF_fun(ctx: MathParser.COUNTIF_funContext)
	/**
	 * Enter a parse tree produced by the {@code VARP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterVARP_fun(ctx: MathParser.VARP_funContext)
	/**
	 * Exit a parse tree produced by the {@code VARP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitVARP_fun(ctx: MathParser.VARP_funContext)
	/**
	 * Enter a parse tree produced by the {@code REMOVEEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREMOVEEND_fun(ctx: MathParser.REMOVEEND_funContext)
	/**
	 * Exit a parse tree produced by the {@code REMOVEEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREMOVEEND_fun(ctx: MathParser.REMOVEEND_funContext)
	/**
	 * Enter a parse tree produced by the {@code DATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDATE_fun(ctx: MathParser.DATE_funContext)
	/**
	 * Exit a parse tree produced by the {@code DATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDATE_fun(ctx: MathParser.DATE_funContext)
	/**
	 * Enter a parse tree produced by the {@code SPLIT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSPLIT_fun(ctx: MathParser.SPLIT_funContext)
	/**
	 * Exit a parse tree produced by the {@code SPLIT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSPLIT_fun(ctx: MathParser.SPLIT_funContext)
	/**
	 * Enter a parse tree produced by the {@code URLDECODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterURLDECODE_fun(ctx: MathParser.URLDECODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code URLDECODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitURLDECODE_fun(ctx: MathParser.URLDECODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code LARGE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLARGE_fun(ctx: MathParser.LARGE_funContext)
	/**
	 * Exit a parse tree produced by the {@code LARGE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLARGE_fun(ctx: MathParser.LARGE_funContext)
	/**
	 * Enter a parse tree produced by the {@code VALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterVALUE_fun(ctx: MathParser.VALUE_funContext)
	/**
	 * Exit a parse tree produced by the {@code VALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitVALUE_fun(ctx: MathParser.VALUE_funContext)
	/**
	 * Enter a parse tree produced by the {@code DAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDAY_fun(ctx: MathParser.DAY_funContext)
	/**
	 * Exit a parse tree produced by the {@code DAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDAY_fun(ctx: MathParser.DAY_funContext)
	/**
	 * Enter a parse tree produced by the {@code WEIBULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterWEIBULL_fun(ctx: MathParser.WEIBULL_funContext)
	/**
	 * Exit a parse tree produced by the {@code WEIBULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitWEIBULL_fun(ctx: MathParser.WEIBULL_funContext)
	/**
	 * Enter a parse tree produced by the {@code HMACSHA256_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHMACSHA256_fun(ctx: MathParser.HMACSHA256_funContext)
	/**
	 * Exit a parse tree produced by the {@code HMACSHA256_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHMACSHA256_fun(ctx: MathParser.HMACSHA256_funContext)
	/**
	 * Enter a parse tree produced by the {@code BINOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBINOMDIST_fun(ctx: MathParser.BINOMDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code BINOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBINOMDIST_fun(ctx: MathParser.BINOMDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code Judge_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterJudge_fun(ctx: MathParser.Judge_funContext)
	/**
	 * Exit a parse tree produced by the {@code Judge_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitJudge_fun(ctx: MathParser.Judge_funContext)
	/**
	 * Enter a parse tree produced by the {@code DEVSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDEVSQ_fun(ctx: MathParser.DEVSQ_funContext)
	/**
	 * Exit a parse tree produced by the {@code DEVSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDEVSQ_fun(ctx: MathParser.DEVSQ_funContext)
	/**
	 * Enter a parse tree produced by the {@code MODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMODE_fun(ctx: MathParser.MODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code MODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMODE_fun(ctx: MathParser.MODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code BETAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBETAINV_fun(ctx: MathParser.BETAINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code BETAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBETAINV_fun(ctx: MathParser.BETAINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code MAX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMAX_fun(ctx: MathParser.MAX_funContext)
	/**
	 * Exit a parse tree produced by the {@code MAX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMAX_fun(ctx: MathParser.MAX_funContext)
	/**
	 * Enter a parse tree produced by the {@code MINUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMINUTE_fun(ctx: MathParser.MINUTE_funContext)
	/**
	 * Exit a parse tree produced by the {@code MINUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMINUTE_fun(ctx: MathParser.MINUTE_funContext)
	/**
	 * Enter a parse tree produced by the {@code TAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTAN_fun(ctx: MathParser.TAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code TAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTAN_fun(ctx: MathParser.TAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code IFERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterIFERROR_fun(ctx: MathParser.IFERROR_funContext)
	/**
	 * Exit a parse tree produced by the {@code IFERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitIFERROR_fun(ctx: MathParser.IFERROR_funContext)
	/**
	 * Enter a parse tree produced by the {@code FDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFDIST_fun(ctx: MathParser.FDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code FDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFDIST_fun(ctx: MathParser.FDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code INDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterINDEXOF_fun(ctx: MathParser.INDEXOF_funContext)
	/**
	 * Exit a parse tree produced by the {@code INDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitINDEXOF_fun(ctx: MathParser.INDEXOF_funContext)
	/**
	 * Enter a parse tree produced by the {@code UPPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterUPPER_fun(ctx: MathParser.UPPER_funContext)
	/**
	 * Exit a parse tree produced by the {@code UPPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitUPPER_fun(ctx: MathParser.UPPER_funContext)
	/**
	 * Enter a parse tree produced by the {@code HTMLDECODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHTMLDECODE_fun(ctx: MathParser.HTMLDECODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code HTMLDECODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHTMLDECODE_fun(ctx: MathParser.HTMLDECODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code EXPONDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEXPONDIST_fun(ctx: MathParser.EXPONDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code EXPONDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEXPONDIST_fun(ctx: MathParser.EXPONDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code VLOOKUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterVLOOKUP_fun(ctx: MathParser.VLOOKUP_funContext)
	/**
	 * Exit a parse tree produced by the {@code VLOOKUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitVLOOKUP_fun(ctx: MathParser.VLOOKUP_funContext)
	/**
	 * Enter a parse tree produced by the {@code DEC2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDEC2BIN_fun(ctx: MathParser.DEC2BIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code DEC2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDEC2BIN_fun(ctx: MathParser.DEC2BIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code HEX2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHEX2DEC_fun(ctx: MathParser.HEX2DEC_funContext)
	/**
	 * Exit a parse tree produced by the {@code HEX2DEC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHEX2DEC_fun(ctx: MathParser.HEX2DEC_funContext)
	/**
	 * Enter a parse tree produced by the {@code SMALL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSMALL_fun(ctx: MathParser.SMALL_funContext)
	/**
	 * Exit a parse tree produced by the {@code SMALL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSMALL_fun(ctx: MathParser.SMALL_funContext)
	/**
	 * Enter a parse tree produced by the {@code ODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterODD_fun(ctx: MathParser.ODD_funContext)
	/**
	 * Exit a parse tree produced by the {@code ODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitODD_fun(ctx: MathParser.ODD_funContext)
	/**
	 * Enter a parse tree produced by the {@code TEXTTOBASE64_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTEXTTOBASE64_fun(ctx: MathParser.TEXTTOBASE64_funContext)
	/**
	 * Exit a parse tree produced by the {@code TEXTTOBASE64_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTEXTTOBASE64_fun(ctx: MathParser.TEXTTOBASE64_funContext)
	/**
	 * Enter a parse tree produced by the {@code MID_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMID_fun(ctx: MathParser.MID_funContext)
	/**
	 * Exit a parse tree produced by the {@code MID_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMID_fun(ctx: MathParser.MID_funContext)
	/**
	 * Enter a parse tree produced by the {@code PERCENTRANK_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPERCENTRANK_fun(ctx: MathParser.PERCENTRANK_funContext)
	/**
	 * Exit a parse tree produced by the {@code PERCENTRANK_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPERCENTRANK_fun(ctx: MathParser.PERCENTRANK_funContext)
	/**
	 * Enter a parse tree produced by the {@code STDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSTDEV_fun(ctx: MathParser.STDEV_funContext)
	/**
	 * Exit a parse tree produced by the {@code STDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSTDEV_fun(ctx: MathParser.STDEV_funContext)
	/**
	 * Enter a parse tree produced by the {@code NORMSDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNORMSDIST_fun(ctx: MathParser.NORMSDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code NORMSDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNORMSDIST_fun(ctx: MathParser.NORMSDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNUMBER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNUMBER_fun(ctx: MathParser.ISNUMBER_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNUMBER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNUMBER_fun(ctx: MathParser.ISNUMBER_funContext)
	/**
	 * Enter a parse tree produced by the {@code LASTINDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLASTINDEXOF_fun(ctx: MathParser.LASTINDEXOF_funContext)
	/**
	 * Exit a parse tree produced by the {@code LASTINDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLASTINDEXOF_fun(ctx: MathParser.LASTINDEXOF_funContext)
	/**
	 * Enter a parse tree produced by the {@code CHAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCHAR_fun(ctx: MathParser.CHAR_funContext)
	/**
	 * Exit a parse tree produced by the {@code CHAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCHAR_fun(ctx: MathParser.CHAR_funContext)
	/**
	 * Enter a parse tree produced by the {@code REGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREGEX_fun(ctx: MathParser.REGEX_funContext)
	/**
	 * Exit a parse tree produced by the {@code REGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREGEX_fun(ctx: MathParser.REGEX_funContext)
	/**
	 * Enter a parse tree produced by the {@code TEXTTOBASE64URL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTEXTTOBASE64URL_fun(ctx: MathParser.TEXTTOBASE64URL_funContext)
	/**
	 * Exit a parse tree produced by the {@code TEXTTOBASE64URL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTEXTTOBASE64URL_fun(ctx: MathParser.TEXTTOBASE64URL_funContext)
	/**
	 * Enter a parse tree produced by the {@code MD5_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMD5_fun(ctx: MathParser.MD5_funContext)
	/**
	 * Exit a parse tree produced by the {@code MD5_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMD5_fun(ctx: MathParser.MD5_funContext)
	/**
	 * Enter a parse tree produced by the {@code REPLACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREPLACE_fun(ctx: MathParser.REPLACE_funContext)
	/**
	 * Exit a parse tree produced by the {@code REPLACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREPLACE_fun(ctx: MathParser.REPLACE_funContext)
	/**
	 * Enter a parse tree produced by the {@code ACOSH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterACOSH_fun(ctx: MathParser.ACOSH_funContext)
	/**
	 * Exit a parse tree produced by the {@code ACOSH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitACOSH_fun(ctx: MathParser.ACOSH_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISODD_fun(ctx: MathParser.ISODD_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISODD_fun(ctx: MathParser.ISODD_funContext)
	/**
	 * Enter a parse tree produced by the {@code ASC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterASC_fun(ctx: MathParser.ASC_funContext)
	/**
	 * Exit a parse tree produced by the {@code ASC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitASC_fun(ctx: MathParser.ASC_funContext)
	/**
	 * Enter a parse tree produced by the {@code COS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterCOS_fun(ctx: MathParser.COS_funContext)
	/**
	 * Exit a parse tree produced by the {@code COS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitCOS_fun(ctx: MathParser.COS_funContext)
	/**
	 * Enter a parse tree produced by the {@code LN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLN_fun(ctx: MathParser.LN_funContext)
	/**
	 * Exit a parse tree produced by the {@code LN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLN_fun(ctx: MathParser.LN_funContext)
	/**
	 * Enter a parse tree produced by the {@code HMACMD5_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHMACMD5_fun(ctx: MathParser.HMACMD5_funContext)
	/**
	 * Exit a parse tree produced by the {@code HMACMD5_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHMACMD5_fun(ctx: MathParser.HMACMD5_funContext)
	/**
	 * Enter a parse tree produced by the {@code PRODUCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPRODUCT_fun(ctx: MathParser.PRODUCT_funContext)
	/**
	 * Exit a parse tree produced by the {@code PRODUCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPRODUCT_fun(ctx: MathParser.PRODUCT_funContext)
	/**
	 * Enter a parse tree produced by the {@code EXACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEXACT_fun(ctx: MathParser.EXACT_funContext)
	/**
	 * Exit a parse tree produced by the {@code EXACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEXACT_fun(ctx: MathParser.EXACT_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDMINUTES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDMINUTES_fun(ctx: MathParser.ADDMINUTES_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDMINUTES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDMINUTES_fun(ctx: MathParser.ADDMINUTES_funContext)
	/**
	 * Enter a parse tree produced by the {@code SUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSUM_fun(ctx: MathParser.SUM_funContext)
	/**
	 * Exit a parse tree produced by the {@code SUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSUM_fun(ctx: MathParser.SUM_funContext)
	/**
	 * Enter a parse tree produced by the {@code SUMSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSUMSQ_fun(ctx: MathParser.SUMSQ_funContext)
	/**
	 * Exit a parse tree produced by the {@code SUMSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSUMSQ_fun(ctx: MathParser.SUMSQ_funContext)
	/**
	 * Enter a parse tree produced by the {@code SECOND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSECOND_fun(ctx: MathParser.SECOND_funContext)
	/**
	 * Exit a parse tree produced by the {@code SECOND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSECOND_fun(ctx: MathParser.SECOND_funContext)
	/**
	 * Enter a parse tree produced by the {@code GAMMADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGAMMADIST_fun(ctx: MathParser.GAMMADIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code GAMMADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGAMMADIST_fun(ctx: MathParser.GAMMADIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code OCT2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterOCT2HEX_fun(ctx: MathParser.OCT2HEX_funContext)
	/**
	 * Exit a parse tree produced by the {@code OCT2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitOCT2HEX_fun(ctx: MathParser.OCT2HEX_funContext)
	/**
	 * Enter a parse tree produced by the {@code TODAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTODAY_fun(ctx: MathParser.TODAY_funContext)
	/**
	 * Exit a parse tree produced by the {@code TODAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTODAY_fun(ctx: MathParser.TODAY_funContext)
	/**
	 * Enter a parse tree produced by the {@code ATAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterATAN_fun(ctx: MathParser.ATAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code ATAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitATAN_fun(ctx: MathParser.ATAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code E_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterE_fun(ctx: MathParser.E_funContext)
	/**
	 * Exit a parse tree produced by the {@code E_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitE_fun(ctx: MathParser.E_funContext)
	/**
	 * Enter a parse tree produced by the {@code TRIM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTRIM_fun(ctx: MathParser.TRIM_funContext)
	/**
	 * Exit a parse tree produced by the {@code TRIM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTRIM_fun(ctx: MathParser.TRIM_funContext)
	/**
	 * Enter a parse tree produced by the {@code RADIANS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterRADIANS_fun(ctx: MathParser.RADIANS_funContext)
	/**
	 * Exit a parse tree produced by the {@code RADIANS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitRADIANS_fun(ctx: MathParser.RADIANS_funContext)
	/**
	 * Enter a parse tree produced by the {@code GAMMALN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGAMMALN_fun(ctx: MathParser.GAMMALN_funContext)
	/**
	 * Exit a parse tree produced by the {@code GAMMALN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGAMMALN_fun(ctx: MathParser.GAMMALN_funContext)
	/**
	 * Enter a parse tree produced by the {@code TEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTEXT_fun(ctx: MathParser.TEXT_funContext)
	/**
	 * Exit a parse tree produced by the {@code TEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTEXT_fun(ctx: MathParser.TEXT_funContext)
	/**
	 * Enter a parse tree produced by the {@code FISHER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFISHER_fun(ctx: MathParser.FISHER_funContext)
	/**
	 * Exit a parse tree produced by the {@code FISHER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFISHER_fun(ctx: MathParser.FISHER_funContext)
	/**
	 * Enter a parse tree produced by the {@code AND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterAND_fun(ctx: MathParser.AND_funContext)
	/**
	 * Exit a parse tree produced by the {@code AND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitAND_fun(ctx: MathParser.AND_funContext)
	/**
	 * Enter a parse tree produced by the {@code BIN2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBIN2HEX_fun(ctx: MathParser.BIN2HEX_funContext)
	/**
	 * Exit a parse tree produced by the {@code BIN2HEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBIN2HEX_fun(ctx: MathParser.BIN2HEX_funContext)
	/**
	 * Enter a parse tree produced by the {@code MULTINOMIAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMULTINOMIAL_fun(ctx: MathParser.MULTINOMIAL_funContext)
	/**
	 * Exit a parse tree produced by the {@code MULTINOMIAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMULTINOMIAL_fun(ctx: MathParser.MULTINOMIAL_funContext)
	/**
	 * Enter a parse tree produced by the {@code MONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMONTH_fun(ctx: MathParser.MONTH_funContext)
	/**
	 * Exit a parse tree produced by the {@code MONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMONTH_fun(ctx: MathParser.MONTH_funContext)
	/**
	 * Enter a parse tree produced by the {@code URLENCODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterURLENCODE_fun(ctx: MathParser.URLENCODE_funContext)
	/**
	 * Exit a parse tree produced by the {@code URLENCODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitURLENCODE_fun(ctx: MathParser.URLENCODE_funContext)
	/**
	 * Enter a parse tree produced by the {@code NORMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNORMDIST_fun(ctx: MathParser.NORMDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code NORMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNORMDIST_fun(ctx: MathParser.NORMDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code HMACSHA1_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHMACSHA1_fun(ctx: MathParser.HMACSHA1_funContext)
	/**
	 * Exit a parse tree produced by the {@code HMACSHA1_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHMACSHA1_fun(ctx: MathParser.HMACSHA1_funContext)
	/**
	 * Enter a parse tree produced by the {@code ENDSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterENDSWITH_fun(ctx: MathParser.ENDSWITH_funContext)
	/**
	 * Exit a parse tree produced by the {@code ENDSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitENDSWITH_fun(ctx: MathParser.ENDSWITH_funContext)
	/**
	 * Enter a parse tree produced by the {@code Bracket_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBracket_fun(ctx: MathParser.Bracket_funContext)
	/**
	 * Exit a parse tree produced by the {@code Bracket_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBracket_fun(ctx: MathParser.Bracket_funContext)
	/**
	 * Enter a parse tree produced by the {@code BETADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBETADIST_fun(ctx: MathParser.BETADIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code BETADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBETADIST_fun(ctx: MathParser.BETADIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code NOW_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterNOW_fun(ctx: MathParser.NOW_funContext)
	/**
	 * Exit a parse tree produced by the {@code NOW_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitNOW_fun(ctx: MathParser.NOW_funContext)
	/**
	 * Enter a parse tree produced by the {@code ATANH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterATANH_fun(ctx: MathParser.ATANH_funContext)
	/**
	 * Exit a parse tree produced by the {@code ATANH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitATANH_fun(ctx: MathParser.ATANH_funContext)
	/**
	 * Enter a parse tree produced by the {@code MEDIAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMEDIAN_fun(ctx: MathParser.MEDIAN_funContext)
	/**
	 * Exit a parse tree produced by the {@code MEDIAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMEDIAN_fun(ctx: MathParser.MEDIAN_funContext)
	/**
	 * Enter a parse tree produced by the {@code POWER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPOWER_fun(ctx: MathParser.POWER_funContext)
	/**
	 * Exit a parse tree produced by the {@code POWER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPOWER_fun(ctx: MathParser.POWER_funContext)
	/**
	 * Enter a parse tree produced by the {@code DEC2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDEC2OCT_fun(ctx: MathParser.DEC2OCT_funContext)
	/**
	 * Exit a parse tree produced by the {@code DEC2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDEC2OCT_fun(ctx: MathParser.DEC2OCT_funContext)
	/**
	 * Enter a parse tree produced by the {@code PROPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPROPER_fun(ctx: MathParser.PROPER_funContext)
	/**
	 * Exit a parse tree produced by the {@code PROPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPROPER_fun(ctx: MathParser.PROPER_funContext)
	/**
	 * Enter a parse tree produced by the {@code TRUNC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTRUNC_fun(ctx: MathParser.TRUNC_funContext)
	/**
	 * Exit a parse tree produced by the {@code TRUNC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTRUNC_fun(ctx: MathParser.TRUNC_funContext)
	/**
	 * Enter a parse tree produced by the {@code GCD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterGCD_fun(ctx: MathParser.GCD_funContext)
	/**
	 * Exit a parse tree produced by the {@code GCD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitGCD_fun(ctx: MathParser.GCD_funContext)
	/**
	 * Enter a parse tree produced by the {@code TANH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTANH_fun(ctx: MathParser.TANH_funContext)
	/**
	 * Exit a parse tree produced by the {@code TANH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTANH_fun(ctx: MathParser.TANH_funContext)
	/**
	 * Enter a parse tree produced by the {@code HEX2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterHEX2BIN_fun(ctx: MathParser.HEX2BIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code HEX2BIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitHEX2BIN_fun(ctx: MathParser.HEX2BIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code SINH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSINH_fun(ctx: MathParser.SINH_funContext)
	/**
	 * Exit a parse tree produced by the {@code SINH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSINH_fun(ctx: MathParser.SINH_funContext)
	/**
	 * Enter a parse tree produced by the {@code SHA512_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSHA512_fun(ctx: MathParser.SHA512_funContext)
	/**
	 * Exit a parse tree produced by the {@code SHA512_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSHA512_fun(ctx: MathParser.SHA512_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDDAYS_fun(ctx: MathParser.ADDDAYS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDDAYS_fun(ctx: MathParser.ADDDAYS_funContext)
	/**
	 * Enter a parse tree produced by the {@code MIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMIN_fun(ctx: MathParser.MIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code MIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMIN_fun(ctx: MathParser.MIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNONTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNONTEXT_fun(ctx: MathParser.ISNONTEXT_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNONTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNONTEXT_fun(ctx: MathParser.ISNONTEXT_funContext)
	/**
	 * Enter a parse tree produced by the {@code ABS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterABS_fun(ctx: MathParser.ABS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ABS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitABS_fun(ctx: MathParser.ABS_funContext)
	/**
	 * Enter a parse tree produced by the {@code ROUNDDOWN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterROUNDDOWN_fun(ctx: MathParser.ROUNDDOWN_funContext)
	/**
	 * Exit a parse tree produced by the {@code ROUNDDOWN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitROUNDDOWN_fun(ctx: MathParser.ROUNDDOWN_funContext)
	/**
	 * Enter a parse tree produced by the {@code IF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterIF_fun(ctx: MathParser.IF_funContext)
	/**
	 * Exit a parse tree produced by the {@code IF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitIF_fun(ctx: MathParser.IF_funContext)
	/**
	 * Enter a parse tree produced by the {@code JOIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterJOIN_fun(ctx: MathParser.JOIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code JOIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitJOIN_fun(ctx: MathParser.JOIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code FIND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFIND_fun(ctx: MathParser.FIND_funContext)
	/**
	 * Exit a parse tree produced by the {@code FIND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFIND_fun(ctx: MathParser.FIND_funContext)
	/**
	 * Enter a parse tree produced by the {@code SUBSTITUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSUBSTITUTE_fun(ctx: MathParser.SUBSTITUTE_funContext)
	/**
	 * Exit a parse tree produced by the {@code SUBSTITUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSUBSTITUTE_fun(ctx: MathParser.SUBSTITUTE_funContext)
	/**
	 * Enter a parse tree produced by the {@code Percentage_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterPercentage_fun(ctx: MathParser.Percentage_funContext)
	/**
	 * Exit a parse tree produced by the {@code Percentage_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitPercentage_fun(ctx: MathParser.Percentage_funContext)
	/**
	 * Enter a parse tree produced by the {@code REPT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREPT_fun(ctx: MathParser.REPT_funContext)
	/**
	 * Exit a parse tree produced by the {@code REPT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREPT_fun(ctx: MathParser.REPT_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNULL_fun(ctx: MathParser.ISNULL_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNULL_fun(ctx: MathParser.ISNULL_funContext)
	/**
	 * Enter a parse tree produced by the {@code ASIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterASIN_fun(ctx: MathParser.ASIN_funContext)
	/**
	 * Exit a parse tree produced by the {@code ASIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitASIN_fun(ctx: MathParser.ASIN_funContext)
	/**
	 * Enter a parse tree produced by the {@code MulDiv_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterMulDiv_fun(ctx: MathParser.MulDiv_funContext)
	/**
	 * Exit a parse tree produced by the {@code MulDiv_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitMulDiv_fun(ctx: MathParser.MulDiv_funContext)
	/**
	 * Enter a parse tree produced by the {@code REMOVESTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterREMOVESTART_fun(ctx: MathParser.REMOVESTART_funContext)
	/**
	 * Exit a parse tree produced by the {@code REMOVESTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitREMOVESTART_fun(ctx: MathParser.REMOVESTART_funContext)
	/**
	 * Enter a parse tree produced by the {@code T_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterT_fun(ctx: MathParser.T_funContext)
	/**
	 * Exit a parse tree produced by the {@code T_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitT_fun(ctx: MathParser.T_funContext)
	/**
	 * Enter a parse tree produced by the {@code WEEKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterWEEKDAY_fun(ctx: MathParser.WEEKDAY_funContext)
	/**
	 * Exit a parse tree produced by the {@code WEEKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitWEEKDAY_fun(ctx: MathParser.WEEKDAY_funContext)
	/**
	 * Enter a parse tree produced by the {@code BIN2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBIN2OCT_fun(ctx: MathParser.BIN2OCT_funContext)
	/**
	 * Exit a parse tree produced by the {@code BIN2OCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBIN2OCT_fun(ctx: MathParser.BIN2OCT_funContext)
	/**
	 * Enter a parse tree produced by the {@code BASE64TOTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterBASE64TOTEXT_fun(ctx: MathParser.BASE64TOTEXT_funContext)
	/**
	 * Exit a parse tree produced by the {@code BASE64TOTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitBASE64TOTEXT_fun(ctx: MathParser.BASE64TOTEXT_funContext)
	/**
	 * Enter a parse tree produced by the {@code TDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTDIST_fun(ctx: MathParser.TDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code TDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTDIST_fun(ctx: MathParser.TDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code DATEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterDATEVALUE_fun(ctx: MathParser.DATEVALUE_funContext)
	/**
	 * Exit a parse tree produced by the {@code DATEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitDATEVALUE_fun(ctx: MathParser.DATEVALUE_funContext)
	/**
	 * Enter a parse tree produced by the {@code STARTSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSTARTSWITH_fun(ctx: MathParser.STARTSWITH_funContext)
	/**
	 * Exit a parse tree produced by the {@code STARTSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSTARTSWITH_fun(ctx: MathParser.STARTSWITH_funContext)
	/**
	 * Enter a parse tree produced by the {@code EVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterEVEN_fun(ctx: MathParser.EVEN_funContext)
	/**
	 * Exit a parse tree produced by the {@code EVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitEVEN_fun(ctx: MathParser.EVEN_funContext)
	/**
	 * Enter a parse tree produced by the {@code LOGNORMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterLOGNORMDIST_fun(ctx: MathParser.LOGNORMDIST_funContext)
	/**
	 * Exit a parse tree produced by the {@code LOGNORMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitLOGNORMDIST_fun(ctx: MathParser.LOGNORMDIST_funContext)
	/**
	 * Enter a parse tree produced by the {@code ISNULLOREMPTY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterISNULLOREMPTY_fun(ctx: MathParser.ISNULLOREMPTY_funContext)
	/**
	 * Exit a parse tree produced by the {@code ISNULLOREMPTY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitISNULLOREMPTY_fun(ctx: MathParser.ISNULLOREMPTY_funContext)
	/**
	 * Enter a parse tree produced by the {@code TRUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTRUE_fun(ctx: MathParser.TRUE_funContext)
	/**
	 * Exit a parse tree produced by the {@code TRUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTRUE_fun(ctx: MathParser.TRUE_funContext)
	/**
	 * Enter a parse tree produced by the {@code FISHERINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterFISHERINV_fun(ctx: MathParser.FISHERINV_funContext)
	/**
	 * Exit a parse tree produced by the {@code FISHERINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitFISHERINV_fun(ctx: MathParser.FISHERINV_funContext)
	/**
	 * Enter a parse tree produced by the {@code SHA1_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterSHA1_fun(ctx: MathParser.SHA1_funContext)
	/**
	 * Exit a parse tree produced by the {@code SHA1_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitSHA1_fun(ctx: MathParser.SHA1_funContext)
	/**
	 * Enter a parse tree produced by the {@code TIME_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterTIME_fun(ctx: MathParser.TIME_funContext)
	/**
	 * Exit a parse tree produced by the {@code TIME_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitTIME_fun(ctx: MathParser.TIME_funContext)
	/**
	 * Enter a parse tree produced by the {@code ATAN2_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterATAN2_fun(ctx: MathParser.ATAN2_funContext)
	/**
	 * Exit a parse tree produced by the {@code ATAN2_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitATAN2_fun(ctx: MathParser.ATAN2_funContext)
	/**
	 * Enter a parse tree produced by the {@code ADDHOURS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun enterADDHOURS_fun(ctx: MathParser.ADDHOURS_funContext)
	/**
	 * Exit a parse tree produced by the {@code ADDHOURS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 */
	fun exitADDHOURS_fun(ctx: MathParser.ADDHOURS_funContext)
	/**
	 * Enter a parse tree produced by {@link MathParser#parameter2}.
	 * @param ctx the parse tree
	 */
	fun enterParameter2(ctx: MathParser.Parameter2Context)
	/**
	 * Exit a parse tree produced by {@link MathParser#parameter2}.
	 * @param ctx the parse tree
	 */
	fun exitParameter2(ctx: MathParser.Parameter2Context)
}