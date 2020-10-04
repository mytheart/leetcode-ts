// https://leetcode-cn.com/problems/coin-change/

/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 */

function coinChange(coins: number[], amount: number): number {
  function _coinChange(coins: number[], amount: number): number[] {
    if (amount <= 0) {
      return [];
    }

    // 数组里的最大值 && <= amount
    let temp = 0;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      if (temp < coin && coin <= amount) {
        temp = coin;
      }
    }

    let result = [temp];

    const next = _coinChange(coins, amount - temp);

    result = result.concat(next);

    return result;
  }

  const result = _coinChange(coins, amount);

  return result.length;
}

console.log(coinChange([25, 10, 5, 1], 46));
