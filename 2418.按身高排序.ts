/*
 * @lc app=leetcode.cn id=2418 lang=typescript
 *
 * [2418] 按身高排序
 */

// @lc code=start
function sortPeople(names: string[], heights: number[]): string[] {
    const sorted = names.map((item, i) => [item, heights[i]]).sort((a: any, b: any) => b[1] - a[1]);
    const ans: string[] = sorted.map((item: any[]) => item[0])
    return ans;
};
// @lc code=end

