// https://leetcode-cn.com/problems/coin-change/

// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。

/**
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 */

// const result = _coinChange(coins, amount)

// console.log(coinChange([25, 10, 5, 1], 46))

// interface NumberDictionary {
//   [index: string]: number;
// }

// const twoSum = (nums: number[], target:number) => {
//   const prevNums: NumberDictionary = {};                    // 存储出现过的数字，和对应的索引

//   for (let i = 0; i < nums.length; i++) { // 遍历元p素
//     const curNum = nums[i];               // 当前元素
//     const targetNum = target - curNum;    // 满足要求的目标元素
//     const targetNumIndex = prevNums[targetNum]; // 在prevNums中获取目标元素的索引
//     if (targetNumIndex !== undefined) {   // 如果存在，直接返回 [目标元素的索引,当前索引]
//       return [targetNumIndex, i];
//     } else {                              // 如果不存在，说明之前没出现过目标元素
//       prevNums[curNum] = i;               // 存入当前的元素和对应的索引
//     }
//   }
// }

// 0 0
// 1 1
// 2 2
// 3 3
// 4 5
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1: string, text2: string) :string {

//   if (text1 === '' || text2 === '') {
//     return '';
//   }

//   let result = '';

//   if (text1[0] === text2[0]) {
//     result = text1[0] + longestCommonSubsequence(text1.substr(1), text2.substr(1));
//   } else {
//     let lcs1 = longestCommonSubsequence(text1.substr(1), text2)
//     let lcs2 = longestCommonSubsequence(text1, text2.substr(1));

//     result = lcs1.length > lcs2.length ? lcs1 : lcs2;
//   }

//   console.log('result', result)
//   return result;
// };

var addTwoNumbers = function(l1, l2) {};

// [2,4,3]
// [5,6,4]
