/*
 * @lc app=leetcode.cn id=2259 lang=typescript
 *
 * [2259] 移除指定数字得到的最大结果
 */

// @lc code=start
function removeDigit(number: string, digit: string): string {
    let ans: string = "";
    let str: string = "";
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let temp = str + number.slice(i + 1);
            if (temp > ans) {
                ans = temp;
            }
        }
        str += number[i];
    }
    return ans;
};
// @lc code=end

