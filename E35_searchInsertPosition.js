/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (!nums.length) return 0;
  let mid = Math.floor(nums.length / 2);
  if (nums[mid] === target) return mid;
  if (nums.length === 1) return target > nums[0] ? 1 : 0; 
  if (nums[mid] < target) return mid + searchInsert(nums.slice(mid), target);
  return searchInsert(nums.slice(0, mid), target)
};

//[1, 3, 5, 6], 2
