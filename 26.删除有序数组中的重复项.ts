/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===nums[count]){
            continue;
        }else{
            nums[++count]=nums[i];
        }
    }
    console.log(nums,count)
    return count+1;
};
// @lc code=end

