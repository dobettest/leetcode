/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    const string: string = n.toString(2);
    let count: number = 0;
    for (const item of string) {
        if (item === "1") {
            count++;
        }
    }
    return count === 1;
};
// @lc code=end

