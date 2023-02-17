/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
    const map = new Map();
    for (const [i, num] of nums.entries()) {
        if (map.has(num)) {
            let [count, start] = map.get(num);
            map.set(num, [++count, start, i]);
        } else {
            map.set(num, [1, i, i]);
        }
    }
    let maxNum = 0;
    let minLen = nums.length;
    for (const [count, start, end] of map.values()) {
        if (count >= maxNum) {
            if (count > maxNum) {
                maxNum = count;
                minLen = end - start + 1;
            } else {
                minLen = Math.min(minLen, end - start + 1);
            }
        }
    }
    return minLen;
};
// @lc code=end

