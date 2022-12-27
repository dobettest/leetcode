/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length&&Math.abs(i-j)<=k;j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }
    return false;
};
// @lc code=end

