/*
 * @lc app=leetcode.cn id=1832 lang=typescript
 *
 * [1832] 判断句子是否为全字母句
 */

// @lc code=start
function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) {
        return false;
    }
    return new Set(sentence).size === 26
};
// @lc code=end

