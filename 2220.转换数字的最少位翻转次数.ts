/*
 * @lc app=leetcode.cn id=2220 lang=typescript
 *
 * [2220] 转换数字的最少位翻转次数
 */

// @lc code=start
function minBitFlips(start: number, goal: number): number {
    let count: number = 0;
    while (start || goal) {
        let x = start & 1;
        let y = goal & 1;
        if (x !== y) {
            count++;
        }
        start >>= 1;
        goal >>= 1;
    }
    return count;
};
// @lc code=end

