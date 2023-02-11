/*
 * @lc app=leetcode.cn id=2114 lang=typescript
 *
 * [2114] 句子中的最多单词数
 */

// @lc code=start
function mostWordsFound(sentences: string[]): number {
    const reg = /\s?[a-zA-Z']+\s?/g;
    const arr = sentences.map((item) => item.match(reg)?.length ?? 0);
    return Math.max(...arr);
};
// @lc code=end

