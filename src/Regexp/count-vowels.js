/**
 * 
 * Regular Expressions
 * Extract the numbers of vowels and constants from the string.
 * Input: klajsdfkikljasdeou
 * Output: vowel: 6, constants: 12
 * 
 * */

const countingVowels = str => {
    const vowels = str.match(/a|e|i|o|u/gi).length;
    const constants = str.length - vowels;
    return {vowel: vowel, constants: constants};
}
