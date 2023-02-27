/*
 * @lc app=leetcode.cn id=1323 lang=typescript
 *
 * [1323] 6 和 9 组成的最大数字
 */

// @lc code=start
function maximum69Number(num: number): number {
    return Number(`${num}`.replace(/6/, '9'));
};
// @lc code=end

