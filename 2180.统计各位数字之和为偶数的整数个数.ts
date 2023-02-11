/*
 * @lc app=leetcode.cn id=2180 lang=typescript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
function countEven(num: number): number {
    let count: number = 0;
    for (let i = 1; i <= num; i++) {
        let j = i;
        let s: number = 0;
        while (j >= 1) {
            let r = j % 10;
            j = Math.floor(j / 10);
            s += r;
        }
        if (s % 2 === 0) {
            count++;
        }
    }
    return count;
};
// @lc code=end

