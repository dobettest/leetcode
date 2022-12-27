/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
    const sum=(1+nums.length)*nums.length/2;
    const total=nums.reduce((a,b)=>a+b);
    return sum - total;
};
// @lc code=end

