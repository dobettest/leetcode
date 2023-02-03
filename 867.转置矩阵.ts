/*
 * @lc app=leetcode.cn id=867 lang=typescript
 *
 * [867] 转置矩阵
 */

// @lc code=start
function transpose(matrix: number[][]): number[][] {
    const row: number = matrix.length;
    const col: number = matrix[0].length;
    const ans: number[][] = [];
    for (let i = 0; i < col; i++) {
        let arr: number[] = [];
        for (let j = 0; j < row; j++) {
            arr.push(matrix[j][i])
        }
        ans.push(arr)
    }
    return ans;
};
// @lc code=end

