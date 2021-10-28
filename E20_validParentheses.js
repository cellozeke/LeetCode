/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let hash = {')':'(', '}':'{', ']':'['}
  let stack = ''
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) {
      if (hash[s[i]] === stack[stack.length - 1]) {
        stack = stack.slice(0, -1)
      } else { return false }
    } else {
      stack += s[i]
    }
  }
  return !stack.length
};
