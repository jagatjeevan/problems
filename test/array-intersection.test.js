const findIntersection = require("../src/array-intersection");

describe("Array Intersection", () => {
  it("renders intersection", () => {
    const a = [1, 3, 5, 9];
    const b = [3, 9, 11];
    expect(findIntersection(a, b)).toEqual([3, 9]);
  });

  it("renders duplicate intersections as well", () => {
    var a1 = [1, 3, 3, 5, 9];
    var b1 = [3, 3, 5, 9, 11];
    expect(findIntersection(a1, b1)).toEqual([3, 3, 5, 9]);
  });
});
