/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  debugger;
  let hash = {};
  while (!hash[n]) {
    hash[n] = 1;
    let sum = 0;
    while (n) {
      let m = n % 10;
      sum += (m * m);
      // if (m === n) break;
      n = (n - m) / 10;
    }
    if (Number.isInteger(Math.log10(sum))) return true;
    n = sum;
  }
  return false;
};
