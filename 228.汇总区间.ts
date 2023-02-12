/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    const len = nums.length;
    const ans: string[] = [];
    let start = -1;
    for (let i = 0; i < len; i++) {
        if (i <= start) {
            continue;
        }
        let end = i;
        while (end < len) {
            if (end === len - 1 || nums[end] !== nums[end + 1] - 1) {
                break;
            }
            end++;
        }
        if (i === end) {
            ans.push(`${nums[end]}`)
        } else {
            ans.push(`${nums[i]}->${nums[end]}`)
        }
        start = end;
    }
    return ans;
};
// @lc code=end

