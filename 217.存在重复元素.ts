/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    return nums.findIndex((item,index)=>nums.lastIndexOf(item)!==index)!==-1;
};
// @lc code=end

