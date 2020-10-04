// https://leetcode-cn.com/problems/longest-common-subsequence/

/**
 * 最长公共子序列
 *
 * 输入：text1 = "abcde", text2 = "ace"
 * 输出：3
 * 解释：最长公共子序列是 "ace"，它的长度为 3。
 */
//
var longestCommonSubsequence = function(text1, text2) {
  var temp = [];

  function _(text1, text2) {
    // num++;

    if (text1 === '' || text2 === '') {
      return '';
    }

    for (let item of temp) {
      if (item.str1 === text1 && item.str2 === text2) {
        return item.result;
      }
    }

    let result = '';

    if (text1[0] === text2[0]) {
      result = text1[0] + _(text1.substr(1), text2.substr(1));
    } else {
      let lcs1 = _(text1.substr(1), text2);
      let lcs2 = _(text1, text2.substr(1));

      result = lcs1.length > lcs2.length ? lcs1 : lcs2;
    }

    temp.push({
      str1: text1,
      str2: text2,
      result,
    });

    return result;
  }

  return _(text1, text2).length;
};
