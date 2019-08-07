/**
 * Regular Expressions
 * Test the match that starts and ends with the same vowels
 * Input: adklksjdflja
 * Output: true
 * 
 * Input: adklksjdflje
 * Output: false
 * 
 * Input: balksjdflkjasdf
 * Output: false
 * 
 * */


var vowelTest = str => {
    const regex = /^(a|e|i|o|u).+(a|e|i|o|u)$/;
    return regex.test(str);
}