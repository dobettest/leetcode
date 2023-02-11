/*
 * @lc app=leetcode.cn id=2169 lang=typescript
 *
 * [2169] 得到 0 的操作数
 */

// @lc code=start
function countOperations(num1: number, num2: number): number {
    let count: number = 0;
    while (num1 > 0 && num2 > 0) {
        count++;
        if (num1 >= num2) {
            num1 -= num2;
            continue;
        }
        if (num2 >= num1) {
            num2 -= num1;
            continue;
        }
    }
    return count;
};
// @lc code=end

