/*
 * @lc app=leetcode.cn id=2264 lang=typescript
 *
 * [2264] 字符串中最大的 3 位相同数字
 */

// @lc code=start
function largestGoodInteger(num: string): string {
    let arr: string[] = ["999", "888", "777", "666", "555", "444", "333", "222", "111", "000"];
    for (let s of arr) {
        if (num.indexOf(s) >= 0) return s;
    }
    return "";
};
// @lc code=end

