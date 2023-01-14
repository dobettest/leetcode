/*
 * @lc app=leetcode.cn id=190 lang=typescript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
function reverseBits(n: number): number {
    let result: number = 0;
    let offset: number = 31;
    while (offset >= 0) {
        let bit: number = n & 1;
        result += bit * Math.pow(2, offset);
        n = n >> 1;
        offset--;
    }
    return result;
};
// @lc code=end

