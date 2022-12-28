/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
    return s.split('').findIndex((item)=>s.indexOf(item)===s.lastIndexOf(item))
};
// @lc code=end

