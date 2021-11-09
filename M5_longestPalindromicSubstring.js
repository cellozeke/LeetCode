/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = s.length;
  while (len >= 0) {
      for (i = 0; i <= s.length - len; i++) {
          let sub = s.slice(i, i + len);
          if (isPalindrome(sub)) return sub;
      }
      len--;
  }
  return s[0];
};

const isPalindrome = function(sub) {
  for (let i = 0; i < (sub.length - 1) / 2; i++) {
      if (sub[i] !== sub[sub.length - i - 1]) return false;
  }
  return true;
}
