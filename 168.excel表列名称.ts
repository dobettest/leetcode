/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    const codes: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ans: string = "";
    while (columnNumber) {
        let r: number = columnNumber % 26;
        if (r === 0) {
            r = 26;
            columnNumber -= 1;
        }
        ans = codes[r - 1] + ans;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return ans;
};
// @lc code=end

