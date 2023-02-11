/*
 * @lc app=leetcode.cn id=2085 lang=typescript
 *
 * [2085] 统计出现过一次的公共字符串
 */

// @lc code=start
function countWords(words1: string[], words2: string[]): number {
    const c1 = {};
    const c2 = {};
    let ans: number = 0;
    for (const item of words1) {
        if (c1[item]) {
            c1[item] = ++c1[item]
        } else {
            c1[item] = 1;
        }
    }
    for (const item of words2) {
        if (c2[item]) {
            c2[item] = ++c2[item]
        } else {
            c2[item] = 1;
        }
    }
    for (const item of words1) {
        if (c1[item] && c1[item] === 1 && c2[item] && c2[item] === 1) {
            ans++;
        }
    }
    return ans;
};
// @lc code=end

