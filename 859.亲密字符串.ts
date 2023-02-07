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
    let count: number = 0;
    let i = 0, k = s.length - 1
    for (; i <= k; i++) {
        if (s[i] === goal[i]) {
            continue;
        }
        if (s[k] === goal[k]) {
            k--;
            continue;
        }
        if (++count >= 2) {
            return false;
        }
        if (i !== k) {
            let str = [...s];
            let temp = str[i];
            str[i] = str[k];
            str[k] = temp;
            if (str.join('') === goal) {
                return true;
            }
        }
    }
    return i === k && new Set(s).size < s.length;
};
// @lc code=end

