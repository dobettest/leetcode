/*
 * @lc app=leetcode.cn id=896 lang=typescript
 *
 * [896] 单调数列
 */

// @lc code=start
function isMonotonic(nums: number[]): boolean {
    let inc: boolean = true;
    let dec: boolean = true;
    const len: number = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] > nums[i - 1]) {
            dec = false;
        }
        if (i > 0 && nums[i] < nums[i - 1]) {
            inc = false;
        }
    }
    return inc || dec;
};
// @lc code=end

