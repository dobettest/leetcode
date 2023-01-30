/*
 * @lc app=leetcode.cn id=628 lang=typescript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
var maximumProduct = function (nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};
// @lc code=end

