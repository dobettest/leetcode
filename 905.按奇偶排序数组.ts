/*
 * @lc app=leetcode.cn id=905 lang=typescript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
function sortArrayByParity(nums: number[]): number[] {
    return nums.sort((a, b) => {
        return a % 2 - b % 2;
    })
};
// @lc code=end

