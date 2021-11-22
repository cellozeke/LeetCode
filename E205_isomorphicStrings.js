/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map = {};
  let vals = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      if (vals[t[i]]) return false;
      map[s[i]] = t[i];
      vals[t[i]] = 1;
    } else {
      if (t[i] !== map[s[i]]) return false;
    }
  }
  return true;
};
