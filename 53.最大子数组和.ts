/*
 * @lc app=leetcode.cn id=53 lang=typescript
 * 
 * [53] 最大子数组和
 */
/**
 * 
 * @answer 使用滑动窗口，如果当前元素之前的累加窗口值小于当前元素，则此窗口内最大和则为当前元素
 */
// @lc code=start

function maxSubArray(nums: number[]): number {
    let len = nums.length;
    let ans = Number.NEGATIVE_INFINITY;
    let cwd = 0;
    for (let i = 0; i < len; i++) {
        cwd += nums[i];
        if (cwd <= nums[i]) {
            cwd = nums[i];
        }
        ans = Math.max(cwd, ans);
    }
    return ans;
};
// @lc code=end


