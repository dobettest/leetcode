/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ans: number[][] = [];
    let len: number = nums.length;
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) {
            return ans;
        }
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                let res = [nums[i], nums[j], nums[k]];
                ans.push(res)
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) j++;
            }
        }
    }
    return ans;

};
// @lc code=end

