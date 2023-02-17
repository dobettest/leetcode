/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function count(s: string) {
    const map: Map<string, any> = new Map<string, number>();
    for (const char of s) {
        if (map.has(char)) {
            let val = map.get(char)
            map.set(char, ++val);
        } else {
            map.set(char, 1);
        }
    }
    return map;
}
function canConstruct(ransomNote: string, magazine: string): boolean {
    let c1 = count(ransomNote);
    let c2 = count(magazine);
    return [...c1.keys()].every((key => (c2.get(key) ?? 0) >= (c1.get(key) ?? 0)));
};
// @lc code=end

