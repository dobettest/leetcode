/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 */

// @lc code=start
function counts(string: string): object {
    const obj = {};
    for (const char of string) {
        if (obj[char]) {
            obj[char] = ++obj[char]
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}
function findTheDifference(s: string, t: string): string {
    const num1 = counts(s);
    const num2 = counts(t);
    for (const char in num2) {
        if (num1[char] === undefined || num2[char] > num1[char]) {
            return char;
        }
    }
    return ""
};
// @lc code=end

