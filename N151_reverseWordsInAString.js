/**
 * @param {string} s
 * @return {string}
 */
// .load E151_reverseWordsInAString.js

var reverseWords = function(s) {
  // let word = ''
  // let words = ''
  // for (let i = s.length - 1; i >= 0; i--) {
  //   if (word === '' && s[i] === ' ') {
  //     continue
  //   }
  //   if (s[i] !== ' ') {
  //     word = s[i] + word
  //     if (i === 0) words += word
  //   } else {
  //     words += word + ' '
  //     word = ''
  //   }
  // }
  // return words.trimEnd()
  let word = ''
  let words = []
  for (let i = 0; i < s.length; i++) {
    if (word === '' && s[i] === ' ') {
      continue
    }
    if (s[i] !== ' ') {
      word += s[i]
      if (i === s.length - 1) words.push(word)
    } else {
      words.push(word)
      word = ''
    }
  }
  return words.reverse().join(' ')
};

console.log(reverseWords('hi i am happy'))
