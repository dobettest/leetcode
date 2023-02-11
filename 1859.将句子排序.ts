/*
 * @lc app=leetcode.cn id=1859 lang=typescript
 *
 * [1859] 将句子排序
 */

// @lc code=start
function sortSentence(s: string): string {
    return s.split(' ').sort((a: any, b: any) => a.slice(-1) - b.slice(-1)).map((item) => item.slice(0, -1)).join(' ');
};
// @lc code=end

