/*
 * @lc app=leetcode.cn id=2224 lang=typescript
 *
 * [2224] 转化时间需要的最少操作数
 */

// @lc code=start
function convertTime(current: string, correct: string): number {
    const [h, m] = current.split(":").map(Number);
    const [H, M] = correct.split(":").map(Number);
    let reduce = (H - h) * 60 + (M - m);
    let count = 0;
    while (reduce >= 60) {
        reduce -= 60;
        count++;
    }
    while (reduce >= 15) {
        count++;
        reduce -= 15;
    }
    while (reduce >= 5) {
        count++;
        reduce -= 5;
    }
    while (reduce >= 1) {
        count++;
        reduce--;
    }
    return count;
};
// @lc code=end

