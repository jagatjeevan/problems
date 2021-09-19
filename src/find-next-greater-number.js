// Given the list of numbers, find after how many steps would you get the next bigger number in the list.
// Input :[73, 74, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]

function nextBiggerNumber(arr) {
  const arrOp = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let foundVal = false;
      if (arr[j] > arr[i]) {
        foundVal = true;
        arrOp.push(j - i);
        break;
      }
      if (!foundVal && j === arr.length - 1) arrOp.push(0);
    }
  }
  arrOp.push(0);
  return arrOp;
}

nextBiggerNumber([73, 74, 75, 71, 69, 177, 79, 78, 80]);

module.exports = nextBiggerNumber;
