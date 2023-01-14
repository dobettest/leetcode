/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
    let r: number = 0;
    let len1 = num1.length;
    let len2 = num2.length;
    let s: string = "";
    while (len1 > 0 || len2 > 0 || r) {
        let a: number = 0;
        let b: number = 0;
        if (len1 > 0) {
            a = Number(num1[len1 - 1])
        }
        if (len2 > 0) {
            b = Number(num2[len2 - 1])
        }
        s = (a + b + r) % 10 + s;
        r = (a + b + r) > 9 ? 1 : 0;
        len1--;
        len2--;
    }
    return s;
};
// @lc code=end

