/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  // if (digits.length === 1) return digits;
  let sum = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    sum += digits[i];
    digits[i] = sum % 10;
    sum = sum > 9 ? 1 : 0;
  }
  return sum === 1 ? [1].concat(digits) : digits;
};
