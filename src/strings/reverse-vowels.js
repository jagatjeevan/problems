/**
 * Url : https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 *
 * Input: s = "IceCreAm"
 * Output: "AceCreIm"
 *
 * Input: s = "leetcode"
 * Output: "leotcede"
 *
 * */

const reverseVowels = (s) => {
  if (s.trim().length === 0) return "Enter a valid string";

  const vowels = "aeiouAEIOU";
  const strArray = s.split("");
  let left = 0;
  let right = strArray.length - 1;

  while (left < right) {
    if (vowels.includes(strArray[left]) && vowels.includes(strArray[right])) {
      [strArray[left], strArray[right]] = [strArray[right], strArray[left]];
      left++;
      right--;
    } else if (!vowels.includes(strArray[left])) {
      left++;
    } else {
      right--;
    }
  }

  return strArray.join("");
};

module.exports = reverseVowels;
