/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
    const rows: number[][] = [];
    for (let i = 0; i < numRows; i++) {
        let cols: number[] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                cols.push(1)
            } else {
                cols.push(rows[i - 1][j - 1] + rows[i - 1][j])
            }
        }
        rows.push(cols)
    }
    return rows;
};
// @lc code=end

