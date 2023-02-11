/*
 * @lc app=leetcode.cn id=2124 lang=typescript
 *
 * [2124] 检查是否所有 A 都在 B 之前
 */

// @lc code=start
function checkString(s: string): boolean {
    return /^(a+)?(b+)?$/.test(s)
};
// @lc code=end

