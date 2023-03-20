/*
 * @lc app=leetcode.cn id=1071 lang=typescript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let gcd = (a: number, b: number) => {
        while (b) {
            let r = b;
            b = a % b;
            a = r;
        }
        return a;
    }
    return str1.substring(0, gcd(str1.length, str2.length));
};
// @lc code=end

