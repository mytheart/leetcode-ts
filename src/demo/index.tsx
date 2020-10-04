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

function climbStairs(n) {
  var temp = {};

  function count(n) {
    let result;

    if (temp[n]) {
      return temp[n];
    }

    if (n <= 0) {
      result = 0;
    } else if (n === 1) {
      result = 1;
    } else if (n === 2) {
      result = 2;
    } else {
      result = count(n - 1) + count(n - 2);
    }

    temp[n] = result;

    return result;
  }

  return count(n);
}

console.log(climbStairs(10));
