/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
function can() {

}
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const sum: number = flowerbed.reduce((a, b) => a + b);
    const len: number = flowerbed.length;
    for (let i = 0; i < len; i++) {
        const condition1: boolean = i === 0 && flowerbed[i + 1] !== 1;
        const condition2: boolean = i === len - 1 && flowerbed[i - 1] !== 1;
        const condition3: boolean = i !== 0 && i !== len - 1 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1;
        if (condition1 || condition2 || condition3) {
            flowerbed[i] = 1;
        }
    }
    const count: number = flowerbed.reduce((a, b) => a + b);
    console.log(flowerbed, count, sum)
    return count - sum >= n;
};
// @lc code=end

