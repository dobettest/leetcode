/*
 * @lc app=leetcode.cn id=1009 lang=typescript
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
function bitwiseComplement(n: number): number {
    const str: string = n.toString(2);
    let sum: number = 0;
    let result: number = 0;
    let len: number = str.length;
    for (let i = len - 1; i >= 0 && sum <= n; i--) {
        let num = Number(str[i]);
        sum = sum + num * (1 << len - 1 - i);
        result = result + Math.abs(num - 1) * (1 << len - 1 - i);
    }
    return result;
};
// @lc code=end

