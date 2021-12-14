/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  for (let i = Math.floor(Math.log2(n)); i >= 0 && n > 0; i--) {
    let exp = 2 ** i;
    if (n - exp >= 0) {
      count++;
      n -= exp;
    }
  }
  return count;
};
