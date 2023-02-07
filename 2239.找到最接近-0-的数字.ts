/*
 * @lc app=leetcode.cn id=2239 lang=typescript
 *
 * [2239] 找到最接近 0 的数字
 */

// @lc code=start
function findClosestNumber(nums: number[]): number {
    nums.sort((a, b) => {
        const a1 = Math.abs(a);
        const b1 = Math.abs(b);
        if (a1 === b1) {
            return b - a;
        }
        return a1 - b1;
    })
    return nums[0]
};
// @lc code=end

