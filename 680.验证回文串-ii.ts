/*
 * @lc app=leetcode.cn id=680 lang=typescript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
function isPalindrome(s: string, low: number, high: number): boolean {
    for (let i = low, j = high; i <= j; i++, j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}
function validPalindrome(s: string): boolean {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] !== s[j]) {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1)
        }
    }
    return true;
};
// @lc code=end

