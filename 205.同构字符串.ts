/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    let n = s.length;
    let s2t: Map<string, string> = new Map<string, string>();
    let t2s: Map<string, string> = new Map<string, string>();
    for (let i = 0; i < n; i++) {
        const c1 = s.charAt(i);
        const c2 = t.charAt(i);
        if ((s2t.has(c2) && s2t.get(c2) !== c1) || (t2s.has(c1) && t2s.get(c1) !== c2)) {
            return false;
        } else {
            s2t.set(c2, c1);
            t2s.set(c1, c2);
        }
    }
    return true;
};
// @lc code=end

