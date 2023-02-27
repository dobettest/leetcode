/*
 * @lc app=leetcode.cn id=2490 lang=typescript
 *
 * [2490] 回环句
 */

// @lc code=start
function isCircularSentence(sentence: string): boolean {
    let sentences = sentence.match(/([a-zA-Z]+)(?=\s)?/g) || [];
    if (sentences.length === 1) {
        const str = sentences[0];
        return str[0] === str[str.length - 1];
    }
    for (let i = 0; i < sentences.length; i++) {
        const str = sentences[i];
        if (i < sentences.length - 1 && str[str.length - 1] !== sentences[i + 1][0]) {
            return false;
        }
        if (i === sentences.length - 1 && str[str.length - 1] !== sentences[0]?.[0]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

