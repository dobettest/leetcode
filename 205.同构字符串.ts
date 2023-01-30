/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    let obj = {};
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (set.has(t[i])) {
            continue;
        } else {
            obj[s[i]] = t[i];
            set.add(t[i]);
        }
    }
    console.log(obj, s.replace(/[a-zA-Z]/g, function replacer(match) {
        return obj[match] ?? match
    }))
    return s.replace(/[a-zA-Z]/g, function replacer(match) {
        return obj[match] ?? match
    }) === t
};
// @lc code=end

