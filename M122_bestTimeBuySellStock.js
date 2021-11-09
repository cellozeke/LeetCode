var maxProfit = function(prices) {
  let profit = 0;
  let i = 0;
  let j = 1;
  if (prices.length === 1) return 0;
  while (j < prices.length) {
      if (prices[j] < prices[j - 1]) { // 3 < 5
          profit += prices[j - 1] - prices[i];
          i = j; 
      }
      j++;
  }
  if (prices[j - 1] >= prices[j - 2]) profit += prices[j - 1] - prices[i];
  return profit;
};

// if (prices[i] > prices[j - 1])

// Input: prices = [7,1,5,3,6,4,7]
// profit = 0; i = 0; j = 1
// profit = 0; i = 1; j = 2
// profit = 0; i = 1; j = 3
// profit = 4; i = 3; j = 4
// profit = 4; i = 3; j = 5
// profit = 7; i = 5; j = 6
// profit = 7; i = 5; j = 7
