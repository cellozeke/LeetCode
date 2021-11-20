/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = new Object();
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] ? hash[nums[i]]++ : hash[nums[i]] = 1;
  }
  return Object.keys(hash).find(key => hash[key] === 1)
};
