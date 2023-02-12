/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function checker(n: number, set: Set<number>) {
    if (n <= 1) {
        return true;
    }
    if (set.has(n)) {
        return false;
    }
    set.add(n);
    let s = n;
    let ans = 0;
    while (s >= 1) {
        const r: number = s % 10;
        s = Math.floor(s / 10);
        ans += Math.pow(r, 2);
    }
    return checker(ans, set);
}
function isHappy(n: number): boolean {
    const s = new Set<number>();
    return checker(n, s);
};
// @lc code=end

