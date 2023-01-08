/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function isValid(stack:string[]):boolean {
    for(const item of stack){
        if(item===')'){
            if(stack[stack.length-1]!=='('){
                return false;
            }
        }else{
            stack.pop();
        }
    }
    return stack.length===0;
}
function generateParenthesis(n: number): string[] {
    const result:string[]=[];
    for(let i=0;i<2*n-1;i++){
        let stack:string[]=[];
        for(let j=i;j<2*n-1;j++){

        }
    }
    return result;
};
// @lc code=end

