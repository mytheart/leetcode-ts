import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Leetcode demo</h1>
    </div>
  );
}

/**
 * 找出数组中任意一个重复的数字。
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums: number[]): number | void {

  const set = new Set();
  let len = set.size;

  for (let num of nums) {
    set.add(num)
    if (len === set.size) {
      return num;
    } else {
      len = set.size
    }
  }
};

const result = findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);

console.log(result)

// 剑指 Offer 04. 二维数组中的查找
var findNumberIn2DArray = function(matrix : number[][], target: number) {
  return matrix.flat(Infinity).includes(target);
};

// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
function replaceSpace(s: string): string {
  return s.replace(/\s/g, '%20')
};

// console.log(replaceSpace('We are happy.'))

// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
