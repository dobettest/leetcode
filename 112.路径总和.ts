/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getPaths(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    if (root && root.left === null && root.right === null) {
        return [root.val];
    }
    const ans: number[] = [];
    if (root.left || root.right) {
        getPaths(root.left).forEach((item) => {
            ans.push(root.val + item)
        })
        getPaths(root.right).forEach((item) => {
            ans.push(root.val + item)
        })
    }
    return ans;
}
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    return getPaths(root).indexOf(targetSum) !== -1;
};
// @lc code=end

