/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * */

const findLargestSubstring = (str) => {
    const subStrArr = [];
    const tmp = [];
    for(let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        tmp.forEach((item, index) => {
            if(item.includes(char)) {

            }
        })
    }
}