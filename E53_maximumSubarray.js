/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  debugger;
  let max = Math.max(...nums);
  if (nums.every(num => num < 0)) return max;
  let currSum = 0;
  let maxSum = max;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum < 0) {
      currSum = 0;
      continue;
    }
    if (currSum > maxSum) maxSum = currSum;
  }
  return currSum > maxSum ? currSum : maxSum;
};
