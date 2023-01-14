/*
 * @lc app=leetcode.cn id=258 lang=typescript
 *
 * [258] 各位相加
 */

// @lc code=start
function sum(num: number): number {
    let s: number = 0;
    while (num >= 1) {
        s += (num % 10);
        num = Math.floor(num / 10);
    }
    return s;
}
function addDigits(num: number): number {
    const number: number = sum(num);
    return number < 10 ? number : addDigits(number);
};
// @lc code=end

