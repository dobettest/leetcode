/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
function count(string: string): object {
    const obj = {};
    for (let char of string) {
        if (obj[char]) {
            obj[char] = ++obj[char]
        } else {
            obj[char] = 1;
        }
    }
    return obj;
}
function commonChars(words: string[]): string[] {
    const counts = words.map(count);
    const min = (char: string): number => Math.min(...counts.map((item) => item[char] ?? 0))
    const result: object = {};
    for (const char of words[0]) {
        result[char] = min(char)
    }
    return Object.entries(result).reduce((arr: string[], [key, value]) => {
        return arr.concat(new Array(value).fill(key));
    }, []);
};
// @lc code=end

