/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {
    let left = 0;
    let right = x;
    let ans = 0;
    while (left <= right) {
        let mid = (left + right) >>> 1;
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

