/*
 * @lc app=leetcode.cn id=441 lang=typescript
 *
 * [441] 排列硬币
 */

// @lc code=start
function arrangeCoins(n: number): number {
    if (n === 1) {
        return 1;
    }
    let i = 1;
    for (; (1 + i) * i / 2 <= n;) {
        i++;
    }
    return i - 1;
};
// @lc code=end

