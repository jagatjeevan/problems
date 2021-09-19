const nextBiggerNumber = require("../src/find-next-greater-number");

describe("max stock profit", () => {
  it("gives the maximum profit from the array", () => {
    expect(nextBiggerNumber([1, 5, 7, 8, 12, 76])).toEqual([1, 1, 1, 1, 1, 0]);
    expect(nextBiggerNumber([1, 15, 7, 3, 12, 76])).toEqual([1, 4, 2, 1, 1, 0]);
    expect(nextBiggerNumber([1, 150, 70, 300, 120, 76])).toEqual([
      1, 2, 1, 0, 0, 0,
    ]);
  });
});
