/*
 * @lc app=leetcode.cn id=821 lang=typescript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
function shortestToChar(s: string, c: string): number[] {
    const ans: number[] = [];
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (s[left] !== c && left > 0) {
            left--;
        }
        while (s[right] !== c && right < s.length) {
            right++;
        }
        if (s[left] === c && s[right] === c) {
            ans.push(Math.min(i - left, right - i))
        } else if (s[left] === c) {
            ans.push(i - left)
        } else if (s[right] === c) {
            ans.push(right - i)
        }
    }
    return ans;
};
// @lc code=end

