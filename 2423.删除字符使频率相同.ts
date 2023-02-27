/*
 * @lc app=leetcode.cn id=2423 lang=typescript
 *
 * [2423] 删除字符使频率相同
 */

// @lc code=start
function equalFrequency(word: string): boolean {
    const map: Map<string, number> = new Map<string, number>();
    for (const item of word) {
        if (map.has(item)) {
            let value = map.get(item) || 1;
            map.set(item, ++value);
            continue;
        }
        map.set(item, 1);
    }
    for (let [char, count] of map.entries()) {
        map.set(char, --count);
        if (new Set([...map.values()].filter(Boolean)).size === 1) {
            return true;
        }
        map.set(char, ++count);
    }
    return false;
};
// @lc code=end

