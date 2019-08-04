/**
 * Regular Expressions
 * 1. Find the index of first occurence in the sub-string
 *      Input: "A very very intelligent looking person is very very simple", 'very';
 *      Output: 2;
 *
 * */

var firstOccurence = (str, substr) => {
    const regex = new RegExp(`${substr}`);
    return str.search(regex);
};
