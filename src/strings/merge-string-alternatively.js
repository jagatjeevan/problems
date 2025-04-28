/**
 * Find the strings which are merged alternatively
 * Input : Input: word1 = "abc", word2 = "pqr"
 * Output : "apbqcr"
 *
 * Input : Input: word1 = "ab", word2 = "pqrs"
 * Output : "apbqrs"
 *
 * Input: word1 = "abcd", word2 = "pq"
 * Output: "apbqcd"
 *
 * */

const mergeAlternately = (word1, word2) => {
  let mergedString = "";
  let len = Math.max(word1.length, word2.length);
  for (let i = 0; i < len; i++) {
    if (i < word1.length) {
      mergedString += word1[i];
    }

    if (i < word2.length) {
      mergedString += word2[i];
    }
  }

  return mergedString;
};

module.exports = mergeAlternately;
