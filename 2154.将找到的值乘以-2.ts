/*
 * @lc app=leetcode.cn id=2154 lang=typescript
 *
 * [2154] 将找到的值乘以 2
 */

// @lc code=start
function findFinalValue(nums: number[], original: number): number {
    if (nums.indexOf(original) !== -1) {
        return findFinalValue(nums, original * 2)
    }
    return original;
};
// @lc code=end

