/*
 * @lc app=leetcode.cn id=2119 lang=typescript
 *
 * [2119] 反转两次的数字
 */

// @lc code=start
function isSameAfterReversals(num: number): boolean {
    return num===0||num % 10 !== 0;
};
// @lc code=end

