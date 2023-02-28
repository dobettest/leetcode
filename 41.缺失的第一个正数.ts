/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
    let s = new Set(nums)
    for (let i = 1; ; i++) {
        if (s.has(i)) {
            continue;
        }
        return i;
    }
};
// @lc code=end

