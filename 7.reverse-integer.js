/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.05%)
 * Total Accepted:    588.2K
 * Total Submissions: 2.3M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var sign = 1;
    if(x==0){
        return 0;
    }
    if (x < 0) {
      sign = -1;
      x=x*sign;
    }
    var ns = [];
    var input = x;
    while (input > 0) {
      var tem = parseInt(input / 10);
      var digit = input - tem * 10;
      ns.push(digit);
      input = tem;
    }
    ns = ns.reverse();
    var result = ns.pop();
    while (ns.length != 0) {
      result = result * 10;
      result = result + ns.pop();
    }
    if(result>2147483647){
        return 0;
    }
    result=sign * result;
    return result;
  };
