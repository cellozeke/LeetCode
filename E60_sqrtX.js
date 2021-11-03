/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x < 2) return x;
  let check = 2;
  while (check * check <= x) {
    check++;
  }
  return check - 1;
};
