/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const ans: number[] = [];
    for (let i = 0; i < nums1.length; i++) {
        let start = nums2.indexOf(nums1[i]);
        let index = start;
        for (let j = start + 1; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                index = j;
                break;
            }
        }
        ans.push(index > start ? nums2[index] : -1);
    }
    return ans;
};
// @lc code=end

