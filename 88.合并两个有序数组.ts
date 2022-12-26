/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for(let i=0;i<n;i++){
        let j=0;
        while(nums2[i]>nums1[j]&&j<m+i){
            j++;
        }
        nums1.splice(j,0,nums2[i])
    }
    nums1.splice(m+n)
};
// @lc code=end

