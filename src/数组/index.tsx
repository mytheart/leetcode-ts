// 合并数组
const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
const nums2 = [2, 5, 6],
  n = 3;

var merge = function(nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    lastI = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[lastI] = nums1[i];
      nums1[i] = 0;
      i--;
    } else {
      nums1[lastI] = nums2[j];
      j--;
    }

    lastI--;
    // i--;
    // j--;
  }

  while (j >= 0) {
    nums1[lastI] = nums2[j];
    lastI--;
    j--;
  }

  return nums1;
};

// merge(nums1, 3, nums2, 3)

// 三数之和 https://leetcode-cn.com/problems/3sum/

const nums = [-1, 0, 1, 2, -1, -4];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums: []) {
  let result = [];

  let i = 0,
    m,
    n;

  nums.sort((a, b) => a - b);

  const len = nums.length;

  for (i; i < len - 2; i++) {
    m = i + 1;
    n = len - 1;

    while (m !== n) {
      let sum = nums[i] + nums[m] + nums[n];
      if (sum === 0) {
        result.push([nums[i], nums[m], nums[n]]);
      } else {
      }
    }
  }
};
