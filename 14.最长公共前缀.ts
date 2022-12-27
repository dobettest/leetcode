/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let longStr:string="";
    const char:string=strs[0]
    for(let i:number=0;i<char.length;i++){
        longStr+=char[i];
        if(!strs.every((str)=>str.startsWith(longStr))){
            return longStr.slice(0,-1);
        }
    }
    return longStr??"";
};
// @lc code=end

