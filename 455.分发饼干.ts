/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
    s.sort((a, b) => b - a);
    g.sort((a, b) => b - a);
    let lastChild: number = -1;
    let ans: number = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = lastChild + 1; j < g.length; j++) {
            if (s[i] >= g[j]) {
                lastChild = j;
                ans++;
                break;
            }
        }
    }
    return ans;
};
// @lc code=end

