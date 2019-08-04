/**
 * Regular Expressions
 * 
 * Find the number of occurences of a char in a string.
 *      Input: 12/12/2019 10-10-10, 12
 *      Output: 2
 * */

var numberOfOccurences = (str, findStr) => {
    let regex = new RegExp(`${findStr}`, 'gi');
    return str.match(regex).length;
};