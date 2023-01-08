/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    return nums.find((item)=>nums.indexOf(item)===nums.lastIndexOf(item))??-1
};
// @lc code=end

