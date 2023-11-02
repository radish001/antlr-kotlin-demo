package antlr.impl

import antlr.MathParser
import antlr.MathVisitor
import antlr.function.CommonFunction
import org.antlr.v4.kotlinruntime.tree.AbstractParseTreeVisitor

/**
 * @ClassName MathVisitorImpl.java
 * @author huxiaodong
 * @version 1.0.0
 * @Description TODO
 * @createTime 2023-10-25
 * Copyright (C) 2022 HOSE
 */
class MathVisitorImpl : AbstractParseTreeVisitor<Operand>(), MathVisitor<Operand> {




    //private val sumifRegex: Pattern = Pattern.compile("(<|<=|>|>=|=|==|===|!=|!==|<>) *([-+]?\\d+(\\.(\\d+)?)?)")
    //private val bit_2: Pattern = Pattern.compile("^[01]+")
    //private val bit_8: Pattern = Pattern.compile("^[0-8]+")
    //private val bit_16: Pattern = Pattern.compile("^[0-9a-fA-F]+")
    //private val clearRegex: Pattern = Pattern.compile("[\\f\\n\\r\\t\\v]")
    //private val numberRegex: Pattern = Pattern.compile("^-?(0|[1-9])\\d*(\\.\\d+)?$")

    val numberRegex : Regex = Regex(pattern = "^-?(0|[1-9])\\d*(\\.\\d+)?$")


    var getParameter : ((String) -> Operand?)? = null
    var diyFunction : ((CommonFunction) -> Operand)? = null
    var excelIndex = 0
    var useLocalTime = false

    override fun visitProg(ctx: MathParser.ProgContext): Operand {
        return ctx.findExpr()?.accept(this)!!
    }

    override fun visitCEILING_fun(ctx: MathParser.CEILING_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFACT_fun(ctx: MathParser.FACT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREGEXREPALCE_fun(ctx: MathParser.REGEXREPALCE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAddSub_fun(ctx: MathParser.AddSub_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAVERAGEIF_fun(ctx: MathParser.AVERAGEIF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNULLORERROR_fun(ctx: MathParser.ISNULLORERROR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitRIGHT_fun(ctx: MathParser.RIGHT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitOCT2BIN_fun(ctx: MathParser.OCT2BIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitQUARTILE_fun(ctx: MathParser.QUARTILE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFINV_fun(ctx: MathParser.FINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNOT_fun(ctx: MathParser.NOT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDAYS360_fun(ctx: MathParser.DAYS360_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitWEEKNUM_fun(ctx: MathParser.WEEKNUM_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPOISSON_fun(ctx: MathParser.POISSON_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISREGEX_fun(ctx: MathParser.ISREGEX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPERCENTILE_fun(ctx: MathParser.PERCENTILE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSHA256_fun(ctx: MathParser.SHA256_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHYPGEOMDIST_fun(ctx: MathParser.HYPGEOMDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPERMUT_fun(ctx: MathParser.PERMUT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTRIMSTART_fun(ctx: MathParser.TRIMSTART_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitRMB_fun(ctx: MathParser.RMB_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDEC2HEX_fun(ctx: MathParser.DEC2HEX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCLEAN_fun(ctx: MathParser.CLEAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLOWER_fun(ctx: MathParser.LOWER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitOR_fun(ctx: MathParser.OR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDMONTHS_fun(ctx: MathParser.ADDMONTHS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNORMSINV_fun(ctx: MathParser.NORMSINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLEFT_fun(ctx: MathParser.LEFT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISEVEN_fun(ctx: MathParser.ISEVEN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLOGINV_fun(ctx: MathParser.LOGINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitWORKDAY_fun(ctx: MathParser.WORKDAY_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISERROR_fun(ctx: MathParser.ISERROR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBIN2DEC_fun(ctx: MathParser.BIN2DEC_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitJIS_fun(ctx: MathParser.JIS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCRC32_fun(ctx: MathParser.CRC32_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLCM_fun(ctx: MathParser.LCM_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHARMEAN_fun(ctx: MathParser.HARMEAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNORMINV_fun(ctx: MathParser.NORMINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGAMMAINV_fun(ctx: MathParser.GAMMAINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSQRT_fun(ctx: MathParser.SQRT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDEGREES_fun(ctx: MathParser.DEGREES_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMROUND_fun(ctx: MathParser.MROUND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDATEDIF_fun(ctx: MathParser.DATEDIF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTRIMEND_fun(ctx: MathParser.TRIMEND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISLOGICAL_fun(ctx: MathParser.ISLOGICAL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitINT_fun(ctx: MathParser.INT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSUMIF_fun(ctx: MathParser.SUMIF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHEX2OCT_fun(ctx: MathParser.HEX2OCT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPI_fun(ctx: MathParser.PI_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitYEAR_fun(ctx: MathParser.YEAR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSQRTPI_fun(ctx: MathParser.SQRTPI_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCONCATENATE_fun(ctx: MathParser.CONCATENATE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCOUNT_fun(ctx: MathParser.COUNT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFALSE_fun(ctx: MathParser.FALSE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHTMLENCODE_fun(ctx: MathParser.HTMLENCODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBASE64URLTOTEXT_fun(ctx: MathParser.BASE64URLTOTEXT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLOG10_fun(ctx: MathParser.LOG10_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISTEXT_fun(ctx: MathParser.ISTEXT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNEGBINOMDIST_fun(ctx: MathParser.NEGBINOMDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNETWORKDAYS_fun(ctx: MathParser.NETWORKDAYS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFACTDOUBLE_fun(ctx: MathParser.FACTDOUBLE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTIMEVALUE_fun(ctx: MathParser.TIMEVALUE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAVEDEV_fun(ctx: MathParser.AVEDEV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGUID_fun(ctx: MathParser.GUID_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitJSON_fun(ctx: MathParser.JSON_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFIXED_fun(ctx: MathParser.FIXED_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTINV_fun(ctx: MathParser.TINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEDATE_fun(ctx: MathParser.EDATE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGEOMEAN_fun(ctx: MathParser.GEOMEAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitVAR_fun(ctx: MathParser.VAR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSIGN_fun(ctx: MathParser.SIGN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEOMONTH_fun(ctx: MathParser.EOMONTH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFLOOR_fun(ctx: MathParser.FLOOR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHOUR_fun(ctx: MathParser.HOUR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLEN_fun(ctx: MathParser.LEN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitACOS_fun(ctx: MathParser.ACOS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNULLORWHITESPACE_fun(ctx: MathParser.ISNULLORWHITESPACE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCOSH_fun(ctx: MathParser.COSH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitQUOTIENT_fun(ctx: MathParser.QUOTIENT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitOCT2DEC_fun(ctx: MathParser.OCT2DEC_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSEARCH_fun(ctx: MathParser.SEARCH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitROUNDUP_fun(ctx: MathParser.ROUNDUP_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCOMBIN_fun(ctx: MathParser.COMBIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCODE_fun(ctx: MathParser.CODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitASINH_fun(ctx: MathParser.ASINH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSIN_fun(ctx: MathParser.SIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSUBSTRING_fun(ctx: MathParser.SUBSTRING_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAVERAGE_fun(ctx: MathParser.AVERAGE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLOG_fun(ctx: MathParser.LOG_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHMACSHA512_fun(ctx: MathParser.HMACSHA512_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAndOr_fun(ctx: MathParser.AndOr_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSTDEVP_fun(ctx: MathParser.STDEVP_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDYEARS_fun(ctx: MathParser.ADDYEARS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDSECONDS_fun(ctx: MathParser.ADDSECONDS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitROUND_fun(ctx: MathParser.ROUND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEXP_fun(ctx: MathParser.EXP_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCOUNTIF_fun(ctx: MathParser.COUNTIF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitVARP_fun(ctx: MathParser.VARP_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREMOVEEND_fun(ctx: MathParser.REMOVEEND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDATE_fun(ctx: MathParser.DATE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSPLIT_fun(ctx: MathParser.SPLIT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitURLDECODE_fun(ctx: MathParser.URLDECODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLARGE_fun(ctx: MathParser.LARGE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitVALUE_fun(ctx: MathParser.VALUE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDAY_fun(ctx: MathParser.DAY_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitWEIBULL_fun(ctx: MathParser.WEIBULL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHMACSHA256_fun(ctx: MathParser.HMACSHA256_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBINOMDIST_fun(ctx: MathParser.BINOMDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitJudge_fun(ctx: MathParser.Judge_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDEVSQ_fun(ctx: MathParser.DEVSQ_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMODE_fun(ctx: MathParser.MODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBETAINV_fun(ctx: MathParser.BETAINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMAX_fun(ctx: MathParser.MAX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMINUTE_fun(ctx: MathParser.MINUTE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTAN_fun(ctx: MathParser.TAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitIFERROR_fun(ctx: MathParser.IFERROR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFDIST_fun(ctx: MathParser.FDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitINDEXOF_fun(ctx: MathParser.INDEXOF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitUPPER_fun(ctx: MathParser.UPPER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHTMLDECODE_fun(ctx: MathParser.HTMLDECODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEXPONDIST_fun(ctx: MathParser.EXPONDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitVLOOKUP_fun(ctx: MathParser.VLOOKUP_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDEC2BIN_fun(ctx: MathParser.DEC2BIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHEX2DEC_fun(ctx: MathParser.HEX2DEC_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSMALL_fun(ctx: MathParser.SMALL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitODD_fun(ctx: MathParser.ODD_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTEXTTOBASE64_fun(ctx: MathParser.TEXTTOBASE64_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMID_fun(ctx: MathParser.MID_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPERCENTRANK_fun(ctx: MathParser.PERCENTRANK_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSTDEV_fun(ctx: MathParser.STDEV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNORMSDIST_fun(ctx: MathParser.NORMSDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNUMBER_fun(ctx: MathParser.ISNUMBER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLASTINDEXOF_fun(ctx: MathParser.LASTINDEXOF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCHAR_fun(ctx: MathParser.CHAR_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREGEX_fun(ctx: MathParser.REGEX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTEXTTOBASE64URL_fun(ctx: MathParser.TEXTTOBASE64URL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMD5_fun(ctx: MathParser.MD5_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREPLACE_fun(ctx: MathParser.REPLACE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitACOSH_fun(ctx: MathParser.ACOSH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISODD_fun(ctx: MathParser.ISODD_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitASC_fun(ctx: MathParser.ASC_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitCOS_fun(ctx: MathParser.COS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLN_fun(ctx: MathParser.LN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHMACMD5_fun(ctx: MathParser.HMACMD5_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPRODUCT_fun(ctx: MathParser.PRODUCT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEXACT_fun(ctx: MathParser.EXACT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDMINUTES_fun(ctx: MathParser.ADDMINUTES_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSUM_fun(ctx: MathParser.SUM_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSUMSQ_fun(ctx: MathParser.SUMSQ_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSECOND_fun(ctx: MathParser.SECOND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGAMMADIST_fun(ctx: MathParser.GAMMADIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitOCT2HEX_fun(ctx: MathParser.OCT2HEX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTODAY_fun(ctx: MathParser.TODAY_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitATAN_fun(ctx: MathParser.ATAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitE_fun(ctx: MathParser.E_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTRIM_fun(ctx: MathParser.TRIM_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitRADIANS_fun(ctx: MathParser.RADIANS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGAMMALN_fun(ctx: MathParser.GAMMALN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTEXT_fun(ctx: MathParser.TEXT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFISHER_fun(ctx: MathParser.FISHER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitAND_fun(ctx: MathParser.AND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBIN2HEX_fun(ctx: MathParser.BIN2HEX_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMULTINOMIAL_fun(ctx: MathParser.MULTINOMIAL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMONTH_fun(ctx: MathParser.MONTH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitURLENCODE_fun(ctx: MathParser.URLENCODE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNORMDIST_fun(ctx: MathParser.NORMDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHMACSHA1_fun(ctx: MathParser.HMACSHA1_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitENDSWITH_fun(ctx: MathParser.ENDSWITH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBracket_fun(ctx: MathParser.Bracket_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBETADIST_fun(ctx: MathParser.BETADIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitNOW_fun(ctx: MathParser.NOW_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitATANH_fun(ctx: MathParser.ATANH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMEDIAN_fun(ctx: MathParser.MEDIAN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPOWER_fun(ctx: MathParser.POWER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDEC2OCT_fun(ctx: MathParser.DEC2OCT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPROPER_fun(ctx: MathParser.PROPER_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTRUNC_fun(ctx: MathParser.TRUNC_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitGCD_fun(ctx: MathParser.GCD_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTANH_fun(ctx: MathParser.TANH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitHEX2BIN_fun(ctx: MathParser.HEX2BIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSINH_fun(ctx: MathParser.SINH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSHA512_fun(ctx: MathParser.SHA512_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDDAYS_fun(ctx: MathParser.ADDDAYS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMIN_fun(ctx: MathParser.MIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNONTEXT_fun(ctx: MathParser.ISNONTEXT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitABS_fun(ctx: MathParser.ABS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitROUNDDOWN_fun(ctx: MathParser.ROUNDDOWN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitIF_fun(ctx: MathParser.IF_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitJOIN_fun(ctx: MathParser.JOIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFIND_fun(ctx: MathParser.FIND_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSUBSTITUTE_fun(ctx: MathParser.SUBSTITUTE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitPercentage_fun(ctx: MathParser.Percentage_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREPT_fun(ctx: MathParser.REPT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNULL_fun(ctx: MathParser.ISNULL_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitASIN_fun(ctx: MathParser.ASIN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitMulDiv_fun(ctx: MathParser.MulDiv_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitREMOVESTART_fun(ctx: MathParser.REMOVESTART_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitT_fun(ctx: MathParser.T_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitWEEKDAY_fun(ctx: MathParser.WEEKDAY_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBIN2OCT_fun(ctx: MathParser.BIN2OCT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitBASE64TOTEXT_fun(ctx: MathParser.BASE64TOTEXT_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTDIST_fun(ctx: MathParser.TDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitDATEVALUE_fun(ctx: MathParser.DATEVALUE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSTARTSWITH_fun(ctx: MathParser.STARTSWITH_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitEVEN_fun(ctx: MathParser.EVEN_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitLOGNORMDIST_fun(ctx: MathParser.LOGNORMDIST_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitISNULLOREMPTY_fun(ctx: MathParser.ISNULLOREMPTY_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTRUE_fun(ctx: MathParser.TRUE_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitFISHERINV_fun(ctx: MathParser.FISHERINV_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitSHA1_fun(ctx: MathParser.SHA1_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitTIME_fun(ctx: MathParser.TIME_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitATAN2_fun(ctx: MathParser.ATAN2_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitADDHOURS_fun(ctx: MathParser.ADDHOURS_funContext): Operand {
        TODO("Not yet implemented")
    }

    override fun visitParameter2(ctx: MathParser.Parameter2Context): Operand {
        TODO("Not yet implemented")
    }


}