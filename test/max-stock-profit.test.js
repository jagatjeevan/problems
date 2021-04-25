const maxStockProfit = require("../src/max-stock-profit");

describe("max stock profit", () => {
  it("gives the maximum profit from the array", () => {
    expect(maxStockProfit([1, 5, 7, 8, 12, 76])).toEqual(75);
    expect(maxStockProfit([76, 12, 1, 5, 7, 8, 12])).toEqual(11);
    expect(maxStockProfit([76, 86, 1, 5])).toEqual(10);
    expect(maxStockProfit([76])).toEqual(0);
  });
});
