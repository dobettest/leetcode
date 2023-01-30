/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
    let result: number = x ^ y;
    let num: number = 0;
    console.log(result.toString(2))
    while (result) {
        if (result & 1) {
            num++;
        }
        result >>= 1;
    }
    return num;
};
// @lc code=end

