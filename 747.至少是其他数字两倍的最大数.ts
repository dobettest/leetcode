/*
 * @lc app=leetcode.cn id=747 lang=typescript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        let j = 0;
        for (; j < nums.length; j++) {
            if (i === j) {
                continue;
            }
            if (nums[i] < nums[j] * 2) {
                break;
            }
        }
        if (j === nums.length) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

