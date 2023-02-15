/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
    if (s.length < 2 || goal.length < 2 || s.length !== goal.length) {
        return false;
    }
    if (s === goal) {
        return /([a-z])([a-z]+)?\1/.test(s)
    }
    let count: number = 0;
    for (let i = 0, k = s.length - 1; i <= k; i++) {
        if (s[i] === goal[i]) {
            continue;
        }
        if (s[k] === goal[k]) {
            k--;
            continue;
        }
        if (i === k || ++count >= 2) {
            return false;
        }
        if (s[i] === goal[k] && s[k] === goal[i] && s.slice(i + 1, k) === goal.slice(i + 1, k)) {
            return true;
        }
    }
    console.log(s,'$$$$',  goal)
    return true;
};
// @lc code=end

