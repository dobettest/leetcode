/*
 * @lc app=leetcode.cn id=2164 lang=typescript
 *
 * [2164] 对奇偶下标分别排序
 */

// @lc code=start
function sortEvenOdd(nums: number[]): number[] {
    if (nums.length < 3) {
        return nums;
    }
    const odd = nums.filter((_, i) => i % 2).sort((a, b) => b - a);
    const even = nums.filter((_, i) => i % 2 === 0).sort((a, b) => a - b);
    for (let i = 0; i < even.length; i++) {
        nums[2 * i] = even[i];
    }
    for (let i = 0; i < odd.length; i++) {
        nums[2 * i + 1] = odd[i];
    }
    return nums;
};
// @lc code=end

