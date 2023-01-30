/*
 * @lc app=leetcode.cn id=1071 lang=typescript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
    const reg: RegExp = /([A-Z]+)+/g;
    const substr1: string = str1.match(reg)?.[0] ?? "";
    const substr2: string = str2.match(reg)?.[0] ?? "";

    return substr1.length < substr2.length ? substr1 : substr2;
};
// @lc code=end

