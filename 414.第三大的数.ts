/*
 * @lc app=leetcode.cn id=414 lang=typescript
 *
 * [414] 第三大的数
 */

// @lc code=start
function thirdMax(nums: number[]): number {
    const newArr:number[]=nums.sort((a,b)=>b-a);
    let threeMax:any=undefined;
    let count:number=0;
    for(let i=0;i<newArr.length;i++){
        if(newArr[i]===threeMax){
            continue;
        }else{
            threeMax=newArr[i];
            count++;
        }
        if(count>2){
            return threeMax;
        }
    }
    return newArr[0];
};
// @lc code=end

