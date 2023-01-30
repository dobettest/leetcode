/*
 * @lc app=leetcode.cn id=520 lang=typescript
 *
 * [520] 检测大写字母
 */

// @lc code=start
function detectCapitalUse(word: string): boolean {
    return /^[A-Z]?(([a-z]+)|([A-Z]+))$/.test(word)
};
// @lc code=end

