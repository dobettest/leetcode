/*
 * @lc app=leetcode.cn id=2404 lang=typescript
 *
 * [2404] 出现最频繁的偶数元素
 */

// @lc code=start
function mostFrequentEven(nums: number[]): number {
    let count: Object = {};
    let result: number = -1;
    for (const item of nums) {
        if (count[item]) {
            count[item] = ++count[item];
        } else if (item % 2 === 0) {
            count[item] = 1;
        }
    }
    const arr: [string, number][] = Object.entries(count);
    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return Number(a[0]) - Number(b[0]);
        }
        return b[1] - a[1]
    });
    return arr.length ? Number(arr[0][0]) : -1;
};
// @lc code=end

