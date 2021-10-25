/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let hash = new Object()
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] !== undefined) return [hash[nums[i]], i]
    hash[target - nums[i]] = i
  }
};
