grammar Math;

prog: expr EOF;

expr:
	expr '.' ISNUMBER '(' ')'									# ISNUMBER_fun
	| expr '.' INT '(' ')'										# INT_fun
	| expr '.' CHAR '(' ')'										# CHAR_fun
	| expr '.' CONCATENATE '(' (expr (',' expr)*)? ')'			# CONCATENATE_fun
	| expr '.' TEXT '(' expr ')'								# TEXT_fun
	| expr '.' TRIM '(' ')'										# TRIM_fun
	| expr '.' UPPER '(' ')'									# UPPER_fun
	| expr '.' VALUE '(' ')'									# VALUE_fun
	| expr '.' DATEVALUE '(' expr? ')'							# DATEVALUE_fun
	| expr '.' TIMEVALUE '(' ')'								# TIMEVALUE_fun
	| expr '.' YEAR ('(' ')')?									# YEAR_fun
	| expr '.' MONTH ('(' ')')?									# MONTH_fun
	| expr '.' DAY ('(' ')')?									# DAY_fun
	| expr '.' HOUR ('(' ')')?									# HOUR_fun
	| expr '.' MINUTE ('(' ')')?								# MINUTE_fun
	| expr '.' SECOND ('(' ')')?								# SECOND_fun
	| expr '.' REGEX '(' expr ')'								# REGEX_fun
	| expr '.' REGEXREPALCE '(' expr ',' expr ')'				# REGEXREPALCE_fun
	| expr '.' ISREGEX '(' expr ')'								# ISREGEX_fun
	| expr '.' MD5 '(' expr? ')'									# MD5_fun
	| expr '.' SHA1 '(' expr? ')'									# SHA1_fun
	| expr '.' SHA256 '(' expr? ')'								# SHA256_fun
	| expr '.' SHA512 '(' expr? ')'								# SHA512_fun
	| expr '.' CRC32 '(' expr? ')'								# CRC32_fun
	| expr '.' TRIMSTART '(' expr? ')'							# TRIMSTART_fun
	| expr '.' TRIMEND '(' expr? ')'								# TRIMEND_fun
	| expr '.' INDEXOF '(' expr (',' expr (',' expr)?)? ')'		# INDEXOF_fun
	| expr '.' LASTINDEXOF '(' expr (',' expr (',' expr)?)? ')'	# LASTINDEXOF_fun
	| expr '.' SPLIT '(' expr ')'									# SPLIT_fun
	| expr '.' JOIN '(' expr (',' expr)* ')'					# JOIN_fun
	| expr '.' SUBSTRING '(' expr (',' expr)? ')'				# SUBSTRING_fun
	| expr '.' STARTSWITH '(' expr (',' expr)? ')'				# STARTSWITH_fun
	| expr '.' ENDSWITH '(' expr (',' expr)? ')'				# ENDSWITH_fun
	| expr '.' ISNULLOREMPTY '(' ')'								# ISNULLOREMPTY_fun
	| expr '.' ISNULLORWHITESPACE '(' ')'							# ISNULLORWHITESPACE_fun
	| expr '.' REMOVESTART '(' expr (',' expr)? ')'				# REMOVESTART_fun
	| expr '.' REMOVEEND '(' expr (',' expr)? ')'				# REMOVEEND_fun
	| expr '.' JSON '(' ')'										# JSON_fun
	| expr '.' ADDMONTHS '(' expr ')'							# ADDMONTHS_fun
	| expr '.' ADDDAYS '(' expr ')'								# ADDDAYS_fun
	| expr '.' ADDHOURS '(' expr ')'							# ADDHOURS_fun
	| expr '.' ADDMINUTES '(' expr ')'							# ADDMINUTES_fun
	| expr '.' ADDSECONDS '(' expr ')'							# ADDSECONDS_fun
	| expr '.' TIMESTAMP '(' expr? ')'							# TIMESTAMP_fun

	| expr '[' parameter2 ']'									# GetJsonValue_fun
	| expr '[' expr ']'											# GetJsonValue_fun
	| expr '.' parameter2										# GetJsonValue_fun

// 运算符优先级 开始
	| '(' expr ')'											# Bracket_fun
	| '!' expr												# NOT_fun
	| expr '%'												# Percentage_fun
	| expr op = ('*' | '/' | '%' ) expr						# MulDiv_fun
	| expr op = ('+' | '-' | '&') expr						# AddSub_fun
	| expr op = (
		  '>'
		| '>='
		| '<'
		| '<='
	) expr														# Judge_fun
	| expr op = (
		  '='
		| '=='
		| '==='
		| '!=='
		| '!='
		| '<>'
	) expr														# Judge_fun
	| expr op = ('&&' | AND) expr								# AndOr_fun
	| expr op = ('||' | OR) expr								# AndOr_fun
	| expr '?'  expr ':' expr 									# IF_fun
// 运算符优先级 结束

	| ARRAY '(' expr (',' expr)* ')'							# Array_fun
	| IF '(' expr ',' expr (',' expr)? ')'					# IF_fun
	| ISNUMBER '(' expr ')'									# ISNUMBER_fun
	| ISTEXT '(' expr ')'									# ISTEXT_fun
	| ISERROR '(' expr (',' expr)? ')'						# ISERROR_fun
	| ISNONTEXT '(' expr ')'								# ISNONTEXT_fun
	| ISLOGICAL '(' expr ')'								# ISLOGICAL_fun
	| ISEVEN '(' expr ')'									# ISEVEN_fun
	| ISODD '(' expr ')'									# ISODD_fun
	| IFERROR '(' expr ',' expr (',' expr)? ')'				# IFERROR_fun
	| ISNULL '(' expr (',' expr)? ')'						# ISNULL_fun
	| ISNULLORERROR '(' expr (',' expr)? ')'				# ISNULLORERROR_fun
	| AND '(' expr (',' expr)* ')'							# AND_fun
	| OR '(' expr (',' expr)* ')'							# OR_fun
	| NOT '(' expr ')'										# NOT_fun
	| TRUE ('(' ')')?										# TRUE_fun
	| FALSE ('(' ')')?										# FALSE_fun
	| E ('(' ')')?											# E_fun
	| PI ('(' ')')?											# PI_fun
	| ABS '(' expr ')'										# ABS_fun
	| QUOTIENT '(' expr (',' expr) ')'						# QUOTIENT_fun
	| MOD '(' expr (',' expr) ')'							# MOD_fun
	| SIGN '(' expr ')'										# SIGN_fun
	| SQRT '(' expr ')'										# SQRT_fun
	| TRUNC '(' expr ')'									# TRUNC_fun
	| INT '(' expr ')'										# INT_fun
	| GCD '(' expr (',' expr)+ ')'							# GCD_fun
	| LCM '(' expr (',' expr)+ ')'							# LCM_fun
	| COMBIN '(' expr ',' expr ')'							# COMBIN_fun
	| PERMUT '(' expr ',' expr ')'							# PERMUT_fun
	| DEGREES '(' expr ')'									# DEGREES_fun
	| RADIANS '(' expr ')'									# RADIANS_fun
	| ROUND '(' expr (',' expr)? ')'							# ROUND_fun
	| ROUNDDOWN '(' expr ',' expr ')'						# ROUNDDOWN_fun
	| ROUNDUP '(' expr ',' expr ')'							# ROUNDUP_fun
	| CEILING '(' expr (',' expr)? ')'						# CEILING_fun
	| FLOOR '(' expr (',' expr)? ')'						# FLOOR_fun
	| EVEN '(' expr ')'										# EVEN_fun
	| ODD '(' expr ')'										# ODD_fun
	| MROUND '(' expr ',' expr ')'							# MROUND_fun
	| RAND '(' ')'											# RAND_fun
	| RANDBETWEEN '(' expr ',' expr ')'						# RANDBETWEEN_fun
	| FACT '(' expr ')'										# FACT_fun
	| MULTINOMIAL '(' expr (',' expr)* ')'					# MULTINOMIAL_fun
	| PRODUCT '(' expr (',' expr)* ')'						# PRODUCT_fun
	| SQRTPI '(' expr ')'									# SQRTPI_fun
	| SUMSQ '(' expr (',' expr)* ')'						# SUMSQ_fun
	| ASC '(' expr ')'										# ASC_fun
	| JIS '(' expr ')'										# JIS_fun
	| CHAR '(' expr ')'										# CHAR_fun
	| CLEAN '(' expr ')'									# CLEAN_fun
	| CODE '(' expr ')'										# CODE_fun
	| CONCATENATE '(' expr (',' expr)* ')'					# CONCATENATE_fun
	| EXACT '(' expr ',' expr ')'							# EXACT_fun
	| FIND '(' expr ',' expr (',' expr)? ')'				# FIND_fun
	| FIXED '(' expr (',' expr (',' expr)?)? ')'			# FIXED_fun
	| LEFT '(' expr (',' expr)? ')'							# LEFT_fun
	| LEN '(' expr ')'										# LEN_fun
	| LOWER '(' expr ')'									# LOWER_fun
	| MID '(' expr ',' expr ',' expr ')'					# MID_fun
	| PROPER '(' expr ')'									# PROPER_fun
	| REPLACE '(' expr ',' expr ',' expr (',' expr)? ')'	# REPLACE_fun
	| REPT '(' expr ',' expr ')'							# REPT_fun
	| RIGHT '(' expr (',' expr)? ')'						# RIGHT_fun
	| RMB '(' expr ')'										# RMB_fun
	| SEARCH '(' expr ',' expr (',' expr)? ')'				# SEARCH_fun
	| SUBSTITUTE '(' expr ',' expr ',' expr (',' expr)? ')'	# SUBSTITUTE_fun
	| T '(' expr ')'										# T_fun
	| TEXT '(' expr ',' expr ')'							# TEXT_fun
	| TRIM '(' expr ')'										# TRIM_fun
	| UPPER '(' expr ')'									# UPPER_fun
	| VALUE '(' expr ')'									# VALUE_fun
	| DATEVALUE '(' expr (',' expr)? ')'					# DATEVALUE_fun
	| TIMEVALUE '(' expr ')'								# TIMEVALUE_fun
	| DATE '(' expr ',' expr ',' expr (
		',' expr (',' expr (',' expr)?)?
	)? ')'														# DATE_fun
	| TIME '(' expr ',' expr (',' expr)? ')'					# TIME_fun
	| NOW '(' ')'												# NOW_fun
	| TODAY '(' ')'												# TODAY_fun
	| YEAR '(' expr ')'											# YEAR_fun
	| MONTH '(' expr ')'										# MONTH_fun
	| DAY '(' expr ')'											# DAY_fun
	| HOUR '(' expr ')'											# HOUR_fun
	| MINUTE '(' expr ')'										# MINUTE_fun
	| SECOND '(' expr ')'										# SECOND_fun
	| WEEKDAY '(' expr (',' expr)? ')'							# WEEKDAY_fun
	| DATEDIF '(' expr ',' expr ',' expr ')'					# DATEDIF_fun
	| DAYS360 '(' expr ',' expr (',' expr)? ')'					# DAYS360_fun
	| EDATE '(' expr ',' expr ')'								# EDATE_fun
	| EOMONTH '(' expr ',' expr ')'								# EOMONTH_fun
	| NETWORKDAYS '(' expr ',' expr (',' expr)? ')'				# NETWORKDAYS_fun
	| WORKDAY '(' expr ',' expr (',' expr)? ')'					# WORKDAY_fun
	| WEEKNUM '(' expr (',' expr)? ')'							# WEEKNUM_fun
	| MAX '(' expr (',' expr)+ ')'								# MAX_fun
	| MEDIAN '(' expr (',' expr)+ ')'							# MEDIAN_fun
	| MIN '(' expr (',' expr)+ ')'								# MIN_fun
	| QUARTILE '(' expr ',' expr ')'							# QUARTILE_fun
	| MODE '(' expr (',' expr)* ')'								# MODE_fun
	| GEOMEAN '(' expr (',' expr)* ')'							# GEOMEAN_fun
	| HARMEAN '(' expr (',' expr)* ')'							# HARMEAN_fun
	| COUNT '(' expr (',' expr)* ')'							# COUNT_fun
	| COUNTIF '(' expr (',' expr)* ')'							# COUNTIF_fun
	| SUM '(' expr (',' expr)* ')'								# SUM_fun
	| SUMIF '(' expr ',' expr (',' expr)? ')'					# SUMIF_fun
	| AVEDEV '(' expr (',' expr)* ')'							# AVEDEV_fun
	| STDEV '(' expr (',' expr)* ')'							# STDEV_fun
	| STDEVP '(' expr (',' expr)* ')'							# STDEVP_fun
	| DEVSQ '(' expr (',' expr)* ')'							# DEVSQ_fun
	| VAR '(' expr (',' expr)* ')'								# VAR_fun
	| VARP '(' expr (',' expr)* ')'								# VARP_fun
	| NORMDIST '(' expr ',' expr ',' expr ',' expr ')'			# NORMDIST_fun
	| NORMINV '(' expr ',' expr ',' expr ')'					# NORMINV_fun
	| NORMSDIST '(' expr ')'									# NORMSDIST_fun
	| NORMSINV '(' expr ')'										# NORMSINV_fun
	| BETADIST '(' expr ',' expr ',' expr ')'					# BETADIST_fun
	| BETAINV '(' expr ',' expr ',' expr ')'					# BETAINV_fun
	| BINOMDIST '(' expr ',' expr ',' expr ',' expr ')'			# BINOMDIST_fun
	| EXPONDIST '(' expr ',' expr ',' expr ')'					# EXPONDIST_fun
	| FDIST '(' expr ',' expr ',' expr ')'						# FDIST_fun
	| FINV '(' expr ',' expr ',' expr ')'						# FINV_fun
	| FISHER '(' expr ')'										# FISHER_fun
	| FISHERINV '(' expr ')'									# FISHERINV_fun
	| GAMMADIST '(' expr ',' expr ',' expr ',' expr ')'			# GAMMADIST_fun
	| GAMMAINV '(' expr ',' expr ',' expr ')'					# GAMMAINV_fun
	| GAMMALN '(' expr ')'										# GAMMALN_fun
	| HYPGEOMDIST '(' expr ',' expr ',' expr ',' expr ')'		# HYPGEOMDIST_fun

	| SUBSTRING '(' expr ',' expr (',' expr)? ')'				# SUBSTRING_fun
	| STARTSWITH '(' expr ',' expr (',' expr)? ')'				# STARTSWITH_fun
	| ENDSWITH '(' expr ',' expr (',' expr)? ')'				# ENDSWITH_fun
	| ISNULLOREMPTY '(' expr ')'								# ISNULLOREMPTY_fun
	| ISNULLORWHITESPACE '(' expr ')'							# ISNULLORWHITESPACE_fun
	| REMOVESTART '(' expr (',' expr (',' expr)?)? ')'			# REMOVESTART_fun
	| REMOVEEND '(' expr (',' expr (',' expr)?)? ')'			# REMOVEEND_fun
	| JSON '(' expr ')'											# JSON_fun
	| VLOOKUP '(' expr ',' expr ',' expr (',' expr)? ')'		# VLOOKUP_fun
	| LOOKUP '(' expr ',' expr ',' expr ')'						# LOOKUP_fun
	| PARAMETER '(' (expr (',' expr)*)? ')'						# DiyFunction_fun
	| ADDYEARS '(' expr ',' expr ')'							# ADDYEARS_fun
	| ADDMONTHS '(' expr ',' expr ')'							# ADDMONTHS_fun
	| ADDDAYS '(' expr ',' expr ')'								# ADDDAYS_fun
	| ADDHOURS '(' expr ',' expr ')'							# ADDHOURS_fun
	| ADDMINUTES '(' expr ',' expr ')'							# ADDMINUTES_fun
	| ADDSECONDS '(' expr ',' expr ')'							# ADDSECONDS_fun
	| TIMESTAMP '(' expr (',' expr)? ')'						# TIMESTAMP_fun

	| '[' PARAMETER ']'											# PARAMETER_fun
	| '[' expr ']'												# PARAMETER_fun
	| PARAMETER													# PARAMETER_fun
	| PARAMETER2												# PARAMETER_fun
	| '-'? NUM													# NUM_fun
	| STRING													# STRING_fun
	| NULL														# NULL_fun;

parameter2:
	E
	| IF
	| IFERROR
	| ISNUMBER
	| ISTEXT
	| ISERROR
	| ISNONTEXT
	| ISLOGICAL
	| ISEVEN
	| ISODD
	| IFERROR
	| ISNULL
	| ISNULLORERROR
	| AND
	| OR
	| NOT
	| TRUE
	| FALSE
	| PI
	| ACOSH
	| ASIN
	| ASINH
	| ATAN
	| ATANH
	| ATAN2
	| ROUND
	| ROUNDDOWN
	| ROUNDUP
	| CEILING
	| FLOOR
	| EVEN
	| ODD
	| MROUND
	| RAND
	| RANDBETWEEN
	| FACT
	| FACTDOUBLE
	| POWER
	| EXP
	| LN
	| LOG
	| LOG10
	| MULTINOMIAL
	| PRODUCT
	| SQRTPI
	| SUMSQ
	| ASC
	| JIS
	| CHAR
	| CLEAN
	| CODE
	| CONCATENATE
	| EXACT
	| FIND
	| FIXED
	| LEFT
	| LEN
	| LOWER
	| MID
	| PROPER
	| REPLACE
	| REPT
	| RIGHT
	| RMB
	| SEARCH
	| SUBSTITUTE
	| T
	| TEXT
	| TRIM
	| UPPER
	| VALUE
	| DATEVALUE
	| TIMEVALUE
	| DATE
	| TIME
	| PERCENTILE
	| PERCENTRANK
	| AVERAGE
	| AVERAGEIF
	| GEOMEAN
	| HARMEAN
	| COUNT
	| COUNTIF
	| SUM
	| SUMIF
	| AVEDEV
	| STDEV
	| STDEVP
	| DEVSQ
	| VAR
	| VARP
	| NORMDIST
	| NORMINV
	| NORMSDIST
	| NORMSINV
	| BETADIST
	| BETAINV
	| BINOMDIST
	| EXPONDIST
	| FDIST
	| FINV
	| FISHER
	| FISHERINV
	| GAMMADIST
	| GAMMAINV
	| GAMMALN
	| HYPGEOMDIST
	| LOGINV
	| LOGNORMDIST
	| NEGBINOMDIST
	| POISSON
	| TDIST
	| TINV
	| WEIBULL
	| URLENCODE
	| URLDECODE
	| HTMLENCODE
	| HTMLDECODE
	| BASE64TOTEXT
	| BASE64URLTOTEXT
	| TEXTTOBASE64
	| TEXTTOBASE64URL
	| REGEX
	| REGEXREPALCE
	| ISREGEX
	| GUID
	| MD5
	| SHA1
	| SHA256
	| SHA512
	| CRC32
	| HMACMD5
	| HMACSHA1
	| HMACSHA256
	| HMACSHA512
	| TRIMSTART
	| TRIMEND
	| INDEXOF
	| LASTINDEXOF
	| SPLIT
	| JOIN
	| SUBSTRING
	| STARTSWITH
	| ENDSWITH
	| ISNULLOREMPTY
	| ISNULLORWHITESPACE
	| REMOVESTART
	| REMOVEEND
	| JSON
	| VLOOKUP
	| LOOKUP
	| ADDYEARS
	| ADDMONTHS
	| ADDDAYS
	| ADDHOURS
	| ADDMINUTES
	| ADDSECONDS
	| TIMESTAMP
	| NULL
	| PARAMETER;

SUB: '-';
NUM: '0' ('.' [0-9]+)?
	| [1-9][0-9]* ('.' [0-9]+)?
	| ('0' ('.' [0-9]+)? | [1-9][0-9]* ('.' [0-9]+)?) 'E' [+-]? [0-9][0-9]?
	;
STRING: '\'' ( ~'\'' | '\\\'')* '\''
	| '"' ( ~'"' | '\\"')* '"'
	| '`' ( ~'`' | '\\`')* '`'
	;
NULL: 'NULL';

// 逻辑函数
IF: 'IF';
IFERROR: 'IFERROR';
ISNUMBER: 'ISNUMBER';
ISTEXT: 'ISTEXT';
ISERROR: 'ISERROR';
ISNONTEXT: 'ISNONTEXT';
ISLOGICAL: 'ISLOGICAL';
ISEVEN: 'ISEVEN';
ISODD: 'ISODD';
ISNULL: 'ISNULL';
ISNULLORERROR: 'ISNULLORERROR';
AND: 'AND';
OR: 'OR';
NOT: 'NOT';
TRUE: 'TRUE';
FALSE: 'FALSE';
// 数学与三角函数
E: 'E';
PI: 'PI';
DEC2BIN: 'DEC2BIN';
DEC2HEX: 'DEC2HEX';
DEC2OCT: 'DEC2OCT';
HEX2BIN: 'HEX2BIN'; //  将十六进制数转换为二进制数
HEX2DEC: 'HEX2DEC'; // 将十六进制数转换为十进制数
HEX2OCT: 'HEX2OCT'; //  将十六进制数转换为八进制数
OCT2BIN: 'OCT2BIN'; //   将八进制数转换为二进制数
OCT2DEC: 'OCT2DEC'; //   将八进制数转换为十进制数
OCT2HEX: 'OCT2HEX'; //  将八进制数转换为十六进制数
BIN2OCT: 'BIN2OCT';
BIN2DEC: 'BIN2DEC';
BIN2HEX: 'BIN2HEX';
ABS: 'ABS';
QUOTIENT: 'QUOTIENT';
MOD: 'MOD';
SIGN: 'SIGN';
SQRT: 'SQRT';
TRUNC: 'TRUNC';
INT: 'INT';
GCD: 'GCD';
LCM: 'LCM';
COMBIN: 'COMBIN';
PERMUT: 'PERMUT';
DEGREES: 'DEGREES';
RADIANS: 'RADIANS';
COS: 'COS';
COSH: 'COSH';
SIN: 'SIN';
SINH: 'SINH';
TAN: 'TAN';
TANH: 'TANH';
ACOS: 'ACOS';
ACOSH: 'ACOSH';
ASIN: 'ASIN';
ASINH: 'ASINH';
ATAN: 'ATAN';
ATANH: 'ATANH';
ATAN2: 'ATAN2';
ROUND: 'ROUND';
ROUNDDOWN: 'ROUNDDOWN';
ROUNDUP: 'ROUNDUP';
CEILING: 'CEILING';
FLOOR: 'FLOOR';
EVEN: 'EVEN';
ODD: 'ODD';
MROUND: 'MROUND';
RAND: 'RAND';
RANDBETWEEN: 'RANDBETWEEN';
FACT: 'FACT';
FACTDOUBLE: 'FACTDOUBLE';
POWER: 'POWER';
EXP: 'EXP';
LN: 'LN';
LOG: 'LOG';
LOG10: 'LOG10';
MULTINOMIAL: 'MULTINOMIAL';
PRODUCT: 'PRODUCT';
SQRTPI: 'SQRTPI';
SUMSQ: 'SUMSQ';
// 文本函数
ASC: 'ASC';
JIS: 'JIS' | 'WIDECHAR';
CHAR: 'CHAR';
CLEAN: 'CLEAN';
CODE: 'CODE';
CONCATENATE: 'CONCATENATE';
EXACT: 'EXACT';
FIND: 'FIND';
FIXED: 'FIXED';
LEFT: 'LEFT';
LEN: 'LEN';
LOWER: 'LOWER' | 'TOLOWER';
MID: 'MID';
PROPER: 'PROPER';
REPLACE: 'REPLACE';
REPT: 'REPT';
RIGHT: 'RIGHT';
RMB: 'RMB';
SEARCH: 'SEARCH';
SUBSTITUTE: 'SUBSTITUTE';
T: 'T';
TEXT: 'TEXT';
TRIM: 'TRIM';
UPPER: 'UPPER' | 'TOUPPER';
VALUE: 'VALUE';
// 日期与时间函数
DATEVALUE: 'DATEVALUE';
TIMEVALUE: 'TIMEVALUE';
DATE: 'DATE';
TIME: 'TIME';
NOW: 'NOW';
TODAY: 'TODAY';
YEAR: 'YEAR';
MONTH: 'MONTH';
DAY: 'DAY';
HOUR: 'HOUR';
MINUTE: 'MINUTE';
SECOND: 'SECOND';
WEEKDAY: 'WEEKDAY';
DATEDIF: 'DATEDIF';
DAYS360: 'DAYS360';
EDATE: 'EDATE';
EOMONTH: 'EOMONTH';
NETWORKDAYS: 'NETWORKDAYS';
WORKDAY: 'WORKDAY';
WEEKNUM: 'WEEKNUM';
// 统计函数
MAX: 'MAX';
MEDIAN: 'MEDIAN';
MIN: 'MIN';
QUARTILE: 'QUARTILE';
MODE: 'MODE';
LARGE: 'LARGE';
SMALL: 'SMALL';
PERCENTILE: 'PERCENTILE';
PERCENTRANK: 'PERCENTRANK';
AVERAGE: 'AVERAGE';
AVERAGEIF: 'AVERAGEIF';
GEOMEAN: 'GEOMEAN';
HARMEAN: 'HARMEAN';
COUNT: 'COUNT';
COUNTIF: 'COUNTIF';
SUM: 'SUM';
SUMIF: 'SUMIF';
AVEDEV: 'AVEDEV';
STDEV: 'STDEV';
STDEVP: 'STDEVP';
DEVSQ: 'DEVSQ';
VAR: 'VAR';
VARP: 'VARP';
NORMDIST: 'NORMDIST';
NORMINV: 'NORMINV';
NORMSDIST: 'NORMSDIST';
NORMSINV: 'NORMSINV';
BETADIST: 'BETADIST';
BETAINV: 'BETAINV';
BINOMDIST: 'BINOMDIST';
EXPONDIST: 'EXPONDIST';
FDIST: 'FDIST';
FINV: 'FINV';
FISHER: 'FISHER';
FISHERINV: 'FISHERINV';
GAMMADIST: 'GAMMADIST';
GAMMAINV: 'GAMMAINV';
GAMMALN: 'GAMMALN';
HYPGEOMDIST: 'HYPGEOMDIST';
LOGINV: 'LOGINV';
LOGNORMDIST: 'LOGNORMDIST';
NEGBINOMDIST: 'NEGBINOMDIST';
POISSON: 'POISSON';
TDIST: 'TDIST';
TINV: 'TINV';
WEIBULL: 'WEIBULL';
// 增加函数 类C# 方法
URLENCODE: 'URLENCODE';
URLDECODE: 'URLDECODE';
HTMLENCODE: 'HTMLENCODE';
HTMLDECODE: 'HTMLDECODE';
BASE64TOTEXT: 'BASE64TOTEXT';
BASE64URLTOTEXT: 'BASE64URLTOTEXT';
TEXTTOBASE64: 'TEXTTOBASE64';
TEXTTOBASE64URL: 'TEXTTOBASE64URL';
REGEX: 'REGEX';
REGEXREPALCE: 'REGEXREPALCE';
ISREGEX: 'ISREGEX' | 'ISMATCH';
GUID: 'GUID';
MD5: 'MD5';
SHA1: 'SHA1';
SHA256: 'SHA256';
SHA512: 'SHA512';
CRC32: 'CRC32';
HMACMD5: 'HMACMD5';
HMACSHA1: 'HMACSHA1';
HMACSHA256: 'HMACSHA256';
HMACSHA512: 'HMACSHA512';
TRIMSTART: 'TRIMSTART' | 'LTRIM';
TRIMEND: 'TRIMEND' | 'RTRIM';
INDEXOF: 'INDEXOF';
LASTINDEXOF: 'LASTINDEXOF';
SPLIT: 'SPLIT';
JOIN: 'JOIN';
SUBSTRING: 'SUBSTRING';
STARTSWITH: 'STARTSWITH';
ENDSWITH: 'ENDSWITH';
ISNULLOREMPTY: 'ISNULLOREMPTY';
ISNULLORWHITESPACE: 'ISNULLORWHITESPACE';
REMOVESTART: 'REMOVESTART';
REMOVEEND: 'REMOVEEND';
JSON: 'JSON';
VLOOKUP: 'VLOOKUP';
LOOKUP: 'LOOKUP';
ARRAY:'ARRAY';

ADDYEARS:'ADDYEARS';
ADDMONTHS:'ADDMONTHS';
ADDDAYS:'ADDDAYS';
ADDHOURS:'ADDHOURS';
ADDMINUTES:'ADDMINUTES';
ADDSECONDS:'ADDSECONDS';
TIMESTAMP:'TIMESTAMP';

PARAMETER: ([A-Z_]| FullWidthLetter)([A-Z0-9_] | FullWidthLetter)*;
PARAMETER2: '{' (~('{'|'}'))+ '}'
			//| '【' (~('【'|'】'))+ '】'
			| '#' (~('#'))+ '#'
			| '@' ([A-Z_]| FullWidthLetter)([A-Z0-9_] | FullWidthLetter)*
			;

fragment FullWidthLetter
    : '\u00c0'..'\u00d6'
    | '\u00d8'..'\u00f6'
    | '\u00f8'..'\u00ff'
    | '\u0100'..'\u1fff'
    | '\u2c00'..'\u2fff'
    | '\u3040'..'\u318f'
    | '\u3300'..'\u337f'
    | '\u3400'..'\u3fff'
    | '\u4e00'..'\u9fff'
    | '\ua000'..'\ud7ff'
    | '\uf900'..'\ufaff'
    | '\uff00'..'\ufff0'
    // | '\u10000'..'\u1F9FF'  //not support four bytes chars
    // | '\u20000'..'\u2FA1F'
    ;

WS: [ \t\r\n\u000C]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;