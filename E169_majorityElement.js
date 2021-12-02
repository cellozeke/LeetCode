/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let hash = {};
  for (const num of nums) {
    hash[num] ? hash[num]++ : hash[num] = 1;
    if (hash[num] > nums.length / 2) return num;
  }
};
