/*
 * @lc app=leetcode.cn id=463 lang=typescript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
    let ans: number = 0;
    const row: number = grid.length;
    for (let i = 0; i < row; i++) {
        const col = grid[i].length;
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 0) {
                continue;
            }
            const left = grid[i]?.[j - 1] ? 0 : 1;
            const right = grid[i]?.[j + 1] ? 0 : 1;
            const top = grid[i - 1]?.[j] ? 0 : 1;
            const bottom = grid[i + 1]?.[j] ? 0 : 1;
            ans += (top + right + bottom + left);
        }

    }
    return ans;
};
// @lc code=end

