/*
 * @lc app=leetcode.cn id=2148 lang=typescript
 *
 * [2148] 元素计数
 */

// @lc code=start
function countElements(nums: number[]): number {
    if (nums.length < 3) {
        return 0;
    }
    nums.sort((a, b) => a - b);
    const len: number = nums.length;
    let min = 0;
    let max = len - 1;
    for (; min <= max;) {
        if (nums[min] === nums[0]) {
            min++;
            continue;
        }
        if (nums[max] >= nums[len - 1]) {
            max--;
            continue;
        }
        if (min <= max) {
            return max - min + 1;
        }
        max--;
        min++;
    }
    return 0;
};
// @lc code=end

