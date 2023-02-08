/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // the day we should buy
    min = Math.min(min, prices[i - 1]);
    profit = Math.max(prices[i] - min, profit);
  }
  return profit;
};
