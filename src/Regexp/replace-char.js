/**
 * Regular Expressions
 *
 * 2. Replace all - to :
 *      Input: 12/12/2019 10-10-10
 *      Output: 12/12/2019 10:10:10
 * 
 * */


var replaceChar = (Datestr, char) => Datestr.replace(/-/g, char);