/**
 * @param {string} s
 * @return {number}
 */
//  .load E13_romanToInteger.js
var romanToInt = function(s) {
  let res = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'M') {
      res += 1000
    } else if (s[i] === 'D') {
      res += 500
    } else if (s[i] === 'C') {
      'DM'.includes(s[i + 1]) ? res -= 100 : res += 100
    } else if (s[i] === 'L') {
      res += 50
    } else if (s[i] === 'X') {
      'LC'.includes(s[i + 1]) ? res -= 10 : res += 10
    } else if (s[i] === 'V') {
      res += 5
    } else if (s[i] === 'I') {
      'VX'.includes(s[i + 1]) ? res -= 1 : res += 1
    }
  }
  return res
};
// var romanToInt = function(s) {
//   let res = 0
//   for (let i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case 'M':
//         res += 1000
//       case 'D':
//         res += 500
//       case 'C':
//         'DM'.includes(s[i + 1]) ? res -= 100 : res += 100
//       case 'L':
//         res += 50
//       case 'X':
//         'LC'.includes(s[i + 1]) ? res -= 10 : res += 10
//       case 'V':
//         res += 5
//       case 'I':
//         'VX'.includes(s[i + 1]) ? res -= 1 : res += 1
//     }
//   }
//   return res
// };

console.log(romanToInt('IV'))
