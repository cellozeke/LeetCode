/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  debugger;
  m--;
  n--;
  let idx = m + n + 1;
  while (idx >= 0) {
    if (nums1[m] > nums2[n] || n < 0) {
      nums1[idx] = nums1[m];
      m--;
    } else {
      nums1[idx] = nums2[n];
      n--;
    }
    idx--;
  }
};

// [1, 2, 3, 0, 0, 0], [2, 5, 6]
// 
// 
