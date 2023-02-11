/*
 * @lc app=leetcode.cn id=2176 lang=typescript
 *
 * [2176] 统计数组中相等且可以被整除的数对
 */

// @lc code=start
function countPairs(nums: number[], k: number): number {
    const len: number = nums.length;
    let count: number = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j] && i * j % k === 0) {
                count++;
            }
        }
    }
    return count;
};
// @lc code=end

