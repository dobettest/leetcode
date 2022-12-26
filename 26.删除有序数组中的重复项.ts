/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let count=0;
    const map=new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            continue;
        }else{
            nums[count++]=nums[i];
            map.set(nums[i],true)
        }
    }
    return map.size;
};
// @lc code=end

