/**
 * 分治算法
 * 分治算法一般采用递归或循环的方式，通常需要配合贪心算法去优化分治法的效率
 */

function fib(n) {
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
      result = 1;
    } else {
      result = count(n - 1) + count(n - 2);
    }

    temp[n] = result;

    return result;
  }

  return count(n);
}
