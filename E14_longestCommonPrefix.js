/**
 * @param {string[]} strs
 * @return {string}
 */
//  .load E14_longestCommonPrefix.js
var longestCommonPrefix = function(strs) {
  if (strs.length < 2) return strs[0]
  let pref = '';
  let flag = true;
  let i = 0;
  while (flag) {
    strs.slice(1).every(str => {
      if (str[i] !== strs[0][i] || str[i] === undefined) {
        flag = false;
        return false;
      }
      return true;
    })
    if (flag) pref += strs[0][i];
    i++;
  }
  return pref;
};

console.log(longestCommonPrefix(['blah', 'bleh', 'bleah']))
console.log(longestCommonPrefix(['bleah', 'bleh', 'bleahh']))
