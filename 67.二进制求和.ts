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
    while (i < a.length || i < b.length) {
        let j: number = 0;
        let k: number = 0;
        if (a.length > i) {
            j = Number(a[a.length - i - 1]);
        }
        if (b.length > i) {
            k = Number(b[b.length - i - 1])
        }
        str = (pre + j + k) % 2 + str;
        pre = (pre + j + k)>>>1;
        i++;
    }
    //最后一个需要进位的话因为跳出了循环需要继续加上去
    return pre ? pre + str : str;
};
// @lc code=end

