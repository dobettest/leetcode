/*
 * @lc app=leetcode.cn id=507 lang=typescript
 *
 * [507] 完美数
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
    if (num === 1) {
        return false;
    }
    let sum: number = 1;
    let d: number = 2;
    while (d * d <= num) {
        if (num % d === 0) {
            sum += d;
            if (d * d < num) {
                sum += Math.floor(num / d)
            }
            console.log(d)
        }
        d++;
    }
    return sum === num;
};
// @lc code=end

