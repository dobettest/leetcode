/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
    if (root === null) {
        return [];
    }
    const ans: string[] = [];
    if (root.left || root.right) {
        binaryTreePaths(root.left).forEach((item) => {
            ans.push(`${root.val}->${item}`)
        })
        binaryTreePaths(root.right).forEach((item) => {
            ans.push(`${root.val}->${item}`);
        })
    } else {
        ans.push(`${root.val}`)
    }
    return ans;
};
// @lc code=end

