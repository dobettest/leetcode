/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) {
        return true;
    }
    let count: number = 0;
    for (let i = 0; i < s1.length; i++) {
        let j = i + 1;
        if (s1[i] !== s2[i]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
        while (j < s1.length) {
            if (s1[i] === s2[j] && s1[j] === s2[i] && s1.slice(i + 1, j) === s2.slice(i + 1, j)) {
                console.log(i, j, s1.slice(i + 1, j))
                return true;
            }
            j++;
        }
    }
    return false;
};
// @lc code=end

