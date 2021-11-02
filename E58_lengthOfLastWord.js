/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let len = 0;
  let idx = s.length - 1;
  let inWord = false;
  while (!inWord) {
    if (s[idx] !== ' ') {
      inWord = true;
      len++;
    }
    idx--;
  }
  while (idx >= 0) {
    if (s[idx] !== ' ') {
      len++;
    } else {
      break;
    }
    idx--;
  }
  return len;
};
