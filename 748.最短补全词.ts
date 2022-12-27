/*
 * @lc app=leetcode.cn id=748 lang=typescript
 *
 * [748] 最短补全词
 */

// @lc code=start
function count(str: string): Object {
    const map = {};
    for (let item of str) {
        if (map[item]) {
            map[item] = ++map[item]
        } else {
            map[item] = 1;
        }
    }
    return map;
}
function isOk(num: Object, counts: Object): boolean {
    let arr = Object.entries(counts);
    for (let item of arr) {
        let [key, value] = item;
        if (!num[key] || num[key] < value) {
            return false;
        }
    }
    return true;
}
function shortestCompletingWord(licensePlate: string, words: string[]): string {
    const counts = count(licensePlate.toLowerCase().replace(/[^a-zA-z]/g, ""));
    const sortWords = words.sort((a, b) => a.length - b.length);
    for (let i = 0; i < sortWords.length; i++) {
        let num = count(sortWords[i])
        if (isOk(num, counts)) {
            return sortWords[i]
        }
    }
    return "";
};
// @lc code=end

