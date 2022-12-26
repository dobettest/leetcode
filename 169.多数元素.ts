/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const k=Math.ceil(nums.length/2);
    const map={};
    for(let i=0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]]=1;
        }else{
            map[nums[i]]=++map[nums[i]];
        }
        if(map[nums[i]]>=k){
            //考虑需要加入最后一个元素才有这个元素的情况
            return nums[i];
        }
    }
};
// @lc code=end

