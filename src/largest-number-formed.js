/** Taken in a discussion with a friend.
 * Given an array of numbers, need to find the largest number that can
 * be formed. It is not sorting and appending the array.
 *
 * I/p : [3, 30, 34, 5, 9]
 * O/p : 9534330
 *
 * */

const largestNumberFormed = arr => {
  if (!arr.length) return "input doesnot have any value to form largest number";

  const newArr = arr.map(ar => ar.toString());
  return newArr
    .sort((a, b) => {
      if (a + b === b + a) return 0;
      return a + b > b + a ? -1 : 1;
    })
    .join("");
};
