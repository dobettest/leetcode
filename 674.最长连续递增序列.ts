/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
    const arr:number[]=[];
    let maxLen=0;
    for(let i=0;i<nums.length;i++){
        if(arr.length&&nums[i]<=arr[arr.length-1]){
            arr.length=0;
            arr.push(nums[i]);
        }else{
            arr.push(nums[i]);
        }
        maxLen=Math.max(maxLen,arr.length);
    }
    return maxLen;
};
// @lc code=end

