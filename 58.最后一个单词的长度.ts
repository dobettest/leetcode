/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    const newArr=s.trimEnd().split(/\s+/);
    return newArr[newArr.length-1].length;
};
// @lc code=end

