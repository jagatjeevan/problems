/**
 * Regular Expressions
 * Extract the numbers from the string.
 * Input: +91(984)-1968-250
 * Output: 919841968250
 * 
 * */

var extractNumber = (str) => {
    const regex = /\d/g;
    return str.match(regex).join('');
}