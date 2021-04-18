const smallestMissingNumber = require("../src/find-smallest-missing-number");

describe("find the smallest missing positive number in a given array", () => {
  const input1 = [-1, -50, -8, 9, 11];
  const input2 = [0, 1, 2, 3, 4, 5];
  it("finds the smallest missing number", () => {
    expect(smallestMissingNumber(input1)).toEqual(10);
    expect(smallestMissingNumber(input2)).toEqual(6);
    expect(smallestMissingNumber([-2, -10])).toEqual(1);
    expect(smallestMissingNumber([1, 3, 6, 4, 1, 2])).toEqual(5);
  });
});
