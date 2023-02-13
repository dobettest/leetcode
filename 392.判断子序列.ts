/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    let lastIndex = -1;
    if (t.includes(s)) {
        return true;
    }
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i], lastIndex + 1)
        if (index <= lastIndex) {
            return false;
        }
        lastIndex = index;
    }
    return true;
};
// @lc code=end

