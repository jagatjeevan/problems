/**
 * Regular Expressions
 * 
 * 1. Find the number of occurences of a char in a string.
 *      Input: 12/12/2019 10-10-10, 12
 *      Output: 2
 * 
 * 
 * 2. Check if there is a match or not
 *      Input: "A very very intelligent looking person is very very simple", 'very';
 *      output: true
 * */

var numberOfOccurences = (str, findStr) => {
    let regex = new RegExp(`${findStr}`, 'gi');
    return str.match(regex).length;
};


var doesExist = (str, substr) => {
    const regex = new RegExp(`${substr}`, 'gi');
    return regex.test(str);
}