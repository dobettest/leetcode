/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    if (n <= 2) {
        return n;
    }
    const map: Map<number, any> = new Map<number, number>()
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === 2) {
            map.set(i, i);
        } else {
            map.set(i, map.get(i - 1) + map.get(i - 2));
        }
    }
    return map.get(n)
};
// @lc code=end

