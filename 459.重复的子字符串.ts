/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    const reg: RegExp = /^(\w+)(\1)+$/;
    return reg.test(s);
};
// @lc code=end

