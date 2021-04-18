/**
 * Find the smallest missing number in the array which is greater than 0
 * Input : A = [1, 5, 7, 8],
 * Output : 2
 * Input : A = [-1, -5, -7, -8],
 * Output : 1
 *
 * */

const uniqueValues = (arr) =>
  arr.filter((item, i, ar) => ar.indexOf(item) === i);

const getPositiveArray = (arr) => {
  const uniqueArrElem = uniqueValues(arr);
  return uniqueArrElem.filter((item) => item > 0);
};

var smallestMissingNumber = (A) => {
  const sortedArray = getPositiveArray(A).sort((a, b) => a - b);

  if (sortedArray.length < 1) return 1;

  let missingNumber = null;
  sortedArray.find((currentValue, index, arr) => {
    if (currentValue !== index + arr[0]) {
      missingNumber = index + arr[0];
      return true;
    }
  });

  return missingNumber === null
    ? sortedArray[sortedArray.length - 1] + 1
    : missingNumber;
};

module.exports = smallestMissingNumber;
