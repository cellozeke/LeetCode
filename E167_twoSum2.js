/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let hash = {};
  for (let i = 0; i < numbers.length; i++) {
    if (hash[numbers[i]] > -1) return [hash[numbers[i]] + 1, i + 1];
    hash[target - numbers[i]] = i;
  }
};


/*
[2,7,11,15]
9
*/