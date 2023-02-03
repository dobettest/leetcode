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
    let count = 0;
    for (let i = 0, k = s.length - 1; i < k; i++) {
        if (s[i] === goal[i]) {
            continue;
        }
        if (s[k] === goal[k]) {
            k--;
            continue;
        }
        if (++count > 2) {
            return false;
        }
        let str = [...s];
        let temp = str[i];
        str[i] = str[k];
        str[k] = temp;
        if (str.join('') === goal) {
            return true;
        }
    }
    return count === 2 && s === goal;
};
// @lc code=end

