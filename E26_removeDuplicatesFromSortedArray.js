/**
 * @param {number[]} nums
 * @return {number}
 */
//  .load E26_removeDuplicatesFromSortedArray.js
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums;
  let total = 1;
  let last = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[last]) {
      nums[i] = null;
    } else {
      nums[++last] = nums[i];
      ++total;
    }
  }
  return total;
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5]))
