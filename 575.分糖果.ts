/*
 * @lc app=leetcode.cn id=575 lang=typescript
 *
 * [575] 分糖果
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
    let k: number = 0;
    candyType.sort((a, b) => a - b)
    for (let i = 0; i < candyType.length; i++) {
        if (candyType[i] !== candyType[k]) {
            candyType[++k] = candyType[i];
        }
    }
    return Math.min((candyType.length / 2) >> 0, k + 1);
};
// @lc code=end

