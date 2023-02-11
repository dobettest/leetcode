/*
 * @lc app=leetcode.cn id=1796 lang=typescript
 *
 * [1796] 字符串中第二大的数字
 */

// @lc code=start
function secondHighest(s: string): number {
    const nums = s.match(/\d/g) || [];
    if (nums.length < 2) {
        return -1;
    }
    nums.sort((a: any, b: any) => a - b);
    let ans = nums.length - 2;
    while (ans >= 0 && nums[ans] === nums[nums.length - 1]) {
        ans--;
    }
    return ans >= 0 ? nums[ans] as any : -1;

};
// @lc code=end

