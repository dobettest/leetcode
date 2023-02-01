/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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
function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum: number = 0;
    if (root === null) {
        return 0;
    }
    let q: TreeNode = root.left;
    let p: TreeNode = root.right;
    if (q && q.left === null && q.right === null) {
        sum += q.val;
    }
    return sum + sumOfLeftLeaves(q) + sumOfLeftLeaves(p);
};
// @lc code=end

