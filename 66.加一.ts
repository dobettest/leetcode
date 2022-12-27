/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let pre = 1;
    let len = digits.length;
    let result: number[] = [...digits];
    for (let i = 0; i < digits.length && pre !== 0; i++) {
        const num: number = result[len - 1 - i] + pre;
        result[len - 1 - i] = num % 10;
        pre = Math.floor(num / 10)
    }
    if (pre) {
        result.unshift(1);
    }
    return result;
};
// @lc code=end

