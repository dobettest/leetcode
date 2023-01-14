/*
 * @lc app=leetcode.cn id=476 lang=typescript
 *
 * [476] 数字的补数
 */

// @lc code=start
function findComplement(num: number): number {
    const str: string = num.toString(2);
    let sum: number = 0;
    for (let i = str.length - 1; i >= 0 && num > 0; i--) {

        if (str.charAt(i) === '0') {
            sum += 1 << (str.length - 1 - i);
        }
        num >>> 1;
    }
    return sum;
};
// @lc code=end

