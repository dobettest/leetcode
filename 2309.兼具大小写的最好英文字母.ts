/*
 * @lc app=leetcode.cn id=2309 lang=typescript
 *
 * [2309] 兼具大小写的最好英文字母
 */

// @lc code=start
function greatestLetter(s: string): string {
    const sorted = [...s].sort((a, b) => {
        return a.localeCompare(b);
    });
    console.log(sorted);
    return 'a';
};
// @lc code=end

