/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
    const newArr = nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += newArr[i];
        }
    }
    return sum;
};
// @lc code=end

