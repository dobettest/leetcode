/*
 * @lc app=leetcode.cn id=2089 lang=typescript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
function targetIndices(nums: number[], target: number): number[] {
    nums.sort((a, b) => a - b);
    return nums.map((item, i) => item === target ? i : undefined).filter((item: any) => typeof item === 'number') as number[];
};
// @lc code=end

