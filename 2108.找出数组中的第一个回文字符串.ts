/*
 * @lc app=leetcode.cn id=2108 lang=typescript
 *
 * [2108] 找出数组中的第一个回文字符串
 */

// @lc code=start
function firstPalindrome(words: string[]): string {
    const fn = (word: string) => (word.split('').reverse().join('') === word);
    return words.filter(fn)?.[0] ?? "";
};
// @lc code=end

