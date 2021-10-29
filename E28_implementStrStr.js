/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0;
  let i = 0;
  while (haystack.length >= needle.length) {
    if (haystack.slice(0, needle.length) === needle) {
      return i;
    } else {
      haystack = haystack.slice(1);
      i++;
    }
  }
  return -1;
};
