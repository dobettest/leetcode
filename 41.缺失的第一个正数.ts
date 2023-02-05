/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
    let min = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(max, min + 1);
        max = Math.max(nums[i], min + 1);
    }
    console.log(max, min);
    return max;
};
// @lc code=end

