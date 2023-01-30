/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
    let preNum: number = n & 1;
    while (n) {
        n >>= 1;
        let curr: number = n & 1;
        if (preNum === curr) {
            return false;
        }
        preNum = curr;
    }
    return true;
};
// @lc code=end

