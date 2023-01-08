/*
 * @lc app=leetcode.cn id=201 lang=typescript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
function rangeBitwiseAnd(left: number, right: number): number {
    while (right>left) {
        right&=(right-1);
    }
    return right;
};
// @lc code=end

