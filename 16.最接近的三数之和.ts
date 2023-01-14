/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    let latest: any = undefined;
    const len: number = nums.length;
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                const temp: number = nums[i] + nums[j] + nums[k] - target;
                if (latest !== undefined) {
                    if (Math.abs(temp) < Math.abs(latest)) {
                        latest = temp
                    }
                } else {
                    latest = temp;
                }
            }
        }
    }
    return latest + target;
};
// @lc code=end

