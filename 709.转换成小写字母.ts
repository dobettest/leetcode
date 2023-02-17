/*
 * @lc app=leetcode.cn id=709 lang=typescript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
function toLowerCase(s: string): string {
    return s.replace(/([A-Z])/g, function replacer(raw: string, $1: string) {
        let index = $1.charCodeAt(0) + 32;
        return String.fromCharCode(index);
    })
};
// @lc code=end

