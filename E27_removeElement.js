/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums.length) return nums;
  let total = 0;
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = null;
    } else {
      nums[last++] = nums[i];
      ++total;
    }
  }
  return total;
};
