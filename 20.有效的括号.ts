/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char: string = s[i];
        switch (char) {
            case ')':
                if (stack[stack.length - 1] === '(') {
                    stack.pop();
                }else{
                    stack.push(char)
                }
                break;
            case ']':
                if (stack[stack.length - 1] === '[') {
                    stack.pop();
                }else{
                    stack.push(char)
                }
                break;
            case '}':
                if (stack[stack.length - 1] === '{') {
                    stack.pop();
                }else{
                    stack.push(char)
                }
                break;
            default:
                stack.push(char)
                break;
        }
    }
    return stack.length===0;
};
// @lc code=end

