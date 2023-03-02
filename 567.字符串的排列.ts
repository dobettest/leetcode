/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
    const sorted_s1 = [...s1].sort().join('');
    const s1_len = s1.length;
    const s2_len = s2.length;
    for (let i = 0; i < s2_len; i++) {
        if (s1.includes(s2[i]) === false) {
            continue;
        }
        if (s2_len - i < s1_len) {
            return false;
        }
        let str: string[] = [];
        for (let j = 0; j < s1_len; j++) {
            if (s1.includes(s2[i + j]) === false) {
                break;
            }
            str.push(s2[i + j]);
        }
        if (str.sort().join('') === sorted_s1) {
            return true;
        }
    }
    return false;
};
// @lc code=end

