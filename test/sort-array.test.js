const sortArray = require("../src/sort-array");

describe("sort array", () => {
  it("sorts an empty array", () => {
    const arr = [];
    expect(sortArray(arr)).toEqual([]);
  });

  test("sorts the array", () => {
    const arr = [1, 5, 4];
    expect(sortArray(arr)).toEqual([1, 4, 5]);
  });
});
