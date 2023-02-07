/*
 * @lc app=leetcode.cn id=2243 lang=typescript
 *
 * [2243] 计算字符串的数字和
 */

// @lc code=start
function digitSum(s: string, k: number): string {
    if (s.length <= k) {
        return s;
    }
    const len: number = s.length;
    let str: string = "";
    for (let i = 0; i < len; i += k) {
        let sum = 0;
        let j = 0;
        while (i + j < len && j < k) {
            sum += Number(s[i+j]);
            j++;
        }
        str += sum;
    }
    return digitSum(str, k);
};
// @lc code=end

