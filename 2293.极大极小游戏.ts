/*
 * @lc app=leetcode.cn id=2293 lang=typescript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
function minMaxGame(nums: number[]): number {
    if (nums.length === 1) {
        return nums[0];
    }
    const newNums: number[] = [];
    const len: number = nums.length;
    for (let i = 0; i < len / 2; i++) {
        if (i % 2 === 0) {
            newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1])
        } else {
            newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
        }
    }
    return minMaxGame(newNums);
};
// @lc code=end

