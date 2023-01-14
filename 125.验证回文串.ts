/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const string: string = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

