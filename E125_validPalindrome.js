/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  let alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  while (i < j) {
    if (!alphanum.includes(s[i])) {
      i++;
      continue;
    }
    if (!alphanum.includes(s[j])) {
      j--;
      continue;
    }
    if (!(s[i].toLowerCase() === s[j].toLowerCase())) return false;
    i++;
    j--;
  }
  return true;
};
