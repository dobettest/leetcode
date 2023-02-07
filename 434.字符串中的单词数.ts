/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
    const reg: RegExp = /(\s+)?[^\s]+(\s+)?/g;
    return s.match(reg)?.length ?? 0;
};
// @lc code=end

