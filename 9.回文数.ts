/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const str=String(x);
    return str.split('').reverse().join('')===str;
};
// @lc code=end

