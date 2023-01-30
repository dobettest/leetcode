/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 */

// @lc code=start
function countBits(n: number): number[] {
    let ans: number[] = [];
    for (let i = 0; i <= n; i++) {
        let count: number = 0;
        let j: number = i;
        while (j) {
            if (j & 1) {
                count++;
            }
            j >>= 1;
        }
        ans.push(count)
    }
    return ans;
};
// @lc code=end

