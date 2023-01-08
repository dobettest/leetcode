/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    let len:number=nums.length;
    let result:number[][]=[];
    for(let i=0;i<(1<<len);i++){
        const temp:number[]=[];
        for(let j=i;j<len;j++){
            temp.push(nums[j]);
            result.push(temp)
        }
    }
    return result;
};
// @lc code=end

