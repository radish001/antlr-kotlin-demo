// Generated from java-escape by ANTLR 4.7.1
package com.strumenta.antlrkotlin.examples

import org.antlr.v4.kotlinruntime.tree.ParseTreeVisitor

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link MathParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
interface MathVisitor<T> : ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link MathParser#prog}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitProg(ctx : MathParser.ProgContext) : T
	/**
	 * Visit a parse tree produced by the {@code CEILING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCEILING_fun(ctx : MathParser.CEILING_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFACT_fun(ctx : MathParser.FACT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REGEXREPALCE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREGEXREPALCE_fun(ctx : MathParser.REGEXREPALCE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TIMESTAMP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTIMESTAMP_fun(ctx : MathParser.TIMESTAMP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code AddSub_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitAddSub_fun(ctx : MathParser.AddSub_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNULLORERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNULLORERROR_fun(ctx : MathParser.ISNULLORERROR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code RIGHT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitRIGHT_fun(ctx : MathParser.RIGHT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code VALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitVALUE_fun(ctx : MathParser.VALUE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDAY_fun(ctx : MathParser.DAY_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code BINOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitBINOMDIST_fun(ctx : MathParser.BINOMDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code Judge_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitJudge_fun(ctx : MathParser.Judge_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DEVSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDEVSQ_fun(ctx : MathParser.DEVSQ_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMODE_fun(ctx : MathParser.MODE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code BETAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitBETAINV_fun(ctx : MathParser.BETAINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MAX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMAX_fun(ctx : MathParser.MAX_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code QUARTILE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitQUARTILE_fun(ctx : MathParser.QUARTILE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MINUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMINUTE_fun(ctx : MathParser.MINUTE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFINV_fun(ctx : MathParser.FINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NOT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNOT_fun(ctx : MathParser.NOT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DAYS360_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDAYS360_fun(ctx : MathParser.DAYS360_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code IFERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitIFERROR_fun(ctx : MathParser.IFERROR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFDIST_fun(ctx : MathParser.FDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code WEEKNUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitWEEKNUM_fun(ctx : MathParser.WEEKNUM_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code INDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitINDEXOF_fun(ctx : MathParser.INDEXOF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code UPPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitUPPER_fun(ctx : MathParser.UPPER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISREGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISREGEX_fun(ctx : MathParser.ISREGEX_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code EXPONDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitEXPONDIST_fun(ctx : MathParser.EXPONDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code VLOOKUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitVLOOKUP_fun(ctx : MathParser.VLOOKUP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LOOKUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLOOKUP_fun(ctx : MathParser.LOOKUP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DiyFunction_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDiyFunction_fun(ctx : MathParser.DiyFunction_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SHA256_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSHA256_fun(ctx : MathParser.SHA256_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitODD_fun(ctx : MathParser.ODD_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code HYPGEOMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitHYPGEOMDIST_fun(ctx : MathParser.HYPGEOMDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code PERMUT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPERMUT_fun(ctx : MathParser.PERMUT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MID_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMID_fun(ctx : MathParser.MID_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TRIMSTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTRIMSTART_fun(ctx : MathParser.TRIMSTART_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code RMB_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitRMB_fun(ctx : MathParser.RMB_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code STDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSTDEV_fun(ctx : MathParser.STDEV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NORMSDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNORMSDIST_fun(ctx : MathParser.NORMSDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNUMBER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNUMBER_fun(ctx : MathParser.ISNUMBER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code CLEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCLEAN_fun(ctx : MathParser.CLEAN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LASTINDEXOF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLASTINDEXOF_fun(ctx : MathParser.LASTINDEXOF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MOD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMOD_fun(ctx : MathParser.MOD_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LOWER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLOWER_fun(ctx : MathParser.LOWER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code OR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitOR_fun(ctx : MathParser.OR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code CHAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCHAR_fun(ctx : MathParser.CHAR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REGEX_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREGEX_fun(ctx : MathParser.REGEX_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MD5_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMD5_fun(ctx : MathParser.MD5_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REPLACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREPLACE_fun(ctx : MathParser.REPLACE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDMONTHS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDMONTHS_fun(ctx : MathParser.ADDMONTHS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NORMSINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNORMSINV_fun(ctx : MathParser.NORMSINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LEFT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLEFT_fun(ctx : MathParser.LEFT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISODD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISODD_fun(ctx : MathParser.ISODD_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISEVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISEVEN_fun(ctx : MathParser.ISEVEN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ASC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitASC_fun(ctx : MathParser.ASC_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code WORKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitWORKDAY_fun(ctx : MathParser.WORKDAY_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISERROR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISERROR_fun(ctx : MathParser.ISERROR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code JIS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitJIS_fun(ctx : MathParser.JIS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code STRING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSTRING_fun(ctx : MathParser.STRING_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code CRC32_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCRC32_fun(ctx : MathParser.CRC32_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LCM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLCM_fun(ctx : MathParser.LCM_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code PRODUCT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPRODUCT_fun(ctx : MathParser.PRODUCT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code EXACT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitEXACT_fun(ctx : MathParser.EXACT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code HARMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitHARMEAN_fun(ctx : MathParser.HARMEAN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDMINUTES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDMINUTES_fun(ctx : MathParser.ADDMINUTES_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SUMSQ_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSUMSQ_fun(ctx : MathParser.SUMSQ_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSUM_fun(ctx : MathParser.SUM_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NORMINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNORMINV_fun(ctx : MathParser.NORMINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GAMMAINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGAMMAINV_fun(ctx : MathParser.GAMMAINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SQRT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSQRT_fun(ctx : MathParser.SQRT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SECOND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSECOND_fun(ctx : MathParser.SECOND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GAMMADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGAMMADIST_fun(ctx : MathParser.GAMMADIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DEGREES_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDEGREES_fun(ctx : MathParser.DEGREES_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMROUND_fun(ctx : MathParser.MROUND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TODAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTODAY_fun(ctx : MathParser.TODAY_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DATEDIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDATEDIF_fun(ctx : MathParser.DATEDIF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TRIMEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTRIMEND_fun(ctx : MathParser.TRIMEND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code E_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitE_fun(ctx : MathParser.E_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TRIM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTRIM_fun(ctx : MathParser.TRIM_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISLOGICAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISLOGICAL_fun(ctx : MathParser.ISLOGICAL_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code INT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitINT_fun(ctx : MathParser.INT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SUMIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSUMIF_fun(ctx : MathParser.SUMIF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code RADIANS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitRADIANS_fun(ctx : MathParser.RADIANS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GAMMALN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGAMMALN_fun(ctx : MathParser.GAMMALN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTEXT_fun(ctx : MathParser.TEXT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code PI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPI_fun(ctx : MathParser.PI_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code YEAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitYEAR_fun(ctx : MathParser.YEAR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FISHER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFISHER_fun(ctx : MathParser.FISHER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code AND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitAND_fun(ctx : MathParser.AND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SQRTPI_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSQRTPI_fun(ctx : MathParser.SQRTPI_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code CONCATENATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCONCATENATE_fun(ctx : MathParser.CONCATENATE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MULTINOMIAL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMULTINOMIAL_fun(ctx : MathParser.MULTINOMIAL_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code COUNT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCOUNT_fun(ctx : MathParser.COUNT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMONTH_fun(ctx : MathParser.MONTH_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FALSE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFALSE_fun(ctx : MathParser.FALSE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NORMDIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNORMDIST_fun(ctx : MathParser.NORMDIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ENDSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitENDSWITH_fun(ctx : MathParser.ENDSWITH_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code Bracket_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitBracket_fun(ctx : MathParser.Bracket_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code BETADIST_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitBETADIST_fun(ctx : MathParser.BETADIST_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NOW_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNOW_fun(ctx : MathParser.NOW_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISTEXT_fun(ctx : MathParser.ISTEXT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NETWORKDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNETWORKDAYS_fun(ctx : MathParser.NETWORKDAYS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TIMEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTIMEVALUE_fun(ctx : MathParser.TIMEVALUE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code AVEDEV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitAVEDEV_fun(ctx : MathParser.AVEDEV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MEDIAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMEDIAN_fun(ctx : MathParser.MEDIAN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code JSON_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitJSON_fun(ctx : MathParser.JSON_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code PROPER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPROPER_fun(ctx : MathParser.PROPER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FIXED_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFIXED_fun(ctx : MathParser.FIXED_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GetJsonValue_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGetJsonValue_fun(ctx : MathParser.GetJsonValue_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TRUNC_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTRUNC_fun(ctx : MathParser.TRUNC_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GCD_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGCD_fun(ctx : MathParser.GCD_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code EDATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitEDATE_fun(ctx : MathParser.EDATE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code GEOMEAN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitGEOMEAN_fun(ctx : MathParser.GEOMEAN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code VAR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitVAR_fun(ctx : MathParser.VAR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SIGN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSIGN_fun(ctx : MathParser.SIGN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code EOMONTH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitEOMONTH_fun(ctx : MathParser.EOMONTH_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FLOOR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFLOOR_fun(ctx : MathParser.FLOOR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code HOUR_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitHOUR_fun(ctx : MathParser.HOUR_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code LEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitLEN_fun(ctx : MathParser.LEN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SHA512_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSHA512_fun(ctx : MathParser.SHA512_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMIN_fun(ctx : MathParser.MIN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDDAYS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDDAYS_fun(ctx : MathParser.ADDDAYS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNULLORWHITESPACE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNULLORWHITESPACE_fun(ctx : MathParser.ISNULLORWHITESPACE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NUM_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNUM_fun(ctx : MathParser.NUM_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNONTEXT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNONTEXT_fun(ctx : MathParser.ISNONTEXT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ABS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitABS_fun(ctx : MathParser.ABS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ROUNDDOWN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitROUNDDOWN_fun(ctx : MathParser.ROUNDDOWN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code IF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitIF_fun(ctx : MathParser.IF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code QUOTIENT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitQUOTIENT_fun(ctx : MathParser.QUOTIENT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code JOIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitJOIN_fun(ctx : MathParser.JOIN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FIND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFIND_fun(ctx : MathParser.FIND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SUBSTITUTE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSUBSTITUTE_fun(ctx : MathParser.SUBSTITUTE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code Percentage_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPercentage_fun(ctx : MathParser.Percentage_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REPT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREPT_fun(ctx : MathParser.REPT_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNULL_fun(ctx : MathParser.ISNULL_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SEARCH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSEARCH_fun(ctx : MathParser.SEARCH_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ROUNDUP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitROUNDUP_fun(ctx : MathParser.ROUNDUP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code COMBIN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCOMBIN_fun(ctx : MathParser.COMBIN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code CODE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCODE_fun(ctx : MathParser.CODE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code MulDiv_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitMulDiv_fun(ctx : MathParser.MulDiv_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REMOVESTART_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREMOVESTART_fun(ctx : MathParser.REMOVESTART_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SUBSTRING_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSUBSTRING_fun(ctx : MathParser.SUBSTRING_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code RANDBETWEEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitRANDBETWEEN_fun(ctx : MathParser.RANDBETWEEN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code T_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitT_fun(ctx : MathParser.T_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code WEEKDAY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitWEEKDAY_fun(ctx : MathParser.WEEKDAY_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code NULL_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitNULL_fun(ctx : MathParser.NULL_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DATEVALUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDATEVALUE_fun(ctx : MathParser.DATEVALUE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code STARTSWITH_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSTARTSWITH_fun(ctx : MathParser.STARTSWITH_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code EVEN_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitEVEN_fun(ctx : MathParser.EVEN_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ISNULLOREMPTY_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitISNULLOREMPTY_fun(ctx : MathParser.ISNULLOREMPTY_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TRUE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTRUE_fun(ctx : MathParser.TRUE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code AndOr_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitAndOr_fun(ctx : MathParser.AndOr_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code FISHERINV_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitFISHERINV_fun(ctx : MathParser.FISHERINV_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SHA1_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSHA1_fun(ctx : MathParser.SHA1_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code TIME_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitTIME_fun(ctx : MathParser.TIME_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code STDEVP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSTDEVP_fun(ctx : MathParser.STDEVP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDYEARS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDYEARS_fun(ctx : MathParser.ADDYEARS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDSECONDS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDSECONDS_fun(ctx : MathParser.ADDSECONDS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code Array_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitArray_fun(ctx : MathParser.Array_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ROUND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitROUND_fun(ctx : MathParser.ROUND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code COUNTIF_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitCOUNTIF_fun(ctx : MathParser.COUNTIF_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code VARP_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitVARP_fun(ctx : MathParser.VARP_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code ADDHOURS_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitADDHOURS_fun(ctx : MathParser.ADDHOURS_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code REMOVEEND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitREMOVEEND_fun(ctx : MathParser.REMOVEEND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code DATE_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitDATE_fun(ctx : MathParser.DATE_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code PARAMETER_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitPARAMETER_fun(ctx : MathParser.PARAMETER_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code RAND_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitRAND_fun(ctx : MathParser.RAND_funContext) : T
	/**
	 * Visit a parse tree produced by the {@code SPLIT_fun}
	 * labeled alternative in {@link MathParser#expr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitSPLIT_fun(ctx : MathParser.SPLIT_funContext) : T
	/**
	 * Visit a parse tree produced by {@link MathParser#parameter2}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	fun visitParameter2(ctx : MathParser.Parameter2Context) : T
}