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
  let currLen = 0;
  let maxLen = 1;
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum < 0) {
      if (currLen > maxLen) maxLen = currLen;
      currLen = 0;
      currSum = 0;
      continue;
    }
    if (currSum > maxSum) maxSum = currSum;
    ++currLen;
    if (currLen > maxLen) maxLen = currLen;
  }
  return currSum > maxSum ? currSum : maxSum;
  // return currLen > maxLen ? currLen : maxLen;
};
