/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
    let count = {};
    let flag = false;
    let ans = 0;
    for (const item of s) {
        if (count[item]) {
            count[item] = ++count[item]
        } else {
            count[item] = 1;
        }
    }
    for (const key in count) {
        if (Object.prototype.hasOwnProperty.call(count, key)) {
            const element = count[key];
            if (element % 2 === 0) {
                ans += element;
            } else {
                if (flag) {
                    ans += element - 1;
                } else {
                    ans += element;
                    flag = true;
                }
            }
        }
    }
    return ans;
};
// @lc code=end

