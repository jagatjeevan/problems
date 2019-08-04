/**
 * Regular Expressions
 * 1. Find all the vowels in a given string in the same order
 *      Input : "A very good looking person";
 *      Output : "A e o o o o i e o";
 *
 * */

var findingVowels = str => str.match(/(a|e|i|o|u)/gi).join(' ');
