// 输入: [1, 2, 3, 2, 2, 2, 5,4,4,4,4,4,4, 4, 2]
// 输出: 2

// 思路
// count 出现的次数 1
// 出现次数最多的数字 num = nums[0]

function majorityElement(nums: number[]): number {
  let count = 1,
    num = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      num = nums[i];
      count = 1;
    }

    if (num === nums[i]) {
      count++;
    } else {
      count--;
    }
  }

  return num;
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 4, 4, 4, 4, 4, 4, 2]));
