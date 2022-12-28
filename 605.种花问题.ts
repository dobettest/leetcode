/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let k = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (flowerbed[i] === 1) {
            if (i - k >= 1) {
                count++;
            }
            k=i;
        }
    }
    return true;
};
// @lc code=end

