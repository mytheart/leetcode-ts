// 输入：coins = [1, 2, 5], amount = 11
// 输出：3
// 解释：11 = 5 + 5 + 1

// 硬币找零

function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);

  const _coinChange = amount => {
    console.log(11);
    if (amount <= 0) {
      return [];
    }

    let max;

    for (let el of coins) {
      if (el < amount) {
        max = el;
        break;
      }
    }

    console.log(amount - max);

    const next = _coinChange(amount - max);
    // const next = [];

    return [max, ...next];
  };

  return _coinChange(amount).length;
}

console.log(11, coinChange([1, 2, 5], 11));
