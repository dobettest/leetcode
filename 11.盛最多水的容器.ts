/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let max: number = 0;
    for (let i = 0, j = height.length - 1; i < j;) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }
    return max;
};
// @lc code=end

