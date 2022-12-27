/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
    let len: number = s.length;
    let set = new Set<string>()
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        for (; j < len; j++) {
            if (set.has(s[i])) {
                break;
            } else {
                set.add(s[j])
            }
        }
        if (j === len) {
            return i;
        }
        console.log(s[i], j)
    }
    return -1;
};
// @lc code=end

