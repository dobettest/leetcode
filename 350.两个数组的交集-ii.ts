/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = [];
    for (let i = 0; i < nums1.length; i++) {
        let j = nums2.length - 1;
        while (j >= 0) {
            if (nums2[j] === nums1[i]) {
                ans.push(nums1[i]);
                nums2.splice(j, 1);
                break;
            }
            j--;
        }
    }
    return ans;
};
// @lc code=end

