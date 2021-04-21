/**
 * Given an array of stock values on each day. Calculate the max profit.
 * Input : A = [1, 5, 7, 8, 12, 76]
 * Output : 75
 *
 * Input : A = [76, 12, 1, 5, 7, 8, 12]
 * Output : 11
 *
 * */

var maxStockProfit = (stockValues) => {
  let bigProfit = 0;
  for (let i = 0; i <= stockValues.length; i++) {
    for (let j = i + 1; j < stockValues.length; j++) {
      if (stockValues[j] > stockValues[i]) {
        bigProfit =
          bigProfit < stockValues[j] - stockValues[i]
            ? stockValues[j] - stockValues[i]
            : bigProfit;
      }
    }
  }

  return bigProfit;
};

module.exports = maxStockProfit;
