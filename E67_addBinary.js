/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let res = '';
  let carry = false;
  let [i, j] = [a.length - 1, b.length - 1];
  while (a[i] || b[j]) {
    if (a[i] && b[j]) {
      if (a[i] !== b[j]) {
        res = (carry ? '0' : '1') + res;
      } else {
        res = (carry ? '1': '0') + res;
        carry = a[i] === '1' ? true : false;
      }
    } else {
      let temp = (a[i] || b[j]);
      if (temp === '1') {
        res = (carry ? '0' : '1') + res;
      } else {
        res = (carry ? '1' : '0') + res;
        carry = false;
      }
    }
    i--;
    j--;
  }
  return carry ? '1' + res : res;
};
