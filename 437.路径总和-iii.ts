/*
 * @lc app=leetcode.cn id=437 lang=typescript
 *
 * [437] 路径总和 III
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
function rootSum(root: TreeNode | null, targetSum: number): number {
    if (root===null) {
        return 0;
    }

    let ret = 0;
    if (root.val === targetSum) {
        ret++;
    }

    ret += rootSum(root.left, targetSum - root.val);
    ret += rootSum(root.right, targetSum - root.val);
    return ret;
}
function pathSum(root: TreeNode | null, targetSum: number): number {
    if (root === null) {
        return 0;
    }
    return rootSum(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};
// @lc code=end

