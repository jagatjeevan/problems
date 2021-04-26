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
  if (stockValues.length < 2) return 0;

  let minPrice = stockValues[0];
  let maxProfit = stockValues[1] - stockValues[0];
  for (let i = 1; i < stockValues.length; i++) {
    let currentPrice = stockValues[i];
    let potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(currentPrice, minPrice);
  }
  return maxProfit;
};

// This has a time complexity of O(n)^2
// var maxStockProfit1 = (stockValues) => {
//   let maxProfit = 0;
//   for (let i = 0; i <= stockValues.length; i++) {
//     for (let j = i + 1; j < stockValues.length; j++) {
//       if (stockValues[j] > stockValues[i]) {
//         maxProfit =
//           maxProfit < stockValues[j] - stockValues[i]
//             ? stockValues[j] - stockValues[i]
//             : maxProfit;
//       }
//     }
//   }

//   return maxProfit;
// };

module.exports = maxStockProfit;
