/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    const str:string = x.toString();
    const len: number = str.length;
    const symbol:number = str.startsWith("-")?-1:1;
    let sum: number = 0;
    let s:string="";
    for (let i = len - 1; i >= 0; i--) {
        if (str[i] === '-') {
            break;
        }
        s+=str[i];
        sum = sum * 10 + Number(str[i]);
    }
    sum*=symbol;
    if(sum<=Math.pow(-2,31)||sum>=Math.pow(2,31)-1){
        return 0;
    }
    return symbol*Number(s);
};
// @lc code=end

