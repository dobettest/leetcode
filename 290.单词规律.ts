/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    const matched = s.match(/([a-zA-Z]+)(?=\s)?/g) || [];
    if (pattern.length !== matched.length) {
        return false;
    }
    const s1 =new Map();
    const s2 =new Map();
    for (let i = 0; i < pattern.length; i++) {
        if (s1.has(pattern[i]) || s2.has(matched[i])) {
            if (s1.get(pattern[i]) !== matched[i] || s2.get(matched[i]) !== pattern[i]) {
                return false;
            }
        } else {
            s1.set(pattern[i], matched[i]);
            s2.set(matched[i],pattern[i]);
        }
    }
    return true;
};
// @lc code=end

