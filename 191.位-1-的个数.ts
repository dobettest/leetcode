/*
 * @lc app=leetcode.cn id=191 lang=typescript
 *
 * [191] 位1的个数
 */

// @lc code=start
function hammingWeight(n: number): number {
    let count: number = 0;
    while (n) {
        if (n & 1) {
            count++;
        }
        n = n >>> 1;
    }
    return count;
};
// @lc code=end

