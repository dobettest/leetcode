/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let i: number = 0;
    let pre: number = 0;
    let str: string = "";
    while (i < a.length || i < b.length || pre) {
        let j: number = 0;
        let k: number = 0;
        if (a.length > i) {
            j = Number(a[a.length - i - 1]);
        }
        if (b.length > i) {
            k = Number(b[b.length - i - 1])
        }
        str = (pre + j + k) % 2 + str;
        pre = (pre + j + k) >>> 1;
        i++;
    }
    return str;
};
// @lc code=end

