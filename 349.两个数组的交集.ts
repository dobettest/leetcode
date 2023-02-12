/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = [];
    for (const item of nums1) {
        if (ans.includes(item)) {
            continue;
        }
        for (const num of nums2) {
            if (ans.includes(num)) {
                continue;
            }
            if (num === item) {
                ans.push(num)
            }
        }
    }
    return ans;
};
// @lc code=end

