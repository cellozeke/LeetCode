/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let y = x.toString()
  for (let i = 0; i < y.length / 2; i++) {
    if (y[i] !== y[y.length - 1 - i]) return false
  }
  return true
};
