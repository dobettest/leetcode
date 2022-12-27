/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
    let maxLen: number = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count=0;
        }
        maxLen = Math.max(maxLen, count);
    }
    return maxLen;
};
// @lc code=end

